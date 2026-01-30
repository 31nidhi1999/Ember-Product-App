import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class ThemeToggleComponent extends Component {
  @tracked isDark = false;

  @action
  toggleTheme(){
    this.isDark = !this.isDark;
    if (this.isDark) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }
}

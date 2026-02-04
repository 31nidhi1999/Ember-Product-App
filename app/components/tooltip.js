import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class TooltipComponent extends Component {
  @tracked visible = false;

  tooltipId = `tooltip-${Math.floor(Math.random() * 1e6)}`;

  @action
  show() {
    this.visible = true;
  }

  @action
  hide() {
    this.visible = false;
  }
}
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class TicTacToeComponent extends Component {
  @tracked board = Array(9).fill(null);

  @action
  reset() {
    this.board = Array(9).fill(null);
  }
}
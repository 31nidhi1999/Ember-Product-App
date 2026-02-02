import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class TicTacToeComponent extends Component {
  @tracked board = Array(9).fill(null);
  @tracked current = 'X';

  get currentPlayer(){
    return this.current;
  }

  checkWinner(board){
    const lines = [[0,1,2],[3,4,5,],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (let[a,b,c] of board){
      if(board[a] === board[b] && board[b]===board[c] && board[c] === board[a]){
        return board[a];
      }
      return null;
    }
  }

  @action
  reset() {
    this.board = Array(9).fill(null);
  }
}
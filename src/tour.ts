import { Piece } from './piece';

export class Pion extends Piece {
  public firstMove: boolean = true;

  canMoveTo(position: [number, number]): boolean {
    let dx = position[0] - this.position[0];
    let dy = position[1] - this.position[1];
    let direction = this.color === "Blanc" ? 1 : -1;

    if (this.firstMove) {
      this.firstMove = false;
      return (dx === 2 * direction || dx === direction) && dy === 0;
    } else {
      return dx === direction && dy === 0;
    }
  }
}
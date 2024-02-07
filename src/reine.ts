import { Piece } from './piece';

export class Reine extends Piece {
  canMoveTo(position: [number, number]): boolean {
    let dx = Math.abs(position[0] - this.position[0]);
    let dy = Math.abs(position[1] - this.position[1]);
    return dx === dy || this.position[0] === position[0] || this.position[1] === position[1];
  }
}
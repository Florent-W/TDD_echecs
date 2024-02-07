import { Piece } from './piece';

export class Roi extends Piece {
  canMoveTo(position: [number, number]): boolean {
    let dx = Math.abs(position[0] - this.position[0]);
    let dy = Math.abs(position[1] - this.position[1]);
    return dx <= 1 && dy <= 1 && (dx + dy > 0);
  }
}
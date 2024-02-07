import { Piece } from './piece';

export class Tour extends Piece {
  canMoveTo(position: [number, number]): boolean {
    return (
      this.position[0] === position[0] || this.position[1] === position[1]
    );
  }
}
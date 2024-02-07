export abstract class Piece {
    public position: [number, number];
    constructor(public readonly color: "Blanc" | "Noir", x: number, y: number) {
      this.position = [x, y];
    }
  
    abstract canMoveTo(position: [number, number]): boolean;
}
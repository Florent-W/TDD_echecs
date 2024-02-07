import { Piece } from "./piece";
import { Pion } from "./pion";
import { Reine } from "./reine";
import { Roi } from "./roi";
import { Tour } from "./tour";
import { Fou } from "./fou";
import { Cavalier } from "./cavalier";

export class Echiquier {
  private board: (Piece | null)[][];

  constructor() {
    this.board = this.createEmptyBoard();
  }

  private createEmptyBoard(): (Piece | null)[][] {
    return Array(8)
      .fill(null)
      .map(() => Array(8).fill(null));
  }

  getPieceAt(position: [number, number]): Piece | null {
    const [x, y] = position;
    return this.board[x][y];
  }

  setPieceAt(position: [number, number], piece: Piece | null): void {
    const [x, y] = position;
    this.board[x][y] = piece;
    if (piece) piece.position = [x, y];
  }

  removePieceAt(position: [number, number]): void {
    this.setPieceAt(position, null);
  }

  isPathClear(from: [number, number], to: [number, number]): boolean {
    const [fromX, fromY] = from;
    const [toX, toY] = to;
    const dx = toX - fromX;
    const dy = toY - fromY;
    const steps = Math.max(Math.abs(dx), Math.abs(dy));
    const stepX = dx / steps;
    const stepY = dy / steps;

    for (let i = 1; i < steps; i++) {
      const checkX = fromX + stepX * i;
      const checkY = fromY + stepY * i;
      if (this.getPieceAt([checkX, checkY]) !== null) {
        return false; // Obstacle trouvé
      }
    }

    return true; // Aucun obstacle trouvé
  }

  movePiece(from: [number, number], to: [number, number]): boolean {
    const piece = this.getPieceAt(from);
    if (!piece) return false; // Aucune pièce à déplacer

    // Vérifier si le mouvement est possible
    if (!piece.canMoveTo(to)) {
      return false;
    }

    // Pour les pièces autres que le Cavalier, vérifiez si le chemin est libre
    if (!(piece instanceof Cavalier) && !this.isPathClear(from, to)) {
      return false;
    }

    // Si la case de destination est vide, effectuer un déplacement
    const targetPiece = this.getPieceAt(to);
    if (!targetPiece) {
      // console.log(piece instanceof Pion, to[0], to[1]);
      // Gestion de la promotion du pion si le pion atteint l'autre extrémité de l'échiquier
      if (piece instanceof Pion && (to[0] === 0 || to[0] === 7)) {
        const promotionToPiece = new Reine(piece.color, to[0], to[1]);
        this.removePieceAt(from);
        this.setPieceAt(to, promotionToPiece);
        return true; // Promotion
      } else {
        this.removePieceAt(from);
        this.setPieceAt(to, piece);
        piece.position = to;
        return true; // Déplacement effectué
      }
    }

    // capture d'une pièce
    if (targetPiece.color !== piece.color) {
      // promotion du pion si la pièce cible est une reine
      if (piece instanceof Pion && (to[0] === 0 || to[0] === 7)) {
        const promotionToPiece = new Reine(piece.color, to[0], to[1]);
        this.removePieceAt(from);
        this.setPieceAt(to, promotionToPiece);
        return true;
      } else {
        this.removePieceAt(from);
        this.setPieceAt(to, piece);
        piece.position = to;
        return true;
      }
    }

    return false;
  }

  addPiece(piece: Piece, position: [number, number]): void {
    if (
      position[0] >= 0 &&
      position[0] < 8 &&
      position[1] >= 0 &&
      position[1] < 8
    ) {
      this.board[position[0]][position[1]] = piece;
    }
  }
}

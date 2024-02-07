import { Echiquier } from "./echiquier";
import { Roi } from "./roi";
import { Reine } from "./reine";
import { Fou } from "./fou";
import { Cavalier } from "./cavalier";
import { Tour } from "./tour";
import { Pion } from "./pion";

export class Partie {
  private echiquier: Echiquier;

  constructor() {
    this.echiquier = new Echiquier();
    this.initialiserPieces();
  }

  private initialiserPieces(): void {
    // Placer les pièces noires
    this.echiquier.addPiece(new Tour("Noir", 0, 0), [0, 0]);
    this.echiquier.addPiece(new Cavalier("Noir", 0, 1), [0, 1]);
    this.echiquier.addPiece(new Fou("Noir", 0, 2), [0, 2]);
    this.echiquier.addPiece(new Reine("Noir", 0, 3), [0, 3]);
    this.echiquier.addPiece(new Roi("Noir", 0, 4), [0, 4]);
    this.echiquier.addPiece(new Fou("Noir", 0, 5), [0, 5]);
    this.echiquier.addPiece(new Cavalier("Noir", 0, 6), [0, 6]);
    this.echiquier.addPiece(new Tour("Noir", 0, 7), [0, 7]);
    for (let i = 0; i < 8; i++) {
      this.echiquier.addPiece(new Pion("Noir", 1, i), [1, i]);
    }

    // Placer les pièces blanches
    this.echiquier.addPiece(new Tour("Blanc", 7, 0), [7, 0]);
    this.echiquier.addPiece(new Cavalier("Blanc", 7, 1), [7, 1]);
    this.echiquier.addPiece(new Fou("Blanc", 7, 2), [7, 2]);
    this.echiquier.addPiece(new Reine("Blanc", 7, 3), [7, 3]);
    this.echiquier.addPiece(new Roi("Blanc", 7, 4), [7, 4]);
    this.echiquier.addPiece(new Fou("Blanc", 7, 5), [7, 5]);
    this.echiquier.addPiece(new Cavalier("Blanc", 7, 6), [7, 6]);
    this.echiquier.addPiece(new Tour("Blanc", 7, 7), [7, 7]);
    for (let i = 0; i < 8; i++) {
      this.echiquier.addPiece(new Pion("Blanc", 6, i), [6, i]);
    }
  }
}

const partie = new Partie();

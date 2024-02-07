import { Pion } from "../src/pion";
import { Echiquier } from "../src/echiquier";
import { Reine } from "../src/reine";

describe("Pion", () => {
  let echiquier: Echiquier;
  let pionBlanc: Pion;
  let pionNoir: Pion;

  beforeEach(() => {
    echiquier = new Echiquier();
    pionBlanc = new Pion("Blanc", 6, 4);
    pionNoir = new Pion("Noir", 1, 4);
    echiquier.setPieceAt([6, 4], pionBlanc);
    echiquier.setPieceAt([1, 4], pionNoir);
  });

  it("doit pouvoir avancer d'une case", () => {
    expect(echiquier.movePiece([6, 4], [4, 4])).toBeTruthy();
    expect(echiquier.movePiece([1, 4], [2, 4])).toBeTruthy();
  });

  it("doit pouvoir avancer de deux cases depuis sa position initiale", () => {
    expect(echiquier.movePiece([6, 4], [4, 4])).toBeTruthy();
    expect(echiquier.movePiece([1, 4], [3, 4])).toBeTruthy();
  });

  it("ne doit pas pouvoir avancer de deux cases si ce n'est pas son premier mouvement", () => {
    echiquier.movePiece([6, 4], [5, 4]);
    expect(echiquier.movePiece([5, 4], [3, 4])).toBeFalsy();

    echiquier.movePiece([1, 4], [2, 4]);
    expect(echiquier.movePiece([2, 4], [4, 4])).toBeFalsy();
  });

  it("doit pouvoir capturer une pièce ennemie en diagonale", () => {
    echiquier.movePiece([6, 4], [5, 4]);
    echiquier.movePiece([1, 4], [2, 4]);

    const ennemiBlanc = new Pion("Noir", 4, 5);
    const ennemiNoir = new Pion("Blanc", 3, 3);

    echiquier.setPieceAt([4, 5], ennemiBlanc);
    echiquier.setPieceAt([3, 3], ennemiNoir);

    expect(echiquier.movePiece([5, 4], [4, 5])).toBeTruthy();
    expect(echiquier.movePiece([2, 4], [3, 3])).toBeTruthy();
  });

  it("doit être promu en reine en atteignant l'autre extrémité de l'échiquier", () => {
    const ennemiBlanc = new Pion("Noir", 3, 1);
    echiquier.setPieceAt([3, 1], ennemiBlanc);
    console.log(echiquier.getPieceAt([3, 0]));
    echiquier.movePiece([3, 1], [3, 0]);
    const piecePromueBlanc = echiquier.getPieceAt([3, 0]);

    expect(piecePromueBlanc).toBeInstanceOf(Reine);

    // echiquier.setPieceAt([0, 4], null);
    // echiquier.movePiece([1, 4], [0, 4]);
    // const piecePromueNoir = echiquier.getPieceAt([0, 4]);
    // expect(piecePromueNoir).toBeInstanceOf(Reine);
  });
});

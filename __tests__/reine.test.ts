import { Reine } from '../src/reine';
import { Echiquier } from '../src/echiquier';

describe('Reine', () => {
  let echiquier: Echiquier;
  let reine: Reine;

  beforeEach(() => {
    echiquier = new Echiquier();
    reine = new Reine('Blanc', 4, 4); 
    echiquier.setPieceAt([4, 4], reine);
  });

  it('doit pouvoir se déplacer horizontalement vers la droite', () => {
    expect(echiquier.movePiece([4, 4], [4, 7])).toBeTruthy();
  });

  it('doit pouvoir se déplacer horizontalement vers la gauche', () => {
    expect(echiquier.movePiece([4, 4], [4, 0])).toBeTruthy();
  });

  it('doit pouvoir se déplacer verticalement vers le haut', () => {
    expect(echiquier.movePiece([4, 4], [7, 4])).toBeTruthy();
  });

  it('doit pouvoir se déplacer verticalement vers le bas', () => {
    expect(echiquier.movePiece([4, 4], [0, 4])).toBeTruthy();
  });

  it('doit pouvoir se déplacer en diagonale vers le haut à droite', () => {
    expect(echiquier.movePiece([4, 4], [6, 6])).toBeTruthy();
  });

  it('doit pouvoir se déplacer en diagonale vers le haut à gauche', () => {
    expect(echiquier.movePiece([4, 4], [6, 2])).toBeTruthy();
  });

  it('doit pouvoir se déplacer en diagonale vers le bas à droite', () => {
    expect(echiquier.movePiece([4, 4], [2, 6])).toBeTruthy();
  });

  it('doit pouvoir se déplacer en diagonale vers le bas à gauche', () => {
    expect(echiquier.movePiece([4, 4], [2, 2])).toBeTruthy();
  });

  it('ne doit pas pouvoir traverser d'autres pièces', () => {
    const obstacle = new Reine('Noir', 4, 5); 
    echiquier.setPieceAt([4, 5], obstacle);
    expect(echiquier.movePiece([4, 4], [4, 7])).toBeFalsy();
  });
});
import { Roi } from '../src/roi';
import { Echiquier } from '../src/echiquier';

describe('Roi', () => {
  let echiquier: Echiquier;
  let roi: Roi;

  beforeEach(() => {
    echiquier = new Echiquier();
    roi = new Roi('Blanc', 4, 4); 
    echiquier.setPieceAt([4, 4], roi);
  });

  it('doit pouvoir se déplacer d\'une case vers le haut', () => {
    expect(echiquier.movePiece([4, 4], [4, 5])).toBeTruthy();
  });

  it('doit pouvoir se déplacer d\'une case vers le bas', () => {
    expect(echiquier.movePiece([4, 4], [4, 3])).toBeTruthy();
  });

  it('doit pouvoir se déplacer d\'une case vers la gauche', () => {
    expect(echiquier.movePiece([4, 4], [3, 4])).toBeTruthy();
  });

  it('doit pouvoir se déplacer d\'une case vers la droite', () => {
    expect(echiquier.movePiece([4, 4], [5, 4])).toBeTruthy();
  });

  it('doit pouvoir se déplacer d\'une case en diagonale haut-droite', () => {
    expect(echiquier.movePiece([4, 4], [5, 5])).toBeTruthy();
  });

  it('doit pouvoir se déplacer d\'une case en diagonale haut-gauche', () => {
    expect(echiquier.movePiece([4, 4], [3, 5])).toBeTruthy();
  });

  it('doit pouvoir se déplacer d\'une case en diagonale bas-droite', () => {
    expect(echiquier.movePiece([4, 4], [5, 3])).toBeTruthy();
  });

  it('doit pouvoir se déplacer d`\'une case en diagonale bas-gauche', () => {
    expect(echiquier.movePiece([4, 4], [3, 3])).toBeTruthy();
  });

  it('ne doit pas pouvoir se déplacer de plus d\'une case dans n\'importe quelle direction', () => {
    expect(echiquier.movePiece([4, 4], [4, 6])).toBeFalsy(); // Trop loin vers le haut
    expect(echiquier.movePiece([4, 4], [6, 4])).toBeFalsy(); // Trop loin vers la droite
    expect(echiquier.movePiece([4, 4], [2, 4])).toBeFalsy(); // Trop loin vers la gauche
    expect(echiquier.movePiece([4, 4], [4, 2])).toBeFalsy(); // Trop loin vers le bas
    expect(echiquier.movePiece([4, 4], [6, 6])).toBeFalsy(); // Trop loin en diagonale
  });
});
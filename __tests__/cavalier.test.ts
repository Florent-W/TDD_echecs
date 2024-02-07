import { Cavalier } from '../src/cavalier';
import { Echiquier } from '../src/echiquier';

describe('Cavalier', () => {
  let echiquier: Echiquier;
  let cavalier: Cavalier;

  beforeEach(() => {
    echiquier = new Echiquier();
    cavalier = new Cavalier('Blanc', 4, 4);
    echiquier.setPieceAt([4, 4], cavalier);
  });

  it('doit pouvoir se déplacer en forme de L vers le haut et à droite', () => {
    expect(echiquier.movePiece([4, 4], [5, 6])).toBeTruthy();
  });

  it('doit pouvoir se déplacer en forme de L vers le haut et à gauche', () => {
    expect(echiquier.movePiece([4, 4], [3, 6])).toBeTruthy();
  });

  it('doit pouvoir se déplacer en forme de L vers le bas et à droite', () => {
    expect(echiquier.movePiece([4, 4], [5, 2])).toBeTruthy();
  });

  it('doit pouvoir se déplacer en forme de L vers le bas et à gauche', () => {
    expect(echiquier.movePiece([4, 4], [3, 2])).toBeTruthy();
  });

  it('doit pouvoir se déplacer en forme de L vers la droite et en haut', () => {
    expect(echiquier.movePiece([4, 4], [6, 5])).toBeTruthy();
  });

  it('doit pouvoir se déplacer en forme de L vers la droite et en bas', () => {
    expect(echiquier.movePiece([4, 4], [6, 3])).toBeTruthy();
  });

  it('doit pouvoir se déplacer en forme de L vers la gauche et en haut', () => {
    expect(echiquier.movePiece([4, 4], [2, 5])).toBeTruthy();
  });

  it('doit pouvoir se déplacer en forme de L vers la gauche et en bas', () => {
    expect(echiquier.movePiece([4, 4], [2, 3])).toBeTruthy();
  });

  it('ne doit pas pouvoir se déplacer en ligne droite', () => {
    expect(echiquier.movePiece([4, 4], [4, 6])).toBeFalsy(); 
  });
});

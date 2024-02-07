import { Fou } from '../src/fou';
import { Echiquier } from '../src/echiquier';

describe('Fou', () => {
  let echiquier: Echiquier;
  let fou: Fou;

  beforeEach(() => {
    echiquier = new Echiquier();
    fou = new Fou('Blanc', 4, 4); 
    echiquier.setPieceAt([4, 4], fou);
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

  it('ne doit pas pouvoir traverser d\'autres pièces', () => {
    const obstacle = new Fou('Noir', 3, 3); 
    echiquier.setPieceAt([3, 3], obstacle);
    expect(echiquier.movePiece([4, 4], [2, 2])).toBeFalsy(); 
  });

  it('ne doit pas pouvoir se déplacer hors des diagonales', () => {
    expect(echiquier.movePiece([4, 4], [4, 5])).toBeFalsy();
    expect(echiquier.movePiece([4, 4], [5, 4])).toBeFalsy(); 
  });
});

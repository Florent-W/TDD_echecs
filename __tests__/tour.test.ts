import { Tour } from '../src/tour';
import { Echiquier } from '../src/echiquier';

describe('Tour', () => {
  let echiquier: Echiquier;
  let tour: Tour;

  beforeEach(() => {
    echiquier = new Echiquier();
    tour = new Tour('Blanc', 4, 4); 
    echiquier.setPieceAt([4, 4], tour);
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

  it('ne doit pas pouvoir traverser d\'autres pièces', () => {
    const obstacle = new Tour('Noir', 4, 5); 
    echiquier.setPieceAt([4, 5], obstacle);
    expect(echiquier.movePiece([4, 4], [4, 7])).toBeFalsy();
  });

  it('ne doit pas pouvoir se déplacer en diagonale', () => {
    expect(echiquier.movePiece([4, 4], [5, 5])).toBeFalsy(); 
  });
});

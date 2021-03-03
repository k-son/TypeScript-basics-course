import Unit from './Unit';
import Weapon from './Weapon';

class Infantry extends Unit {

  constructor(name: string, hitPointsMax: number, hitPointsLeft: number, moveDistance: number, weapons: Weapon[]) {
    super(name, hitPointsMax, hitPointsLeft, moveDistance, weapons);
  }
  
}
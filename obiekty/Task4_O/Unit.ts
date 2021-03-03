import Weapon from './Weapon';

abstract class Unit {
  private name: string;
  private hitPointsMax: number;
  private hitPointsLeft: number;
  private moveDistance: number;
  private weapons: Weapon[];

  constructor(name: string, hitPointsMax: number, hitPointsLeft: number, moveDistance: number, weapons: Weapon[]) {
    this.name = name;
    this.hitPointsMax = hitPointsMax;
    this.hitPointsLeft = hitPointsLeft;
    this.moveDistance = moveDistance;
    this.weapons = weapons;
  }
}

export default Unit;
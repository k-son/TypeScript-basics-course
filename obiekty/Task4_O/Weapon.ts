class Weapon {
  private name: string;
  private damage: number;
  private ammoMax: number;
  private ammoLeft: number;
  private rateOfFire: number;
  private range: number;

  constructor(name: string, damage: number, ammoMax: number, ammoLeft: number, rateOfFire: number, range: number) {
    this.name = name;
    this.damage = damage;
    this.ammoMax = ammoMax;
    this.ammoLeft = ammoLeft;
    this.rateOfFire = rateOfFire;
    this.range = range;
  }
}

export default Weapon;
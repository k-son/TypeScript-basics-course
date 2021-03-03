import Unit from './Unit';
import Weapon from './Weapon';

class Vehicle extends Unit {
  //private fuelMax: number;
  //private fuelLeft: number;
  //private fuelConsumptionPerMove: number;

  constructor(name: string, hitPointsMax: number, hitPointsLeft: number, moveDistance: number, weapons: Weapon[], // te są z Unit i Weapon
    private fuelMax: number, 
    private fuelLeft: number, 
    private fuelConsumptionPerMove: number) { // taki skrócony zapis i nie musimy powtarzac tego u góry i na dole
    super(name, hitPointsMax, hitPointsLeft, moveDistance, weapons);

    //this.fuelMax = fuelMax;
    //this.fuelLeft = fuelLeft;
    //this.fuelConsumptionPerMove = fuelConsumptionPerMove;
  }
}
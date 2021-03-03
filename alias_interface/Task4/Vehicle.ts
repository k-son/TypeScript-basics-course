import Unit from './Unit';

interface Vehicle extends Unit {
  fuelMax: number,
  fuelLeft: number,
  fuelConsumptionPerMove: number
}
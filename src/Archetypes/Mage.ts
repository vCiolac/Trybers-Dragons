import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _instancesCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._instancesCount += 1;
  }

  static createdArchetypeInstances(): number {
    return this._instancesCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;
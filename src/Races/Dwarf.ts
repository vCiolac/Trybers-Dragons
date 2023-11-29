import Race from './Race';

class Dwarf extends Race {
  readonly maxLifePoints = 80;
  private static _instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._instancesCount += 1;
  }

  static createdRacesInstances(): number {
    return this._instancesCount;
  }
}

export default Dwarf;
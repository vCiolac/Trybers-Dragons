import Race from './Race';

class Elf extends Race {
  readonly maxLifePoints = 99;
  private static _instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._instancesCount += 1;
  }

  static createdRacesInstances(): number {
    return this._instancesCount;
  }
}

export default Elf;
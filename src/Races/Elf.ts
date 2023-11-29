import Race from './Race';

class Elf extends Race {
  readonly maxLifePoints = 99;
  private static instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.instancesCount += 1;
  }

  static createdRacesInstances(): number {
    return Elf.instancesCount;
  }
}

export default Elf;
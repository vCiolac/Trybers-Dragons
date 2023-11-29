import Race from './Race';

class Dwarf extends Race {
  readonly maxLifePoints = 80;
  private static instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.instancesCount += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.instancesCount;
  }
}

export default Dwarf;
export default class Character {
  private name: string;
  private boons: string[];
  private banes: string[];
  private buddingTalents: string[];
  private caster: boolean;
  private sex: string;

  constructor(
    name: string,
    boons:string[],
    banes:string[],
    buddingTalents:string[],
    isCaster: boolean,
    sex: string,
  ) {
    this.name = name;
    this.boons = boons;
    this.banes = banes;
    this.buddingTalents = buddingTalents;
    this.caster = isCaster;
    this.sex = sex;
  }

  public getName(): string {
    return this.name;
  }

  public isCaster(): boolean {
    return this.caster;
  }

  public getSex(): string {
    return this.sex;
  }

  public isBoon(skill: string): boolean {
    return this.boons.indexOf(skill) > -1;
  }

  public isBane(skill: string): boolean {
    return this.banes.indexOf(skill) > -1;
  }

  public isBuddingTalent(skill: string): boolean {
    return this.buddingTalents.indexOf(skill) > -1;
  }
}

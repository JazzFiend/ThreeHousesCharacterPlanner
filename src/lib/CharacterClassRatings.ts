import ClassSkillGrouping from './ClassSkillGrouping';

export default class CharacterClassRatings {
  private advantage: ClassSkillGrouping[];
  private neutral: ClassSkillGrouping[];
  private disadvantages: ClassSkillGrouping[];

  constructor() {
    this.advantage = [];
    this.neutral = [];
    this.disadvantages = [];
  }

  public getAdvantages(): ClassSkillGrouping[] {
    return this.advantage;
  }

  public getNeutral(): ClassSkillGrouping[] {
    return this.neutral;
  }

  public getDisadvantages(): ClassSkillGrouping[] {
    return this.disadvantages;
  }

  public addAdvantage(classSkillPairing:ClassSkillGrouping):void {
    this.advantage.push(classSkillPairing);
    this.advantage.sort((a, b) => ClassSkillGrouping.sortFunction(a, b));
  }

  public addNeutral(classSkillPairing:ClassSkillGrouping):void {
    this.neutral.push(classSkillPairing);
    this.neutral.sort((a, b) => ClassSkillGrouping.sortFunction(a, b));
  }

  public addDisadvantage(classSkillPairing:ClassSkillGrouping):void {
    this.disadvantages.push(classSkillPairing);
    this.disadvantages.sort((a, b) => ClassSkillGrouping.sortFunction(a, b));
  }
}

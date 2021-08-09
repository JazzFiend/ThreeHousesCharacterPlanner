import ClassSkillRatio from './ClassSkillRatio';

export default class CharacterClassRatings {
  private advantage: ClassSkillRatio[];
  private neutral: ClassSkillRatio[];
  private disadvantages: ClassSkillRatio[];

  constructor() {
    this.advantage = [];
    this.neutral = [];
    this.disadvantages = [];
  }

  public getAdvantages(): ClassSkillRatio[] {
    return this.advantage;
  }

  public getNeutral(): ClassSkillRatio[] {
    return this.neutral;
  }

  public getDisadvantages(): ClassSkillRatio[] {
    return this.disadvantages;
  }

  public addAdvantage(classSkillPairing:ClassSkillRatio):void {
    this.advantage.push(classSkillPairing);
    this.advantage.sort((a, b) => ClassSkillRatio.sortFunction(a, b));
  }

  public addNeutral(classSkillPairing:ClassSkillRatio):void {
    this.neutral.push(classSkillPairing);
    this.neutral.sort((a, b) => ClassSkillRatio.sortFunction(a, b));
  }

  public addDisadvantage(classSkillPairing:ClassSkillRatio):void {
    this.disadvantages.push(classSkillPairing);
    this.disadvantages.sort((a, b) => ClassSkillRatio.sortFunction(a, b));
  }
}

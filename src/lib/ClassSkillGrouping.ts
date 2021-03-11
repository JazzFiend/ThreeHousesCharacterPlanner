export default class ClassSkillGrouping {
  private className: string;
  private skillCount: number;
  private skillTotal: number;

  constructor(className: string, skillCount: number, skillTotal: number) {
    this.className = className;
    this.skillCount = skillCount;
    this.skillTotal = skillTotal;
  }

  public getSkillCount(): number {
    return this.skillCount;
  }

  public static sortFunction(a: ClassSkillGrouping, b: ClassSkillGrouping): number {
    return b.getSkillCount() - a.getSkillCount();
  }
}

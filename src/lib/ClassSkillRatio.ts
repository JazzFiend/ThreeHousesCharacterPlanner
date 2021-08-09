import ClassCategory from './enums/ClassCategory';

export default class ClassSkillRatio {
  private className: string;
  private category: ClassCategory;
  private skillCount: number;
  private skillTotal: number;
  private skillRatio: number;

  constructor(className: string, category: ClassCategory, skillCount: number, skillTotal: number) {
    this.className = className;
    this.category = category;
    this.skillCount = skillCount;
    this.skillTotal = skillTotal;
    this.skillRatio = skillCount / skillTotal;
  }

  public getCategory(): ClassCategory {
    return this.category;
  }

  public getSkillRatio(): number {
    return this.skillRatio;
  }

  public static sortFunction(a: ClassSkillRatio, b: ClassSkillRatio): number {
    const categoryDifference: number = b.getCategory() - a.getCategory();
    if (!categoryDifference) {
      return b.getSkillRatio() - a.getSkillRatio();
    }
    return categoryDifference;
  }
}

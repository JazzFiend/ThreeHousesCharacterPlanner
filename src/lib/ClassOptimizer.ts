import Character from './Character';
import CharacterClassRatings from './CharacterClassRatings';
import { FEClass } from './types/FEClass';
import ClassSkillGrouping from './ClassSkillGrouping';
import Sex from './enums/Sex';

export default class ClassOptimizer {
  private classList:FEClass[];

  constructor(classList:FEClass[]) {
    this.classList = classList;
  }

  public getOptimizedClasses(character:Character): CharacterClassRatings {
    const classRatings:CharacterClassRatings = new CharacterClassRatings();
    const filteredClassList:FEClass[] = this.filterClassList(character);

    filteredClassList.forEach((feClass) => {
      const skillCount: number = ClassOptimizer.countSkill(feClass, character);
      ClassOptimizer.accumulateClasses(skillCount, classRatings, feClass);
    });
    return classRatings;
  }

  private filterClassList(character: Character): FEClass[] {
    return this.classList.filter(
      (feClass) => !character.isCaster() || feClass.canUseMagic,
    ).filter(
      (feClass) => feClass.sexRequirement === Sex.None
                   || feClass.sexRequirement === character.getSex(),
    ).filter(
      (feClass) => !feClass.personalClassName.length
                   || ClassOptimizer.isPersonalClass(feClass, character),
    ).filter(
      (feClass) => !(feClass.studentRequired && !character.isStudent()),
    );
  }

  private static isPersonalClass(feClass: FEClass, character: Character): boolean {
    return feClass.personalClassName.indexOf(character.getName()) > -1;
  }

  private static countSkill(feClass: FEClass, character: Character): number {
    if (ClassOptimizer.isPersonalClass(feClass, character)) return 10;

    let skillCount: number = 0;
    feClass.requiredSkills.forEach((skill) => {
      if (character.isBoon(skill) || character.isBuddingTalent(skill)) {
        skillCount += 1;
      } else if (character.isBane(skill)) {
        skillCount -= 1;
      }
    });
    return skillCount;
  }

  private static accumulateClasses(skillCount: number,
    classRatings: CharacterClassRatings,
    feClass: FEClass) {
    const classSkillPairing = new ClassSkillGrouping(
      feClass.name,
      skillCount,
      feClass.requiredSkills.length,
    );

    if (skillCount > 0) {
      classRatings.addAdvantage(classSkillPairing);
    } else if (skillCount === 0) {
      classRatings.addNeutral(classSkillPairing);
    } else if (skillCount < 0) {
      classRatings.addDisadvantage(classSkillPairing);
    }
  }
}

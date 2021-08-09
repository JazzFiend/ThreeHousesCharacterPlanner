import Character from './Character/Character';
import CharacterClassRatings from './CharacterClassRatings';
import { FEClass } from './types/FEClass';
import ClassSkillRatio from './ClassSkillRatio';
import Sex from './enums/Sex';

export default class ClassRater {
  public static calculateClassRatings(classList:FEClass[], character:Character): CharacterClassRatings {
    const classRatings:CharacterClassRatings = new CharacterClassRatings();
    const filteredClassList:FEClass[] = this.filterClassList(classList, character);

    filteredClassList.forEach((feClass) => {
      const skillCount: number = ClassRater.countSkill(feClass, character);
      ClassRater.accumulateClasses(skillCount, classRatings, feClass);
    });
    return classRatings;
  }

  private static filterClassList(classList:FEClass[], character: Character): FEClass[] {
    return classList.filter(
      (feClass) => !character.isCaster() || feClass.canUseMagic,
    ).filter(
      (feClass) => feClass.sexRequirement === Sex.None
                   || feClass.sexRequirement === character.getSex(),
    ).filter(
      (feClass) => !feClass.personalClassNames.length
                   || ClassRater.isPersonalClass(feClass, character),
    ).filter(
      (feClass) => !(feClass.studentRequired && !character.isStudent()),
    );
  }

  private static isPersonalClass(feClass: FEClass, character: Character): boolean {
    return feClass.personalClassNames.indexOf(character.getName()) > -1;
  }

  private static countSkill(feClass: FEClass, character: Character): number {
    if (ClassRater.isPersonalClass(feClass, character)) return 10;

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
    const classSkillPairing = new ClassSkillRatio(
      feClass.name,
      feClass.category,
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

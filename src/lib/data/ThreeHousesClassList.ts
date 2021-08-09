import ClassCategory from '../enums/ClassCategory';
import Sex from '../enums/Sex';
import Skill from '../enums/Skill';
import { FEClass } from '../types/FEClass';

export default class ThreeHousesClassList {
  public static getFinalClassListRaw(): FEClass[] {
    const classList:FEClass[] = [];

    // Beginner
    classList.push({
      name: 'Myrmidon',
      category: ClassCategory.Beginner,
      requiredSkills: [Skill.Sword],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Soldier',
      category: ClassCategory.Beginner,
      requiredSkills: [Skill.Lance],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Fighter - Axe',
      category: ClassCategory.Beginner,
      requiredSkills: [Skill.Axe],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Fighter - Bow',
      category: ClassCategory.Beginner,
      requiredSkills: [Skill.Bow],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Fighter - Brawling',
      category: ClassCategory.Beginner,
      requiredSkills: [Skill.Brawling],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Monk - Reason',
      category: ClassCategory.Beginner,
      requiredSkills: [Skill.Reason],
      canUseMagic: true,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Monk - Faith',
      category: ClassCategory.Beginner,
      requiredSkills: [Skill.Faith],
      canUseMagic: true,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });

    // Intermediate
    classList.push({
      name: 'Lord',
      category: ClassCategory.Intermediate,
      requiredSkills: [Skill.Sword, Skill.Authority],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: ['Claude', 'Dimitri', 'Edelgard'],
      studentRequired: false,
    });
    classList.push({
      name: 'Mercenary',
      category: ClassCategory.Intermediate,
      requiredSkills: [Skill.Sword],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Thief',
      category: ClassCategory.Intermediate,
      requiredSkills: [Skill.Sword],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Cavalier',
      category: ClassCategory.Intermediate,
      requiredSkills: [Skill.Lance, Skill.Riding],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Pegasus Knight',
      category: ClassCategory.Intermediate,
      requiredSkills: [Skill.Lance, Skill.Flying],
      canUseMagic: false,
      sexRequirement: Sex.Female,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Brigand',
      category: ClassCategory.Intermediate,
      requiredSkills: [Skill.Axe],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Armored Knight',
      category: ClassCategory.Intermediate,
      requiredSkills: [Skill.Axe, Skill.HeavyArmor],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Archer',
      category: ClassCategory.Intermediate,
      requiredSkills: [Skill.Bow],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Brawler',
      category: ClassCategory.Intermediate,
      requiredSkills: [Skill.Brawling],
      canUseMagic: false,
      sexRequirement: Sex.Male,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Mage',
      category: ClassCategory.Intermediate,
      requiredSkills: [Skill.Reason],
      canUseMagic: true,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Dark Mage',
      category: ClassCategory.Intermediate,
      requiredSkills: [Skill.Reason],
      canUseMagic: true,
      sexRequirement: Sex.Male,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Priest',
      category: ClassCategory.Intermediate,
      requiredSkills: [Skill.Faith],
      canUseMagic: true,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });

    // Advanced
    classList.push({
      name: 'Swordmaster',
      category: ClassCategory.Advanced,
      requiredSkills: [Skill.Sword],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Hero',
      category: ClassCategory.Advanced,
      requiredSkills: [Skill.Sword, Skill.Axe],
      canUseMagic: false,
      sexRequirement: Sex.Male,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Assassin',
      category: ClassCategory.Advanced,
      requiredSkills: [Skill.Sword, Skill.Bow],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Paladin',
      category: ClassCategory.Advanced,
      requiredSkills: [Skill.Lance, Skill.Riding],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Warrior',
      category: ClassCategory.Advanced,
      requiredSkills: [Skill.Axe],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Fortress Knight',
      category: ClassCategory.Advanced,
      requiredSkills: [Skill.Axe, Skill.HeavyArmor],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Wyvern Rider',
      category: ClassCategory.Advanced,
      requiredSkills: [Skill.Axe, Skill.Flying],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Sniper',
      category: ClassCategory.Advanced,
      requiredSkills: [Skill.Bow],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Grappler',
      category: ClassCategory.Advanced,
      requiredSkills: [Skill.Brawling],
      canUseMagic: false,
      sexRequirement: Sex.Male,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Warlock',
      category: ClassCategory.Advanced,
      requiredSkills: [Skill.Reason],
      canUseMagic: true,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Dark Bishop',
      category: ClassCategory.Advanced,
      requiredSkills: [Skill.Reason],
      canUseMagic: true,
      sexRequirement: Sex.Male,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Bishop',
      category: ClassCategory.Advanced,
      requiredSkills: [Skill.Faith],
      canUseMagic: true,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });

    // Special
    classList.push({
      name: 'Trickster',
      category: ClassCategory.Special,
      requiredSkills: [Skill.Sword, Skill.Faith],
      canUseMagic: true,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'War Monk',
      category: ClassCategory.Special,
      requiredSkills: [Skill.Brawling, Skill.Faith],
      canUseMagic: true,
      sexRequirement: Sex.Male,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'War Cleric',
      category: ClassCategory.Special,
      requiredSkills: [Skill.Brawling, Skill.Faith],
      canUseMagic: true,
      sexRequirement: Sex.Female,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Dark Flier',
      category: ClassCategory.Special,
      requiredSkills: [Skill.Reason, Skill.Flying],
      canUseMagic: true,
      sexRequirement: Sex.Female,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Valkyrie',
      category: ClassCategory.Special,
      requiredSkills: [Skill.Reason, Skill.Riding],
      canUseMagic: true,
      sexRequirement: Sex.Female,
      personalClassNames: [],
      studentRequired: false,
    });

    // Master
    classList.push({
      name: 'Falcon Knight',
      category: ClassCategory.Master,
      requiredSkills: [Skill.Sword, Skill.Lance, Skill.Flying],
      canUseMagic: false,
      sexRequirement: Sex.Female,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Wyvern Lord',
      category: ClassCategory.Master,
      requiredSkills: [Skill.Lance, Skill.Axe, Skill.Flying],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Mortal Savant',
      category: ClassCategory.Master,
      requiredSkills: [Skill.Sword, Skill.Reason],
      canUseMagic: true,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Great Knight',
      category: ClassCategory.Master,
      requiredSkills: [Skill.Axe, Skill.HeavyArmor, Skill.Riding],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Bow Knight',
      category: ClassCategory.Master,
      requiredSkills: [Skill.Lance, Skill.Bow, Skill.Riding],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Dark Knight',
      category: ClassCategory.Master,
      requiredSkills: [Skill.Lance, Skill.Reason, Skill.Riding],
      canUseMagic: true,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Holy Knight',
      category: ClassCategory.Master,
      requiredSkills: [Skill.Lance, Skill.Faith, Skill.Riding],
      canUseMagic: true,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'War Master',
      category: ClassCategory.Master,
      requiredSkills: [Skill.Axe, Skill.Brawling],
      canUseMagic: false,
      sexRequirement: Sex.Male,
      personalClassNames: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Gremory',
      category: ClassCategory.Master,
      requiredSkills: [Skill.Reason, Skill.Faith],
      canUseMagic: true,
      sexRequirement: Sex.Female,
      personalClassNames: [],
      studentRequired: false,
    });

    // Unique
    classList.push({
      name: 'Dancer',
      category: ClassCategory.Unique,
      requiredSkills: [Skill.Sword, Skill.Riding],
      canUseMagic: true,
      sexRequirement: Sex.None,
      personalClassNames: [],
      studentRequired: true,
    });
    classList.push({
      name: 'Enlightened One',
      category: ClassCategory.Unique,
      requiredSkills: [],
      canUseMagic: true,
      sexRequirement: Sex.None,
      personalClassNames: ['Byleth - Male', 'Byleth - Female'],
      studentRequired: false,
    });
    classList.push({
      name: 'Armored Lord',
      category: ClassCategory.Unique,
      requiredSkills: [],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: ['Edelgard'],
      studentRequired: false,
    });
    classList.push({
      name: 'High Lord',
      category: ClassCategory.Unique,
      requiredSkills: [],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: ['Dimitri'],
      studentRequired: false,
    });
    classList.push({
      name: 'Wyvern Master',
      category: ClassCategory.Unique,
      requiredSkills: [],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: ['Claude'],
      studentRequired: false,
    });
    classList.push({
      name: 'Death Knight',
      category: ClassCategory.Unique,
      requiredSkills: [],
      canUseMagic: true,
      sexRequirement: Sex.None,
      personalClassNames: ['Jeritza'],
      studentRequired: false,
    });
    classList.push({
      name: 'Emperor',
      category: ClassCategory.Unique,
      requiredSkills: [],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: ['Edelgard'],
      studentRequired: false,
    });
    classList.push({
      name: 'Great Lord',
      category: ClassCategory.Unique,
      requiredSkills: [],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: ['Dimitri'],
      studentRequired: false,
    });
    classList.push({
      name: 'Barbarossa',
      category: ClassCategory.Unique,
      requiredSkills: [],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassNames: ['Claude'],
      studentRequired: false,
    });

    return classList;
  }
}

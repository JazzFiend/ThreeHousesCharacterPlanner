import CharacterClassRatings from '../lib/CharacterClassRatings';
import ClassRater from '../lib/ClassRater';
import ClassSkillRatio from '../lib/ClassSkillRatio';
import { FEClass } from '../lib/types/FEClass';
import CharacterBuilder from '../lib/Character/CharacterBuilder';
import Sex from '../lib/enums/Sex';
import Skill from '../lib/enums/Skill';
import ClassCategory from '../lib/enums/ClassCategory';
import ClassBuilder from '../lib/ClassBuilder';

function expectThreeClassGroupings(
  optimizedClasses: CharacterClassRatings,
  expectedAdvantages: ClassSkillRatio[],
  expectedNeutrals: ClassSkillRatio[],
  expectedDisadvantages: ClassSkillRatio[],
): void {
  expect(optimizedClasses.getAdvantages()).toEqual(expectedAdvantages);
  expect(optimizedClasses.getNeutral()).toEqual(expectedNeutrals);
  expect(optimizedClasses.getDisadvantages()).toEqual(expectedDisadvantages);
}

test('Generic Character with no skills', () => {
  const classList:FEClass[] = [
    ClassBuilder.createNewClass().withRequiredSkills([Skill.Faith]).build(),
  ];
  const character = CharacterBuilder.createNewCharacter().build();
  const expectedNeutrals: ClassSkillRatio[] = [new ClassSkillRatio('', ClassCategory.Unknown, 0, 1)];

  const optimizedClasses:CharacterClassRatings = ClassRater.calculateClassRatings(classList, character);
  expectThreeClassGroupings(optimizedClasses, [], expectedNeutrals, []);
});

test('One Boon', () => {
  const classList:FEClass[] = [
    ClassBuilder.createNewClass().withRequiredSkills([Skill.Lance]).build(),
  ];
  const character = CharacterBuilder.createNewCharacter().withBoons([Skill.Lance]).build();
  const expectedAdvantages: ClassSkillRatio[] = [new ClassSkillRatio('', ClassCategory.Unknown, 1, 1)];

  const optimizedClasses:CharacterClassRatings = ClassRater.calculateClassRatings(classList, character);
  expectThreeClassGroupings(optimizedClasses, expectedAdvantages, [], []);
});

test('One Bane', () => {
  const classList:FEClass[] = [
    ClassBuilder.createNewClass().withRequiredSkills([Skill.HeavyArmor]).build(),
  ];
  const character = CharacterBuilder.createNewCharacter().withBanes([Skill.HeavyArmor]).build();
  const expectedDisadvantages: ClassSkillRatio[] = [new ClassSkillRatio('', ClassCategory.Unknown, -1, 1)];

  const optimizedClasses:CharacterClassRatings = ClassRater.calculateClassRatings(classList, character);
  expectThreeClassGroupings(optimizedClasses, [], [], expectedDisadvantages);
});

test('One Budding Talent', () => {
  const classList:FEClass[] = [
    ClassBuilder.createNewClass().withRequiredSkills([Skill.Flying]).build(),
  ];
  const character = CharacterBuilder.createNewCharacter()
    .withBuddingTalents([Skill.Flying])
    .build();
  const expectedAdvantages: ClassSkillRatio[] = [new ClassSkillRatio('', ClassCategory.Unknown, 1, 1)];

  const optimizedClasses:CharacterClassRatings = ClassRater.calculateClassRatings(classList, character);
  expectThreeClassGroupings(optimizedClasses, expectedAdvantages, [], []);
});

test('One Budding Talent that is also a bane', () => {
  const classList:FEClass[] = [
    ClassBuilder.createNewClass().withRequiredSkills([Skill.Authority]).build(),
  ];
  const character = CharacterBuilder.createNewCharacter()
    .withBanes([Skill.Authority])
    .withBuddingTalents([Skill.Authority])
    .build();
  const expectedAdvantages: ClassSkillRatio[] = [new ClassSkillRatio('', ClassCategory.Unknown, 1, 1)];

  const optimizedClasses:CharacterClassRatings = ClassRater.calculateClassRatings(classList, character);
  expectThreeClassGroupings(optimizedClasses, expectedAdvantages, [], []);
});

test('Two Advantageous classes, sorted', () => {
  const classList:FEClass[] = [
    ClassBuilder.createNewClass().withRequiredSkills([Skill.Sword]).build(),
    ClassBuilder.createNewClass().withRequiredSkills([Skill.Bow, Skill.Flying]).build(),
  ];
  const character = CharacterBuilder.createNewCharacter()
    .withBoons([Skill.Sword, Skill.Flying])
    .build();
  const expectedAdvantages: ClassSkillRatio[] = [
    new ClassSkillRatio('', ClassCategory.Unknown, 1, 1),
    new ClassSkillRatio('', ClassCategory.Unknown, 1, 2),
  ];

  const optimizedClasses:CharacterClassRatings = ClassRater.calculateClassRatings(classList, character);
  expectThreeClassGroupings(optimizedClasses, expectedAdvantages, [], []);
});

test('Two Disadvantageous classes, sorted', () => {
  const classList:FEClass[] = [
    ClassBuilder.createNewClass().withRequiredSkills([Skill.Riding]).build(),
    ClassBuilder.createNewClass().withRequiredSkills([Skill.Axe, Skill.HeavyArmor]).build(),
  ];
  const character = CharacterBuilder.createNewCharacter()
    .withBanes([Skill.Axe, Skill.Riding])
    .build();
  const expectedDisadvantages: ClassSkillRatio[] = [
    new ClassSkillRatio('', ClassCategory.Unknown, -1, 2),
    new ClassSkillRatio('', ClassCategory.Unknown, -1, 1),
  ];

  const optimizedClasses:CharacterClassRatings = ClassRater.calculateClassRatings(classList, character);
  expectThreeClassGroupings(optimizedClasses, [], [], expectedDisadvantages);
});

test('For a magical character, physical classes are omitted.', () => {
  const classList:FEClass[] = [
    ClassBuilder.createNewClass()
      .withName('magic')
      .withRequiredSkills([Skill.Reason])
      .withMagicStatus(true)
      .build(),
    ClassBuilder.createNewClass()
      .withName('physical')
      .withRequiredSkills([Skill.Reason, Skill.Sword])
      .withMagicStatus(false)
      .build(),
  ];
  const character = CharacterBuilder.createNewCharacter()
    .withBoons([Skill.Sword, Skill.Reason])
    .withCasterStatus(true)
    .build();
  const expectedAdvantages: ClassSkillRatio[] = [
    new ClassSkillRatio('magic', ClassCategory.Unknown, 1, 1),
  ];

  const optimizedClasses:CharacterClassRatings = ClassRater.calculateClassRatings(classList, character);
  expectThreeClassGroupings(optimizedClasses, expectedAdvantages, [], []);
});

test('Male character cannot be considered for female classes', () => {
  const classList:FEClass[] = [
    ClassBuilder.createNewClass()
      .withName('male')
      .withRequiredSkills([Skill.HeavyArmor])
      .withSexRequirement(Sex.Male)
      .build(),
    ClassBuilder.createNewClass()
      .withName('female')
      .withRequiredSkills([Skill.Axe])
      .withSexRequirement(Sex.Female)
      .build(),
  ];
  const character = CharacterBuilder.createNewCharacter()
    .withBoons([Skill.HeavyArmor, Skill.Axe])
    .withSex(Sex.Male)
    .build();
  const expectedAdvantages: ClassSkillRatio[] = [
    new ClassSkillRatio('male', ClassCategory.Unknown, 1, 1),
  ];

  const optimizedClasses:CharacterClassRatings = ClassRater.calculateClassRatings(classList, character);
  expectThreeClassGroupings(optimizedClasses, expectedAdvantages, [], []);
});

test('Personal Class should work when the name matches', () => {
  const classList:FEClass[] = [
    ClassBuilder.createNewClass()
      .withCategory(ClassCategory.Unique)
      .withRequiredSkills([Skill.Riding])
      .withPersonalClassNames(['Personal'])
      .build(),
  ];
  const personalCharacter = CharacterBuilder.createNewCharacter()
    .withName('Personal')
    .withBoons([Skill.Riding])
    .build();
  const genericCharacter = CharacterBuilder.createNewCharacter()
    .withName('Generic')
    .withBoons([Skill.Riding])
    .build();
  const expectedAdvantages: ClassSkillRatio[] = [
    new ClassSkillRatio('', ClassCategory.Unique, 10, 1),
  ];

  expectThreeClassGroupings(
    ClassRater.calculateClassRatings(classList, personalCharacter), expectedAdvantages, [], [],
  );
  expectThreeClassGroupings(ClassRater.calculateClassRatings(classList, genericCharacter), [], [], []);
});

test('Student specific class should only select students', () => {
  const classList:FEClass[] = [
    ClassBuilder.createNewClass()
      .withName('student')
      .withRequiredSkills([Skill.Riding])
      .withStudentStatus(true)
      .build(),
    ClassBuilder.createNewClass()
      .withName('anyone')
      .withRequiredSkills([Skill.Riding])
      .withStudentStatus(false)
      .build(),
  ];
  const student = CharacterBuilder.createNewCharacter()
    .withBoons([Skill.Riding])
    .withStudentStatus(true)
    .build();
  const instructor = CharacterBuilder.createNewCharacter()
    .withBoons([Skill.Riding])
    .withStudentStatus(false)
    .build();

  const expectedAdvantagesStudent: ClassSkillRatio[] = [
    new ClassSkillRatio('student', ClassCategory.Unknown, 1, 1),
    new ClassSkillRatio('anyone', ClassCategory.Unknown, 1, 1),
  ];
  const expectedAdvantagesInstructor: ClassSkillRatio[] = [
    new ClassSkillRatio('anyone', ClassCategory.Unknown, 1, 1),
  ];

  expectThreeClassGroupings(ClassRater.calculateClassRatings(classList, student), expectedAdvantagesStudent, [], []);
  expectThreeClassGroupings(
    ClassRater.calculateClassRatings(classList, instructor),
    expectedAdvantagesInstructor, [], [],
  );
});

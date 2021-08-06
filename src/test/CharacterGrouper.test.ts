import Character from '../lib/Character';
import CharacterBuilder from '../lib/CharacterBuilder';
import CharacterGrouper from '../lib/CharacterGrouper';
import House from '../lib/enums/House';
import Skill from '../lib/enums/Skill';

function buildBasicCharacterPool(): Character[] {
  const characterPool = [];
  characterPool.push(CharacterBuilder.createNewCharacter().withName('a').build());
  characterPool.push(CharacterBuilder.createNewCharacter().withName('b').build());
  characterPool.push(CharacterBuilder.createNewCharacter().withName('c').build());
  return characterPool;
}

test('No characters given', () => {
  const cg = new CharacterGrouper([]);
  expect(cg.getCharactersByName([])).toEqual([]);
});

test('No parameters given should return no characters by default', () => {
  const cg = new CharacterGrouper(buildBasicCharacterPool());
  expect(cg.getCharactersByName([])).toEqual([]);
});

test('Asking for a character that isn\'t in the pool results in an empty array.', () => {
  const cg = new CharacterGrouper(buildBasicCharacterPool());
  expect(cg.getCharactersByName(['d'])).toEqual([]);
});

test('Return the characters specified', () => {
  const characterPool: Character[] = buildBasicCharacterPool();
  const target = CharacterBuilder.createNewCharacter().withName('target').build();
  characterPool.push(target);
  const cg = new CharacterGrouper(characterPool);
  expect(cg.getCharactersByName(['target'])).toEqual([target]);
});

test('Return all characters that exist in a specific house', () => {
  const characterPool: Character[] = [];
  const charA = CharacterBuilder.createNewCharacter().withName('a').withHouse(House.GoldenDeer).build();
  characterPool.push(charA);
  characterPool.push(CharacterBuilder.createNewCharacter().withName('b').withHouse(House.BlackEagles).build());
  const cg = new CharacterGrouper(characterPool);
  expect(cg.getCharactersByHouse(House.GoldenDeer)).toEqual([charA]);
});

test('Return all characters that have specific skills', () => {
  const characterPool: Character[] = [];
  const hasSkills = CharacterBuilder.createNewCharacter()
    .withName('hasSkills')
    .withBoons([Skill.Authority])
    .withBuddingTalents([Skill.Lance])
    .build();
  const noSkills = CharacterBuilder.createNewCharacter().withName('hasNoSkills').withBanes([Skill.Authority, Skill.Lance]).build();
  characterPool.push(hasSkills);
  characterPool.push(noSkills);
  const cg = new CharacterGrouper(characterPool);
  expect(cg.getCharactersBySkills([Skill.Lance, Skill.Authority])).toEqual([hasSkills]);
});

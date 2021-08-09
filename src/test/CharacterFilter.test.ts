import Character from '../lib/Character/Character';
import CharacterBuilder from '../lib/Character/CharacterBuilder';
import CharacterFilter from '../lib/CharacterFilter';
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
  expect(CharacterFilter.getCharactersByName([], [])).toEqual([]);
});

test('No parameters given should return no characters by default', () => {
  expect(CharacterFilter.getCharactersByName(buildBasicCharacterPool(), [])).toEqual([]);
});

test('Asking for a character that isn\'t in the pool results in an empty array.', () => {
  expect(CharacterFilter.getCharactersByName(buildBasicCharacterPool(), ['d'])).toEqual([]);
});

test('Return the characters specified', () => {
  const characterPool: Character[] = buildBasicCharacterPool();
  const target = CharacterBuilder.createNewCharacter().withName('target').build();
  characterPool.push(target);
  expect(CharacterFilter.getCharactersByName(characterPool, ['target'])).toEqual([target]);
});

test('Return all characters that exist in a specific house', () => {
  const characterPool: Character[] = [];
  const charA = CharacterBuilder.createNewCharacter().withName('a').withHouse(House.GoldenDeer).build();
  characterPool.push(charA);
  characterPool.push(CharacterBuilder.createNewCharacter().withName('b').withHouse(House.BlackEagles).build());
  expect(CharacterFilter.getCharactersByHouse(characterPool, House.GoldenDeer)).toEqual([charA]);
});

test('Return all characters that have specific skills', () => {
  const characterPool: Character[] = [];
  const hasSkills = CharacterBuilder.createNewCharacter()
    .withName('hasSkills')
    .withBoons([Skill.Authority])
    .withBuddingTalents([Skill.Lance])
    .build();
  const noSkills = CharacterBuilder.createNewCharacter()
    .withName('hasNoSkills')
    .withBanes([Skill.Authority, Skill.Lance])
    .build();
  characterPool.push(hasSkills);
  characterPool.push(noSkills);
  expect(CharacterFilter.getCharactersBySkills(characterPool, [Skill.Lance, Skill.Authority])).toEqual([hasSkills]);
});

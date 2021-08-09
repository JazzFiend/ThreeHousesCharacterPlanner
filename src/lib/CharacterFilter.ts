import Character from './Character/Character';
import House from './enums/House';
import Skill from './enums/Skill';

export default class CharacterFilter {
  public static getCharactersByName(characterPool: Character[], characterNames: string[]): Character[] {
    return characterPool.filter(
      (characterFromPool) => characterNames.includes(characterFromPool.getName()),
    );
  }

  public static getCharactersByHouse(characterPool: Character[], house: House): Character[] {
    return characterPool.filter((characterFromPool) => characterFromPool.getHouse() === house);
  }

  public static getCharactersBySkills(characterPool: Character[], skills: Skill[]): Character[] {
    return characterPool.filter(
      (characterFromPool) => skills.every(
        (skill) => characterFromPool.isBoon(skill) || characterFromPool.isBuddingTalent(skill),
      ),
    );
  }
}

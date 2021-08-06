import Character from './Character';
import House from './enums/House';
import Skill from './enums/Skill';

export default class CharacterGrouper {
  private characterPool: Character[];

  constructor(characterPool: Character[]) {
    this.characterPool = characterPool;
  }

  public getCharactersByName(characterNames: string[]): Character[] {
    return this.characterPool.filter(
      (characterFromPool) => characterNames.includes(characterFromPool.getName()),
    );
  }

  public getCharactersByHouse(house: House): Character[] {
    return this.characterPool.filter((characterFromPool) => characterFromPool.getHouse() === house);
  }

  public getCharactersBySkills(skills: Skill[]): Character[] {
    return this.characterPool.filter(
      (characterFromPool) => skills.every(
        (skill) => characterFromPool.isBoon(skill) || characterFromPool.isBuddingTalent(skill),
      ),
    );
  }
}

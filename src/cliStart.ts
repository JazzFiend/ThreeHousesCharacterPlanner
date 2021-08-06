import Character from './lib/Character';
import ClassOptimizer from './lib/ClassOptimizer';
import { FEClass } from './lib/types/FEClass';
import ThreeHousesCharacterList from './ThreeHousesCharacterList';
import ThreeHousesClassList from './ThreeHousesClassList';

const threeHousesClassList:FEClass[] = ThreeHousesClassList.getFinalClassListRaw();
const characterList: Character[] = ThreeHousesCharacterList.getThreeHousesCharacterList();
const opt = new ClassOptimizer(threeHousesClassList);

// const grouper = new CharacterGrouper(characterList);
// const newList = grouper.getCharactersByHouse(House.BlueLions);

characterList.forEach((character) => {
  console.log(character.getName());
  console.log(opt.getOptimizedClasses(character));
});

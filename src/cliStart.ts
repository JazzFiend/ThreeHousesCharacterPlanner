import Character from './lib/Character';
import ClassOptimizer from './lib/ClassOptimizer';
import { FEClass } from './lib/types/FEClass';
import ThreeHousesCharacterList from './ThreeHousesCharacterList';
import ThreeHousesClassList from './ThreeHousesClassList';

const threeHousesClassList:FEClass[] = ThreeHousesClassList.getFinalClassListRaw();
const characterList: Character[] = ThreeHousesCharacterList.getThreeHousesCharacterList();
const opt:ClassOptimizer = new ClassOptimizer(threeHousesClassList);

characterList.forEach((character) => {
  console.log(character.getName());
  console.log(opt.getOptimizedClasses(character));
});

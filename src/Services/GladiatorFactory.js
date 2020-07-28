import { v4 as uuidv4 } from 'uuid';
import gladiator from '../gladiator.json'
import Body from './Body/Body'


class GladiatorFactory {
  model: null;

  constructor(GladiatorModel) {
    this.model = GladiatorModel
  }

  generateOne() {
    //Construct data
    const id = uuidv4();
    const name = 'test';
    const age = 12;
    const height = 180;
    const weight = 70;
    const strength = 50;
    const agility = 36;
    const lucy = 1.2;
    const description = 'some description';
    const biography = 'a good guy';
    const body = new Body(id, gladiator);
    const stuff = {};

    //  Combine data object
    const data = {
      id: id,
      name: name,
      age: age,
      height: height,
      weight: weight,
      strength: strength,
      agility: agility,
      lucy: lucy,
      description: description,
      biography: biography,
      body: body,
      stuff: stuff,
    }
    //  Create Model
    return new this.model(data)
  }

  generateList(amount) {
    let result = []
    for(let i = 0; i < amount; i ++) {
      result.push(this.generateOne())
    }
  }
}
export default GladiatorFactory;
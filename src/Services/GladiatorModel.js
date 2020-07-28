import Model from './Model'


class GladiatorModel extends(Model) {
  id: null;
  name: null;
  age: null;
  height: null;
  weight: null;
  strength: null;
  agility: null;
  lucy: null;
  description: null;
  biography: null;
  body: null;
  stuff: null;

  constructor(gladiatorObject) {
    super()
    this.id = gladiatorObject.id
    this.name = gladiatorObject.name
    this.age = gladiatorObject.age
    this.height = gladiatorObject.height
    this.weight = gladiatorObject.weight
    this.strength = gladiatorObject.strength
    this.agility = gladiatorObject.agility
    this.lucy = gladiatorObject.lucy
    this.description = gladiatorObject.description
    this.biography = gladiatorObject.biography
    this.body = gladiatorObject.body
    this.stuff = gladiatorObject.stuff
  }

  disablePart(part) {
    this.body.disablePart(part)
  }
}

export default GladiatorModel
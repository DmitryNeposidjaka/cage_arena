import BodyPart from './BodyPart'

class Body {
  id: null;
  model: null;

  constructor(id, model) {
    this.id = id;
    this.model = this.fillModel(id, model)
  }

  fillModel(id, model) {
    const body = {}
    Object.keys(model).map(objectKey => {
      const parts = this.fillParts(id, model[objectKey]);
      body[objectKey] = new BodyPart({id: id + '-' + objectKey, items: parts, name: objectKey});
    });
    return body
  }

  fillParts(id, partsList) {
    return partsList.map(item => {
      item.id = id + '-' + item.name
      return item
    })
  }

  disablePart(part) {
    return this.model[part].disable();
  }
}
export default Body;
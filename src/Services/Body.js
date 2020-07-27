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
      body[objectKey] = {id: id + '-' + objectKey, parts: parts};
    });
    return body
  }

  fillParts(id, partsList) {
    return partsList.map(item => {
      item.id = id + '-' + item.name
      return item
    })
  }
}
export default Body;
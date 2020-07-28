class BodyItemAbstract {
  id: null;
  state: null;
  name: null;

  constructor(data) {
    Object.keys(data).map(objectKey => {
      this[objectKey] = data[objectKey]
    });
    this.STATE_NORMAL = 'NORMAL';
    this.STATE_DAMAGED = 'DAMAGED';
    this.STATE_DESTROYED = 'DESTROYED';
    this.STATE_DEFENCE = 'DEFENCE';
    this.state = this.STATE_NORMAL
  }
}

export default BodyItemAbstract;
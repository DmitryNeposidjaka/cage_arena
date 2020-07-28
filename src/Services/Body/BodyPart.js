import BodyItemAbstract from './BodyItemAbstract'


class BodyPart extends(BodyItemAbstract) {

  items: []

  disable() {
    this.state = this.STATE_DESTROYED
    return true
  }
}

export default BodyPart;
import React, {Component} from 'react';
import gladiatorJson from '../gladiator.json';
import GladiatorFactory from "../Services/GladiatorFactory";
import GladiatorModel from "../Services/GladiatorModel.js";

class Gladiator extends Component {

  state = {
    gladiator: null,
    stateMapper: {
      NORMAL: '#664596',
      DAMAGED: '#DDCF5A',
      DESTROYED: '#DB595D',
      DEFENCE: '#4EB349',
    }
  };



  constructor(props) {
    super(props)
    const factory = new GladiatorFactory(GladiatorModel);
    this.state.gladiator = factory.generateOne()
  }

  partClick(data) {
    const gladiator = this.state.gladiator
    const index = gladiator.body.model[data[1]].items.findIndex(el => {
      return el.id == data[2]
    });

    gladiator.body.model[data[1]].items[index].state = "DAMAGED"
    this.setState({
      gladiator
    })
  }

  createPart(id, name, data) {
    return React.createElement('g', {"id": id, "key": id, "fill": this.state.stateMapper[data.state]}, data.items.map((item, i) => React.createElement(
      'polygon',
      {
        "id": item.name,
        "key": item.name,
        "points": `${item.points}`,
        "fill": this.state.stateMapper[item.state],
        onClick: this.partClick.bind(this, [1, name, item.id])
      })))
  }

  createBody(body) {

    const result = [];
    Object.keys(body).map(objectKey => {
      result.push(this.createPart(body[objectKey].id, objectKey, body[objectKey]));
    });
    return result;
  }

  render() {
    if(this.props.rightArm) {
      const gladiator = this.state.gladiator
      gladiator.disablePart('rightHand')
      console.log(gladiator)

    }

    const fighter1 = React.createElement('svg', {
      "xmlns": "http://www.w3.org/2000/svg",
      "key": "xml",
      "xmlnsXlink": "http://www.w3.org/1999/xlink",
      "version": "1.1",
      "id": "Map",
      "className": "gen-by-synoptic-designer",
      "viewBox": "0 0 300 420",
      "xmlSpace": "preserve",
      "width": "200",
      "height": "400"
    }, [
      React.createElement('g', {
        "id": "gladiator",
        "key": "gladiator",
        "fill": "#394553"
      }, [...this.createBody(this.state.gladiator.body.model)])
    ])


    return fighter1;
  }
}

export default Gladiator;
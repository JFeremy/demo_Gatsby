import React, {Component} from 'react';
import Data from "./data"

class ListPois extends Component {
    state = {
        dataPois: {}
    }

    async componentDidMount() {
        this.setState({dataPois: await Data()})       
    }

    render() {
        console.log(this.state.dataPois);

        return (
          <div>
            Liste des pois {this.state.dataPois.length}
          </div>
        );
      }
}

export default ListPois;

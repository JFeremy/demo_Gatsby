import React, {Component} from 'react';
import Layout from "../components/layout"
import Grid from '@material-ui/core/Grid';

import Data from "../components/data";
import Poi from "../components/poi";


class App extends Component {
    state = {
        dataPois: []
    }

    async componentDidMount() {
        this.setState({dataPois: await Data()})       
    }

    render() {
        return (
            <Layout>    
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <h1>Vous avez {this.state.dataPois.length}  points d'intérêts proche de vous !</h1>
                </Grid>
                <Grid 
                    container 
                    direction="row"
                    spacing={16}
                    justify="center"
                    alignItems="stretch"
                >
                    {this.state.dataPois.map(dataPoi => <Poi key={dataPoi.node.id} dataPoi={dataPoi.node}/>)}
                </Grid>
        </Layout>
        );
    }
}




export default App;
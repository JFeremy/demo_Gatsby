import React from 'react';
import Layout from "../components/layout"
import Grid from '@material-ui/core/Grid';
import { graphql } from "gatsby"

//import Data from "../components/data";
import Poi from "../components/poi";

const App = ({ data }) => (
    <Layout>    
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <h1>Vous avez {data.democityv4.pois.edges.length}  points d'intérêts proche de vous !</h1>
        </Grid>
        <Grid 
            container 
            direction="row"
            spacing={16}
            justify="center"
            alignItems="stretch"
        >
            {data.democityv4.pois.edges.map(dataPoi => <Poi key={dataPoi.node.id} dataPoi={dataPoi.node}/>)}
        </Grid>
    </Layout>
);

export const query = graphql`
    query {
        democityv4 {
            pois {
                edges {
                    node { 
                        id
                        title
                        categories {
                            edges {
                                node {
                                    title
                                }
                            }
                        }
                        description        
                        location {
                            address
                            zipCode
                            city
                        }
                        websites
                    }
                }
            }
        }        
    }
`;


export default App;
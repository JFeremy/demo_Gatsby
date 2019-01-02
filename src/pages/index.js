import React from "react"
import Layout from "../components/layout"
import Data from "../components/data"
import ListPois from "../components/listPois"

export default () => {
    const dataPois = Data();
    console.log(dataPois);
    console.log(dataPois);

    return (    
        <Layout>
            <h1>Liste des points d'intérêts !</h1>
            
            <ListPois dataPois={dataPois}/>
        </Layout>

)}
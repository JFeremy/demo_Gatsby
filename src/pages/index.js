import React from "react"
import Layout from "../components/layout"
import ListPois from "../components/listPois"

const App = () => {
    return (    
        <Layout>
            <h1>Liste des points d'intérêts !</h1>
            
            <ListPois />
        </Layout>

)}

export default App;
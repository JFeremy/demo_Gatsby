import React from "react"
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Layout from "../components/layout"

const ListItemLink = ({title,link}) => (
    <ListItem button component="a" href={link} target="_blanc">
        <ListItemText primary={
            <dl>
                <dt>{title}</dt>
                <dd>{link}</dd>
            </dl>}
        />
    </ListItem>
)

const References = () => {
    return (    
        <Layout>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <h1>Les sources :</h1>
                <List component="nav">                
                    <ListItemLink title="Dépôt du projet" link="https://github.com/JFeremy/demo_Gatsby" />
                    <ListItemLink title="Documentation JAMstack" link="https://jamstatic.fr/" />
                    <ListItemLink title="5 raisons de tester la JAMstack" link="https://jamstatic.fr/2017/03/16/5-raisons-de-tester-la-jamstack/" />
                    <ListItemLink title="Introduction JAMstack" link="https://davidl.fr/blog/jamstack.html" />
                    <ListItemLink title="JAMStack, la nouvelle donne du web statique" link="https://blog.dareboost.com/fr/2018/02/site-statique-performance-web/" />
                    <ListItemLink title="Documentation Gatsby" link="https://www.gatsbyjs.org/" />
                    <ListItemLink title="Questions au créateur de Gatsby" link="https://jamstatic.fr/2017/07/11/interview-kyle-matthews-gatsby/" />
                    <ListItemLink title="Construire un blog statique avec Gatsby et Strapi" link="https://jamstatic.fr/2018/04/26/construire-un-blog-statique-avec-gatsby-et-strapi/" />
                    <ListItemLink title="Gatsby + Contentful + Netlify et Algolia" link="https://jamstatic.fr/2017/12/05/gatsby-contentful-netlify-algolia/" />
                </List>                    
            </Grid>
        </Layout>
    )
}

export default References;
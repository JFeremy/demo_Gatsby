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
    const links = {
        'Dépôt du projet': 'https://github.com/JFeremy/demo_Gatsby',
        'Documentation JAMstack': 'https://jamstatic.fr/',
        '5 raisons de tester la JAMstack': 'https://jamstatic.fr/2017/03/16/5-raisons-de-tester-la-jamstack/',
        'Introduction JAMstack': 'https://davidl.fr/blog/jamstack.html',
        'JAMStack; la nouvelle donne du web statique': 'https://blog.dareboost.com/fr/2018/02/site-statique-performance-web/',
        'Site de Gatsby': 'https://www.gatsbyjs.org/',
        'Questions au créateur de Gatsby': 'https://jamstatic.fr/2017/07/11/interview-kyle-matthews-gatsby/',
        'Construire un blog statique avec Gatsby et Strapi': 'https://jamstatic.fr/2018/04/26/construire-un-blog-statique-avec-gatsby-et-strapi/',
        'Gatsby + Contentful + Netlify et Algolia': 'https://jamstatic.fr/2017/12/05/gatsby-contentful-netlify-algolia/',
        'Site de Netlify': 'https://www.netlify.com/',
        'Demo Orange 1' : 'https://coopnet.sso.infra.ftgroup/recordings/yQqe3MUqAN',
        'Demo Orange 2' :'https://coopnet.sso.infra.ftgroup/recordings/rF2YLVs2E8' 

    }
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
                    {
                           Object.entries(links).map(
                            ([title, link]) => <ListItemLink key={link} title={title} link={link} />
                          )
                    }
                </List>                    
            </Grid>
        </Layout>
    )
}

export default References;
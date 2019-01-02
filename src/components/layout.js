import React, {Fragment} from "react"

import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import styles from './layout.module.css'


export default ({ children }) =>  
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
        }
        render = {data => (
            <Fragment>
                <Header title={data.site.siteMetadata.title} />
                <div className={styles.page}>
                    {children}
                </div>
            </Fragment>
        )}
    />

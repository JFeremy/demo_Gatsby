import React from 'react';

import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styles from './header.module.css'

import {Link} from 'gatsby'

const Header = ({title}) => (    
    <div className={styles.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit" className={styles.grow}>                    
                    <Link className={styles.linkButton} to='/'>{title}</Link>
                </Typography>
                <Button>
                    <Link className={styles.linkButton} to='/sources/'>Les Sources</Link>
                </Button>
            </Toolbar>
        </AppBar>
    </div>
)

Header.propTypes = {
    title: PropTypes.string.isRequired,
  };
  
export default Header;

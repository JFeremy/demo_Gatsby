import React, {Component, Fragment} from "react"
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

class Poi extends Component {
    state = { expanded: false };
  
    handleExpandClick = () => {
      this.setState(state => ({ expanded: !state.expanded }));
    };
    
    render() { 
        const {dataPoi} = this.props;
        return (            
            <Grid item xs={4}>
                <Card>
                    <CardHeader
                        action={
                            <IconButton
                                onClick={this.handleExpandClick}
                                aria-expanded={this.state.expanded}
                                aria-label="Show more"
                            >
                                {this.state.expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                            </IconButton>
                        }
                    title={dataPoi.title}
                    subheader={
                        dataPoi.categories.edges.map(cat => 
                        <Chip key={cat.node.title} label={cat.node.title} />)
                    }
                    />
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>                    
                            <dl>
                                {dataPoi.description && <Fragment><dt>Description</dt><dd>{dataPoi.description}</dd></Fragment>}
                                {dataPoi.location && <Fragment><dt>Adresse</dt><dd>{dataPoi.location.address}</dd></Fragment>}
                                {dataPoi.websites && <Fragment><dt>Sites</dt>{dataPoi.websites.map(website => <dd><a href={website.url} target="_blanc">{website.url}</a></dd>)}</Fragment>}
                            </dl>
                        </CardContent>
                    </Collapse>
                </Card>
            </Grid>
        )
    }
}

export default Poi;

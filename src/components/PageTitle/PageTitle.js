import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { translate } from '../../localization/helpers'
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const classes = theme => {
    return (
        {
            headerPaper: {
                padding: '4px',
                textAlign: 'center',
                marginTop : '2px'
            },
        }
    );
};

class PageTitle extends Component {

    render() {
        const { classes, language, title } = this.props
        return (
            <Paper elevation={0} square={true} className={classes.headerPaper} >
                <Typography variant="h6">
                    {translate(language, title)}
                </Typography>
            </Paper>
        )
    }
}

const mapStateToProps = state => {
    const { language } = state.footer

    return {
        language,
    };
};


const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(classes)(PageTitle));

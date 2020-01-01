import React, { Component } from 'react';
import { Router as Switch, Route, Router, Redirect } from "react-router-dom"; // eslint-disable-line
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom'
import { Paper } from '@material-ui/core';

const classes = theme => {
    return ({
        containerPaper: {
            minHeight: '400px',
            padding: '10px',
            marginTop: '2px'
        },
    })
}

class Home extends Component {

    state = {}

    render() {
        const { classes } = this.props

        return (
            <Paper square={true} className={classes.containerPaper} >
                <h1>Hello World</h1>
            </Paper >
        );
    }
}

const mapStateToProps = state => {
    const { language } = state.footer

    return {
        language
    };
};

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(classes)(withRouter(Home)));


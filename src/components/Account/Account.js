import React, { Component } from 'react';
import { Router as Switch, Route, Router, Redirect } from "react-router-dom"; // eslint-disable-line
import { connect } from 'react-redux';
import { fetchCurrentAction } from '../../_actions/app'
import { withStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { withRouter } from 'react-router-dom'

const classes = theme => {
    return ({
        containerBox: {
            marginTop: '2px'
        }
    })
}

class Account extends Component {

    state = {}

    render() {

        return (
            <Box className={classes.containerBox}>
                <h1>Hello</h1>
            </Box>
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
    fetchCurrentAction: () => dispatch(fetchCurrentAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(classes)(withRouter(Account)));


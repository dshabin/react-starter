import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';

const classes = theme => {
    return ({

    })
}

class Loading extends Component {

    state = {}

    render() {
        return (
            <CircularProgress thickness={5} size={20} />
        )
    }
}

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(classes)(Loading));

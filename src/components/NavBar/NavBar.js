import React, { Component } from 'react';
import { connect } from 'react-redux';
import { translate } from '../../localization/helpers'
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import RightDrawer from '../RightDrawer/RightDrawer';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const classes = theme => {
    return ({
        logoBox: {
            flex: 1,
        },
        logo: {
            color: theme.palette.secondary.main
        },
        signupBtn : {
            color : theme.palette.primary.buttonText
        },
        loginBtn:{
            marginRight :theme.spacing(1)
        },
        appBar: {
            backgroundColor : theme.palette.primary.main,
        }
    })
}

class NavBar extends Component {

    state = {}

    render() {
        let { user, language, classes } = this.props;
        return (
            <AppBar elevation={0} position="static" className={classes.appBar}>
                <Toolbar >
                    <Box component="span" className={classes.logoBox}>
                        <Link to='/'>
                            <Typography className={classes.logo} variant="button">
                                LOGO
                            </Typography>
                        </Link>
                    </Box>
                    {user ? <RightDrawer user={user} /> : <>
                        <Link to='/login' >
                            <Button size="small" className={classes.loginBtn} color="secondary">
                                <Typography variant="button">
                                    {translate(language, "LOGIN")}
                                </Typography>
                            </Button>
                        </Link>
                        <Link to='/signup' >
                            <Button size="small" className={classes.signupBtn} variant="contained" color="secondary">
                                <Typography variant="button">
                                    {translate(language, "SIGNUP")}
                                </Typography>
                            </Button>
                        </Link>
                    </>}
                </Toolbar>
            </AppBar>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(classes)(NavBar));

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { translate } from '../../localization/helpers'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { logoutAction } from '../../_actions/app'
import List from '@material-ui/core/List';
import { withRouter } from 'react-router-dom'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuIcon from '@material-ui/icons/Menu';

const classes = theme => {
    return ({

        listItemText: {
            fontSize: '0.8em'
        },

        nested: {
            paddingLeft: theme.spacing(4),
        },
        hamburger: {
            color : theme.palette.secondary.main
        },
        list: {
            width: '250px',
        },
        depositButton: {
            marginTop: theme.spacing(2),
            fontSize: '0.8em',
            borderRadius: '0px'
        },
    })
}
class RightDrawer extends Component {
    state = { isWalletOpen: false, isDashboardOpen: false }

    openProfileDrawer(e) {
        this.setState({ isProfileDrawerOpen: true })
    }

    closeProfileDrawer(e) {
        this.setState({ isProfileDrawerOpen: false })
    }


    logout(e) {
        this.props.logoutAction()
    }
   

   



    render() {
        let {  language, classes } = this.props;
        const { isProfileDrawerOpen } = this.state
        return (

            <>
                <IconButton className={classes.hamburger} onClick={this.openProfileDrawer.bind(this)} edge="start" color="inherit" aria-label="profile-menu">
                    <MenuIcon/>
                </IconButton >
                <Drawer open={isProfileDrawerOpen}
                    anchor="right"
                    classes={{ paper: classes.paper }}
                >
                    <ClickAwayListener onClickAway={this.closeProfileDrawer.bind(this)}>

                        <List
                            className={classes.list}
                            component="nav"
                        >
                            <ListItem onClick={this.logout.bind(this)} button key={translate(language, "LOGOUT")} >
                                <ListItemText>
                                    <Typography >
                                        {translate(language, 'LOGOUT')}
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <Divider />
                        </List>
                    </ClickAwayListener>
                </Drawer>
            </>
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
    logoutAction: () => dispatch(logoutAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(classes)(withRouter(RightDrawer)));



import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router as Switch, Route, Router, Redirect } from "react-router-dom"; // eslint-disable-line
import { connect } from 'react-redux';
import { fetchCurrentAction } from '../../_actions/app'
import { getLanguageDir } from '../../localization/helpers'
import { createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core';
import Notification from '../Notification/Notification'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { pink, blueGrey, yellow, teal, indigo, grey, orange, deepOrange, amber } from '@material-ui/core/colors'; // eslint-disable-line
import Box from '@material-ui/core/Box';
import history from './history';
import CircularProgress from '@material-ui/core/CircularProgress';
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import Home from '../Home/Home';

const classes = theme => {
  return ({
    root: {
      flexGrow: 1,
    },
    box: {
      minHeight: '400px'
    }
  })
}

class App extends Component {

  state = { loading: false }


  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      if (this.props.user) {
        this.setState({
          loading: false
        })
      }
    }
  }

  componentDidMount() {

    if (localStorage.getItem('token')) {
      this.props.fetchCurrentAction()
    } else {
      this.setState({
        loading: false
      })
    }

  }

  render() {
    const { language, user , classes} = this.props
    const languageDir = getLanguageDir(language)
    document.body.dir = languageDir;
    const theme = createMuiTheme({
      direction: languageDir,
      palette: {
        type: 'dark',
        primary:blueGrey,
        secondary:  amber,
      },
      props: {
        MuiButtonBase: {
          disableRipple: true
        }
      }
    });
    if (this.state.loading) {
      return (
        <CircularProgress color="secondary" thickness={5} size={50} />
      )
    }
    return (
      <Box>
        <Router history={history}>
          <ThemeProvider theme={theme} >
            <CssBaseline />
            <NavBar user={user} />
            <Box className={classes.box}>
              <Route exact path="/" render={() => (<Home/>)} />
              <Route exact path="/login" render={() => (user ? (<Redirect to="/" />) : (<Login />))} />
              <Route exact path="/signup" render={() => (user ? (<Redirect to="/" />) : (<Signup />))} />
            </Box>
            <Footer />
            <Notification />
          </ThemeProvider>
        </Router>
      </Box>
    );
  }
}

const mapStateToProps = state => {
  const { language } = state.footer
  const { user } = state.app

  return {
    language, user
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCurrentAction: () => dispatch(fetchCurrentAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(classes)(App));


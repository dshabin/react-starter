import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { translate } from '../../localization/helpers'
import { withStyles } from '@material-ui/core';
import { loginAction, loginReset } from '../../_actions/login'
import CircularProgress from '@material-ui/core/CircularProgress';
import { withRouter } from 'react-router-dom'


const classes = theme => {
    return (
        {
            loginButton: {
                marginTop: theme.spacing(2),
                height: '4em',
                color : theme.palette.primary.buttonText

            },
            progress: {
                marginLeft: '10px',
            },
            textField: {
                marginTop: theme.spacing(2),
            },
            containerPaper: {
                //minHeight: '400px',
                padding: '20px',
            },

        }
    );
};



class Login extends Component {

    state = { form: {}, validation: {}, isFormInitial: true }

    validateForm(form) {
        let errors = {};
        if (form.hasOwnProperty("username")) {
            if (form.username.length === 0) {
                errors.username = 'USERNAME_REQUIRED_ERROR'
            }
        }
        if (form.hasOwnProperty("password")) {
            if (form.password.length === 0) {
                errors.password = 'PASSWORD_REQUIRED_ERROR'
            }
        }
        return errors
    }

    handleInputChange(e) {
        const form = this.state.form;
        form[e.target.id] = e.target.value;
        const validation = this.validateForm(form);

        let isFormInitial = true;
        let allFields = ["username", "password"]
        if (allFields.length === Object.keys(form).length) {
            isFormInitial = false
        }
        this.setState({ form, validation, isFormInitial });
    }

    loginClickHandler(e) {
        this.props.loginAction(this.state.form.username, this.state.form.password)
    }

    render() {
        const { classes, language, pending } = this.props
        const { validation, isFormInitial } = this.state
        return (
            <>

                <Paper square={true} className={classes.containerPaper} >
                    <Grid container justify="center" alignItems="center" direction="row"  >

                        <Grid item xs={12} sm={6} md={6}  >
                            <Typography variant="h6">
                                {translate(language, "LOGIN")}

                            </Typography>
                            <form noValidate autoComplete="off" className={classes.form}>
                                <TextField
                                    className={classes.textField}
                                    label={translate(language, 'USERNAME')}
                                    error={!!validation.username}
                                    fullWidth
                                    variant="outlined"
                                    onChange={this.handleInputChange.bind(this)}
                                    id="username"
                                    autoComplete="off"
                                    disabled={pending}
                                    helperText={translate(language, validation.username)}

                                />
                                <TextField
                                    className={classes.textField}
                                    variant="outlined"

                                    error={!!validation.password}
                                    // placeholder={translate(language, 'PASSWORD')}
                                    fullWidth
                                    id="password"
                                    onChange={this.handleInputChange.bind(this)}
                                    autoComplete="off"
                                    label={translate(language, 'PASSWORD')}
                                    disabled={pending}
                                    type="password"
                                    helperText={translate(language, validation.password)}
                                />
                                <Button
                                    fullWidth
                                    className={classes.loginButton}
                                    onClick={this.loginClickHandler.bind(this)}
                                    color="primary"
                                    variant="contained"
                                    disabled={pending || (Object.keys(validation).length !== 0) || isFormInitial}
                                    size="large" >
                                    <Typography variant="button">
                                        {translate(language, "LOGIN")}
                                    </Typography>
                                    {pending && <CircularProgress className={classes.progress} thickness={5} size={20} />}
                                </Button>
                            </form>
                        </Grid>
                    </Grid>
                </Paper>

            </>
        )
    }
}

const mapStateToProps = state => {
    const { language } = state.footer

    const { pending } = state.login
    return {
        language,
        pending,
    };
};


const mapDispatchToProps = dispatch => ({
    loginReset: () => dispatch(loginReset()),
    loginAction: (username, password) => dispatch(loginAction(username, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(classes)(withRouter(Login)));

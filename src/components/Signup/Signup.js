import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { translate } from '../../localization/helpers'
import { withStyles } from '@material-ui/core';
import { signupAction, signupReset } from '../../_actions/signup'
import CircularProgress from '@material-ui/core/CircularProgress';

const classes = theme => {
    return (
        {
            signupButton: {
                marginTop: theme.spacing(2),
                height: '4em'
                //borderRadius: '0px'
            },
            progress: {
                marginLeft: '10px',
            },
            textField: {
                marginTop: theme.spacing(2)
            },
            containerPaper: {
                minHeight: '400px',
                padding: '20px',
            },
        }
    );
};



class Signup extends Component {

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
        if (form.hasOwnProperty("confirmPassword")) {
            if (form.confirmPassword.length === 0) {
                errors.confirmPassword = 'CONFIRM_PASSWORD_REQUIRED_ERROR'
            }
            if (form.confirmPassword !== form.password) {
                errors.confirmPassword = 'CONFIRM_PASSWORD_NOT_MATCH_ERROR'
            }
        }
        return errors
    }

    handleInputChange(e) {
        const form = this.state.form;
        form[e.target.id] = e.target.value;
        const validation = this.validateForm(form);

        let isFormInitial = true;
        let allFields = ["username", "password", "confirmPassword"]
        if (allFields.length === Object.keys(form).length) {
            isFormInitial = false
        }
        this.setState({ form, validation, isFormInitial });
    }
    signupClickHandler(e) {
        this.props.signupAction(this.state.form.username, this.state.form.password)
    }

    render() {
        const { classes, language, pending } = this.props
        const { validation, isFormInitial } = this.state
        return (
            <>
                {/* <PageTitle title="SIGNUP" /> */}

                <Paper elevation={0} square={true} className={classes.containerPaper} >
                    <Grid container justify="center" alignItems="center" direction="row"  >

                        <Grid item xs={12} sm={6} md={6}  >
                            <Typography variant="h6">
                            {translate(language, "CREATE_YOUR_ACCOUNT")}

                        </Typography>
                            <form noValidate autoComplete="off">
                                <TextField
                                    className={classes.textField}
                                    label={translate(language, 'USERNAME')}
                                    error={!!validation.username}
                                    fullWidth
                                    onChange={this.handleInputChange.bind(this)}
                                    id="username"
                                    autoComplete="off"
                                    disabled={pending}
                                    variant="outlined"
                                    helperText={translate(language, validation.username)}

                                />
                                <TextField
                                    variant="outlined"

                                    className={classes.textField}
                                    error={!!validation.password}
                                    fullWidth
                                    id="password"
                                    onChange={this.handleInputChange.bind(this)}
                                    autoComplete="off"
                                    label={translate(language, 'PASSWORD')}
                                    disabled={pending}
                                    type="password"
                                    helperText={translate(language, validation.password)}

                                />
                                <TextField variant="outlined"

                                    className={classes.textField}
                                    error={!!validation.confirmPassword}
                                    fullWidth
                                    id="confirmPassword"
                                    onChange={this.handleInputChange.bind(this)}
                                    autoComplete="off"
                                    label={translate(language, 'CONFIRM_PASSWORD')}
                                    disabled={pending}
                                    type="password"
                                    helperText={translate(language, validation.confirmPassword)}

                                />
                                <Button
                                    fullWidth
                                    className={classes.signupButton}
                                    onClick={this.signupClickHandler.bind(this)}
                                    color="secondary"
                                    variant="contained"
                                    disabled={pending || (Object.keys(validation).length !== 0) || isFormInitial}
                                    size="large" >
                                    <Typography>
                                        {translate(language, "SIGNUP")}
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

    const { pending } = state.signup
    return {
        language,
        pending
    };
};


const mapDispatchToProps = dispatch => ({
    signupReset: () => dispatch(signupReset()),
    signupAction: (username, password) => dispatch(signupAction(username, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(classes)(Signup));

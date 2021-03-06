import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import { selectLanguageAction } from '../../_actions/footer'
import { connect } from 'react-redux';
import { withStyles, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { translate } from '../../localization/helpers'
import Link from '@material-ui/core/Link';



const classes = theme => {
    return ({
        gridItem: {
            textAlign: 'left',
            color: theme.palette.primary.link
        },
        paper: {
            padding: theme.spacing(2),
            backgroundColor : theme.palette.primary.main,
        },
        link: {
            cursor: 'pointer'
        },
        languageSelect: {
            color: theme.palette.primary.link,
            minWidth: '100px'
        }
    })
}

class Footer extends Component {
    state = {}

    languageSelectChangeHandler(e) {
        this.props.selectLanguageAction(e.target.value)
    }
    render() {
        const { classes, language } = this.props
        return (
            <Paper elevation={0} square className={classes.paper}>
                <Grid container justify="flex-start" direction="row" spacing={2} >
                    <Grid item xs={12} sm={12} className={classes.languageSelect}>
                        <Select
                            className={classes.languageSelect}
                            native
                            variant="outlined"
                            margin='dense'
                            value={language ? language : "english"}
                            onChange={this.languageSelectChangeHandler.bind(this)}

                        >
                            <option value="english">English</option>
                            <option value="farsi">فارسی</option>
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.gridItem}>
                        <Typography>
                            <Link color="inherit" >
                                {translate(language, "SUPPORT")}
                            </Link>
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} className={classes.gridItem}>
                        <Typography >
                            {translate(language, "TERMS")}
                        </Typography>
                    </Grid>

                </Grid>
            </Paper>
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
    selectLanguageAction: (language) => dispatch(selectLanguageAction(language)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(classes)(Footer));

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import LeagueIcon from '../Images/leagueIcon.png';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));



const SummonerSearch = () => {
    const [region, setRegion] = useState('euw1');
    const [summonerName, setSummonerName] = useState('');
    const [summonerId, setSummonerId] = useState(null);

    const classes = useStyles();

    let data;

    const searchSummoner = async () => {
        const result = await fetch(`/api/summoner`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                summonerName,
                region
            })
        });

        if (result.ok) {
            data = await result.json();
            setSummonerId(data.id);
            console.log(JSON.stringify(data));
            return data
        } else {
            console.error(`Error during summoner call: ${result.error}`);
        }
    }

    const onRegionChange = (e) => {
        setRegion(e.target.value);
    }

    const onSummonerNameChange = (e) => {
        setSummonerName(e.target.value);
    }


    if (!summonerId) {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                        <img style={{ backgroundColor: 'transparant' }} width="50" height="50" alt="league icon" src={LeagueIcon}></img>
                    <Typography component="h1" variant="h5">
                        Find summoner
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            autoFocus
                            value={summonerName}
                            onChange={onSummonerNameChange}
                        />
                        <FormControl className={classes.form} noValidate>
                            <NativeSelect
                                value={region}
                                onChange={onRegionChange}
                            >
                                <option value="euw1">EUW1</option>
                                <option value="us">US</option>
                            </NativeSelect>
                            <FormHelperText>select region</FormHelperText>
                        </FormControl>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={searchSummoner}
                            className={classes.form}
                            fullWidth
                        >Search
                    </Button>
                    </form>
                </div>
            </Container>
        )
    }
    else {
        return (
            <div>
                <Container component="main" maxWidth="xs">
                </Container>
            </div>
        )
    }
}


export default SummonerSearch;
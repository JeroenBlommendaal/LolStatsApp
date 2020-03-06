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
import Avatar from "@material-ui/core/Avatar"

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
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
    const [summonerIcon, setSummonerIcon] = useState('');
    const [rankedData, setRankedData] = useState(null);

    const classes = useStyles();

    const searchSummoner = async () => {

        let data;

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
            setSummonerIcon(data.profileIconId);
            console.log(JSON.stringify(data));
            searchRanked()
        } else {
            console.error(`Error during summoner call: ${result.error}`);
        }
    }

    const searchRanked = async () => {

        let rankedData

        console.log(summonerId);

        const result = await fetch(`/api/ranked`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: summonerId,
                region
            })
        });

        if (result.ok) {
            rankedData = await result.json();
            setRankedData(rankedData)
            console.log(JSON.stringify(rankedData));
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
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <img style={{ backgroundColor: 'transparant' }} width="150" height="150" alt="league icon" src={"http://ddragon.leagueoflegends.com/cdn/10.5.1/img/profileicon/" + summonerIcon + ".png"}></img>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {summonerName}
                        {rankedData}
                    </Typography>
                </div>
            </Container>
        )
    }
}

export default SummonerSearch;
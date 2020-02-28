import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(2),
        marginTop: theme.spacing(2),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    }
}));

const SummonerSearch = () => {
    const [region, setRegion] = useState('euw1');
    const [summonerName, setSummonerName] = useState('');
    const [summonerId, setSummonerId] = useState(null);

    let data;

    const classes = useStyles();

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

    return (
        <div>
            <Grid container>
                <Grid item sm={4} alignContent="center" justify="center">
                    <FormControl className={classes.formControl}>
                        <NativeSelect
                            value={region}
                            onChange={onRegionChange}
                        >
                            <option value="euw1">EUW1</option>
                            <option value="us">US</option>
                        </NativeSelect>
                        <FormHelperText>select region</FormHelperText>
                    </FormControl>
                </Grid>
                        <Grid item sm={4} alignContent="center" justify="center">
                            <form className={classes.formControl} noValidate autoComplete="off">
                                <TextField
                                    id="outlined-basic"
                                    label="Summoner name"
                                    variant="outlined"
                                    value={summonerName}
                                    onChange={onSummonerNameChange}
                                />
                            </form>
                        </Grid>
                        <Grid item sm={4} alignContent="center" justify="center" ali>
                            <Button
                                className={classes.formControl}
                                variant="contained"
                                color="primary"
                                onClick={searchSummoner}
                            >Search</Button>
                        </Grid>
                <p>
                    {data && data.stringify()}
                </p>
            </Grid>
        </div >
    );
}

export default SummonerSearch;
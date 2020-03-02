import React from 'react';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';

const SummonerResult = () => {
    return (
        <div>
            <Grid container>
                <Grid item sm={4} alignContent="center" justify="center">
                    <Paper elevation={0}>Summoner Icon</Paper>
                    <Paper elevation={0}>Summoner Icon</Paper>
                    <Paper elevation={0}>Summoner Icon</Paper>
                    <Paper elevation={0}>Summoner Icon</Paper>
                    <Paper elevation={0}>Summoner Icon</Paper>
                </Grid>
                <Grid item sm={4} alignContent="center" justify="center">
                    <Paper elevation={0}>Rank</Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default SummonerResult
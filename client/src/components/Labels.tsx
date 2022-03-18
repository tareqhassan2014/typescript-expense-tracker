import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Labels = () => {
    return (
        <>
            {[2, 2, 2].map((_, key) => (
                <LabelComponents key={key} />
            ))}
        </>
    );
};

const LabelComponents = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ my: 1 }}
        >
            <Grid item>
                <Grid container alignItems="center">
                    <Box
                        sx={{
                            bgcolor: '#f9c74f',
                            width: 10,
                            height: 10,
                            py: 2,
                            mr: 1,
                            borderRadius: 2,
                        }}
                    />
                    <Typography>Savings</Typography>
                </Grid>
            </Grid>
            <Grid item>46%</Grid>
        </Grid>
    );
};

export default Labels;

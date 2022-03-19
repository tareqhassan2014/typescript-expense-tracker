import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useGetLabelsQuery } from '../../app/services/apiSlice';
import { getLabels } from '../../helper/helper';

const Labels = () => {
    const { data, isError, isLoading } = useGetLabelsQuery();

    if (isError)
        return (
            <Typography color="red" align="center" sx={{ my: 5 }}>
                Error
            </Typography>
        );

    if (isLoading)
        return (
            <Typography align="center" sx={{ my: 5 }}>
                Loading....
            </Typography>
        );

    return (
        <>
            {data &&
                getLabels(data).map((labelData, key) => (
                    <LabelComponents key={key} labelData={labelData} />
                ))}
        </>
    );
};

const LabelComponents = ({ labelData }: { labelData: any }) => {
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
                            bgcolor: labelData.color ?? 'red',
                            width: 7,
                            height: 2,
                            py: 1.4,
                            mr: 1,
                            borderRadius: 2,
                        }}
                    />
                    <Typography>{labelData.type ?? ''}</Typography>
                </Grid>
            </Grid>
            <Grid item>{Math.round(labelData.percent) ?? 0}%</Grid>
        </Grid>
    );
};

export default Labels;

import { Grid, Typography } from '@mui/material';
import { ArcElement, Chart } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useGetLabelsQuery } from '../../app/services/apiSlice';
import { chartData, getTotal } from '../../helper/helper';
import Labels from './Labels';

Chart.register(ArcElement);

const Graph = () => {
    const { data } = useGetLabelsQuery();

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={12} sx={{ position: 'relative' }}>
                {data && (
                    <>
                        <Doughnut {...chartData(data)} />
                        <Typography
                            align="center"
                            component="div"
                            sx={{
                                position: 'absolute',
                                top: '40%',
                                left: 0,
                                right: 0,
                                mx: 'auto',
                            }}
                        >
                            Title
                            <Typography
                                sx={{
                                    display: 'block',
                                    color: '#34D399',
                                    fontSize: 24,
                                }}
                            >
                                ${data ? getTotal(data) : 0}
                            </Typography>
                        </Typography>
                    </>
                )}
            </Grid>
            <Grid item xs={12} sx={{ width: 1 / 2 }}>
                <Labels />
            </Grid>
        </Grid>
    );
};

export default Graph;

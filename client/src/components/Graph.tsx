import { Grid, Typography } from '@mui/material';
import { ArcElement, Chart } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Labels from './Labels';

Chart.register(ArcElement);
const config = {
    data: {
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                ],
                hoverOffset: 4,
                borderRadius: 30,
                spacing: 10,
            },
        ],
    },
    options: {
        cutout: 115,
    },
};

const Graph = () => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={12} sx={{ position: 'relative' }}>
                <Doughnut {...config} />
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
                        ${0}
                    </Typography>
                </Typography>
            </Grid>
            <Grid item xs={12} sx={{ width: 1 / 2 }}>
                <Labels />
            </Grid>
        </Grid>
    );
};

export default Graph;

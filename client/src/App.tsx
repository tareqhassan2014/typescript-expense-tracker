import { Container, Grid, Typography } from '@mui/material';
import Form from './features/expense/Form';
import Graph from './features/expense/Graph';

function App() {
    return (
        <Container>
            <Typography
                align="center"
                sx={{
                    py: 2,
                    color: 'common.white',
                    bgcolor: '#1E293B',
                    borderRadius: 2,
                    my: 4,
                }}
                variant="h3"
            >
                Expense Tracker
            </Typography>

            <Grid container>
                <Grid item md={6} xs={12}>
                    <div>
                        <Graph />
                    </div>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Form />
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;

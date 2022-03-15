import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import {
    Alert,
    Avatar,
    Box,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography,
} from '@mui/material';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginRequest, useLoginMutation } from '../../app/services/auth';
import { setCredentials } from './authSlice';

export default function SignIn() {
    const [show, setShow] = React.useState(false);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [alert, setAlert] = React.useState<string | null>(null);

    const [login, { isLoading }] = useLoginMutation();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            setAlert(null);
            const data = new FormData(event.currentTarget);

            const user = await login({
                email: data.get('email'),
                password: data.get('password'),
            } as LoginRequest).unwrap();

            setAlert('Login successfully !');

            dispatch(setCredentials(user));
            navigate('/');
        } catch (err: any) {
            console.log('====================================');
            console.log(err.data);
            setAlert(err.data);
            console.log('====================================');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {alert && <Alert severity="error">{alert}</Alert>}

                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type={show ? 'text' : 'password'}
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={show ? true : false}
                                onChange={() => setShow(!show)}
                                color="primary"
                            />
                        }
                        label="Show password"
                    />

                    <LoadingButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        loading={isLoading}
                    >
                        Sign In
                    </LoadingButton>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

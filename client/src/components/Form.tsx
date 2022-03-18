import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Container, TextField, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
import { useDispatch } from 'react-redux';

const Form = () => {
    const dispatch = useDispatch();
    const [type, setType] = React.useState('investment');

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const data = new FormData(event.currentTarget);

            console.log({
                email: data.get('name'),
                password: data.get('amount'),
                types: type,
            });
        } catch (err: any) {
            console.log('====================================');
            console.log(err.data);

            console.log('====================================');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Typography align="center" variant="h6" sx={{ fontWeight: 'bold' }}>
                Transaction
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
                    id="name"
                    name="name"
                    autoFocus
                    placeholder="Salary,House Rend, SIP"
                    sx={{ mb: 2 }}
                />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={type}
                        label="Type"
                        onChange={handleChange}
                        required
                    >
                        <MenuItem value="investment">Investment</MenuItem>
                        <MenuItem value="savings">Savings</MenuItem>
                        <MenuItem value="expense">Expense</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="amount"
                    placeholder="Amount"
                />

                <LoadingButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, bgcolor: '#6366F1' }}
                    loading={false}
                >
                    Make Transaction
                </LoadingButton>
            </Box>
        </Container>
    );
};

export default Form;

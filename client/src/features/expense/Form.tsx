import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Container, TextField, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAddTransactionMutation } from '../../app/services/apiSlice';
import TransactionList from './TransactionList';

type Inputs = {
    name: string;
    type: string;
    amount: number;
};

const Form = () => {
    const {
        register,
        handleSubmit,
        watch,
        resetField,
        formState: { errors },
    } = useForm<Inputs>();
    const watchType = watch('type', 'savings');
    const [addTransaction, { isLoading }] = useAddTransactionMutation();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        addTransaction(data);

        resetField('name');
        resetField('amount');
    };

    console.log('====================================');
    console.log(errors.amount);
    console.log('====================================');

    return (
        <Container component="main" maxWidth="xs">
            <Typography align="center" variant="h6" sx={{ fontWeight: 'bold' }}>
                Transaction
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                sx={{ mt: 1 }}
            >
                <TextField
                    error={Boolean(errors.name)}
                    label={Boolean(errors.name) ? 'Error' : ''}
                    helperText={errors.name?.message}
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    autoFocus
                    placeholder="Salary,House Rend, SIP"
                    sx={{ mb: 2 }}
                    {...register('name', {
                        required: 'Expense must have a Name',
                    })}
                />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Type"
                        {...register('type')}
                        value={watchType}
                    >
                        <MenuItem value="investment">Investment</MenuItem>
                        <MenuItem value="savings">Savings</MenuItem>
                        <MenuItem value="expense">Expense</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    error={Boolean(errors.amount)}
                    label={Boolean(errors.amount) ? 'Error' : 'Amount'}
                    helperText={errors.amount?.message}
                    margin="normal"
                    required
                    fullWidth
                    placeholder="Amount"
                    type="number"
                    {...register('amount', {
                        required: 'Amount must have!',
                        valueAsNumber: true,
                    })}
                />

                <LoadingButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, bgcolor: '#6366F1' }}
                    loading={isLoading}
                >
                    Make Transaction
                </LoadingButton>
            </Box>
            <TransactionList />
        </Container>
    );
};

export default Form;

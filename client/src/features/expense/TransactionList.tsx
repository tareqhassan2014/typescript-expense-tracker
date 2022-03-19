import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Container, Grid, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import {
    ILabels,
    useDeleteTransactionMutation,
    useGetLabelsQuery,
} from '../../app/services/apiSlice';

let Transaction: JSX.Element | JSX.Element[];

const TransactionList = () => {
    const { data, isError, isFetching } = useGetLabelsQuery();
    const [deleteTransaction] = useDeleteTransactionMutation();
    const handelClick = (_id: string) => {
        deleteTransaction(_id);
    };

    if (isFetching) {
        Transaction = <Typography align="center">Loading....</Typography>;
    } else if (data) {
        Transaction = data.map((data, index) => (
            <Transactions data={data} key={index} handler={handelClick} />
        ));
    } else if (isError) {
        Transaction = (
            <Typography color="red" align="center" sx={{ my: 5 }}>
                Error
            </Typography>
        );
    }

    return (
        <Container>
            <Typography
                align="center"
                variant="h6"
                sx={{ fontWeight: 'bold', mb: 3 }}
            >
                History
            </Typography>
            {Transaction}
        </Container>
    );
};

const Transactions = ({
    data,
    handler,
}: {
    data: ILabels;
    handler: (_id: string) => void;
}) => {
    if (!data) return null;

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
                boxShadow: 2,
                mb: 1,
                borderRadius: 1,
                borderRight: `5px solid ${data.color ?? '#f9c74f'}`,
            }}
        >
            <IconButton aria-label="delete" onClick={() => handler(data._id)}>
                <DeleteForeverIcon sx={{ color: data.color ?? '#f9c74f' }} />
            </IconButton>

            <Typography align="center" sx={{ mr: 3 }}>
                {data.name ?? ''}
            </Typography>

            <Box />
        </Grid>
    );
};

export default TransactionList;

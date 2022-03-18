import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import React from 'react';
import { api } from '../app/services/auth';

const TransactionList = () => {
    const { data, isError, isSuccess, isFetching } = api.useGetLabelsQuery();
    const [deleteTransaction] = API.useDeleteTransactionMutation();
    const handelClick = (_id: string) => {
        deleteTransaction({ _id });
    };

    let Transaction;

    if (isFetching) {
        Transaction = <div>Loading....</div>;
    } else if (isSuccess) {
        Transaction = data.map((data, index) => (
            <Transactions data={data} key={index} handler={handelClick} />
        ));
    } else if (isError) {
        Transaction = <div>Error</div>;
    }

    return (
        <div className="flex flex-col py-6 gap-3">
            <h1 className="history py-4 font-bold text-xl">History</h1>
            {Transaction}
        </div>
    );
};

const Transactions = ({ data: ICategories, handler }) => {
    if (!data) return null;

    return (
        <div
            className="item flex justify-center bg-gray-50 py-2 rounded-r"
            style={{ borderRight: `8px solid ${data.color ?? '#f9c74f'}` }}
        >
            <button className="px-3" onClick={() => handler(data._id)}>
                <DeleteForeverIcon color={data.color ?? '#f9c74f'} />
            </button>
            <span className="block w-full">{data.name ?? ''}</span>
        </div>
    );
};

export default TransactionList;

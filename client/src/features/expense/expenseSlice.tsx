import { createSlice } from '@reduxjs/toolkit';

export interface ICategories {
    type: string;
    color: string;
}

export interface ILabels {
    type: string;
    color: string;
    name: string;
    amount: number;
    _id: string;
}

type expenseState = {
    categories: ICategories[] | [];
    label: ILabels[] | [];
};

const slice = createSlice({
    name: 'expense',
    initialState: { categories: [], label: [] } as expenseState,
    reducers: {
        getTransactions: (state) => {
            // Get transaction code
        },
    },
});

export const { getTransactions } = slice.actions;

export default slice.reducer;

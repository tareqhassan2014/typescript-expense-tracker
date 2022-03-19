import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface TransactionRequest {
    name: string;
    amount: number;
    type: string;
}

export interface TransactionResponse {
    name: string;
    amount: number;
    type: string;
    _id: string;
    color: string;
}

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

const baseUrl = 'https://typescript-expense-tracker.herokuapp.com/api/v1';
// const baseUrl = 'https://group-project-server.herokuapp.com/api/v1';

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl,
    }),
    tagTypes: ['transactions'],
    endpoints: (builder) => ({
        getCategories: builder.query<ICategories[], void>({
            query: () => '/categories',
        }),
        getLabels: builder.query<ILabels[], void>({
            query: () => '/labels',
            providesTags: ['transactions'],
        }),
        addTransaction: builder.mutation<
            TransactionResponse,
            TransactionRequest
        >({
            query: (credentials) => ({
                url: '/transaction',
                method: 'POST',
                body: credentials,
            }),
            invalidatesTags: ['transactions'],
        }),
        deleteTransaction: builder.mutation({
            query: (id) => ({
                url: '/transaction/' + id,
                method: 'DELETE',
            }),
            invalidatesTags: ['transactions'],
        }),
    }),
});

export const {
    useGetLabelsQuery,
    useGetCategoriesQuery,
    useAddTransactionMutation,
    useDeleteTransactionMutation,
} = api;

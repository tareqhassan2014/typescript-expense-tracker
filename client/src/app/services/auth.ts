import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICategories, ILabels } from '../../features/expense/expenseSlice';
import { RootState } from '../store';

export interface User {
    name: string;
    role: string;
    email: string;
    phone: string;
    status?: string;
    profileImage?: string;
    password?: string;
}

export interface UserResponse {
    user: User;
    token: string;
}

export interface LoginRequest {
    name: string;
    role: string;
    email: string;
    phone: string;
    status?: string;
    profileImage?: string;
    password: string;
}

export interface TransactionRequest {
    name: string;
    amount: number;
    type: string;
}

// const baseUrl = 'https://typescript-expense-tracker.herokuapp.com/api/v1';
// const baseUrl = 'https://group-project-server.herokuapp.com/api/v1';
const baseUrl = ' http://localhost:5555/api/v1';

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, { getState }) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const token = (getState() as RootState).auth.token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation<UserResponse, LoginRequest>({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        protected: builder.mutation<{ message: string }, void>({
            query: () => '/protected',
        }),
        getCategories: builder.query<ICategories[], void>({
            query: () => '/categories',
        }),
        getLabels: builder.query<ILabels[], void>({
            query: () => '/labels',
        }),
        addTransaction: builder.mutation<
            TransactionRequest,
            TransactionRequest
        >({
            query: (credentials) => ({
                url: '/transaction',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useProtectedMutation,
    useGetCategoriesQuery,
    useGetLabelsQuery,
    useAddTransactionMutation,
} = api;

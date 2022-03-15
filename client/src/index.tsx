import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { persistor, store } from './app/store';

ReactDOM.render(
    <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
            <CssBaseline />
            <App />
        </Provider>
    </PersistGate>,
    document.getElementById('root')
);

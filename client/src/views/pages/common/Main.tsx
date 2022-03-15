import { Box } from '@mui/material';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('../home/Home'));
const Login = React.lazy(() => import('../../../features/auth/Login'));

const Main = () => {
    return (
        <Box sx={{ minHeight: '80vh' }}>
            <Suspense fallback={<>Loading...</>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Suspense>
        </Box>
    );
};

export default Main;

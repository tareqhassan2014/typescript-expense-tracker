import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const theme = {
    palette: {
        mode: 'dark',
        primary: {
            main: 'hsl(200, 74%, 61%)',
        },
    },
};

const slice = createSlice({
    name: 'theme',
    initialState: theme,
    reducers: {
        toggleDarkMode: (theme) => {
            theme.palette.mode === 'dark'
                ? (theme.palette.mode = 'light')
                : (theme.palette.mode = 'dark');
        },
    },
});

export const { toggleDarkMode } = slice.actions;

export default slice.reducer;

export const selectCurrentTheme = (state: RootState) => state.theme;

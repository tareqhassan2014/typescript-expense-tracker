import { PaletteMode } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { BrowserRouter } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import TheLayout from './views/pages/TheLayout';

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const { myTheme } = useTheme();
    const theme = createTheme({
        palette: {
            mode: myTheme.palette.mode as PaletteMode,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <TheLayout />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;

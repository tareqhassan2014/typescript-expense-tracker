import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentTheme } from '../features/theme/themeSlice';

export const useTheme = () => {
    const myTheme = useSelector(selectCurrentTheme);

    return useMemo(() => ({ myTheme }), [myTheme]);
};

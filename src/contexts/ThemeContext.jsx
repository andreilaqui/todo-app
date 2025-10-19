// 🔧 Core React
import { createContext, useState, useEffect } from 'react';

//  create the context, name ThemeContext
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('appTheme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    // toggle between light and dark
    function toggleTheme() {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('appTheme', newTheme);
    }

    // provide context value to children
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
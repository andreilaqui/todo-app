// 🔧 Core React
import { createContext, useState } from 'react';

//  create the context, name ThemeContext
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    // toggle between light and dark
    function toggleTheme() {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }

    //  provide context value to children
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
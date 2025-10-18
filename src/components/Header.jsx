
// 🧩 Pages
// import HomePage from './HomePage';
// import AboutPage from './AboutPage';

// 🧱 Components
import ThemeToggle from './ThemeToggle';

// 🌓 Theme
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


function Header() {
    const { theme } = useContext(ThemeContext);
    return (
        <header className={
            theme === 'dark'
                ? "flex justify-between items-center p-4 bg-gray-700"
                : "flex justify-between items-center p-4 bg-blue-200"
            }>
            <h1 className={
                theme === 'dark'
                    ? "text-3xl font-bold text-blue-200"
                    : "text-3xl font-bold text-gray-700"
                }>My Task App </h1>
            <ThemeToggle />
        </header>
    )
}

export default Header;
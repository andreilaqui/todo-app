// 🚦 React Router
import { Outlet, Link } from 'react-router-dom';

// 🧱 Components
import Header from "./Header"

// 🌓 Theme
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Layout() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={
                theme === 'dark'
                    ? "max-w mx-auto min-h-screen bg-gray-900 text-white"
                    : "max-w mx-auto min-h-screen bg-red text-gray-900"
            }
        >
            <Header />
            <nav className={
                theme === 'dark'
                    ? "bg-gray-800 p-2 space-x-9 justify-center flex"
                    : "bg-gray-100 p-2 space-x-9 justify-center flex"
                }
            >
                <Link to="/">Home</Link>
                <Link to="/todo">To Do</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <Outlet />
        </div>
    )
}
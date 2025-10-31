// 🔧 Core React
import { useContext } from 'react';

// 🧱 Components
import { ThemeContext } from '../contexts/ThemeContext'

// 🎨 Styles
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

export default function ThemeToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className={theme==='dark'
                    ? `p-2 rounded-full 
                       bg-[#e0e0e0]
                       shadow-[4px_4px_8px_#1a1a1a,-4px_-4px_8px_#ffffff22]
                       hover:scale-105 cursor-pointer
                       active:scale-95 transition-all duration-150`
                    : `p-2 rounded-full
                       bg-[#e0e0e0]
                       shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]
                       hover:scale-105  cursor-pointer
                       active:scale-95 transition-all duration-150`}
        >
            {theme === 'light' ? (<SunIcon className="w-3 h-3 text-yellow-500" />) : (<MoonIcon className="w-3 h-3 text-gray-700" />)}
        </button>
    );
}
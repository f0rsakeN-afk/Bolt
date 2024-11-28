import React from 'react'
import { Switch } from './switch'
import { useTheme } from '@/context/ThemeContext'

const Navbar: React.FC = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div className='container mx-auto max-w-6xl flex items-center justify-between py-2 px-2'>
            {/* Logo or brand name */}
            <div className="font-bold text-xl">
                Website Generator
            </div>

            {/* Right side items including theme switch */}
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <Switch
                        checked={theme === 'dark'}
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar
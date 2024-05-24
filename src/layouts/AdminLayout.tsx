import HeaderAdminComponents from '@/components/component/HeaderAdminComponents'
import SidebarAdminComponent from '@/components/component/SidebarAdminComponent'
import { Outlet } from 'react-router-dom'
import '../styles/AdminLayout.css'
import { useState } from 'react'

const AdminLayout = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const handleToggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode)
    }
    return (
        <div className={`flex ${isDarkMode ? 'dark-mode' : ''}`}>
            <div
                className='SidebarAdminComponent'
                style={{
                    width: '270px',
                    position: 'fixed',
                    height: '100vh', // Set the height to 100% of the viewport height
                    top: 0,
                    left: 0,
                    zIndex: 1
                }}
            >
                <SidebarAdminComponent />
            </div>
            <main className='flex-grow ml-64 p-8'>
                <HeaderAdminComponents darkMode={isDarkMode} toggleDarkMode={handleToggleDarkMode} />
                <div className={`bg-main ${isDarkMode ? 'dark-mode-content' : ''}`}>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default AdminLayout

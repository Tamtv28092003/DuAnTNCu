import FooterClientComponent from '@/components/component/FooterClientComponent'
import HeaderClientComponent from '@/components/component/HeaderClientComponent'
import { Outlet } from 'react-router-dom'

const BaseLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <HeaderClientComponent />

            <main>
                <Outlet />
            </main>
            <FooterClientComponent />
        </div>
    )
}

export default BaseLayout

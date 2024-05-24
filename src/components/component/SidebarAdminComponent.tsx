import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

type Props = {}

const SidebarAdminComponent = (props: Props) => {
    return (
            <div className='SidebarAdminComponent' style={{ height: '100vh' }}>
                <div className=' flex flex-col h-full border-r' style={{ background: '#1C2434', height: '100%', color: "white" }}>
                    <div className='flex items-center justify-center h-14 border-b'>
                        <img
                            src='https://matpetfamily.com/wp-content/uploads/2019/11/m%E1%BA%ADt-pet-logo-300x297.png'
                            alt=''
                            className='block w-[50px]'
                        />
                        <div>MeowDelights</div>
                    </div>
                    <div className='overflow-y-auto overflow-x-hidden flex-grow'>
                        <ul className='flex flex-col py-4 space-y-1'>
                            <li className='px-5'>
                                <div className='flex flex-row items-center h-8'>
                                    <div className='text-sm font-light tracking-wide text-gray-500'>Menu</div>
                                </div>
                            </li>
                            <li>
                                <Link
                                    to='dashboard'
                                    className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-white-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'
                                >
                                    <span className='inline-flex justify-center items-center ml-4'>
                                        <svg
                                            className='w-5 h-5'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                stroke-width='2'
                                                d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                                            ></path>
                                        </svg>
                                    </span>
                                    <span className='ml-2 text-sm tracking-wide truncate' style={{ color: 'white' }}>
                                        Dashboard
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/admin/products'
                                    className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-white-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'
                                >
                                    <span className='inline-flex justify-center items-center ml-4'>
                                        <svg
                                            className='w-5 h-5'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                stroke-width='2'
                                                d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
                                            ></path>
                                        </svg>
                                    </span>
                                    <span className='ml-2 text-sm tracking-wide truncate' style={{ color: 'white' }}>
                                        List Product
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/admin/categories'
                                    className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-white-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'
                                >
                                    <span className='inline-flex justify-center items-center ml-4'>
                                        <svg
                                            className='w-5 h-5'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                stroke-width='2'
                                                d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
                                            ></path>
                                        </svg>
                                    </span>
                                    <span className='ml-2 text-sm tracking-wide truncate' style={{ color: 'white' }}>
                                        List Category
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/admin/voucher'
                                    className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-white-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'
                                >
                                    <span className='inline-flex justify-center items-center ml-4'>
                                        <Icon icon='carbon:product' />
                                    </span>
                                    <span className='ml-2 text-sm tracking-wide truncate' style={{ color: 'white' }}>
                                        {' '}
                                        List Voucher
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/admin/type_voucher'
                                    className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-white-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'
                                >
                                    <span className='inline-flex justify-center items-center ml-4'>
                                        <svg
                                            className='w-5 h-5'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                stroke-width='2'
                                                d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
                                            ></path>
                                        </svg>
                                    </span>
                                    <span className='ml-2 text-sm tracking-wide truncate' style={{ color: 'white' }}>
                                        List Type Voucher
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/admin/bill'
                                    className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-white-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'
                                >
                                    <span className='inline-flex justify-center items-center ml-4'>
                                        <svg
                                            className='w-5 h-5'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                stroke-width='2'
                                                d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
                                            ></path>
                                        </svg>
                                    </span>
                                    <span className='ml-2 text-sm tracking-wide truncate' style={{ color: 'white' }}>
                                        List Bill
                                    </span>
                                </Link>
                            </li>

                            <li className='px-5'>
                                <div className='flex flex-row items-center h-8'>
                                    <div className='text-sm font-light tracking-wide text-gray-500'>Settings</div>
                                </div>
                            </li>
                            <li>
                                <Link
                                    to='#'
                                    className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'
                                >
                                    <span className='inline-flex justify-center items-center ml-4'>
                                        <svg
                                            className='w-5 h-5'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                stroke-width='2'
                                                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                                            ></path>
                                        </svg>
                                    </span>
                                    <span className='ml-2 text-sm tracking-wide truncate' style={{ color: 'white' }}>
                                        Profile
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='#'
                                    className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-white-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'
                                >
                                    <span className='inline-flex justify-center items-center ml-4'>
                                        <svg
                                            className='w-5 h-5'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                stroke-width='2'
                                                d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                                            ></path>
                                            <path
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                stroke-width='2'
                                                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                                            ></path>
                                        </svg>
                                    </span>
                                    <span className='ml-2 text-sm tracking-wide truncate' style={{ color: 'white' }}>
                                        Settings
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='#'
                                    className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-white-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'
                                >
                                    <span className='inline-flex justify-center items-center ml-4'>
                                        <svg
                                            className='w-5 h-5'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                stroke-width='2'
                                                d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                                            ></path>
                                        </svg>
                                    </span>
                                    <span className='ml-2 text-sm tracking-wide truncate' style={{ color: 'white' }}>
                                        Logout
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default SidebarAdminComponent

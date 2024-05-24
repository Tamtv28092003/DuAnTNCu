import React from 'react'
import '../../styles/Footer.css'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'
const FooterClientComponent = () => {
    return (
        <footer className='bg-white dark:bg-gray-900'>
            <div className='container px-6 py-12 mx-auto'>
                <div className='md:flex md:-mx-3 md:items-center md:justify-between'>
                    <h1 className='text-xl font-semibold tracking-tight text-gray-800 md:mx-3 xl:text-2xl dark:text-white'>
                        Subscribe our newsletter to get update.
                    </h1>

                    <div className='mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto'>
                        <Link
                            to='#'
                            className='inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg gap-x-3 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80'
                        >
                            <span>Sign Up Now</span>

                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke-width='1.5'
                                stroke='currentColor'
                                className='w-5 h-5'
                            >
                                <path
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                                />
                            </svg>
                        </Link>
                    </div>
                </div>

                <hr className='my-6 border-gray-200 md:my-10 dark:border-gray-700' />

                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    <div>
                        <p className='font-semibold text-gray-800 dark:text-white'>Về Chúng tôi</p>

                        <div className='flex flex-col items-start mt-5 space-y-2'>
                            <Link
                                to='#'
                                className='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500'
                            >
                                Trang chủ
                            </Link>
                            <Link
                                to='#'
                                className='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500'
                            >
                                Giới thiệu
                            </Link>
                            <Link
                                to='#'
                                className='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500'
                            >
                                Sản phẩm
                            </Link>
                        </div>
                    </div>

                    <div>
                        <p className='font-semibold text-gray-800 dark:text-white'>Chính sách MeowDelights</p>

                        <div className='flex flex-col items-start mt-5 space-y-2'>
                            <Link
                                to='#'
                                className='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500'
                            >
                                Chính sách giao hàng
                            </Link>
                            <Link
                                to='#'
                                className='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500'
                            >
                                Chính sách mua hàng
                            </Link>
                            <Link
                                to='#'
                                className='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500'
                            >
                                Chính sách đổi trả
                            </Link>
                        </div>
                    </div>

                    <div>
                        <p className='font-semibold text-gray-800 dark:text-white'>Hướng dẫn và trợ giúp</p>

                        <div className='flex flex-col items-start mt-5 space-y-2'>
                            <Link
                                to='#'
                                className='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500'
                            >
                                Hướng dẫn mua hàng
                            </Link>
                            <Link
                                to='#'
                                className='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500'
                            >
                                Hướng dẫn đổi trả
                            </Link>
                            <Link
                                to='#'
                                className='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500'
                            >
                                Hướng dẫn kiểm tra đơn hàng
                            </Link>
                        </div>
                    </div>

                    <div>
                        <p className='font-semibold text-gray-800 dark:text-white'>MeoDelights Shop</p>

                        <div className='flex flex-col items-start mt-5 space-y-2'>
                            <Link
                                to='#'
                                className='text-[17px] text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500'
                            >
                                Số 1, Trịnh Văn Bô, Nam Từ Liêm, HN
                            </Link>
                            <Link
                                to='#'
                                className='text-[17px] text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500'
                            >
                                0123456789
                            </Link>
                            <Link
                                to='#'
                                className='text-[17px] text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500'
                            >
                                meowdelights@fpt.edu.vn
                            </Link>
                        </div>
                    </div>
                </div>

                <hr className='my-6 border-gray-200 md:my-10 dark:border-gray-700' />

                <div className='flex flex-col items-center justify-between sm:flex-row'>
                    <Link to='#'>
                        <img className='w-auto h-7' src='https://merakiui.com/images/full-logo.svg' alt='' />
                    </Link>

                    <p className='mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300'>
                        © Copyright 2024. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default FooterClientComponent

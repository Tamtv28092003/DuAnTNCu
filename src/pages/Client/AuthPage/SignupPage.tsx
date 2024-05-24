import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { message } from 'antd'
import { signup } from '@/services/auth'

const SignupPage = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = async (data:any) => {
        console.log(data)
        // Thực hiện xử lý đăng ký tài khoản tại đây
        try {
            const reponse = await signup(data);
            console.log("api signup",reponse);
            message.success(reponse?.data?.message);
            navigate('/signin');
        } catch (error:any) {
            console.log(error);
            message.warning(error?.response?.data?.message);
        }
    }

    return (
        <div>
            <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl'>
                <div className='hidden bg-cover lg:block lg:w-1/2 pt-4 pl-4'>
                    <img src='https://i.pinimg.com/564x/f1/85/01/f18501bb5948f2789c8db87d1f376e42.jpg' alt='' />
                </div>
                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    <div className='flex justify-center mx-auto'>
                        <img className='w-auto h-7 sm:h-8' src='https://merakiui.com/images/logo.svg' alt='' />
                    </div>
                    <p className='mt-3 text-xl text-center text-gray-600 dark:text-gray-200'>Đăng ký!</p>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b dark:border-gray-600 lg:w-1/4'></span>
                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
                        <div className='mb-4'>
                            <label
                                htmlFor='LoggingName'
                                className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'
                            >
                                Họ Tên
                            </label>
                            <input
                                id='LoggingName'
                                {...register('name')}
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                            />
                           
                        </div>

                        <div className='mb-4'>
                            <label
                                htmlFor='LoggingEmailAddress'
                                className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'
                            >
                                Email
                            </label>
                            <input
                              
                                {...register('email')}
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                            />
                        
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor='loggingPassword'
                                className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'
                            >
                                Mật khẩu
                            </label>
                            <input
                                id='loggingPassword'
                                {...register('password')}
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
                                type='password'
                            />
                       
                        </div>

                        <div className='mb-4'>
                            <label
                                htmlFor='confirmPassword'
                                className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'
                            >
                                Xác nhận mật khẩu
                            </label>
                            <input  
                                {...register('confirmPassword')}
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
                                type='password'
                            />
                           
                        </div>

                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                                Đăng ký
                            </button>
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b dark:border-gray-600 md:w-1/4'></span>
                        <Link to='#' className='text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline'>
                            Sign up with Google
                        </Link>
                        <span className='w-1/5 border-b dark:border-gray-600 md:w-1/4'></span>
                    </div>
                    <Link
                        to='#'
                        className='flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'
                    >
                        <div className='px-4 py-2'>
                            <svg className='w-6 h-6' viewBox='0 0 40 40'>
                                {/* ... (Google logo paths) ... */}
                            </svg>
                        </div>
                        <span className='w-5/6 px-4 py-3 font-bold text-center'>Đăng ký với Google</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignupPage
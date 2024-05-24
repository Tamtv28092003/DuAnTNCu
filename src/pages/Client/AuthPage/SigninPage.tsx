

import { signin } from '@/services/auth'
import { message } from 'antd'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

const SigninPage = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit
      
    } = useForm()

    const onSubmit = async(data:any) => {
        console.log(data)
        const values = {
            email:data.email,
            password:data.password
        }
        try {
            const reponse = await signin(values);
            console.log("api SIgnin",reponse);
            if(reponse?.data?.user?.role ==="admin"){
                message.success('Đăng nhập thành công admin');
navigate('/admin');
            }
            if(reponse?.data?.user?.role ==="nhanvien"){
                message.success('Đăng nhập thành công nhân viên');
                navigate('/admin')
            }
            if(reponse?.data?.user?.role ==="member"){
                message.success('Đăng nhập thành công !');
                navigate('/')
            }
            
        } catch (error:any) {
            console.log(error);
            message.warning(error?.response?.data?.message);
            
        }
        // Thực hiện xử lý đăng ký tài khoản tại đây
    }
    return (
        <div>
            <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <img
                        className='mx-auto h-10 w-auto'
                        src='https://matpetfamily.com/wp-content/uploads/2019/11/m%E1%BA%ADt-pet-logo-300x297.png'
                        alt='Your Company'
                    />
                    <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                        Sign in to Meowmart
                    </h2>
                </div>

                <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                    <form className='space-y-6' action='#' method='POST' onSubmit={handleSubmit(onSubmit)}> 
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
                                Email address
                            </label>
                            <div className='mt-2'>
                                <input
                                    id='email'
                                    type='email'
                                
                                {...register('email')}
                                    
                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </div>

                        <div>
                           
                            <div className='mt-2'>
                                <input
                                   {...register('password')}
                                    type='password'
                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type='submit'
                                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className='mt-10 text-center text-sm text-gray-500'>
                        Not a member?{' '}
                        <Link to='#' className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
                            Registered
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SigninPage
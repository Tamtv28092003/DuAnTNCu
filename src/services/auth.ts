// import { IAuth } from '@/interface/IAuth'
// import instance from './core/api'

import instance from "./core/api";

// export const getAll = async () => {}
// export const getOne = async (id: string) => {}
// export const update = async (user: IAuth) => {}
// export const add = async (user: IAuth) => {}
// export const remove = async (user: IAuth) => {}
// //mẫu product




export const signin = (user:any)=>{
    return instance.post('/auth/signin',user);
}
export const signup = (user:any)=>{
    return instance.post('/auth/signup',user);
}
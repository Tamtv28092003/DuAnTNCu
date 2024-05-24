import { IProduct } from '@/interface/IProduct'
import instance from './core/api'

export const getAll = async () => {
    try {
        const response = await instance.get('/products')
        return response.data
    } catch (error) {
        console.log(`['GETALL_PRODUCT_ERROR']`, error)
    }
}
export const getOne = async (id: string) => {
    try {
        const response = await instance.get(`/products/${id}`)
        return response.data
    } catch (error) {
        console.log(`['GETONE_PRODUCT_ERROR']`, error)
    }
}
export const update = async (product: IProduct) => {
    try {
        const response = await instance.patch(`/products/${product.id}`, product)
        return response.data
    } catch (error) {
        console.log(`['UPDATE_PRODUCT_ERROR']`, error)
    }
}
export const add = async (product: IProduct) => {
    try {
        const response = await instance.post('/products/', product)
        return response.data
    } catch (error) {
        console.log(`['ADD_PRODUCT_ERROR']`, error)
    }
}
export const remove = async (product: IProduct) => {
    try {
        await instance.delete(`/products/${product.id}`)
    } catch (error) {
        console.log(`['DELETE_PRODUCT_ERROR']`, error)
    }
}

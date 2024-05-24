import { getAll, getOne } from '@/services/product'
import { useQuery } from 'react-query'

export const useProductQuery = (productId?: string) => {
    const { data, ...rest } = useQuery({
        queryKey: productId ? ['PRODUCT', productId] : ['PRODUCT'],
        queryFn: () => (productId ? getOne(productId) : getAll())
    })

    return { data, ...rest }
}
//mẫu product

import { getAll, getOne } from '@/services/cart'
import { useQuery } from 'react-query'

export const useCartQuery = (cartId?: string) => {
    const { data, ...rest } = useQuery({
        queryKey: cartId ? ['CART', cartId] : ['CART'],
        queryFn: () => (cartId ? getOne(cartId) : getAll())
    })

    return { data, ...rest }
}
//mẫu product

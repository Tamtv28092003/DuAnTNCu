import { getAll, getOne } from '@/services/typeProduct'
import { useQuery } from 'react-query'

export const useTypeProductQuery = (typeProductId?: string) => {
    const { data, ...rest } = useQuery({
        queryKey: typeProductId ? ['TYPEPRODUCT', typeProductId] : ['TYPEPRODUCT'],
        queryFn: () => (typeProductId ? getOne(typeProductId) : getAll())
    })

    return { data, ...rest }
}
//mẫu product

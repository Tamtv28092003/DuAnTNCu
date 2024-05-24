import { getAll, getOne } from '@/services/typeVoucher'
import { useQuery } from 'react-query'

export const useTypeVoucherQuery = (typeVcId?: string) => {
    const { data, ...rest } = useQuery({
        queryKey: typeVcId ? ['TYPEVOUCHER', typeVcId] : ['TYPEVOUCHER'],
        queryFn: () => (typeVcId ? getOne(typeVcId) : getAll())
    })

    return { data, ...rest }
}
//mẫu product

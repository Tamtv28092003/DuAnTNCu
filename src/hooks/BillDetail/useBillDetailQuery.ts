import { getAll, getOne } from '@/services/billDetail'
import { useQuery } from 'react-query'

export const useBillDetailQuery = (billDetailId?: string) => {
    const { data, ...rest } = useQuery({
        queryKey: billDetailId ? ['BILLDETAIL', billDetailId] : ['BILLDETAIL'],
        queryFn: () => (billDetailId ? getOne(billDetailId) : getAll())
    })

    return { data, ...rest }
}
//mẫu product

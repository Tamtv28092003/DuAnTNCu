import { getAll, getOne } from '@/services/voucher'
import { useQuery } from 'react-query'

export const useVoucherQuery = (voucherId?: string) => {
    const { data, ...rest } = useQuery({
        queryKey: voucherId ? ['VOUCHER', voucherId] : ['VOUCHER'],
        queryFn: () => (voucherId ? getOne(voucherId) : getAll())
    })

    return { data, ...rest }
}
//mẫu product

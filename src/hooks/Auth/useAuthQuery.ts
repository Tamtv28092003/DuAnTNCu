import { getAll, getOne } from '@/services/auth'
import { useQuery } from 'react-query'

export const useAuthQuery = (authId?: string) => {
    const { data, ...rest } = useQuery({
        queryKey: authId ? ['AUTH', authId] : ['AUTH'],
        queryFn: () => (authId ? getOne(authId) : getAll())
    })

    return { data, ...rest }
}
//mẫu product

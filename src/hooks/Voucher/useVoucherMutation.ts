import { IVoucher } from '@/interface/IVoucher'
import { add, remove, update } from '@/services/voucher'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'

const formSchema = Joi.object({
    name: Joi.string().min(2).max(50),
    price: Joi.number()
})

type useProductMutationProps = {
    action: 'ADD' | 'UPDATE' | 'DELETE'
    defaultValues?: IVoucher
    onSuccess?: () => void
}

export const useProductMutation = ({
    action,
    defaultValues = { name: '', price: 0 },
    onSuccess
}: useProductMutationProps) => {
    const queryClient = useQueryClient()

    const { mutate, ...rest } = useMutation({
        mutationFn: async (voucher: IVoucher) => {
            switch (action) {
                case 'ADD':
                    return await add(voucher)
                case 'UPDATE':
                    return await update(voucher)
                case 'DELETE':
                    return await remove(voucher)
                default:
                    return null
            }
        },
        onSuccess: () => {
            onSuccess && onSuccess()
            queryClient.invalidateQueries({
                queryKey: ['PRODUCT']
            })
        }
    })
    const form = useForm({
        resolver: joiResolver(formSchema),
        defaultValues
    })
    const onSubmit: SubmitHandler<any> = (values) => {
        console.log(values)
        mutate(values)
    }
    const onRemove = (voucher: IVoucher) => {
        mutate(voucher)
    }
    return {
        form,
        onSubmit,
        onRemove,
        ...rest
    }
}
//mẫu product

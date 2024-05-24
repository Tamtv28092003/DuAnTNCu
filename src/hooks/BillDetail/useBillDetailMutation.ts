import { IBillDetail } from '@/interface/IBillDetail'
import { add, remove, update } from '@/services/billDetail'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'

const formSchema = Joi.object({
    name: Joi.string().min(2).max(50),
    price: Joi.number()
})

type useBillDetailMutationProps = {
    action: 'ADD' | 'UPDATE' | 'DELETE'
    defaultValues?: IBillDetail
    onSuccess?: () => void
}

export const useBillDetailMutation = ({
    action,
    defaultValues = { name: '', price: 0 },
    onSuccess
}: useBillDetailMutationProps) => {
    const queryClient = useQueryClient()

    const { mutate, ...rest } = useMutation({
        mutationFn: async (billDetail: IBillDetail) => {
            switch (action) {
                case 'ADD':
                    return await add(billDetail)
                case 'UPDATE':
                    return await update(billDetail)
                case 'DELETE':
                    return await remove(billDetail)
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
    const onRemove = (billDetail: IBillDetail) => {
        mutate(billDetail)
    }
    return {
        form,
        onSubmit,
        onRemove,
        ...rest
    }
}
//mẫu product

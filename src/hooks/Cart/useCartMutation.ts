import { ICart } from '@/interface/ICart'
import { add, remove, update } from '@/services/cart'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'

const formSchema = Joi.object({
    name: Joi.string().min(2).max(50),
    price: Joi.number()
})

type useCartMutationProps = {
    action: 'ADD' | 'UPDATE' | 'DELETE'
    defaultValues?: ICart
    onSuccess?: () => void
}

export const useCartMutation = ({
    action,
    defaultValues = { name: '', price: 0 },
    onSuccess
}: useCartMutationProps) => {
    const queryClient = useQueryClient()

    const { mutate, ...rest } = useMutation({
        mutationFn: async (cart: ICart) => {
            switch (action) {
                case 'ADD':
                    return await add(cart)
                case 'UPDATE':
                    return await update(cart)
                case 'DELETE':
                    return await remove(cart)
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
    const onRemove = (cart: ICart) => {
        mutate(cart)
    }
    return {
        form,
        onSubmit,
        onRemove,
        ...rest
    }
}
//mẫu product

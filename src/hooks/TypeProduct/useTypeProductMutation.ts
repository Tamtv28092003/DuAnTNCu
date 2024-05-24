import { ITypeProduct } from '@/interface/ITypeProduct'
import { add, remove, update } from '@/services/typeProduct'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'

const formSchema = Joi.object({
    name: Joi.string().min(2).max(50),
    price: Joi.number()
})

type useTypeProductMutationProps = {
    action: 'ADD' | 'UPDATE' | 'DELETE'
    defaultValues?: ITypeProduct
    onSuccess?: () => void
}

export const useTypeProductMutation = ({
    action,
    defaultValues = { name: '', price: 0 },
    onSuccess
}: useTypeProductMutationProps) => {
    const queryClient = useQueryClient()

    const { mutate, ...rest } = useMutation({
        mutationFn: async (typeProduct: ITypeProduct) => {
            switch (action) {
                case 'ADD':
                    return await add(typeProduct)
                case 'UPDATE':
                    return await update(typeProduct)
                case 'DELETE':
                    return await remove(typeProduct)
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
    const onRemove = (typeProduct: ITypeProduct) => {
        mutate(typeProduct)
    }
    return {
        form,
        onSubmit,
        onRemove,
        ...rest
    }
}
//mẫu product

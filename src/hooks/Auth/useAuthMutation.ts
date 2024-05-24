import { IAuth } from '@/interface/IAuth'
import { add, remove, update } from '@/services/auth'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'

const formSchema = Joi.object({
    name: Joi.string().min(2).max(50),
    price: Joi.number()
})

type useAuthMutationProps = {
    action: 'ADD' | 'UPDATE' | 'DELETE'
    defaultValues?: IAuth
    onSuccess?: () => void
}

export const useAuthMutation = ({
    action,
    defaultValues = { name: '', price: 0 },
    onSuccess
}: useAuthMutationProps) => {
    const queryClient = useQueryClient()

    const { mutate, ...rest } = useMutation({
        mutationFn: async (auth: IAuth) => {
            switch (action) {
                case 'ADD':
                    return await add(auth)
                case 'UPDATE':
                    return await update(auth)
                case 'DELETE':
                    return await remove(auth)
                default:
                    return null
            }
        },
        onSuccess: () => {
            onSuccess && onSuccess()
            queryClient.invalidateQueries({
                queryKey: ['AUTH']
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
    const onRemove = (auth: IAuth) => {
        mutate(auth)
    }
    return {
        form,
        onSubmit,
        onRemove,
        ...rest
    }
}
//mẫu product

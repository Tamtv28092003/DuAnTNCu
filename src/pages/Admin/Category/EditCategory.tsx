import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle } from '@/components/ui/sheet'

const categories = [
    {
        id: 'jjkglhkgjgkhjh1',
        name: 'hehe'
    },
    {
        id: 'jjkglhkgjgkhjh2',
        name: 'gkhlj'
    }
]
const EditCategory = ({ id, name }: any) => {
    const { register, handleSubmit, setValue, reset } = useForm()

    // Tìm danh mục tương ứng với id trong danh sách
    const category = categories.find((category) => category.id === id)

    useEffect(() => {
        // Reset form và đặt giá trị từ danh mục vào input khi danh mục thay đổi
        reset(category)
    }, [reset, category])

    const onSubmit = (data: any) => {
        // Xử lý dữ liệu khi form được submit
        console.log(data)
    }

    return (
        <div>
            <SheetContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <SheetHeader>
                        <SheetTitle>SỬA LOẠI DANH MỤC</SheetTitle>
                    </SheetHeader>
                    <div className='grid gap-4 py-4'>
                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label htmlFor='name' className='text-right'>
                                Tên
                            </Label>
                            <Input
                                id='name'
                                defaultValue={name}
                                {...register('name')}
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    setValue('name', e.target.value)
                                }}
                                className='col-span-3'
                            />
                        </div>
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button type='submit'>Lưu thay đổi</Button>
                        </SheetClose>
                    </SheetFooter>
                </form>
            </SheetContent>
        </div>
    )
}

export default EditCategory

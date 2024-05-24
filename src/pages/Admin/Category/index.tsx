import '@/styles/Cate.css'
import { Link } from 'react-router-dom'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import AddCategory from './AddCategory'
import { IoMdAdd } from 'react-icons/io'
import EditCategory from './EditCategory'

type Props = {}

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

const ListCategory = (props: Props) => {
    return (
        <div>
            <div className='container catepage'>
                <div>
                    <p className='text-[30px]' style={{ fontWeight: 900 }}>
                        Danh mục sản phẩm{' '}
                    </p>
                </div>
                <div className='flex justify-end ...'>
                    <div>
                        <Sheet>
                            <SheetTrigger>
                                <button
                                    className='w-32 px-10 py-4 pl-4 border-1 border-gray-100 rounded bg-white-100 text-white'
                                    style={{ backgroundColor: 'blue', width: '15%' }}
                                >
                                    <IoMdAdd />
                                </button>
                            </SheetTrigger>
                            <AddCategory />
                        </Sheet>
                    </div>
                </div>

                <table className='table mt-3' border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TÊN DANH MỤC</th>
                            <th style={{ padding: 0, width: '20%' }}>HÀNH ĐỘNG</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((cate, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{cate.name}</td>
                                <td
                                    colSpan={2}
                                    style={{
                                        padding: 0,
                                        paddingTop: '5px',
                                        paddingBottom: '5px',
                                        textAlign: 'center',
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Sheet>
                                        <SheetTrigger>
                                            <button
                                                className='border-1 border-gray-300 rounded bg-white-150 text-white'
                                                style={{ backgroundColor: 'blue', width: '100%', padding: '5px 8px' }}
                                            >
                                                Sửa
                                            </button>
                                        </SheetTrigger>
                                        <EditCategory id={cate.id} />
                                    </Sheet>
                                    &nbsp;
                                    <button
                                        className='border-1 border-gray-300 rounded bg-white-150 text-white'
                                        style={{ backgroundColor: 'red', width: '20%', padding: '5px 8px' }}
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListCategory

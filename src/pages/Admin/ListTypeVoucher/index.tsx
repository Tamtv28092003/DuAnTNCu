import React, { useState } from 'react'
// import Modal from 'react-modal';
import '@/styles/Cate.css'
import { IoMdAdd } from 'react-icons/io'
import { Link } from 'react-router-dom'

const typevoucher = [
    {
        id: '1',
        name: 'Loại 1'
    },
    {
        id: '2',
        name: 'Loại 2'
    }
]

const ListTypeVoucher = () => {
    // modal add
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [newVoucherName, setNewVoucherName] = useState('')

    const openAddModal = () => {
        setIsAddModalOpen(true)
    }

    const closeAddModal = () => {
        setIsAddModalOpen(false)
        // Reset input field when modal is closed
        setNewVoucherName('')
    }

    const handleAddVoucher = () => {
        // Implement logic to add the new voucher
        // For simplicity, let's just log the new voucher name
        console.log(`Add New Voucher - Name: ${newVoucherName}`)
        // Close the modal
        closeAddModal()
    }

    // form để edit type voucher
    const [editVoucherName, setEditVoucherName] = useState('')
    const [editedVoucherId, setEditedVoucherId] = useState(null)

    const handleEditVoucher = (id: any, name: any) => {
        setEditedVoucherId(id)
        setEditVoucherName(name)
    }

    const handleSaveEdit = () => {
        // Implement the logic to save the edited voucher
        // For simplicity, let's just log the edited voucher details
        console.log(`Save Edited Voucher - ID: ${editedVoucherId}, Name: ${editVoucherName}`)

        // Reset state after saving
        setEditedVoucherId(null)
        setEditVoucherName('')
    }

    const handleCancelEdit = () => {
        // Reset state on cancel
        setEditedVoucherId(null)
        setEditVoucherName('')
    }

    return (
        <div>
            <div className='container catepage'>
                <div className='my-3'>
                    <p className='text-[30px]' style={{ fontWeight: 900 }}>
                        Loại mã khuyến mại{' '}
                    </p>
                </div>
                <div className='flex justify-end ...'>
                    <div>
                        <button
                            onClick={openAddModal}
                            className='w-32 px-10 py-4 pl-4 border-1 border-gray-100 rounded bg-white-100 text-white'
                            style={{ backgroundColor: 'blue', width: '15%' }}
                        >
                            <IoMdAdd />
                        </button>
                    </div>
                </div>
                {isAddModalOpen && (
                    <div className='fixed inset-0 z-10 overflow-y-auto'>
                        <div className='flex items-center justify-center min-h-screen'>
                            <div className='relative bg-white  p-8  border-slate-500 border-2 rounded-md'>
                                <h2 className='text-xl font-semibold mb-4'>Thêm loại voucher</h2>
                                <input
                                    className='border-2 border-black rounded-md pl-3 mb-4'
                                    type='text'
                                    value={newVoucherName}
                                    onChange={(e) => setNewVoucherName(e.target.value)}
                                    placeholder='Loại Voucher'
                                />
                                <div className='flex justify-end'>
                                    <button onClick={handleAddVoucher} className='bg-blue-500 px-4 py-1 rounded mr-2'>
                                        Thêm
                                    </button>
                                    <button onClick={closeAddModal} className='bg-gray-500 px-4 py-1 rounded'>
                                        Hủy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <table className='table mt-3' border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TÊN VOUCHER</th>
                            <th>HÀNH ĐỘNG</th>
                        </tr>
                    </thead>
                    <tbody>
                        {typevoucher.map((typevch, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td className='input-column'>
                                    {editedVoucherId === typevch.id ? (
                                        <input
                                            className='border border-gray-300 rounded-md pl-3 w-full'
                                            type='text'
                                            value={editVoucherName}
                                            onChange={(e) => setEditVoucherName(e.target.value)}
                                            placeholder='Loại Voucher'
                                        />
                                    ) : (
                                        typevch.name
                                    )}
                                </td>
                                <td
                                    className='border-1 border-gray-300 bg-white-150 text-white'
                                    colSpan={2}
                                    style={{ padding: 0 }}
                                >
                                    {editedVoucherId === typevch.id ? (
                                        <>
                                            <button onClick={handleSaveEdit} className='bg-blue-500 px-4 py-1 rounded'>
                                                Lưu
                                            </button>
                                            &nbsp; &nbsp;
                                            <button onClick={handleCancelEdit} className='bg-red-500 px-4 py-1 rounded'>
                                                Hủy
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => handleEditVoucher(typevch.id, typevch.name)}
                                                className='bg-blue-500 px-4 py-1 rounded'
                                            >
                                                Sửa
                                            </button>
                                            &nbsp; &nbsp;
                                            <Link to={'/'}>
                                                <button
                                                    // type='submit'
                                                    className='bg-red-500 px-4 py-1 rounded'
                                                >
                                                    Xóa
                                                </button>
                                            </Link>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListTypeVoucher

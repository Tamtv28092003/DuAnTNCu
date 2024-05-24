import React from 'react'
import '../../../styles/BillDetail.css'

const BillDetail = () => {
    const handlePrint = () => {
        const printContent = document.getElementById('bill-detail')
        const originalContents = document.body.innerHTML

        document.body.innerHTML = printContent.innerHTML

        window.print()

        document.body.innerHTML = originalContents
    }
    return (
        <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark my-2 '>
            <div className='flex flex-row  mt-4 ml-20 gap-72 pl-10'>
                <h4
                    className='text-[30px] font-bold text-black dark:text-white pb-5  mt-10'
                    id='name-bill'
                    style={{ fontWeight: 900 }}
                >
                    Hóa đơn chi tiết
                </h4>

                <button
                    className='flex flex-row gap-3 bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 pl-3 rounded h-10 w-36 text-right mx-16 mt-10 hover:bg-blue-300'
                    onClick={handlePrint}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='bi bi-printer mt-1'
                        viewBox='0 0 16 16'
                    >
                        <path d='M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1' />
                        <path d='M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1' />
                    </svg>
                    In hóa đơn
                </button>
            </div>
            <div id='bill-detail' className=' border-2 border-blue-200  rounded  w-auto mx-28 my-5'>
                <div className='py-6  md:px-6 xl:px-7.5 '>
                    <span className='font-bold text-base text-blue-300'>Thời gian đặt hàng: 17.00pm 12/1/2024</span>
                    <div className=' gap-96 font-thin text-base  flex flex-row pt-2'>
                        <div className='flex flex-col gap-3'>
                            <span id='ten-cua-hang' className='mt-2'>
                                Cửa hàng
                            </span>
                            <select
                                name=''
                                id='trang-thai-giao-hang'
                                className='w-44 h-10 border-2 border-blue-300 rounded-md bg-blue-300 text-white'
                            >
                                <option className='font-medium'>Chuẩn bị hàng</option>
                                <option className='font-medium'>Đang giao hàng</option>
                                <option className='font-medium'>Giao hàng thành công</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-3' id='trang-thai-thanh-toan'>
                            <span className='mt-2'>Trạng thái thanh toán</span>
                            <select
                                name=''
                                id='trang-thai-don-hang'
                                className='w-44 h-10 border-2 border-blue-300 rounded-md bg-blue-300 text-white '
                            >
                                <option className='font-medium'>Đã thanh toán</option>
                                <option className='font-medium'>Chưa thanh toán</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-row gap-5 border-stroke py-1  dark:border-strokedark   font-thin text-base pt-5'>
                        <div>
                            <p className=' font-serif text-lg'>Thông tin cửa hàng</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Tên cửa hàng</th>
                                        <th>Số điện thoại</th>
                                        <th>Địa chỉ</th>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                                <tr>
                                    <td>MeoDelight</td>
                                    <td>0334370130</td>
                                    <td>ngõ 71, Phương Canh, Nam Từ Liêm</td>
                                </tr>
                            </table>
                        </div>
                        <div>
                            <p className=' font-serif text-lg'>Thông tin người nhận</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Tên cửa hàng</th>
                                        <th>Số điện thoại</th>
                                        <th>Địa chỉ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>MeoDelight</td>
                                        <td>0334370130</td>
                                        <td>ngõ 71, Phương Canh, Nam Từ Liêm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='font-thin text-base pt-5 mb-5'>
                        <p className=' font-serif text-lg '>Thông tin sản phẩm</p>
                        <table className='w-full'>
                            <thead>
                                <tr className=''>
                                    <th className=''>STT </th>
                                    <th className=''>Tên sản phẩm</th>
                                    <th className=''>Kích thước</th>
                                    <th className=''>Số lượng</th>
                                    <th className=''>Gía</th>
                                    <th className=''>Tổng tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className=''>1 </td>
                                    <td className=''>Quần suông ống rộng</td>
                                    <td className='text-center'>L</td>
                                    <td className='text-center'>1</td>
                                    <td className=''>100.000 VNĐ</td>
                                    <td className=''>100.000 VND</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p
                        className='text-end bg-blue-400 text-red-500 text-xl  font-extralight px-5 py-4 h-16'
                        style={{ fontWeight: 900 }}
                    >
                        Tổng tiền: 110.000 VNĐ
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BillDetail

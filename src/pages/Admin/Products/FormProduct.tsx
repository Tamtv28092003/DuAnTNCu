import { PlusOutlined } from '@ant-design/icons'
import { Button, DatePicker, Form, Input, Select, Upload, Drawer } from 'antd'
import { useEffect, useState } from 'react'
import { SlClose } from 'react-icons/sl'
import '@/styles/FormProduct.css'
import axios from 'axios'
import { IoMdAdd } from 'react-icons/io'
import { Modal, Space } from 'antd'
import FromAddColorOfSize from './FormAddColorOfSize'

const { RangePicker } = DatePicker
const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e
    }
    return e?.fileList
}

interface Color {
    id: number
    name: string
}

interface Size {
    id: number
    name: string
}

const FormProduct = () => {
    const [open, setOpen] = useState(false)
    const [childrenDrawer, setChildrenDrawer] = useState(false)

    const showDrawer = () => {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false)
    }

    const showChildrenDrawer = () => {
        setChildrenDrawer(true)
    }

    const onChildrenDrawerClose = () => {
        setChildrenDrawer(false)
    }

    const [colors, setColors] = useState<Color[]>([])
    const [sizes, setSizes] = useState<Size[]>([])
    const [combinedData, setCombinedData] = useState<(Color & Size)[]>([])

    useEffect(() => {
        axios.get('http://localhost:3000/product_size').then(({ data }) => setSizes(data))
        axios.get('http://localhost:3000/product_color').then(({ data }) => setColors(data))
    }, [])

    useEffect(() => {
        // Combine colors and sizes
        const combined = colors.flatMap((color) =>
            sizes.map((size) => ({
                ...color,
                ...size
            }))
        )

        setCombinedData(combined)
    }, [colors, sizes])

    console.log(combinedData)

    const updateDataColorOfSize = (dtb: string, data: Color | Size) => {
        // data: {"id": 4, "name": "red"}
        if (dtb === 'Màu') {
            setColors((colors) => [...colors, { id: data.id, color: data.name } as any])
        } else {
            setSizes((sizes) => [...sizes, { id: data.id, size: data.name } as any])
        }
    }

    const deleteItemColor = (id: any) => {
        axios
            .delete(`http://localhost:3000/product_color/${id}`)
            .then(() => setColors((prevColors) => prevColors.filter((item: any) => item.id !== id)))
            .catch((error) => console.error('Error deleting color:', error))
    }

    const deleteItemSize = (id: any) => {
        axios
            .delete(`http://localhost:3000/product_size/${id}`)
            .then(() => setSizes((prevSizes) => prevSizes.filter((item: any) => item.id !== id)))
            .catch((error) => console.error('Error deleting size:', error))
    }
    const info = (name: string) => {
        Modal.info({
            content: <FromAddColorOfSize name={name} updateDataColorOfSize={updateDataColorOfSize} />
            // onOk() {}
        })
    }
    return (
        <div>
            <Form.Item
                label='Tên sản phẩm'
                name='name'
                rules={[{ required: true, message: 'Vui lòng nhập Tên sản phẩm!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item label='Ảnh sản phẩm' valuePropName='fileList' getValueFromEvent={normFile}>
                <Upload action='/upload.do' listType='picture-card'>
                    <button style={{ border: 0, background: 'none' }} type='button'>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Tải lên file</div>
                    </button>
                </Upload>
            </Form.Item>

            <Form.Item
                label='Ngày nhập'
                name='import_date'
                rules={[{ required: true, message: 'Vui lòng thêm ngày nhập hàng!' }]}
            >
                <DatePicker />
            </Form.Item>

            <Form.Item
                label='Hạn sử dụng'
                name='expiry'
                rules={[{ required: true, message: 'Vui lòng thêm hạn sử dụng!' }]}
            >
                <RangePicker />
            </Form.Item>

            <Form.Item
                label='Trạng thái'
                name='status'
                rules={[{ required: true, message: 'Vui lòng chọn trạng thái sản phẩm!' }]}
            >
                <Select
                    placeholder='Chọn trạng thái sản phẩm'
                    optionFilterProp='children'
                    options={[
                        {
                            value: 'Viet_Nam',
                            label: 'Sản phẩm Việt Nam'
                        },
                        {
                            value: 'Nuoc_Ngoai',
                            label: 'Sản phẩm nước ngoài'
                        }
                    ]}
                />
            </Form.Item>
            <Form.Item
                label='Danh mục'
                name='IdCategory'
                rules={[{ required: true, message: 'Vui lòng chọn danh mục sản phẩm!' }]}
            >
                <Select
                    placeholder='Chọn trạng danh mục'
                    optionFilterProp='children'
                    options={[
                        {
                            value: '1',
                            label: 'Đồ ăn cho mèo'
                        },
                        {
                            value: '2',
                            label: 'Phụ kiện đồ chơi'
                        }
                    ]}
                />
            </Form.Item>
            <Form.Item
                label='Mô tả'
                name='description'
                rules={[{ required: true, message: 'Vui lòng nhập mô tả của sản phẩm!' }]}
            >
                <Input.TextArea />
            </Form.Item>
            <div className='them_phan_loai' style={{ textAlign: 'center' }}>
                <Button type='primary' onClick={showDrawer} style={{ color: 'red' }}>
                    Thêm phân loại sản phẩm
                </Button>
                <Drawer title='Màu - Kích cỡ' width={520} closable={false} onClose={onClose} open={open}>
                    <h3 style={{ fontSize: '20px', fontWeight: '500' }}>Màu</h3>
                    <hr />
                    <div className='colors'>
                        {colors.map((item: any) => (
                            <div
                                key={item.id}
                                className='color'
                                style={{
                                    fontSize: '15px',
                                    padding: '5px',
                                    border: '1px solid blue',
                                    borderRadius: '10px',
                                    color: 'blue',
                                    display: 'inline-block',
                                    marginRight: '10px',
                                    marginTop: '10px'
                                }}
                            >
                                {item.color}
                                <div className='xxxx' onClick={() => deleteItemColor(item.id)}>
                                    <SlClose />
                                </div>
                            </div>
                        ))}
                        <Space wrap>
                            <div
                                className='color_add'
                                style={{
                                    fontSize: '30px',
                                    color: 'blue'
                                }}
                                onClick={() => info('Màu')}
                            >
                                <IoMdAdd />
                            </div>
                        </Space>
                    </div>
                    <h3 style={{ fontSize: '20px', fontWeight: '500', marginTop: '30px' }}>Kích cỡ</h3>
                    <hr />
                    <div className='sizes'>
                        {sizes.map((item: any) => (
                            <div
                                key={item.id}
                                className='size'
                                style={{
                                    fontSize: '15px',
                                    padding: '5px',
                                    border: '1px solid green',
                                    color: 'green',
                                    borderRadius: '10px',
                                    display: 'inline-block',
                                    marginRight: '10px',
                                    marginTop: '10px'
                                }}
                            >
                                {item.size}
                                <div className='xxxxx' onClick={() => deleteItemSize(item.id)}>
                                    <SlClose />
                                </div>
                            </div>
                        ))}
                        <Space wrap>
                            <div
                                className='size_add'
                                style={{
                                    fontSize: '30px',
                                    color: 'green'
                                }}
                                onClick={() => info('Size')}
                            >
                                <IoMdAdd />
                            </div>
                        </Space>
                    </div>
                    <Button type='primary' onClick={showChildrenDrawer} style={{ color: 'blue', marginTop: '30px' }}>
                        Thêm Ảnh - Giá
                    </Button>
                    <Drawer
                        title='Ảnh - Khối lượng - Giá - Số lượng'
                        width={320}
                        closable={false}
                        onClose={onChildrenDrawerClose}
                        open={childrenDrawer}
                    >
                        This is two-level drawer
                    </Drawer>
                </Drawer>
            </div>
        </div>
    )
}

export default FormProduct

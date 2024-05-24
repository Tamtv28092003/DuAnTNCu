import { Button, Form } from 'antd'
import FormProduct from './FormProduct'

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
    }
}

const AddProduct = () => {
    const onFinish = (values: any) => {
        console.log('Form values:', values)
    }

    return (
        <>
            <div className='container'>
                <div className='title' style={{ fontSize: '25px', margin: '10px 0', fontWeight: '700' }}>
                    <h2>Thêm mới sản phẩm</h2>
                </div>
                <div className='form'>
                    <Form
                        {...formItemLayout}
                        variant='filled'
                        onFinish={onFinish} // Set the onFinish callback
                    >
                        <div
                            className='div'
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '0 5%'
                            }}
                        >
                            <div className='form_left'>
                                <FormProduct />
                            </div>
                            <div className='form_right'></div>
                        </div>

                        <Form.Item wrapperCol={{ offset: 6, span: 16 }} style={{ margin: '0 auto' }}>
                            <Button type='primary' htmlType='submit'>
                                Thêm
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default AddProduct

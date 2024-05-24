import { Modal, Form, Input, Button } from 'antd'
import axios from 'axios'

const FromAddColorOfSize = ({ name, updateDataColorOfSize }: any) => {
    const dtb = name
    const addItemColor = (color: any) => {
        axios.post(`http://localhost:3000/product_color`, color).then(({ data }) => {
            updateDataColorOfSize(dtb, data)
        })
    }

    const addItemSize = (size: any) => {
        axios.post(`http://localhost:3000/product_size`, size).then(({ data }) => {
            updateDataColorOfSize(dtb, data)
        })
    }
    const onFinish = (values: any) => {
        console.log('name:', values)
        dtb === 'Màu' ? addItemColor(values) : addItemSize(values)

        Modal.destroyAll()
    }

    return (
        <Modal
            title={`Thêm ${name}`}
            visible={true} // Set this to the visibility state of the modal
            onCancel={Modal.destroyAll}
            footer={null}
        >
            <Form onFinish={onFinish}>
                <Form.Item label={`${name}`} name='name' rules={[{ required: true, message: 'không để trống!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type='primary' htmlType='submit'>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default FromAddColorOfSize

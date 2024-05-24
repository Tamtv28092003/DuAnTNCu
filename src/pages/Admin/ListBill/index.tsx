import React, { useRef, useState } from 'react'
import { Button, Input, Space, Table, Tag } from 'antd'
import type { InputRef, TableColumnType, TableProps } from 'antd'
import Title from 'antd/es/typography/Title'
import { FilterDropdownProps } from 'antd/es/table/interface'
import { SearchOutlined } from '@ant-design/icons'
import Search from 'antd/es/input/Search'

interface DataType {
    key: string
    idUser: number
    money: string
    date: string
    address: string
    tel: string
    idVc: number
    paymentMethods: string
    paymentStatus: string[]
    orderStatus: string[]
}
type DataIndex = keyof DataType

const data: DataType[] = [
    {
        key: '1',
        idUser: 1,
        money: '45.000 VND',
        date: '12/1/2024',
        address: 'ngõ 71 Phương Canh',
        tel: '0334370130',
        idVc: 3,
        paymentMethods: 'nhận tiền khi giao hàng',
        paymentStatus: ['Chưa thanh toán'],
        orderStatus: ['Đang giao hàng']
    },
    {
        key: '1',
        idUser: 2,
        money: '45.000 VND',
        date: '12/1/2024',
        address: 'ngõ 71 Phương Canh',
        tel: '0334370130',
        idVc: 3,
        paymentMethods: 'nhận tiền khi giao hàng',
        paymentStatus: ['Chưa thanh toán'],
        orderStatus: ['Chờ xác nhận']
    }
]
const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
}
const onSearch = (value, _e, info) => console.log(info?.source, value)
const App: React.FC = () => {
    const [searchText, setSearchText] = useState('')
    const [searchedColumn, setSearchedColumn] = useState('')
    const searchInput = useRef<InputRef>(null)

    const handleSearch = (selectedKeys: string[], confirm: FilterDropdownProps['confirm'], dataIndex: DataIndex) => {
        confirm()
        setSearchText(selectedKeys[0])
        setSearchedColumn(dataIndex)
    }

    const handleReset = (clearFilters: () => void) => {
        clearFilters()
        setSearchText('')
    }

    const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<DataType> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type='primary'
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size='small'
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size='small'
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type='link'
                        size='small'
                        onClick={() => {
                            confirm({ closeDropdown: false })
                            setSearchText((selectedKeys as string[])[0])
                            setSearchedColumn(dataIndex)
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type='link'
                        size='small'
                        onClick={() => {
                            close()
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100)
            }
        }
        // render: (text) =>
        //     searchedColumn === dataIndex ? (
        //         <Highlighter
        //             highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        //             searchWords={[searchText]}
        //             autoEscape
        //             textToHighlight={text ? text.toString() : ''}
        //         />
        //     ) : (
        //         text
        //     )
    })
    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Mã KH',
            dataIndex: 'idUser',
            key: 'idUser',
            // render: (text) => <a>{text}</a>,
            ...getColumnSearchProps('idUser')
        },
        {
            title: 'Tổng tiền',
            dataIndex: 'money',
            key: 'money'
        },
        {
            title: 'Ngày đặt',
            dataIndex: 'date',
            key: 'date'
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address'
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'tel',
            key: 'tel'
        },
        {
            title: 'Mã voucher',
            dataIndex: 'idVc',
            key: 'idVc'
        },
        {
            title: 'Phương thức thanh toán',
            dataIndex: 'paymentMethods',
            key: 'paymentMethods'
        },

        {
            title: 'Trạng thái thanh toán',
            key: 'paymentStatus',
            dataIndex: 'paymentStatus',
            filters: [
                { text: 'Chưa thanh toán', value: 'Chưa thanh toán' },
                { text: 'Đã thanh toán', value: 'Đã thanh toán' }
            ],
            onFilter: (value: string, record) => record.paymentStatus.indexOf(value) === 0,
            width: '20%',

            render: (_, { paymentStatus }) => (
                <>
                    {paymentStatus.map((paymentStatus) => {
                        let color = paymentStatus.length > 5 ? 'geekblue' : 'green'
                        if (paymentStatus === 'loser') {
                            color = 'volcano'
                        }
                        return (
                            <Tag color={color} key={paymentStatus} style={{ padding: '5px' }}>
                                {paymentStatus.toUpperCase()}
                            </Tag>
                        )
                    })}
                </>
            )
        },
        {
            title: 'Trạn thái đơn hàng',
            key: 'orderStatus',
            dataIndex: 'orderStatus',
            filters: [
                { text: 'Chờ xác nhận', value: 'Chờ xác nhận' },
                { text: 'Chuẩn bị hàng', value: 'Chuẩn bị hàng' },
                { text: 'Đang giao hàng', value: 'Đang giao hàng' },
                { text: 'Giao hàng thành công', value: 'Giao hàng thành công' }
            ],
            onFilter: (value: string, record) => record.orderStatus.indexOf(value) === 0,
            // sorter: (a, b) => a.orderStatus.length - b.orderStatus.length,
            // sortDirections: ['descend'],
            // width: '20%',

            render: (_, { orderStatus }) => (
                <>
                    {orderStatus.map((orderStatus) => {
                        let color = orderStatus.length > 5 ? 'green' : 'geekblue'
                        if (orderStatus === 'loser') {
                            color = 'volcano'
                        }
                        return (
                            <Tag color={color} key={orderStatus} style={{ padding: '5px' }}>
                                {orderStatus.toUpperCase()}
                            </Tag>
                        )
                    })}
                </>
            )
        }
        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: (_, record) => (
        //         <Space size='middle'>
        //             <a>Invite {record.name}</a>
        //             <a>Delete</a>
        //         </Space>
        //     )
        // }
    ]
    return (
        <>
            <div className='flex flex-row gap-96'>
                <Title level={2} className='px-5 pt-5 text-[30px]' style={{ fontWeight: 900 }}>
                    Danh sách hóa đơn
                </Title>
                <Search
                    className='pt-7'
                    placeholder='Search hóa đơn chi tiết'
                    allowClear
                    onSearch={onSearch}
                    style={{
                        width: 220
                    }}
                />
            </div>

            <Table columns={columns} dataSource={data} onChange={onChange} />
        </>
    )
}

export default App
function getColumnSearchProps(arg0: string): import('antd').TableColumnGroupType<DataType> | TableColumnType<DataType> {
    throw new Error('Function not implemented.')
}

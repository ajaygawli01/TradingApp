import React, { useState } from 'react'
import { FaUsersLine } from "react-icons/fa6";
import { FaList } from "react-icons/fa";
import {Table, Button, Modal, Select ,Input, Checkbox } from "antd"
const { Option } = Select;
import {DatePicker} from 'antd'
const Dashboard=()=> {
    const tableData=[
        {
            key: 1,
            serialNumber: 1,
            client: "Client A",
            metal: "Gold",
            tradeType: "Buy",
            live: "Yes",
            limit: "$1000",
            target: "$1200",
            profit_loss: "+$200",
            time: "10:30 AM",
            sqOff: "Off",
            hold: "Hold",
            allow: "Allow"
          },
          {
            key: 2,
            serialNumber: 2,
            client: "Client B",
            metal: "Silver",
            tradeType: "Sell",
            live: "No",
            limit: "$800",
            target: "$700",
            profit_loss: "-$100",
            time: "11:45 AM",
            sqOff: "Off",
            hold: "Hold",
            allow: "Allow"
          },
          {
            key: 3,
            serialNumber: 3,
            client: "Client C",
            metal: "Platinum",
            tradeType: "Buy",
            live: "Yes",
            limit: "$1500",
            target: "$1800",
            profit_loss: "+$300",
            time: "12:15 PM",
            sqOff: "Off",
            hold: "Hold",
            allow: "Allow"
          },
          {
            key: 4,
            serialNumber: 4,
            client: "Client D",
            metal: "Gold",
            tradeType: "Sell",
            live: "Yes",
            limit: "$1200",
            target: "$1100",
            profit_loss: "-$100",
            time: "1:30 PM",
            sqOff: "Off",
            hold: "Hold",
            allow: "Allow"
          },
          {
            key: 5,
            serialNumber: 5,
            client: "Client E",
            metal: "Silver",
            tradeType: "Buy",
            live: "No",
            limit: "$700",
            target: "$900",
            profit_loss: "+$200",
            time: "2:45 PM",
            sqOff: "Off",
            hold: "Hold",
            allow: "Allow"
          },
          {
            key: 6,
            serialNumber: 6,
            client: "Client F",
            metal: "Platinum",
            tradeType: "Sell",
            live: "Yes",
            limit: "$1800",
            target: "$1600",
            profit_loss: "-$200",
            time: "3:15 PM",
            sqOff: "Off",
            hold: "Hold",
            allow: "Allow"
          },
          {
            key: 7,
            serialNumber: 7,
            client: "Client G",
            metal: "Gold",
            tradeType: "Buy",
            live: "Yes",
            limit: "$1100",
            target: "$1400",
            profit_loss: "+$300",
            time: "4:30 PM",
            sqOff: "Off",
            hold: "Hold",
            allow: "Allow"
          },
          {
            key: 8,
            serialNumber: 8,
            client: "Client H",
            metal: "Silver",
            tradeType: "Sell",
            live: "No",
            limit: "$900",
            target: "$800",
            profit_loss: "-$100",
            time: "5:45 PM",
            sqOff: "Off",
            hold: "Hold",
            allow: "Allow"
          },
          {
            key: 9,
            serialNumber: 9,
            client: "Client I",
            metal: "Platinum",
            tradeType: "Buy",
            live: "Yes",
            limit: "$1600",
            target: "$2000",
            profit_loss: "+$400",
            time: "6:15 PM",
            sqOff: "Off",
            hold: "Hold",
            allow: "Allow"
          },
          {
            key: 10,
            serialNumber: 10,
            client: "Client J",
            metal: "Gold",
            tradeType: "Sell",
            live: "Yes",
            limit: "$1400",
            target: "$1300",
            profit_loss: "-$100",
            time: "7:30 PM",
            sqOff: "Off",
            hold: "Hold",
            allow: "Allow"
          }
    ]
    const columns = [
        {
            title: "S/N",
            dataIndex: "serialNumber",
            key: "serialNumber",
            render: (_, __, index) => index + 1,
        },
        {
            title: "Client",
            dataIndex: "client",
            key: "client",
        },
        {
            title: "Metal",
            dataIndex: "metal",
            key: "metal",
        },
        {
            title: "Trade Type",
            dataIndex: "tradeType",
            key: "tradeType",
        },
        {
          title: "Live",
          dataIndex: "live",
          key: "live",
        },
        // {
        //     title: "Status",
        //     dataIndex: "status",
        //     key: "status",
        //     render: (text) => (
        //       <Space size="middle">
        //         <Badge status={text === "Pending" || text==="Rejected" ? "error" : "success"} />
        //         {text}
        //       </Space>
        //     ),
        //   },
        {
          title: "Limit",
          dataIndex: "limit",
          key: "limit",
        },
        {
          title: "Target",
          dataIndex: "target",
          key: "target",
        },
        {
            title: "Profit/Loss",
            dataIndex: "profit_loss",
            key: "profit_loss",
          },
          {
            title: "Time",
            dataIndex: "time",
            key: "time",
          },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <div className='flex gap-1'>
                {/* {record.status==="Rejected" ? */}
                <Button type="primary" className='bg-yellow-400' onClick={() => handleApprove(record)}>Sq. Off</Button>
                {/* :<> */}
                {/* {record.status==="Approved"?'' : */}
                <Button type="primary"  className='bg-yellow-400' onClick={() => handleApprove(record)}>Edit</Button>
                {/* } */}
              <Button type="danger"  className='bg-red-500' onClick={() => handleReject(record)}>Delete</Button>
                {/* </>} */}
             
            </div>
          )
        },

        {
            title: 'Sq. Off',
            dataIndex: 'sqOff',
            render: (_, record) => (
              <Button type="primary"  className='bg-red-500' onClick={() => handleRegister(record)}>Off</Button>
            )
          },

          {
            title: 'Hold',
            dataIndex: 'hold',
            render: (_, record) => (
              <Button type="primary" className='bg-red-500'  onClick={() => handleRegister(record)}>Hold</Button>
            )
          },
          {
            title: 'Allow',
            dataIndex: 'allow',
            render: (_, record) => (
              <Button type="primary" className='bg-red-500' onClick={() => handleRegister(record)}>Allow</Button>
            )
          }

      ];

      const handleApprove=()=>{}
      const handleReject=()=>{}
      const handleRegister=()=>{}

      const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
      
  return (
    <div className='w-full'>
        {/* grid starts */}
        <div className='grid  grid-cols-4 gap-4     '>

            <div>
                <div className='relative'>
                  <div  className='bg-orange-500  w-[50px]  p-2 absolute bottom-10 left-4'>
                  <FaUsersLine  className='text-3xl text-cyan-50' />
                    </div>  
                  <div className='bg-slate-800 text-cyan-50 p-3'>
                    <div className='flex  justify-end  '>
                        <div className='flex flex-col items-end'>
                        <span>TOTAL CLIENTS</span>
                    <span>1172</span>
                        </div>
                
                    </div>
                    </div>
                </div>
            </div>


            <div>
                <div className='relative'>
                  <div  className='bg-lime-600  w-[50px]  p-2 absolute bottom-10 left-4'>
                  <FaUsersLine  className='text-3xl text-cyan-50' />
                    </div>  
                  <div className='bg-slate-800 text-cyan-50 p-3'>
                    <div className='flex  justify-end  '>
                        <div className='flex flex-col items-end'>
                        <span>NEW CLIENTS</span>
                    <span>865</span>
                        </div>
                
                    </div>
                    </div>
                </div>
            </div>




            <div>
                <div className='relative'>
                  <div  className='bg-red-500  w-[50px]  p-2 absolute bottom-10 left-4'>
                  <FaList  className='text-3xl text-cyan-50' />
                    </div>  
                  <div className='bg-slate-800 text-cyan-50 p-3'>
                    <div className='flex  justify-end  '>
                        <div className='flex flex-col items-end'>
                        <span>  NEW DEPOSIT</span>
                    <span>45</span>
                        </div>
                
                    </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='relative'>
                  <div  className='bg-blue-600  w-[50px]  p-2 absolute bottom-10 left-4'>
                  < FaList  className='text-3xl text-cyan-50' />
                    </div>  
                  <div className='bg-slate-800 text-cyan-50 p-3'>
                    <div className='flex  justify-end  '>
                        <div className='flex flex-col items-end'>
                        <span>NEW WITHDRAWAL</span>
                    <span>56</span>
                        </div>
                
                    </div>
                    </div>
                </div>
            </div>



          
        </div>
        {/* grid end */}

        <div className='mt-3 flex gap-10'>
            <div>
            <select  className='border w-[100px] p-2'>
                <option>Link on</option>
            </select>
            </div>
            <div className='flex gap-3'>
            <select  className='border w-[150px]'>
                <option>Select Metal</option>
            </select>

            <div>
                <input placeholder='Enter value' className='border p-2'/>
                <button className='bg-red-500 p-2 border rounded'>Update</button>
            </div>
            </div>
        </div>

        <hr className='mt-5'/>
        <div className='mt-5 border rounded p-2'>
            {/* table div start above  */}

            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <DatePicker/>
                    <button className='bg-slate-700  text-white p-2 border rounded uppercase'>Live Trades</button>
                    <button className='  p-2 border rounded '>Buy Exit</button>
                    <button className='  p-2 border rounded '>Sell Exit</button>
                </div>


                <div>
                <select  className='border w-[150px] p-1'>
                <option>Close</option>
            </select>

            <button className='bg-yellow-400  text-white p-1 border rounded uppercase' onClick={showModal}>Add New Trades</button>

                </div>
            </div>







            <div className='container mt-3 '>
  <div className=" text-left text-xl text-black font-body-3-small">
      <div className=" text-xs text-grey-70 overflow-auto ">
        <Table
          columns={columns}
          dataSource={tableData}
          pagination={{ pageSize: 3 }}
          size="middle"
        />
      </div>
    </div>
        </div>
        </div>

        <Modal
        title="Add New Trade"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Add
          </Button>,
        ]}
      >

        <div className='grid  grid-cols-3 gap-4'>
        <div className=''>
          <label>Select Customer:</label>
          <Select style={{ width: '100%' }} placeholder="Select Customer">
            <Option value="customer1">Customer 1</Option>
            <Option value="customer2">Customer 2</Option>
            {/* Add more options as needed */}
          </Select>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <label>Type:</label>
          <Checkbox.Group defaultValue={['buy']} style={{ width: '100%' }}>
            <Checkbox value="buy">Buy</Checkbox>
            <Checkbox value="sell">Sell</Checkbox>
          </Checkbox.Group>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <label>Market:</label>
          <Select style={{ width: '100%' }} placeholder="Select Market">
            <Option value="market1">Market 1</Option>
            <Option value="market2">Market 2</Option>
            {/* Add more options as needed */}
          </Select>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <label>Asset:</label>
          <Select style={{ width: '100%' }} placeholder="Select Asset">
            <Option value="asset1">Asset 1</Option>
            <Option value="asset2">Asset 2</Option>
            {/* Add more options as needed */}
          </Select>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <label>Lot Size:</label>
          <Input placeholder="Lot Size" />
        </div>

        <div style={{ marginTop: '1rem' }}>
          <label>Limit:</label>
          <Input placeholder="Limit" />
        </div>

        <div style={{ marginTop: '1rem' }}>
          <label>Set Target:</label>
          <Input placeholder="Set Target" />
        </div>

        <div style={{ marginTop: '1rem' }}>
          <label>Set Stop Loss:</label>
          <Input placeholder="Set Stop Loss" />
        </div>
        </div>

      </Modal>
    </div>
  )
}

export default Dashboard
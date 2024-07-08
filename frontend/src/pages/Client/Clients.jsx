import React from 'react'
import {Table, Button, Modal, Select ,Input, Checkbox } from "antd"
import { FaList } from 'react-icons/fa6';
import { FaUnlockKeyhole } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";
const Clients = () => {
    const columns = [
        {
            title: "S/N",
            dataIndex: "serialNumber",
            key: "serialNumber",
            render: (_, __, index) => index + 1,
        },
        {
            title: "Client ID",
            dataIndex: "clientId",
            key: "clientId",
            render: (_, record) => (
                <div className='flex flex-col'>
                      {record.clientId}
                    {/* {record.status==="Rejected" ? */}
                    <Button type="primary" className='bg-yellow-400 w-[50%] flex  gap-2 items-center' onClick={() => handleApprove(record)}>
                    <FaList className='' />
                    <span> Symbol</span>
                       </Button>
                    {/* :<> */}
                    {/* {record.status==="Approved"?'' : */}
                    {/* <Button type="primary"  className='bg-yellow-400' onClick={() => handleApprove(record)}>KYC</Button> */}
                    {/* } */}
                  <Button type="danger"  className='bg-red-500  w-[50%]' onClick={() => handleReject(record)}>Disable</Button>
                    {/* </>} */}
                    <Checkbox.Group   className="" >
            <Checkbox value="buy">Notify</Checkbox>
            <Checkbox value="sell">Market Only</Checkbox>
          </Checkbox.Group>
                 
                </div>
              )
        },
        {
            title: "Member Since",
            dataIndex: "memberSince",
            key: "memberSince",
        },

    
        {
            title: "Limit/Charge",
            dataIndex: "limit_charge",
            key: "limit_charge",
            render: (_, record) => (
                <div className='flex flex-col gap-2'>
                    
                <div className='w-[50%]'>
                <span>Trade Limit</span>
                 <Input/>
                </div>

                <div className='w-[50%]'>
                <span>Max Lot</span>
                 <Input/>
                </div>
                </div>
              )
          },
        {
          title: "Contact Details",
          dataIndex: "contact_details",
          key: "contact_details",
          render :(_, record)=>(
            <div className='flex  flex-col gap-1'>
                <span>{record.contact_details.clientName}</span>
                <span>{record.contact_details.clientEmail}</span>
                <span className='bg-blue-300 rounded p-1'>Pin :{record.contact_details.pin}</span>
                <span  className='bg-yellow-300 rounded p-1'> Adhaar : {record.contact_details.adhaar}</span>
                <span  className='bg-red-400 rounded p-1'> Pan : {record.contact_details.adhaar}</span>
            
            </div>
          )
        },
    

        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <div>

           
            <div className='flex gap-1'>
                {/* {record.status==="Rejected" ? */}
                <Button type="primary" className='bg-blue-400' onClick={() => handleApprove(record)}>
             <FaUnlockKeyhole/>
                </Button>
                <Button type="primary" className='bg-green-400' onClick={() => handleApprove(record)}>Balance</Button>
                {/* :<> */}
                {/* {record.status==="Approved"?'' : */}
                <Button type="primary"  className='bg-yellow-400' onClick={() => handleApprove(record)}>KYC</Button>
                {/* } */}
              <Button type="danger"  className='bg-red-500' onClick={() => handleReject(record)}><IoTrashBin/></Button>
                <Button type="primary"  className='bg-yellow-400' onClick={() => handleApprove(record)}>Report</Button>
              <Button type="danger"  className='bg-red-500' onClick={() => handleReject(record)}>Enable </Button>
                {/* </>} */}
                </div>
                <textarea/>
             
            </div>
          )
        },

       

      ];

      const tableData=[
        {
            serialNumber: 1,
            clientId: "ABC123",
            memberSince: "2022-01-01",
            limit_charge: { tradeLimit: "", maxLot: "" },
            contact_details: {
              clientName: "John Doe",
              clientEmail: "john.doe@example.com",
              pin: "1234",
              adhaar: "123456789012",
              pan: "ABCDE1234F",
            },
          },
          {
            serialNumber: 2,
            clientId: "DEF456",
            memberSince: "2022-02-15",
            limit_charge: { tradeLimit: "", maxLot: "" },
            contact_details: {
              clientName: "Alice Smith",
              clientEmail: "alice.smith@example.com",
              pin: "5678",
              adhaar: "987654321098",
              pan: "FGHIJ5678K",
            },
          },
          // Add more dummy data records here...
          {
            serialNumber: 10,
            clientId: "XYZ789",
            memberSince: "2022-05-20",
            limit_charge: { tradeLimit: "", maxLot: "" },
            contact_details: {
              clientName: "Bob Johnson",
              clientEmail: "bob.johnson@example.com",
              pin: "4321",
              adhaar: "543216789012",
              pan: "LMNOP4321G",
            },
          },
    ]

  return (
    <div>

        <div className='flex justify-around bg-slate-700 p-2'>
        <Input placeholder="Search Client Name or Mobile Number " className="w-[300px]"/>
        <button className='bg-red-400  text-white p-2 border rounded uppercase'>Notification</button>
        <button className='bg-yellow-400  text-white p-2 border rounded uppercase'>Add New Client</button>
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
  )
}

export default Clients
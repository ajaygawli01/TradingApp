import React, { useState, useEffect } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineLogout,
} from "react-icons/ai";
import companyimg from '../../assets/Companylogo.png'
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";
import { RiPresentationFill } from "react-icons/ri";
import { FaMoneyBills } from "react-icons/fa6";
import { RiCouponLine } from "react-icons/ri";
import { BsPersonVcard } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";
import { GoPersonAdd } from "react-icons/go";
import { Outlet } from "react-router-dom";
import { MdOutlineInventory } from "react-icons/md";
import { MdOutlineReduceCapacity } from "react-icons/md"
import { FcDepartment } from "react-icons/fc";
import { FaClipboardList, FaBloggerB } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import DigitalClock from "../DigitalClock";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {

  const [currUser, setCurrUser] = useState();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
useEffect(()=>{
  setCurrUser(JSON.parse(localStorage.getItem('user')))
},[])

console.log("this is ", currUser)
const [adminitem, setadminitem]=useState(
  [
    {
      key: "",
      icon: <FcDepartment className="fs-4" />,
      label: "Dashboard",
    },
    {
        key: "clients",
        icon: <AiOutlineUser className="fs-4" />,
        label: "Clients",
      },

    {
      key: "contact-enquires",
      icon: <RiPresentationFill   className="fs-4" />,
      label: "Contact Enquires",
    },

    {
      key: "manage-deposites",
      icon: <RiCouponLine className="fs-4" />,
      label: "Manage Deposites",
    },
       {
      key: "manage-withdrawals",
      icon: <FaMoneyBills  className="fs-4" />,
      label: "Manage Withdrawals",
    },
    {
        key: "settings",
        icon: <AiOutlineDashboard className="fs-4" />,
        label: "Settings",
      },
    
    {
      key: "signout",
      icon: <AiOutlineLogout className="fs-4" />,
      label: "Sign Out",
    },
  ]
)


const[useritem, setuseritem]=useState([
  // {
  //   key: "",
  //   icon: <AiOutlineDashboard className="fs-4" />,
  //   label: "Dashboard",
  // },
  {
    key: "",
    icon: <AiOutlineUser className="fs-4" />,
    label: " Profile",
  },
  {
    key: "attendance",
    
    icon: <RiPresentationFill   className="fs-4" />,
    label: "Attendance",
  },
  {
    key: "apply-leaves",
    icon: <AiOutlineUser className="fs-4" />,
    label: "Apply Leaves",
  },
  {
    key: "projects",
    icon: <AiOutlineDashboard  className="fs-4" />,
    label: "Projects",
  },
      
  {
    key: "payslip",
    icon: <FaMoneyBills  className="fs-4" />,
    label: "PaySlip",
  },
  {
    key: "tickets",
    icon: <FaMoneyBills  className="fs-4" />,
    label: "Tickets",
  },
  {
    key: "calender",
    icon: <FaMoneyBills  className="fs-4" />,
    label: "Calender",
  },
  {
    key: "policy",
    icon: <AiOutlineDashboard  className="fs-4" />,
    label: "Policies",
  },

  {
    key: "signout",
    icon: <AiOutlineLogout className="fs-4" />,
    label: "Sign Out",
  },


])


  return (
    <div className="w-full "  style={{height:"100vh"}}>
      <Layout className='h-full' >
        <Sider trigger={null} collapsible collapsed={collapsed} width={250}  theme="light" style={{height:"100vh"}}>
          <div className="bg-inherit">
            {/* <h2 className="text-white fs-5 text-center py-3 mb-0">
              <span className="sm-logo"></span>
              <span className="">Trading App</span>
            </h2> */}
            <img src={companyimg} className="h-[60px]" />
          </div>
          <Menu

            theme="dark"
            mode="inline"
            defaultSelectedKeys={[""]}
            onClick={({ key }) => {
              if (key === "signout") {
                localStorage.clear();
                navigate('/');
              } else {
                navigate(key);
              }
            }}

            style={{height:"100vh"}}
            items={
        //       currUser?.role?.toLowerCase() === 'admin' ? adminitem  : 
        //    useritem 
             adminitem
          }


          />
        </Sider>
        <Layout className="site-layout" style={{ width: "100%" }}>
          <Header
            className="flex justify-between ps-1 pe-5"
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
           
                <div className="flex items-baseline gap-4">
             
                <LuMessagesSquare className="text-xl" />
              <IoMdNotificationsOutline  className="text-xl" />
              <GoPersonAdd className="text-xl" />
                <DigitalClock/>
                
                </div>
                
   

            
          </Header>
          <Content
        //   className="bg-slate-400"
            style={{
              margin: "10px 10px",
            // background:rgb(245 ,245, 245),
              padding: 24,
              minHeight: 350,
              background: colorBgContainer,
            }}
          >
            

            <Outlet />
          </Content>
        </Layout>
      </Layout>


    </div>
  );
};
export default MainLayout;

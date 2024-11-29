import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxLine } from "react-icons/ri";

const Sidebar = ({bgColor, color}) => {
  return (
    <>
    <div className="side_bar_content" style={{
      backgroundColor:`${bgColor}`,
      color:`${color}`
    }}>
        <div className="top_content">
            <div className="items"><IoHomeSharp className="icons"/>Home</div>
            <div className="items"><IoNotificationsSharp className="icons"/>Notification</div>
            <div className="items"><FaShoppingBag className="icons"/>Shop</div>
            <div className="items"><IoIosChatbubbles className="icons"/>Conversation</div>
            <div className="items"><IoWallet className="icons"/>Wallet</div>
            <div className="items"><IoLogoYoutube className="icons"/>Subscription</div>
            <div className="items"><CgProfile className="icons"/>My Profile</div>
        </div>
        <div className="bottom_content items"><RiLogoutBoxLine className='icons'/>Log Out</div>
    </div>
    </>
  )
}

export default Sidebar

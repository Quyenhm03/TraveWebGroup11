import React from 'react'
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiChartPie, HiInbox, HiOutlineCloudUpload, HiOutlineUpload, HiUser, HiViewBoards } from 'react-icons/hi';
import './side-bar.css'

const SideBar = () => {
  return (
    <div className='sidebar__dashboard'>
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
              Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/uploadtour" icon={HiOutlineCloudUpload}>
            Upload Tour
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/uploadblog" icon={HiOutlineUpload}>
            Upload Blog
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/managetour" icon={HiInbox}>
            Manage Tour
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manageblog" icon={HiInbox}>
            Manage Blog
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manageuser" icon={HiUser}>
            Users
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href='/about' icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  )
}

export default SideBar
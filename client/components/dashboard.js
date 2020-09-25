import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div>Dashboard</div>
          <div><Link to='/dashboard/profile/562dee83-02be-437d-b53a-afb5efee0695'>Go To Profile</Link></div>
          <div><Link to='/dashboard/main'>Go To Main</Link></div>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard

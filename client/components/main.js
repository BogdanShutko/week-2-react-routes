import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div id="title" className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          Main
          <div><Link to='/dashboard/profile/562dee83-02be-437d-b53a-afb5efee0695'>Go To Profile</Link></div>
          <div><Link to='/dashboard'>Go To Root</Link></div>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main

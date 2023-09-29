import { Outlet } from 'react-router-dom'
import Navbar from '../components/NavBar.jsx'

export default function Root() {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main className='flex flex-col w-full flex-grow bg-base-100'>
          <div className='navbar mb-7'/>
          <Outlet />
        </main>
    </div>
  )
}

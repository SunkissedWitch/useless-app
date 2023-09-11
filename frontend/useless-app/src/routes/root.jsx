import { Outlet } from 'react-router-dom'
import Navbar from '../components/NavBar.jsx'

const routes = [
  {
    link: `/watch`,
    title: 'Watch'
  },
]

export default function Root() {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar routes={routes} />
        <main className='flex flex-col w-full flex-grow bg-slate-300'>
          <Outlet />
        </main>
    </div>
  )
}
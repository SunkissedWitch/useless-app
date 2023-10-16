import { useState, createContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/NavBar.jsx'
import { WATCH_LIST_KEY } from '../components/Card.jsx'

export const WatchedContext = createContext()

export default function Root() {
  const [watched, setWatched] = useState(JSON?.parse(localStorage?.getItem(WATCH_LIST_KEY)) || null)
  return (
    <div className='flex flex-col min-h-screen'>
      <WatchedContext.Provider value={{ watched, setWatched }}>
        <Navbar />
        <main className='flex flex-col w-full flex-grow bg-base-100'>
          <div className='navbar mb-7'/>
          <Outlet />
        </main>
      </WatchedContext.Provider>
    </div>
  )
}

import Sidebar from "../components/Sidebar";

export default function Products() {
  return (
    <>
      <div className='container flex'>
        <Sidebar />
        <div className='w-px h-[inherit] bg-red-300' />
        {/* <div className='w-1/4 border-r border-slate-500 h-full'>Sidebar</div> */}
        <div className='grid grid-cols-4 w-full px-2 h-full'>
          <div className='h-60'>2 col</div>
          <div className='h-60'>3 col</div>
          <div className='h-60'>4 col</div>
          <div className='h-60'>5 col</div>
        </div>
      </div>
    </>
  )
}
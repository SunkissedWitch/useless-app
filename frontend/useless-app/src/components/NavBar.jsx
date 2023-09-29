import { NavLink } from 'react-router-dom'

export default function NavBar() {
  const watched = localStorage.getItem('watched')
  const routes = [
    {
      link: `/watch`,
      title: 'Watch',
      badge: watched || '5'
    },
  ]

  return (
    <div className='navbar fixed z-10 bg-base-100'>
      <div className='block w-52'>
        <a className='btn btn-ghost normal-case text-xl' href='/'>Shopka</a>
      </div>
      <div className='flex grow gap-2'>
        <div className='form-control me-auto'>
          <input type='text' placeholder='Search' className='input input-secondary input-sm rounded-full bg-slate-200 border-none w-24 md:w-auto md:min-w-[450px]' />
        </div>
        <div className='px-2'>
          {routes.map(route => (
            <div key={route.link} className='indicator'>
              {route?.badge && <span className='indicator-item badge badge-error text-xs leading-none px-1 py-1 font-medium'>{route.badge}</span>}
              <NavLink to={route.link} className='btn btn-primary rounded btn-outline btn-sm px-4 capitalize border-2 border-primary border-opacity-40'>{route.title}</NavLink>
            </div>
          ))}
        </div>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img src='/images/photo-1534528741775-53994a69daeb.jpeg' />
            </div>
          </label>
          <ul tabIndex={0} className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'>
            <li>
              <a className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
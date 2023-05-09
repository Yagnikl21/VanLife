import { NavLink, Outlet } from 'react-router-dom'
import './Host.scss'

export default function Host() {
  return (
    <div>
        {/* <Navbar /> */}
        <div className='host'>
            <nav className='host-navbar'>
                <NavLink to='' end className={({isActive}) => ( isActive ? "Active" : "" )}>Dashbord</NavLink>
                <NavLink to='income'className={({isActive}) => ( isActive ? "Active" : "" )}>Income</NavLink>
                <NavLink to='vans'className={({isActive}) => ( isActive ? "Active" : "" )}>Vans</NavLink>
                <NavLink to='review'className={({isActive}) => ( isActive ? "Active" : "" )}>Reviews</NavLink>
            </nav>
            <Outlet />
        </div>
        {/* <Footer /> */}
    </div>
  )
}

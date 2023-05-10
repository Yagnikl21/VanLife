import './HostVanDetails.scss'
import data from '../../data'
import { Link, NavLink, Outlet, useParams } from 'react-router-dom'
import { useState } from 'react';


export default function HostVanDetails() {

  const params = useParams();
  const index = params.id;
  const details = useState(data[index])

  return (
    <div className="hostVanDetails">
      <Link to=".." relative='path'>&#8592; Back to all vans</Link>
      <div className='commenSection'>
        <div className='vanDetails'>
          <img src={data[index].imageUrl} alt="van's pic" />
          <div className='info'>
            <p className={`type type${data[index].type}`}>{data[index].type}</p>
            <h1>{data[index].name}</h1>
            <h4>${data[index].price}/day</h4>
          </div>
        </div>
        <nav className='host_nav'>
          <NavLink to="" end className={({isActive}) => ( isActive ? "Active-nav" : "" )}>Details</NavLink>
          <NavLink to="pricing" className={({isActive}) => ( isActive ? "Active-nav" : "" )}>Pricing</NavLink>
          <NavLink to="photo" className={({isActive}) => ( isActive ? "Active-nav" : "" )}>Photos</NavLink>
        </nav>
      </div>
      <Outlet context={details}/>
    </div>
  )
}

import './vans.scss'
import data from '../../data'
import { Link } from 'react-router-dom'


export default function Vans() {

    const card = data.map(d => (
        <div key={d.id}>
            <Link to={`${d.id}`}>
            <img src={d.imageUrl} alt="hello" />
            <div className='details'>
                <div className='left'><h2>{d.name}</h2></div>
                <div className='right'>
                    <p>${d.price}<span>/day</span></p>
                </div>
            </div>
            <i className={`type type${d.type}`}>{d.type}</i>
        </Link>
        </div >
    ))

    return (
        <div className='vans'>
            <div className='van-body'>
                {/* <h1>Explore our van options</h1> */}
                <div className='filter'>
                    <button className='filter-button'>simple</button>
                    <button className='filter-button'>Luxury</button>
                    <button className='filter-button'>Rugged</button>
                    <button className='clearfilter'>Clear filters</button>
                </div>

                <div className='vans-details'>
                    {card}
                </div>
            </div>
        </div>
    )
}

import './vans.scss'
import data from '../../data'
import { Link, useSearchParams } from 'react-router-dom'

export default function Vans() {

    const [searchParams , setSearchParams ] = useSearchParams();
    const type = searchParams.get("type");

    const filterData = !type ? data : data.filter(item => item.type === type);

    const card = filterData.map(d => (
        <div key={d.id}>
            <Link to={`${d.id}`} state={{search : searchParams.toString() , type : type}} >
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
                <h1>Explore our van options</h1>
                <div className='filter'>
                    <button onClick={() => (setSearchParams({type : "simple"}))} 
                    className={`filter-button simple-hover ${type==='simple' ? 'simple' : ''}`}>
                        Simple</button>

                    <button onClick={() => (setSearchParams({type : "luxury"}))} 
                    className={`filter-button luxury-hover ${type==='luxury' ? 'luxury' : ''}`}>
                        Luxury</button>

                    <button onClick={() => (setSearchParams({type : "rugged"}))} 
                    className={`filter-button rugged-hover ${type==='rugged' ? 'rugged' : ''}`}>
                        Rugged</button>
                    {
                        type && <button onClick={() => (setSearchParams({}))} className='clearfilter'>Clear Filter</button>
                    }             
                </div>

                <div className='vans-details'>
                    {card}
                </div>
            </div>
        </div>
    )
}

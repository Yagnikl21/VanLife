import './vans.scss'
import data from '../../data'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function Vans() {

    const [filter, setFilter] = useState("clear");
    const filterData = filter === 'clear' ? data : data.filter(item => item.type === filter);

    const card = filterData.map(d => (
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
                <h1>Explore our van options</h1>
                <div className='filter'>
                    <button onClick={() => {
                        setFilter("simple")
                    }} className={`filter-button ${filter==='simple' ? 'simple' : ''}`}
                    
                    
                    >simple</button>
                    <button onClick={() => {
                        setFilter("luxury")
                    }} className={`filter-button ${filter==='luxury' ? 'luxury' : ''}`}
                    
                    
                    >Luxury</button>
                    <button onClick={() => {
                        setFilter("rugged")
                    }} className={`filter-button ${filter==='rugged' ? 'rugged' : ''}`}
                    
                    >Rugged</button>
                    <button onClick={() => {
                        setFilter("clear")
                    }} className='clearfilter'>Clear filters</button>
                </div>

                <div className='vans-details'>
                    {card}
                </div>
            </div>
        </div>
    )
}

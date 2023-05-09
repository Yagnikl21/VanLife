import data from '../../data.js'
import './van.scss'

export default function van() {
  return (
    <div className='van'>
        <h1>Your listed vans</h1>

        <div className='list'> 
            <img src={data[0].imageUrl} alt="vans" />
            <div className='info'>
                <h1>{data[0].name}</h1>
                <h4>${data[0].price}/day</h4>
            </div>
        </div>

        <div className='list'> 
            <img src={data[1].imageUrl} alt="vans" />
            <div className='info'>
                <h1>{data[1].name}</h1>
                <h4>${data[1].price}/day</h4>
            </div>
        </div>

        <div className='list'> 
            <img src={data[2].imageUrl} alt="vans" />
            <div className='info'>
                <h1>{data[2].name}</h1>
                <h4>${data[2].price}/day</h4>
            </div>
        </div>
    </div>
  )
}

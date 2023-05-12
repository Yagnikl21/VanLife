import data from '../../data'
import './VanDetails.scss'
import { Link, useLocation, useParams } from 'react-router-dom'

export default function VanDetails() {

  const params = useParams();
  const location = useLocation();
  const index = params.id;
  const back = location.state.type ? location.state.type : "all"
  return (

    <div className='van-details'>
      <Link to={`..?${location.state ? location.state.search : location.state}`}  relative='path'>&#8592; Back to {back} vans</Link>
      <img src={data[index].imageUrl} alt="van" />
      <div className='detail'>

        <p className={`type type${data[index].type}`}>{data[index].type}</p>
        <h1>{data[index].name}</h1>
        <h4>${data[index].price}/day</h4>
        <p>{data[index].description}</p>
        <div className='button'>
          <Link to={`/van/${data[index].id}`}>
            Rent This van
          </Link>
        </div>
      </div>

    </div>
  )
}

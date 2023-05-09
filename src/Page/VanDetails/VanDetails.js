import data from '../../data'
import './VanDetails.scss'
import { Link, useParams } from 'react-router-dom'

export default function VanDetails() {

  const params = useParams();
  const index = params.id;

  console.log(index);
  console.log(data[index]);

  return (

    <div className='van-details'>
      <Link to="/vans">&#8592; Back to all vans</Link>
      <img src={data[index].imageUrl} alt="van" />
      <div className='details'>

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

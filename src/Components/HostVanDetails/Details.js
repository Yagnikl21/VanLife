import { useOutletContext } from 'react-router-dom'
import './Details.scss'

export default function Details() {

  const currentVan = useOutletContext();
  return (
    <div className='host-van-details'>
      <h4>Name : <span>{currentVan[0].name}</span></h4>
      <h4>Category : <span>{currentVan[0].type}</span></h4>
      <h4>Description : <span>{currentVan[0].description}</span></h4>
      <h4>Visibility : <span>Public</span></h4>
    </div>
  )
}

import { useOutletContext } from 'react-router-dom'
import './Photo.scss'

export default function Photo() {

  const currentVan = useOutletContext();
  return (
    <div className='photo'>
        <img src={currentVan[0].imageUrl} alt="CurrentVan" /> 
    </div>
  )
}

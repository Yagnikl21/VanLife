import { useOutletContext } from 'react-router-dom'
import './Pricing.scss'


export default function Pricing() {

  const currentUser = useOutletContext();
  return (
    <div className='pricing'>
      <h1>${currentUser[0].price}<span>/day</span></h1>
    </div>
  )
}

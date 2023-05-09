import './Income.scss'
import state from './state.png'


export default function Income() {
    return (
        <div className='income'>
            <h1>Income</h1>
            <h4>Last 30 days</h4>
            <h1 className='amount'>$2,260</h1>
            <img src={state} alt="state"></img>

            <span>
                <h3>Your transaction(3)</h3>
                <h4>Last 30 days</h4>
            </span>

            <div className='section'>
                <h1>$720</h1>
                <h4>1/12/22</h4>
            </div>

            <div className='section'>
                <h1>$560</h1>
                <h4>10/11/22</h4>
            </div>

            <div className='section'>
                <h1>$640</h1>
                <h4>23/10/22</h4>
            </div>
        </div>
    )
}

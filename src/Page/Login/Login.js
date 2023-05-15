import { Link } from 'react-router-dom'
import './Login.scss'
import { AuthContext } from '../../Context/authContext'
import { useContext } from 'react'

export default function Login() {

    const { login } = useContext(AuthContext)
    const clickHandler = () => {
        login();
    }

    return (
        <div className='login'>
            <h1>Sign in to your account</h1>
            <form>
                <input type='email' placeholder="Email address" />
                <input type='password' placeholder="Password" />
                <button onClick={clickHandler} type='submit'>Sign in</button>
            </form>
            <span>
                <p>Don't have an account? </p><Link> Creat one now</Link>
            </span>
        </div>
    )
}

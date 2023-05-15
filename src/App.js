import './App.scss'
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./Page/Home/Home"
import About from "./Page/About/About"
import Vans from './Page/Vans/vans'
import VanDetails from './Page/VanDetails/VanDetails'
import Host from './Page/Host/Host'
import Layout from './Components/LayOut/Layout'
import Dashboard from './Components/Dashboard/Dashboard'
import Review from './Components/Review/Review'
import Income from './Components/Income/Income'
import Van from './Components/Van/van'
import HostVanDetails from './Page/HostVanDetails/HostVanDetails'
import Pricing from './Components/HostVanDetails/Pricing'
import Details from './Components/HostVanDetails/Details'
import Photo from './Components/HostVanDetails/Photo'
import Error from './Page/Error/Error'
import Login from './Page/Login/Login'
import { useContext } from 'react'
import { AuthContext } from './Context/authContext'




export default function App() {

    const { currentUser } = useContext(AuthContext);

    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to="/login" />;
        }

        return children;
    };
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="van" element={<Vans />} />
            <Route path="van/:id" element={<VanDetails />} />
            <Route path="host" element={<ProtectedRoute>
                <Host />
            </ProtectedRoute>}>
                <Route index element={<Dashboard />} />
                <Route path='vans' element={<Van />} />
                <Route path='vans/:id' element={<HostVanDetails />} >
                    <Route index element={<Details />} />
                    <Route path='pricing' element={<Pricing />} />
                    <Route path='photo' element={<Photo />} />
                </Route>
                <Route path='review' element={<Review />} />
                <Route path='income' element={<Income />} />
            </Route>
            <Route path='login' element={<Login />} />
            <Route path='*' element={<Error />} />
        </Route>
    ))

    return (
        <div className='app'>
            <RouterProvider router={router} />
        </div>
    )
}



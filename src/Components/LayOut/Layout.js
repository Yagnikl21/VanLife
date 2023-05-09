import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import './Layout.scss'

export default function Layout() {
  return (
    <div className="wrapper">
        <Navbar />
        <Outlet />  
        <Footer />
    </div>
  )
}

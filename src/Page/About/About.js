import React from "react";
import './About.scss'
import Image from "./image.png"
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="about">
            {/* <Navbar /> */}
            <div className="aboutContainer">
                <img src={Image} alt="sfs" />
                <div className="content">
                    <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                    <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                        (Hitch costs extra 😉)

                        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.F</p>

                    <div className="destination">
                        <h1>
                            Your destination is waiting.
                        <br />
                            Your van is ready.
                        </h1>
                        <Link className="link-button" to="/vans">Explore our vans</Link>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}
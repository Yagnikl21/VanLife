import React from 'react';
import './Home.scss'
import { Link } from 'react-router-dom';

export function Home() {
    return(
        <div className='home'>
          {/* <Navbar /> */}
          <div className='homepage'>
            <div className='container'>
              <h1>You got the travel plans, we got the travel vans.</h1>
              <h3>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</h3>
              <Link to="van">Find your van</Link>
            </div>
          </div>
          {/* <Footer /> */}
      </div>
    )
}

export default Home;
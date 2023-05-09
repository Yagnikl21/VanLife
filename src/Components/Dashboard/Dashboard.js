import data from '../../data'
import './Dashboard.scss'

export default function Dashboard() {
    return (
        <div className='Dashboard'>
            <div className='Overview'>
                <div className='left'>
                    <h1>Welcome!</h1>
                    <p>Income last <u>30 days</u></p>
                    <h1>$2,260</h1>
                </div>
                <div className='right'>
                    <p>Details</p>
                </div>
            </div>

            <div className='rating'>
                <div className='left'>
                    <h3>Review score 5.0/5</h3>
                </div>
                <div className='right'>
                    <p>Details</p>
                </div>
            </div>

            <div className='list'>
                <div className='list-info'>
                    <h2>Your listed vans</h2>
                    <p>View all</p>
                </div>

                <div className='van-info'>
                    <div className='van'>
                        <div className='left'>
                            <img src={data[0].imageUrl} alt="Van1"></img>
                            <div className='detail'>
                                <h3>{data[0].name}</h3>
                                <p>#{data[0].price}/day</p>
                            </div>
                        </div>
                        <div className='right'>
                        <p>Edit</p>
                        </div>
                    </div>

                    <div className='van'>
                        <div className='left'>
                            <img src={data[1].imageUrl} alt="Van1"></img>
                            <div className='detail'>
                                <h3>{data[1].name}</h3>
                                <p>#{data[1].price}/day</p>
                            </div>
                        </div>
                        <div className='right'>
                        <p>Edit</p>
                        </div>
                    </div>

                    <div className='van'>
                        <div className='left'>
                            <img src={data[2].imageUrl} alt="Van1"></img>
                            <div className='detail'>
                                <h3>{data[2].name}</h3>
                                <p>#{data[2].price}/day</p>
                            </div>
                        </div>
                        <div className='right'>
                        <p>Edit</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import './Review.scss'
import Review_pic from './Review.png'
import star from './Star.png'

export default function Review() {
  return (
    <div className='review'>
        <span>
            <h2> Your reviews</h2>
            <p> last 30 days</p>
        </span>

        <img src={Review_pic} alt="Reviews"></img>

        <h3>Review(2)</h3>
        <span className='review_star'>
            <img src={star} alt="Star"></img>
            <img src={star} alt="Star"></img>
            <img src={star} alt="Star"></img>
            <img src={star} alt="Star"></img>
            <img src={star} alt="Star"></img>
        </span>

        <div className='comment_details'>
            <span>
                <h5>Elliot</h5><h5 className='back'>December 1,2022</h5>
            </span>
            <p>The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!</p>
        
            <hr />
        </div>

        <span className='review_star'>
            <img src={star} alt="Star"></img>
            <img src={star} alt="Star"></img>
            <img src={star} alt="Star"></img>
            <img src={star} alt="Star"></img>
            <img src={star} alt="Star"></img>
        </span>

        <div className='comment_details'>
            <span>
                <h5>Sandy</h5><h5 className='back'>November 23,2022</h5>
            </span>
            <p>This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!</p>        
            <hr />
        </div>
    </div>
  )
}

import "./what.css";
import { AiOutlineStar } from 'react-icons/ai';
import { AiOutlineRollback } from 'react-icons/ai';
import {PiNotePencilDuotone} from 'react-icons/pi'
import {FaAward} from 'react-icons/fa'
import {BsBookmark} from 'react-icons/bs'
import {BsCalendar4} from 'react-icons/bs'
import {BiSupport} from 'react-icons/bi'
import {BsWallet2} from 'react-icons/bs'



function What() {
  return (
    <div style={{margin:"10vh 0"}}>
      <div>
        <h1 className="what-h1">What We Do</h1>
        <div>
          <div className="what-card">
            <ul className="what-ul">
              <li className="what-ul-icon"><AiOutlineStar/></li>
              <li>Free Shipping</li>
            </ul>
            <ul className="what-text">
              Booksmart offers free shipping worldwide, which makes it possible
              for you to rent a book from us even if you live far away from our
              head office. The shipping process is fast and secure.
            </ul>
          </div>
          <div className="what-card">
            <ul className="what-ul">
              <li className="what-ul-icon"><AiOutlineRollback/></li>
              <li>Easy Returns</li>
            </ul>
            <ul className="what-text">
            You can always return a book after you’ve read it. Just use a unique link that can be found inside our every textbook. Then fill out a special form and send the book.
            </ul>
          </div>
          <div className="what-card">
            <ul className="what-ul">
              <li className="what-ul-icon"><PiNotePencilDuotone/></li>
              <li>Take Notes</li>
            </ul>
            <ul className="what-text">
            Books rented on our website have a special section where you can take notes. However, we ask all our customers to limit your writing to a minimal amount if possible.
            </ul>
          </div>
          <div className="what-card">
            <ul className="what-ul">
              <li className="what-ul-icon"><FaAward/></li>
              <li>Satisfaction Guaranteed</li>
            </ul>
            <ul className="what-text">
            We hope that you will like our book rental service. Our team makes every effort to offer you an easy and enjoyable experience of renting books at any time of the year.
            </ul>
          </div>
          <div className="what-card">
            <ul className="what-ul">
              <li className="what-ul-icon"><BsBookmark/></li>
              <li>Highlighting</li>
            </ul>
            <ul className="what-text">
            Our customers are allowed to highlight the text in our books. It helps in using the full potential of our books without spoiling them. Unfortunately, writing in books is prohibited.
            </ul>
          </div>
          <div className="what-card">
            <ul className="what-ul">
              <li className="what-ul-icon"><BsCalendar4/></li>
              <li>Flexible Rental Periods</li>
            </ul>
            <ul className="what-text">
            Booksmart uses a flexible rental policy to help our customers enjoy books from our catalog without almost any time limitations. You will receive a notice if your rental period is ending.
            </ul>
          </div>
          <div className="what-card">
            <ul className="what-ul">
              <li className="what-ul-icon"><BiSupport/></li>
              <li>Live Customer Support</li>
            </ul>
            <ul className="what-text">
            If you need assistance with selecting or renting our books, feel free to contact our customer support or leave a message for us using the form on our website.

            </ul>
          </div>
          <div className="what-card">
            <ul className="what-ul">
              <li className="what-ul-icon"><BsWallet2/></li>
              <li>Discount System</li>
            </ul>
            <ul className="what-text">
            Regular clients of Booksmart have an advantage of reduced book rental prices and discounts on new books from our catalog, which is updated daily.
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default What;

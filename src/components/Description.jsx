import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./description.css";

function Description() {
  const navigate = useNavigate();
  const location = useLocation();
  const nameData = location.state.search;
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${nameData}&key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [nameData]);

  const cart = () => {
    navigate('/');
    alert('Thanks For Shopping !!!')
  }
  if (data != null)

    return (
      <>
        <div className="description-container">
          <div className="img">
            <img
              src={data && data.items[0].volumeInfo.imageLinks.thumbnail}
              alt="err"
              id="img"
              width={300}
            />
          </div>
          <div className="description-text">
            <ul>
              <li className="title">
                {data && data.items[0].volumeInfo.title}
              </li>
              <li className=" ul-li">
                {data && data.items[0].volumeInfo.authors[0]}
              </li>
              <li className=" ul-li inline">
                {data && data.items[0].volumeInfo.averageRating}
              </li>
              <p className="price">$99/-</p>
              <button className="cart" onClick={cart}>Buy Now</button>
            </ul>
          </div>
        </div>
      </>
    );
}

export default Description;

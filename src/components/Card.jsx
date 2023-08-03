import { useNavigate } from "react-router-dom";
import "./card.css";
function Card(props) {
    const navigate = useNavigate();
  const onClick = (e) => {
    // console.log(e.currentTarget.id);    
    navigate('/description',{state:{search:e.currentTarget.id}})
  };
  return (
    <div className="card-container">    
      <div className="card" onClick={onClick} id={props.title}>
        <img className="card-img" src={props.img} alt="mcld" />
        <h1 className="card-title"> {props.title}</h1>
        <p className="card-price">{props.price}</p>
      </div>
    </div>
  );
}

export default Card;

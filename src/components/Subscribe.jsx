import { useState } from "react";
import "./subscribe.css";

function Subscribe() {
    const [name,setName ] = useState("");
    const handler = (e) => {
         setName(e.target.value);
    }

    const click = () => {
        alert('Thanks for subscibing :- ' + name);
        setName('');
    }
  return <div className="sub-container">
        <h1 className="sub-h1">Subscribe for more info !!!</h1>

    <div className="subscribe">
        <input onChange={handler} className="in-sub" type="text" placeholder="Subscribe for more updates..."/>
        <button className="btn-sub" onClick={click}>Subscribe</button>
    </div>
  </div>;
}

export default Subscribe;

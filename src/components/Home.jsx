import "./home.css";
import bookSearch from "../bookSearch.avif";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Subscribe from "./Subscribe";
import What from "./What";

function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const navi = () => {
    navigate("/category", { state: { search: search } });
  };
  const inputHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
    <div className="home-container">
      <div>
        <img
          src={bookSearch}
          alt=""
         id="home-img"
          style={{ marginTop: "10vh" }}
        />
      </div>
      <div className="search">
        <h1 className="home-h1">
          All Books <br />
          You Need To know...
        </h1>
        <input type="text" placeholder="Search..." onChange={inputHandler} />
        <button onClick={navi} className="home-btn">
          search
        </button>
      </div>
    </div>
    <Subscribe/>
    <What/>
    </>
  );
}

export default Home;

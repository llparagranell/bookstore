import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "./Card";

function Category() {
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
  return (
    <div>
      {data &&
        data.items.map((e) => { 

            return <Card title={e.volumeInfo.title}  img={e.volumeInfo.imageLinks.thumbnail} price={"$99"}/>;

          
        })}
    </div>
  );
}

export default Category;

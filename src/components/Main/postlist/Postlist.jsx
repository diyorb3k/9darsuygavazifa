import React, { useState, useEffect } from "react";
import "./Postlist.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Postlist = () => {
  const [albom, setAlbom] = useState(null);
  const [relaut, setRelaut] = useState(true);
  const [data, setDat] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        setAlbom(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [relaut]);

  const card = albom
    ?.filter((user) => user.body.toLowerCase().includes(query.toLowerCase()))
    ?.map((el) => (
      <Link to={`/product/${el.id}`} className="form" key={el.id}  >
        <img className="imgp" src={el.url} alt="" />
        <p className="titled">{el.body.slice(0, 95)}</p>
        <div className="floyd">
          <span className="days">Floyd Miles</span>
          <span className="days">3 Days Ago</span>
        </div>
      </Link>
    ));
  return (
    <div className="container">
      <form action="">
        <input
          className="inputt"
          type="text"
          placeholder="Searching..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div className="bigoco">{card}</div>
    </div>
  );
};

export default Postlist;

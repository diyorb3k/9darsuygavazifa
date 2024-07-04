import React, { useEffect, useState } from "react";
import "./Detilis.css";
import { useParams } from "react-router-dom";

const Detilis = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const filterData = data.filter((fil) => fil.id == id);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/posts");
      const result = await res.json();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="detilis">
      <div className="container">
        {filterData.length > 0 && (
          <div>
            <img className="imgrasim" src={`${filterData[0]?.url}`} alt="" />
            <div className="text">
              <h2 className="id">id: {filterData[0].id}</h2>
              <h6 className="charge">{filterData[0].body}...</h6>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detilis;

import { useState } from "react";
import "../../style.css";

const Country = ({ country }) => {
  const { name, area, capital, flags } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className="box">
      <div>
        <h3>Name : {name.common}</h3>
        <p>Area: {area}</p>
        <p>Capital : {capital}</p>
        <button className="btn" onClick={handleVisited}>
          {visited ? "Visit" : "Going"}
        </button>
        {visited ? "I have visited" : "I want to visite"}
      </div>
      <div>
        <img className="img" src={flags.png} alt="" />
      </div>
    </div>
  );
};

export default Country;

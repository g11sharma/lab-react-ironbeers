import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function RandomBeer() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        console.log("response.data", response.data);
        setBeers(response.data);
      });
  }, []);
  return (
    <div>
      <Link to={`/beers/${beers._id}`}>
        <img className="beerimg" src={beers.image_url} alt="beerimg" />
        <h3>{beers.name}</h3>
        <p>{beers.tagline}</p>
        <p>{beers.contributed_by}</p>
      </Link>
    </div>
  );
}

export default RandomBeer;

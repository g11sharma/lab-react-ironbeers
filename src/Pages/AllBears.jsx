import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Bears = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    // <== ADD THE EFFECT
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log("response.data", response.data);
      setBeers(response.data);
    });
  }, []);

  return (
    <div>
      {beers.map((beer) => {
        return (
          <div>
            <Link to={`/beers/${beer._id}`}>
              <img className="beerimg" src={beer.image_url} alt="beerimg" />
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p>{beer.contributed_by}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Bears;

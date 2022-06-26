import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const BearDetails = () => {
  const [beer, setBeer] = useState(null);

  const { beerId } = useParams();

  //const getBeerId = async () =>{
  //  try {
  //    let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
  //}
  //}

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        console.log("response.data", response.data);
        setBeer(response.data);
      });
  }, []);

  return (
    <>
      {beer && (
        <div>
          <h1>{beer.name}</h1>
          <img className="detailbeer" src={beer.image_url} alt="beer" />
          <p>{beer.tagline}</p>
          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </div>
      )}
      <Link to="/beers">
        <button>Back to beers</button>
      </Link>
    </>
  );
};

export default BearDetails;

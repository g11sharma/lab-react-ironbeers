import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function NewBeer() {
  const [beer, setBeer] = useState("");
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [brewers_tips, setBrewers_tips] = useState("");
  const [description, setDescription] = useState("");
  const [contributed_by, setContributed_by] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };
    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, body)
      .then((response) => {
        setBeer("");
        setName("");
        setTagline("");
        setDescription("");
        setFirst_brewed("");
        setBrewers_tips("");
        setAttenuation_level("");
        setContributed_by("");
      });
  };
  return (
    <>
      {
        <div>
          <h2>Toto's New Bear</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="tagline">Tagline</label>
            <input
              type="text"
              name="tagline"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
            />
            <label htmlFor="description">description</label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="first_brewed">first_brewed</label>
            <input
              type="text"
              name="first_brewed"
              value={first_brewed}
              onChange={(e) => setFirst_brewed(e.target.value)}
            />
            <label htmlFor="attenuation_level">attenuation_level</label>
            <input
              type="number"
              name="attenuation_level"
              value={attenuation_level}
              onChange={(e) => setAttenuation_level(e.target.value)}
            />
            <label htmlFor="contributed_by">contributed_by</label>
            <input
              type="text"
              name="contributed_by"
              value={contributed_by}
              onChange={(e) => setContributed_by(e.target.value)}
            />
            <label htmlFor="brewers_tips">brewers_tips</label>
            <input
              type="text"
              name="brewers_tips"
              value={brewers_tips}
              onChange={(e) => setBrewers_tips(e.target.value)}
            />
            <button type="submit">Create</button>
          </form>
        </div>
      }
      <Link to="/beers">
        <button>Back to beers</button>
      </Link>
    </>
  );
}
export default NewBeer;

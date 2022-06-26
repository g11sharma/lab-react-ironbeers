import React from "react";
import beer from "../assets/beers.png";
import newbear from "../assets/new-beer.png";
import randomBear from "../assets/random-beer.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>
        <img src={beer} />
        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad minus ab
          aperiam commodi esse quas porro dicta, sint laboriosam non sequi
          ipsam, suscipit possimus fugiat ex repellat eligendi debitis earum!
        </p>
        <Link to="/beers"> All Beers </Link>
      </div>
      <div>
        <img src={newbear} />
        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor sit amet. Et perspiciatis aperiam ex consequatur est
          unde soluta eos debitis sunt. Et harum voluptatem est iusto quia ut
          iure architecto est dolorum consequuntur 33 incidunt labore eos
          voluptatum error et voluptatem officiis. Quo modi fuga ut amet quia
          qui omnis totam eos dolorem voluptas et nisi rerum et cupiditate
          totam.
        </p>
        <Link to="./new-beer">New Beer</Link>
      </div>
      <div>
        <img src={randomBear} />
        <h1>Random-Bear</h1>
        <p>
          Lorem ipsum dolor sit amet. Ex dolores odio ut dolores molestiae rem
          quasi sint vel eligendi expedita cum animi nesciunt rem dicta dolore
          est dicta voluptatibus. Qui vitae sunt ut rerum reiciendis ut
          aspernatur corrupti ab nesciunt quae sed ipsa officiis! Et minima
          magnam est quae internos rem corrupti possimus sit quam dolorem et
          sint excepturi aut commodi cupiditate.
        </p>
        <Link to="./random-beer">Random-Bear</Link>
      </div>
    </>
  );
};

export default HomePage;

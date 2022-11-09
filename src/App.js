import React from "react";

import "./styles.css";

const travels = {
  Orissa: [
    {
      place: "Bhubaneswar",
      rating: "5/5"
    },
    {
      place: "Puri",
      rating: "4.5/5"
    },
    {
      place: "Chilika Lake",
      rating: "4/5"
    }
  ],
  Goa: [
    {
      place: "Palolem Beach",
      rating: "5/5"
    },
    {
      place: "Panaji",
      rating: "4/5"
    },
    {
      place: "Agonda",
      rating: "3/5"
    }
  ],
  Karnataka: [
    {
      place: "Bengaluru",
      rating: "5/5"
    },
    {
      place: "Hampi",
      rating: "5/5"
    },
    {
      place: "Mysuru",
      rating: "4/5"
    }
  ],
};
const locations = Object.keys(travels);

function App () {
  const [location, setLocation] = React.useState("Orissa");

  return (
    <div className="container">
      <h1>
        🏕️ scenicplaces
      </h1>
      <p>
        Checkout my places of travels. Select a location to get started.     
      </p>
      <hr />
      <div class="main-content">
        <div class="locations">
          {locations.map((location, index) => {
            return (
              <button
                className="btn"
                key={index}
                onClick={() => setLocation(location)}
              >
                {location}
              </button>
            );
          })}
        </div>
        <ul className="list">
          {travels[location].map(({ place, rating }, index) => {
            return (
              <li key={index} className="list-element">
                {place}
                <span className="rating">{rating}</span>
                <hr />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
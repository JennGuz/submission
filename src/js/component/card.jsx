import React from "react";

const Card = ({ logo, title, description, salary, positions, growth }) => {
  return (
    <div className="card">
      <div className="logo">{logo}</div>
      <div className="description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="info">
        <p>Average Salary per year: {salary}</p>
        <p>Job Positions: {positions}</p>
        <p>Career Growth: {growth}</p>
      </div>
      <button>See plans & prices</button>
    </div>
  );
};

export default Card;

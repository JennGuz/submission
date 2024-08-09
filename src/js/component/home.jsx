import React from "react";
import { svgs } from "../svjs";
import Card from "./card";

const Career = () => {
  return (
    <>
      <div className="container">
        <h1>Choose your career path</h1>
        <Card
          logo={svgs.fullstack}
          title="Full Stack Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, esse ratione totam aut consectetur quam. Possimus fugiat nobis officiis corporis. Porro cumque pariatur rerum fugiat veniam voluptatum earum repudiandae fugit."
          salary="$55K"
          positions="+350.000"
          growth="45% in the last year"
        />
        <Card
          logo={svgs.dataScience}
          title="Data Science"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum rerum vel tenetur accusamus inventore? Similique sint magni natus, deserunt reiciendis voluptatum quidem iste, fuga enim et rerum neque officia!"
          salary="$75K"
          positions="+500.000"
          growth="75% in the last year"
        />
      </div>
    </>
  );
};

const Home = () => {
  return (
    <div className="text-center">
      <Career />
    </div>
  );
};

export default Home;

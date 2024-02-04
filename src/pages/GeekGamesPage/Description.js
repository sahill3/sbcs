import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <div className="desc-body">

      <hr className="mid"></hr>

      <h1>Games</h1>

      <div className="g1">
        <h2>Capture the Flag: The Detective Chronicles</h2>
        <p>
          Capture the Flag: The Detective Chronicles Embark on a thrilling
          journey with "Capture the Flag: The Detective Chronicles," where
          players become detectives to solve a murder mystery. Set in a virtual
          environment, this game challenges participants with puzzles and clues.
          Explore, decipher, and unlock secrets to capture the flag and
          solve the mystery!
        </p>
      </div>

      <hr className="small"></hr>

      <div className="g1">
        <h2>Copy Cat Coding Challenge</h2>

        <p>
          Dive into the world of coding with our "Copy Cat Coding Challenge."
          Teams watch a demo of a small project, like a Mario Runner game or a
          simple painting app, then collaborate to recreate it. With a cheat
          sheet and a rubric for guidance, creativity and teamwork take the
          forefront. After 90 minutes of coding, teams present their projects.
          The best replication, as judged by the rubric, wins the challenge.
          It's a fun, engaging way to learn coding and teamwork skills!
        </p>
      </div>

      <hr className="small"></hr>

      <div className="g1">
        <h2>Spaghetti and Marshmallow Build-Off Challenge</h2>

        <p>
          Get ready for a fun and sticky competition with our "Spaghetti and
          Marshmallow Build-Off Challenge!" Teams are provided with an equal
          assortment of dry spaghetti strands and mini marshmallows, tasked with
          constructing the tallest tower possible. Creativity and strategic
          thinking are key as participants may negotiate with rivals, trading
          marshmallows for spaghetti and vice versa, to enhance their
          architectural designs. When the clock stops, each tower's durability
          is put to the test with shakes and gusts to simulate real-world
          challenges. The team whose tower stands the tallest and withstands the
          tests wins the challenge. Grab your pasta sticks and marshmallows, and
          let the building begin!
        </p>
      </div>
    </div>
  );
};

export default Description;
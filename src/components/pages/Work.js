import React from "react";
import plumingPipes from "../images/185811819_90418abf3e_w.jpg";
import electricalWires from "../images/15404933015_28f2b38c09_w.jpg";
import concert from "../images/concert.jpg";
import presentPearWebsite from "../images/present-pear.png";
import skateboards from "../images/7004450864_e2960c0e4c_w.jpg";

export default function Work() {
  return (
    <div className="column">
      {/* fix this shit */}
      <h2>Work</h2>
      <div className="row justify-center" id="cards">
        <section className="card">
          <h3>Plumbing</h3>
          <img src={plumingPipes} alt="Pumbing Pipes" />
        </section>
        <section className="card">
          <h3>Electrical</h3>
          <img src={electricalWires} alt="Electrical Wires" />
        </section>
        <section className="card">
          <h3>Project 1</h3>
          <img src={concert} alt="Ticketmaster Weather" />
        </section>
        <section className="card">
          <h3>Project 2</h3>
          <img src={presentPearWebsite} alt="Present Pear Website" />
        </section>
        <section className="card">
          <h3>Skateboarding</h3>
          <img src={skateboards} alt="Skateboards" />
        </section>
      </div>
    </div>
  );
}

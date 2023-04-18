import React from "react";

// images
import plumingPipes from "../images/185811819_90418abf3e_w.jpg";
import electricalWires from "../images/15404933015_28f2b38c09_w.jpg";
import concert from "../images/concert.jpg";
import presentPearWebsite from "../images/present-pear.png";
import skateboards from "../images/7004450864_e2960c0e4c_w.jpg";
import taskasaurus from "../images/tasker.jpg";

const cardClick = (e) => {
  switch (e.currentTarget.firstElementChild.textContent) {
    case "Project 1":
      window.location.href =
        "https://nanea808.github.io/01-project-dosequis-api/";
      break;
    case "Project 2":
      window.location.href = "https://present-pear.herokuapp.com/";
      break;
    case "Task-a-saurus":
      window.location.href = "https://taskasaurus-app.herokuapp.com/";
      break;
    default:
      break;
  }
};

export default function Work() {
  return (
    <div className="column">
      <h2>Work</h2>
      <div className="row justify-center" id="cards">
        <section className="card" onClick={cardClick}>
          <h3>Plumbing</h3>
          <img src={plumingPipes} alt="Pumbing Pipes" />
        </section>
        <section className="card" onClick={cardClick}>
          <h3>Electrical</h3>
          <img src={electricalWires} alt="Electrical Wires" />
        </section>
        <section className="card" onClick={cardClick}>
          <h3>Project 1</h3>
          <img src={concert} alt="Ticketmaster Weather" />
        </section>
        <section className="card" onClick={cardClick}>
          <h3>Project 2</h3>
          <img src={presentPearWebsite} alt="Present Pear Website" />
        </section>
        <section className="card" onClick={cardClick}>
          <h3>Skateboarding</h3>
          <img src={skateboards} alt="Skateboards" />
        </section>
        <section className="card" onClick={cardClick}>
          <h3>Task-a-saurus</h3>
          <img src={taskasaurus} alt="Task-A-Saurus Logo" />
        </section>
      </div>
    </div>
  );
}

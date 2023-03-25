import React from "react";

export default function Work() {
  return (
    <div>
      {/* fix this shit */}
      <h2 className="sector-header">Work</h2>
      <hr className="sector-line-break" />
      <div className="work-main row" id="cards">
        <section className="work-card">
          <h3 className="work-header">Plumbing</h3>
          <img
            src="./assets/images/185811819_90418abf3e_w.jpg"
            alt="Pumbing Pipes"
          />
        </section>
        <section className="work-card">
          <h3 className="work-header">Electrical</h3>
          <img
            src="./assets/images/15404933015_28f2b38c09_w.jpg"
            alt="Electrical Wires"
          />
        </section>
        <section className="work-card">
          <h3 className="work-header">Project 1</h3>
          <img src="./assets/images/concert.jpg" alt="Ticketmaster Weather" />
        </section>
        <section className="work-card">
          <h3 className="work-header">Project 2</h3>
          <img
            src="./assets/images/present-pear.png"
            alt="Present Pear Website"
          />
        </section>
        <section className="work-card">
          <h3 className="work-header">Skateboarding</h3>
          <img
            src="./assets/images/7004450864_e2960c0e4c_w.jpg"
            alt="Skateboards"
          />
        </section>
      </div>
    </div>
  );
}

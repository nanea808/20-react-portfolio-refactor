import React from "react";
import "icono";

const contactClick = (e) => {
  switch (e.currentTarget.id) {
    case "number":
      window.open("tel:5415056798", "_self").focus();
      break;
    case "email":
      window.open("mailto:willers.enw@gmail.com", "_self").focus();
      break;
    case "github":
      window.open("https://github.com/nanea808", "_blank").focus();
      break;
    case "linkedIn":
      window.open("https://www.linkedin.com/in/ethan-willers/", "_blank").focus();
      break;
    default:
      break;
  }
};

export default function Contact() {
  return (
    <div className="column">
      <div className="row justify-center" id="cards">
        <ul className="contact-info">
          <li id="number" onClick={contactClick}>
            <i className="icono-iphoneBold"></i>
            <p>541-505-6798</p>
          </li>
          <li id="email" onClick={contactClick}>
            <i className="icono-mail"></i>
            <p>willers.enw@gmail.com</p>
          </li>
          <li id="github" onClick={contactClick}>
            <i className="icono-terminal"></i>
            <p>GitHub</p>
          </li>
          <li id="linkedIn" onClick={contactClick}>
            <i className="icono-linkedIn"></i>
            <p>LinkedIn</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

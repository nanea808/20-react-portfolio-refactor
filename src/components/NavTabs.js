import React from "react";

// const styles = {
//   nav: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     paddingLeft: 0,
//     marginBottom: 0,
//     listStyle: 'none',
//   },
//   navItem: {
//     padding: '1rem, 0.5rem'
//   },
//   navLink: {

//   }
// }

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="nav">
      <h1>Ethan Willers</h1>
      <ul>
        <li>
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#blog"
            onClick={() => handlePageChange("Blog")}
            className={currentPage === "Blog" ? "nav-link active" : "nav-link"}
          >
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;

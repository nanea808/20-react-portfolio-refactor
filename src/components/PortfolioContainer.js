import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Work from './pages/Work';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Work');

  // Refactor with switch statement
  const RenderPage = () => {
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      {/* currentPage from our state variable and the handlePageChange method */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className='background'></div>
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {/* when the page loads we will call the renderPage method */}
      <RenderPage />
    </div>
  );
}

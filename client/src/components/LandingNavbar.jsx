import React, { useState } from 'react';
import "../styles/LandingNavbar.css";

const LandingNavbar = ({ featuresRef, faqRef }) => {
  const [activeTab, setActiveTab] = useState('Home');

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'Features') {
      scrollToRef(featuresRef);
    } else if (tab === 'Help') {
      scrollToRef(faqRef);
    } else if (tab === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar-landing">
      <div className="logo-main">
        <span className="logo-blue">{'{Re}'}</span>Kindle
      </div>

      <ul className="nav-tabs-main">
        {['Home', 'Features', 'Help'].map((tab) => (
          <li
            key={tab}
            className={`nav-item-main ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>

      <button className="login-button-main" onClick={() => window.location.href = '/login'}>
        Login
      </button>
    </nav>
  );
};

export default LandingNavbar;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/LandingNavbar.css';

const LandingNavbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };
  return (
    <nav className="navbar-landing">
      <div className="logo-main">
        <span className="logo-blue">{'{Re}'}</span>Kindle
      </div>

      <ul className="nav-tabs-main">
        {['Home', 'Features', 'Help'].map(tab => (
          <li
            key={tab}
            className={`nav-item-main ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>

      {/* Login Button */}
      <button className="login-button-main" onClick={handleLoginClick}>Login</button>
    </nav>
  );
};

export default LandingNavbar;

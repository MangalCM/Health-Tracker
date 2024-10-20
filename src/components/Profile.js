import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Profile.css'; // Import your CSS file

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);

  const togglePanel = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="profile">
      <button className="profile-btn" onClick={togglePanel}>
        Profile
      </button>
      <div className={`side-panel ${isVisible ? 'visible' : ''}`}>
        <button className="close-btn" onClick={togglePanel}>
          &times; {/* Close Button */}
        </button>
        <ul>
          <li>
            <Link className="personal-details" to="/personal-details" onClick={togglePanel}>
              Personal Details
            </Link>
          </li>
          <li>
            <Link className="settings" to="/settings" onClick={togglePanel}>
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;

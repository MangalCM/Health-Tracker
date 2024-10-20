import React from 'react';
import './Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <a href="/medical-history" className="dashboard-box">
                Medical History
            </a>
            <a href="/diet" className="dashboard-box">
                Diet Details
            </a>
            <a href="/myinfo" className="dashboard-box"> {/* Link to Fitness page */}
                Fitness
            </a>
            {/* Add more dashboard boxes as needed */}
        </div>
    );
};

export default Dashboard;

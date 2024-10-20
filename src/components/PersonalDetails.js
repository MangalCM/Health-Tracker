import React from 'react';
import './PersonalDetails.css'; // Import your CSS file for custom styles

const PersonalDetails = () => {
    return (
        <div className="personal-details-container">
            <h2 className="text-center mb-4">Enter Your Personal Details</h2>
            <form className="form-grid">
                <div className="form-group">
                    <label htmlFor="username">Name</label>
                    <input type="text" className="form-control" id="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" className="form-control" id="phone" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email ID</label>
                    <input type="email" className="form-control" id="email" required />
                </div>
                <button type="submit" className="btn btn-success btn-block">Save</button>
            </form>
        </div>
    );
};

export default PersonalDetails;

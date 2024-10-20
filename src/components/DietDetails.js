import React, { useState } from 'react';

const DietDetails = () => {
    // State to hold meal details
    const [mealDetails, setMealDetails] = useState({
        meal: '',
        caloriesIntake: '',
        mealDate: new Date().toISOString().split('T')[0] // Set current date as default
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMealDetails({ ...mealDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to add meal can be added here
        console.log("Meal Details Submitted:", mealDetails);
    };

    return (
        <div className="container">
            <h2>Diet Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="meal">Meal Type</label>
                    <input
                        type="text"
                        className="form-control"
                        id="meal"
                        name="meal"
                        value={mealDetails.meal}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="caloriesIntake">Calories Intake</label>
                    <input
                        type="number"
                        className="form-control"
                        id="caloriesIntake"
                        name="caloriesIntake"
                        value={mealDetails.caloriesIntake}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mealDate">Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="mealDate"
                        name="mealDate"
                        value={mealDetails.mealDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-info btn-block">Add Meal</button>
            </form>
        </div>
    );
};

export default DietDetails;

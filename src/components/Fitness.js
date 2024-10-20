import React, { useState } from 'react';

const Fitness = () => {
  // State for fitness metrics
  const [fitnessData, setFitnessData] = useState({
    height: '',
    weight: '',
    bp: '',
    pulse: '',
    workoutType: '',
    duration: '',
    intensity: '',
    caloriesBurned: 0
  });

  // State for personal info
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('Male'); // Default to Male
  const [bmi, setBmi] = useState('');
  const [bmiCategory, setBmiCategory] = useState('');

  // Handle input change for fitness metrics
  const handleFitnessChange = (e) => {
    setFitnessData({ ...fitnessData, [e.target.name]: e.target.value });
  };

  // Handle input change for personal info
  const handlePersonalChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate BMI
    const heightInMeters = fitnessData.height / 100; // convert height to meters
    const calculatedBmi = (fitnessData.weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(calculatedBmi);
    classifyBmi(calculatedBmi);
  };

  const classifyBmi = (bmi) => {
    let category = '';

    if (sex === 'Male') {
      if (bmi < 20) category = 'Underweight';
      else if (bmi < 25) category = 'Normal weight';
      else if (bmi < 30) category = 'Overweight';
      else category = 'Obesity';
    } else { // For Female
      if (bmi < 18.5) category = 'Underweight';
      else if (bmi < 24) category = 'Normal weight';
      else if (bmi < 29) category = 'Overweight';
      else category = 'Obesity';
    }

    // Add age-based classification
    if (age < 18) {
      category += ' (Consider consulting a doctor)';
    } else if (age > 65) {
      category += ' (Focus on maintaining health)';
    }

    setBmiCategory(category);
  };

  const calculateCalories = () => {
    const { workoutType, duration, intensity } = fitnessData;
    let met;

    // Define MET values based on workout type and intensity
    switch (workoutType) {
      case 'walk':
        met = intensity === 'easy' ? 3.5 : intensity === 'intense' ? 4.0 : 4.5;
        break;
      case 'jog':
        met = intensity === 'easy' ? 7.0 : intensity === 'intense' ? 8.0 : 9.0;
        break;
      case 'gym':
        met = intensity === 'easy' ? 3.5 : intensity === 'intense' ? 6.0 : 8.0;
        break;
      case 'other':
        met = 5.0; // Average MET for other activities
        break;
      default:
        met = 1; // Sedentary activity
    }

    // Calculate calories burned (MET x weight in kg x duration in hours)
    const caloriesBurned = (met * (fitnessData.weight || 70) * (duration / 60)).toFixed(2);
    setFitnessData({ ...fitnessData, caloriesBurned });
  };

  return (
    <div className="fitness-container">
      <h2>Fitness Information</h2>
      <form onSubmit={handleSubmit}>
        <h3>Personal Information</h3>
        <input
          className="myinfo-input"
          type="number"
          placeholder="Age"
          value={age}
          onChange={handlePersonalChange(setAge)}
          required
        />
        <select
          className="myinfo-input"
          value={sex}
          onChange={handlePersonalChange(setSex)}
          required
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        
        <h3>Fitness Metrics</h3>
        <label>Height (cm):</label>
        <input
          type="number"
          name="height"
          value={fitnessData.height}
          onChange={handleFitnessChange}
          required
        />
        <label>Weight (kg):</label>
        <input
          type="number"
          name="weight"
          value={fitnessData.weight}
          onChange={handleFitnessChange}
          required
        />
        <label>Blood Pressure (mmHg):</label>
        <input
          type="text"
          name="bp"
          value={fitnessData.bp}
          onChange={handleFitnessChange}
          required
        />
        <label>Pulse (bpm):</label>
        <input
          type="number"
          name="pulse"
          value={fitnessData.pulse}
          onChange={handleFitnessChange}
          required
        />

        <button className="profile-btn" type="submit">Calculate BMI</button>
      </form>

      {bmi && (
        <div className="bmi-result">
          <h3>Your BMI: {bmi}</h3>
          <p>{bmiCategory}</p>
        </div>
      )}

      <h3>Workout Information</h3>
      <label>Type of Workout:</label>
      <select
        name="workoutType"
        value={fitnessData.workoutType}
        onChange={handleFitnessChange}
        required
      >
        <option value="">Select...</option>
        <option value="walk">Walk</option>
        <option value="jog">Jog</option>
        <option value="gym">Gym</option>
        <option value="other">Other Activities</option>
      </select>
      <label>Duration (minutes):</label>
      <input
        type="number"
        name="duration"
        value={fitnessData.duration}
        onChange={handleFitnessChange}
        required
      />
      <label>Intensity:</label>
      <select
        name="intensity"
        value={fitnessData.intensity}
        onChange={handleFitnessChange}
        required
      >
        <option value="">Select...</option>
        <option value="easy">Easy</option>
        <option value="intense">Intense</option>
        <option value="heavy">Heavy</option>
      </select>
      
      <button className="calories-btn" type="button" onClick={calculateCalories}>Calculate Calories Burned</button>

      {fitnessData.caloriesBurned > 0 && (
        <div className="calories-result">
          <h3>Estimated Calories Burned: {fitnessData.caloriesBurned} kcal</h3>
        </div>
      )}
    </div>
  );
};

export default Fitness;

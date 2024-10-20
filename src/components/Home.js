import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, Row, Col } from 'react-bootstrap';

function Home({ userInfo }) {
  const [formData, setFormData] = useState({
    waterIntake: '',
    calories: '',
    sleep: ''
  });

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Fitness details submitted!');
  };

  const calculateBMI = () => {
    if (userInfo?.weight && userInfo?.height) {
      const heightInMeters = userInfo.height / 100; // Convert cm to meters
      const bmi = (userInfo.weight / (heightInMeters * heightInMeters)).toFixed(2);
      let status = '';

      if (bmi < 18.5) {
        status = 'Underweight';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        status = 'Normal weight';
      } else if (bmi >= 25 && bmi < 29.9) {
        status = 'Overweight';
      } else {
        status = 'Obesity';
      }

      return `BMI: ${bmi} (${status})`;
    }
    return null;
  };

  return (
    <div className="home">
      <h2>Welcome to PHTracker!</h2>
      
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className="calendar"
      />

      {/* Display the calculated BMI under the calendar section */}
      {userInfo && (
        <div className="bmi-display">
          <h3>{calculateBMI()}</h3>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="fitness-form">
        <Container>
          <Row>
            <Col>
              <label>Water Intake (liters):</label>
              <input
                type="number"
                name="waterIntake"
                value={formData.waterIntake}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <label>Calories Consumed:</label>
              <input
                type="number"
                name="calories"
                value={formData.calories}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <label>Sleep (hours):</label>
              <input
                type="number"
                name="sleep"
                value={formData.sleep}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Container>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Home;

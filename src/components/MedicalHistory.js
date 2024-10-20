import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MedicalHistory = () => {
    const [medicalCondition, setMedicalCondition] = useState('');
    const [reason, setReason] = useState('');
    const [currentMedication, setCurrentMedication] = useState('');
    const [medicalReport, setMedicalReport] = useState(null);
    const [image, setImage] = useState(null);
    
    const navigate = useNavigate();
    const currentDate = new Date(); // Get current date

    const handleSubmit = (e) => {
        e.preventDefault();
        // Collect the data
        const newEntry = {
            medicalCondition,
            reason,
            currentMedication,
            medicalReport,
            image,
            date: currentDate.toLocaleDateString(),
        };

        // Assuming you want to save this data somewhere, you can update your logic here.
        setMedicalCondition('');
        setReason('');
        setCurrentMedication('');
        setMedicalReport(null);
        setImage(null);
        alert('Medical History Submitted!');
    };

    const handleHistoryClick = () => {
        navigate('/history'); // Navigate to the history page
    };

    return (
        <Container fluid className="medical-history-container">
            <Row className="align-items-start">
                {/* Left side for the form */}
                <Col xs={12} md={6}>
                    <div className="form-container">
                        <h2>Enter Your Medical History</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="medicalCondition">Medical Condition</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="medicalCondition"
                                    value={medicalCondition}
                                    onChange={(e) => setMedicalCondition(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="reason">Reason</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="reason"
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="medications">Current Medications</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="medications"
                                    value={currentMedication}
                                    onChange={(e) => setCurrentMedication(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="uploadReport">Upload Medical Reports (Optional)</label>
                                <input
                                    type="file"
                                    className="form-control-file"
                                    id="uploadReport"
                                    onChange={(e) => setMedicalReport(e.target.files[0])}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="uploadImage">Upload Image (Optional)</label>
                                <input
                                    type="file"
                                    className="form-control-file"
                                    id="uploadImage"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </div>
                            <button type="submit" className="btn btn-warning btn-block">Save</button>
                        </form>
                    </div>
                </Col>

                {/* Right side for the calendar and history button */}
                <Col xs={12} md={6}>
                    <div className="calendar-container">
                        <h3>Current Date</h3>
                        <DatePicker
                            selected={currentDate}
                            onChange={() => {}}
                            className="calendar"
                            dateFormat="dd/MM/yyyy"
                            readOnly
                            disabled
                        />
                        <button className="btn btn-info mt-3" onClick={handleHistoryClick}>
                            History
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default MedicalHistory;

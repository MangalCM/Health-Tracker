import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import DietDetails from './DietDetails';
import MedicalHistory from './MedicalHistory';
import PersonalDetails from './PersonalDetails'; // Personal Details component
import Profile from './Profile'; // Profile component
import Fitness from './Fitness'; // Import MyInfo component as Fitness
import Settings from './Settings'; // Import Settings component
import Home from './Home';
import Footer from './Footer';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/diet" element={<DietDetails />} />
                    <Route path="/medical-history" element={<MedicalHistory />} />
                    <Route path="/personal-details" element={<PersonalDetails />} /> {/* Personal Details page */}
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/myinfo" element={<Fitness />} /> {/* Route for Fitness */}
                    <Route path="/settings" element={<Settings />} /> {/* Route for Settings */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;

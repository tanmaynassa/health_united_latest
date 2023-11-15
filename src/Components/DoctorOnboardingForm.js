import React, { useState } from 'react';

import './DoctorOnboarding.css';
import logo from '../logo.png';

const DoctorOnboardingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    degreeCertifications: '',
    licenseNumber: '',
    batchNumber: '',
    specialty: '',
    type: '',
    address: '',
    country: '',
    currentPractice: '',
    virtualConsultationAvailability: '',
    slotDuration: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add logic to send form data to server or perform other actions
  };

  return (
    <React.Fragment>
      <div className="header">
        <div className="left-head">
      <img id='logo-main' src={logo} alt='coming soon'/>
      <h1>Health United</h1>
      </div>
      <div className="navbar">
        <div className="right">
        <h3><a href='#'>Home</a></h3>
        <h3><a href='#'>Patient</a></h3>
        <h3><a href='#'>Provider</a></h3>
        <h3><a href='#'>Vendor</a></h3>
        <h3><a href='#'>Contact Us</a></h3>
        </div>
      </div>
    </div>
      
    <div>
      <h3 className="form-head">Doctor Onboarding Form</h3>
      <div className="formdiv">
      <form className="formClass" onSubmit={handleSubmit}>
        <div className="cont" >
          <label className="cont-label">First Name: 
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            </label>
          <br />

          <label className="cont-label">
            Last Name:
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </label>
          <br />

          <label className="cont-label">
            Degree/Certifications:
            <input type="text" name="degreeCertifications" value={formData.degreeCertifications} onChange={handleChange} />
          </label>
          <br />
        </div>

        <div className="cont">
        <label className="cont-label">
          License Number:
          <input type="text" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} />
        </label>
        <br />

        <label className="cont-label">
          Batch Number:
          <input type="text" name="batchNumber" value={formData.batchNumber} onChange={handleChange} />
        </label>
        <br />

        <label className="cont-label">
          Specialty:
          <input type="text" name="specialty" value={formData.specialty} onChange={handleChange} />
        </label>
        <br />
        </div>

        <div className="cont">
        <label className="cont-label">
          Type:
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Surgeon">Surgeon</option>
            <option value="Specialist">Specialist</option>
            <option value="General">General</option>
          </select>
        </label>
        <br />

        <label className="cont-label">
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>
        <br />

        <label className="cont-label">
          Country:
          <input type="text" name="country" value={formData.country} onChange={handleChange} />
        </label>
        <br />
        </div>

        <div className="cont">
        <label className="cont-label">
          Current Practice:
          <input type="text" name="currentPractice" value={formData.currentPractice} onChange={handleChange} />
        </label>
        <br />

        <label className="cont-label">
          Availability for Virtual Consultation:
          <select name="virtualConsultationAvailability" value={formData.virtualConsultationAvailability} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Daily">Daily</option>
            <option value="Twice a Week">Twice a Week</option>
            <option value="Weekends">Weekends</option>
          </select>
        </label>
        <br />

        <label className="cont-label">
          Slot Duration:
          <select name="slotDuration" value={formData.slotDuration} onChange={handleChange}>
            <option value="">Select</option>
            <option value="30">30 mins</option>
            <option value="45">45 mins</option>
            <option value="60">60 mins</option>
          </select>
        </label>
        <br />
        </div>

        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
    <div className='footer' >
    <p>Copy Rights: Health United © Pvt. Ltd.</p>
    </div>
    </React.Fragment>
  );
};

export default DoctorOnboardingForm;

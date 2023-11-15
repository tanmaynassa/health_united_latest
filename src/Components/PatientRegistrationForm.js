import React, { useState } from 'react';
import './PatientRegistration.css';
import logo from '../logo.png';

const PatientRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    sex: '',
    mobileNumber: '',
    email: '',
    address: '',
    country: '',
    medicalCondition: '',
    height: '',
    weight: '',
    bloodSugar: '',
    bloodPressure: '',
    previousDoctor: '',
    specialties: '',
    recentAppointmentDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add logic to send form data to the server or perform other actions
  };

  return (
    <React.Fragment>
      <div className="header">
        <div className="left-head">
          <img id='logo-main' src={logo} alt='coming soon' />
          <h1>Health United</h1>
          {/* <img id='logo-not-main' alt='' /> */}
          </div>
          
        <div className="navbar">
            <h3><a href='#'>Home</a></h3>
            <h3><a href='#'>Patient</a></h3>
            <h3><a href='#'>Provider</a></h3>
            <h3><a href='#'>Vendor</a></h3>
            <h3><a href='#'>Contact Us</a></h3>
        </div>
      </div>

      <div>
        <h1 className="form-head">Patient Registration Form</h1>
        <div className='formdiv'>
          <form className='formClass' onSubmit={handleSubmit}>
            <div className='cont'>
              <label className='cont-label' htmlFor="firstName">First Name:
                <input type="text" className="form-control" id="firstName" name="firstName" onChange={handleChange} value={formData.firstName} />
              </label>

              <label className='cont-label' htmlFor="lastName">Last Name:
                <input type="text" className="form-control" id="lastName" name="lastName" onChange={handleChange} value={formData.lastName} />
              </label>

              <label className="cont-label" htmlFor="dob">Date of Birth:
                <input type="date" className="form-control" id="dob" name="dob" onChange={handleChange} value={formData.dob} />
              </label>
            </div>

            <div className='cont'>
              <label className='cont-label' htmlFor="sex">Sex:
                <select className="form-control" id="sex" name="sex" onChange={handleChange} value={formData.sex}>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </label>

              <label className='cont-label' htmlFor="mobileNumber">Mobile Number:
                <input type="text" className="form-control" id="mobileNumber" name="mobileNumber" onChange={handleChange} value={formData.mobileNumber} />
              </label>

              <label className='cont-label' htmlFor="email">Email:
                <input type="email" className="form-control" id="email" name="email" onChange={handleChange} value={formData.email} />
              </label>
            </div>

            <div className='cont'>
              <label className='cont-label' htmlFor="address">Address:
                <input type="text" className="form-control" id="address" name="address" onChange={handleChange} value={formData.address} />
              </label>

              <label className='cont-label' htmlFor="country">Country:
                <input type="text" className="form-control" id="country" name="country" onChange={handleChange} value={formData.country} />
              </label>

              <label className='cont-label' htmlFor="medicalCondition">Existing Medical Condition:
                <input type="text" className="form-control" id="medicalCondition" name="medicalCondition" onChange={handleChange} value={formData.medicalCondition} />
              </label>
            </div>

            <div className='cont'>
              <label className='cont-label' htmlFor="height">Height (cm):
                <input type="number" className="form-control" id="height" name="height" onChange={handleChange} value={formData.height} />
              </label>

              <label className='cont-label' htmlFor="weight">Weight (kg):
                <input type="number" className="form-control" id="weight" name="weight" onChange={handleChange} value={formData.weight} />
              </label>

              <label className='cont-label' htmlFor="bloodSugar">Blood Sugar (mg/dL):
                <input type="number" className="form-control" id="bloodSugar" name="bloodSugar" onChange={handleChange} value={formData.bloodSugar} />
              </label>
            </div>

            <div className='cont'>
              <label className='cont-label' htmlFor="bloodPressure">Blood Pressure (mmHg):
                <input type="text" className="form-control" id="bloodPressure" name="bloodPressure" onChange={handleChange} value={formData.bloodPressure} />
              </label>

              <label className='cont-label' htmlFor="previousDoctor">Previous Doctor Visited:
                <select className="form-control" id="previousDoctor" name="previousDoctor" onChange={handleChange} value={formData.previousDoctor}>
                  <option value="">Select</option>
                  <option value="doctor1">Doctor 1</option>
                  <option value="doctor2">Doctor 2</option>
                  <option value="doctor3">Doctor 3</option>
                </select>
              </label>

              <label className='cont-label' htmlFor="specialties">Specialties Preferred:
                <select className="form-control" id="specialties" name="specialties" onChange={handleChange} value={formData.specialties}>
                  <option value="">Select</option>
                  <option value="specialty1">Specialty 1</option>
                  <option value="specialty2">Specialty 2</option>
                  <option value="specialty3">Specialty 3</option>
                </select>
              </label>
            </div>

            <div className='cont'>
              <label className='cont-label' htmlFor="recentAppointmentDate">Most Recent Appointment Date:
                <input type="date" className="form-control" id="recentAppointmentDate" name="recentAppointmentDate" onChange={handleChange} value={formData.recentAppointmentDate} />
              </label>
            </div>

            <div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>

      <div className='footer' >
        <p>Copy Rights: Health United © Pvt. Ltd.</p>
      </div>
    </React.Fragment>
  );
};

export default PatientRegistrationForm;

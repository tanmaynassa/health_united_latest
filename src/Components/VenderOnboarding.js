// VendorOnboarding.js
import React, { useState } from 'react';
import './VenderOnboarding.css'; // Import the CSS file
import logo from '../logo.png';


const VendorOnboarding = () => {
  const [formData, setFormData] = useState({
    entityName: '',
    type: '',
    contactFirstName: '',
    contactLastName: '',
    address: '',
    zip: '',
    locations: [],
    deliveryMode: [],
    collectionType: [],
    digitalReport: false,
    apiAvailability: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMultiSelectChange = (name, selectedValues) => {
    setFormData({ ...formData, [name]: selectedValues });
  };

  const handleRadioChange = (name, value) => {
    setFormData({ ...formData, [name]: value === 'true' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit form data to the backend or perform other actions
    console.log('Form Data:', formData);
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
      <h2 className="formm-head">Vendor Onboarding</h2>
      <div className='formdiv'>
      <form className='formClasss' onSubmit={handleSubmit}>
        <div className='cont'>
        <label className='cont-label'>
          Entity Name:
          <input
            type="text"
            name="entityName"
            value={formData.entityName}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className='cont-label'>
          Type:
          <select
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Type</option>
            <option value="Pharmacy">Pharmacy</option>
            <option value="Lab">Lab</option>
            <option value="Others">Others</option>
          </select>
        </label>

        <label className='cont-label'>
          Contact Person First Name:
          <input
            type="text"
            name="contactFirstName"
            value={formData.contactFirstName}
            onChange={handleInputChange}
            required
          />
        </label>
        </div>

        <div className='cont'>
        <label className='cont-label'>
          Contact Person Last Name:
          <input
            type="text"
            name="contactLastName"
            value={formData.contactLastName}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className='cont-label'>
          Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className='cont-label'>
          ZIP:
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleInputChange}
            required
          />
        </label>
        </div>

        <div className='cont'>
        <label className='cont-label'>
          Locations:
          <select
            name="locations"
            value={formData.locations}
            onChange={(e) =>
              handleMultiSelectChange(
                'locations',
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            }
            multiple
            required
          >
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            {/* Add more cities as needed */}
          </select>
        </label>

        <label className='cont-label'>
          Delivery Mode:
          <select
            name="deliveryMode"
            value={formData.deliveryMode}
            onChange={(e) =>
              handleMultiSelectChange(
                'deliveryMode',
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            }
            multiple
            required
          >
            <option value="Pickup">Pickup</option>
            <option value="Free Delivery">Free Delivery</option>
          </select>
        </label>

        <label className='cont-label'>
          Collection Type:
          <select
            name="collectionType"
            value={formData.collectionType}
            onChange={(e) =>
              handleMultiSelectChange(
                'collectionType',
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            }
            multiple
            required
          >
            <option value="Doorstep Collection">Doorstep Collection</option>
            <option value="Lab Visit">Lab Visit</option>
          </select>
        </label>
        </div>

        <div className='cont'>
        <label className='cont-label'>
          Digital Report:
          <label>
            <input
              type="radio"
              name="digitalReport"
              value="true"
              checked={formData.digitalReport}
              onChange={(e) => handleRadioChange('digitalReport', e.target.value)}
              required
            />
            Yes
          </label>
          <label className='cont-label'>
            <input
              type="radio"
              name="digitalReport"
              value="false"
              checked={!formData.digitalReport}
              onChange={(e) => handleRadioChange('digitalReport', e.target.value)}
              required
            />
            No
          </label>
        </label>

        <label className='cont-label'>
          API Availability:
          <label>
            <input
              type="radio"
              name="apiAvailability"
              value="true"
              checked={formData.apiAvailability}
              onChange={(e) => handleRadioChange('apiAvailability', e.target.value)}
              required
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="apiAvailability"
              value="false"
              checked={!formData.apiAvailability}
              onChange={(e) => handleRadioChange('apiAvailability', e.target.value)}
              required
            />
            No
          </label>
        </label>
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


export default VendorOnboarding;

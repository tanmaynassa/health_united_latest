// VendorDashboard.js
import React, { useState, useEffect, useRef } from 'react';
import './VendorDashboard.css'; // Import the CSS file
import logo from '../logo.png';
import Chart from 'chart.js/auto';

const VendorDashboard = ({drugsData, symptomsData}) => {

  const chartRef1 = useRef(null);
  const chartInstanceRef1 = useRef(null); // Reference to the chart instance
  const chartId1 = 'symptomsChart'; // Unique ID for the chart
  const chartRef2 = useRef(null);
  const chartInstanceRef2 = useRef(null); // Reference to the chart instance
  const chartId2 = 'drugsChart'; // Unique ID for the chart

  useEffect(() => {
    if (chartRef1.current) {
      if (chartInstanceRef1.current) {
        chartInstanceRef1.current.destroy();
      }
  
      const ctx = chartRef1.current.getContext('2d');
      const topSymptoms = symptomsData.map(item => item.symptom);
      const symptomValues = symptomsData.map(item => parseInt(item.value, 10));
  
      chartInstanceRef1.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: topSymptoms,
          datasets: [{
            label: 'Top 5 Symptoms',
            data: symptomValues,
            backgroundColor: 'rgba(0, 128, 0, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
              ticks: {
                stepSize: 5,
                color: '#0F52BA',
              }
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: '#0F52BA',
              }
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
          layout: {
            padding: {
              left: 20,
              right: 20,
              top: 20,
              bottom: 35,
            },
          },
        },
      });
    }
  }, [chartId1, symptomsData]);

  useEffect(() => {
    if (chartRef2.current) {
      if (chartInstanceRef2.current) {
        chartInstanceRef2.current.destroy();
      }
  
      const ctx = chartRef2.current.getContext('2d');
      const topDrugs = drugsData.map(item => item.drug); // Replace with your actual data structure
      const drugValues = drugsData.map(item => parseInt(item.value, 10)); // Replace with your actual data structure
  
      chartInstanceRef2.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: topDrugs,
          datasets: [{
            label: 'Top 5 Drugs',
            data: drugValues,
            backgroundColor: 'rgba(0, 128, 0, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
              ticks: {
                stepSize: 5,
                color: '#0F52BA',
              }
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: '#0F52BA',
              }
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
          layout: {
            padding: {
              left: 20,
              right: 20,
              top: 20,
              bottom: 35,
            },
          },
        },
      });
    }
  }, [chartId2, drugsData]);

  const pendingOrders = [
    { id: 1, serial_no:'1', order_id: '0001', type: 'drug', patient_id: 'P101', doctor: 'Dr. James', date: '2023-06-23', status: 'open' },
    { id: 2, serial_no:'2', order_id: '0002', type: 'Tab', patient_id: 'P102', doctor: 'Dr. Joseph',date: '2023-05-22', status: 'dispatched' },
    { id: 3, serial_no:'3', order_id: '0003', type: 'drug', patient_id: 'P103', doctor: 'Dr. Smith', date: '2023-11-11', status: 'open' }
  ];

   symptomsData = [
    { symptom: 'Symptom1', value: 20 },
    { symptom: 'Symptom2', value: 15 },
    { symptom: 'Symptom3', value: 25 },
    { symptom: 'Symptom4', value: 30 },
    { symptom: 'Symptom5', value: 35 },
  ];
  

   drugsData = [
    { drug: 'Drug1', value: 20 },
    { drug: 'Drug2', value: 15 },
    { drug: 'Drug3', value: 25 },
    { drug: 'Drug4', value: 30 },
    { drug: 'Drug5', value: 35 },
  ];

  const pendingReports = [
    { id: 1, serial_no: '1', appt_date: '2023-02-10', patient_id:'P101', doctor: 'Dr. James',  report_status: 'incomplete' },
    { id: 2, serial_no: '2', appt_date: '2023-06-11', patient_id:'P102', doctor: 'Dr. Joseph', report_status: 'pending review' },
    { id: 3, serial_no: '3', appt_date: '2023-06-11', patient_id:'P103', doctor: 'Dr. Smith',  report_status: 'pending review' }
  ];

  return (
    <React.Fragment>
      <div className="header">
        <div className="left-head">
          <img id='logo-main' src={logo} alt="coming soon" />
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
      <div className='main-head'> <h1>Vendor Dashboard</h1></div>
      <div className="patient-dashboard">

        <div className="flex-container">
          <div className="dashboard-block">
            <h2>Pending Orders</h2>
            <table className="appointment-table">
              <thead>
                <tr>
                <th>Serial No.</th>
                <th>Order ID</th>
                <th>Type</th>
                <th>Patient ID</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {pendingOrders.map(appointment => (
                  <tr key={appointment.id}>
                    <td>{appointment.serial_no}</td>
                    <td>{appointment.order_id}</td>
                    <td>{appointment.type}</td>
                    <td>{appointment.patient_id}</td>
                    <td>{appointment.doctor}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="dashboard-block">
            <h2>Patient Symptom</h2>
            <canvas ref={chartRef1} id={chartId1}></canvas>
          </div>
        </div>
        <div className="flex-container">
        <div className="dashboard-block">
            <h2>Top 5 Drugs</h2>
            <canvas ref={chartRef2} id={chartId2}></canvas>
          </div>
          <div className="dashboard-block">
            <h2>Pending Reports</h2>
            <table className="feedback-table">
              <thead>
                <tr>
                  <th>Serial No</th>
                  <th>Appointment Date</th>
                  <th>Patient ID</th>
                  <th>Doctor</th>
                  <th>Report Status</th>
                </tr>
              </thead>
              <tbody>
                {pendingReports.map(feedback => (
                  <tr key={feedback.id}>
                    <td>{feedback.serial_no}</td>
                    <td>{feedback.appt_date}</td>
                    <td>{feedback.patient_id}</td>
                    <td>{feedback.doctor}</td>
                    <td>{feedback.report_status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='footer' >
        <p>Copy Rights: Health United © Pvt. Ltd.</p>
      </div>
    </React.Fragment>
  );
};

export default VendorDashboard;

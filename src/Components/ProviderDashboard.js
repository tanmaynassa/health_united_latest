import React, { useEffect, useRef } from 'react';
import './providerDashboard.css';
import logo from '../logo.png';
import Chart from 'chart.js/auto';

const ProviderDashboard = ({anotherData}) => {

  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);
  const chartInstanceRef1 = useRef(null);
  const chartInstanceRef2 = useRef(null);  // Reference to the chart instance
  const chartId1 = 'AppointmentChart'; // Unique ID for the chart
  const chartId2 = 'FeedbackChart'; // Unique ID for the chart

  useEffect(() => {
    if (chartRef1.current) {
      if (chartInstanceRef1.current) {
        chartInstanceRef1.current.destroy();
      }

      const ctx = chartRef1.current.getContext('2d');
      const weeks = appointmentsInLast30Days.map(item => `${item.week}`); // Adjust this based on your data structure
      const appointments = appointmentsInLast30Days.map(item => parseInt(item.appointments, 10));

      chartInstanceRef1.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: weeks,
          datasets: [{
            label: 'Appointments',
            data: appointments,
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
              },
              scaleLabel: {
                display: true,
                labelString: 'Number of Appointments',
                color: '#0F52BA',
              },
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: '#0F52BA',
              },
              
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
  }, [chartId1]);

  
  useEffect(() => {
    if (chartRef2.current) {
      if (chartInstanceRef2.current) {
        chartInstanceRef2.current.destroy();
      }
  
      const ctx = chartRef2.current.getContext('2d');
      const months = anotherData.map(item => item.month);
      const numericScores = anotherData.map(item => {
        if (item.point === 'good') return 1;
        if (item.point === 'better') return 2;
        if (item.point === 'best') return 3;
        return 0; // Default to 0 if point is not recognized
      });
  
      chartInstanceRef2.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: months,
          datasets: [{
            label: 'Average Feedback Score',
            data: numericScores,
            backgroundColor: 'rgba(0, 128, 0, 0.5)', // Background color
            borderColor: '#4CAF50', // Line color
            borderWidth: 1,
            pointBackgroundColor: 'green', // Point color
            pointRadius: 5,
            pointHitRadius: 10,
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
                stepSize: 1,
                color: '#0F52BA',
                max: 5,
                callback: value => {
                  if (value === 1) return 'Good';
                  if (value === 2) return 'Better';
                  if (value === 3) return 'Best';
                  return '';
                },
              },
              scaleLabel: {
                display: true,
                labelString: 'Feedback Score',
                color: '#0F52BA',
              },
            },
            x: {
                grid: {
                  display: false,
                },
                ticks: {
                    color: '#0F52BA',
                  },
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
  }, [anotherData]);
  
  
  

  
  const todaysAppointments = [
    { id: 1, serial_no: '1', time_slot: '11:00am', patient_id:'HP123', practice: 'BeWell', status: 'scheduled' },
    { id: 2, serial_no: '2', time_slot: '12:30pm', patient_id:'HP143', practice: 'BeWell', status: 'scheduled' },
    { id: 3, serial_no: '3', time_slot: '2:00pm', patient_id:'HP125', practice: 'HealDr', status: 'cancelled' },
    { id: 4, serial_no: '4', time_slot: '4:30pm', patient_id:'HP223', practice: 'HealDr', status: 'scheduled' },
  ];

  const pendingActions = [
    { id: 1, serial_no: '1', date: '2023-10-05', type: 'Notes', patient_id:'HP123', status: ' pending' },
    { id: 2, serial_no: '2', date: '2023-10-06', type: 'Prescription', patient_id:'HP123', status: ' pending' },
    { id: 3, serial_no: '3', date: '2023-10-07', type: 'Referral', patient_id:'HP123', status: ' pending' },
    { id: 4, serial_no: '4', date: '2023-10-08', type: 'Notes',  patient_id:'HP123', status: ' pending' }
  ];

   anotherData = [
    { id: 1, month: 'May', point: 'better' },
    { id: 2, month: 'June', point: 'good' },
    { id: 3, month: 'July', point: 'good' },
    { id: 4, month: 'August', point: 'better' },
  ];

  const appointmentsInLast30Days = [
    { id: 1, week: 'W1', appointments: '10' },
    { id: 2, week: 'W2', appointments: '20' },
    { id: 3, week: 'W3', appointments: '25' },
    { id: 4, week: 'W4', appointments: '15' }
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
      <div> <h1>Provider Dashboard</h1></div>
      <div className="patient-dashboard">

        <div className="flex-container">
          <div className="dashboard-block">
            <h2>Today's Appointments</h2>
            <table className="appointment-table">
              <thead>
                <tr>
                  <th>Serial No</th>
                  <th>TimeSlot</th>
                  <th>PatientID</th>
                  <th>Practice</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {todaysAppointments.map(appointment => (
                  <tr key={appointment.id}>
                    <td>{appointment.serial_no}</td>
                    <td>{appointment.time_slot}</td>
                    <td>{appointment.patient_id}</td>
                    <td>{appointment.practice}</td>
                    <td>{appointment.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="dashboard-block">
            <h2>Pending Actions</h2>
            <table className="doctor-notes-table">
              <thead>
                <tr>
                  <th>Serial No</th>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Patient Id</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {pendingActions.map(note => (
                  <tr key={note.id}>
                    <td>{note.serial_no}</td>
                    <td>{note.date}</td>
                    <td>{note.type}</td>
                    <td>{note.patient_id}</td>
                    <td>{note.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex-container">
        <div className="dashboard-block">
            <h2>Appointment in last 30 days</h2>
            <canvas ref={chartRef1} id={chartId1}></canvas>
          </div>
          <div className="dashboard-block">
            <h2>Average Feedback Score</h2>
            <canvas ref={chartRef2} id={chartId2}></canvas>
          </div>
        </div>
      </div>
      <div className='footer' >
        <p>Copy Rights: Health United © Pvt. Ltd.</p>
      </div>
    </React.Fragment>
  );
};

export default ProviderDashboard;

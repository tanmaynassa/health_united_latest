import React, { useEffect, useRef } from 'react';
import './patientDashboard.css';
import logo from '../logo.png';
import Chart from 'chart.js/auto';

const PatientDashboard = () => {

  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // Reference to the chart instance
  const chartId = 'consultationsChart'; // Unique ID for the chart

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      const months = consultationsLast3Months.map(item => item.month);
      const consultationCounts = consultationsLast3Months.map(item => parseInt(item.consultations, 10));

      chartInstanceRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: months,
          datasets: [{
            label: 'Consultations',
            data: consultationCounts,
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
                stepSize: 1,
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
  }, [chartId]);

  const upcomingAppointments = [
    { id: 1, serial_no: '1', date: '2023-10-05', practice: 'BeWell', doctor: 'Dr. James', time_slot: '11:00am', status: 'confirmed' },
    { id: 2, serial_no: '2', date: '2023-10-06', practice: 'BeWell', doctor: 'Dr. Joseph', time_slot: '12:00pm', status: 'confirmed' },
    { id: 3, serial_no: '3', date: '2023-10-07', practice: 'HealDr', doctor: 'Dr. Smith', time_slot: '9:00am', status: 'confirmed' },
    { id: 4, serial_no: '4', date: '2023-10-08', practice: 'HealDr', doctor: 'Dr. Smith', time_slot: '5:00pm', status: 'waiting' },
    { id: 5, serial_no: '5', date: '2023-10-09', practice: 'HealDr', doctor: 'Dr. Johnson', time_slot: '10:00am', status: 'waiting' }
  ];

  const doctorNotes = [
    { id: 1, serial_no: '1', date: '2023-10-05', note_type: 'Notes', doctor: 'Dr. James', Action: 'viewed', link: 'click here' },
    { id: 1, serial_no: '2', date: '2023-10-06', note_type: 'Prescription', doctor: 'Dr. Joseph', Action: 'viewed', link: 'click here' },
    { id: 1, serial_no: '3', date: '2023-10-07', note_type: 'Referral', doctor: 'Dr. Smith', Action: 'pending', link: 'view' },
    { id: 1, serial_no: '4', date: '2023-10-08', note_type: 'Notes', doctor: 'Dr. Johnson', Action: 'closed', link: 'view' }
  ];

  const pendingFeedback = [
    { id: 1, serial_no:'1', date:'2023-10-23', doctor: 'Dr. James', status:'pending' },
    { id: 1, serial_no:'2', date:'2023-10-24', doctor: 'Dr. Anderson', status:'done' },
    { id: 1, serial_no:'3', date:'2023-10-25', doctor: 'Dr. Smith', status:'done' },
    { id: 1, serial_no:'4', date:'2023-10-26', doctor: 'Dr. Lewis', status:'pending' }
  ];

  const consultationsLast3Months = [
    { id: 1, month: 'july', consultations:'2' },
    { id: 2, month: 'august', consultations:'5' },
    { id: 3, month: 'september', consultations:'3' }
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
      <div className='main-head'> <h1>Patient Dashboard</h1></div>
      <div className="patient-dashboard">

        <div className="flex-container">
          <div className="dashboard-block">
            <h2>Upcoming Appointments</h2>
            <table className="appointment-table">
              <thead>
                <tr>
                  <th>Serial No</th>
                  <th>Date</th>
                  <th>Practice</th>
                  <th>Doctor</th>
                  <th>Time Slot</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {upcomingAppointments.map(appointment => (
                  <tr key={appointment.id}>
                    <td>{appointment.serial_no}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.practice}</td>
                    <td>{appointment.doctor}</td>
                    <td>{appointment.time_slot}</td>
                    <td>{appointment.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="dashboard-block">
            <h2>Doctor Note/Advices/Notifications</h2>
            <table className="doctor-notes-table">
              <thead>
                <tr>
                  <th>Serial No</th>
                  <th>Date</th>
                  <th>Note Type</th>
                  <th>Doctor</th>
                  <th>Action</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {doctorNotes.map(note => (
                  <tr key={note.id}>
                    <td>{note.serial_no}</td>
                    <td>{note.date}</td>
                    <td>{note.note_type}</td>
                    <td>{note.doctor}</td>
                    <td>{note.Action}</td>
                    <td><a href={note.link}>{note.link}</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex-container">
        <div className="dashboard-block">
            <h2>Consultations in Last 3 Months</h2>
            <canvas ref={chartRef} id={chartId}></canvas>
          </div>
          <div className="dashboard-block">
            <h2>Pending Consultation Feedback</h2>
            <table className="feedback-table">
              <thead>
                <tr>
                  <th>Serial No</th>
                  <th>Date</th>
                  <th>Doctor</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {pendingFeedback.map(feedback => (
                  <tr key={feedback.id}>
                    <td>{feedback.serial_no}</td>
                    <td>{feedback.date}</td>
                    <td>{feedback.doctor}</td>
                    <td>{feedback.status}</td>
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

export default PatientDashboard;

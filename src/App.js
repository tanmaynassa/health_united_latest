import React from 'react'
import './App.css'

import PatientDashboard from './Components/PatientDashboard'
import ProviderDashboard from './Components/ProviderDashboard'
import DoctorOnBoardingForm from './Components/DoctorOnboardingForm'
import VendorDashboard from './Components/VendorDashboard'
import VenderOnboarding from './Components/VenderOnboarding'
import PatientRegistrationForm from './Components/PatientRegistrationForm'
import PatientLogin from './Components/PatientLogin'
const App = () => {
  return (
        <>
          {/* <PatientRegistrationForm /> */}
          {/* <DoctorOnBoardingForm /> */}
          <PatientDashboard />
          {/* <PatientLogin/> */}
          {/* <ProviderDashboard/> */}
          {/* <VendorDashboard/> */}
          {/* <VenderOnboarding/> */}
        </>
  )
}

export default App
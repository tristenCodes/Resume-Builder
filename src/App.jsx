import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonalInfoForm from './components/editor/PersonalInfoForm'
import ExperienceInfoForm from './components/editor/ExperienceInfoForm'
import EducationInfoForm from './components/editor/EducationInfoForm'

function App() {

  return (
    <>
    <PersonalInfoForm />
    <ExperienceInfoForm />
    <EducationInfoForm />
    </>
  )
}

export default App

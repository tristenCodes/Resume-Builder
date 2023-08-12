import './App.css'
import './styles/input-forms.less'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import PersonalInfoForm from './components/editor/PersonalInfoForm'
import ExperienceInfoForm from './components/editor/ExperienceInfoForm'
import EducationInfoForm from './components/editor/EducationInfoForm'
import resumeData from './Helpers/resumeDataProp'
import ResumeHeader from './components/preview/ResumeHeader'
import { useState } from 'react'
import ResumeExperience from './components/preview/ResumeExperience'

// resumeData object hold all resume information

const { PersonalInformation, EducationInformation, WorkExperience } = resumeData

function App() {
  WorkExperience.jobTitle = 'test'
  const [header, setHeader] = useState(EducationInformation)
  const [experience, setExperience] = useState(WorkExperience)

  const handlePersonalFormTyping = (event) => {
    PersonalInformation[event.target.name] = event.target.value
    setHeader({...PersonalInformation})
  }

  return (
    <div className="main__container">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="input--forms">
          <PersonalInfoForm
            handleTyping={handlePersonalFormTyping}
            personalData={PersonalInformation}
          />
          <ExperienceInfoForm />
          <EducationInfoForm />
        </div>
        <div className="resume">
          <ResumeHeader personalInfo={header} />
          <ResumeExperience experience={WorkExperience}/>
        </div>
      </LocalizationProvider>
    </div>
  )
}

export default App

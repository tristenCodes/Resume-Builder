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
import { v4 as uuidv4 } from 'uuid'
import ResumeExperience from './components/preview/ResumeExperience'
import ExperienceAccordion from './components/editor/ExperienceAccordion'
import { Divider } from '@mui/material'

// resumeData object hold all resume information

const { PersonalInformation, EducationInformation, WorkExperience } = resumeData

const jobs = []
const education = []
WorkExperience.jobs = jobs
EducationInformation.education = education


function App() {
  const [header, setHeader] = useState(PersonalInformation)
  const [experience, setExperience] = useState(WorkExperience)
  const [schooling, setSchooling] = useState(EducationInformation)

  const handlePersonalFormTyping = (event) => {
    PersonalInformation[event.target.name] = event.target.value
    setHeader({ ...PersonalInformation })
  }

  const handleSubmitExperience = (event) => {
    // create a job object and add it to WorkExperience
    const experienceForm = document.getElementById('experienceForm').elements
    let endDate
    experienceForm[7].value === 'on'
      ? (endDate = null)
      : (endDate = experienceForm[7].value)

    jobs.push({
      jobTitle: experienceForm.jobTitle.value,
      company: experienceForm.company.value,
      current: experienceForm.current.checked,
      state: experienceForm.state.value,
      startDate: experienceForm[4].value,
      endDate: endDate,
      jobSummary: experienceForm.jobSummary.value,
      key: uuidv4(),
    })

    // add this job to WorkExperience as job
    console.log(WorkExperience)
    document.getElementById('experienceForm').reset()
    experienceForm[4].value = null
    experienceForm[7].value = null
    setExperience({ ...WorkExperience })
  }

  const handleSubmitEducation = (event) => {
    // create a job object and add it to WorkExperience
    const educationForm = document.getElementById('educationForm').elements
    let graduationDate = null

    education.push({
      university: educationForm.university.value,
      program: educationForm.program.value,
      // graduationDate: experienceForm.graduationDate.value,
      gpa: educationForm.gpa.value,
      key: uuidv4(),
    })

    // add this job to WorkExperience as job
    console.log(EducationInformation)
    document.getElementById('educationForm').reset()
    // experienceForm[4].value = null
    // experienceForm[7].value = null
    setSchooling({ ...EducationInformation })
  }

  return (
    <div className="main__container">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="input--forms min-w-[550px]">
          <PersonalInfoForm
            handleTyping={handlePersonalFormTyping}
            personalData={PersonalInformation}
          />
          {WorkExperience.jobs.map((job) => {
            return (
              <ExperienceAccordion
                WorkExperience={WorkExperience}
                job={job}
                setExperience={setExperience}
                key={job.key}
              />
            )
          })}

          <ExperienceInfoForm
            handleSubmitExperience={handleSubmitExperience}
          />
          <EducationInfoForm handleSubmitEducation={handleSubmitEducation}/>
        </div>
        <div className="resume--half bg-zinc-400">
          <div className="resume bg-white h-full w-11/12 min-w-[700px] min-h-[800px] max-w-5xl m-auto my-20 p-6">
            <ResumeHeader personalInfo={header} />
            <Divider />
            <h2 className="text-2xl font-semibold my-6">Experience</h2>
            <ResumeExperience experience={WorkExperience} />
            <h2 className="text-2xl font-semibold my-6">Education</h2>
          </div>
        </div>
      </LocalizationProvider>
    </div>
  )
}

export default App

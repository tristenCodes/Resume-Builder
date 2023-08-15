import { v4 as uuidv4 } from 'uuid'

export default function ResumeExperience({ experience }) {
  return (
    <>
      {experience.jobs.map((job) => {
        return (
          <div key={job.key}>
            <span>{job.jobTitle}</span>
            <span>{job.company}</span>
            <span>
              {job.startDate} - {job.endDate}
            </span>
            <p>{job.jobSummary}</p>
          </div>
        )
      })}
    </>
  )
}

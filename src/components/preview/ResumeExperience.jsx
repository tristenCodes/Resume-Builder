export default function ResumeExperience({ experience }) {
  return (
    <>
      {experience.jobs.map((job) => {
        return (
          <>
            <span>{job.jobTitle}</span>
            <span>{job.company}</span>
            <span>
              {job.startDate} - {job.endDate}
            </span>
            <p>{job.jobSummary}</p>
          </>
        )
      })}
    </>
  )
}

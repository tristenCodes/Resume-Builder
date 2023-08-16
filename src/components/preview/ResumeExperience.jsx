import { v4 as uuidv4 } from 'uuid'

export default function ResumeExperience({ experience }) {
  return (
    <>
      {experience.jobs.map((job) => {
        return (
          <div className="grid grid-cols-12 grid-rows-[25px_25px_1fr] my-6" key={job.key}>
            <h2 className='col-start-1 col-end-4 font-semibold text-lg'>{job.jobTitle}</h2>
            <span className='col-start-1 col-end-4 font-semibold'>{job.company}</span>
            <span className="col-start-10 col-end-13 row-start-1 row-end-3 flex justify-end self-center">
              {job.startDate} - {job.endDate}
            </span>
            <p className='col-start-1 col-span-12 row-start-3 row-end-4'>{job.jobSummary}</p>
          </div>
        )
      })}
    </>
  )
}

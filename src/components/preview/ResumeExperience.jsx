export default function ResumeExperience({ experience }) {



  return (
    <>
      {experience.jobs.map((job) => {
          let endDate
        if (job.endDate === null) {
          endDate = ''
        } else{
          endDate = `- ${job.endDate}`
        }

        return (
          <div className="grid grid-cols-12 grid-rows-[25px_25px_1fr] my-6" key={job.key}>
            <h2 className='col-start-1 col-end-4 font-semibold text-lg'>{job.jobTitle}</h2>
            <span className='col-start-1 col-end-4 font-semibold'>{job.company}</span>
            <span className="col-start-10 col-end-13 row-start-1 row-end-2 flex justify-end self-center font-semibold">
              {job.startDate} {endDate}
            </span>
            <span className="col-start-10 col-end-13 row-start-2 row-end-3 flex justify-end self-center font-semibold">
              {job.location}
            </span>
            <p className='col-start-1 col-span-12 row-start-3 row-end-4'>{job.jobSummary}</p>
          </div>
        )
      })}
    </>
  )
}

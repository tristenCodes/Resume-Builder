export default function ResumeExperience({ education }) {
  return (
    <>
      {education.education.map((university) => {
        return (
          <div
            className="grid grid-cols-12 grid-rows-[25px_25px_1fr] my-6"
            key={university.key}
          >
            <h2 className="col-start-1 col-end-4 font-semibold text-lg">
              {university.university}
            </h2>
            <span className="col-start-1 col-end-4 font-semibold">
              {university.program}
            </span>
            <span className="col-start-10 col-end-13 row-start-1 row-end-2 flex justify-end self-center font-semibold">
              {university.graduationDate}
            </span>
            <span className="col-start-10 col-end-13 row-start-2 row-end-3 flex justify-end self-center font-semibold">
              {university.location}
            </span>
            <span className="row-start-3">
              GPA: {university.gpa}
            </span>
          </div>
        )
      })}
    </>
  )
}

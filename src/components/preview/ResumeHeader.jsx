export default function ResumeHeader({ personalInfo }) {
  let { firstName, lastName, email, title, summary } = personalInfo

  return (
    <div>
      <h1 className="text-6xl mb-2">
        {firstName} {lastName}
      </h1>
      <span>{title} | {email} </span>
      <p>{summary}</p>
    </div>
  )
}

export default function ResumeHeader({ personalInfo }) {
  let { firstName, lastName, email, title, summary, phone } = personalInfo

  return (
    <div>
      <h1 className="text-6xl mb-2">
        {firstName} {lastName}
      </h1>
      <span>{title} | {email} | {phone} </span>
      <p>{summary}</p>
    </div>
  )
}

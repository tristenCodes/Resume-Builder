export default function ResumeHeader({ personalInfo }) {
  let { firstName, lastName, email, title, summary } = personalInfo

  return (
    <>
      <h1>
        {firstName} {lastName}
      </h1>
      <span>{email}</span>
      <span>{title}</span>
      <p>{summary}</p>
    </>
  )
}

export default function EducationInfoForm() {
  return (
    <div className="input--experience">
      <label>University/Institution</label>
      <input type="text" placeholder="Hustler's University"></input>
      <label>Program/Degree/Course</label>
      <input type="text" placeholder="Full-Stack Javascript"></input>
      <label>Graduation Date</label>
      <input type="date"></input>
      <label>GPA</label>
      <input type="number" placeholder={1.1} step={0.1} min={0} max={4}></input>
    </div>
  );
}

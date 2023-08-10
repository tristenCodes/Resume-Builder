export default function PersonalInfoForm() {
    
    return (
        <div className="input--experience">
            <label>Title/Position</label>
            <input placeholder="Web Developer"></input>
            <label>Company</label>
            <input placeholder="FAANG"></input>
            <label>Starting Year</label>
            <input type="date"></input>
            <label>End Year</label>
            <input type="date"></input>
            <label>State</label>
            <input placeholder="TN"></input>
        </div>
        )
}
export default function PersonalInfoForm() {
    
    return (
        <div className="input--personal">
            <label>First Name</label>
            <input placeholder="John"></input>
            <label>Last Name</label>
            <input placeholder="Doe"></input>
            <label>Email</label>
            <input placeholder="masterprogrammer99@github.com"></input>
            <label>Title</label>
            <input placeholder="Master Programmer"></input>
            <label>Summary about yourself</label>
            <textarea cols="30" rows="10"></textarea>
        </div>
        )
}
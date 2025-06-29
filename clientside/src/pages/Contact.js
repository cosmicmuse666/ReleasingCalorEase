import { useState } from "react"; 
import "./Contact.css";

function Contact() {
  let [pname, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [meal, setMeal] = useState("");
  let [focus, setFocus] = useState("");
  let [image, setImg] = useState(null);
  let [whenareyoustarting, setwhenareyoustarting]= useState([]);


function whenStarting(ev){
  if(ev.target.checked == true){
    whenareyoustarting.push(ev.target.value)
  }else{
    var indexCheck= whenareyoustarting.indexOf(ev.target.value);
    whenareyoustarting.splice(indexCheck,1);
  }
} 

  return (
    <div className="contact-page">
      <div className={`glass-card`}>
        <h1 className="form-title">Connect With Us</h1>
        
        <div className="form-group floating">
          <h5>Name</h5>
          <input type="text" onChange={(ev)=>{
            setName(ev.target.value);
          }} />
        </div>
        
        <div className="form-group floating">
          <h5>Phone</h5>
          <input type="text" onChange={(ev)=>{
            setPhone(ev.target.value);
          }} />
        </div>
        
        <div className="form-group">
          <h5>Meal Preference</h5>
          <div className="radio-group">
            <label className="radio-label">
              <input type="radio" name="meal" value="veg" onChange={(ev)=>{
                setMeal(ev.target.value);
              }} />
              Veg
            </label>
            <label className="radio-label">
            <input type="radio" name="meal" value="nonveg" onChange={(ev)=>{
                setMeal(ev.target.value);
              }} />
              Non-Veg
            </label>
            <label className="radio-label">
            <input type="radio" name="meal" value="none" onChange={(ev)=>{
                setMeal(ev.target.value);
              }} />
              Everything tasty?
            </label>
          </div>
        </div>
        
        <div className="form-group floating my-4">
          <h5>Focus Area</h5>
          <select name="focus" id="focus" onChange={(ev)=>{
            setFocus(ev.target.value);
          }} >
            <option value="" disabled hidden>
              Select an option
            </option>
            <option value="Health">Health</option>
            <option value="Mind">Mind</option>
            <option value="Both">Both</option>
          </select>
        </div>
        <h5>Upload your Diet Snap </h5>
        <div className="image-upload">
          <input type="file" name="image" onChange={(ev)=>{
            setImg(ev.target.files[0]);
          }} />
        </div>
        
        <div><h5>When do you want to start?</h5>
        <div className="checkboxclass">

        <span><input type="checkbox" value="Now" id="checkbox" onChange={whenStarting}  /> Now</span>&nbsp;&nbsp;  
          <input type="checkbox" value="Today" id="checkbox" onChange={whenStarting}/><span> Today</span>&nbsp;&nbsp;
          <input type="checkbox" value="Next Monday" id="checkbox" onChange={whenStarting}/><span> Next Monday</span>&nbsp;&nbsp;
           
        </div>
         
      
        
        
        </div>

        <button className="submit-button" onClick={async()=>{
         
            var formData = new FormData();
            formData.append("pname", pname);
            formData.append("phone", phone);
            formData.append("meal", meal);
            formData.append("focus", focus);
            if(image){
              formData.append("image", image);
            }
            formData.append("time", whenareyoustarting);
            
            var fd_output = await fetch("http://localhost:5000/mod/insert1", {
              method: "POST",
              body: formData,
              
            });
            
            let data = await fd_output.json();
            console.log(data);
          
        }} >
          Contact Us
        </button>
        
      </div>
    </div>
  );
}

export default Contact;
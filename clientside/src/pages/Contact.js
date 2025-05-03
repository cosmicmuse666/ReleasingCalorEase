import { useState } from "react";
import "./Contact.css";

function Contact() {

  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [meal, setMeal] = useState("");
  let [focus, setFocus] = useState("");
  let[img, setImg] = useState(false);
  
 

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

        <div className="form-group floating">
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
          
          <input type="file" name="file" onChange={(ev)=>{
            setImg(ev.target.files[0]);
          }}  />
        </div>
        
        <button className="submit-button" onClick={async()=>{
          var formData = new FormData();
          formData.append("name", name);
          formData.append("phone", phone);
          formData.append("meal", meal);
          formData.append("focus", focus);
          // formData.append("file", img);

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

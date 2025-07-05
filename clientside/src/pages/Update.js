import { useEffect, useState } from "react";
import "./Contact.css";
import { useParams } from "react-router-dom";

function Contact() {
  const param = useParams();
  let [pname, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [meal, setMeal] = useState("");
  let [focus, setFocus] = useState("");
  let [image, setImg] = useState(null);
  let [whenareyoustarting, setwhenareyoustarting] = useState([]);
  let [isveg, setVeg] = useState(false);
  let [isnonveg, setNonveg] = useState(false);
  let [iseverything, setiseverything] = useState(false);
  let [eid, seteid] = useState("");
  let [now, setNow] = useState(false);
  let [today, setToday] = useState(false);
  let [nextmonday, setNextMonday] = useState(false);

  function whenStarting(ev) {
    if (ev.target.checked == true) {
      whenareyoustarting.push(ev.target.value);
      if (ev.target.value === "Now") {
        setNow(true);
      }
      if (ev.target.value === "Today") {
        setToday(true);
      }
      if (ev.target.value === "Next Monday") {
        setNextMonday(true);
      }
    } else {
      var indexCheck = whenareyoustarting.indexOf(ev.target.value);
      whenareyoustarting.splice(indexCheck, 1);
      if (ev.target.value === "Now") {
        setNow(false);
      }
      if (ev.target.value === "Today") {
        setToday(false);
      }
      if (ev.target.value === "Next Monday") {
        setNextMonday(false);
      }
      console.log(whenareyoustarting);
    }

  }

  async function getupdate() {
    var id = param.uid;
    var fd = new FormData();
    fd.append("uid", id);
    var fetchupdate = await fetch("http://localhost:5000/mod/update", {
      method: "POST",
      body: fd,
    });
    var result = await fetchupdate.json();
    setName(result.pname);
    setPhone(result.phone);
    setMeal(result.meal);
    setFocus(result.focus);
    seteid(result._id);
    if (result.meal == "veg") {
      setVeg(true);
    } else if (result.meal == "nonveg") {
      setNonveg(true);
    } else {
      setiseverything(true);
    }
    var arr1 = result.time.split(",");

    if (arr1.indexOf("Now")) {
      setNow(true);
    }
    if (arr1.indexOf("Today")) {
      setNow(true);
    }
    if (arr1.indexOf("Next Monday")) {
      setNow(true);
    }
  }

  useEffect(() => {
    getupdate();
  }, []);

  return (
    <div className="contact-page">
      <div className={`glass-card`}>
        <h1 className="form-title">Connect With Us</h1>

        <div className="form-group floating">
          <h5>Name</h5>
          <input
            type="text"
            defaultValue={pname}
            onChange={(ev) => {
              setName(ev.target.value);
            }}
          />
        </div>

        <div className="form-group floating">
          <h5>Phone</h5>
          <input
            type="text"
            defaultValue={phone}
            onChange={(ev) => {
              setPhone(ev.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <h5>Meal Preference</h5>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="meal"
                value="veg"
                checked={isveg}
                onChange={(ev) => {
                  setMeal(ev.target.value);
                  setVeg(true);
                  setNonveg(false);
                  setiseverything(false);
                }}
              />
              Veg
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="meal"
                value="nonveg"
                checked={isnonveg}
                onChange={(ev) => {
                  setMeal(ev.target.value);
                  setVeg(false);
                  setNonveg(true);
                  setiseverything(false);
                }}
              />
              Non-Veg
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="meal"
                value="none"
                checked={iseverything}
                onChange={(ev) => {
                  setMeal(ev.target.value);
                  setVeg(false);
                  setNonveg(false);
                  setiseverything(true);
                }}
              />
              Everything tasty?
            </label>
          </div>
        </div>

        <div className="form-group floating">
          <h5>Focus Area</h5>
          <select
            name="focus"
            id="focus"
            onChange={(ev) => {
              setFocus(ev.target.value);
            }}
          >
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
          <input
            type="file"
            name="image"
            onChange={(ev) => {
              setImg(ev.target.files[0]);
            }}
          />
        </div>

        <div>
          <h5>When do you want to start?</h5>
          <div className="checkboxclass">
            <span>
              <input
                type="checkbox"
                value="Now"
                id="checkbox"
                checked={now}
                onChange={whenStarting}
              />
              Now
            </span>
            &nbsp;&nbsp;
            <input
              type="checkbox"
              value="Today"
              id="checkbox"
              checked={today}
              onChange={whenStarting}
            />
            <span>Today</span>&nbsp;&nbsp;
            <input
              type="checkbox"
              value="Next Monday"
              id="checkbox"
              checked={nextmonday}
              onChange={whenStarting}
            />
            <span>Next Monday</span>&nbsp;&nbsp;
          </div>
        </div>

        <button
          className="submit-button"
          onClick={async () => {
            var formData = new FormData();
            formData.append("uid", eid);
            formData.append("pname", pname);
            formData.append("phone", phone);
            formData.append("meal", meal);
            formData.append("focus", focus);
            if (image) {
              formData.append("image", image);
            }
            formData.append("time", whenareyoustarting);

            var fd_output = await fetch("http://localhost:5000/mod/sync", {
              method: "POST",
              body: formData,
            });

            let data = await fd_output.json();
            console.log(data);
          }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Contact;

import React, { useState } from "react";
import ActivityButton from "../Button/ActivityButton";
import IconButton from "../IconButton/IconButton";
import FormInput from "../Input/Input";
import { useUserRecords } from "../Hooks/Hooks";
import "./InputActivity.css";
import axios from "axios";

const InputActivity = ({ refreshRecords }) => {
  const [values, setValues] = useState({
    activity: "",
    date: "",
    duration: "",
    kcal: "",
    distance: "",
  });

  const inputs = [
    {
      id: 1,
      name: "activity",
      type: "text",
      placeholder: "running",
      errorMessage:
        "Activity should be 3-16 characters and not include any special characters.",
      label: "Activity type",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "date",
      type: "date",
      placeholder: "11-04-2022",
      errorMessage: "Please choose your activity date.",
      label: "Date",
      required: true,
    },
    {
      id: 3,
      name: "duration",
      type: "text",
      placeholder: "30:00:000",
      errorMessage: "Duration should be in this format 00:00:000",
      label: "Duration",
      pattern: "^[0-9][0-9]:[0-5][0-9]:[0-9][0-9][0-9]$",
      required: true,
    },
    {
      id: 4,
      name: "kcal",
      type: "number",
      placeholder: "120",
      errorMessage: "Please input your kcal number.",
      label: "Kcal",
      required: true,
    },
    {
      id: 5,
      name: "distance",
      type: "number",
      placeholder: "5",
      errorMessage: "Please input your distance number.",
      label: "Distance",
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const running = () => {
    setValues({ ...values, activity: "running" });
  };
  const badminton = () => {
    setValues({ ...values, activity: "badminton" });
  };
  const canoe = () => {
    setValues({ ...values, activity: "canoe" });
  };
  const cycling = () => {
    setValues({ ...values, activity: "cycling" });
  };
  const football = () => {
    setValues({ ...values, activity: "football" });
  };
  const handball = () => {
    setValues({ ...values, activity: "handball" });
  };
  const karate = () => {
    setValues({ ...values, activity: "karate" });
  };
  const climbing = () => {
    setValues({ ...values, activity: "climbing" });
  };
  const surfing = () => {
    setValues({ ...values, activity: "surfing" });
  };
  const swimming = () => {
    setValues({ ...values, activity: "swimming" });
  };

  const submit = async (event) => {
    event.preventDefault();
    const valueInputActivity = {
      activity: values.activity,
      date: values.date,
      duration: values.duration,
      kcal: values.kcal,
      distance: values.distance,
    };

    console.log(valueInputActivity);
    await axios.post("http://localhost:4000/users/me/records", valueInputActivity);
    refreshRecords();
  };

  return (
    <main>
      <div className="main-box">
        <div className="form-box">
          <h2 className="title_input">Add Activity</h2>
          <div className="form">
            <div className="form-input">
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="icon-box">
          <IconButton
            src="./images/athletes/Running.png"
            alt="Running"
            onClick={running}
          />
          <IconButton
            src="./images/athletes/Badminton.png"
            alt="Badminton"
            onClick={badminton}
          />
          <IconButton
            src="./images/athletes/Canoe_Slalom.png"
            alt="Canoe_Slalom"
            onClick={canoe}
          />
          <IconButton
            src="./images/athletes/Cycling_Road.png"
            alt="Cycling_Road"
            onClick={cycling}
          />
          <IconButton
            src="./images/athletes/Football.png"
            alt="Football"
            onClick={football}
          />
          <IconButton
            src="./images/athletes/Handball.png"
            alt="Handball"
            onClick={handball}
          />
          <IconButton
            src="./images/athletes/Karate.png"
            alt="Karate"
            onClick={karate}
          />
          <IconButton
            src="./images/athletes/Sport_Climbing.png"
            alt="Sport_Climbing"
            onClick={climbing}
          />
          <IconButton
            src="./images/athletes/Surfing.png"
            alt="Surfing"
            onClick={surfing}
          />
          <IconButton
            src="./images/athletes/Swimming.png"
            alt="Swimming"
            onClick={swimming}
          />
        </div>
      </div>
      <div className="form-button">
        {/*---------------Button---------------*/}
        <ActivityButton onClick={(event) => submit(event)}>
          Save Activity
        </ActivityButton>
      </div>
    </main>
  );
};

export default InputActivity;

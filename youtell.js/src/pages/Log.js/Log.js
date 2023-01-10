import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Signup from "../Signup/Signup";
import "./log.css";

const Log = () => {
  const [username, setusername] = useState("");
  const [userpassword, setuserpassword] = useState("");
  const [select, setselect] = useState("");
  const [localdata, setlocaldata] = useState([]);

  const handleusername = (eve) => {
    setusername(eve.target.value);
    console.log("user1", username);
  };
  const handleuserpassword = (eve) => {
    setuserpassword(eve.target.value);
    console.log("user2", userpassword);
  };
  const handleradio=(eve)=>{
    setselect(eve.target.value)
    console.log("radio",select);
  }
useEffect(()=>{
  const localStorageData = JSON.parse(localStorage.getItem("formvalue"))
  console.log(localStorageData,'local')
  setlocaldata(localStorageData);
},[])

console.log("set",localdata)
//  const temp = localStorage.getItem(JSON.parse("loggedUser"))
//  console.log("temp", localStorageData);
  const handlesubmit = () => {

  };
  
  return (
    <div className="loginpage">
      <section className="container">
        <div className="loginflex">
          <h3>Login page</h3>
          <div className="logincontent" onChange={handleradio}>
            <input
              type="radio"
              name="select"
              value="master"
              checked={select == "master"}
            />
            <label>Master</label>
            <input
              type="radio"
              name="select"
              value="student"
              checked={select == "student"}
            />
            <label>student</label>
          </div>
          <div className="usercredent">
            <input
              type="Text"
              placeholder={"username"}
              value={username}
              onChange={handleusername}
            ></input>
            <input
              type="password"
              placeholder={"userpassword"}
              value={userpassword}
              onChange={handleuserpassword}
            ></input>
            <button onClick={handlesubmit}>submit</button>
            <Link to={"Signup"} element={<Signup />}>
              <button>create account</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Log;

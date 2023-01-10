import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Signup from "../Signup/Signup";
import "./log.css";

const Log = () => {
  const [username, setusername] = useState("");
  const [userpassword, setuserpassword] = useState("");
  const [select, setselect] = useState("");
  const [localdata, setlocaldata] = useState([]);
  const[error, seterror] = useState("")
  const Navigate = useNavigate();

  const handleusername = (eve) => {
    setusername(eve.target.value);
   
  };
  const handleuserpassword = (eve) => {
    setuserpassword(eve.target.value);
  
  };
  const handleradio=(eve)=>{
    setselect(eve.target.value)
   
  }
useEffect(()=>{
  const localStorageData = JSON.parse(localStorage.getItem("formvalue"))
  setlocaldata(localStorageData);
},[])

console.log("set",localdata)

  const handlesubmit = () => {
    console.log('hi');
    console.log(username,userpassword,select,"data");
    if(username===""&&userpassword===""&&select===""){
       alert("enter the datas")
       return;
    }else if (select==="master"){
      let tempuser=localdata.master.find((item)=>{
       if(username===item.name1){
        return item;
       }
      })
      if(tempuser.password1===userpassword){
        return(
          Navigate("/Home")
        )
      }else{
        alert("error password and username")
      }
    }else if (select==="student"){
      let tempuser=localdata.student.find((item)=>{
        if(username===item.name1){
         return item;
        }
       })
       if(tempuser.password1===userpassword){
        return(
          Navigate("/Home")
        )
      }else{
        alert("error password and username")
      }
    }else{
      alert("error username and userpassword")
    }
}
  
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
      <h3>{error}</h3>
    </div>
  );
};

export default Log;

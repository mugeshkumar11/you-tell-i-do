import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [user, setUser] = useState({ select: "", name1: "", password1: "" });
  const [formvalue, setformvalue] = useState([]);
  const [error, seterror] = useState("");
  const Navigate = useNavigate();
  const [select, setselect] = useState("");
  console.log(user, "user");

  // const handlename= (eve) =>{
  //   setName(eve.target.value)
  //   console.log("data",name);
  // }

  // const handlepassword= (eve) =>{
  //   setPassword(eve.target.value)
  //   console.log("data",password);
  // }
  const handlesignup = (e) => {
    alert("hi");
    e.preventDefault();
    // localStorage.clear()
    if (user.name1 === "" && user.password1 === "") {
      seterror("fill the input box");
      return;
    } else if (user.name1 === "" && user.password1 === user.password1) {
      seterror("enter the name");
      return;
    } else if (user.name1 === user.name1 && user.password1 === "") {
      seterror("enter the password");
      return;
    } else {
      // setUser({[name]:name,[password]:password,[select]:select})
      setformvalue([...formvalue, user]);

      console.log("data2", user);

      // Navigate("/")

      // localStorage.setItem("loggedUser",user);
    }
  };
  useEffect(() => {
    localStorage.setItem("formvalue", JSON.stringify([...formvalue]));
  }, [formvalue]);
  //  const handleradio =(eve)=>{
  //   setselect(eve.target.value)
  //   console.log("radio",select);
  //  }
  return (
    <div className="loginpage">
      <section className="container">
        <div className="loginflex">
          <h3>Register page</h3>
          <div className="logincontent">
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
              type="text"
              placeholder={"name"}
              value={user.name1name}
              onChange={(e) => setUser({ ...user, name1: e.target.value })}
            ></input>
            <input
              type="password"
              placeholder={"password"}
              value={user.password1}
              onChange={(e) => setUser({ ...user, password1: e.target.value })}
            ></input>
            <button onClick={handlesignup}>signup</button>
            <h4>{error}</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;

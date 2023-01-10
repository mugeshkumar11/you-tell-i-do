import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [user, setUser] = useState({ select: "", name1: "", password1: "" });
  const [formvalue, setformvalue] = useState({master:[],student:[]});
  const [error, seterror] = useState("");
  const Navigate = useNavigate();

  console.log(formvalue);


  const handlesignup = (e) => {
    alert("hi");
    e.preventDefault();
   
    if (user.name1 === "" && user.password1 === "") {
      seterror("fill the input box");
      return;
    } else if (user.name1 === "" && user.password1 === user.password1) {
      seterror("enter the name");
      return;
    } else if (user.name1 === user.name1 && user.password1 === "") {
      seterror("enter the password");
      return;
    }else if(user.select==="master"){

      let temCopy = formvalue

      temCopy.master = [...temCopy.master, user]

      setformvalue(temCopy);
      
    }else if(user.select==="student"){
      let temCopy = formvalue

      temCopy.student = [...temCopy.student, user]

      setformvalue(temCopy);

    }
     else {
      
    }
    submit()
    Navigate("/")
  };

  let submit = ()=>{
  localStorage.setItem("formvalue", JSON.stringify({...formvalue}));
  console.log('sub');

  }
 

  return (
    <div className="loginpage">
      <section className="container">
        <div className="loginflex">
          <h3>Register page</h3>
          <div className="logincontent" onChange={(e)=>setUser({...user,select:e.target.value})}>
            <input
              type="radio"
              name="user"
              value="master"
              checked={user == "master"}
            />
            <label>Master</label>
            <input
              type="radio"
              name="user"
              value="student"
              checked={user == "student"}
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

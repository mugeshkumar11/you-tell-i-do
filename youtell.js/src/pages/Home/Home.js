import React, { useState ,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './home.css';
const Home = () => {
  const[func, setfunc] = useState("")
  const[func1, setfunc1] = useState("")
  const[func2, setfunc2] = useState("")
  const[func3, setfunc3] = useState("")
  const navigate = useNavigate();
  
  const logout=()=>{
    navigate("/")
  }

    function makeNum(num, func) {
      if (func === undefined) {
        return num;
      } else {
        return func(num);
      }
    }
    function two(func) {
      return makeNum(2,func);
    }
    function three(func) {
      return makeNum(3,func);
    }
    function four(func) {
      return makeNum(4,func);
    }
    function five(func) {
      return makeNum(5,func);
    }
    function six(func) {
      return makeNum(6,func);
    }
    function seven(func) {
      return makeNum(7,func);
    }
    function eight(func) {
      return makeNum(8,func);
    }
    function nine(func) {
      return makeNum(9,func);
    }
    
    function plus(right) {
      return function(left) { return left + right; };
    }
    function minus(right) {
      return function(left) {
        return left - right;
      };
    }
    function times(right) {
      return function(left) { return left * right; };
    }
    function dividedBy(right) {
      return function(left) { return left / right; };
    }
   

    
const handleclick=()=>{
setfunc(eight(minus(three())));
}
  
 

 
  return (
    <div className="header">
      <section className="contain">
          <h2>Home page</h2>
          <div className="headercredent">
              <button onClick={logout}>Log out</button>
          </div>
      </section>
      <section className='button'>
        <h3>eight(minus(three()))</h3>
        <button onClick={()=>handleclick()}>calculate</button>
      </section>
      <p>{func}</p>
      <section className='button'>
        <h3> six(dividedBy(two()))</h3>
        <button onClick={()=>setfunc1(six(dividedBy(two())))}>calculate</button>
      </section>
      <p>{func1}</p>
      <section className='button'>
        <h3> seven(times(five()))</h3>
        <button onClick={()=>setfunc2(seven(times(five())))}>calculate</button>
      </section>
      <p>{func2}</p>
      <section className='button'>
        <h3>four(plus(nine()))</h3>
        <button onClick={()=>setfunc3(four(plus(nine())))}>calculate</button>
      </section>
      <p>{func3}</p>
    </div>
  )
}

export default Home
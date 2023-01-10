import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './home.css';
const Home = () => {
  const[func, setfunc] = useState("")

  const handleclick=(eve)=>{
    
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
    
    console.log(eight(minus(three()))); // return 5

    console.log(six(dividedBy(two()))); // return 3

    console.log(seven(times(five()))); // return 35

    console.log(four(plus(nine()))); // must return 13
  }
 
  return (
    <div className="header">
      <section className="contain">
          <h2>Home page</h2>
          <div className="headercredent">
            <Link to={"/"}>
              <button>Log out</button>
            </Link>
          </div>
      </section>
      <section className='button'>
        <button onClick={()=>handleclick()}>calculate</button>
      </section>
      {/* <section className='button'>
        <h3> six(dividedBy(two()))</h3>
        <button onClick={handleclick}>calculate</button>
      </section>
      <section className='button'>
        <h3> seven(times(five()))</h3>
        <button onClick={handleclick}>calculate</button>
      </section>
      <section className='button'>
        <h3>four(plus(nine()))</h3>
        <button onClick={handleclick}>calculate</button>
      </section> */}
      <h3>{}</h3>
    </div>
  )
}

export default Home
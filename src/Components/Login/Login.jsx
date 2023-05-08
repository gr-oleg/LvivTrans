import React, { useEffect, useState } from "react";
import "./login.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleClick=(e)=>{
    e.preventDefault()
    const login={user, email, pass}
    console.log(login)
    fetch("http://localhost:8080/user/add",{
      method: "POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(login)
    }).then(()=>{
      console.log("New user added")
    })
  }

  const loginClick = (e) => {
    e.preventDefault();
    const url = `http://localhost:8080/user/${email}?pass=${pass}`;
    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        if (data && data.email) {
          console.log("OK");
          if (data.pass === pass) {
            console.log("OK pass");
          } else {
            console.log("Incorrect password");
          }
        } else {
          console.log("User not found");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  useEffect(() => {
    const signInBtn = document.getElementById("signIn");
    const signUpBtn = document.getElementById("signUp");
    const fistForm = document.getElementById("form1");
    const secondForm = document.getElementById("form2");
    const container = document.querySelector(".container");

    signInBtn.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });

    signUpBtn.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    fistForm.addEventListener("submit", (e) => e.preventDefault());
    secondForm.addEventListener("submit", (e) => e.preventDefault());

    // Cleanup function to remove event listeners
    return () => {
      signInBtn.removeEventListener("click", () => {
        container.classList.remove("right-panel-active");
      });

      signUpBtn.removeEventListener("click", () => {
        container.classList.add("right-panel-active");
      });

      fistForm.removeEventListener("submit", (e) => e.preventDefault());
      secondForm.removeEventListener("submit", (e) => e.preventDefault());
    };
  }, []);

  return (
    <body className="login">
      <div className="container right-panel-active">
        <div className="container__form container--signup">
          <form action="#" className="form" id="form1">
            <h2 className="form__title">Sign Up</h2>
            <input type="text" placeholder="User" className="input" 
            value={user}
            onChange={(e)=>setUser(e.target.value)}
            />
            <input type="email" placeholder="Email" className="input" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input type="password" placeholder="Password" className="input" 
            value={pass}
            onChange={(e)=>setPass(e.target.value)}
            />
            <button className="btnl" onClick={handleClick}>Sign Up</button>
          </form>
        </div>

        <div className="container__form container--signin">
          <form action="#" className="form" id="form2">
            <h2 className="form__title">Sign In</h2>
            <input type="email" placeholder="Email" className="input"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" className="input" 
            value={pass}
            onChange={(e)=>setPass(e.target.value)}/>
            <a href="#1" className="link">
              Forgot your password?
            </a>
            <button className="btnl" onClick={loginClick}>Sign In</button>
          </form>
        </div>

        <div className="container__overlay">
          <div className="overlay">
            <div className="overlay__panel overlay--left">
              <button className="btnl" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay__panel overlay--right">
              <button className="btnl" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

    </body>
  );
};

export default Login;
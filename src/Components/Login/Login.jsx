import React, { useEffect, useState } from "react";
import "./login.css";
import Cabinet from "../Cabinet/Cabinet";
import { Link, useNavigate } from "react-router-dom";
import { Message } from "protobufjs";
import { FcGoogle } from 'react-icons/fc'

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const login = { user, email, pass };
    console.log(login);
    fetch("https://lvivtrans-back.azurewebsites.net/user/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(login),
    })
        .then((response) => {
            if (response.ok) {
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    return response.json();
                } else {
                    return response.text();
                }
            } else if (response.status === 409) {
                throw new Error("User already registered");
            } else {
                throw new Error("Error: " + response.status);
            }
        })
        .then((data) => {
            if (typeof data === "object") {
                alert(data.message);
            } else {
                alert(data);
            }
        })
        .catch((error) => {
            alert(error.message);
            console.error("Error:", error);
        });
        if (user.trim() === "" || email.trim() === "" || pass.trim() === "") {
          alert("Please fill in all fields");
          return;
        }
};

const loginClick = (e) => {
  e.preventDefault();
  const url = `https://lvivtrans-back.azurewebsites.net/user/${email}?pass=${pass}`;
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
      if (data && data.email && data.pass === pass) {
        setIsAuthenticated(true);
        navigate(`/cabinet?email=${email}`);
      } else if (data.pass !== pass) {
        alert("Password is incorrect!");
      } else if (data.email !== email) {
        alert("Email is incorrect!");
      } else {
        alert("Email is incorrect!");
      }
    })
    .catch((error) => {
      alert("Email is incorrect!");
    });
  if (email.trim() === "" || pass.trim() === "") {
    alert("Please fill in all fields");
    return;
  }
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
            <input
              type="text"
              placeholder="User"
              className="input" 
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="input" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input" 
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <button className="btnl" onClick={handleClick} >Sign Up</button>
          </form>
        </div>

<div className="container__form container--signin">
  <form action="#" className="form" id="form2" onSubmit={handleSubmit}>
    <h2 className="form__title">Sign In</h2>
    <input
      type="email"
      placeholder="Email"
      className="input"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      className="input" 
      value={pass}
      onChange={(e) => setPass(e.target.value)}
    />
    <button type="submit" className="btns">
      <Link to={{ pathname: "/cabinet", state: { email: email } }} className="btnl" onClick={loginClick}>
        Sign In
      </Link>
    </button>
  </form>
</div>


        <div className="container__overlay">
          <div className="overlay">
            <div className="overlay__panel overlay--left">
              <button className="btnl" id="signIn">
                Sign In
              </button>
              <div className="row">
               <span className="spacer"></span>
               <a className="or">or</a>
                <span className="spacer"></span>
              <a href="" target="_blank" className="icon-button gg">
              <FcGoogle className="icon-gg" />
           <span></span>
           </a>
            </div>
            </div>
            <div className="overlay__panel overlay--right">
              <button className="btnl" id="signUp">
                Sign Up
              </button>
              <div className="row">
               <span className="spacer"></span>
               <a className="or">or</a>
                <span className="spacer"></span>
              <a href="" target="_blank" className="icon-button gg">
              <FcGoogle className="icon-gg" />
           <span></span>
           </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    
  );
  
};

export default Login;

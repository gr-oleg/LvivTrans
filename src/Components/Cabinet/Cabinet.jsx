import React, { useEffect, useState } from "react";
import "./cabinet.css";
import image from "../../Assets/AvatarProfile.png";

const Cabinet = ({ email, setEmail, onLogout, setIsAuthenticated, name }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [id, setId] = useState("");  

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://lvivtrans-back.azurewebsites.net/user/${email}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const userData = await response.json();
        setUser(userData.user);
        setPass(userData.pass);
        setId(userData.id);
        if (name !== "") {
          setUser("");}
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [setEmail]);  

  return (
    <div className="profile">
      <div className="profile-page">
        <div className="profile-picture">
          <img src={image} alt="Profile" className="profile-image" />
        </div>
        <div className="profile-data">
          <h1>{user}{name}</h1>
          {id && <h2>Id: {id}</h2>}
          <h2>Email: {email}</h2>
          {pass && <h2>Password: {pass}</h2>}
        </div>
      </div>
    </div>
  );
};

export default Cabinet;

import React, { useEffect, useState } from "react";
import "./cabinet.css";
import image from "../../Assets/AvatarProfile.png";

const Cabinet = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [id, setId] = useState("");

  

  useEffect(() => {
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
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [email]);

  const handleEditProfile = () => {
    // Обробник для редагування профілю
  };

  const handleDeleteProfile = () => {
    // Обробник для видалення профілю
  };

  const handleLogout = () => {
    // Обробник для виходу з профілю
  };

  return (
    <div className="profile">
      <div className="profile-page">
        <div className="profile-picture">
          <img src={image} alt="Profile" className="profile-image" />
        </div>
        <div className="profile-data">
          <h2>User: {user}</h2>
          <p>Id: {id}</p>
          <p>Email: {email}</p>
          <p>Password: {pass}</p>
        </div>
        <div className="profile-buttons">
          <button className="delete-button" onClick={handleDeleteProfile}>
            Delete
          </button>
          <button className="edit-button" onClick={handleEditProfile}>
            Edit
          </button>
          <button className="exit-button" onClick={handleLogout}>
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cabinet;

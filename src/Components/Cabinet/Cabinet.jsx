import React, { useEffect, useState } from "react";
import "./cabinet.css";
import image from "../../Assets/AvatarProfile.png";

const Cabinet = ({ email, setEmail, onLogout, setIsAuthenticated }) => {
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
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [setEmail]);

  const handleEditProfile = () => {
    // Обробник для редагування профілю
  };

  const handleDeleteProfile = () => {
    // Обробник для видалення профілю
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("email"); // Додайте цей рядок для видалення збереженого email
    setIsAuthenticated(false);
    setEmail(""); // Додайте цей рядок для очищення значення email
  };

  return (
    <div className="profile">
      <div className="profile-page">
        <div className="profile-picture">
          <img src={image} alt="Profile" className="profile-image" />
        </div>
        <div className="profile-data">
          <h1>Hello, {user}</h1>
          <h2>Id: {id}</h2>
          <h2>Email: {email}</h2>
          <h2>Password: {pass}</h2>
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

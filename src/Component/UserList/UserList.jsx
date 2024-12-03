import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";

function UserList() {
  const [listOfUser, setListOfUser] = useState([]); 

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUser(response.data); 
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error); 
      });
  }, []); 

  return (
    <div>
      <nav className="navbar">
        <div className="logo">User App</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#users">Users</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>

      <div className="user-list-container">
        <h1 className="title">User List</h1>
        <div className="user-cards-grid">
          {listOfUser.map((user) => (
            <div key={user.id} className="user-card">
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>City: {user.address.city}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserList;

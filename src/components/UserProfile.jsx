import React from "react";

const UserProfile = ({ name, age, location }) => {
  return (
    <div className="user-profile-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

const styles = {
  profileCard: {
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "5px",
    width: "200px",
    textAlign: "center",
  },
};

export default UserProfile;

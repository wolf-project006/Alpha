import React from "react";

const UserCard = ({ user }) => {
  return (
    <>
      <div>
        <h2>Welcome back,</h2>
        <p>{user.last_name}</p>
      </div>
    </>
  );
};

export default UserCard;

import React from "react";
import "./UserDetails.css";
import UPBar from "./Userprofilebar/UP_bar";
import UserForm from "./UserForm/UserForm";


const UserDetails = () => {
  return (
    <div className="UD_component">
      <div className="UD_innercomponent">
        <div className="UD_up_bar"></div>
        <UPBar />
        <div className="UD_up_bar"></div>
        <UserForm />
      </div>
    </div>
  );
};

export default UserDetails;

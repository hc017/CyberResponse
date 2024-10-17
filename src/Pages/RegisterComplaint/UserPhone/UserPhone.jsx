import React from "react";
import "./UserPhone.css";
import UFPRed from "../../UserDetails/UserForm/UFP_red";
import UPBar from "../../UserDetails/Userprofilebar/UP_bar";

const UserPhone = () => {
  return (
    <div className="UserD_component">
      <div className="UserD_innercomponent">
        <div className="UD_up_bar"></div>
        <UPBar />
        <div className="UD_up_bar"></div>
        <UFPRed />
        <div className="UD_up_bar"></div>
        <div className="UD_up_bar"></div>
        <div className="innerform">
          <div className="CW_susdetail_bar">
            <p className="CW_sus_text">User Profile</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default UserPhone;

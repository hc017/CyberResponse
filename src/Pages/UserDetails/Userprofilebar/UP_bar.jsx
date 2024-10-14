import React from "react";
import "./UP_bar.css";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const UP_bar = () => {
  // Remove Firebase authentication context logic

  return (
    <div className="UP_container">
      <div className="ud_text">
        <FaUser className='ufp_icons_user' />
        <p className="ud_text_in">User Details</p>
      </div>
      <div className="ud_mail">
        <IoIosMail className='ufp_icons_mail' />
        <p className="ud_mail_text">Email: example@example.com</p> {/* Placeholder for email */}
      </div>
      <div className="log_btn">
        <Link to="/" className="log_3">
          <p className="log_2">Logout</p> {/* Placeholder for logout action */}
        </Link>
      </div>
    </div>
  );
};

export default UP_bar;

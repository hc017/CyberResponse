import React, { useState } from "react";
import "./TrackComplaint.css";
// import Em from "../../components/Emergency/Em";
import { Link } from "react-router-dom";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const TrackComplaint = () => {
  const [Rmobile, setRMobile] = useState("");
  const [Rotp, setROtp] = useState("");
  const [status, setStatus] = useState("");

  const handleSendOtp = () => {
    // Placeholder for sending OTP logic
    console.log(`OTP requested for: ${Rmobile}`);
    setStatus("OTP sent! Please check your phone.");
  };

  const handleVerifyOtp = () => {
    // Placeholder for OTP verification logic
    console.log(`Verifying OTP: ${Rotp}`);
    if (Rotp === "123456") { // Example for OTP verification
      setStatus("Your status is ongoing!");
      alert("Correct OTP entered");
    } else {
      setStatus("");
      alert("OTP not matched");
    }
  };

  return (
    <div className="TC_component">
      <div className="TC_innercomponent">
        {/* <Em /> */}
        <div className="UD_TC_bar"></div>
        <div className="UD_TC_bar"></div>
        <div className="UD_TC_bar"></div>
        <div className="TC_innerform">
          <div className="TC_susdetail_bar">
            <p className="TC_sus_text">Track A Complaint</p>
          </div>

          <div className="TC_block"></div>
          <div className="UD_TC_bar"></div>
          <div className="TC_Vi">
            <div className="R_Vi_container">
              <div className="ldiv">
                <label className="R_VI_text">Mobile No:</label>
              </div>
              <div className="VIdiv1">
                <PhoneInput
                  country={'in'}
                  className="urmobile1"
                  value={Rmobile}
                  onChange={(value) => setRMobile("+" + value)}
                />
              </div>
            </div>

            <div className="otp_container">
              <div className="ldiv">
                <label className="R_VI_text" id="VIT_otp">
                  OTP:
                </label>
              </div>

              <div className="VIdiv">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="otp_vi_input"
                  id="VIT_input1"
                  value={Rotp}
                  onChange={(e) => setROtp(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="otp_btn">
              <button type="button" className="R_BTN" onClick={handleSendOtp}>
                Get OTP
              </button>
              <button type="button" className="R_BTN" onClick={handleVerifyOtp}>
                Verify OTP
              </button>
            </div>
            {status && <h3 className="status_check">{status}</h3>}
            <div className="UD_TC_bar"></div>
            <div className="TC_block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackComplaint;

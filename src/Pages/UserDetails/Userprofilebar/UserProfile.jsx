import React, { useState } from "react";
// import Em from "../../../components/Emergency/Em";
import UFPRed from "../UserForm/UFP_red";
import UPBar from "./UP_bar";
import "./UserProfile.css";

const UserProfile = () => {
  // Initialize userDetails and permanentAddress as local state
  const [userDetails, setUserDetails] = useState({
    RegName: '',
    RegMobile: '',
    RegGender: '',
    ReDob: '',
  });
  const [permanentAddress, setPermanentAddress] = useState({
    policeStation: '',
    state: '',
    district: '',
    country: '',
  });

  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePermanentAddressChange = (e) => {
    const { name, value } = e.target;
    setPermanentAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Handle save action, e.g., display an alert or store the data elsewhere
    alert("Data changed");
    // Optionally, you could log the current state to see the changes
    console.log("User Details:", userDetails);
    console.log("Permanent Address:", permanentAddress);
  };

  return (
    <div className="UserP_component">
      <div className="UserD_innercomponent">
        <UPBar />
        <UFPRed />
        <div className="innerform">
          <div className="CW_susdetail_bar">
            <p className="CW_sus_text">User Profile</p>
          </div>
          <div className="innerComp2">
            <form className="user-details">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label>Name:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        value={userDetails.RegName}
                        name="RegName"
                        onChange={handleUserDetailsChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Email:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        value="example@example.com" // Placeholder for email
                        readOnly
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Phone Number:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        value={userDetails.RegMobile}
                        name="RegMobile"
                        onChange={handleUserDetailsChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Gender:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        value={userDetails.RegGender}
                        name="RegGender"
                        onChange={handleUserDetailsChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>DOB:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        value={userDetails.ReDob}
                        name="ReDob"
                        onChange={handleUserDetailsChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Nearest Police Station:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        value={permanentAddress.policeStation}
                        name="policeStation"
                        onChange={handlePermanentAddressChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>State:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        value={permanentAddress.state}
                        name="state"
                        onChange={handlePermanentAddressChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>District:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        value={permanentAddress.district}
                        name="district"
                        onChange={handlePermanentAddressChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Country:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        value={permanentAddress.country}
                        name="country"
                        onChange={handlePermanentAddressChange}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
            <button className="save_btn" onClick={handleSave}>Save Data</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

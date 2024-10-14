import React, { useState, useEffect } from "react";
import "./Submit.css";
// import Em from "../../components/Emergency/Em";
import UFP_red from "../UserDetails/UserForm/UFP_red";
import IDX from "./IDX";
import UP_bar from "../UserDetails/Userprofilebar/UP_bar";

const Submit = () => {
  const [incidentDetails, setIncidentDetails] = useState(null);

  useEffect(() => {
    const incidentID = localStorage.getItem("incidentID"); // Get incident ID from local storage

    // Simulate fetching incident details (replace this with your actual data fetching logic)
    if (incidentID) {
      const mockIncidentDetails = {
        complaintCategory: "Theft",
        subCategory: "Personal Property",
        other: "Stolen bicycle",
        DateTime: "2024-10-14T10:00",
        Place: "City Park",
        Email: "example@example.com",
        Description: "My bicycle was stolen from the park.",
        delayReporting: "no",
      };
      setIncidentDetails(mockIncidentDetails);
    } else {
      console.log("No incident details found");
    }
  }, []);

  return (
    <div className="CD_component">
      <div className="CD_innercomponent">
        {/* <Em /> */}
        <div className="UD_up_bar"></div>
        <UP_bar />
        <div className="UD_up_bar"></div>
        <UFP_red />
        <div className="UD_up_bar"></div>
        <IDX />
        <div className="CSD_innerComp2">
          <div className="complaintdetails_bar">
            <p className="comp_text">Complaint Details</p>
          </div>
          {incidentDetails && (
            <div className="incident-details">
              <p>Incident</p>
              <p>Complaint Category: {incidentDetails.complaintCategory}</p>
              <p>Sub Category: {incidentDetails.subCategory}</p>
              <p>Other: {incidentDetails.other}</p>
              <p>Date and Time: {incidentDetails.DateTime}</p>
              <p>Place: {incidentDetails.Place}</p>
              <p>Email: {incidentDetails.Email}</p>
              <p>Description: {incidentDetails.Description}</p>
              <p>Delay in Reporting: {incidentDetails.delayReporting}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Submit;

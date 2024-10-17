import React, { useState } from "react";
import "./CheckStatus.css";
// import Em from "../../../Components/Emergency/Em";
import UFPRed from "../../UserDetails/UserForm/UFP_red";
import UPBar from "../../UserDetails/Userprofilebar/UP_bar";

const CheckStatus = () => {
  const [statusData, setStatusData] = useState([]);
  const [delayReporting, setDelayReporting] = useState("");

  // Function to fetch status data when Search button is clicked
  const handleSearch = () => {
    // Replace the dummy data below with your fetched data
    const dummyData = [
      {
        id: 1,
        requestDate: "2024-03-27",
        status: "Pending",
        subject: "Subject 1",
        lastUpdate: "2024-03-27 10:00:00",
      },
      {
        id: 2,
        requestDate: "2024-03-28",
        status: "Completed",
        subject: "Subject 2",
        lastUpdate: "2024-03-28 12:00:00",
      },
      {
        id: 3,
        requestDate: "2024-03-29",
        status: "Pending",
        subject: "Subject 3",
        lastUpdate: "2024-03-29 08:00:00",
      },
      // Add more data as needed
    ];
    setStatusData(dummyData);
  };

  const handleAction = (id) => {
    // Implement your action logic here based on the provided ID
    console.log(`Action clicked for ID: ${id}`);
  };

  return (
    <div className="CS_component">
      <div className="CS_innercomponent">
        {/* <Em /> */}
        <div className="UD_up_bar"></div>
        <UPBar />
        <div className="UD_up_bar"></div>
        <UFPRed />
        <div className="CS_innerForm">
          <div className="CS_susdetail_bar">
            <p className="CS_sus_text">Check Status</p>
          </div>
          <div className="CS_block"></div>
          <div className="CS_status_container">
            <div className="status_input_container">
              <input
                type="Number"
                className="CS_vi_input1"
                placeholder="Search"
              />
              <input
                type="Date"
                className="CS_vi_input2"
                placeholder="Search Request Date"
              />
              <button className="CS_vi_btn" onClick={handleSearch}>
                Search
              </button>
            </div>
            <div className="CS_block2"></div>
            {/* Display status table if data is available */}
            {statusData.length > 0 ? (
              <table className="CS_status_table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Request Date</th>
                    <th>Status</th>
                    <th>Subject</th>
                    <th>Last Update</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {statusData.map((status) => (
                    <tr key={status.id}>
                      <td>{status.id}</td>
                      <td>{status.requestDate}</td>
                      <td>{status.status}</td>
                      <td>{status.subject}</td>
                      <td>{status.lastUpdate}</td>
                      <td>
                        <button
                          className="CS_actbtn"
                          onClick={() => handleAction(status.id)}
                        >
                          Mail
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="CS_no_data">No data available</p>
            )}
            <div className="CS_block3"></div>
            <div className="CS_radio_block">
              <p className="radioQ"> Do you want to share the address of the suspect?</p>
              <input
                type="radio"
                className="CS_vi_radio_input2"
                checked={delayReporting === "yes"}
                onChange={() => setDelayReporting("yes")}
              />
              <label className="label">Yes</label>
              <input
                type="radio"
                className="CS_vi_radio_input2"
                checked={delayReporting === "no"}
                onChange={() => setDelayReporting("no")}
              />
              <label className="label">No</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckStatus;

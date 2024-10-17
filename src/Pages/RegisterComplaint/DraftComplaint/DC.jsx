import React, { useEffect, useState } from 'react';
import "./DC.css";
// import Em from "../../../components/Emergency/Em";
import UFPRed from "../../UserDetails/UserForm/UFP_red";
import UPBar from '../../UserDetails/Userprofilebar/UP_bar';
import { useNavigate } from 'react-router-dom';

const DC = () => {
  const navigate = useNavigate(); 
  const [complaints, setComplaints] = useState([]); // Change state name to complaints

  useEffect(() => {
    // Sample data to simulate complaints
    const data = [
      {
        userId: "Unknown User", // Default value since we're removing user authentication
        dateTime: "2024-05-07 10:30",
        place: "Instagram",
        complaintCategory: "Non-Financial Fraud",
        subCategory: "Sexual Harassment"
      },
      {
        userId: "Unknown User", // Default value
        dateTime: "2024-05-08 11:45",
        place: "",
        complaintCategory: "Financial Fraud",
        subCategory: "Bank Scams"
      },
      {
        userId: "Unknown User", // Default value
        dateTime: "2024-04-22 01:53",
        place: "Pune",
        complaintCategory: "Non-Financial Fraud",
        subCategory: "Ransomware"
      }
    ];
    setComplaints(data);
  }, []); // Removed dependency on currentUser

  const gotoComplaintPage = () => {
    navigate('/complaintdetails');
  };

  return (
    <div className="DC_component">
      <div className="DC_innercomponent">
        {/* <Em /> */}
        <div className="UD_up_bar"></div>
        <UPBar />
        <div className="UD_up_bar"></div>
        <UFPRed />
        <div className="UD_up_bar"></div>

        <div className="draft_table">
          <div className="table-container">
            <table className="datatable">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Date & Time</th>
                  <th>Place</th>
                  <th>Complaint Category</th>
                  <th>Sub Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((complaint, index) => (
                  <tr key={index}>
                    <td>{complaint.userId}</td>
                    <td>{complaint.dateTime}</td>
                    <td>{complaint.place}</td>
                    <td>{complaint.complaintCategory}</td>
                    <td>{complaint.subCategory}</td>
                    <td>
                      <button className='open_button' onClick={gotoComplaintPage}>
                        Open
                        <div className="arrow-wrapper">
                          <div className="arrow"></div>
                        </div>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DC;

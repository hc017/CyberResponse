import React, { useState, useRef } from "react";
import "./Suspect.css";
import { Link, useNavigate } from "react-router-dom";
// import Em from "../../components/Emergency/Em";
import UFPRed from "../UserDetails/UserForm/UFP_red";
import IDX from "./IDX";
import UPBar from "../UserDetails/Userprofilebar/UP_bar";

const SuspectD = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [suspectName, setSuspectName] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [fileChosen, setFileChosen] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [suspectData, setSuspectData] = useState([]);
  const fileInputRef = useRef(null); // Create a ref for the file input element
  const navigate = useNavigate();

  const handleAddSuspectToTable = () => {
    const newSuspect = {
      name: suspectName,
      option: selectedOption,
      id: idNumber,
      file: fileChosen,
    };
    setSuspectData([...suspectData, newSuspect]);
    setShowTable(true);
    // Clear form fields
    setSuspectName("");
    setSelectedOption("");
    setIdNumber("");
    setFileChosen("");
  };

  const handleSaveAndSubmit = () => {
    // Simulate saving data (replace this with your actual save logic if needed)
    console.log("Suspect data saved successfully:", suspectData);
    window.alert("Suspects added successfully!");

    // Clear suspect data after saving
    setSuspectData([]);
    setShowTable(false);
    navigate("/complaintdetails");
  };

  const handleDelete = (index) => {
    const updatedSuspectData = [...suspectData];
    updatedSuspectData.splice(index, 1);
    setSuspectData(updatedSuspectData);
  };

  const handleClearTable = () => {
    // Clear form fields
    setSuspectData([]);
    setShowTable(false);
    // Clear file input field
    fileInputRef.current.value = null;
    setSuspectName("");
    setSelectedOption("");
    setIdNumber("");
    setFileChosen("");
  };

  const handleFileUpload = (e) => {
    setFileChosen(e.target.files[0]?.name || "");
  };

  return (
    <div className="SD_component">
      <div className="SD_innercomponent">
        <div className="UD_up_bar"></div>
        <UPBar />
        <div className="UD_up_bar"></div>
        <UFPRed />
        <div className="UD_up_bar"></div>
        <IDX />
        <div className="SD_innerComp2">
          <div className="susdetail_bar">
            <p className="sus_text">Suspect Details</p>
          </div>
          <div className="UD_up_bar"></div>

          <div className="susdetail_bar1">
            <p className="sus_text2">
              Please share the details of the suspect. Any information provided
              will be kept confidential and may help during the investigation.
            </p>
          </div>

          <div className="sus_agree">
            <div className="sus_checkbox"></div>
            <input
              type="checkbox"
              className="ss_radio1"
              name="address"
              value="Yes"
              checked={isCheckboxChecked}
              onChange={() => setIsCheckboxChecked(!isCheckboxChecked)}
            />
            <p className="sus_text3">
              I would like the information about the suspected criminal provided by
              me to be shared with all agencies and organizations involved in
              prevention of cybercrime.
            </p>
          </div>

          {isCheckboxChecked && (
            <div>
              <div className="UD_up_bar"></div>
              <p className="sus_text3" id="text3">
                * Please do not share the suspect's mobile number in other fields.
              </p>
              <div className="suspectDetails">
                <div className="suspect_block">
                  <input
                    type="text"
                    className="SS_vi_input1"
                    placeholder="Suspect Name"
                    value={suspectName}
                    onChange={(e) => setSuspectName(e.target.value)}
                  />
                  <select
                    className="SS_vi_input2"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  >
                    <option value="">--Select--</option>
                    <option value="Option1">Option 1</option>
                    <option value="Option2">Option 2</option>
                    <option value="Option3">Option 3</option>
                  </select>
                  <input
                    type="number"
                    className="SS_vi_input3"
                    placeholder="ID Number"
                    value={idNumber}
                    onChange={(e) => setIdNumber(e.target.value)}
                  />
                  <button onClick={handleAddSuspectToTable} className="SS_button">Add</button>
                </div>
                {showTable && (
                  <div className="div_block2">
                    <table>
                      <thead>
                        <tr>
                          <th>Suspect Name</th>
                          <th>Selected Option</th>
                          <th>ID Number</th>
                          <th>File Chosen</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {suspectData.map((suspect, index) => (
                          <tr key={index}>
                            <td>{suspect.name}</td>
                            <td>{suspect.option}</td>
                            <td>{suspect.id}</td>
                            <td>{suspect.file}</td>
                            <td>
                              <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
              <div className="div_block"></div>
              <div className="suspect_bock2">
                <p className="sus_up_text">
                  Please upload any photograph of the suspect: <br /> (Upload
                  JPG/JPEG/PNG/PDF file of max 5 MB.)
                </p>
                <input type="file" className="input-file" id="sd_file" onChange={handleFileUpload} ref={fileInputRef} />
              </div>
            </div>
          )}
          <div className="div_block3"></div>
          <div className="ss_btns">
            <Link to={'/incidentdetails'} className="ss_save_btn1">Back</Link>
            <button onClick={handleClearTable} className="ss_save_btn3">Clear</button>
            <button onClick={handleSaveAndSubmit} className="ss_save_btn2"> Save and Submit </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuspectD;

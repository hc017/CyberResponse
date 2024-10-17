import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./ID_main.css";
import UFPRed from "../UserDetails/UserForm/UFP_red";
import UPBar from "../UserDetails/Userprofilebar/UP_bar";
import IDX from "./IDX";

const ID_main = () => {
  // const [complaintCategory, setComplaintCategory] = useState("");
  // const [subCategory, setSubCategory] = useState("");
  // const [categories, setCategories] = useState([]); // Removed unused state
  // const [subcategories, setSubcategories] = useState([]); // Removed unused state
  const [ICdob, setICdob] = useState("");
  const [ICplace, setICPlace] = useState("");
  const [ICemail, setICEmail] = useState("");
  const [other, setOther] = useState("");
  const [delayReporting, setDelayReporting] = useState("");
  const maxChars = 1500;
  const [inputValue, setInputValue] = useState("");
  const [charsLeft, setCharsLeft] = useState(maxChars);
  const navigate = useNavigate();

  const handleSaveAndSubmit = () => {
    const data = {
      other,
      DateTime: ICdob,
      Place: ICplace,
      Email: ICemail,
      Description: inputValue,
      delayReporting,
    };

    console.log("Data to save:", data);
    window.alert("Data added successfully!");
    navigate("/suspectdetails");
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setCharsLeft(maxChars - newValue.length);
  };

  return (
    <div className="ISD_component">
      <div className="ISD_innercomponent">
        <div className="UD_up_bar"></div>
        <UPBar />
        <div className="UD_up_bar"></div>
        <UFPRed />
        <div className="UD_up_bar"></div>
        <IDX />

        <div className="ISD_innerComp2">
          <div className="ISD_susdetail_bar">
            <p className="ISD_sus_text">Complaint/ Incident Details</p>
          </div>

          <div className="ISD_formComp_1">
            <div className="ISD_vertical_input">
              <p className="ISD_vi_text">Complaint Category:</p>
              <input
                type="text"
                className="ISD_vi_input"
                readOnly
              />
            </div>

            <div className="ISD_vertical_input">
              <p className="ISD_vi_text">Sub Category:</p>
              <input
                type="text"
                className="ISD_vi_input"
                readOnly
              />
            </div>

            <div className="ISD_block"></div>
          </div>

          <div className="ISDL_formComp_1">
            <div className="ISD_vertical_input">
              <p className="ISD_vi_text">Other (if any):</p>
              <input
                type="text"
                className="ISD_vi_input"
                placeholder="Enter your specific complaint category"
                value={other}
                onChange={(e) => setOther(e.target.value)}
              />
            </div>
            <div className="ISD_block"></div>
          </div>

          <div className="ISDL2_formComp_1">
            <div className="ISD_vertical_input">
              <p id="ISDT" className="ISD_vi_text">
                Appropriate date and time for incident/ receiving/ viewing of content:
              </p>
              <input
                type="datetime-local"
                className="ISD_vi_input"
                id="ISDI"
                value={ICdob}
                onChange={(e) => setICdob(e.target.value)}
              />
            </div>

            <div className="ISD_vertical_input">
              <p className="ISD_vi_text" id="ISD_vi_text_id">
                Delay in reporting?:
              </p>
              <div className="radio_id_btn">
                <input
                  type="radio"
                  className="radio_isd_btn"
                  checked={delayReporting === "yes"}
                  onChange={() => setDelayReporting("yes")}
                />
                <label className="radio_text_isd" htmlFor="yes">
                  Yes
                </label>
                <input
                  type="radio"
                  className="radio_isd_btn"
                  checked={delayReporting === "no"}
                  onChange={() => setDelayReporting("no")}
                />
                <label className="radio_text_isd" htmlFor="no">
                  No
                </label>
              </div>
            </div>

            <div className="ISD_vertical_input">
              <p className="ISD_vi_text">Where did the incident occur?:</p>
              <input
                type="text"
                className="ISD_vi_input"
                placeholder="Enter the place of incident occurred"
                value={ICplace}
                onChange={(e) => setICPlace(e.target.value)}
              />
            </div>

            <div className="ISD_vertical_input">
              <p className="ISD_vi_text">Email ID:</p>
              <input
                type="email"
                className="ISD_vi_input"
                placeholder="Enter your E-mail ID"
                value={ICemail}
                onChange={(e) => setICEmail(e.target.value)}
              />
            </div>

            <div className="ISD_vertical_input">
              <p className="ISD_vi_text" id="ISDE">
                Supporting Evidence (upload Image/ Media/ Pdf):
              </p>
              <input type="file" className="input-file" />
              <Link className="SS_button" id="ss_upload">
                Upload
              </Link>
            </div>

            <div className="ISD_block"></div>

            <div className="ISD_vertical_input" id="ISD_VI">
              <p className="ISD_vi_text" id="ISDA">
                Please provide any additional <br /> information about the incident:
              </p>
              <input
                type="text"
                className="ISD_vi_input"
                id="ISDVII"
                placeholder="Enter the information here"
                value={inputValue}
                onChange={handleInputChange}
              />
              <p className="ISD_lasttext">
                (Maximum of 1500 characters: {charsLeft} characters left)
              </p>
            </div>

            <Link className="ss_save_btn2" id="ss_b" onClick={handleSaveAndSubmit}>
              Save and Submit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ID_main;

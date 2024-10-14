import "./UserForm.css";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserForm = () => {
  const location = useLocation();
  const [RegLogI, setRegLogI] = useState("");
  const [RegName, setRegName] = useState("");
  const [RegMobile, setRegMobile] = useState("");
  const [ReDob, setRegDob] = useState("");
  const [RegGender, setRegGender] = useState("");
  const [RegEmail, setRegEmail] = useState("");
  const [RegRelation, setRegRelation] = useState("");
  const [RegHouseNo, setRegHouseNo] = useState("");
  const [RegStreetName, setRegStreetName] = useState("");
  const [RegColony, setRegColony] = useState("");
  const [RegTownCity, setRegTownCity] = useState("");
  const [RegTeheshil, setRegTeheshil] = useState("");
  const [RegPinCode, setRegPinCode] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [policeStation, setPoliceStation] = useState("");
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [famMemName, setFamMemName] = useState("");

  useEffect(() => {
    if (location.state) {
      setRegEmail(location.state.email);
    }
  }, [location.state]);

  const handleSaveAndSubmit = () => {
    // Check if any of the fields are empty
    if (!RegLogI || !title || !RegName || !RegMobile || !ReDob || !RegGender || !RegEmail || !RegRelation || !famMemName || !RegHouseNo || !RegStreetName || !RegColony || !RegTownCity || !RegTeheshil || !country || !state || !district || !policeStation || !RegPinCode) {
      alert("Please fill in all fields");
      return;
    }

    console.log("Data to be submitted:", {
      RegLogI,
      title,
      RegName,
      RegMobile,
      ReDob,
      RegGender,
      RegEmail,
      RegRelation,
      famMemName,
      RegHouseNo,
      RegStreetName,
      RegColony,
      RegTownCity,
      RegTeheshil,
      country,
      state,
      district,
      policeStation,
      RegPinCode,
    });

    // You can add your own logic here to handle the data (e.g., sending to an API)

    alert("Data added successfully!"); // Notify user about successful submission
    navigate("/incidentdetails"); // Redirect to the next page after successful submission
  };

  const titleOptions = [
    { id: 1, name: "Mr." },
    { id: 2, name: "Mrs." },
    { id: 3, name: "Miss" },
  ];

  const genders = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
    { id: 3, name: "Transgender" },
    { id: 4, name: "Prefer not to say" },
  ];

  const relations = [
    { id: 1, name: "Father" },
    { id: 2, name: "Mother" },
    { id: 3, name: "Spouse" },
  ];

  const countries = [
    { id: 1, name: "India" },
  ];

  const states = [
    { id: 1, name: "Maharashtra", countryName: "India" },
  ];

  const districts = [
    { id: 1, name: "Ahmednagar", stateName: "Maharashtra" },
    { id: 2, name: "Akola", stateName: "Maharashtra" },
    { id: 3, name: "Amravati", stateName: "Maharashtra" },
    // Add more districts as needed
  ];

  const policeStations = [
    { id: 1, name: "Ahmednagar City", districtName: "Ahmednagar" },
    { id: 2, name: "Ahmednagar Camp", districtName: "Ahmednagar" },
    { id: 3, name: "Jamkhed", districtName: "Ahmednagar" },
    // Add more police stations as needed
  ];

  return (
    <div className="UserF_component">
      <div className="UserF_inner_compnent">
        <div className="userform">
          <form onSubmit={(e) => { e.preventDefault(); handleSaveAndSubmit(); }}>
            <div className="vertical_input">
              <p className="vi_text">Login ID :</p>
              <input
                type="text"
                className="vi_input"
                placeholder="Enter your login ID"
                value={RegLogI}
                onChange={(e) => setRegLogI(e.target.value)}
              />
            </div>

            <div className="vertical_input">
              <p className="vi_text">Title :</p>
              <div className="title_dropdown">
                <select
                  name="title"
                  className="select_title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                >
                  <option value="">Select Title</option>
                  {titleOptions.map((title) => (
                    <option key={title.id} value={title.name}>
                      {title.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="vertical_input">
              <p className="vi_text">Name :</p>
              <input
                type="text"
                className="vi_input"
                placeholder="Enter your name"
                value={RegName}
                onChange={(e) => setRegName(e.target.value)}
              />
            </div>

            <div className="vertical_input">
              <p className="vi_text">Mobile :</p>
              <div className="two_fields">
                <input
                  type="text"
                  className="vi_input"
                  id="num_extension"
                  value="+91"
                  readOnly
                />
                <input
                  type="tel"
                  className="vi_input"
                  id="mob_num"
                  placeholder="Enter your mobile number"
                  value={RegMobile}
                  onChange={(e) => setRegMobile(e.target.value)}
                />
              </div>
            </div>

            <div className="vertical_input">
              <p className="vi_text">Date of Birth :</p>
              <input
                type="date"
                className="vi_input"
                value={ReDob}
                onChange={(e) => setRegDob(e.target.value)}
              />
            </div>

            <div className="vertical_input">
              <p className="vi_text">Gender :</p>
              <select
                className="vi_input"
                value={RegGender}
                onChange={(e) => setRegGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                {genders.map((gender) => (
                  <option key={gender.id} value={gender.name}>
                    {gender.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="vertical_input">
              <p className="vi_text">Email :</p>
              <input
                type="email"
                className="vi_input"
                value={RegEmail}
                onChange={(e) => setRegEmail(e.target.value)}
              />
            </div>

            <div className="vertical_input">
              <p className="vi_text">Relation :</p>
              <select
                className="vi_input"
                value={RegRelation}
                onChange={(e) => setRegRelation(e.target.value)}
              >
                <option value="">Select Relation</option>
                {relations.map((relation) => (
                  <option key={relation.id} value={relation.name}>
                    {relation.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="vertical_input">
              <p className="vi_text">Family Member Name :</p>
              <input
                type="text"
                className="vi_input"
                placeholder="Enter family member name"
                value={famMemName}
                onChange={(e) => setFamMemName(e.target.value)}
              />
            </div>

            {/* Permanent Address Section */}
            <h3>Permanent Address</h3>
            <div className="vertical_input">
              <p className="vi_text">House No :</p>
              <input
                type="text"
                className="vi_input"
                placeholder="Enter House No"
                value={RegHouseNo}
                onChange={(e) => setRegHouseNo(e.target.value)}
              />
            </div>

            <div className="vertical_input">
              <p className="vi_text">Street Name :</p>
              <input
                type="text"
                className="vi_input"
                placeholder="Enter Street Name"
                value={RegStreetName}
                onChange={(e) => setRegStreetName(e.target.value)}
              />
            </div>

            <div className="vertical_input">
              <p className="vi_text">Colony :</p>
              <input
                type="text"
                className="vi_input"
                placeholder="Enter Colony"
                value={RegColony}
                onChange={(e) => setRegColony(e.target.value)}
              />
            </div>

            <div className="vertical_input">
              <p className="vi_text">Town/City :</p>
              <input
                type="text"
                className="vi_input"
                placeholder="Enter Town/City"
                value={RegTownCity}
                onChange={(e) => setRegTownCity(e.target.value)}
              />
            </div>

            <div className="vertical_input">
              <p className="vi_text">Tehsil :</p>
              <input
                type="text"
                className="vi_input"
                placeholder="Enter Tehsil"
                value={RegTeheshil}
                onChange={(e) => setRegTeheshil(e.target.value)}
              />
            </div>

            <div className="vertical_input">
              <p className="vi_text">Country :</p>
              <select
                className="vi_input"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.id} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="vertical_input">
              <p className="vi_text">State :</p>
              <select
                className="vi_input"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.id} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="vertical_input">
              <p className="vi_text">District :</p>
              <select
                className="vi_input"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              >
                <option value="">Select District</option>
                {districts.map((district) => (
                  <option key={district.id} value={district.name}>
                    {district.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="vertical_input">
              <p className="vi_text">Police Station :</p>
              <select
                className="vi_input"
                value={policeStation}
                onChange={(e) => setPoliceStation(e.target.value)}
              >
                <option value="">Select Police Station</option>
                {policeStations.map((policeStation) => (
                  <option key={policeStation.id} value={policeStation.name}>
                    {policeStation.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="vertical_input">
              <p className="vi_text">Pin Code :</p>
              <input
                type="text"
                className="vi_input"
                placeholder="Enter Pin Code"
                value={RegPinCode}
                onChange={(e) => setRegPinCode(e.target.value)}
              />
            </div>

            <button type="submit" className="submit_button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;

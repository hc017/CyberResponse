import React, { useState, useEffect } from "react";
import { PDFViewer, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { jsPDF } from "jspdf";
import "./Complaint_details.css";
import UFPRed from "../UserDetails/UserForm/UFP_red";
import IDX from "./IDX";
import UPBar from "../UserDetails/Userprofilebar/UP_bar";
// import Em from "../../Components/Emergency/Em";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const ComplaintPDF = ({ incidents }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {incidents.map((incident, index) => (
        <View key={index} style={styles.section}>
          <Text>Incident {index + 1}</Text>
          <Text>Complaint Category: {incident.complaintCategory}</Text>
          <Text>Sub Category: {incident.subCategory}</Text>
          <Text>Date and Time: {incident.DateTime}</Text>
          <Text>Place: {incident.Place}</Text>
        </View>
      ))}
    </Page>
  </Document>
);

const Complaint_details = () => {
  const [incidentDetails, setIncidentDetails] = useState([]);
  const [showPDF, setShowPDF] = useState(false);

  useEffect(() => {
    const incidentID = localStorage.getItem("incidentID");
    if (incidentID) {
      const fetchedIncident = JSON.parse(localStorage.getItem(`incident_${incidentID}`));
      if (fetchedIncident) {
        setIncidentDetails([fetchedIncident]);
      } else {
        console.log("No incident details found.");
      }
    }
  }, []);

  const togglePDFPreview = () => {
    setShowPDF(!showPDF);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Complaint Details", 20, 30);
    incidentDetails.forEach((incident, index) => {
      const startY = 40 + index * 50;
      doc.setFontSize(14);
      doc.text(`Incident ${index + 1}`, 20, startY);
      doc.setFontSize(12);
      doc.text(`Complaint Category: ${incident.complaintCategory}`, 20, startY + 10);
      doc.text(`Sub Category: ${incident.subCategory}`, 20, startY + 20);
      doc.text(`Date and Time: ${incident.DateTime}`, 20, startY + 30);
      doc.text(`Place: ${incident.Place}`, 20, startY + 40);
    });
    doc.save("complaint_details.pdf");
  };

  return (
    <div className="CD_component">
      <div className="CD_innercomponent">
        {/* <Em/> */}
        <div className="UD_up_bar"></div>
        <UPBar />
        <div className="UD_up_bar"></div>
        <UFPRed />
        <div className="UD_up_bar"></div>
        <IDX />
        <div className="CSD_innerComp2">
          <div className="complaintdetails_bar">
            <p className="comp_text">Complaint Details</p>
          </div>
          <div>
            <button onClick={togglePDFPreview}>
              {showPDF ? "Hide PDF Preview" : "Show PDF Preview"}
            </button>
            {showPDF && (
              <div>
                <PDFViewer style={{ width: "100%", height: "500px" }}>
                  <ComplaintPDF incidents={incidentDetails} />
                </PDFViewer>
                <button onClick={downloadPDF}>Download PDF</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaint_details;

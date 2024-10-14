import React from 'react';
import '../ReportIncident.css';  // Ensure the CSS file name is correct
// import Em from '../../../components/Emergency/Em';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { GrLinkPrevious } from "react-icons/gr";

const Trolling = () => {
    // Function to handle click for reporting trolling incidents
    const handleClick = (category) => {
        // Here, you can replace this with any logic needed for handling reports
        console.log(`Reporting category: ${category}`);
        alert(`You selected to report: ${category}`);
    };

    return (
        <div className='ReportContainer'>
            {/* <Em /> */}
            <div className="Reporttheblock">
                <div className="FinalAlign">
                    <div className="Report-An-Incident-Immediately">Report An Incident Immediately</div>
                    <div className="ReportLine"></div>
                </div>
                <div className="TextBoxText">
                    <div className="forLinks">
                        <Link to="/" className="Home">
                            <span className="IncidentHeader">HomePage</span>
                        </Link>
                        <FaArrowRightLong className='ArrowIcon' />
                        <Link to="/reportincident" className="ReportIncident">
                            <span className="IncidentHeader">Report Incident</span>
                        </Link>
                        <FaArrowRightLong className='ArrowIcon' />
                        <Link to="/reportbutton" className="ReportButton">
                            <span className="IncidentHeader">Report</span>
                        </Link>
                        <FaArrowRightLong className='ArrowIcon' />
                        <Link to="/cyberbullying" className="ReportButton">
                            <span className="IncidentHeader">Cyber Bullying</span>
                        </Link>
                        <FaArrowRightLong className='ArrowIcon' />
                        <Link to="/trolling" className="ReportButton" onClick={() => handleClick("Trolling")}>
                            <span className="IncidentHeader">Trolling</span>
                        </Link>
                    </div>
                    <div className="AlignmentForVictimReport">
                        <Link to="/reportbutton" className="BoxVictimReport">
                            <span className="TextVictimReport">I report</span>
                        </Link>
                        <Link to="/cyberbullying" className="BoxVictimReport">
                            <span className="TextVictimReport">cyber bullying</span>
                        </Link>
                        <Link to="/trolling" className="BoxVictimReport">
                            <span className="TextVictimReport">and I am getting trolled</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="EndPageButton">
                <Link to="/cyberbullying" className="PreviousButton">
                    <GrLinkPrevious className='ArrowIcon' />
                    <div>Previous</div>
                </Link>
                <Link to="/incidentdetails" className="ContinueButton">
                    <FaArrowRightLong className='ArrowIcon' />
                    <div>Continue</div>
                </Link>
            </div>
        </div>
    );
}

export default Trolling;

import React from 'react';
import '../ReportIncident.css';  // Ensure the CSS file name is correct
// import Em from '../../../components/Emergency/Em';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { GrLinkPrevious } from "react-icons/gr";

const Older = () => {
    // Function to handle click for reporting incidents
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
                        <Link to="/victim" className="ReportButton">
                            <span className="IncidentHeader">I am a victim</span>
                        </Link>
                        <FaArrowRightLong className='ArrowIcon' />
                        <Link to="/18older" className="ReportButton">
                            <span className="IncidentHeader">I am older than 18 years</span>
                        </Link>
                    </div>
                    <div className="AlignmentForVictimReport">
                        <Link to="/victim" className="BoxVictimReport">
                            <span className="TextVictimReport">I am a victim</span>
                        </Link>
                        <Link to="/18older" className="BoxVictimReport" onClick={() => handleClick("18 older")}>
                            <span className="TextVictimReport">I am older than 18 years</span>
                        </Link>
                    </div>
                </div>
                <div className="NormalPagePrev">
                    <Link to="/victim" className="PreviousButton">
                        <GrLinkPrevious className='ArrowIcon' />
                        <div>Previous</div>
                    </Link>
                </div>
            </div>

            <div className="ButtonCSS">
                <Link to="/moneylaundering" className="ButtonReport" onClick={() => handleClick("Financial Frauds")}>
                    <span className="ReportText">Financial Fraud</span>
                </Link>
                <Link to="/nonfinancial" className="ButtonReport" onClick={() => handleClick("Non-financial Frauds")}>
                    <span className="ReportText">Non-Financial Fraud</span>
                </Link>
            </div>
        </div>
    );
}

export default Older;

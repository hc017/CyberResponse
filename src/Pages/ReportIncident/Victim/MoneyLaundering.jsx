import React from 'react';
import '../ReportIncident.css';
// import Em from '../../../components/Emergency/Em';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { GrLinkPrevious } from "react-icons/gr";

const MoneyLaudering = () => {
    const handleClick = (category) => {
        // Handle click for category selection (currently does nothing)
        console.log(`Category selected: ${category}`);
        // You can implement any additional logic here if needed
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
                        <FaArrowRightLong className='ArrowIcon' />
                        <Link to="/moneylaundering" className="ReportButton">
                            <span className="IncidentHeader">Financial Frauds</span>
                        </Link>
                    </div>
                    <div className="AlignmentForVictimReport">
                        <Link to="/victim" className="BoxVictimReport">
                            <span className="TextVictimReport">I am a victim</span>
                        </Link>
                        <Link to="/18older" className="BoxVictimReport">
                            <span className="TextVictimReport">I am older than 18 years</span>
                        </Link>
                        <Link to="/sh" className="BoxVictimReport">
                            <span className="TextVictimReport">I was scammed financially</span>
                        </Link>
                    </div>
                </div>
                <div className="NormalPagePrev">
                    <Link to="/18older" className="PreviousButton">
                        <GrLinkPrevious className='ArrowIcon' />
                        <div>Previous</div>
                    </Link>
                </div>
            </div>

            <div className="CSSForSmallerButton">
                <Link to="/upi" className="SmallerButtonCSS" onClick={() => handleClick("UPI Scams")}>
                    <span className="SmallerTextButton">UPI/Credit Card</span>
                </Link>
                <Link to="/bankscam" className="SmallerButtonCSS" onClick={() => handleClick("Bank Scams")}>
                    <span className="SmallerTextButton">Bank Scams</span>
                </Link>
                <Link to="/webscam" className="SmallerButtonCSS" onClick={() => handleClick("Website Scams")}>
                    <span className="SmallerTextButton">Website Scams</span>
                </Link>
            </div>
        </div>
    );
}

export default MoneyLaudering;

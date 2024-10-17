import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./Hero_section.css";
import { Container, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import HomeButtons from "./HomeButtons";

const Hero_section = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = useMemo(() => ["Cyber Threats", "Financial Frauds", "Cyber Crimes"], []);
  const period = 2000;

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [isDeleting, text, loopNum, toRotate, period]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [delta, tick]);

  return (
    <section className="banner" id="home">
      <Container>
        <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h1>{`Report `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Cyber Threats", "Financial Frauds", "Cyber Crimes" ]'><span className="wrap">{text}</span></span></h1>
              <p>Empowering Cybersecurity Through Automated Incident Categorization: Revolutionizing Response Efforts to Tackle Modern Threats. By leveraging cutting-edge automation technologies, our solution streamlines the process of incident sorting and prioritization, enabling cybersecurity teams to allocate resources efficiently and respond swiftly to emerging threats. Experience enhanced resilience in the face of evolving cyber challenges, ensuring the protection of critical assets and organizational continuity in today's dynamic digital environment.</p>
            </div>}
          </TrackVisibility>
        </Col>
        <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <HomeButtons/>
              </div>}
          </TrackVisibility>
        </Col>
      </Container>
    </section>
  )
}

export default Hero_section;

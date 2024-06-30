import React, { useState, useEffect, useRef } from "react";

import "./SectionOne.css";
import left from "../../../Images/about/gate-left1.png";
import right from "../../../Images/about/gate-right1.png";
import grass from "../../../Images/about/grass.png";
import Header from "../../Header/Header";

const SectionOne = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [scrollValuex, setScrollValuex] = useState(0);
  const textRef = useRef(null);  //wizard
  const leftRef = useRef(null);  //gate
  const rightRef = useRef(null);  //gate

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY * 1.3);
    };
    const handleScrollX = () => {
      setScrollValuex(window.scrollY * 1.2);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollX);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollX);
    };
  }, []);

  useEffect(() => {
    textRef.current.style.marginTop = `${scrollValue}px`;
    leftRef.current.style.left = `-${scrollValuex}px`;
    rightRef.current.style.left = `${scrollValuex}px`;
  }, [scrollValue, scrollValuex]);

  return (
    <div className="sectionOneAbout">
     <Header/>
      <div className="parallax">
        
        <img src={grass} id="grass" alt="grass" />
        <h1 ref={textRef}> WIZARD</h1>
        <img ref={leftRef} className="hide" src={left} id="left" alt="left" />
        <img ref={rightRef} className="hide" src={right} id="right" alt="right" />
        
      </div>
      
    </div>
  );
};

export default SectionOne;



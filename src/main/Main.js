import React, { useRef, useState } from "react";

// components
import Intro from "../screens/intro/Intro";

// styles
import styles from "./main.module.scss";

// images
import logo from "../assets/images/global/logo.svg";
import contactText from "../assets/images/global/contact-text.svg";
import contactIcon from "../assets/images/global/contact-icon.svg";

const Main = () => {
  const [cursorSize, setCursorSize] = useState("big");
  const cursor = useRef(null);

  const handleCursor = (e) => {
    cursor.current.style.left = e.pageX + "px";
    cursor.current.style.top = e.pageY + "px";
  };

  return (
    <>
      <div className={styles.container} onMouseMove={handleCursor}>
        <div
          className={styles.sidebar}
          onMouseOver={() => {
            cursor.current.style.transform = "scale(.475)";
          }}
          onMouseLeave={() => {
            cursor.current.style.transform = "scale(1)";
          }}
        >
          <img src={logo} alt="plasticbcn-replica-logo" />
          <div>
            <img src={contactText} alt="plasticbcn-replica-contactText" />
            <img src={contactIcon} alt="plasticbcn-replica-contactIcon" />
          </div>
        </div>
        <Intro />
        <div
          className={styles.hamburger}
          onMouseOver={() => {
            cursor.current.style.transform = "scale(.475)";
          }}
          onMouseLeave={() => {
            cursor.current.style.transform = "scale(1)";
          }}
        >
          <div></div>
          <div></div>
        </div>
        <div className={styles.cursor} ref={cursor}></div>
      </div>
    </>
  );
};

export default Main;

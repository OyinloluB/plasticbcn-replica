import React, { useRef } from "react";

// components
import Intro from "../screens/intro/Intro";

// styles
import styles from "./main.module.scss";

// images
import logo from "../assets/images/global/logo.svg";
import contactText from "../assets/images/global/contact-text.svg";
import contactIcon from "../assets/images/global/contact-icon.svg";

const Main = () => {
  const cursor = useRef(null);

  const handleCursor = (e) => {
    cursor.current.style.left = e.pageX + "px";
    cursor.current.style.top = e.pageY + "px";
  };

  return (
    <>
      <div className={styles.container} onMouseMove={handleCursor}>
        <div className={styles.sidebar}>
          <img src={logo} alt="plasticbcn-replica-logo" />
          <div>
            <img src={contactText} alt="plasticbcn-replica-contactText" />
            <img src={contactIcon} alt="plasticbcn-replica-contactIcon" />
          </div>
        </div>
        <Intro />
        <div className={styles.hamburger}>
          <div className={styles.wrapper}>
            <div className={styles.menu}></div>
            <div className={styles.menu}></div>
          </div>
          <div className={styles.cursor} ref={cursor}>
            <span>Scroll</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

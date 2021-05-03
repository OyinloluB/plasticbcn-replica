import React, { useRef, useEffect } from "react";

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
  const logoHover = useRef(null);

  const handleCursor = (e) => {
    cursor.current.style.left = e.pageX + "px";
    cursor.current.style.top = e.pageY + "px";
  };

  const handleMagnet = (e) => {
    let x = logoHover.current.offsetX;
    let y = logoHover.current.offsetY;
    let width = logoHover.current.offsetWidth;
    let height = logoHover.current.offsetHeight;
    let move = 30;
    let xMove = (x / width) * (move * 2) - move;
    let yMove = (y / height) * (move * 2) - move;

    logoHover.current.style.transform = `translate(${xMove}px, ${yMove}px)`;

    console.log(x, y, width, height, xMove, yMove);

    // if (e.type === "mouseleave") logoHover.current.style.transform = "";
  };

  const stopMagnet = (e) => {
    logoHover.current.style.transform = "";
  };

  return (
    <>
      <div className={styles.container} onMouseMove={handleCursor}>
        <div className={styles.sidebar}>
          <img
            src={logo}
            ref={logoHover}
            alt="plasticbcn-replica-logo"
            onMouseMove={handleMagnet}
            onMouseLeave={stopMagnet}
          />
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

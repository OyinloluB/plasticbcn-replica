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
  let options = {
    distance: 100,
  };
  let width;
  let height;
  let diagonal;
  let maxDistance;

  const handleCursor = (e) => {
    cursor.current.style.left = e.pageX + "px";
    cursor.current.style.top = e.pageY + "px";
  };

  useEffect(() => {
    width = logoHover.offsetWidth;
    height = logoHover.offsetHeight;
    diagonal = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
    maxDistance = (diagonal + options.distance) / 2;
    logoHover.style.transition = "0.6s cubic-bezier(0.075, 0.82, 0.165, 1)";
  }, []);

  const handleMagnet = () => {
    if (options.distance < maxDistance) {
      let percent = 1 - options.distance / maxDistance;
      logoHover.style.transform = `
            translate3d(${Math.round(x * percent)}px, ${Math.round(
        y * percent
      )}px, 0) 
            rotateY(${Math.round(x * percent)}deg) 
            rotateX(${Math.round(y * percent)}deg)
          `;
    } else {
      logoHover.style.transform = "";
    }
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

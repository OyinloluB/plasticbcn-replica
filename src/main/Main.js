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
  const plasticLogo = useRef(null);
  const contact = useRef(null);
  const menu = useRef(null);

  const handleCursor = (e) => {
    cursor.current.style.left = e.pageX + "px";
    cursor.current.style.top = e.pageY + "px";
  };

  const handleMagnet = (e, item) => {
    let x = e.nativeEvent.offsetX;
    let y = e.nativeEvent.offsetY;
    let width = item.current.offsetWidth;
    let height = item.current.offsetHeight;
    let move = 30;
    let xMove = (x / width) * (move * 2) - move;
    let yMove = (y / height) * (move * 2) - move;

    item.current.style.transform = `translate(${xMove}px, ${yMove}px)`;
  };

  const stopMagnet = (item) => {
    item.current.style.transform = "";
  };

  return (
    <>
      <div className={styles.navContent}></div>
      <div className={styles.container} onMouseMove={handleCursor}>
        <div className={styles.sidebar}>
          <div
            ref={plasticLogo}
            onMouseMove={(e) => handleMagnet(e, plasticLogo)}
            onMouseLeave={() => stopMagnet(plasticLogo)}
          >
            <img src={logo} alt="plasticbcn-replica-logo" />
          </div>
          <div
            ref={contact}
            onMouseMove={(e) => handleMagnet(e, contact)}
            onMouseLeave={() => stopMagnet(contact)}
          >
            <img src={contactText} alt="plasticbcn-replica-contactText" />
            <img src={contactIcon} alt="plasticbcn-replica-contactIcon" />
          </div>
        </div>
        <Intro />
        <div className={styles.hamburger}>
          <div
            className={styles.wrapper}
            ref={menu}
            onMouseMove={(e) => handleMagnet(e, menu)}
            onMouseLeave={() => stopMagnet(menu)}
          >
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

import React, { useRef, useState } from "react";

// components
import Intro from "../screens/intro/Intro";
import Navbar from "../components/navigation/Navbar";

// styles
import styles from "./main.module.scss";

// images
import logo from "../assets/images/global/logo.svg";
import logoWhite from "../assets/images/global/logo-white.svg";
import contactText from "../assets/images/global/contact-text.svg";
import contactIcon from "../assets/images/global/contact-icon.svg";

const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const cursor = useRef(null);
  const plasticLogo = useRef(null);
  const contact = useRef(null);
  const menu = useRef(null);
  const menuWrapper = useRef(null);
  const topMenuLine = useRef(null);
  const bottomMenuLine = useRef(null);
  const overlay = useRef(null);

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

  const openOverlay = () => {
    setMenuOpen(true);

    overlay.current.style.height = "100%";
    menuWrapper.current.style.zIndex = "1";
    menuWrapper.current.style.transition = "0.25s";
    topMenuLine.current.style.transform = "translateY(3.5px) rotate(45deg)";
    topMenuLine.current.style.background = "#ffffff";
    topMenuLine.current.style.transition = "0.25s";
    bottomMenuLine.current.style.transform =
      "translateX(0) translateY(-3.5px) rotate(-45deg)";
    bottomMenuLine.current.style.background = "#ffffff";
    bottomMenuLine.current.style.width = "22px";
    bottomMenuLine.current.style.transition = "0.25s";
  };

  const closeOverlay = () => {
    setMenuOpen(false);

    overlay.current.style.height = "0%";
    menuWrapper.current.style.zIndex = "unset";
    topMenuLine.current.style.transform = "unset";
    topMenuLine.current.style.background = "#000000";
    bottomMenuLine.current.style.transform = "unset";
    bottomMenuLine.current.style.background = "#000000";
    bottomMenuLine.current.style.width = "16px";
  };

  return (
    <div className={styles.container} onMouseMove={handleCursor}>
      <Navbar overlay={overlay} />
      <div className={styles.container_wrapper}>
        <div className={styles.sidebar}>
          <div
            ref={plasticLogo}
            onMouseMove={(e) => handleMagnet(e, plasticLogo)}
            onMouseLeave={() => stopMagnet(plasticLogo)}
          >
            <img
              src={menuOpen ? logoWhite : logo}
              alt="plasticbcn-replica-logo"
            />
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
        <div className={styles.hamburger} ref={menuWrapper}>
          <div
            className={styles.wrapper}
            ref={menu}
            onMouseMove={(e) => handleMagnet(e, menu)}
            onMouseLeave={() => stopMagnet(menu)}
            onClick={!menuOpen ? openOverlay : closeOverlay}
          >
            <div className={styles.menu} ref={topMenuLine}></div>
            <div className={styles.menu} ref={bottomMenuLine}></div>
          </div>
          <div className={styles.cursor} ref={cursor}>
            {menuOpen ? "" : <span>Move</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

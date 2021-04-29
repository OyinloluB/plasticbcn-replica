import React from "react";

import styles from "./intro.module.scss";

const Intro = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>Plastic is an award-winning international agency.</h2>
        <h1>
          <span className={styles.fixed}>We create remarkable</span>
          <span className={styles.animated}></span>
        </h1>
        <button className={styles.cta}>Our showreel</button>
      </div>
    </div>
  );
};

export default Intro;

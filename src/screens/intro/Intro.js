import React from "react";

import styles from "./intro.module.scss";

const Intro = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>Plastic is an award-winning international agency.</h2>
        <h1 className={styles.fixed}>We create remarkable</h1>
        <h1 className={styles.animatedText}>
          <span className={styles.animatedText_firstword}>
            <span className={styles.animatedText_word1}>d</span>
            <span className={styles.animatedText_word2}>i</span>
            <span className={styles.animatedText_word3}>g</span>
            <span className={styles.animatedText_word4}>i</span>
            <span className={styles.animatedText_word5}>t</span>
            <span className={styles.animatedText_word6}>a</span>
            <span className={styles.animatedText_word7}>l</span>
          </span>
          <span className={styles.animatedText_secondword}>
            <span className={styles.animatedText_word8}>p</span>
            <span className={styles.animatedText_word9}>r</span>
            <span className={styles.animatedText_word10}>o</span>
            <span className={styles.animatedText_word11}>d</span>
            <span className={styles.animatedText_word12}>u</span>
            <span className={styles.animatedText_word13}>c</span>
            <span className={styles.animatedText_word14}>t</span>
            <span className={styles.animatedText_word15}>s</span>
            <span className={styles.animatedText_word16}>.</span>
          </span>
        </h1>
        <button className={styles.cta}>Our showreel</button>
      </div>
    </div>
  );
};

export default Intro;

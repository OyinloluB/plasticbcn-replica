import React from "react";

import styles from "./navbar.module.scss";

const Navigation = ({ overlay }) => {
  return (
    <div className={styles.navContent} ref={overlay}>
      <div>
        <div>
          <p>Some text</p>
        </div>
        <div>
          <p>Some text</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

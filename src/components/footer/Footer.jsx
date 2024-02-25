import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>lamadev</div>
      <div className={styles.text}></div>
      Lama creative thoughts agency All rights reserved.
    </div>
  );
};

export default Footer;

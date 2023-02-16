import React from "react";
import styles from "@/styles/Home.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.header__left}>AI healthcare</div>
        <div className={styles.header__right}>About us</div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.header__left}>
          <Image src="/logo.jpg" alt="AI healthcare" width={130} height={90} />
        </div>
        <div className={styles.header__right}>About us</div>
      </div>
    </header>
  );
};

export default Header;

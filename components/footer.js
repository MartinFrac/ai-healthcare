import React from "react";
import styles from '@/styles/Home.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__left}>
          <div>AI healthcare</div>
          <div className={styles.copyright}>© Group 22 | 2023 | Privacy</div>
        </div>
        <div className={styles.footer__right}>
          <div>
            <h3>Risk</h3>
            <ul>
              <li>risk1</li>
              <li>risk2</li>
            </ul>
          </div>
          <div>
            <h3>Risk</h3>
            <ul>
              <li>risk1</li>
              <li>risk2</li>
            </ul>
          </div>
          <div>
            <h3>Risk</h3>
            <ul>
              <li>risk1</li>
              <li>risk2</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

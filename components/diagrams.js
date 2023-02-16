import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

const Diagrams = () => {
  return (
    <div className={styles.diagrams}>
      <Image
        src="/hipaa.png"
        alt="no diagrams"
        width={300}
        height={200}
      />
      <Image
        src="/hitech.png"
        alt="no diagrams"
        width={350}
        height={200}
      />
      <Image
        src="/gdpr.png"
        alt="no diagrams"
        width={300}
        height={200}
      />
    </div>
  );
};

export default Diagrams;

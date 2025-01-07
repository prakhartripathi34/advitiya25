import React from "react";
import Image from "next/image";
import styles from "./SponsorCard.module.css";

export default function SponsorCard({ logo, name }) {
  return (
    <div className={styles.card}>
      <Image
        src={logo}
        alt={name || "Sponsor Logo"}
        width={100}
        height={100}
        className={styles.logo}
      />
      <span className={styles.name}>{name}</span>
    </div>
  );
}

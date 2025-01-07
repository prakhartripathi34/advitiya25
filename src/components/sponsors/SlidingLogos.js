import React from "react";
import styles from "./SlidingLogos.module.css";

//update logoCount here too
const SlidingLogos = ({ logoCount = 16, direction = "normal" }) => {
  const logos = Array.from({ length: logoCount }, (_, index) => ({
    src: `/sponsors/companylogos/logo${index + 1}.png`,
    alt: `Logo ${index + 1}`,
  }));

  // Duplicate logos
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={`${styles.marqueeContainer} overflow-hidden`}>
      <div
        className={styles.marquee}
        style={{
          animationPlayState: "running",
          animationDirection: direction,
          animationDuration: "30s",
          animationIterationCount: "infinite",
        }}
      >
        <div className={`${styles.logoWrapper} flex`}>
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className={`${styles.logoItem}`}>
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${styles.logoImage} object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingLogos;

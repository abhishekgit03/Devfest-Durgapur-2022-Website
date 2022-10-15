import React from "react";
import styles from "./SponsorCard.module.scss";

const SponsorCard = ({ url, sponsor }) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={url} alt="" />
      </div>
      <div
        className={
          sponsor === "Title Sponsor"
            ? styles.title
            : sponsor === "Gold Sponsor"
            ? styles.goldtitle
            : styles.silvertitle
        }
      >
        <h2>{sponsor}</h2>
      </div>
    </div>
  );
};

export default SponsorCard;

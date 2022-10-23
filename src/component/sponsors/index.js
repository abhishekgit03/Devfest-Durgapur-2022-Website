import React from "react";
import SponsorCard from "../../micro-component/SponsorCard/SponsorCard";
import styles from "./sponsors.module.scss";

const Sponsors = () => {
  return (
    <div className={styles.background}>
      <div className={styles.head}>
        <h1 className={styles.title}>Our Sponsors</h1>
        <p className={styles.subtitle}>For sponsorship proposals drop your email at support@gdgdurgapur.in</p>
      </div>
      <div className={styles.sponsorRow}>
        <SponsorCard
         
          url="https://developers.google.com/site-assets/images/home/developers-social-media.png"
          sponsor="Title Sponsor"
        />
        <SponsorCard
        
          url="https://i.ibb.co/WKjcHVd/left-image1.png"
          sponsor="Gold Sponsor"
        />
        <SponsorCard
        
          url="https://static.livebooks.com/f919bf8398a44c1ab7018265315e020f/i/ba2e915588db42459f3aaa75e1ac5d63/1/4SoifmQp7LJ6yDtMuFY2x/1_0_702_1coming_soon.jpg"
          sponsor="Silver Sponsor"
        />
      </div>
    </div>
  );
};

export default Sponsors;

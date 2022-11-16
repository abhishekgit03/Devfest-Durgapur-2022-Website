import React from "react";
import SponsorCard from "../../micro-component/SponsorCard/SponsorCard";
import styles from "./sponsors.module.scss";
import GMClogo from "../../assets/GMCLogo.png"
import offseclogo from "../../assets/offsecLogo.jpg"
import girlscriptlogo from "../../assets/girlscript.jpeg"
import hack4bengal from "../../assets/hack4bengal.png"
import ocd from  "../../assets/ocd.png"
import devworld from  "../../assets/devworld.png"
import devs from  "../../assets/Devs.png"
import GDSCbcrec from  "../../assets/GDSCbcrec.png"
import GDSCnit from  "../../assets/GDSCnit.png"
import codecu from  "../../assets/codecu.jfif"
import gemsDAO from  "../../assets/gemsDAO.png"
import HackForCode from  "../../assets/HackForCode.jpg"
import algo from  "../../assets/algo.jfif"



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
      <div className={styles.others}>
        <h1>Other Sponsors</h1>
        <div className={styles.logos}>
          <img src="https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.png" alt="JetBrains Logo (Main) logo." className={styles.otherSponsors}/>
          <img src={GMClogo} alt="Offensive Security" className={styles.otherSponsors}/>
          <img src={offseclogo} alt="Offensive Security" className={styles.otherSponsors}/>
          </div>
      </div>
      <div className={styles.others}>
        <h1>Community Partners</h1>
        <div className={styles.logos}>
          <img src={girlscriptlogo} alt="Girlscript" className={styles.otherSponsors}/>
          <img src="https://pbs.twimg.com/profile_images/1275851790991405056/7shBoO_T_400x400.jpg" alt="FlutterKolkata" className={styles.otherSponsors}/>
          <img src={hack4bengal} alt="hack4bengal" className={styles.otherSponsors}/>
          <img src={ocd} alt="ocd" className={styles.otherSponsors}/>
          <img src={devworld} alt="devworld" className={styles.otherSponsors}/>
          <img src={devs} alt="DevsDungeons" className={styles.otherSponsors}/>
          <img src={GDSCbcrec} alt="GDSCbcrec" className={styles.otherSponsors}/>
          <img src={GDSCnit} alt="GDSCnit" className={styles.otherSponsors}/>
          <img src={codecu} alt=" codecu" className={styles.otherSponsors}/>
          <img src={gemsDAO} alt=" gemsDAO" className={styles.otherSponsors}/>
          <img src={HackForCode} alt="HackForCode" className={styles.otherSponsors}/>
          <img src={algo} alt="algo" className={styles.otherSponsors}/>
         
          </div>
      </div>
    </div>
  );
};

export default Sponsors;

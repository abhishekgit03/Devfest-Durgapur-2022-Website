import React from "react";
import styles from "./whatIs.module.scss";

const WhatIs = () => {
  return (
    <div className={styles.background}>
      <h1 className={styles.title}>What is DevFest?</h1>
      <div className={styles.container}>
        <img
          src="https://3.bp.blogspot.com/-GAS-lAxh9QU/W05NdNNbKlI/AAAAAAAAF8Y/Q92qiztup9AJ-f94RjweONR-DJ5VTTP8ACLcBGAs/s1600/_25A9606-2image1.jpg"
          alt=""
          className={styles.img}
        />
        <div className={styles.right}>
          <h5 className={styles.details}>
            DevFest is an annual decentralized tech conference hosted by the
            Google Developer Groups (GDG) community. GDGs host these events
            around the globe. DevFest 2022 marks the 11th year of DevFest and
            represents the beginning of the second decade of the GDG community.
            Through DevFest, you can continue to explore how Google's suite of
            developer tools can expand the impact of local tech professionals
            and developers like you around the world. Whether you're passionate
            about finding new opportunities, elevating your knowledge on the
            latest Google developer tools, or exploring how to use Google
            technologies to generate social and economic impact, DevFest offers
            an amazing platform for developers to connect locally, learn, and
            build on Google's tools.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default WhatIs;

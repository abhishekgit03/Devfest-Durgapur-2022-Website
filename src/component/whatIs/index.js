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
            DevFests are local tech conferences hosted by Google Developer
            Groups (GDG) around the world. Each DevFest event is crafted by its
            local organizers to fit the needs and interests of its local
            developer community. Whether it be through hands-on learning
            experiences, technical talks delivered in local languages by
            experts, or by simply meeting fellow local developers, DevFest
            attendees learn how to build together and innovate on Google's
            developer tools.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default WhatIs;

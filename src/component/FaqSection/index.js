import React from "react";
import styles from "./FaqSection.module.scss";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "What is Devfest?",
      content: `DevFest is an annual decentralized tech conference hosted by the Google Developer Groups (GDG) community. GDGs host these events around the globe. DevFest 2022 marks the 11th year of DevFest and represents the beginning of the second decade of the GDG community. Through DevFest, you can continue to explore how Google's suite of developer tools can expand the impact of local tech professionals and developers like you around the world. Whether you're passionate about finding new opportunities, elevating your knowledge on the latest Google developer tools, or exploring how to use Google technologies to generate social and economic impact, DevFest offers an amazing platform for developers to connect locally, learn, and build on Google's tools.`,
    },
    {
      title: "What is Google Developer Groups (GDG)?",
      content: `Google Developer Groups (GDG) is the largest developer community in the world. Over 1000+ GDGs exist in 140+ countries around the globe. The program helps developers connect with one another and learn about building products on all Google platforms.Each GDG is a local community hub of professional developers who share expertise and passion for Google's developer technology. GDG communities coordinate community activities centered around helping developers learn, connect, and grow while building a strong sense of belonging to the local and global Google Developer Groups community`,
    },
    {
      title: "Who can register to Devfest?",
      content: ` Whether you're a student or a working professional, as long as you are enthusiastic about learning through various hands-on sessions or technical talks delivered in local languages by experts all around the globe or simply meeting fellow local developers, you're welcome to register for DevFest at no cost. `,
    },
    {
      title: "What is unique about Devfest?",
      content:
        "DevFest is the GDG program's annual globally distributed conference. Different from a meetup or speaker session, DevFests events cover multiple topics and offer a suite of activities that aim to help local developers come together to learn, build and understand the full suite of Google's developer tools. DevFest events happen during the second part of the year and offer a way to engage with new content from various Google product teams.",
    },
    {
      title: "How can I stay informed?",
      content:
        "Follow Google Developer Groups Durgapur on our social media platforms. The best way to stay updated is to search the Google Developer Group Durgapur page and join for latest updates.",
    },
  ],
};

const styless = {
  bgColor: "#202124",
  rowTitleColor: "white",
  rowContentColor: "white",
  arrowColor: "white",
};

const FAQ = () => {
  return (
    <div className={styles.background}>
      <div className={styles.left}>
        <h1 className={styles.title}>FAQ</h1>
        <h3 className={styles.subtitle}>Need answers?</h3>
        <h3 className={styles.subtitle}>Find them here!</h3>
        <h3 className={styles.details}>
          For any queries related to sponsorship, please reach
          <br /> out to us at <span>partners@gdgdurgapur.in</span> . Any
          question
          <br /> related to participation can be asked at <br />
          <span>info@gdgdurgapur.in </span>.
        </h3>
      </div>
      <div className={styles.faq}>
        <Faq data={data} styles={styless} />
      </div>
    </div>
  );
};
export default FAQ;

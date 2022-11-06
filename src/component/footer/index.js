import React from "react";
import styles from "./footer.module.scss";
const Footer= () => 
{
    return(
        <div className={styles.title}>
            <h1>Keep in touch for latest announcements!</h1>
            <div className={styles.socials}>
                <a href="https://www.linkedin.com/company/google-devloper-group-durgapur/mycompany/" target="_blank"><img src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png" className={styles.icon}/></a>
                <a href="https://www.instagram.com/gdg.durgapur" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" className={styles.icon}/></a>
                <a href="https://m.facebook.com/GDGDurgapur/" target="_blank"><img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" className={styles.icon}/></a>
                
            </div>
            <div className={styles.footer}>
                    <a href="https://gdg.community.dev/gdg-durgapur/">About GDG Durgapur</a>
                    <a href="https://devfestindia.com/coc">Code of Conduct</a>
                    <a href="https://developers.google.com/community-guidelines">Community Guidelines</a>
                </div>
        </div>
    );
 
};
export default Footer;


  
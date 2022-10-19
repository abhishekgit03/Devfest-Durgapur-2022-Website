import React from "react";
import styles from "./footer.module.scss";
const Footer= () => 
{
    return(
        <div className={styles.title}>
            <h1>Keep in touch for latest announcements!</h1>
            <div className={styles.socials}>
                <a href="https://www.linkedin.com/company/google-devloper-group-durgapur/mycompany/" target="_blank"><img src="https://devfestkol2022.firebaseapp.com/static/media/linkedin.c74d5fc8f60e6a3922badaafa95f6b4a.svg" className={styles.icon}/></a>
                <a href="https://www.instagram.com/gdg.durgapur" target="_blank"><img src="https://devfestkol2022.firebaseapp.com/static/media/instagram.cb2c65c17411d202470e311582dbe2de.svg" className={styles.icon}/></a>
                <a href="https://m.facebook.com/GDGDurgapur/" target="_blank"><img src="https://devfestkol2022.firebaseapp.com/static/media/facebook.654c0a6ee537731e5cc07dc0124d8f9e.svg" className={styles.icon}/></a>
                
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


  
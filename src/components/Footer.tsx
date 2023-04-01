import React from 'react';
import styles from '@/styles/Footer.module.css';

function Footer() {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems : "center", justifyContent : "center", fontFamily : "var(--font-comforta)"}}>
            <ul className={styles.social}>
                <li>
                    <a href="https://www.linkedin.com/in/shashank-chaudhary-6a230915a/" target="_blank">
                        <img src="linkedin.svg" alt="LinkedIn" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/shashank-crypto" target="_blank">
                        <img src="github.png" alt="GitHub" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/shashank_k_chy" target="_blank">
                        <img src="twitter.png" alt="Twitter" />
                    </a>
                </li>
                <li>
                    <a href="mailto:shashank.k.chaudhary@gmail.com" target="_blank">
                        <img src="email.png" alt="Email" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/sha.sha.n.k/" target="_blank">
                        <img src="instagram.svg" alt="Instagram" />
                    </a>
                </li>
                </ul>
            Created by Shashank
        </div>
    );
}

export default Footer;
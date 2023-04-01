import React from 'react';
import styles from '@/styles/Footer.module.css';

import { FaGithubSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare,  } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {BiGitRepoForked} from 'react-icons/bi'

function Footer() {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems : "center", justifyContent : "center", fontFamily : "var(--font-comforta)"}}>
            <ul className={styles.social}>
                <li>
                    <a href="https://www.linkedin.com/in/shashank-chaudhary-6a230915a/" target="_blank">
                        {/* <img src="linkedin.svg" alt="LinkedIn" /> */}
                        <FaLinkedin className={styles.icons}/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/shashank-crypto" target="_blank">
                        <FaGithubSquare className={styles.icons}/>
                    </a>
                </li>
                <li>
                    <a href="mailto:shashank.k.chaudhary@gmail.com" target="_blank">
                        <MdEmail className={styles.icons}/>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/shashank_k_chy" target="_blank">
                        <FaTwitterSquare className={styles.icons}/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/sha.sha.n.k/" target="_blank">
                        <FaInstagramSquare className={styles.icons}/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/shashank-crypto/my-portfolio" target="_blank">
                        <BiGitRepoForked className={styles.icons}/>
                    </a>
                </li>
                </ul>
            Created by Shashank
        </div>
    );
}

export default Footer;
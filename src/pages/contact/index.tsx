import React from 'react';
import styles from '@/styles/Contact.module.css';
import Head from 'next/head';

function Contacts () {
    return (
        <div className={styles.contact}>
            <Head>
                <title>Contact</title>
            </Head>
            <h1>Let's <span className={styles.highlight}>Connect</span></h1>
            <p>Feel free to reach out to me on any of the platforms below.</p>
            <ul className={styles.socials}>
                <li>
                    <a href="https://www.linkedin.com/in/shashank-chaudhary-6a230915a/" target="_blank">
                        <img src="linkedin.svg" alt="LinkedIn" />
                        Shashank Chaudhary
                    </a>
                </li>
                <li>
                    <a href="https://github.com/shashank-crypto" target="_blank">
                        <img src="github.png" alt="GitHub" />
                        shashank-crypto
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/shashank_k_chy" target="_blank">
                        <img src="twitter.png" alt="Twitter" />
                        Shashank Chaudhary
                    </a>
                </li>
                <li>
                    <a href="mailto:shashank.k.chaudhary@gmail.com" target="_blank">
                        <img src="email.png" alt="Email" />
                        shashank.k.chaudhary@gmail.com
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/sha.sha.n.k/" target="_blank">
                        <img src="instagram.svg" alt="Instagram" />
                        sha.sha.n.k
                    </a>
                </li>

            </ul>
        </div>
    );
}

export default Contacts;
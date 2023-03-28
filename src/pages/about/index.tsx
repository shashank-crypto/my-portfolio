import React from 'react';
import Image from 'next/image';
import styles from '@/styles/About.module.css';
import AboutSvg from '@/components/AboutSvg';

function About() {
    return (
        <div className={styles.about}>
            <div className={styles.top}>
                <div className={styles.intro}>
                    <h1>Hey there,</h1>
                    <h1>I am <span className={styles.myname}>Shashank</span></h1>
                </div>
                <img src='aboutme.svg'/>

            </div>
                <div className={styles.aboutme}>
                        A full stack developer (prefers backend) with a passion for solving real-world problems. Loves diving into complex challenges and finding elegant, efficient solutions. <br/>
                        Have (almost) completed BTech in <span>Information Technology</span> at <span>Vellore Institute of Technology</span>. Have worked on several projects and have worked with several languages such as <span>Python, JS, Go, Solidity and Java</span>. <br/>
                        
                        I love problem solving but I also love to ask people how my photos look right after I take them. Whenever I see a beautiful sky, I take my phone out and start acting like a serious and high priced photographer. I also like to buy amazing books (emphasis on "buy").<br/>
                </div>
        </div>
    );
}

export default About;
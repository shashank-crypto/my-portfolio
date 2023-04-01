import React from 'react';
import Image from 'next/image';
import styles from '@/styles/About.module.css';
import GitHubCalendar from "react-github-calendar";

function About() {
    return (
        <div className={styles.about}>
            <div className={styles.top}>
                <div className={styles.intro}>
                    <h1>Hey there,</h1>
                    <h1>I am <span className={styles.myname}>Shashank</span></h1>
                </div>
                <img src='aboutme2.svg' width="564.8103" height="449.94076"/>

            </div>
            <div className={styles.aboutme}>
                <div className={styles.whoami}>
                    <h1>Who am I</h1>
                    <div className={styles.aboutinfo}>
                            A full stack developer (prefers backend) with a passion for solving real-world problems. Love diving into complex challenges and finding elegant, efficient solutions. <br/><br/>
                            Have (almost) completed B.Tech. in <span>Information Technology</span> at <span>Vellore Institute of Technology</span>. Have worked on several projects and with several languages such as <span>Python, JS, Go, Solidity and Java </span>but not only limited to these. <br/><br/>
                            
                            I love problem solving but I also love to ask people how my photos look right after I take them. Whenever I see a beautiful sky, I take my phone out and start acting like a serious and high priced photographer. I also like to buy amazing books (emphasis on "buy").<br/><br/>
                    </div>
                </div>
                <svg width="365px" height="372px" viewBox="0 0 365 372" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="img1" patternUnits="objectBoundingBox" width="100%" height="100%">
                            <image href="me1.png" x="-220" y="-30" width="650px" height="650px" />
                        </pattern>
                        <pattern id="img3" patternUnits="userSpaceOnUse" width="100%" height="100%">
                            <circle cx="250" cy="90" r="120" fill="green" />
                        </pattern>
                    </defs>
                    <circle cx="230" cy="120" r="120" fill="#E2D784" />
                    <path d="M178.746 371C281.059 371 364 288.173 364 186S328.634 1 178.746 1C28.857 1 65.06 129 24.004 186c-76.087 105.633 52.429 185 154.742 185z" stroke="#EA607E" fill="none" fillRule="evenodd" strokeWidth="2px"></path>
                    <path d="M 178.746 371 C 281.059 371 364 288.173 364 186 S 328.634 1 178.746 1 C 74 -92 -117 35 24.004 186 c -76.087 105.633 52.429 185 154.742 185 z" stroke="none" fill="url(#img1)" fillRule="evenodd"></path>
            </svg>
          </div>
            <blockquote className={styles.otroblockquote}>
            Yesterday is history, tomorrow is a mystery, but today is a gift, that is why we call it the present. <br/>
            <span>Master Oogway</span>
        </blockquote>
          <div className={styles.skillSet}>
            <h1>My Skill Set</h1>
            <div className={styles.skills}>
            <div className={styles.skill}>
                    <img src='skills/js.svg'/>
                </div>
                <div className={styles.skill}>
                    <img src='skills/solidity.svg'/>
                </div>
                <div className={styles.skill}>
                    <img src='skills/python.svg'/>
                </div>
                <div className={styles.skill}>
                    <img src='skills/java.svg'/>
                </div>
                <div className={styles.skill}>
                    <img src='skills/nodejs.svg'/>
                </div>
                <div className={styles.skill}>
                    <img src='skills/react.svg'/>
                </div>
                <div className={styles.skill}>
                    <img src='skills/django.svg'/>
                </div>
                <div className={styles.skill}>
                    <img src='skills/aws.svg'/>
                </div>
                <div className={styles.skill}>
                    <img src='skills/git.svg'/>
                </div>
                <div className={styles.skill}>
                    <img src='skills/mysql.svg'/>
                </div>
                <div className={styles.skill}>
                    <img src='skills/mongo.png'/>
                </div>
                <div className={styles.skill}>
                    <img src='skills/redis.svg'/>
                </div>
                <div className={styles.skill}>
                    <img src='skills/postman.png'/>
                </div>
                <div className={styles.skill}>
                    <img src='skills/docker.svg'/>
                </div>
                <div className={styles.skill}>
                    <img src='skills/linux.png'/>
                </div>
          </div>
          </div>
          <div className={styles.github}>
            <h1><img src='skills/gh.svg'/>GitHub Contributions</h1>
            <GitHubCalendar
            username="shashank-crypto"
            blockMargin={6}
            blockSize={12}
            fontSize={16}
            />
        </div>
        </div>
    );
}

export default About;
import Head from 'next/head'
import { useState, useEffect } from 'react'
import db from '@/config/firebase'
import { getDoc, doc } from 'firebase/firestore'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Typewriter from 'typewriter-effect'

import {BsArrowRight,BsDash,BsCloudDownload} from 'react-icons/bs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [resumeLink, setResumeLink] = useState('https://drive.google.com/file/d/1zAAXx2w9W4BVSECKXkXjWfXerjrKHjNh/view?usp=sharing');

  useEffect(() => {
    const getResumeLink = async () => {
      const docRef = doc(db, 'portfolio-data', 'resume');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setResumeLink(docSnap.data().link);
      }
    }
    getResumeLink();
  }, [])

  const identification = ['a developer', 'a designer', 'an idea builder', 'a problem solver', 'a programmer' , 'a curious technologist', 'a tech enthusiast', 'a lifelong learner']

  return (
    <>
      <Head>
        <title>Shashank's Portfolio</title>
        <meta name="description" content="Portfolio landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={styles.main}>
        <section className={styles.head}>
          {/* I am a developer, designer, and writer, an idea builder and a problem solver, a maker and a doer. I am a creative technologist, a digital artist, and a digital storyteller. I am a digital nomad, a world traveler, and a lifelong learner. I am a husband, a father, and a friend. I am a human being. */}
          <h1 className={styles.title}>
            I am &nbsp;
            <div className={styles.typewriter}>
            <Typewriter
              options={{
                strings: identification,
                autoStart: true,
                loop: true,
              }}
            />
            </div>
          </h1>
                 {/* ! add arrow button and know more link linking to about page  */}
          {/* <button className={styles.resume}> */}
          <a href="/about" className={styles.more}><BsDash/>More about me<BsArrowRight className={styles.move}/></a>
            {/* {/* <a href="/about" className={styles.resume}>RESUME</a> */}
            <a href={resumeLink} target="_blank" className={styles.resume}><BsCloudDownload/>&nbsp; RESUME</a> 
          {/* </button> */}
        </section>
      </main>
    </>
  )
}

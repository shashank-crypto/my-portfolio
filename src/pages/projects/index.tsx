import React from 'react';
import styles from '@/styles/Projects.module.css';

import experiences from '../api/experience.json'
import projects from '../api/project.json'

import Card from '@/components/Card';

import LineWithPoints from './LineWithPoints';
import Head from 'next/head';

function Projects () {

    return (
        <div className={styles.page}>
            <Head>
                <title>Experiences & Projects</title>
            </Head>
            {/* <LineWithPoints numPoints={Experiences.length} triangleIndex={2} /> */}
            <div className={styles.experiences}>
                <h1 style={{fontSize: "2rem"}}>Industry <span className={styles.highlight}>Experiences</span></h1>
                <div>
                    {experiences.map((experience) => (
                        <div key={experience.id} className={styles.experience}>
                            <h1>{experience.company}</h1>
                            <h2>{experience.designation}</h2>
                            <h3>{experience.from} - {experience.to}</h3>
                            <div className={styles.tags}>
                                {(experience?.techStack) ? experience.techStack.map((tech, index) => 
                                (<span key={index}>{tech}</span>)) : null}
                            </div>
                            <ul style={{textAlign: "left", fontSize: "1.1rem"}}>{experience.description.map((point, index) => {
                                return <li key={index} dangerouslySetInnerHTML={ {__html: point} }/>
                            })}</ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.projects}>
                <h1>Personal <span className={styles.highlight}>Projects</span></h1>
                <div className={styles.project}>
                    {projects.map((project) => (
                        <Card project={project} key={project.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
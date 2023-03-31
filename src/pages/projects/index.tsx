import React from 'react';
import styles from '@/styles/Projects.module.css';

import Experiences from '../api/experience.json'
import LineWithPoints from './LineWithPoints';

function Projects () {

    return (
        <div className={styles.page}>
            {/* <LineWithPoints numPoints={Experiences.length} triangleIndex={2} /> */}
            <div className={styles.experiences}>
                <h1 style={{fontSize: "2rem"}}>Industry <span className={styles.highlight}>Experiences</span></h1>
                <div>
                    {Experiences.map((experience) => (
                        <div key={experience.id} className={styles.experience}>
                            <h1>{experience.company}</h1>
                            <h2>{experience.designation}</h2>
                            <h3>{experience.from} - {experience.to}</h3>
                            <div className={styles.tags}>
                                {(experience?.techStack) ? experience.techStack.map((tech, index) => 
                                (<span key={index}>{tech}</span>)) : null}
                            </div>
                            <ul style={{textAlign: "left"}}>{experience.description.map((point, index) => {
                                return <li key={index}>{point}</li>
                            })}</ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.projects}>
                <h1>Personal <span className={styles.highlight}>Projects</span></h1>
            </div>
        </div>
    );
}

export default Projects;
import React from "react";
import { useEffect, useState } from "react";
import { getDocs, collection, getDoc } from "firebase/firestore";
import styles from "@/styles/Projects.module.css";
import { FidgetSpinner } from "react-loader-spinner";

// import experiences from '../api/experience.json'
// import projects from '../api/project.json'

import db from "@/config/firebase";

import Card from "@/components/Card";

import LineWithPoints from "./LineWithPoints";
import Head from "next/head";

type Experience = {
    company: string;
    designation: string;
    from: string;
    to: string;
    techStack: string[];
    description: string[];
};

function Projects() {
    const [experiences, setExperiences] = useState([] as any);
    const [projects, setProjects] = useState([] as any);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const experienceSnapshot = await getDocs(
                collection(db, "experience")
            );
            const projectSnapshot = await getDocs(collection(db, "project"));
            setExperiences([]);
            experienceSnapshot.forEach((doc) => {
                setExperiences((prev : any) => [...prev, doc.data()]);
                console.log(doc.id, " => ", doc.data());
            });
            setProjects([]);
            projectSnapshot.forEach((doc) => {
                setProjects((prev: any) => [...prev, doc.data()]);
                console.log(doc.id, " => ", doc.data());
            });
            setLoading(false);
        };
        getData();
    }, []);

    return (
        <>
            {loading ? (
                <FidgetSpinner
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                    ballColors={["#ff0000", "#00ff00", "#0000ff"]}
                    backgroundColor="#F4442E"
                />
            ) : (
                <div className={styles.page}>
                    <Head>
                        <title>Experiences & Projects</title>
                    </Head>
                    {/* <LineWithPoints numPoints={Experiences.length} triangleIndex={2} /> */}
                    <div className={styles.experiences}>
                        <h1 style={{ fontSize: "2rem" }}>
                            Industry{" "}
                            <span className={styles.highlight}>
                                Experiences
                            </span>
                        </h1>
                        <div>
                            {experiences.map((experience: Experience, index: number) => (
                                <div key={index} className={styles.experience}>
                                    <h1>{experience.company}</h1>
                                    <h2>{experience.designation}</h2>
                                    <h3>
                                        {experience.from} - {experience.to}
                                    </h3>
                                    <div className={styles.tags}>
                                        {experience?.techStack
                                            ? experience.techStack.map(
                                                  (tech, index) => (
                                                      <span key={index}>
                                                          {tech}
                                                      </span>
                                                  )
                                              )
                                            : null}
                                    </div>
                                    <ul
                                        style={{
                                            textAlign: "left",
                                            fontSize: "1.1rem",
                                        }}
                                    >
                                        {experience.description.map(
                                            (point, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        dangerouslySetInnerHTML={{
                                                            __html: point,
                                                        }}
                                                    />
                                                );
                                            }
                                        )}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.projects}>
                        <h1>
                            Personal{" "}
                            <span className={styles.highlight}>Projects</span>
                        </h1>
                        <div className={styles.project}>
                            {projects.map((project : any, index : number) => (
                                <Card project={project} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Projects;

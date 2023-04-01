import React from "react";
import { PropsWithChildren } from "react";

import {GrProjects} from 'react-icons/gr'
import {FaGithub} from 'react-icons/fa'
import {BiLinkAlt} from 'react-icons/bi'

import styles from '@/styles/Card.module.css';

function Card({ project }: PropsWithChildren<{ project: any }>) {
    const { name, description, techStack, image, link, repo } = project;

    const tag = {}
    const imageCard = {}

    return (
        <div className={styles.card}>
            <div>{image ? <img src={image} className={styles.image}/> : <GrProjects className={styles.placeholder}/>}</div>
            <h1>{name}</h1>
            {techStack ? (
                <div style={tag}>
                    {techStack.map((tech: string, index: number) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>
            ) : null}
            <p className={styles.description} dangerouslySetInnerHTML={ {__html: description} }/>
            {/* <p className={styles.description}>{description}</p> */}
            <div className={styles.links}>
                {link && <a href={link} target="_blank"><BiLinkAlt className={styles.repo}/></a>}
                {repo && <a href={repo} target="_blank"><FaGithub className={styles.repo}/></a>}
            </div>
        </div>
    );
}

export default Card;

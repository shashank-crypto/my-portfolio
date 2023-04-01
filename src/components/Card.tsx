import React from 'react';
import { PropsWithChildren } from "react";


function Card({project} : PropsWithChildren<{project: any}>) {

    const {name, description, techStack, link, repo} = project;

    return (
        <div>
            
        </div>
    );
}

export default Card;
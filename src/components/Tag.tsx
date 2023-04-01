import React from 'react';

function Tag({skill} : {skill: string}) {

    const skillColorMap : {[key: string]: string} = {
        'React': '#0fcdd4',
        'Next.js': '#555c4f',
        'Node.js': '#4b9116',
        'Express.js': '#4d5249',
        'MongoDB': '#418a0a',
        'Python': '#1277c4',
        'Django': '#074a06',
        'Docker': '#35abcc',
        'Kubernetes': 'blue',
        'AWS': '#cc8d35',
        'MySQL': '#3590cc',
        'git': '#f74e2d',
        'postman': '#e87641',
        'redis': '#e85d41',
    } ;

    const style = {
        backgroundColor: skillColorMap[skill] ? `${skillColorMap[skill]}7e` : '#0000007e',
        padding: '0.5rem',
        borderRadius: '1rem',
        marginRight: '0.5rem',
    }

    return (
            <span style={style}>{skill}</span>
    );
}

export default Tag;
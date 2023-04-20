import type { NextApiRequest, NextApiResponse } from 'next'
import projects from '../project.json';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

type Data = {
    isPublished: boolean,
    message?: string | Array<any>
}

type PostBody = {
    name: string,
    description: string,
    repo: string,
    image?: string,
    link?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method == 'POST') {
        console.log(req.body);
        // "id" : "3",
        // "name" : "NGO fund management system",
        // "description" : "A system that allows NGOs to <span> manage funds</span> on blockchain and also allows donors to donate to the NGOs of their choice with the right distribution of roles. System aims at <span> bringing transparency</span> and removing any fraudulent activity or carelessness.",
        // "repo" : "https://github.com/shashank-crypto/NGOD-app",
        // "image"
        try{
            let id = projects.length;
            const {body, code} = req.body;
            let isPublished = false;
            if (code !== process.env.SECURITY_CODE) {
                return res.status(401).json({ isPublished: false, message: "Unauthorized" })
            }
            if (body !== null && typeof body === 'object' && body.length > 0) {
                body.map((info : PostBody) => {
                    const {name, description, repo, image, link} = info;
                    if (!name || !description || !repo) {
                        return res.status(400).json({ isPublished: false, message: "Missing data" })
                    }
                    projects.push({
                        "id": (++id).toString(),
                        "name": name,
                        "description": description,
                        "repo": repo,
                        "image": image
                    });
                })
                const filePath = path.join(process.cwd(), 'src', 'pages', 'api', 'project.json');
                console.log(JSON.stringify(projects));
                console.log(process.cwd());
                fs.writeFileSync(filePath, JSON.stringify(projects));
                isPublished = true;
                return res.status(200).json({ isPublished: isPublished })
            }
            return res.status(400).json({ isPublished: isPublished, message: "Didn't receive array" })
        } catch (error : Error | any) {
            res.status(500).json({ isPublished: false, message: error?.message })
        }
    }
    else if (req.method == 'DELETE') {
        try{
            let isPublished = false;
            const {id, code} = req.body;
            if (code !== process.env.SECURITY_CODE) {
                return res.status(401).json({ isPublished: false, message: "Unauthorized" })
            }
            if (id !== null && typeof id === 'string') {
                const filePath = path.join(process.cwd(), 'src', 'pages', 'api', 'project.json');
                const newProjects = projects.filter((project) => project.id !== id);
                fs.writeFileSync(filePath, JSON.stringify(newProjects));
                isPublished = true;
                return res.status(200).json({ isPublished: isPublished })
            }
            return res.status(400).json({ isPublished: isPublished, message: "Didn't receive id" })
        } catch (error : Error | any) {
            res.status(500).json({ isPublished: false, message: error?.message })
        }
    }
    else if (req.method == 'GET') {
        try {
            return res.status(200).json({ isPublished: true, message: projects })
        }
        catch (error : Error | any) {
            res.status(500).json({ isPublished: false, message: error?.message })
        }
    }
}

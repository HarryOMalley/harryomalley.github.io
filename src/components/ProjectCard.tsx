import React from 'react';

type ProjectProps = {
    title: string;
    desc: string;
    img: string;
    link: string;
};

function ProjectCard({ title, desc, img, link }: ProjectProps) {
    return (
        <div className="flex h-96 w-72 flex-col justify-between overflow-hidden rounded-sm shadow-md shadow-gray-400">
            <div className="h-1/3">
                <img className="h-full w-full" src={img} />
            </div>
            <h2 className="my-1 text-lg font-bold">{title}</h2>
            <p>{desc}</p>
            <a href={link}>
                <h3 className="m-3 font-bold text-slate-600">Link</h3>
            </a>
        </div>
    );
}

export default ProjectCard;

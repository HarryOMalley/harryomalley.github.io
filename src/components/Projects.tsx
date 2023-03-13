import React from 'react';
import ProjectCard from './ProjectCard';
import Matrix from '../assets/LED_Matrix.png';

function Projects() {
    return (
        <div className="flex h-full w-full flex-col items-center text-center">
            <h1 className="my-5 font-mono text-5xl font-bold">Projects</h1>
            <div className="grid h-full w-96 grid-cols-1 items-center justify-evenly justify-items-center gap-6 overflow-scroll rounded-md border border-gray-300 p-4 shadow-inner shadow-gray-300 sm:w-128 sm:grid-cols-1 md:w-192 md:grid-cols-2 lg:w-256 lg:grid-cols-3 xl:w-320 xl:grid-cols-4">
                <ProjectCard
                    title="LED Matrix"
                    desc="LED Matrix built with WS2815 LEDs using FFT to create a visualisation of the audio being played"
                    img={Matrix}
                    link="www.google.com"
                />
                <ProjectCard
                    title="LED Matrix"
                    desc="LED Matrix built with WS2815 LEDs using FFT to create a visualisation of the audio being played"
                    img={Matrix}
                    link="www.google.com"
                />
                <ProjectCard
                    title="LED Matrix"
                    desc="LED Matrix built with WS2815 LEDs using FFT to create a visualisation of the audio being played"
                    img={Matrix}
                    link="www.google.com"
                />
                <ProjectCard
                    title="LED Matrix"
                    desc="LED Matrix built with WS2815 LEDs using FFT to create a visualisation of the audio being played"
                    img={Matrix}
                    link="www.google.com"
                />
                <ProjectCard
                    title="LED Matrix"
                    desc="LED Matrix built with WS2815 LEDs using FFT to create a visualisation of the audio being played"
                    img={Matrix}
                    link="www.google.com"
                />
                <ProjectCard
                    title="LED Matrix"
                    desc="LED Matrix built with WS2815 LEDs using FFT to create a visualisation of the audio being played"
                    img={Matrix}
                    link="www.google.com"
                />
            </div>
        </div>
    );
}

export default Projects;

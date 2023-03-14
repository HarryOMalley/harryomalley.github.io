import React from 'react';
import ProjectCard from './ProjectCard';
import Matrix from '../assets/LED_Matrix.png';

function Projects() {
    return (
        <div className="flex h-full w-full flex-col items-center text-center">
            <h1 className="mb-7 font-mono text-5xl font-bold">Projects</h1>
            <div className="transparent-scrollbar grid h-full w-96 grid-cols-1 items-center justify-evenly justify-items-center gap-3 overflow-y-auto rounded-md px-3 pb-5 sm:w-128 sm:grid-cols-1 md:w-192 md:grid-cols-2 lg:w-256 lg:grid-cols-3 xl:w-304">
                <ProjectCard
                    title="LED Matrix"
                    desc="LED Matrix built with WS2815 LEDs using FFT to create a visualisation of the audio being played"
                    img={Matrix}
                    link="www.google.com"
                />
                <ProjectCard
                    title="test123"
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

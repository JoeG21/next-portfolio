import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";

const ProjectCard: React.FC<Project> = ({ title, description, iframeSrc, githubLink, techStack }) => (
    <div className="flex justify-center my-8 mx-4">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 bg-[#252422] sm:h-full">
            <div className="h-[150px]">
                {title === 'Right Space Self Storage LLC' ?
                    <div className="w-full h-full">
                        <Image
                            src="/rightSpace.png"
                            alt="Description of image"
                            width={600}
                            height={400}
                            className="rounded-lg w-full h-full"
                        />
                    </div>
                    :
                    <iframe
                        src={iframeSrc}
                        className="rounded-lg w-full"
                        title={title}
                    />
                }
            </div>

            <h2 className="text-xl text-[#F2F4F3] mt-4 mb-2">{title}</h2>
            <div className="sm:h-96 sm:relative">
                <p className="mb-4 text-lg text-[#CCC5B9]">{description}</p>
                <div className="sm:absolute bottom-0 w-full">
                    <div className="flex justify-end">
                        <Link href={githubLink} legacyBehavior>
                            <a
                                className="rounded-full py-1 px-4 text-[#F2F4F3] bg-[#0A0908] text-md font-bold"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {title === 'Right Space Self Storage LLC' ? 'Website' : 'GitHub'}
                            </a>
                        </Link>
                    </div>
                    <p className="text-xl text-[#F2F4F3] mt-4 mb-4">Tech Stack</p>
                    <div className="text-[#F2F4F3] flex justify-between flex-wrap text-md font-bold">
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full py-1 px-4"
                                style={{ backgroundColor: getTechColor(tech) }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </BackgroundGradient>
    </div>
);

const getTechColor = (tech: string): string => {
    const colors: { [key: string]: string } = {
        React: "#54b9d5",
        JavaScript: "#cbb940",
        Netlify: "#3b8295",
        "Ruby on Rails": "#b62727",
        Ruby: "#b62727",
        jQuery: "#2e33ca",
        Bootstrap: "#582cd0",
        PHP: "#5e49ff"
    };
    return colors[tech] || "#CCC5B9"; // Default color if not found
};

export default ProjectCard;

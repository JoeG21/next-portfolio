"use client";
import React from "react";
import ProjectCard from "@/components/ui/projectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mt-32 max-w-[95rem]">
      <div className="sm:flex flex-wrap justify-evenly">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

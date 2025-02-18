/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineStar } from "react-icons/ai";
import { toast } from "sonner";

interface Project {
  _id: string;
  name: string;
  type: string;
  details: string;
  technologies: string;
  image: string;
  liveLink: string;
  frontendGithubLink: string;
  backendGithubLink?: string;
}

const ProjectDetails = () => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pathParts = window.location.pathname.split("/");
    const id = pathParts[pathParts.length - 1];

    if (!id) return;

    const fetchProject = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/projects/${id}`
        );
        const projectData = response.data;

        setProject(projectData);
      } catch (error: any) {
        toast.error("Error fetching project details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, []);

  console.log(project);

  const sentences = project?.details
    .split(".")
    .filter((sentence) => sentence.trim() !== "");

  if (loading)
    return (
      <div className="text-orange-500 text-center mt-20">
        Loading Project...
      </div>
    );
  if (!project)
    return <p className="text-center text-red-500">Project not found!</p>;

  return (
    <div className="container mx-auto px-5 md:px-16 lg:px-32 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-300 mb-6">
        Website Name: <span className="text-white">{project.name}</span>
      </h1>
      <h2 className="text-center text-2xl text-gray-300 mb-6">
        Website Type: <span className="text-orange-300"> {project.type}</span>
      </h2>

      <div
        className="image cursor-pointer h-[500px] rounded-xl"
        style={{
          backgroundImage: `url(${project.image})`,
        }}
      ></div>

      {/* Buttons */}
      <div className="flex  justify-center gap-4 mt-10">
        <a
          href={project.liveLink}
          target="_blank"
          className=" p-2 w-full text-center rounded-md bg-blue-500 text-white hover:bg-blue-700 transition duration-300"
        >
          Live Site
        </a>
        <a
          href={project.frontendGithubLink}
          target="_blank"
          className="btn w-full text-center btn-sm p-2 rounded-md bg-green-500 text-white hover:bg-green-700 transition duration-300"
        >
          Client Site Code
        </a>
        {project.backendGithubLink && (
          <a
            href={project.backendGithubLink}
            target="_blank"
            className="btn w-full text-center btn-sm p-2 rounded-md bg-purple-500 text-white hover:bg-purple-700 transition duration-300"
          >
            Server Site Code
          </a>
        )}
      </div>

      {/* Project Description */}
      <div className="mt-10">
        <h2 className="text-2xl text-center font-bold text-yellow-400">
          Project Details
        </h2>
        <div className="mt-3 text-gray-300">
          {sentences?.map((sentence, index) => (
            <div key={index} className="flex items-center mt-2">
              <AiOutlineStar className="text-yellow-500 font-bold mr-2" />
              <p className="text-lg">{sentence.trim()}.</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Used */}
      <div className="mt-5">
        <h2 className="text-2xl font-bold text-yellow-400">
          Technologies Used :{" "}
          <span className="text-white">{project.technologies}</span>
        </h2>
      </div>
    </div>
  );
};

export default ProjectDetails;

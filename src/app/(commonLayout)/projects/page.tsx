/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import axios from "axios";

interface Project {
  _id: string;
  name: string;
  type: string;
  image: string;
  liveLink: string;
  frontendGithubLink: string;
  backendGithubLink?: string;
}

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="container mx-auto px-5 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-300 mb-6">
        My Latest Work
      </h2>
      <p className="text-center max-w-lg mx-auto mb-10 text-gray-300">
        I believe in pushing the boundaries of web design, ensuring each website
        I create is a unique masterpiece.
      </p>

      {projects.length === 0 ? (
        <p className="text-center">Loading projects...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-white">{project.name}</h3>
              <p className="text-sm text-orange-300 mb-4">{project.type}</p>
              <div className="flex gap-3">
                <Link href={project.liveLink} target="_blank">
                  <button className="btn btn-sm bg-blue-500 text-white">
                    Live Site
                  </button>
                </Link>
                <Link href={project.frontendGithubLink} target="_blank">
                  <button className="btn btn-sm bg-green-500 text-white">
                    Client
                  </button>
                </Link>
                {project.backendGithubLink && (
                  <Link href={project.backendGithubLink} target="_blank">
                    <button className="btn btn-sm bg-purple-500 text-white">
                      Server
                    </button>
                  </Link>
                )}
              </div>
              <div className="mt-4">
                <Link href={`/projects/${project._id}`}>
                  <button className="btn btn-sm bg-yellow-500 text-black w-full">
                    Show Details
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectsPage;

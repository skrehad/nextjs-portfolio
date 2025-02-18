"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn } from "@/src/variants";
import axios from "axios";

interface Project {
  id: number;
  name: string;
  type: string;
  img: string;
  liveSite: string;
  clientSite: string;
  serverSite?: string; // optional field
}

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/projects");
        setProjects(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects(); // Call the fetch function
  }, []);

  return (
    <div>
      <section className="section lg:mb-64 lg:mt-80" id="work">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <h2 className="h2 text-orange-200 leading-light">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-16">
                I believe in pushing the boundaries of web design, ensuring each
                website I create is a unique masterpiece.
              </p>
              <Link href="/projects">
                <button className="btn btn-sm mb-4">View all projects</button>
              </Link>
            </motion.div>

            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className=" mb-10 lg:mb-0"
              >
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 translate-all duration-300"></div>
                  <img
                    className="group-hover:scale-125 w-full h-[315px] translate-all duration-500"
                    src={project.img}
                    alt=""
                  />
                  <div className="absolute text-center w-full bottom-full group-hover:bottom-60 transition-all duration-700 z-50">
                    <span className="text-gradient">{project.type}</span>
                  </div>
                  <div className="absolute text-center w-full bottom-full group-hover:bottom-48 transition-all duration-700 z-50">
                    <span className="text-3xl text-white">
                      Name: {project.name}
                    </span>
                  </div>

                  <div className="absolute w-full mx-2 text-center gap-2 grid grid-cols-3 bottom-full group-hover:bottom-32 transition-all duration-700 z-50">
                    <Link
                      href={project.liveSite}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="btn w-full btn-sm">Live Site</button>
                    </Link>
                    <Link
                      href={project.clientSite}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="btn btn-sm">Client-Side</button>
                    </Link>
                    {project.serverSite ? (
                      <Link
                        href={project.serverSite}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn btn-sm">Server-Side</button>
                      </Link>
                    ) : (
                      <button className="btn btn-sm">No Server-Site</button>
                    )}
                  </div>
                  <div className="absolute w-full text-center bottom-full group-hover:bottom-16 transition-all duration-700 z-50">
                    <Link href={`/project/${project.id}`}>
                      <button className="btn btn-sm">
                        Show Project Details
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <div className="text-center">
        <p className="text-2xl">Some Project Coming Soon...</p>
      </div>
    </div>
  );
};

export default ProjectsPage;

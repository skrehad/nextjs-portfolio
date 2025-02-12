/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageProject = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const deleteProject = async (id: string) => {
    if (
      typeof window !== "undefined" &&
      window.confirm("Are you sure you want to delete this project?")
    ) {
      try {
        await axios.delete(`http://localhost:5000/api/projects/${id}`);
        setProjects(projects.filter((project) => project._id !== id));
        alert("Project deleted successfully!");
      } catch (error) {
        console.error("Error deleting project:", error);
        alert("Failed to delete the project.");
      }
    }
  };

  if (loading) {
    return <div>Loading projects...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <h2 className="text-2xl font-bold mb-10 text-center text-orange-400">
        Manage Projects
      </h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-gray-800 p-4 rounded-lg text-white flex items-center space-x-4 flex-wrap"
          >
            <img
              src={project.images[0]}
              alt={project.name}
              className="w-16 h-16 object-cover rounded sm:w-24 sm:h-24 md:w-32 md:h-32"
            />
            <div className="flex-grow">
              <h1 className="text-xl sm:text-lg md:text-xl">
                Project Name:{" "}
                <span className="text-orange-300">{project.name}</span>
              </h1>
            </div>
            <div className="space-x-2">
              <button
                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                onClick={() => deleteProject(project._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProject;

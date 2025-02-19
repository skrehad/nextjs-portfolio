/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

interface Blog {
  _id: string;
  title: string;
  description: string;
  image: string;
  author: {
    name: string;
    email: string;
    image: string;
  };
}

const ManageBlog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  console.log(blogs);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://portfolio-server-1v4q61t0o-skrehads-projects.vercel.app/api/blogs"
        );
        setBlogs(response.data);
      } catch (error: any) {
        toast.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const deleteBlog = async (id: any) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      try {
        await axios.delete(
          `https://portfolio-server-1v4q61t0o-skrehads-projects.vercel.app/api/blogs/${id}`
        );
        setBlogs(blogs.filter((blog) => blog._id !== id));
        toast.success("Blog post deleted successfully!");
      } catch (error: any) {
        toast.error("Error deleting blog post:", error);
        toast.error("Failed to delete the blog post.");
      }
    }
  };

  if (loading) {
    return (
      <div className="text-orange-500 text-center mt-20">Loading blogs...</div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <h2 className="text-2xl font-bold mb-10 text-center text-orange-400">
        Manage Blog Post
      </h2>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-gray-800 p-4 rounded-lg text-white flex items-center space-x-4 flex-wrap"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-16 h-16 object-cover rounded sm:w-24 sm:h-24 md:w-32 md:h-32"
            />
            <div className="flex-grow">
              <h1 className="text-sm ">
                Blog Title:{" "}
                <span className="text-orange-300">{blog.title}</span>
              </h1>
            </div>
            <div className="flex-grow">
              <h1 className="text-sm ">
                Author Name:{" "}
                <span className="text-orange-300">{blog?.author?.name}</span>
              </h1>
            </div>
            <div className="flex-grow">
              <h1 className="text-sm ">
                Author Email:{" "}
                <span className="text-orange-300">{blog?.author?.email}</span>
              </h1>
            </div>
            <div className="flex-grow">
              <img
                className="rounded-full h-[50px] w-[50px]"
                src={blog?.author?.image}
                alt=""
              />
            </div>
            <div className="space-x-2">
              <button
                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                onClick={() => deleteBlog(blog._id)}
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

export default ManageBlog;

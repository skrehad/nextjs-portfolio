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

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-server-mu-woad.vercel.app/api/blogs"
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

  console.log(blogs);

  if (loading) {
    return (
      <div className="text-orange-500 text-center mt-20">
        Loading blog posts...
      </div>
    );
  }

  return (
    <div className="min-h-screen  mx-5 lg:mx-32 md:mx-16 my-10">
      <h2 className="text-2xl font-bold mb-10 text-center text-orange-400">
        Blog Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs?.map((blog) => (
          <div
            key={blog._id}
            className="bg-gray-800 p-6 rounded-lg text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            <h3 className="text-xl text-center font-semibold text-orange-300 mb-2">
              {blog.title}
            </h3>

            <p className="text-sm text-gray-300 mb-4">
              {blog.description.length > 100
                ? `${blog.description.substring(0, 200)}...`
                : blog.description}
            </p>

            {/* Author Section */}
            <div className="flex items-center mb-4">
              <img
                src={blog.author.image}
                alt="Author"
                className="rounded-full w-10 h-10 mr-3"
              />
              <div>
                <h4 className="text-sm text-orange-300">{blog.author.name}</h4>
                <p className="text-xs text-gray-400">{blog.author.email}</p>
              </div>
            </div>

            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-all duration-300">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface BlogFormData {
  title: string;
  description: string;
  image: FileList;
}

export default function AddBlog() {
  const { register, handleSubmit } = useForm<BlogFormData>();
  const [loading, setLoading] = useState(false);
  const { data } = useSession();
  const user = data?.user;

  const onSubmit: SubmitHandler<BlogFormData> = async (formData) => {
    try {
      setLoading(true);
      const { title, description, image } = formData;

      if (image.length === 0) {
        alert("Please select an image to upload.");
        setLoading(false);
        return;
      }

      const imageFile = image[0];
      const uploadData = new FormData();
      uploadData.append("file", imageFile);
      uploadData.append("upload_preset", "md_rehad");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dz43bufkc/image/upload",
        uploadData
      );

      const imageUrl = response.data.secure_url;

      const blogData = {
        title,
        description,
        image: imageUrl,
        author: user,
      };
      // console.log(blogData);

      await axios.post("http://localhost:5000/api/blogs", blogData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Blog Data:", blogData);
      alert("Blog post created successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to create blog post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
      <div className="bg-gray-900 bg-opacity-80 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-3xl">
        <h3 className="text-white text-2xl font-bold text-center mb-6">
          📝 Add New Blog Post
        </h3>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter blog title"
              {...register("title", { required: true })}
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 h-28 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Write your blog description..."
              {...register("description", { required: true })}
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">
              Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full px-4 py-2 text-white rounded-lg border border-gray-700 focus:ring-blue-500 focus:outline-none focus:ring-2"
              {...register("image", { required: true })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white px-6 py-3 rounded-xl text-lg font-semibold transition-all transform hover:scale-105"
            disabled={loading}
          >
            {loading ? "Publishing..." : "🚀 Publish Post"}
          </button>
        </form>
      </div>
    </div>
  );
}

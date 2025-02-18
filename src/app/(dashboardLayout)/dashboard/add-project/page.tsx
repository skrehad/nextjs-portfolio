"use client";

import { useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

interface ProjectFormData {
  name: string;
  type: string;
  details: string;
  technologies: string;
  liveLink: string;
  frontendGithubLink: string;
  backendGithubLink?: string;
  image?: File;
}

export default function AddProject() {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, setValue } = useForm<ProjectFormData>();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setValue("image", file);
    }
  };

  const onSubmit: SubmitHandler<ProjectFormData> = async (formData) => {
    try {
      setLoading(true);

      const {
        name,
        type,
        details,
        technologies,
        liveLink,
        frontendGithubLink,
        backendGithubLink,
        image,
      } = formData;
      console.log(formData);

      if (!image) {
        alert("Please select an image to upload.");
        setLoading(false);
        return;
      }

      // const uploadData = new FormData();
      // uploadData.append("file", image);
      // uploadData.append("upload_preset", "md_rehad");

      // const response = await axios.post(
      //   "https://api.cloudinary.com/v1_1/dz43bufkc/image/upload",

      //   uploadData
      // );

      const imageFile = image;

      const uploadData = new FormData();
      uploadData.append("file", imageFile);
      uploadData.append("upload_preset", "md_rehad");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dz43bufkc/image/upload",
        uploadData
      );

      const imageUrl = response.data.secure_url;

      const projectData = {
        name,
        type,
        details,
        technologies,
        liveLink,
        frontendGithubLink,
        backendGithubLink,
        image: imageUrl,
      };
      console.log(projectData);

      await axios.post("http://localhost:5000/api/projects", projectData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert("Project added successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to add project.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-800 p-6 rounded-lg w-[500px] space-y-4"
      >
        <h2 className="text-white text-xl font-bold">Add New Project</h2>

        <input
          type="text"
          placeholder="Project Name"
          className="w-full bg-gray-700 text-white p-2 rounded"
          {...register("name")}
          required
        />

        <select
          className="w-full bg-gray-700 text-white p-2 rounded"
          {...register("type")}
          required
        >
          <option value="">Select Project Type</option>
          <option value="Frontend">Frontend</option>
          <option value="MERN">MERN</option>
          <option value="Full Stack">Full Stack</option>
        </select>

        <textarea
          placeholder="Project Details (Each sentence separated by a dot)"
          className="w-full bg-gray-700 text-white p-2 rounded"
          {...register("details")}
          required
        ></textarea>

        <input
          type="text"
          placeholder="Technologies (comma separated)"
          className="w-full bg-gray-700 text-white p-2 rounded"
          {...register("technologies")}
          required
        />

        <input
          type="text"
          placeholder="Live Link"
          className="w-full bg-gray-700 text-white p-2 rounded"
          {...register("liveLink")}
          required
        />

        <input
          type="text"
          placeholder="Frontend GitHub Link"
          className="w-full bg-gray-700 text-white p-2 rounded"
          {...register("frontendGithubLink")}
          required
        />

        <input
          type="text"
          placeholder="Backend GitHub Link (Optional)"
          className="w-full bg-gray-700 text-white p-2 rounded"
          {...register("backendGithubLink")}
        />

        <input
          type="file"
          accept="image/*"
          className="w-full bg-gray-700 text-white p-2 rounded"
          onChange={handleFileUpload}
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Submit Project"}
        </button>
      </form>
    </div>
  );
}

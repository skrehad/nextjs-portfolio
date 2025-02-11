"use client";
import { useState } from "react";
import axios from "axios";

export default function AddProject() {
  const [formData, setFormData] = useState<{
    name: string;
    type: string;
    images: string[];
    details: string;
    technologies: string;
    liveLink: string;
    frontendGithubLink: string;
    backendGithubLink?: string;
  }>({
    name: "",
    type: "",
    images: [],
    details: "",
    technologies: "",
    liveLink: "",
    frontendGithubLink: "",
    backendGithubLink: "",
  });

  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (!files || files.length !== 5) {
      alert("You must upload exactly 5 images!");
      return;
    }

    setLoading(true);
    const uploadedImages = [];

    for (let i = 0; i < files.length; i++) {
      const data = new FormData();
      data.append("file", files[i]);
      data.append("upload_preset", "md_rehad");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dz43bufkc/image/upload",
        data
      );

      uploadedImages.push(response.data.secure_url);
    }

    setFormData({ ...formData, images: uploadedImages });
    setLoading(false);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    console.log("Form Data Before Submit:", formData);
    const detailsArray = formData.details
      .split(".")
      .filter((sentence) => sentence.trim() !== "");
    const technologiesArray = formData.technologies
      .split(",")
      .map((tech) => tech.trim());

    if (formData.images.length !== 5) {
      alert("Please upload exactly 5 images.");
      return;
    }

    try {
      setLoading(true);
      await axios.post("/api/projects", {
        ...formData,
        details: detailsArray,
        technologies: technologiesArray,
      });
      alert("Project submitted successfully!");
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg w-[500px] space-y-4"
      >
        <h2 className="text-white text-xl font-bold">Add New Project</h2>

        <input
          type="text"
          placeholder="Project Name"
          className="w-full bg-gray-700 text-white p-2 rounded"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />

        <select
          className="w-full bg-gray-700 text-white p-2 rounded"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
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
          value={formData.details}
          onChange={(e) =>
            setFormData({ ...formData, details: e.target.value })
          }
          required
        ></textarea>

        <input
          type="text"
          placeholder="Technologies (comma separated)"
          className="w-full bg-gray-700 text-white p-2 rounded"
          value={formData.technologies}
          onChange={(e) =>
            setFormData({ ...formData, technologies: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Live Link"
          className="w-full bg-gray-700 text-white p-2 rounded"
          value={formData.liveLink}
          onChange={(e) =>
            setFormData({ ...formData, liveLink: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Frontend GitHub Link"
          className="w-full bg-gray-700 text-white p-2 rounded"
          value={formData.frontendGithubLink}
          onChange={(e) =>
            setFormData({ ...formData, frontendGithubLink: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Backend GitHub Link (Optional)"
          className="w-full bg-gray-700 text-white p-2 rounded"
          value={formData.backendGithubLink}
          onChange={(e) =>
            setFormData({ ...formData, backendGithubLink: e.target.value })
          }
        />

        <input
          type="file"
          multiple
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

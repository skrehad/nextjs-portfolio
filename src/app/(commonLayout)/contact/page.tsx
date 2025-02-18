"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner"; // Or any notification library you're using

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit } = useForm<ContactFormData>();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<ContactFormData> = async (formData) => {
    try {
      setLoading(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { name, email, message } = formData;

      console.log(formData);

      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Message sent successfully!");
        // Optionally clear form data if needed
      } else {
        toast.error("Failed to send the message!");
      }
    } catch (error: any) {
      toast.error("An error occurred while sending your message.");
      // toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
      <div className="bg-gray-900 bg-opacity-80 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-3xl">
        <h3 className="text-white text-2xl font-bold text-center mb-6">
          📩 Contact Us
        </h3>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 h-28 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Your message..."
              {...register("message", { required: true })}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white px-6 py-3 rounded-xl text-lg font-semibold transition-all transform hover:scale-105"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

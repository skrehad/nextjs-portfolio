// "use client";
// import axios from "axios";
// import { useSession } from "next-auth/react";
// import Image from "next/image";
// import { useState } from "react";
// import { SubmitHandler, useForm } from "react-hook-form";
// interface BlogFromData {
//   title: string;
//   description: string;
//   image: FileList;
// }

// export default function AddBlog() {
//   const { register, handleSubmit } = useForm<BlogFromData>();
//   const [loading, setLoading] = useState(false);

//   const { data } = useSession();
//   // console.log("data=>",data);
//   const user = data?.user;
//   // console.log(user);

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const onSubmit: SubmitHandler<BlogFromData> = async (data: any) => {
//     // console.log(data);

//     const { description, title } = data;

//     // const image = data.image[0];

//     // console.log(image);

//     try {
//       setLoading(true);
//       const image = data.image[0]; // Ensure this is correct
//       const newFormData = new FormData();
//       newFormData.append("file", image); // Add the image file
//       newFormData.append("upload_preset", "md_rehad"); // Your upload preset
//       newFormData.append("cloud_name", "dz43bufkc"); // Not necessary for the request

//       const response = await axios.post(
//         "https://api.cloudinary.com/v1_1/dz43bufkc/image/upload",
//         newFormData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       // console.log("Image uploade =>",response);
//       const imageUrl = response.data.secure_url;

//       // console.log(imageUrl);

//       const blogData = {
//         title,
//         description,
//         image: imageUrl,
//         author: {
//           ...user,
//         },
//       };

//       console.log(blogData);

//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="w-[90%] mx-auto">
//         <Image
//           src="https://i.stack.imgur.com/hzk6C.gif"
//           width={500}
//           height={500}
//           alt="loading"
//           className="w-96 mx-auto"
//         />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-900">
//       <div className="flex flex-col lg:flex-row p-4 gap-4 h-screen">
//         {/* Left Side - Profile Card */}

//         {/* Right Side - Content */}
//         <div className="w-full mx-auto space-y-6 h-full">
//           {/* Add Blog Post Section */}
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-full">
//             <h3 className="text-white text-lg font-semibold mb-4">
//               Add New Blog Post
//             </h3>
//             <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
//               <div>
//                 <label className="block text-gray-300 text-sm mb-2">
//                   Title
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//                   placeholder="Enter blog title"
//                   {...register("title", { required: true })}
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-300 text-sm mb-2">
//                   Description
//                 </label>
//                 <textarea
//                   className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 h-32 focus:ring-2 focus:ring-blue-500 outline-none"
//                   placeholder="Write your blog description..."
//                   {...register("description", { required: true })}
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block text-gray-300 text-sm mb-2">
//                   Image
//                 </label>
//                 {loading ? (
//                   <p>Uploading, please wait...</p>
//                 ) : (
//                   <input
//                     {...register("image", { required: true })}
//                     type="file"
//                     accept="image/*"
//                     className={`w-full px-4 py-2 text-white rounded-lg  border border-gray-700 focus:ring-blue-500 focus:outline-none focus:ring-2`}
//                   />
//                 )}
//               </div>
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
//                 Publish Post
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface BlogFromData {
  title: string;
  description: string;
  image: FileList;
}

export default function AddBlog() {
  const { register, handleSubmit } = useForm<BlogFromData>();
  const [loading, setLoading] = useState(false);
  const { data } = useSession();
  const user = data?.user;

  // Handle form submission
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<BlogFromData> = async (data: any) => {
    try {
      setLoading(true);
      const { description, title } = data;
      const image = data.image[0];

      const newFormData = new FormData();
      newFormData.append("file", image);
      newFormData.append("upload_preset", "md_rehad");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dz43bufkc/image/upload",
        newFormData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      const imageUrl = response.data.secure_url;

      const blogData = {
        title,
        description,
        image: imageUrl,
        author: { ...user },
      };
      console.log(blogData);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <Image
          src="https://i.stack.imgur.com/hzk6C.gif"
          width={200}
          height={200}
          alt="loading"
        />
      </div>
    );
  }

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
              {...register("image", { required: true })}
              type="file"
              accept="image/*"
              className="w-full px-4 py-2 text-white rounded-lg border border-gray-700 focus:ring-blue-500 focus:outline-none focus:ring-2"
            />
          </div>

          <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white px-6 py-3 rounded-xl text-lg font-semibold transition-all transform hover:scale-105">
            🚀 Publish Post
          </button>
        </form>
      </div>
    </div>
  );
}

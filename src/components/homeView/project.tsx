// "use client";
// import "./Project.css";
// import { AiOutlineStar } from "react-icons/ai";

// const Project = () => {
//   const projectData = [
//     {
//       id: 1,
//       imageUrls: [
//         "https://i.ibb.co/27BYxfQ/Home-Hotel-Booking.png",
//         "https://i.ibb.co/jTTQTHB/About-Hotel-Booking.png",
//         "https://i.ibb.co/GJTmg5R/Admin-Dashboard.png",
//         "https://i.ibb.co/wwhkPwK/Hotels-Hotel-Booking.png",
//         "https://i.ibb.co/R0sMrj0/Login-Hotel-Booking.png",
//       ],
//       projectAbout: [
//         "This is a Hotel Booking Website, Where user can Login (Google && FaceBook) and Register.",
//         "Responsive design that allows users to access and book hotels on various devices, including smartphones and tablets.",
//         "The ability to add, edit, and delete user accounts, as well as assign user roles and permissions.",
//         "User can booking a hotel that's showing on User DashBoard.",
//         "User can remove User booking hotel from User DashBoard.",
//         "User can show hotels with images, descriptions, pricing, rating, and availability information directly connected with the backend.",
//         "User can review website which also shows the home page in testimonial.",
//         "Access to the database of the website or application for data management and backup purposes.",
//         "Users can enter their travel destination, check-in and check-out dates, and the number of guests to find available hotels in the area.",
//         "The website compares prices from hotels and booking platforms, helping users find the best deals and discounts.",
//         "That hole process connects to the backend.",
//         "An Admin can control users,add a hotel,manage hotels,edit hotels,add a blog,add a gallery picture,control everything in this website",
//       ],
//     },
//   ];

//   const selectedProject = projectData[0];

//   return (
//     <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
//       <div>
//         <div className="flex items-center justify-center pb-5 ">
//           <h1 className="text-2xl md:text-3xl text-center text-orange-300 font-bold inline-block">
//             My Best Project
//           </h1>
//         </div>
//       </div>

//       <div className=" mb-20">
//         <div className="project-details">
//           <h1 className="text-4xl text-center mb-2 font-bold">
//             Website Name: <span className="text-yellow-400">Hotel Booking</span>
//           </h1>
//           <h2 className="text-3xl text-center mb-5 text-yellow-400">
//             MERN Stack Website
//           </h2>
//           <div className="my-10 h-[500px] grid gap-7 md:grid-cols-2">
//             <div
//               className="image cursor-pointer h-[500px] rounded-xl"
//               style={{
//                 backgroundImage: `url(${selectedProject.imageUrls[0]})`,
//               }}
//             ></div>
//             <div className="grid  gap-3 md:grid-cols-2">
//               {selectedProject.imageUrls.slice(1, 5).map((imageUrl, index) => (
//                 <div
//                   key={index}
//                   className="image cursor-pointer rounded-xl"
//                   style={{ backgroundImage: `url(${imageUrl})` }}
//                 ></div>
//               ))}
//             </div>
//           </div>
//           <div className="gap-2 mb-5 grid grid-cols-3">
//             <a
//               href="https://hotel-booking-6fdb2.web.app"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <button className="btn hover:bg-orange-300 hover:text-black p-2 border-2 w-full btn-sm">
//                 Live Site
//               </button>
//             </a>
//             <a
//               href="https://github.com/skrehad/hotel-booking"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <button className="btn hover:bg-orange-300 hover:text-black p-2 border-2 w-full btn-sm">
//                 Client-Side Code
//               </button>
//             </a>

//             <a
//               href="https://github.com/skrehad/hotel-booking"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <button className="btn hover:bg-orange-300 hover:text-black p-2 border-2 w-full btn-sm">
//                 Server-Side Code
//               </button>
//             </a>
//           </div>
//           <h2 className="text-3xl text-center mb-5 text-yellow-400">
//             Project Details
//           </h2>
//           <div>
//             {projectData[0].projectAbout.map((about, index) => (
//               <li key={index} className="flex items-center text-lg">
//                 <AiOutlineStar className="text-yellow-500 mr-2" />
//                 {about}
//               </li>
//             ))}
//           </div>
//           <h2 className="text-3xl mt-5 font-bold">
//             Technology Used:
//             <span className="text-yellow-400 ml-2">
//               React, Node.js, Express.js, MongoDB, Firebase, Tailwind CSS, Daisy
//               UI, React Router, React Icons, etc.
//             </span>
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project;

"use client";
import "./Project.css";
import { AiOutlineStar } from "react-icons/ai";

const Project = () => {
  const projectData = [
    {
      id: 1,
      imageUrls: [
        "https://i.ibb.co/27BYxfQ/Home-Hotel-Booking.png",
        "https://i.ibb.co/jTTQTHB/About-Hotel-Booking.png",
        "https://i.ibb.co/GJTmg5R/Admin-Dashboard.png",
        "https://i.ibb.co/wwhkPwK/Hotels-Hotel-Booking.png",
        "https://i.ibb.co/R0sMrj0/Login-Hotel-Booking.png",
      ],
      projectAbout: [
        "User can Login (Google & Facebook) and Register.",
        "Fully responsive design optimized for mobile & tablet.",
        "User dashboard where bookings are managed.",
        "Admin dashboard with full control over hotels, blogs & galleries.",
        "Users can filter hotels based on location, price, and availability.",
        "Database is securely connected for seamless user experience.",
        "Review system for users to rate hotels.",
        "Secure authentication and role-based access control.",
      ],
    },
  ];

  const selectedProject = projectData[0];

  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden py-10">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl text-orange-300 font-bold">
          My Best Project
        </h1>
      </div>

      {/* Project Details */}
      <div className=" mx-auto px-5">
        <h1 className="text-4xl text-center mb-2 font-bold">
          Website Name: <span className="text-yellow-400">Hotel Booking</span>
        </h1>
        <h2 className="text-2xl text-center mb-5 text-yellow-400">
          MERN Stack Website
        </h2>

        {/* Image Gallery */}
        <div className="my-10 h-[500px] grid gap-7 md:grid-cols-2">
          <div
            className="image cursor-pointer h-[500px] rounded-xl"
            style={{
              backgroundImage: `url(${selectedProject.imageUrls[0]})`,
            }}
          ></div>
          <div className="grid  gap-3 md:grid-cols-2">
            {selectedProject.imageUrls.slice(1, 5).map((imageUrl, index) => (
              <div
                key={index}
                className="image cursor-pointer rounded-xl"
                style={{ backgroundImage: `url(${imageUrl})` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-5 mb-10">
          <a
            href="https://hotel-booking-6fdb2.web.app"
            target="_blank"
            rel="noreferrer"
            className="btn px-4 py-2 border-2 rounded-lg text-white hover:bg-orange-400 transition-all"
          >
            Live Site
          </a>
          <a
            href="https://github.com/skrehad/hotel-booking"
            target="_blank"
            rel="noreferrer"
            className="btn px-4 py-2 border-2 rounded-lg text-white hover:bg-orange-400 transition-all"
          >
            Client Code
          </a>
          <a
            href="https://github.com/skrehad/hotel-booking"
            target="_blank"
            rel="noreferrer"
            className="btn px-4 py-2 border-2 rounded-lg text-white hover:bg-orange-400 transition-all"
          >
            Server Code
          </a>
        </div>

        {/* Project Description */}
        <h2 className="text-2xl text-center mb-5 text-yellow-400">
          Project Details
        </h2>
        <ul className="grid gap-3 md:grid-cols-2 text-lg">
          {selectedProject.projectAbout.map((about, index) => (
            <li key={index} className="flex items-center">
              <AiOutlineStar className="text-yellow-500 mr-2" />
              {about}
            </li>
          ))}
        </ul>

        {/* Technologies Used */}
        <h2 className="text-xl mt-5 font-bold text-center">
          Technology Used:{" "}
          <span className="text-yellow-400">
            React, Node.js, Express.js, MongoDB, Firebase, Tailwind CSS, Daisy
            UI, React Router, React Icons, etc.
          </span>
        </h2>
      </div>

      <div className=" text-center my-10">
        <a
          href="/projects"
          target="_blank"
          rel="noreferrer"
          className="btn px-4 py-2 border-2 rounded-lg text-white hover:bg-orange-400 transition-all"
        >
          More Projects
        </a>
      </div>
    </div>
  );
};

export default Project;

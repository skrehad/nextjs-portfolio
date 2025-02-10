// import Image from "next/image";

// const MySkills = () => {
//   return (
//     <div>
//       <div>
//         <div className="flex items-center justify-center pb-5 ">
//           <h1 className="text-2xl md:text-3xl text-center text-orange-300 font-bold inline-block">
//             My Skills
//           </h1>
//         </div>
//       </div>
//       {/*  */}
//       <div className=" mx-auto px-5 lg:pt-10 pt-5 min-h-screen">
//         <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">
//           {/* Frontend Technologies Column */}
//           <div className="relative">
//             <div className="flex flex-col">
//               {/* Header */}
//               <div
//                 className="flex items-center pb-10 ml-2 relative"
//                 data-aos-duration="800"
//                 data-aos="fade-up"
//               >
//                 <div className="absolute left-0 top-0 w-px h-full bg-white" />
//                 <div className="w-5 h-5 rounded-full bg-orange-300 z-10 absolute left-[-9px] top-0" />
//                 <h2 className="text-2xl text-white ml-5">
//                   Frontend Technologies
//                 </h2>
//               </div>

//               {/* Items */}
//               {[
//                 {
//                   icon: "HTML.svg",
//                   title: "HTML - 5",
//                   text: "Proficient in creating structured and accessible web content using HTML.",
//                   duration: "1000",
//                 },
//                 {
//                   icon: "CSS.svg",
//                   title: "CSS - 3",
//                   text: "Skilled in designing visually appealing and responsive web layouts with CSS.",
//                   duration: "1100",
//                 },
//                 {
//                   icon: "Bootstrap.svg",
//                   title: "Bootstrap - 5",
//                   text: "Experienced in using Bootstrap CSS for rapid and efficient UI development.",
//                   duration: "1100",
//                 },
//                 {
//                   icon: "TailwindCSS-Dark.svg",
//                   title: "Tailwind CSS",
//                   text: "Experienced in using Tailwind CSS for rapid and efficient UI development.",
//                   duration: "1200",
//                 },
//                 {
//                   icon: "JavaScript.svg",
//                   title: "JavaScript",
//                   text: "Proficient in JavaScript for dynamic, interactive web application development.",
//                   duration: "1300",
//                 },
//                 {
//                   icon: "TypeScript.svg",
//                   title: "Typescript",
//                   text: "Proficient in Typescript for dynamic, interactive web application development.",
//                   duration: "1400",
//                 },
//                 {
//                   icon: "React-Dark.svg",
//                   title: "React JS",
//                   text: "Skilled in building dynamic, efficient, and scalable user interfaces with React JS.",
//                   duration: "1500",
//                 },
//                 {
//                   icon: "NextJS-Dark.svg",
//                   title: "Next.js",
//                   text: "Expert in Next.js for building fast, SEO-friendly, and scalable web applications.",
//                   duration: "1200",
//                 },
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="relative pb-8 pl-8 ml-2"
//                   data-aos-duration={item.duration}
//                   data-aos="fade-up"
//                 >
//                   <div className="absolute left-0 top-0 w-px h-full bg-white" />
//                   <div className="absolute left-[-15px] top-0 w-[30px] h-[30px]  flex items-center justify-center">
//                     <Image
//                       src={`https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/${item.icon}`}
//                       className="rounded-full"
//                       alt={item.title}
//                       width={30}
//                       height={30}
//                     />
//                   </div>
//                   <div className="flex items-start">
//                     <div className="ml-4">
//                       <h3 className="text-xl font-semibold text-white ">
//                         {item.title}
//                       </h3>
//                       <p className="text-gray-400 mt-2">{item.text}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Backend Technologies Column */}
//           <div className="relative">
//             <div className="flex flex-col">
//               {/* Header */}
//               <div
//                 className="flex items-center pb-10 ml-2 relative"
//                 data-aos-duration="800"
//                 data-aos="fade-up"
//               >
//                 <div className="absolute left-0 top-0 w-px h-full bg-white" />
//                 <div className="w-5 h-5 rounded-full bg-orange-300 z-10 absolute left-[-9px] top-0" />
//                 <h2 className="text-2xl text-white  ml-5">
//                   Backend Technologies
//                 </h2>
//               </div>

//               {[
//                 {
//                   icon: "TypeScript.svg",
//                   title: "Typescript",
//                   text: "Proficient in Typescript for dynamic, interactive web application development.",
//                   duration: "1100",
//                 },
//                 {
//                   icon: "NodeJS-Dark.svg",
//                   title: "Node JS",
//                   text: "Proficient in using Node JS for developing fast and scalable server-side applications.",
//                   duration: "1000",
//                 },
//                 {
//                   icon: "ExpressJS-Dark.svg",
//                   title: "Express JS",
//                   text: "Experienced in building robust web applications and APIs using Express JS.",
//                   duration: "1100",
//                 },
//                 {
//                   icon: "MongoDB.svg",
//                   title: "Mongo DB",
//                   text: "Proficient in using MongoDB for scalable, flexible, and efficient database management.",
//                   duration: "1200",
//                 },
//                 {
//                   icon: "MongoDB.svg",
//                   title: "Mongoose",
//                   text: "Skilled in using Mongoose for seamless MongoDB integration with schema-based data modeling.",
//                   duration: "1200",
//                 },

//                 {
//                   icon: "Firebase-Dark.svg",
//                   title: "Firebase",
//                   text: "Skilled in using Firebase for real-time database, authentication, and hosting solutions.",
//                   duration: "1300",
//                 },
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="relative pb-8 pl-8 ml-2"
//                   data-aos-duration={item.duration}
//                   data-aos="fade-up"
//                 >
//                   <div className="absolute left-0 top-0 w-px h-full bg-white" />
//                   <div className="absolute left-[-15px] top-0 w-[30px] h-[30px]  flex items-center justify-center">
//                     <Image
//                       src={`https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/${item.icon}`}
//                       className="rounded-full"
//                       alt={item.title}
//                       width={30}
//                       height={30}
//                     />
//                   </div>
//                   <div className="flex items-start">
//                     <div className="ml-4">
//                       <h3 className="text-lg text-white font-semibold">
//                         {item.title}
//                       </h3>
//                       <p className="text-gray-400 mt-2">{item.text}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Tools Column */}
//           <div className="relative">
//             <div className="flex flex-col">
//               {/* Header */}
//               <div
//                 className="flex items-center pb-10 ml-2 relative"
//                 data-aos-duration="800"
//                 data-aos="fade-up"
//               >
//                 <div className="absolute left-0 top-0 w-px h-full bg-white" />
//                 <div className="w-5 h-5 rounded-full bg-orange-300 z-10 absolute left-[-9px] top-0" />
//                 <h2 className="text-2xl text-white  ml-5">Tools</h2>
//               </div>

//               {/* Items */}
//               {[
//                 {
//                   icon: "Git.svg",
//                   title: "Git & GitHub",
//                   text: "Proficient in Git for version control and GitHub for collaborative development.",
//                   duration: "1000",
//                 },
//                 {
//                   icon: "VSCode-Dark.svg",
//                   title: "VS Code",
//                   text: "VS Code is a powerful, lightweight code editor with support for extensions, making it ideal for web development across different languages and frameworks.",
//                   duration: "1200",
//                 },
//                 {
//                   icon: "Atom.svg",
//                   title: "Atom",
//                   text: "Atom is a powerful, lightweight code editor with support for extensions, making it ideal for web development across different languages and frameworks.",
//                   duration: "1200",
//                 },
//                 {
//                   icon: "Postman.svg",
//                   title: "Postman",
//                   text: "Postman is an API testing tool that allows developers to send requests and analyze responses, making API integration and debugging easier.",
//                   duration: "1200",
//                 },
//                 {
//                   icon: "Netlify-Dark.svg",
//                   title: "Netlify",
//                   text: "Netlify is a platform for deploying static sites and web applications, offering continuous integration and automated deployments from Git repositories.",
//                   duration: "1200",
//                 },
//                 {
//                   icon: "MongoDB.svg",
//                   title: "MongoDB Atlas",
//                   text: "MongoDB Atlas is a cloud-based database service that simplifies MongoDB deployments, providing automatic scaling, backups, and monitoring.",
//                   duration: "1200",
//                 },
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="relative pb-8 pl-8 ml-2"
//                   data-aos-duration={item.duration}
//                   data-aos="fade-up"
//                 >
//                   <div className="absolute left-0 top-0 w-px h-full bg-white" />
//                   <div className="absolute left-[-15px] top-0 w-[30px] h-[30px]  flex items-center justify-center">
//                     <Image
//                       src={`https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/${item.icon}`}
//                       className="rounded-full"
//                       alt={item.title}
//                       width={30}
//                       height={30}
//                     />
//                   </div>
//                   <div className="flex items-start">
//                     <div className="ml-4">
//                       <h3 className="text-lg text-white font-semibold">
//                         {item.title}
//                       </h3>
//                       <p className="text-gray-400 mt-2">{item.text}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MySkills;

import Image from "next/image";

const skillsData = [
  {
    category: "Frontend Technologies",
    skills: [
      {
        icon: "HTML.svg",
        title: "HTML - 5",
        text: "Proficient in HTML.",
        duration: "1000",
      },
      {
        icon: "CSS.svg",
        title: "CSS - 3",
        text: "Skilled in CSS.",
        duration: "1100",
      },
      {
        icon: "Bootstrap.svg",
        title: "Bootstrap - 5",
        text: "Expert in Bootstrap.",
        duration: "1100",
      },
      {
        icon: "TailwindCSS-Dark.svg",
        title: "Tailwind CSS",
        text: "Experienced in Tailwind CSS.",
        duration: "1200",
      },
      {
        icon: "JavaScript.svg",
        title: "JavaScript",
        text: "Proficient in JavaScript.",
        duration: "1300",
      },
      {
        icon: "TypeScript.svg",
        title: "TypeScript",
        text: "Proficient in TypeScript.",
        duration: "1400",
      },
      {
        icon: "React-Dark.svg",
        title: "React JS",
        text: "Skilled in React JS.",
        duration: "1500",
      },
      {
        icon: "NextJS-Dark.svg",
        title: "Next.js",
        text: "Expert in Next.js.",
        duration: "1200",
      },
    ],
  },
  {
    category: "Backend Technologies",
    skills: [
      {
        icon: "NodeJS-Dark.svg",
        title: "Node JS",
        text: "Proficient in Node.js.",
        duration: "1000",
      },
      {
        icon: "ExpressJS-Dark.svg",
        title: "Express JS",
        text: "Experienced in Express.js.",
        duration: "1100",
      },
      {
        icon: "MongoDB.svg",
        title: "MongoDB",
        text: "Proficient in MongoDB.",
        duration: "1200",
      },
      {
        icon: "Firebase-Dark.svg",
        title: "Firebase",
        text: "Skilled in Firebase.",
        duration: "1300",
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      {
        icon: "Git.svg",
        title: "Git & GitHub",
        text: "Proficient in Git.",
        duration: "1000",
      },
      {
        icon: "VSCode-Dark.svg",
        title: "VS Code",
        text: "Expert in VS Code.",
        duration: "1200",
      },
      {
        icon: "Postman.svg",
        title: "Postman",
        text: "Proficient in Postman.",
        duration: "1200",
      },
      {
        icon: "Netlify-Dark.svg",
        title: "Netlify",
        text: "Skilled in Netlify.",
        duration: "1200",
      },
    ],
  },
];

const SkillCategory = ({
  category,
  skills,
}: {
  category: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  skills: any[];
}) => {
  return (
    <div className="relative">
      <div className="flex flex-col">
        {/* Category Header */}
        <div className="flex items-center pb-6 relative" data-aos="fade-up">
          <div className="absolute left-0 top-0 w-px h-full bg-white" />
          <div className="w-5 h-5 rounded-full bg-orange-300 absolute left-[-9px] top-0" />
          <h2 className="text-xl md:text-2xl text-white ml-5">{category}</h2>
        </div>

        {/* Skill Items */}
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative pb-6 pl-6"
            data-aos="fade-up"
            data-aos-duration={skill.duration}
          >
            <div className="absolute left-0 top-0 w-px h-full bg-white" />
            <div className="absolute left-[-12px] top-0 w-[28px] h-[28px] flex items-center justify-center">
              <Image
                src={`https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/${skill.icon}`}
                alt={skill.title}
                width={28}
                height={28}
                className="rounded-full"
                loading="lazy"
              />
            </div>
            <div className="ml-5">
              <h3 className="text-lg text-white font-semibold">
                {skill.title}
              </h3>
              <p className="text-gray-400 mt-1">{skill.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MySkills = () => {
  return (
    <div className="px-5 py-10 lg:py-16 bg-black text-white">
      {/* Title */}
      <div className="text-center pb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-orange-300">
          My Skills
        </h1>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {skillsData.map((categoryData, index) => (
          <SkillCategory
            key={index}
            category={categoryData.category}
            skills={categoryData.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default MySkills;

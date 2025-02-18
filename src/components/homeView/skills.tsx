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

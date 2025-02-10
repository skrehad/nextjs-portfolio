// "use client";

// import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from "react-icons/fa";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import photo from "../../assets/rehad.jpg";
// import { fadeIn } from "@/src/variants";
// import Link from "next/link";
// import Image from "next/image";

// const Banner = () => {
//   return (
//     <section className="lg:min-h-[78vh] flex items-center lg:mb-28" id="home">
//       <div className="container mx-auto">
//         <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-16">
//           <div className="flex-1 text-center font-secondary lg:text-left">
//             <motion.h1
//               variants={fadeIn("up", 0.3)}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: false, amount: 0.7 }}
//               className="text-4xl font-bold leading-tight lg:text-7xl"
//             >
//               Saiful Islam <br /> <span>Rehad</span>
//             </motion.h1>

//             <motion.div
//               variants={fadeIn("up", 0.4)}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: false, amount: 0.7 }}
//               className="my-6 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-tight"
//             >
//               <span className="text-white mr-4 tex">I am a</span>
//               <TypeAnimation
//                 sequence={[
//                   "Web Developer",
//                   2000,
//                   "React Developer",
//                   2000,
//                   "Frontend Developer",
//                   2000,
//                   "MERN Stack Developer",
//                   2000,
//                 ]}
//                 speed={50}
//                 className="text-orange-200"
//                 wrapper="span"
//                 repeat={Infinity}
//               />
//             </motion.div>
//             <motion.p
//               variants={fadeIn("up", 0.5)}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: false, amount: 0.7 }}
//               className="mb-8 max-w-lg text-lg mx-auto lg:mx-0"
//             >
//               A Passionate Front-end React Developer and MERN Stack Developer
//               based in Dhaka, Bangladesh📍
//             </motion.p>
//             <motion.div
//               variants={fadeIn("up", 0.6)}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: false, amount: 0.7 }}
//               className="flex max-w-max items-center mb-12 mx-auto lg:mx-0"
//             >
//               <Link href="/contact">
//                 <button className="btn p-2 btn-lg border-2 border-gray-300 rounded-lg hover:border-orange-300 hover:text-orange-300 transition-all duration-300">
//                   Contact Me
//                 </button>
//               </Link>

//               <a
//                 href="https://drive.google.com/uc?export=download&id=1JhxQ8JmxL2UC-jIkeD_QXy39167pvXLx"
//                 download="Resume.pdf"
//               >
//                 <button className="btn p-2 ml-5 btn-lg border-2 border-gray-300 rounded-lg hover:border-orange-300 hover:text-orange-300 transition-all duration-300 flex items-center space-x-2">
//                   <FaDownload className="text-[20px]" /> {/* Download Icon */}
//                   <span>My Resume</span>
//                 </button>
//               </a>
//             </motion.div>
//             <motion.div
//               variants={fadeIn("up", 0.7)}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: false, amount: 0.7 }}
//               className="flex text-3xl gap-x-6 max-w-max mx-auto lg:ml-24"
//             >
//               <a
//                 className="cursor-pointer hover:text-orange-200"
//                 href="https://github.com/skrehad"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaGithub />
//               </a>
//               <a
//                 className="cursor-pointer hover:text-orange-200"
//                 href="https://www.linkedin.com/in/md-rehad"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedin />
//               </a>
//               <a
//                 className="cursor-pointer hover:text-orange-200"
//                 href="https://www.facebook.com/md.rehad.7393"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaFacebook />
//               </a>
//             </motion.div>
//           </div>
//           <motion.div
//             variants={fadeIn("down", 0.5)}
//             initial="hidden"
//             whileInView="show"
//             className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
//           >
//             <Image
//               className="rounded-full"
//               height={500}
//               src={photo}
//               alt="author image"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;

"use client";

import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import photo from "../../assets/rehad.jpg";
import { fadeIn } from "@/src/variants";

const Banner = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center py-10 px-5 lg:px-20"
      id="home"
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Section - Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text-4xl font-bold leading-tight lg:text-6xl"
          >
            Saiful Islam <br /> <span className="text-orange-300">Rehad</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="my-6 text-2xl lg:text-3xl font-semibold uppercase"
          >
            <span className="text-white mr-2">I am a</span>
            <TypeAnimation
              sequence={[
                "Web Developer",
                2000,
                "React Developer",
                2000,
                "MERN Stack Developer",
                2000,
              ]}
              speed={50}
              className="text-orange-400"
              wrapper="span"
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="mb-6 max-w-lg mx-auto lg:mx-0 text-lg"
          >
            A Passionate Front-end React Developer and MERN Stack Developer
            based in Dhaka, Bangladesh📍
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Link href="/contact">
              <button className="px-6 py-3 text-lg border-2 border-gray-300 rounded-lg hover:border-orange-300 hover:text-orange-300 transition-all duration-300">
                Contact Me
              </button>
            </Link>

            <a
              href="https://drive.google.com/uc?export=download&id=1JhxQ8JmxL2UC-jIkeD_QXy39167pvXLx"
              download="Resume.pdf"
            >
              <button className="px-6 py-3 text-lg flex items-center gap-2 border-2 border-gray-300 rounded-lg hover:border-orange-300 hover:text-orange-300 transition-all duration-300">
                <FaDownload className="text-[20px]" /> My Resume
              </button>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex text-3xl gap-x-6 mt-6 justify-center lg:justify-start"
          >
            <a
              className="hover:text-orange-300"
              href="https://github.com/skrehad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="hover:text-orange-300"
              href="https://www.linkedin.com/in/md-rehad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className="hover:text-orange-300"
              href="https://www.facebook.com/md.rehad.7393"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </motion.div>
        </div>

        {/* Right Section - Image */}
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex-1 flex justify-center"
        >
          <Image
            className="rounded-full border-4 border-gray-300 shadow-lg"
            height={350}
            width={350}
            src={photo}
            alt="Rehad's Profile Picture"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;

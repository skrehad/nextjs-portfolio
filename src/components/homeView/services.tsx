"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Link from "next/link";

const services = [
  {
    name: "Website Design and Development",
    description:
      "I provide professional and innovative website design and development services to help businesses establish a strong online presence and achieve their digital goals.",
  },
  {
    name: "Full-Stack Development",
    description:
      " As a Full-Stack Developer, I have successfully designed and implemented dynamic web applications, showcasing my proficiency in both front-end and back-end technologies ",
  },
  {
    name: "Responsive Web Design",
    description:
      " As a skilled web developer, I craft visually engaging and user-friendly websites through responsive design techniques.",
  },
  {
    name: "Website Maintenance and Support",
    description:
      "As a dedicated Website Maintenance and Support professional, I excel in providing assistance and ensuring seamless online experiences for clients.",
  },
];

const Services = () => {
  return (
    <section className="my-10" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col justify-center flex-1 mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="text-4xl uppercase text-orange-200 mb-4">
              What I Do.
            </h2>
            <h3 className="text-lg max-w-[455px] text-left mb-8">
              As a MERN stack developer, I specialize in building full-stack web
              applications using MongoDB, Express.js, React.js, and Node.js,
              seamlessly integrating the front-end and back-end to create robust
              and dynamic user experiences.
            </h3>
            <Link href="/projects">
              <button className="btn p-2 btn-lg border-2 border-gray-300 rounded-lg hover:border-orange-300 hover:text-orange-300 transition-all duration-300">
                See my work
              </button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description } = service;

                return (
                  <div
                    className="border-b border-orange/20 mb-[25px] flex"
                    key={index}
                  >
                    <div>
                      <h4 className="text-2xl text-orange-200 tracking-wider font-primary font-semibold mb-4">
                        {name}
                      </h4>
                      <p className="font-secondary text-md leading-light mb-2">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

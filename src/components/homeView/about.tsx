"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Image from "next/image";
import image from "../../assets/rehad2.jpg";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <section className="section pb-20 md:pb-10 lg:pb-20" id="about" ref={ref}>
      <div className="text-center pb-5">
        <h1 className="text-2xl md:text-3xl text-orange-300 font-bold">
          About Me
        </h1>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
          {/* Image Section */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <Image
              src={image}
              alt="About Me"
              width={500}
              height={500}
              objectFit="cover"
              className="rounded-xl"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-3xl text-orange-200 font-bold mb-4">
              About me.
            </h2>
            <p className="mb-6 text-lg">
              As a MERN stack developer, I thrive on transforming innovative
              ideas into reality through code. With expertise in MongoDB,
              Express.js, React.js, and Node.js, I create feature-rich web
              applications. I focus on delivering efficient, scalable, and
              elegant solutions for every project I undertake.
            </p>

            {/* Stats Section */}
            <div className="flex justify-center lg:gap-20  gap-10 text-center">
              <div>
                <div className="text-[40px] font-bold text-orange-200">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <p className="text-sm tracking-wide">
                  Years of <br /> Experience
                </p>
              </div>
              <div>
                <div className="text-[40px] font-bold text-orange-200">
                  {inView ? <CountUp start={0} end={50} duration={3} /> : null}+
                </div>
                <p className="text-sm tracking-wide">
                  Projects <br /> Completed
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

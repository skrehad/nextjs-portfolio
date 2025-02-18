import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0A192F] text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="">
          <h2 className="text-xl font-bold text-white">Rehad</h2>
          <p className="mt-2 text-sm">
            Full Stack Developer | Passionate about Web Technologies
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center">
          {/* Navigation Links */}
          <nav className="flex space-x-6 text-sm">
            <Link href="/" className="hover:text-orange-300 transition">
              Home
            </Link>
            <Link href="/projects" className="hover:text-orange-300 transition">
              Projects
            </Link>
            <Link href="/blog" className="hover:text-orange-300 transition">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-orange-300 transition">
              Contact
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/rehad"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-300 transition text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/rehad"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-300 transition text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/rehad"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-300 transition text-2xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="text-center text-sm text-gray-500 mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Rehad | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

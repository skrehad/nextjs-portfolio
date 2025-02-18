"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

type UserProps = {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
};

const Navbar = ({ session }: { session: UserProps | null }) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Rehad
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 md:items-center">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-orange-300"
                : "hover:text-gray-500 font-bold"
            }
          >
            Home
          </Link>

          {session?.user && (
            <Link
              href="/dashboard"
              className={`font-bold hover:text-gray-300 transition-colors ${
                pathname === "/dashboard" ? "text-orange-300" : ""
              }`}
            >
              Dashboard
            </Link>
          )}

          <Link
            href="/projects"
            className={
              pathname === "/projects"
                ? "text-orange-300"
                : "hover:text-gray-500 font-bold"
            }
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className={
              pathname === "/blog"
                ? "text-orange-300"
                : "hover:text-gray-500 font-bold"
            }
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={
              pathname === "/contact"
                ? "text-orange-300"
                : "hover:text-gray-500 font-bold"
            }
          >
            Contact
          </Link>
          {session?.user ? (
            <button
              onClick={() => signOut()}
              className={" hover:text-gray-500 font-bold"}
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className={
                pathname === "/login"
                  ? "text-orange-300"
                  : "hover:text-gray-500 font-bold"
              }
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-orange-300"
                : "block text-white hover:text-gray-400 font-bold"
            }
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={
              pathname === "/projects"
                ? "text-orange-300"
                : "block text-white hover:text-gray-400 font-bold"
            }
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className={
              pathname === "/blog"
                ? "text-orange-300"
                : "block text-white hover:text-gray-400 font-bold"
            }
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={
              pathname === "/contact"
                ? "text-orange-300"
                : "block text-white hover:text-gray-400 font-bold"
            }
          >
            Contact
          </Link>

          {session?.user ? (
            <button
              onClick={() => signOut()}
              className={" hover:text-gray-500 font-bold"}
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className={
                pathname === "/login"
                  ? "text-orange-300"
                  : "hover:text-gray-500 font-bold"
              }
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

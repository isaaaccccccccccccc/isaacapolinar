
import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const menuItems = [
    { name: "Education", href: "#education" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  const scrollToSection = (href) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="relative z-50 px-6 py-7">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <motion.div
          layoutId="logo"
          className="text-3xl font-black cursor-pointer text-gray-900 dark:text-white"
        >
          IsaacDev<span className="text-primary">.</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-all"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Contact Button */}
          <button
            onClick={() => scrollToSection("#contact")}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-semibold transition-all"
          >
            Contact Me
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-[#111827] z-50 transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } p-8 flex flex-col`}
      >
        <button
          className="self-end text-gray-900 dark:text-white mb-10"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={32} />
        </button>

        <ul className="flex flex-col gap-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="text-xl font-semibold text-gray-900 dark:text-white hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            </li>
          ))}

          {/* Theme Toggle */}
          <li>
            <button
              onClick={toggleTheme}
              className="w-full border border-primary text-primary py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2"
            >
              {theme === "dark" ? (
                <>
                  <Sun size={20} />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon size={20} />
                  Dark Mode
                </>
              )}
            </button>
          </li>

          {/* Contact Button */}
          <li>
            <button
              onClick={() => scrollToSection("#contact")}
              className="w-full bg-primary text-white py-4 rounded-xl text-lg font-bold"
            >
              Contact Me
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;


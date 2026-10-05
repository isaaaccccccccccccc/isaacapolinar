
import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: FaEnvelope,
      title: "Email",
      value: "johnisaacapolinar12@gmail.com",
      link: "mailto:johnisaacapolinar12@gmail.com",
    },
    {
      id: 2,
      icon: FaPhone,
      title: "Phone",
      value: "+63 969 129 2138",
      link: "tel:+639691292138",
    },
    {
      id: 3,
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "View LinkedIn Profile",
      link: "https://www.linkedin.com/in/john-isaac-apolinar/",
    },
    {
      id: 4,
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Tarlac, Philippines",
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Let's Connect
          </h2>

          <div className="w-28 h-1 bg-primary mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I'm always interested in hearing about new opportunities,
              collaborations, and exciting projects. Feel free to reach out
              through any of the channels below.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;

                return (
                  <div
                    key={info.id}
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className="
                        w-12 h-12
                        rounded-full
                        bg-primary/10
                        flex items-center justify-center
                        group-hover:bg-primary/20
                        transition-colors
                      "
                    >
                      <Icon size={18} className="text-primary" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {info.title}
                      </h4>

                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="
              bg-white
              dark:bg-gray-800
              rounded-2xl
              p-8
              shadow-lg
              border
              border-gray-200
              dark:border-gray-700
            "
          >
            <form>
              {/* Email */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  required
                  className="
                    w-full
                    px-4 py-3
                    rounded-lg
                    border
                    border-gray-300
                    dark:border-gray-600
                    bg-white
                    dark:bg-gray-700
                    text-gray-900
                    dark:text-white
                    focus:outline-none
                    focus:border-primary
                    transition-colors
                  "
                />
              </div>

              {/* Subject */}
              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="block mb-2 font-medium text-gray-900 dark:text-white"
                >
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  placeholder="Project Inquiry"
                  required
                  className="
                    w-full
                    px-4 py-3
                    rounded-lg
                    border
                    border-gray-300
                    dark:border-gray-600
                    bg-white
                    dark:bg-gray-700
                    text-gray-900
                    dark:text-white
                    focus:outline-none
                    focus:border-primary
                    transition-colors
                  "
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-gray-900 dark:text-white"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                  className="
                    w-full
                    px-4 py-3
                    rounded-lg
                    border
                    border-gray-300
                    dark:border-gray-600
                    bg-white
                    dark:bg-gray-700
                    text-gray-900
                    dark:text-white
                    focus:outline-none
                    focus:border-primary
                    transition-colors
                    resize-none
                  "
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="
                  w-full
                  bg-primary
                  text-white
                  py-3
                  rounded-lg
                  font-semibold
                  hover:opacity-90
                  transition-all
                "
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;


import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaShopify,
  FaGithub,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiWix,
  SiClaude,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

// Each tool: name, icon component, and a brand color used for the glow/hover
const tools = [
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'React JS', icon: FaReact, color: '#61DAFB' },
  { name: 'Node JS', icon: FaNodeJs, color: '#5FA04E' },
  { name: 'WordPress', icon: FaWordpress, color: '#21759B' },
  { name: 'Wix', icon: SiWix, color: '#0C6EFC' },
  { name: 'Shopify', icon: FaShopify, color: '#7AB55C' },
  { name: 'GitHub', icon: FaGithub, color: '#FFFFFF' },
  { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
  { name: 'Claude AI', icon: SiClaude, color: '#D97757' },
];

// A small spread of durations/delays so the icons don't all bob in sync
const floatDurations = ['3.2s', '3.8s', '4.2s', '3.5s'];
const floatDelays = ['0s', '0.4s', '0.8s', '1.2s', '0.2s', '0.6s'];

const TechStack = () => {
  return (
    <section className="text-white py-20" id="tech-stack">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <p className="text-primary text-sm uppercase tracking-widest mb-2 font-semibold">
            My Toolbox
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Tools &amp; Technologies.
          </h2>
        </div>

        {/* Floating icon grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            const duration = floatDurations[index % floatDurations.length];
            const delay = floatDelays[index % floatDelays.length];

            return (
              <div
                key={tool.name}
                className="tech-float"
                style={{
                  animationDuration: duration,
                  animationDelay: delay,
                }}
              >
                <div
                  className="group flex flex-col items-center justify-center gap-3 aspect-square
                  rounded-2xl bg-[#111a3e] border border-[#1f1641] p-4
                  transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
                >
                  <Icon
                    size={40}
                    style={{ color: tool.color }}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-xs md:text-sm font-medium text-gray-300 text-center">
                    {tool.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .tech-float {
          animation-name: tech-bob;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @keyframes tech-bob {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
};

export default TechStack;

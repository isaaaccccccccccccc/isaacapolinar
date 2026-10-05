import React from 'react';
import { Briefcase, Calendar, Building2, Terminal, Cpu, Layers, Layout } from 'lucide-react';

const Experience = () => {
  const Skills = [
    {
      id: 1,
      name: 'HTML & CSS',
      width: '95%',
      icon: Layout
    },
    {
      id: 2,
      name: 'React js & JavaScript',
      width: '75%',
      icon: Cpu
    },
    {
      id: 3,
      name: 'WordPress & Wix',
      width: '90%',
      icon: Terminal
    },
    {
      id: 4,
      name: 'Python',
      width: '80%',
      icon: Layers
    },
  ];

  const Experiences = [
    {
      id: 1,
      role: 'Web Developer Coach',
      company: 'Prestige Virtual Pro',
      date: 'July 2025'
    },

    {
      id: 2,
      role: 'General VA',
      company: 'Luxury LLC, TaxMedicsER',
      date: 'July 2025- Sept 2025'
    },
    {
      id: 3,
      role: 'Technical Support Representative',
      company: 'Kalesa Halo',
      date: 'Sept 2025 - May 2026'
    },
     {
      id: 4,
      role: 'Virtual Assistant',
      company: 'Freelance',
      date: 'May 2026'
    },
  ];

  return (
    <section className=" text-white py-20 relative overflow-hidden" id="skills">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          <div data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
              Technical <span className="text-primary">Skills</span>
            </h2>
            
            <div className="space-y-8">
              {Skills.map((skill) => {
                const SkillIcon = skill.icon;
                return (
                  <div key={skill.id} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#111a3e] rounded-lg group-hover:bg-primary transition-colors 
                        duration-300">
                          <SkillIcon size={20} className="text-primary group-hover:text-white" />
                        </div>
                        <span className="font-medium tracking-wide">{skill.name}</span>
                      </div>
                      <span className="text-primary font-bold">{skill.width}</span>
                    </div>
                   
                    <div className="h-2 w-full bg-[#131d30] rounded-full p-0.5">
                      <div 
                        className="h-full rounded-full bg-linear-to-r from-primary to-cyan-400 shadow-[0_0_10px_#06a2c2]" 
                        style={{ width: skill.width }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div data-aos="fade-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
              Work <span className="text-primary">Experience</span>
            </h2>
            
            <div className="space-y-6">
              {Experiences.map((exp) => (
                <div 
                  key={exp.id}
                  className="group relative p-6 rounded-2xl bg-[#111a3e] border border-[#1f1641]
                   hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <div className="p-3 bg-[#050816] rounded-xl border border-gray-800 
                      group-hover:border-primary transition-colors">
                        <Briefcase className="text-primary" size={24} />
                      </div>
                    </div>
                    
                    <div className="grow">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-sm
                       text-gray-400">
                        <span className="flex items-center gap-1.5">
                          <Building2 size={14} className="text-primary" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-primary" />
                          {exp.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
import React from 'react';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';

const Certificates = () => {
  const certifications = [
    {
      id: 1,
      title: 'Meta Front-End Developer Professional Certificate',
      issuer: 'Coursera / Meta',
      date: 'Dec 2023',
      link: '#', 
      description: 'Comprehensive program covering React, UX/UI, and front-end optimization.'
    },
    {
      id: 2,
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Oct 2023',
      link: '#',
      description: 'Validation of cloud fluency and foundational AWS knowledge.'
    },
    {
      id: 3,
      title: 'Advanced JavaScript Mastery',
      issuer: 'Udemy',
      date: 'Aug 2023',
      link: '#',
      description: 'Deep dive into asynchronous JS, patterns, and performance tuning.'
    }
  ];

  return (
    <section className=" text-white py-20" id="certificates">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Header Section */}
        <div className="mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-2 font-semibold">Achievements</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Certifications.
          </h2>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              data-aos="zoom-in"
              className="group relative bg-[#111a3e] border border-[#1f1641] p-6 rounded-2xl transition-all
               duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]"
            >
              {/* Badge Icon */}
              <div className="absolute -top-4 -right-4 bg-primary p-3 rounded-xl shadow-lg transform
               group-hover:rotate-12 transition-transform">
                <Award className="text-white" size={24} />
              </div>

              {/* Issuer & Date */}
              <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={14} className="text-primary" /> {cert.issuer}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {cert.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                {cert.description}
              </p>

              {/* Link */}
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white 
                transition-colors border-b border-transparent hover:border-white pb-1"
              >
                View Certificate <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
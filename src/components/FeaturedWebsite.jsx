import React from 'react';
import { ExternalLink } from 'lucide-react';
import brxdge from '../assets/brxdge.png';

const FeaturedWebsite = () => {
  return (
    <section className="text-white py-20" id="featured-website">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="mb-12">
          <p className="text-primary text-sm uppercase tracking-widest mb-2 font-semibold">
            Live Project
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Featured Website
          </h2>
        </div>

        {/* Featured Card */}
        <a
          href="https://brxdge-production.up.railway.app/"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="zoom-in"
          className="group relative block overflow-hidden rounded-2xl bg-[#111a3e] border border-[#1f1641]
          transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_-5px_rgba(6,162,194,0.25)]"
        >
          {/* Screenshot */}
          <div className="relative overflow-hidden">
            <img
              src={brxdge}
              alt="BRXDGE website preview"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300
            flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex
              items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold">
                Visit Website <ExternalLink size={18} />
              </span>
            </div>
          </div>

          {/* Caption */}
          <div className="p-6 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                BRXDGE
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                brxdge-production.up.railway.app
              </p>
            </div>

            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary
            group-hover:text-white transition-colors border-b border-transparent group-hover:border-white pb-1">
              View Live Site <ExternalLink size={14} />
            </span>
          </div>
        </a>

      </div>
    </section>
  );
};

export default FeaturedWebsite;

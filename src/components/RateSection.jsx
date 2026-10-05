import React from 'react';
import { Wallet, CheckCircle2, Star } from 'lucide-react';

const RateSection = () => {
  const plans = [
    {
      id: 1,
      name: 'Starter',
      tagline: 'Landing Page',
      priceCAD: '350',
      pricePHP: '14,000',
      popular: false,
      features: [
        'Single-page responsive site',
        'Up to 5 sections (hero, about, services, etc.)',
        'Mobile, tablet & desktop optimized',
        'Basic SEO setup',
        '1 round of revisions',
        '3–5 day turnaround',
      ],
    },
    {
      id: 2,
      name: 'Standard',
      tagline: 'Business Website',
      priceCAD: '700',
      pricePHP: '28,000',
      popular: true,
      features: [
        'Up to 5 pages (multi-page site)',
        'React-based, fully responsive',
        'Contact form & basic animations',
        'On-page SEO & performance tuning',
        '2 rounds of revisions',
        '1–2 week turnaround',
      ],
    },
    {
      id: 3,
      name: 'Premium',
      tagline: 'Full-Stack Web App',
      priceCAD: '1,200',
      pricePHP: '48,000',
      popular: false,
      features: [
        'Custom web app with backend & database',
        'User authentication & admin dashboard',
        'API integrations as needed',
        'Deployment & hosting setup support',
        '3 rounds of revisions',
        '2–4 week turnaround',
      ],
    },
  ];

  return (
    <section className="text-white py-20" id="rate">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-primary text-sm uppercase tracking-widest mb-2 font-semibold">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            My Rates.
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-xl mx-auto">
            Straightforward packages to fit different project needs. Every project starts with a free
            consultation to scope things out.
          </p>
        </div>

        {/* Rate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              data-aos="zoom-in"
              className={`group relative flex flex-col bg-[#111a3e] border rounded-2xl p-8 text-center
              transition-all duration-300 hover:-translate-y-2
              ${plan.popular
                ? 'border-primary shadow-[0_0_30px_-5px_rgba(6,162,194,0.35)] md:scale-105'
                : 'border-[#1f1641] hover:border-primary/50'}`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1
                bg-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full
                shadow-lg">
                  <Star size={12} fill="currentColor" /> Most Popular
                </span>
              )}

              {/* Icon Badge */}
              <div className="mx-auto mb-6 w-14 h-14 rounded-2xl bg-primary flex items-center justify-center
              shadow-lg group-hover:rotate-6 transition-transform">
                <Wallet className="text-white" size={24} />
              </div>

              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.tagline}</p>

              <div className="mb-2">
                <span className="text-4xl md:text-5xl font-extrabold text-primary">${plan.priceCAD}</span>
                <span className="text-lg font-semibold text-white"> CAD</span>
              </div>
              <p className="text-gray-500 text-xs mb-6">≈ ₱{plan.pricePHP} PHP</p>

              <div className="w-12 h-1 bg-primary mx-auto mb-6 rounded-full"></div>

              <ul className="text-left space-y-3 mb-8 grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold
                transition-all ${plan.popular
                  ? 'bg-primary hover:bg-primary/90 text-white'
                  : 'border border-primary text-primary hover:bg-primary/10'}`}
              >
                Get a Quote
              </a>
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-xs text-center mt-10 max-w-2xl mx-auto">
          Final pricing may vary based on project scope, timeline, and features required. Custom quotes
          available for projects that don't fit neatly into a package.
        </p>

      </div>
    </section>
  );
};

export default RateSection;

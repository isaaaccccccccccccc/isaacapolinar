import brxdge from "./assets/optimized/brxdge.webp";
import campus from "./assets/optimized/campus-creators.webp";
import campusVideo from "./assets/campus-creators.mp4";
import campusVideoWebm from "./assets/campus-creators.webm";
import coffee from "./assets/optimized/sample1.webp";
import mutya from "./assets/optimized/sample4.webp";
import docreq from "./assets/optimized/sample3.webp";
import health from "./assets/optimized/sample6.webp";
import talent from "./assets/optimized/sample2.webp";
import tax from "./assets/optimized/proj7.webp";
import photo from "./assets/optimized/proj8.webp";
import portal from "./assets/optimized/sample5.webp";

export const EMAIL = "johnisaacapolinar12@gmail.com";
export const PHONE = "+63 969 129 2138";
export const LINKEDIN = "https://www.linkedin.com/in/john-isaac-apolinar/";

// Large cards at the top of the work section. `status` is the small label above the name.
// `video` is optional: a list of sources that plays muted on a loop, with `image` as the poster frame.
export const featured = [
  {
    name: "BRXDGE",
    status: "Live project",
    url: "https://brxdge.ca",
    label: "brxdge.ca",
    image: brxdge,
  },
  {
    name: "Campus Creators",
    status: "Ongoing project",
    text: "Connecting brands to campuses",
    url: "https://campus-creators-production.up.railway.app",
    label: "campus-creators-production.up.railway.app",
    image: campus,
    video: [
      { src: campusVideo, type: "video/mp4" },
      { src: campusVideoWebm, type: "video/webm" },
    ],
  },
];

// To add a project: add an entry here. `stack` must match a key in `filters`.
export const filters = [
  { key: "all", label: "All" },
  { key: "react", label: "React + Python" },
  { key: "php", label: "PHP + SQL" },
  { key: "js", label: "HTML, CSS, JS" },
];

const JS = ["HTML", "CSS", "JavaScript"];
const PHP = ["SQL", "PHP", "JavaScript", "HTML", "CSS"];
const REACT = ["ReactJS", "Python", "JavaScript"];

export const projects = [
  { title: "Online Coffee Shop", text: "Modern web cafe", image: coffee, stack: "js", tags: JS },
  { title: "Mutya ng Maligaya", text: "Tabulation system for a pageant", image: mutya, stack: "php", tags: PHP },
  { title: "Online Document Request with QR Authentication", text: "Document request and verification system", image: docreq, stack: "php", tags: PHP },
  { title: "HealthConnect", text: "Patient appointment management platform", image: health, stack: "react", tags: REACT },
  { title: "Talent Agency", text: "Social media influencer talent agency website with live KPIs and media kits", image: talent, stack: "react", tags: REACT },
  { title: "Tax Medics Website", text: "Gives individuals and business owners structure, clarity, and strategic direction through complex IRS and tax situations", image: tax, stack: "react", tags: REACT },
  { title: "Photography Website", text: "Photography built around how you actually run your business", image: photo, stack: "js", tags: JS },
  { title: "Client Portal", text: "Landing page for lead generation", image: portal, stack: "php", tags: PHP, soon: true },
];

export const plans = [
  { tier: "Starter", name: "Landing Page", cad: "$350", php: "₱14,000", features: ["Single-page responsive site", "Up to 5 sections (hero, about, services, etc.)", "Mobile, tablet & desktop optimized", "Basic SEO setup", "1 round of revisions", "3–5 day turnaround"] },
  { tier: "Standard", name: "Business Website", cad: "$700", php: "₱28,000", popular: true, features: ["Up to 5 pages (multi-page site)", "React-based, fully responsive", "Contact form & basic animations", "On-page SEO & performance tuning", "2 rounds of revisions", "1–2 week turnaround"] },
  { tier: "Premium", name: "Full-Stack Web App", cad: "$1,200", php: "₱48,000", features: ["Custom web app with backend & database", "User authentication & admin dashboard", "API integrations as needed", "Deployment & hosting setup support", "3 rounds of revisions", "2–4 week turnaround"] },
];

export const experience = [
  { when: "May 2026", role: "Virtual Assistant", where: "Freelance" },
  { when: "Sept 2025 – May 2026", role: "Technical Support Representative", where: "Kalesa Halo" },
  { when: "July 2025 – Sept 2025", role: "General VA", where: "Luxury LLC, TaxMedicsER" },
  { when: "July 2025", role: "Web Developer Coach", where: "Prestige Virtual Pro" },
];

export const education = [
  { when: "2024 – 2025", title: "BS in Information Technology", school: "Tarlac State University", honor: "Cum laude", text: "Specialized in Network Administration: managing, maintaining, securing, and troubleshooting the networks that let devices and users communicate." },
  { when: "2020 – 2021", title: "K-12 Senior High, ICT", school: "AMA Computer College, Tarlac", honor: "Academic excellence", text: "Practical skills in computers, digital tools, networking, programming, and multimedia." },
];

export const toolbox = [
  { group: "Front end", items: ["HTML5", "CSS3", "JavaScript", "React JS", "Tailwind CSS"] },
  { group: "Back end & data", items: ["Node JS", "Python", "PHP", "SQL"] },
  { group: "Site builders", items: ["WordPress", "Wix", "Shopify"] },
  { group: "Workflow", items: ["GitHub", "VS Code", "Claude AI"] },
];

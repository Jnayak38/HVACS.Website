export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const services = [
  {
    title: "HVAC Validation Documentation",
    summary: "GMP-focused HVAC qualification documents, test protocols, reporting and compliance support.",
    bullets: ["DQ/IQ/OQ/PQ", "SOP Preparation", "HVAC Qualification", "Recovery Test", "Pressure Mapping"],
    outcome: "Audit-ready documentation with clear acceptance criteria, field records and traceable summary reporting."
  },
  {
    title: "Utility Engineering Consultancy",
    summary: "Practical engineering support for critical pharma utilities, capacity reviews and reliability upgrades.",
    bullets: ["Chilled Water Systems", "WFI/PW Systems", "Compressed Air", "Steam Systems"],
    outcome: "Capacity, reliability and operating recommendations for plant utilities supporting regulated production."
  },
  {
    title: "HVAC Design Consultancy",
    summary: "Cleanroom-oriented HVAC design inputs from concept to commissioning support.",
    bullets: ["Heat Load Calculation", "Duct Design", "Pipe Sizing", "Cleanroom Design"],
    outcome: "Design inputs that connect room classification, heat load, pressure cascade, airflow and maintainability."
  },
  {
    title: "Energy Audit & Optimization",
    summary: "Energy performance assessments for HVAC and utilities with implementation-focused saving plans.",
    bullets: ["Chiller Optimization", "Pump Efficiency", "Energy Saving Analysis"],
    outcome: "Prioritized saving actions for chillers, pumps, AHUs and utility operating strategy."
  },
  {
    title: "Troubleshooting Services",
    summary: "Root cause analysis for recurring process area, cleanroom and utility performance issues.",
    bullets: ["AHU Issues", "Pressure Problems", "Temperature Variation", "Humidity Issues"],
    outcome: "Measured diagnosis and corrective actions for unstable temperature, humidity, airflow and pressure."
  },
  {
    title: "Water System Consultancy",
    summary: "Design review, operational support and compliance documentation for pharma water systems.",
    bullets: ["PW/WFI Loops", "Distribution Reviews", "Sanitization Strategy", "Validation Support"],
    outcome: "Water system guidance covering distribution, sanitization, validation readiness and operating controls."
  }
];

export const industries = [
  "Pharmaceuticals",
  "Hospitals",
  "Laboratories",
  "Food Industries",
  "API Plants",
  "Cleanroom Facilities"
];

export const projects = [
  {
    title: "HVAC Validation Projects",
    image: "/images/project-validation.png",
    description: "Qualification documentation, cleanroom recovery testing, pressure cascade verification and GMP-ready validation reports.",
    scope: ["DQ/IQ/OQ/PQ", "Recovery test", "Pressure mapping"]
  },
  {
    title: "Utility Engineering Projects",
    image: "/images/project-utility.png",
    description: "Chilled water, compressed air, steam and pharma water utility reviews for reliability, capacity and compliance.",
    scope: ["Capacity review", "PW/WFI systems", "Reliability actions"]
  },
  {
    title: "Energy Optimization Cases",
    image: "/images/project-energy.png",
    description: "Chiller sequencing, pump efficiency checks and operating strategy improvements for lower energy cost.",
    scope: ["Chiller sequencing", "Pump efficiency", "Operating strategy"]
  },
  {
    title: "Cleanroom HVAC Consultancy",
    image: "/images/project-cleanroom.png",
    description: "Cleanroom HVAC planning, design review, airflow concepts and troubleshooting support for controlled environments.",
    scope: ["Design review", "Airflow concept", "Pressure cascade"]
  }
];

export const blogPosts = [
  {
    title: "GMP Expectations for HVAC Qualification in Pharma Facilities",
    category: "GMP Guidelines",
    readTime: "6 min read",
    excerpt: "A practical look at documentation, test strategy and traceability for compliant HVAC qualification."
  },
  {
    title: "How to Approach Cleanroom Pressure Mapping",
    category: "HVAC Validation",
    readTime: "5 min read",
    excerpt: "Pressure cascade verification methods for injectable, API and cleanroom manufacturing areas."
  },
  {
    title: "Cleanroom HVAC Design Inputs That Reduce Rework",
    category: "Cleanroom Engineering",
    readTime: "7 min read",
    excerpt: "Key decisions around airflow, filtration, zoning and utilities that improve project execution."
  },
  {
    title: "Energy Saving Opportunities in Chilled Water Plants",
    category: "Energy Saving",
    readTime: "4 min read",
    excerpt: "Where chiller plants commonly lose efficiency and how to prioritize optimization work."
  },
  {
    title: "Utility Readiness for Pharma Manufacturing Expansion",
    category: "Pharma Utilities",
    readTime: "6 min read",
    excerpt: "A checklist-driven approach to chilled water, steam, compressed air, PW and WFI capacity planning."
  }
];

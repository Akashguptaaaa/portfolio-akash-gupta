const experiences = [
  {
    company: "Wegofin Digital Solution",
    role: "Software Developer",
    period: "August 2024 - Present",
    highlights: [
      "Architected an in-house payment gateway across Pay-In, Payout, Settlement, and Reconciliation in distributed Laravel microservices.",
      "Delivered production microservices for Merchant Onboarding & KYC, Collections, DLMS, MMS, FRM, and S3 file storage.",
      "Implemented SHA-256 request signing for secure Service-to-Service communication.",
      "Integrated Aadhaar, PAN, and bank verification APIs to accelerate merchant onboarding.",
      "Translated PRD to FRD with API contracts, validations, workflows, and edge-case handling."
    ],
    tech: "PHP 8.x, Laravel 10, MySQL, AWS S3, REST APIs, SHA-256, JWT, Jira, Microservices"
  },
  {
    company: "Manektech Pvt Ltd",
    role: "Software Engineer",
    period: "April 2023 - July 2024",
    highlights: [
      "Delivered 3 end-to-end Laravel projects across PropTech, crypto trading, and EdTech domains.",
      "Built admin dashboard and third-party valuation API integration for Truppraisal.",
      "Designed secure crypto wallet and trading APIs with JWT-authenticated endpoints for Khumo.",
      "Engineered full quiz engine with scoring and progress tracking for 3D Anatomy."
    ],
    tech: "PHP, Laravel, MySQL, REST APIs, JWT Authentication, Blockchain API, JavaScript, jQuery"
  },
  {
    company: "Tailored Solutions Pvt Ltd",
    role: "PHP Developer",
    period: "August 2021 - April 2023",
    highlights: [
      "Owned backend delivery on 6 projects including booking, tracking, reporting, and food delivery systems.",
      "Implemented RBAC/ACL to control granular permissions for multiple user roles.",
      "Used Crudbooster for rapid admin panel scaffolding and faster delivery."
    ],
    tech: "PHP, Laravel, MySQL, Crudbooster, RESTful APIs, ACL, JavaScript"
  },
  {
    company: "Darstek Trading & Solution Pvt Ltd",
    role: "Software Developer Intern",
    period: "February 2020 - August 2020",
    highlights: [
      "Built a complete Laravel e-commerce platform with product listing, cart, orders, and admin modules."
    ],
    tech: "PHP, Laravel, MySQL"
  }
];

function Experience() {
  return (
    <section className="card">
      <h2>Professional Experience</h2>
      <div className="timeline">
        {experiences.map((exp) => (
          <article key={`${exp.company}-${exp.period}`} className="timeline-item">
            <h3>{exp.role}</h3>
            <p className="meta">
              <strong>{exp.company}</strong> | {exp.period}
            </p>
            <ul>
              {exp.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="tech-stack">
              <strong>Tech:</strong> {exp.tech}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;

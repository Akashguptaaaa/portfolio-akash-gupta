const skills = {
  Backend: [
    "PHP 8.x",
    "Laravel 10/11",
    "RESTful API Design",
    "Microservices",
    "Queues/Jobs",
    "Webhooks",
    "S2S Communication"
  ],
  "Security & Payments": [
    "SHA-256 Hashing",
    "JWT Authentication",
    "Pay-In/Payout Systems",
    "KYC/AML Integration",
    "Penny Drop/Penny-less Verification",
    "Aadhaar & PAN APIs"
  ],
  Database: ["MySQL", "Query Optimization", "Multi-tenant DB Architecture", "Database Design"],
  "Cloud & DevOps": ["AWS S3", "AWS EC2", "AWS Route 53", "Git", "Bitbucket"],
  Frontend: ["React.js", "JavaScript (ES6+)", "jQuery", "HTML5", "CSS3", "Bootstrap"],
  Tools: ["Cursor AI", "Visual Studio Code", "Jira", "Postman", "Agile/Scrum"]
};

function TechnicalSkills() {
  return (
    <section className="card">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, values]) => (
          <div key={category} className="skill-group">
            <h3>{category}</h3>
            <ul>
              {values.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechnicalSkills;

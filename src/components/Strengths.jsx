const strengths = [
  "4.8+ years of Laravel backend expertise across fintech, crypto, property, and e-commerce domains.",
  "Strong integration experience with Aadhaar, PAN, bank verification, and payment gateway APIs.",
  "Hands-on architect of microservice-based systems with focus on scalability and fault tolerance.",
  "Comfortable in Agile environments with Git workflows, PR reviews, sprint planning, and client communication.",
  "Productive with AI-assisted development tools like Cursor for code generation, debugging, and review acceleration."
];

function Strengths() {
  return (
    <section className="card">
      <h2>Key Strengths</h2>
      <ul>
        {strengths.map((strength) => (
          <li key={strength}>{strength}</li>
        ))}
      </ul>
    </section>
  );
}

export default Strengths;

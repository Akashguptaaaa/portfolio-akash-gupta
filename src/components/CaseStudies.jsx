const caseStudies = [
  {
    emoji: "💳",
    title: "In-house Payment Gateway Platform",
    domain: "Fintech | Wegofin Digital Solution",
    image: "https://dummyimage.com/480x300/e0ecff/1e3a8a.png&text=Payment+API+%26+Disputes",
    problem:
      "Business needed a single reliable platform for Pay-In, Payout, dispute lifecycle handling, settlement, and reconciliation with secure service-to-service communication.",
    contribution: [
      "Designed microservice boundaries for onboarding, collections, dispute lifecycle management (DLMS), merchant management, fraud risk, and document storage.",
      "Implemented SHA-256 request signing and JWT-based API security between services.",
      "Defined FRD documents from PRD with API contracts, validation rules, and failure scenarios."
    ],
    outcome:
      "Enabled high-volume transaction and dispute operations with stronger internal API trust, faster issue resolution flows, and cleaner service ownership for faster releases."
  },
  {
    emoji: "₿",
    title: "Khumo Crypto Trading APIs",
    domain: "Crypto Trading | Manektech Pvt Ltd",
    image: "https://dummyimage.com/480x300/e8f5ff/0f172a.png&text=Crypto+Wallet+API",
    problem:
      "Platform required secure wallet and trade operations with authenticated APIs and dependable external blockchain integrations.",
    contribution: [
      "Built JWT-authenticated wallet and trading endpoints with strict request validation.",
      "Integrated blockchain APIs for transaction execution and status synchronization.",
      "Improved endpoint structure to separate trading logic from wallet/account services."
    ],
    outcome:
      "Provided stable backend flows for wallet and trading features while improving maintainability of critical transaction APIs."
  },
  {
    emoji: "🧠",
    title: "3D Anatomy Quiz Engine",
    domain: "EdTech | Manektech Pvt Ltd",
    image: "https://dummyimage.com/480x300/edf7ed/14532d.png&text=Learning+Quiz+API",
    problem:
      "Learning platform needed a full-featured quiz backend to support category-wise tests, scoring, and learner progress tracking.",
    contribution: [
      "Developed question bank and category management APIs with reusable admin controls.",
      "Implemented scoring and progress logic for attempt history and learning insights.",
      "Structured quiz modules for easy extension with new categories and content."
    ],
    outcome:
      "Delivered a scalable quiz foundation that supported interactive learning and better student performance tracking."
  }
];

function CaseStudies() {
  return (
    <section className="card">
      <h2>🤖 Case Studies 🤖</h2>
      <div className="case-studies-grid">
        {caseStudies.map((item, index) => (
          <article
            key={item.title}
            className={`case-study-card ${index % 2 === 1 ? "reverse" : ""}`}
          >
            <span className="ai-side-icon" aria-hidden="true">
              {index % 2 === 1 ? "🧠" : "🤖"}
            </span>
            <img src={item.image} alt={`${item.title} API visual`} className="case-image" />
            <div className="case-content">
              <h3>
                {item.emoji} {item.title}
              </h3>
              <p className="meta">{item.domain}</p>
              <p>
                <strong>Problem:</strong> {item.problem}
              </p>
              <p>
                <strong>My Contribution:</strong>
              </p>
              <ul>
                {item.contribution.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="case-outcome">
                <strong>Outcome:</strong> {item.outcome}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CaseStudies;

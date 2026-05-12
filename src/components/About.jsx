function About() {
  return (
    <section id="about" className="card about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I'm a passionate Laravel developer and backend engineer with expertise in building scalable web applications. 
          With a strong foundation in web development and a focus on clean code practices, I strive to create solutions 
          that are both efficient and maintainable.
        </p>
        <p>
          I have experience working with modern web technologies, databases, and server architectures. My journey in 
          software development has taught me the importance of continuous learning and adapting to new challenges.
        </p>
        <div className="about-highlights">
          <div className="highlight-card">
            <h3>Backend Development</h3>
            <p>Specialized in Laravel, PHP, and API development</p>
          </div>
          <div className="highlight-card">
            <h3>Problem Solving</h3>
            <p>Focused on creating efficient solutions for complex challenges</p>
          </div>
          <div className="highlight-card">
            <h3>Continuous Learning</h3>
            <p>Always exploring new technologies and best practices</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

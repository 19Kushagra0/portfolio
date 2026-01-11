import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Kushagra Sharma</h1>
        <p className="subtitle">Frontend Developer • Next.js • JavaScript</p>

        <div className="buttons">
          <a target="_blank" href="https://github.com/19Kushagra0">
            GitHub
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/kushagra-sharma-ks/"
          >
            Linkdin
          </a>
        </div>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Next.js</span>
          <span>Node.js</span>
          <span>Frontend Development</span>
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="projects">
          <div className="card">
            <h3>AI Chatbot UI</h3>
            <p>Modern chat UI built using Next.js.</p>
          </div>

          <div className="card">
            <h3>Portfolio Website</h3>
            <p>Clean and responsive personal portfolio.</p>
          </div>
        </div>
      </section>

      <footer>© {new Date().getFullYear()} Kushagra Sharma • Delhi</footer>
    </main>
  );
}

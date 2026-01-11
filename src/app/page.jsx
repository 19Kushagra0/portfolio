import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Kushagra Sharma</h1>
        <p className="subtitle">Frontend Developer • Next.js • JavaScript</p>

        <div className="buttons">
          <a href="https://github.com/" target="_blank">
            GitHub
          </a>
          <a href="mailto:19kushagra0@gmail.com">Contact</a>
        </div>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>HTML5</span>
          <span>CSS3</span>
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

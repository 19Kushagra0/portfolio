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
        <h2>Carrer objective</h2>
        <p>
          Frontend Developer learning and working with Next.js and modern UI
          development, looking for a frontend role to grow and contribute to
          real-world projects.
        </p>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>React</span>
          <span>Next.js</span>
          <span>Frontend Development</span>
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="projects">
          <div className="projects-box">
            <div className="card">
              <h3>Awwwards homepage clone</h3>
              <p>Modern UI built using Next.js.</p>

              <div className="card-links">
                <a
                  className="live-project"
                  href="https://awwwards-sotd.netlify.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a
                  className="github-project"
                  href="https://github.com/19Kushagra0/awwwards-homepage-clone"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="card">
              <h3>Baremetrics hompage clone</h3>
              <p>Modern UI built using React.</p>

              <div className="card-links">
                <a
                  className="live-project"
                  href="https://baremetrics-hompage-clone.netlify.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a
                  className="github-project"
                  href="https://github.com/19Kushagra0/baremetrics-hompage-clone"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="projects-box">
            <div className="card">
              <h3>Play-ht homepage clone</h3>
              <p>Modern UI built using React.</p>

              <div className="card-links">
                <a
                  className="live-project"
                  href="https://play-ht.netlify.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a
                  className="github-project"
                  href="https://github.com/19Kushagra0/play.ht-homepage-clone"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="card">
              <h3>X homepage</h3>
              <p>
                A simple X homepage clone built with Next.js, featuring full
                CRUD functionality.
              </p>

              <div className="card-links">
                <a
                  className="live-project"
                  href="https://x-homepage-with-crud.vercel.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a
                  className="github-project"
                  href="https://github.com/19Kushagra0/x-homepage-with-crud"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="projects-box">
            <div className="card">
              <h3>AI chatbot</h3>
              <p>
                AI chatbot built using Next.js and React with Google Gemini API
                integration
              </p>

              <div className="card-links">
                <a
                  className="live-project"
                  href="https://ai-chatbot-one-lemon-35.vercel.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a
                  className="github-project"
                  href="https://github.com/19Kushagra0/ai-chatbot"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <h2>Work Experience</h2>
      </section>
      <footer>© {new Date().getFullYear()} Kushagra Sharma • Delhi</footer>
    </main>
  );
}

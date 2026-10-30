
import { Head } from '@inertiajs/react';

export default function Home({ projects = [] }) {
    const skills = [
        'HTML', 'CSS', 'JavaScript',
        'Java', 'React', 'Laravel',
    ];

    return (
        <div className="portfolio">
            <Head title="Bobby Dacanay | Portfolio" />

            <style>{`
                * {
                    box-sizing: border-box;
                    scroll-behavior: smooth;
                }

                body {
                    margin: 0;
                    font-family: Arial, sans-serif;
                }

                .portfolio {
                    --bg: #0b1020;
                    --card: #111a2e;
                    --blue: #60a5fa;
                    --text: #f8fafc;
                    --muted: #aab7cc;
                    background: var(--bg);
                    color: var(--text);
                    min-height: 100vh;
                    overflow: hidden;
                }

                .container {
                    width: min(1100px, 90%);
                    margin: auto;
                }

                .navbar {
                    position: sticky;
                    top: 0;
                    z-index: 10;
                    background: rgba(11,16,32,.94);
                    backdrop-filter: blur(12px);
                    border-bottom: 1px solid #24314a;
                }

                .nav-inner {
                    min-height: 76px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                }

                .logo {
                    font-size: 26px;
                    font-weight: bold;
                    color: var(--blue);
                    text-decoration: none;
                }

                .nav-links {
                    display: flex;
                    gap: 24px;
                    flex-wrap: wrap;
                }

                .nav-links a {
                    color: var(--muted);
                    text-decoration: none;
                    font-size: 14px;
                    transition: color .25s;
                }

                .nav-links a:hover {
                    color: var(--blue);
                }

                .hero {
                    min-height: 570px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 50px;
                    padding-top: 75px;
                    padding-bottom: 75px;
                }

                .hero-content {
                    flex: 1;
                    animation: fadeUp .8s ease both;
                }

                .eyebrow {
                    color: var(--blue);
                    letter-spacing: 2px;
                    font-size: 13px;
                    font-weight: bold;
                }

                .hero h1 {
                    font-size: clamp(38px, 6vw, 65px);
                    line-height: 1.12;
                    margin: 18px 0;
                }

                .hero h1 span {
                    color: var(--blue);
                }

                .hero h2 {
                    color: var(--muted);
                    font-size: clamp(19px, 3vw, 25px);
                    font-weight: normal;
                }

                .description {
                    color: var(--muted);
                    line-height: 1.9;
                    max-width: 580px;
                    font-size: 16px;
                }

                .btn {
                    display: inline-block;
                    background: #3b82f6;
                    color: white;
                    text-decoration: none;
                    padding: 14px 22px;
                    border-radius: 10px;
                    font-weight: bold;
                    margin-top: 18px;
                    transition: transform .25s, box-shadow .25s;
                }

                .btn:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 10px 30px #3b82f644;
                }

                .photo-wrapper {
                    flex-shrink: 0;
                    width: clamp(200px, 30vw, 330px);
                    aspect-ratio: 1;
                    padding: 6px;
                    border-radius: 50%;
                    background: linear-gradient(135deg,
                        #60a5fa, #6366f1, #38bdf8);
                    box-shadow: 0 0 45px #3b82f633;
                    animation: float 4s ease-in-out infinite;
                }

                .profile-photo {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 50%;
                    border: 4px solid var(--bg);
                    display: block;
                }

                .section {
                    padding: 85px 0;
                    scroll-margin-top: 75px;
                }

                .section.alt {
                    background: #0e1628;
                    border-top: 1px solid #1d2a41;
                    border-bottom: 1px solid #1d2a41;
                }

                .section-title {
                    font-size: clamp(28px, 4vw, 38px);
                    margin: 0 0 16px;
                }

                .section-title span {
                    color: var(--blue);
                }

                .about-text {
                    max-width: 780px;
                    color: var(--muted);
                    line-height: 1.9;
                    font-size: 16px;
                }

                .skill-grid {
                    display: grid;
                    grid-template-columns:
                        repeat(auto-fit, minmax(130px, 1fr));
                    gap: 15px;
                    margin-top: 30px;
                }

                .skill-card {
                    background: var(--card);
                    border: 1px solid #263752;
                    padding: 22px 15px;
                    text-align: center;
                    border-radius: 12px;
                    color: #bfdbfe;
                    font-weight: bold;
                    transition: transform .25s, border-color .25s;
                }

                .skill-card:hover {
                    transform: translateY(-6px);
                    border-color: var(--blue);
                }

                .project-grid {
                    display: grid;
                    grid-template-columns:
                        repeat(auto-fit, minmax(min(100%, 260px), 1fr));
                    gap: 20px;
                    margin-top: 30px;
                }

                .project-card {
                    background: var(--card);
                    border: 1px solid #263752;
                    border-radius: 14px;
                    padding: 24px;
                    transition: transform .25s, border-color .25s;
                    overflow-wrap: anywhere;
                }

                .project-card:hover {
                    transform: translateY(-5px);
                    border-color: var(--blue);
                }

                .project-card h3 {
                    margin-top: 0;
                    font-size: 20px;
                }

                .project-card p {
                    color: var(--muted);
                    line-height: 1.8;
                }

                .status {
                    display: inline-block;
                    background: #1e3a5f;
                    color: #93c5fd;
                    padding: 7px 12px;
                    border-radius: 30px;
                    font-size: 12px;
                }

                .contact-box {
                    background: var(--card);
                    border: 1px solid #263752;
                    padding: 30px;
                    border-radius: 16px;
                    max-width: 700px;
                }

                .email {
                    color: var(--blue);
                    overflow-wrap: anywhere;
                    text-decoration: none;
                    font-weight: bold;
                }

                .footer {
                    border-top: 1px solid #24314a;
                    text-align: center;
                    padding: 25px 15px;
                    color: var(--muted);
                    font-size: 14px;
                }

                .reveal {
                    animation: fadeUp .8s ease both;
                }

                @keyframes fadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(25px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }

                @media (max-width: 700px) {
                    .nav-inner {
                        padding-top: 15px;
                        padding-bottom: 15px;
                        flex-direction: column;
                    }

                    .nav-links {
                        justify-content: center;
                        gap: 15px;
                    }

                    .hero {
                        flex-direction: column-reverse;
                        text-align: center;
                        padding-top: 55px;
                        padding-bottom: 65px;
                        gap: 30px;
                        min-height: auto;
                    }

                    .photo-wrapper {
                        width: min(230px, 65vw);
                    }

                    .description {
                        margin-left: auto;
                        margin-right: auto;
                    }

                    .section {
                        padding: 60px 0;
                    }

                    .contact-box {
                        padding: 22px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    *, *::before, *::after {
                        animation: none !important;
                        transition: none !important;
                        scroll-behavior: auto !important;
                    }
                }
            `}</style>

            {/* NAVBAR */}
            <nav className="navbar">
                <div className="container nav-inner">
                    <a href="#home" className="logo">Bobby.</a>

                    <div className="nav-links">
                        {['Home', 'About', 'Skills', 'Projects', 'Contact']
                            .map(item => (
                                <a key={item}
                                   href={`#${item.toLowerCase()}`}>
                                    {item}
                                </a>
                            ))}
                    </div>
                </div>
            </nav>

            {/* HOME */}
            <header id="home" className="container hero">
                <div className="hero-content">
                    <p className="eyebrow">
                        BSIT STUDENT | ASPIRING WEB DEVELOPER
                    </p>

                    <h1>
                        Hi, I'm <span>Bobby Dacanay.</span>
                    </h1>

                    <h2>Aspiring Web Developer</h2>

                    <p className="description">
                        Welcome to my personal portfolio! I'm a Bachelor
                        of Science in Information Technology (BSIT)
                        student interested in web development, programming,
                        and creating useful digital experiences.
                    </p>

                    <a href="#projects" className="btn">
                        Explore My Projects →
                    </a>
                </div>

                <div className="photo-wrapper">
                    <img
                        src="/images/profile.jpg"
                        alt="Bobby's profile"
                        className="profile-photo"
                    />
                </div>
            </header>

            {/* ABOUT */}
            <section id="about" className="section alt">
                <div className="container reveal">
                    <h2 className="section-title">
                        About <span>Me</span>
                    </h2>

                    <p className="about-text">
                        Hello! I'm Bobby Dacanay, a BSIT student and
                        aspiring web developer.

                        I enjoy learning about website design, programming,
                        and application development. I am continuously
                        improving my skills through practice and hands-on
                        projects.

                        My goal is to become a skilled web developer
                        and create reliable and user-friendly websites.
                    </p>
                </div>
            </section>

            {/* SKILLS */}
            <section id="skills" className="section">
                <div className="container reveal">
                    <h2 className="section-title">
                        My <span>Skills</span>
                    </h2>

                    <p className="description">
                        Technologies I am learning and practicing.
                    </p>

                    <div className="skill-grid">
                        {skills.map(skill => (
                            <div className="skill-card" key={skill}>
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" className="section alt">
                <div className="container reveal">
                    <h2 className="section-title">
                        My <span>Projects</span>
                    </h2>

                    <p className="description">
                        Here are the projects in my portfolio.
                    </p>

                    <div className="project-grid">
                        {projects.length === 0 ? (
                            <p className="description">
                                No projects available yet.
                            </p>
                        ) : (
                            projects.map(project => (
                                <article
                                    key={project.id}
                                    className="project-card"
                                >
                                    <h3>{project.title}</h3>

                                    <p>
                                        {project.description ||
                                            'No description available.'}
                                    </p>

                                    <span className="status">
                                        {project.status}
                                    </span>
                                </article>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="section">
                <div className="container reveal">
                    <h2 className="section-title">
                        Let's <span>Connect</span>
                    </h2>

                    <div className="contact-box">
                        <p className="description">
                            Have a project idea or want to connect?
                            Feel free to send me an email.
                        </p>

                        <p>
                            <strong>Email:</strong>{' '}
                            <a
                                href="mailto:dacanaybobby@gmail.com"
                                className="email"
                            >
                                dac anaybobby@gmail.com
                            </a>
                        </p>

                        <a
                            href="mailto:dacanaybobby@gmail.com"
                            className="btn"
                        >
                            Send Me an Email ✉
                        </a>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer">
                © {new Date().getFullYear()} Bobby Dacanay
                {' | '}Personal Portfolio
            </footer>
        </div>
    );
}

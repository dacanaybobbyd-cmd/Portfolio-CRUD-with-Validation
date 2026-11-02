import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import '../../css/portfolio.css';

export default function Home({ projects = [] }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const skills = ['HTML', 'CSS', 'JavaScript', 'Java', 'React', 'Laravel'];
    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="portfolio-shell">
            <Head title="Bobby Dacanay | Portfolio" />
            <header className="site-header">
                <nav className="nav-wrap container">
                    <a className="brand" href="#home" onClick={closeMenu}>BD<span>.</span></a>
                    <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span><span></span><span></span>
                    </button>
                    <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(item => (
                            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
                        ))}
                        <Link className="nav-manage" href="/projects" onClick={closeMenu}>Manage Projects</Link>
                    </div>
                </nav>
            </header>

            <main>
                <section className="hero container" id="home">
                    <div className="hero-copy">
                        <p className="eyebrow">BSIT STUDENT · WEB DEVELOPER</p>
                        <h1>Hi, I'm <span>Bobby Dacanay.</span></h1>
                        <h2>Building simple ideas into useful digital experiences.</h2>
                        <p className="lead">I am a student passionate about web development, learning new technologies, and creating responsive applications.</p>
                        <div className="hero-actions"><a className="button primary" href="#projects">Explore My Projects</a><a className="button secondary" href="#contact">Contact Me</a></div>
                    </div>
                    <div className="portrait-frame"><img src="/images/profile.jpg" alt="Bobby Dacanay" onError={e => { e.currentTarget.style.display = 'none'; }} /><div className="portrait-fallback">BD</div></div>
                </section>

                <section className="section section-alt" id="about"><div className="container narrow">
                    <p className="eyebrow">GET TO KNOW ME</p><h2 className="section-title">About <span>Me</span></h2>
                    <p className="section-copy">I am Bobby Dacanay, a BSIT student who enjoys exploring web technologies and developing practical systems. I continue to improve my skills through hands-on projects and learning.</p>
                </div></section>

                <section className="section" id="skills"><div className="container">
                    <p className="eyebrow">WHAT I WORK WITH</p><h2 className="section-title">My <span>Skills</span></h2>
                    <div className="skill-grid">{skills.map(skill => <div className="skill-card" key={skill}>{skill}</div>)}</div>
                </div></section>

                <section className="section section-alt" id="projects"><div className="container">
                    <div className="section-heading-row"><div><p className="eyebrow">SELECTED WORK</p><h2 className="section-title">My <span>Projects</span></h2></div><Link className="button secondary" href="/projects">Manage Projects</Link></div>
                    {projects.length ? <div className="project-grid">{projects.map(project => <article className="project-card" key={project.id}><div className="project-top"><span className={`status status-${project.status.toLowerCase().replaceAll(' ', '-')}`}>{project.status}</span></div><h3>{project.title}</h3><p>{project.description || 'No description provided.'}</p></article>)}</div> : <div className="empty-state"><p>No projects have been added yet.</p><Link href="/projects">Add your first project →</Link></div>}
                </div></section>

                <section className="section" id="contact"><div className="container narrow contact-panel">
                    <p className="eyebrow">GET IN TOUCH</p><h2 className="section-title">Let's <span>Connect</span></h2><p className="section-copy">Have a project idea or want to connect? Send me an email.</p>
                    <a className="button primary" href="mailto:dacanaybobby@gmail.com">dacanaybobby@gmail.com</a>
                </div></section>
            </main>
            <footer className="site-footer">© {new Date().getFullYear()} Bobby Dacanay · Personal Portfolio</footer>
        </div>
    );
}

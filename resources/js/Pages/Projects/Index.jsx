import { Head, Link, router, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import '../../../css/portfolio.css';

export default function Index({ projects = [], flash = {} }) {
    const [editing, setEditing] = useState(null);
    const [notice, setNotice] = useState(flash.success || '');
    const { data, setData, post, put, processing, errors, reset, clearErrors } = useForm({ title: '', description: '', status: 'Pending' });
    useEffect(() => { if (flash.success) setNotice(flash.success); }, [flash.success]);

    function submit(e) {
        e.preventDefault();
        const options = { preserveScroll: true, onSuccess: () => { setEditing(null); reset(); clearErrors(); setNotice(editing ? 'Project updated successfully.' : 'Project added successfully.'); } };
        if (editing) put(`/projects/${editing.id}`, options); else post('/projects', options);
    }
    function startEdit(project) {
        setEditing(project); clearErrors(); setData({ title: project.title, description: project.description || '', status: project.status });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function cancelEdit() { setEditing(null); reset(); clearErrors(); }
    function removeProject(project) {
        if (window.confirm(`Delete "${project.title}"? This cannot be undone.`)) router.delete(`/projects/${project.id}`, { preserveScroll: true, onSuccess: () => setNotice('Project deleted successfully.') });
    }

    return <div className="portfolio-shell"><Head title="Manage Projects" />
        <header className="site-header"><nav className="nav-wrap container"><Link className="brand" href="/">BD<span>.</span></Link><div className="nav-links"><Link href="/">← Back to Portfolio</Link></div></nav></header>
        <main className="container" style={{ paddingTop: 48, paddingBottom: 80 }}>
            <p className="eyebrow">PORTFOLIO ADMINISTRATION</p><h1 className="section-title">Manage <span>Projects</span></h1><p className="section-copy">Add, update, and remove the projects displayed on your public portfolio.</p>
            {notice && <div role="status" style={{ marginTop: 24, padding: '13px 16px', borderRadius: 10, background: '#123b31', color: '#bbf7d0', border: '1px solid #21634d' }}>{notice}<button type="button" onClick={() => setNotice('')} style={{ float: 'right', background: 'transparent', border: 0, color: 'inherit', cursor: 'pointer' }}>✕</button></div>}
            <div className="crud-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, .9fr) minmax(0, 1.1fr)', gap: 22, marginTop: 28 }}>
                <section className="project-card" style={{ alignSelf: 'start' }}><h2 style={{ marginTop: 0 }}>{editing ? 'Edit Project' : 'Add New Project'}</h2>
                    <form onSubmit={submit} noValidate>
                        <label className="field-label" htmlFor="title">Project title *</label><input id="title" className="field-control" value={data.title} onChange={e => setData('title', e.target.value)} placeholder="Enter project title" />{errors.title && <p className="field-error">{errors.title}</p>}
                        <label className="field-label" htmlFor="description">Description</label><textarea id="description" className="field-control" rows="5" value={data.description} onChange={e => setData('description', e.target.value)} placeholder="Describe your project" />{errors.description && <p className="field-error">{errors.description}</p>}
                        <label className="field-label" htmlFor="status">Status *</label><select id="status" className="field-control" value={data.status} onChange={e => setData('status', e.target.value)}><option>Pending</option><option>In Progress</option><option>Completed</option></select>{errors.status && <p className="field-error">{errors.status}</p>}
                        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 20 }}><button className="button primary" type="submit" disabled={processing}>{processing ? 'Saving…' : editing ? 'Update Project' : 'Add Project'}</button>{editing && <button className="button secondary" type="button" onClick={cancelEdit}>Cancel</button>}</div>
                    </form>
                </section>
                <section><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 15 }}><h2 style={{ margin: 0 }}>Project List</h2><span style={{ color: '#a8b6cc', fontSize: 13 }}>{projects.length} total</span></div>
                    {projects.length === 0 ? <div className="empty-state">No projects yet. Use the form to add your first project.</div> : <div style={{ display: 'grid', gap: 13 }}>{projects.map(project => <article className="project-card" key={project.id}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 12 }}><div><span className={`status status-${project.status.toLowerCase().replaceAll(' ', '-')}`}>{project.status}</span><h3>{project.title}</h3></div><span style={{ color: '#8494ad', fontSize: 12 }}>#{project.id}</span></div><p>{project.description || 'No description provided.'}</p><div style={{ display: 'flex', gap: 9, marginTop: 18 }}><button type="button" className="button secondary" onClick={() => startEdit(project)}>Edit</button><button type="button" className="button" style={{ background: '#4b2029', color: '#fecdd3' }} onClick={() => removeProject(project)}>Delete</button></div></article>)}</div>}
                </section>
            </div>
        </main><footer className="site-footer">© {new Date().getFullYear()} Bobby Dacanay · Projects Manager</footer>
        <style>{`@media(max-width:800px){.crud-layout{grid-template-columns:1fr!important}}.field-label{display:block;margin:16px 0 7px;color:#dbeafe;font-size:14px;font-weight:700}.field-control{display:block;width:100%;padding:12px 13px;border-radius:9px;border:1px solid #38506e;background:#0b1425;color:#f8fafc;font:inherit;outline:none}.field-control:focus{border-color:#60a5fa;box-shadow:0 0 0 3px #60a5fa22}.field-error{margin:6px 0 0;color:#fda4af;font-size:13px}`}</style>
    </div>;
}

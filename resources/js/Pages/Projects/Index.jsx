
import React, { useState } from 'react';
import { Head, useForm, router } from '@inertiajs/react';

export default function Index({ projects = [] }) {
    const [editing, setEditing] = useState(null);

    const { data, setData, post, put, processing, errors, reset } = useForm({
        title: '',
        description: '',
        status: 'Pending',
    });

    function submit(e) {
        e.preventDefault();

        if (editing) {
            put(`/projects/${editing.id}`, {
                onSuccess: () => {
                    setEditing(null);
                    reset();
                },
            });
        } else {
            post('/projects', {
                onSuccess: () => reset(),
            });
        }
    }

    function editProject(project) {
        setEditing(project);
        setData({
            title: project.title,
            description: project.description || '',
            status: project.status,
        });
    }

    function cancelEdit() {
        setEditing(null);
        reset();
    }

    function deleteProject(id) {
        if (confirm('Are you sure you want to delete this project?')) {
            router.delete(`/projects/${id}`);
        }
    }

    return (
        <>
            <Head title="Projects CRUD" />

            <div style={{ maxWidth: 900, margin: '40px auto', padding: 20 }}>
                <h1>Projects CRUD</h1>

                <h2>{editing ? 'Edit Project' : 'Add Project'}</h2>

                <form onSubmit={submit}>
                    <div>
                        <input
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                            placeholder="Project Title"
                            required
                        />
                        {errors.title && <p>{errors.title}</p>}
                    </div>

                    <div>
                        <textarea
                            value={data.description}
                            onChange={e => setData('description', e.target.value)}
                            placeholder="Project Description"
                        />
                        {errors.description && <p>{errors.description}</p>}
                    </div>

                    <div>
                        <select
                            value={data.status}
                            onChange={e => setData('status', e.target.value)}
                        >
                            <option>Pending</option>
                            <option>In Progress</option>
                            <option>Completed</option>
                        </select>
                    </div>

                    <button type="submit" disabled={processing}>
                        {processing
                            ? 'Saving...'
                            : editing
                            ? 'Update Project'
                            : 'Add Project'}
                    </button>

                    {editing && (
                        <button type="button" onClick={cancelEdit}>
                            Cancel
                        </button>
                    )}
                </form>

                <hr />

                <h2>Project List</h2>

                {projects.length === 0 ? (
                    <p>No projects yet.</p>
                ) : (
                    projects.map(project => (
                        <div
                            key={project.id}
                            style={{
                                border: '1px solid #ccc',
                                padding: 16,
                                marginBottom: 12,
                                borderRadius: 8,
                            }}
                        >
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <p>Status: {project.status}</p>

                            <button onClick={() => editProject(project)}>
                                Edit
                            </button>

                            <button onClick={() => deleteProject(project.id)}>
                                Delete
                            </button>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        return Inertia::render('Projects/Index', [
            'projects' => Project::latest()->get(),
            'flash' => ['success' => session('success')],
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'min:3', 'max:255'],
            'description' => ['nullable', 'string', 'max:2000'],
            'status' => ['required', 'in:Pending,In Progress,Completed'],
        ], [
            'title.required' => 'Please enter a project title.',
            'title.min' => 'The project title must be at least 3 characters.',
            'status.in' => 'Please select a valid project status.',
        ]);

        Project::create($validated);
        return redirect()->route('projects.index')->with('success', 'Project added successfully.');
    }

    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'min:3', 'max:255'],
            'description' => ['nullable', 'string', 'max:2000'],
            'status' => ['required', 'in:Pending,In Progress,Completed'],
        ], [
            'title.required' => 'Please enter a project title.',
            'title.min' => 'The project title must be at least 3 characters.',
            'status.in' => 'Please select a valid project status.',
        ]);

        $project->update($validated);
        return redirect()->route('projects.index')->with('success', 'Project updated successfully.');
    }

    public function destroy(Project $project)
    {
        $project->delete();
        return redirect()->route('projects.index')->with('success', 'Project deleted successfully.');
    }
}

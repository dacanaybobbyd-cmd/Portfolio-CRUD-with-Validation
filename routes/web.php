<?php

use App\Http\Controllers\ProjectController;
use App\Models\Project;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'projects' => Project::latest()->get(),
    ]);
})->name('home');

Route::resource('projects', ProjectController::class)
    ->only(['index', 'store', 'update', 'destroy']);

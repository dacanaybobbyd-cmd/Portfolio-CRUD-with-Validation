
<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProjectController;

Route::get('/', function () {
    return Inertia::render('Home', [
        'projects' => \App\Models\Project::latest()->get(),
    ]);
});

Route::resource('projects', ProjectController::class)
    ->only(['index', 'store', 'update', 'destroy']);

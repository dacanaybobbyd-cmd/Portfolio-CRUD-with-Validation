# Portfolio CRUD with Validation

**Midterm Laboratory Activity**

## About the Project

Portfolio CRUD with Validation is a web application built with Laravel. It demonstrates the basic Create, Read, Update, and Delete (CRUD) operations for managing portfolio projects, including form validation.

## Features

- **Create:** Add new portfolio projects.
- **Read:** View the list of portfolio projects.
- **Update:** Edit existing project information.
- **Delete:** Remove projects.
- **Validation:** Validate form inputs before saving data.
- **Database Integration:** Store project records using Laravel's database features.

## Technologies Used

- Laravel
- PHP
- React
- JavaScript
- Vite
- MySQL or another database configured for the project

## Requirements

- PHP and Composer
- Node.js and npm
- A database configured in the Laravel `.env` file

## Installation

1. Clone or download this repository.
2. Install PHP dependencies:

   ```bash
   composer install
   ```

3. Install JavaScript dependencies:

   ```bash
   npm install
   ```

4. Create your environment file:

   ```bash
   cp .env.example .env
   ```

   On Windows, you may also copy `.env.example` to `.env` using File Explorer or PowerShell.

5. Generate the application key:

   ```bash
   php artisan key:generate
   ```

6. Configure your database in `.env`, then run:

   ```bash
   php artisan migrate
   ```

7. Start the Laravel development server:

   ```bash
   php artisan serve
   ```

8. In another terminal, start Vite:

   ```bash
   npm run dev
   ```

## Running the Application

Open the local URL shown by `php artisan serve` in your browser while the Vite development server is running.

## Security

Do not commit your `.env` file, passwords, access tokens, or other secrets to GitHub.

## Purpose

This project was created as a midterm laboratory activity to demonstrate Laravel CRUD functionality and validation.

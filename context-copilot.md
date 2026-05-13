# PROJECT CONTEXT — READ BEFORE GENERATING CODE

You are working as a Senior Frontend Engineer, UX Engineer, and Software Architect.

## Project Name

Aula Virtual de Asistentes IA

## Project Goal

Build a lightweight educational SPA that acts as a launcher for multiple LLM assistants.

IMPORTANT:

This project DOES NOT use APIs.
This project DOES NOT use backend.
This project DOES NOT use React, Angular, Vue, Blazor, Node, npm, bundlers, or external frameworks.

This project must use ONLY:

* HTML5
* CSS3
* Vanilla JavaScript (ES6+)

## Educational Context

This platform supports ONE single course only:

"Curso Desarrollo Backend con C# .NET y Bases de Datos Relacionales"

The course includes:

* C#
* .NET
* Entity Framework
* ORM
* SQL
* Relational databases
* Software Architecture
* SOLID
* Repository Pattern
* Unit of Work
* Specification Pattern
* Data-Driven Design
* REST APIs

DO NOT create:

* Multiple courses
* Subject selectors
* Dropdowns for academic categories
* Generic educational content

Everything must revolve around ONE integrated course.

## AI Assistants

Create fixed assistant cards:

### ChatGPT

Role:
Socratic tutor.
Concise explanations.
Paulo Freire + Socrates teaching style.

### Gemini

Role:
Technical reviewer.
Detect conceptual errors.
Explain architecture mistakes.

### Perplexity

Role:
Academic researcher.
Official documentation and references.

### NotebookLM

Role:
Living documentation.
Course knowledge base.

### Claude

Role:
Technical evaluator.
Code reviews.
Architecture interviews.
Technical exams.

## Navigation Logic

Each assistant card must:

1. Copy a predefined prompt to clipboard.
2. Open external assistant URL in new tab.
3. Save usage in localStorage.

## Project Structure

Generate code using exactly this structure:

/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── data/
│   └── prompts.json
├── assets/
│   └── icons/

## Coding Standards

Always generate:

* semantic HTML
* modular JavaScript
* reusable functions
* descriptive naming
* accessibility attributes
* mobile-first responsive design
* comments for important fixes

Use comments like:

// FIX: single-course architecture
// FIX: no subject selector
// FIX: launcher-based workflow

## UI Style

Visual inspiration:

* Microsoft Education
* Azure
* Glassmorphism
* Minimalist dashboard

Avoid:

* flashy animations
* gaming UI
* dark hacker aesthetics

## Copilot behavior

When generating code:

1. Never introduce frameworks.
2. Never install dependencies.
3. Never create package.json.
4. Never create build scripts.
5. Never create TypeScript.
6. Never refactor toward React.

Always preserve static architecture.

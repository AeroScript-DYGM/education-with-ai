# Aula Virtual de Asistentes IA

## Overview

Aula Virtual de Asistentes IA is a lightweight educational Single Page Application designed to support student learning in the course:

**Backend Development with C# .NET and Relational Databases**

The platform works as an academic launcher that connects students with specialized AI assistants for guided learning, technical reflection, documentation, research, and evaluation.

The learning experience focuses on:

- C#
- .NET
- Entity Framework
- ORM
- SQL
- Relational Databases
- Software Architecture
- SOLID Principles
- Repository Pattern
- Unit of Work
- Specification Pattern
- Data-Driven Design
- REST APIs

The project is built with a static architecture using only:

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

No backend, APIs, frameworks, package managers, or external dependencies are used.

---

## What the Platform Does

The application provides fixed AI assistant workspaces, where each assistant has a specific academic role:

### ChatGPT
Socratic tutor for guided learning, conceptual discovery, and reflective problem solving.

### Gemini
Technical reviewer for detecting conceptual mistakes, architectural issues, and implementation risks.

### Perplexity
Academic research assistant focused on official documentation, references, and technical validation.

### NotebookLM
Living documentation assistant that consolidates course knowledge and study materials.

### Claude
Technical evaluator for code reviews, architecture interviews, and technical assessments.

Each assistant interaction performs three actions:

1. Copies a predefined academic prompt.
2. Opens the selected assistant in a new browser tab.
3. Stores usage history in localStorage for learning tracking.

---

## Project Architecture

```txt
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
```

---

## File Communication

### index.html

Main application entry point.

Responsibilities:

- Defines semantic structure
- Loads styles
- Loads JavaScript modules
- Renders assistant cards

Communicates with:

- css/style.css
- js/app.js

---

### css/style.css

Responsible for visual presentation.

Responsibilities:

- Responsive layout
- Glassmorphism UI
- Accessibility styling
- Mobile-first design

Communicates with:

- index.html

---

### data/prompts.json

Stores predefined assistant prompts.

Responsibilities:

- Prompt configuration
- Assistant-specific instructions
- Educational consistency

Communicates with:

- js/app.js

---

### js/app.js

Core application logic.

Responsibilities:

- Loads prompt data
- Handles clipboard actions
- Opens assistant URLs
- Persists usage in localStorage
- Controls launcher workflow

Communicates with:

- index.html
- data/prompts.json
- browser localStorage

---

### assets/icons/

Stores assistant visual resources.

Responsibilities:

- Icons
- Branding assets
- Visual identifiers

Communicates with:

- index.html
- css/style.css

---

## License

Copyright © 2026 AeroScript-DYGM

This project is licensed under the MIT License.

This software is released for educational, academic, and research purposes.

See the LICENSE file for complete details.

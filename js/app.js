/**
 * ============================================================
 * Curso Backend C# .NET — app.js
 * SOLUCIÓN ÓPTIMA: Datos embebidos + UI simple y funcional
 * ============================================================
 */

(function AulaVirtual() {
  'use strict';

  /* ══════════════════════════════════════════════════════════
   * DATOS: Asistentes del curso Backend C# .NET
   * ══════════════════════════════════════════════════════════*/
  const ASSISTANTS = [
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      role: 'Tutor de Arquitectura Backend',
      description: 'Guía el aprendizaje de arquitectura de software, patrones SOLID y diseño de aplicaciones C# mediante el método socrático.',
      color: '#10a37f',
      badge: 'Arquitectura',
      emoji: '💬',
      url: 'https://chatgpt.com/gg/v/6a04183830f08198843bc711ac1459d3?token=c2koqHTnkmDB1G_8Rx9WhQ',
      prompt: 'Actúa como tutor pedagógico especializado en C# .NET, Entity Framework, SQL y Arquitectura de Software. Tu misión es enseñar usando el método Feynman, como si explicaras a un niño de 10 años con mucha curiosidad. Explica todo con palabras simples, ejemplos cotidianos y analogías visuales como legos, bibliotecas, cajas, mapas o recetas. Nunca uses términos técnicos sin traducirlos primero a lenguaje simple. Divide cada explicación en pasos pequeños y fáciles de seguir. Después de explicar, verifica comprensión preguntando: "Ahora explícamelo con tus palabras". Si detectas confusión, simplifica aún más. Siempre conecta la explicación con problemas reales del desarrollo backend en C# .NET. Termina con una pregunta que haga pensar.'
    },
    {
      id: 'gemini',
      name: 'Gemini',
      role: 'Revisor de Código C#',
      description: 'Detecta errores en código C#, propuestas de mejora de arquitectura y patrones ORM con ejemplos visuales.',
      color: '#4285f4',
      badge: 'Code Review',
      emoji: '♊',
      url: 'https://gemini.google.com/share/da62467fc7d3',
      prompt: 'Actúa como revisor visual experto en C# .NET, Entity Framework, SQL y Arquitectura Backend. Cuando reciba código, diagramas, clases, entidades o decisiones de arquitectura, primero detecta errores conceptuales, errores de diseño o malas prácticas. Después explica por qué el error existe y qué consecuencias técnicas puede provocar. Genera siempre una visualización creada por ti que represente el error, el impacto y la solución correcta usando diagramas, cajas, capas, relaciones o comparativas visuales. Identifica problemas relacionados con SOLID, acoplamiento, consultas ineficientes, diseño ORM o arquitectura por capas. Nunca solo describas; siempre visualiza el problema. Termina preguntando qué parte del diseño originó el error.'
    },
    {
      id: 'perplexity',
      name: 'Perplexity',
      role: 'Experto en Documentación Técnica',
      description: 'Investiga con referencias verificadas sobre C#, Entity Framework, SQL, patrones arquitectónicos y buenas prácticas.',
      color: '#20b2aa',
      badge: 'Referencias',
      emoji: '🔭',
      url: 'https://www.perplexity.ai/search/6b650f93-af0c-4be8-aedf-4f8e7e70e4b4',
      prompt: 'Actúa como auditor académico y bibliotecario técnico especializado en C# .NET, Entity Framework, SQL y Arquitectura Empresarial. Tu misión es responder con precisión técnica y demostrar qué reglas, estándares y principios respaldan cada decisión. Toda respuesta debe incluir documentación oficial, autores reconocidos, estándares de ingeniería o referencias verificables. Relaciona cada concepto con Microsoft Documentation, Clean Architecture, SOLID, Domain-Driven Design, normalización de bases de datos y prácticas enterprise. Explica la diferencia entre una solución académica y una solución usada en producción. Señala riesgos técnicos, deuda técnica y problemas de escalabilidad si no se siguen las reglas. Nunca des opiniones sin evidencia. Termina preguntando si esa decisión soportaría un entorno real de producción.'
    },
    {
      id: 'notebooklm',
      name: 'NotebookLM',
      role: 'Gestor de Recursos del Curso',
      description: 'Organiza documentación del curso en C# y arquitectura backend, genera resúmenes y mapeos conceptuales.',
      color: '#ff6d00',
      badge: 'Gestión Documental',
      emoji: '📓',
      url: 'https://notebooklm.google.com/notebook/bea91f3e-f2fe-40b9-8b4d-b417bd0b093c',
      prompt: 'Vas a actuar como gestor de la biblioteca virtual del curso "Desarrollo Backend con C# .NET y Bases de Datos Relacionales". Organiza todo material subido en estas categorías: Fundamentos de C# y POO, Patrones de Arquitectura (Capas, SOLID), Entity Framework Core y ORM, Diseño de Bases de Datos Relacionales, Spec-Driven Development, y Proyectos Integrados. Para cada documento subido, genera: 1) Resumen ejecutivo de 5 líneas. 2) Los 5-7 conceptos clave específicos de backend. 3) Dependencias/versiones de .NET requeridas. 4) Conexión con otras áreas del curso.'
    },
    {
      id: 'claude',
      name: 'Claude',
      role: 'Evaluador de Proyecto',
      description: 'Genera evaluaciones prácticas, retos técnicos de backend y análisis de arquitectura en sistemas reales.',
      color: '#cc785c',
      badge: 'Evaluación Técnica',
      emoji: '✦',
      url: 'https://claude.ai/share/eff6788e-af29-4b63-94bc-5aae8d523b14',
      prompt: 'Actúa como evaluador técnico senior especializado en C# .NET, Entity Framework, SQL, Arquitectura de Software y Specification Pattern. Tu misión es generar mini evaluaciones técnicas realistas. Crea entre 5 y 10 preguntas por sesión combinando opción múltiple, verdadero o falso, análisis de código, diseño de arquitectura, modelado de base de datos y escenarios empresariales. Las preguntas deben aumentar progresivamente de dificultad y evaluar comprensión real, no memorización. No muestres respuestas inmediatamente; espera la respuesta del estudiante, corrige técnicamente, explica errores y asigna puntuación. Clasifica el desempeño como Junior, Mid o Senior. Termina preguntando si la solución funcionaría bajo carga real en producción.'
    }
  ];

  /* ══════════════════════════════════════════════════════════
   * UTILIDADES
   * ══════════════════════════════════════════════════════════*/
  const Utils = {
    // Copiar al portapapeles
    async copyToClipboard(text) {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
          return true;
        }
        // Fallback
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(ta);
        return ok;
      } catch {
        return false;
      }
    },

    // Mostrar notificación
    showNotification(message, type = 'success') {
      const toast = document.getElementById('toast');
      if (!toast) return;
      
      const msgEl = toast.querySelector('.toast-message');
      if (msgEl) msgEl.textContent = message;
      
      toast.classList.add('visible');
      setTimeout(() => toast.classList.remove('visible'), 3000);
    }
  };

  /* ══════════════════════════════════════════════════════════
   * RENDERIZADOR
   * ══════════════════════════════════════════════════════════*/
  const Renderer = {
    render() {
      const grid = document.getElementById('cardsGrid');
      if (!grid) return;

      grid.innerHTML = ASSISTANTS.map(assistant => `
        <article class="assistant-card" style="--card-color: ${assistant.color};">
          <div class="card-header">
            <div class="card-avatar" style="background:${assistant.color}1a; border:1px solid ${assistant.color}30;">
              ${assistant.emoji}
            </div>
            <span class="card-badge" style="color:${assistant.color};">${assistant.badge}</span>
          </div>
          <div class="card-body">
            <h2 class="card-name">${assistant.name}</h2>
            <p class="card-role" style="color:${assistant.color};">${assistant.role}</p>
            <p class="card-description">${assistant.description}</p>
          </div>
          <div class="card-footer">
            <a
              href="${assistant.url}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-open"
              style="background:${assistant.color}18; color:${assistant.color}; border-color:${assistant.color}40;"
            >
              <span>Abrir asistente</span>
              <span aria-hidden="true">↗</span>
            </a>
            <button
              class="btn-copy-prompt"
              data-assistant-id="${assistant.id}"
              style="color:${assistant.color}; border-color:${assistant.color}40;"
              title="Copiar prompt al portapapeles"
            >
              ⎘
            </button>
          </div>
        </article>
      `).join('');

      // Event listeners para copiar prompts
      document.querySelectorAll('.btn-copy-prompt').forEach(btn => {
        btn.addEventListener('click', (e) => this.copyPrompt(e));
      });
    },

    copyPrompt(e) {
      const assistantId = e.target.dataset.assistantId;
      const assistant = ASSISTANTS.find(a => a.id === assistantId);
      if (!assistant) return;

      Utils.copyToClipboard(assistant.prompt).then(ok => {
        if (ok) {
          Utils.showNotification(`✓ Prompt de ${assistant.name} copiado`);
        } else {
          Utils.showNotification('⚠ No se pudo copiar el prompt', 'error');
        }
      });
    }
  };

  /* ══════════════════════════════════════════════════════════
   * APP INIT
   * ══════════════════════════════════════════════════════════*/
  window.addEventListener('DOMContentLoaded', () => {
    Renderer.render();
    console.log('✓ Curso Backend C# .NET cargado — 5 asistentes listos');
  });

})();

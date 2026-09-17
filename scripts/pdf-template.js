function generateHtmlDocument(data) {
  const {
    moduleNumber,
    moduleTitle,
    lessonNumber,
    lessonTitle,
    totalPages = 15,
    pages
  } = data;

  const renderedPages = pages.map((p, idx) => {
    const pageNum = idx + 2; // Page 1 is cover
    return `
      <div class="pdf-page">
        <header class="page-header">
          <div class="header-brand">AI BUSINESS SYSTEM</div>
          <div class="header-topic">${moduleTitle} — ${lessonTitle}</div>
        </header>

        <main class="page-main">
          <div class="page-badge-row">
            <span class="page-badge">${p.badge || "GUÍA PRÁCTICA"}</span>
            <span class="page-category">${p.category || "MATERIAL COMPLEMENTARIO"}</span>
          </div>
          <h2 class="page-title">${p.title}</h2>
          ${p.subtitle ? `<p class="page-subtitle">${p.subtitle}</p>` : ""}
          <div class="page-content">
            ${p.content}
          </div>
        </main>

        <footer class="page-footer">
          <div class="footer-left">AI Business System • Material Exclusivo para Alumnos</div>
          <div class="footer-right">Página ${pageNum} de ${totalPages}</div>
        </footer>
      </div>
    `;
  }).join("\n");

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>${lessonTitle} — AI Business System</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

  @page {
    size: A4 portrait;
    margin: 14mm 16mm 14mm 16mm;
  }
  @page :first {
    margin: 0;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    color: #1e293b;
    background: #ffffff;
    line-height: 1.6;
    font-size: 13.5px;
    -webkit-font-smoothing: antialiased;
  }

  /* Cover Page */
  .cover-page {
    width: 210mm;
    height: 297mm;
    page-break-after: always;
    background: #09090b;
    color: #ffffff;
    padding: 28mm 24mm 24mm 24mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
  }

  .cover-accent-line {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #6366f1, #a855f7, #ec4899);
  }

  .cover-bg-glow {
    position: absolute;
    top: 15%;
    right: -10%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(9, 9, 11, 0) 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  .cover-brand-header {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .cover-logo-box {
    width: 44px;
    height: 44px;
    background: #ffffff;
    color: #09090b;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 18px;
    letter-spacing: -1px;
  }

  .cover-brand-name {
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 0.5px;
    color: #ffffff;
  }

  .cover-tagline {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #94a3b8;
    margin-top: 2px;
  }

  .cover-main-content {
    margin: 40px 0;
  }

  .cover-pill {
    display: inline-block;
    padding: 6px 14px;
    background: rgba(99, 102, 241, 0.15);
    border: 1px solid rgba(99, 102, 241, 0.4);
    color: #c7d2fe;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  .cover-module-title {
    font-size: 16px;
    font-weight: 600;
    color: #a1a1aa;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 12px;
  }

  .cover-lesson-title {
    font-size: 38px;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -1px;
    color: #ffffff;
    margin-bottom: 24px;
  }

  .cover-description {
    font-size: 15px;
    color: #94a3b8;
    line-height: 1.6;
    max-width: 580px;
    border-left: 3px solid #6366f1;
    padding-left: 16px;
  }

  .cover-meta-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding-top: 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .cover-meta-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 14px 16px;
  }

  .cover-meta-label {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #71717a;
    margin-bottom: 4px;
  }

  .cover-meta-value {
    font-size: 13px;
    font-weight: 600;
    color: #e2e8f0;
  }

  .cover-footer-note {
    font-size: 11px;
    color: #64748b;
    text-align: center;
    letter-spacing: 0.5px;
  }

  /* Inside PDF Page Layout */
  .pdf-page {
    width: 100%;
    min-height: 260mm;
    page-break-before: always;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 6mm 0 4mm 0;
  }

  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 8px;
    margin-bottom: 18px;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #64748b;
  }

  .header-brand {
    font-weight: 800;
    color: #0f172a;
    letter-spacing: 1.5px;
  }

  .header-topic {
    font-weight: 500;
    color: #64748b;
  }

  .page-main {
    flex: 1;
  }

  .page-badge-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .page-badge {
    display: inline-block;
    background: #f1f5f9;
    color: #475569;
    font-size: 9.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 2px 8px;
    border-radius: 4px;
  }

  .page-category {
    font-size: 10px;
    color: #6366f1;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .page-title {
    font-size: 22px;
    font-weight: 800;
    color: #0f172a;
    line-height: 1.25;
    letter-spacing: -0.5px;
    margin-bottom: 6px;
  }

  .page-subtitle {
    font-size: 13px;
    color: #64748b;
    margin-bottom: 18px;
    line-height: 1.5;
  }

  .page-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #e2e8f0;
    padding-top: 8px;
    margin-top: 20px;
    font-size: 10px;
    color: #94a3b8;
  }

  .footer-right {
    font-family: 'JetBrains Mono', monospace;
    font-weight: 600;
    color: #64748b;
  }

  /* Content Elements Styling */
  p {
    margin-bottom: 12px;
    color: #334155;
    text-align: justify;
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
    color: #0f172a;
    margin: 16px 0 8px 0;
    letter-spacing: -0.2px;
  }

  h4 {
    font-size: 14px;
    font-weight: 700;
    color: #1e293b;
    margin: 12px 0 6px 0;
  }

  /* Callout Boxes */
  .box-info {
    background: #f8fafc;
    border-left: 4px solid #6366f1;
    border-radius: 0 8px 8px 0;
    padding: 12px 16px;
    margin: 14px 0;
    font-size: 13px;
  }

  .box-info-title {
    font-weight: 700;
    color: #4338ca;
    margin-bottom: 4px;
    font-size: 12.5px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .box-warning {
    background: #fffbeb;
    border-left: 4px solid #f59e0b;
    border-radius: 0 8px 8px 0;
    padding: 12px 16px;
    margin: 14px 0;
    font-size: 13px;
  }

  .box-warning-title {
    font-weight: 700;
    color: #b45309;
    margin-bottom: 4px;
    font-size: 12.5px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .box-success {
    background: #f0fdf4;
    border-left: 4px solid #10b981;
    border-radius: 0 8px 8px 0;
    padding: 12px 16px;
    margin: 14px 0;
    font-size: 13px;
  }

  .box-success-title {
    font-weight: 700;
    color: #047857;
    margin-bottom: 4px;
    font-size: 12.5px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* Prompt / Code Block */
  .prompt-card {
    background: #09090b;
    color: #f8fafc;
    border-radius: 8px;
    padding: 14px 16px;
    margin: 14px 0;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11.5px;
    line-height: 1.6;
    border: 1px solid #27272a;
  }

  .prompt-tag {
    color: #818cf8;
    font-weight: 700;
    margin-bottom: 6px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  /* Step / Timeline Cards */
  .steps-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 14px 0;
  }

  .step-item {
    display: flex;
    gap: 14px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 12px 14px;
  }

  .step-number {
    width: 28px;
    height: 28px;
    background: #6366f1;
    color: #ffffff;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 13px;
    flex-shrink: 0;
  }

  .step-text h4 {
    margin: 0 0 2px 0;
    color: #0f172a;
  }

  .step-text p {
    margin: 0;
    font-size: 12.5px;
    color: #475569;
  }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 14px 0;
    font-size: 12.5px;
  }

  th {
    background: #f1f5f9;
    color: #0f172a;
    font-weight: 700;
    text-align: left;
    padding: 9px 12px;
    border: 1px solid #cbd5e1;
    font-size: 11.5px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  td {
    padding: 8px 12px;
    border: 1px solid #e2e8f0;
    color: #334155;
    vertical-align: top;
  }

  tr:nth-child(even) td {
    background: #f8fafc;
  }

  /* Checklists */
  .checklist-box {
    background: #ffffff;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    padding: 12px 16px;
    margin: 14px 0;
  }

  .check-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 8px 0;
    border-bottom: 1px dashed #e2e8f0;
  }

  .check-item:last-child {
    border-bottom: none;
  }

  .check-box-square {
    width: 16px;
    height: 16px;
    border: 2px solid #6366f1;
    border-radius: 4px;
    margin-top: 2px;
    flex-shrink: 0;
  }

  .check-content strong {
    color: #0f172a;
    display: block;
    margin-bottom: 2px;
    font-size: 13px;
  }

  .check-content p {
    font-size: 12px;
    color: #64748b;
    margin: 0;
  }

  /* Notes & Reflection Writing Area */
  .notes-area {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 16px;
    margin: 14px 0;
    min-height: 120px;
  }

  .line-rule {
    border-bottom: 1px solid #cbd5e1;
    height: 28px;
  }

  /* Grid Columns */
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin: 14px 0;
  }

  .card-simple {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 12px 14px;
  }

  .card-simple h4 {
    margin: 0 0 6px 0;
    color: #0f172a;
  }

  .card-simple p {
    margin: 0;
    font-size: 12px;
    color: #64748b;
  }
</style>
</head>
<body>

<!-- Cover Page -->
<div class="cover-page">
  <div class="cover-accent-line"></div>
  <div class="cover-bg-glow"></div>

  <div class="cover-brand-header">
    <div class="cover-logo-box">AI</div>
    <div>
      <div class="cover-brand-name">AI BUSINESS SYSTEM</div>
      <div class="cover-tagline">Capacitación Práctica en Inteligencia Artificial</div>
    </div>
  </div>

  <div class="cover-main-content">
    <div class="cover-pill">Material Didáctico Complementario</div>
    <div class="cover-module-title">${moduleTitle}</div>
    <h1 class="cover-lesson-title">${lessonTitle}</h1>
    <p class="cover-description">
      Guía integral de estudio, profundización metodológica, plantillas prácticas y cuaderno de aplicación profesional paso a paso.
    </p>
  </div>

  <div>
    <div class="cover-meta-grid">
      <div class="cover-meta-card">
        <div class="cover-meta-label">Módulo y Clase</div>
        <div class="cover-meta-value">${moduleNumber} — Clase ${lessonNumber}</div>
      </div>
      <div class="cover-meta-card">
        <div class="cover-meta-label">Formato del Documento</div>
        <div class="cover-meta-value">Guía Pedagógica Oficial (15 Páginas)</div>
      </div>
      <div class="cover-meta-card">
        <div class="cover-meta-label">Acceso para Alumnos</div>
        <div class="cover-meta-value">Uso Exclusivo e Individual</div>
      </div>
    </div>

    <div class="cover-footer-note" style="margin-top: 20px;">
      © 2026 AI Business System. Todos los derechos reservados. Prohibida su distribución comercial sin autorización.
    </div>
  </div>
</div>

<!-- Render 14 Structured Internal Pages (Total: 15 pages) -->
${renderedPages}

</body>
</html>`;
}

module.exports = { generateHtmlDocument };

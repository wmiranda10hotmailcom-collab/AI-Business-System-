// scripts/build-all-materials.js
// Compilador oficial de materiales didácticos complementarios para AI Business System
// Genera los 12 PDFs oficiales con un mínimo estricto de 15 páginas cada uno (>= 180 páginas en total)

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { PDFDocument } = require('pdf-lib');
const { generateHtmlDocument } = require('./pdf-template');

// Importar los 6 módulos didácticos con las 12 clases
const { m1_c1, m1_c2 } = require('./content-m1');
const { m2_c1, m2_c2 } = require('./content-m2');
const { m3_c1, m3_c2 } = require('./content-m3');
const { m4_c1, m4_c2 } = require('./content-m4');
const { m5_c1, m5_c2 } = require('./content-m5');
const { bonus_c1, bonus_c2 } = require('./content-bonus');

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const ROOT_DIR = path.resolve(__dirname, '..');
const TEMP_HTML_DIR = path.join(__dirname, 'temp_html');

const materialsManifest = [
  {
    lessonId: "m1-c1",
    config: m1_c1,
    outPath: path.join(ROOT_DIR, 'public', 'materiales', 'modulo-1', 'clase-01.pdf')
  },
  {
    lessonId: "m1-c2",
    config: m1_c2,
    outPath: path.join(ROOT_DIR, 'public', 'materiales', 'modulo-1', 'clase-02.pdf')
  },
  {
    lessonId: "m2-c1",
    config: m2_c1,
    outPath: path.join(ROOT_DIR, 'public', 'materiales', 'modulo-2', 'clase-01.pdf')
  },
  {
    lessonId: "m2-c2",
    config: m2_c2,
    outPath: path.join(ROOT_DIR, 'public', 'materiales', 'modulo-2', 'clase-02.pdf')
  },
  {
    lessonId: "m3-c1",
    config: m3_c1,
    outPath: path.join(ROOT_DIR, 'public', 'materiales', 'modulo-3', 'clase-01.pdf')
  },
  {
    lessonId: "m3-c2",
    config: m3_c2,
    outPath: path.join(ROOT_DIR, 'public', 'materiales', 'modulo-3', 'clase-02.pdf')
  },
  {
    lessonId: "m4-c1",
    config: m4_c1,
    outPath: path.join(ROOT_DIR, 'public', 'materiales', 'modulo-4', 'clase-01.pdf')
  },
  {
    lessonId: "m4-c2",
    config: m4_c2,
    outPath: path.join(ROOT_DIR, 'public', 'materiales', 'modulo-4', 'clase-02.pdf')
  },
  {
    lessonId: "m5-c1",
    config: m5_c1,
    outPath: path.join(ROOT_DIR, 'public', 'materiales', 'modulo-5', 'clase-01.pdf')
  },
  {
    lessonId: "m5-c2",
    config: m5_c2,
    outPath: path.join(ROOT_DIR, 'public', 'materiales', 'modulo-5', 'clase-02.pdf')
  },
  {
    lessonId: "bonus-c1",
    config: bonus_c1,
    outPath: path.join(ROOT_DIR, 'public', 'materiales', 'bonus', 'clase-01.pdf')
  },
  {
    lessonId: "bonus-c2",
    config: bonus_c2,
    outPath: path.join(ROOT_DIR, 'public', 'materiales', 'bonus', 'clase-02.pdf')
  }
];

async function buildAll() {
  console.log("================================================================================");
  console.log("       AI BUSINESS SYSTEM — COMPILADOR DE MATERIALES COMPLEMENTARIOS            ");
  console.log("================================================================================\n");

  if (!fs.existsSync(CHROME_PATH)) {
    throw new Error(`Google Chrome no se encontró en la ruta esperada: ${CHROME_PATH}`);
  }

  if (!fs.existsSync(TEMP_HTML_DIR)) {
    fs.mkdirSync(TEMP_HTML_DIR, { recursive: true });
  }

  const results = [];
  let totalPagesSum = 0;

  for (let i = 0; i < materialsManifest.length; i++) {
    const item = materialsManifest[i];
    const indexStr = `[${(i + 1).toString().padStart(2, '0')}/12]`;
    console.log(`${indexStr} Generando PDF para: ${item.lessonId} (${item.config.lessonTitle})...`);

    // 1. Asegurar directorio de destino
    const outDir = path.dirname(item.outPath);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    // 2. Generar código HTML maquetado
    const htmlContent = generateHtmlDocument(item.config);
    const tempHtmlFile = path.join(TEMP_HTML_DIR, `${item.lessonId}.html`);
    fs.writeFileSync(tempHtmlFile, htmlContent, 'utf8');

    // 3. Ejecutar Chrome Headless
    const chromeCmd = `"${CHROME_PATH}" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="${item.outPath}" "${tempHtmlFile}"`;
    execSync(chromeCmd, { stdio: 'pipe' });

    // 4. Verificar conteo de páginas con pdf-lib
    const pdfBytes = fs.readFileSync(item.outPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const pageCount = pdfDoc.getPageCount();
    const fileSizeBytes = fs.statSync(item.outPath).size;
    const fileSizeKb = Math.round(fileSizeBytes / 1024);

    totalPagesSum += pageCount;

    if (pageCount < 15) {
      throw new Error(`¡ERROR! El PDF ${item.lessonId} generó ${pageCount} páginas, pero se exige un mínimo estricto de 15 páginas.`);
    }

    results.push({
      lessonId: item.lessonId,
      module: item.config.moduleNumber,
      title: item.config.lessonTitle,
      pageCount: pageCount,
      fileSizeKb: fileSizeKb,
      status: "COMPLETADO (>= 15 págs)"
    });

    // Limpieza de archivo HTML temporal
    fs.unlinkSync(tempHtmlFile);

    console.log(`    ✓ Éxito: ${pageCount} páginas compiladas | Tamaño: ${fileSizeKb} KB\n`);
  }

  // Eliminar carpeta temporal
  if (fs.existsSync(TEMP_HTML_DIR)) {
    fs.rmdirSync(TEMP_HTML_DIR);
  }

  console.log("================================================================================");
  console.log("                     INFORME DE AUDITORÍA DE COMPILACIÓN                        ");
  console.log("================================================================================");
  console.table(results);
  console.log(`\n>>> TOTAL DE PÁGINAS DIDÁCTICAS GENERADAS: ${totalPagesSum} PÁGINAS`);
  console.log(`>>> TOTAL DE DOCUMENTOS PDF GENERADOS:     ${results.length} DOCUMENTOS`);
  console.log(`>>> REQUISITO MÍNIMO (>= 180 PÁGINAS):     ${totalPagesSum >= 180 ? "SUPERADO EXITOSAMENTE ✓" : "FALLIDO ✗"}`);
  console.log("================================================================================\n");
}

buildAll().catch((err) => {
  console.error("Error durante la compilación de materiales:", err);
  process.exit(1);
});

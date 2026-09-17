// scripts/content-m3.js
// Datos pedagógicos completos para el Módulo 3 (Clase 01 y Clase 02)
// Totalmente en español, 14 páginas internas por clase (15 páginas totales con la portada).

const m3_c1 = {
  moduleNumber: "Módulo 3",
  moduleTitle: "Creación y Edición Visual con IA",
  lessonNumber: "01",
  lessonTitle: "Creando imágenes con inteligencia artificial",
  totalPages: 15,
  pages: [
    {
      badge: "PÁGINA 02",
      category: "INTRODUCCIÓN PEDAGÓGICA",
      title: "La Revolución de la Generación Visual Inteligente",
      subtitle: "De la búsqueda pasiva en bancos de imágenes a la dirección de arte asistida por algoritmos.",
      content: `
        <p>Durante décadas, los creadores de contenido estuvieron limitados a dos opciones al necesitar material visual: contratar costosos servicios de ilustración o perder horas buscando fotografías genéricas en bancos de imágenes saturados de poses artificiales y expresiones forzadas.</p>
        
        <p>Con la consolidación de los modelos de difusión y generación de imágenes (como Midjourney, Flux y DALL-E 3), cualquier persona con una visión clara puede materializar escenas fotorrealistas, ilustraciones vectoriales, renders en 3D o identidades visuales únicas simplemente redactando una descripción precisa.</p>

        <div class="box-info">
          <div class="box-info-title">El Creador como Director de Arte Digital</div>
          <p>Generar una imagen con IA no es presionar un botón de suerte; es un ejercicio riguroso de dirección de arte. Tú determinas la composición, la distancia focal, la temperatura de la iluminación, la paleta cromática y el estado emocional de la escena.</p>
        </div>

        <p>En esta guía oficial de la <strong>Clase 01 del Módulo 3</strong>, aprenderás los secretos para formular prompts visuales de alto calibre, dominando los parámetros técnicos que transforman una imagen borrosa o deforme en una pieza gráfica digna de una portada editorial de primer nivel.</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>El Fin del Stock Aburrido</h4>
              <p>Genera imágenes 100% personalizadas que reflejen con exactitud la propuesta única de tu proyecto.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>Control de Proporciones y Encuadre</h4>
              <p>Aprende a especificar aspect ratios adaptados a portadas (3:4), pantallas panorámicas (16:9) y redes (1:1 / 9:16).</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Coherencia Estética Sostenible</h4>
              <p>Técnicas probadas para que todas las imágenes de tu curso compartan el mismo estilo visual y paleta de color.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 03",
      category: "OBJETIVOS Y COMPETENCIAS",
      title: "Competencias de Dirección de Arte con IA",
      subtitle: "Habilidades técnicas y visuales que dominarás al completar esta unidad formativa.",
      content: `
        <p>La generación de imágenes de nivel profesional exige combinar sensibilidad artística con precisión de vocabulario. A continuación se presentan tus metas de aprendizaje:</p>

        <table>
          <thead>
            <tr>
              <th style="width: 25%;">Competencia</th>
              <th style="width: 45%;">Habilidad Práctica a Desarrollar</th>
              <th style="width: 30%;">Aplicación en el Curso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Sintaxis Visual</strong></td>
              <td>Estructurar prompts de imagen ordenando sujeto, contexto, iluminación, óptica fotográfica y estilo artístico.</td>
              <td>Prompts para Midjourney y DALL-E</td>
            </tr>
            <tr>
              <td><strong>Calibración de Luz y Cámara</strong></td>
              <td>Utilizar terminología técnica (luz volumétrica, lente de 85mm, profundidad de campo, hora dorada) para lograr realismo.</td>
              <td>Fotografía Editorial de Producto</td>
            </tr>
            <tr>
              <td><strong>Control de Artefactos</strong></td>
              <td>Mitigar imperfecciones comunes en manos, rostros o textos flotantes mediante ingeniería de prompts negativos.</td>
              <td>Control de Calidad Visual</td>
            </tr>
            <tr>
              <td><strong>Estilización Vectorial y 3D</strong></td>
              <td>Generar iconos minimalistas, ilustraciones planas y renders tridimensionales para materiales didácticos.</td>
              <td>Activos Gráficos para PDFs y Diapositivas</td>
            </tr>
          </tbody>
        </table>

        <div class="box-success">
          <div class="box-success-title">Resultado Tangible</div>
          <p>Podrás conceptualizar y producir una serie de 5 imágenes con estética impecable y consistente para ilustrar tu próxima lección o portada de e-book en menos de 30 minutos.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 04",
      category: "MARCO CONCEPTUAL",
      title: "Cómo Funcionan los Modelos de Difusión Visual",
      subtitle: "De la nube de ruido estocástico al render fotorrealista de alta definición.",
      content: `
        <p>A diferencia de los modelos de lenguaje que predicen palabras sucesivas, los generadores de imágenes modernos (Midjourney, Stable Diffusion, DALL-E, Flux) operan mediante un proceso físico-matemático llamado <strong>Difusión Latente</strong>:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>El Espacio Latente y el Ruido Blanco</h4>
              <p>El algoritmo comienza con una cuadrícula de estática pura (ruido aleatorio gaussiano). No "dibuja" como un ilustrador humano, sino que elimina el ruido progresivamente.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>El Guiado por Texto (CLIP / T5 Text Encoder)</h4>
              <p>El codificador de texto traduce tu prompt en vectores matemáticos. Durante cada paso de "desruidizado", el modelo ajusta los píxeles para que coincidan con los conceptos solicitados.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Los Pasos de Muestreo (Sampling Steps)</h4>
              <p>En un ciclo de entre 20 y 50 iteraciones microscópicas, las formas emergen de la nada: primero los contrastes generales de luz, luego las siluetas y finalmente las micro-texturas.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <h4>La Semilla (Seed) y la Reproducibilidad</h4>
              <p>Cada imagen nace de un número semilla inicial. Si conservas la misma semilla y varías ligeramente el texto, puedes obtener variaciones muy controladas de una misma escena.</p>
            </div>
          </div>
        </div>

        <div class="box-info">
          <div class="box-info-title">Por qué importa esto para el creador</div>
          <p>Entender que el modelo "esculpe desde el ruido" te ayuda a comprender por qué las palabras ubicadas al principio del prompt tienen mucho mayor peso compositivo que las palabras añadidas al final.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 05",
      category: "METODOLOGÍA DE TRABAJO",
      title: "La Fórmula S.C.I.E. para Prompts de Imagen",
      subtitle: "Estructura universal de 4 bloques para describir cualquier imagen con rigor profesional.",
      content: `
        <p>Para no dejar el resultado al azar, construye siempre tus instrucciones visuales siguiendo la arquitectura S.C.I.E.:</p>

        <div class="grid-2">
          <div class="card-simple">
            <h4>S — Sujeto Central</h4>
            <p>Define con claridad el protagonista de la imagen (quién o qué es, su pose, expresión y vestimenta o características físicas exactas). Sé ultra-específico.</p>
          </div>
          <div class="card-simple">
            <h4>C — Contexto y Entorno</h4>
            <p>Dónde se sitúa la acción: una oficina minimalista contemporánea con ventanal al fondo, un estudio botánico con madera clara, o un fondo neutro de estudio con degradado suave.</p>
          </div>
          <div class="card-simple">
            <h4>I — Iluminación y Atmósfera</h4>
            <p>El alma de la fotografía: luz natural difusa de mañana, iluminación lateral de estudio (Rembrandt lighting), sombras suaves, tonos cálidos dorados o estética cinemática sobria.</p>
          </div>
          <div class="card-simple">
            <h4>E — Estilo y Parámetros Técnicos</h4>
            <p>El medio artístico: fotografía analógica de 35mm, render 3D en Blender, ilustración vectorial editorial plana, lente de 50mm f/1.8, y la relación de aspecto (--ar 16:9).</p>
          </div>
        </div>

        <div class="box-success">
          <div class="box-success-title">Ejemplo Integrado de la Fórmula S.C.I.E.</div>
          <p><em>"[S: Retrato de una joven emprendedora trabajando con serenidad] [C: en un escritorio nórdico de roble claro con laptop moderna y plantas suculentas] [I: iluminada por luz natural suave que entra por un gran ventanal lateral] [E: fotografía editorial profesional, cámara Hasselblad, paleta de colores neutros, profundidad de campo sutil, --ar 16:9]"</em></p>
        </div>
      `
    },
    {
      badge: "PÁGINA 06",
      category: "GUÍA OPERATIVA",
      title: "Desglose Técnico de Parámetros Esenciales",
      subtitle: "Domina los comandos y modificadores clave de las plataformas de generación de imagen.",
      content: `
        <p>Conoce los parámetros que te darán control quirúrgico sobre el formato y la estética en Midjourney y herramientas afines:</p>

        <table>
          <thead>
            <tr>
              <th style="width: 25%;">Parámetro / Comando</th>
              <th style="width: 35%;">Función Práctica</th>
              <th style="width: 40%;">Caso de Uso Recomendado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>--ar (Aspect Ratio)</strong></td>
              <td>Modifica la relación de aspecto ancho/alto de la imagen generada.</td>
              <td><code>--ar 16:9</code> para banners y videos.<br><code>--ar 3:4</code> o <code>--ar 4:5</code> para portadas y PDFs.<br><code>--ar 1:1</code> para feeds cuadrados.</td>
            </tr>
            <tr>
              <td><strong>--v (Versión)</strong></td>
              <td>Determina el motor generativo a ejecutar (ej: <code>--v 6.1</code>).</td>
              <td>Utilizar siempre la versión más reciente para evitar deformaciones anatómicas.</td>
            </tr>
            <tr>
              <td><strong>--s (Stylize)</strong></td>
              <td>Regula el grado de embellecimiento artístico del modelo (0 a 1000).</td>
              <td><code>--s 50</code> para fotorrealismo documental estricto.<br><code>--s 250</code> para un toque publicitario refinado.</td>
            </tr>
            <tr>
              <td><strong>--no (Prompt Negativo)</strong></td>
              <td>Excluye elementos indeseados de la generación.</td>
              <td><code>--no text, watermark, blur, distorted fingers, oversaturated colors</code>.</td>
            </tr>
          </tbody>
        </table>

        <div class="box-info">
          <div class="box-info-title">Regla de Oro con el Texto en Imágenes</div>
          <p>Aunque los modelos actuales empiezan a renderizar letras, la mejor práctica profesional sigue siendo generar la imagen completamente limpia de texto (usando <code>--no text</code>) y añadir los títulos tipográficos posteriormente en Canva o Figma para máxima nitidez y control tipográfico.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 07",
      category: "INGENIERÍA DE PROMPTS",
      title: "Plantillas Maestras: Prompts Visuales Listos para Usar",
      subtitle: "Fórmulas exactas para fotografía publicitaria, ilustraciones de estudio e iconos de producto.",
      content: `
        <div class="prompt-card">
          <div class="prompt-tag">PLANTILLA 01: FOTOGRAFÍA EDITORIAL PARA PORTADA O BANNER</div>
A sleek, modern creator workspace, top-down flat lay view, Apple MacBook Pro open on a wooden oak desk, minimalist notebook with a pen, ceramic coffee cup, soft morning window light from the right side, warm earth tone color palette, Hasselblad camera quality, highly detailed textures, clean composition, minimalist aesthetic, depth of field --ar 16:9 --v 6.1 --s 150 --no text, watermark, logo, messy cables
        </div>

        <div class="prompt-card">
          <div class="prompt-tag">PLANTILLA 02: ILUSTRACIÓN VECTORIAL PLANA PARA INFOGRAFÍAS Y DIAPOSITIVAS</div>
Clean modern flat vector illustration of an artificial intelligence brain network connecting digital creator tools, vibrant deep indigo and violet accents on pure white background, elegant geometric lines, corporate Memphis modern style, high contrast, clean vector art, isolated on white --ar 1:1 --v 6.1 --no realistic skin, photo, clutter, shadows
        </div>

        <div class="prompt-card">
          <div class="prompt-tag">PLANTILLA 03: RENDER 3D MINIMALISTA PARA MOCKUPS DE CURSO</div>
Floating 3D isometric digital badge with a glowing purple crystal cube and graduation cap, matte clay finish, pastel studio lighting, ambient occlusion, frosted glass elements, subtle reflections, premium aesthetic, 4k render, isolated on dark graphite background --ar 1:1 --s 200 --no text, grain
        </div>
      `
    },
    {
      badge: "PÁGINA 08",
      category: "CASO DE ESTUDIO",
      title: "Estudio de Caso: De Prompt Aficionado a Portada Profesional",
      subtitle: "Evolución paso a paso de un activo gráfico para la carátula de un producto digital.",
      content: `
        <p>Analicemos la evolución técnica de la imagen de portada para el módulo de creación de contenidos en <strong>AI Business System</strong>:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">v1</div>
            <div class="step-text">
              <h4>Intento 1 (Prompt Aficionado)</h4>
              <p><em>"Un creador de contenido usando inteligencia artificial con una computadora bonita"</em>.<br>
              <strong>Resultado:</strong> Una persona con 6 dedos, cara deforme, colores fosforescentes exagerados y un fondo abarrotado de cables futuristas sin sentido comercial.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">v2</div>
            <div class="step-text">
              <h4>Intento 2 (Inyección de Parámetros Fotográficos)</h4>
              <p>Se especificó lente de 50mm, luz suave de estudio y paleta neutra. El rostro mejoró, pero el fondo seguía teniendo textos distorsionados flotando en el aire.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">v3</div>
            <div class="step-text">
              <h4>Intento 3 (Fórmula S.C.I.E. Definitiva + Prompt Negativo)</h4>
              <p>Se eliminó la figura humana compleja, optando por una composición de escritorio de alta gama con <code>--no text, oversaturation, distortion</code>. La imagen resultante fue tan limpia que se utilizó directamente como carátula oficial del programa.</p>
            </div>
          </div>
        </div>

        <div class="box-info">
          <div class="box-info-title">Lección Extraída</div>
          <p>A menudo, una composición minimalista de objetos simbólicos o un plano de detalle transmite mucho mayor prestigio y seriedad que intentar generar personajes humanos complejos en herramientas de IA.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 09",
      category: "ECOSISTEMA TÉCNICO",
      title: "Comparativa de Plataformas de Generación Visual",
      subtitle: "Análisis objetivo de Midjourney, DALL-E 3, Flux y Stable Diffusion en 2026.",
      content: `
        <p>El panorama de herramientas visuales ofrece opciones especializadas según tus requerimientos técnicos y presupuesto:</p>

        <table>
          <thead>
            <tr>
              <th style="width: 22%;">Plataforma</th>
              <th style="width: 28%;">Principales Ventajas</th>
              <th style="width: 25%;">Desafíos / Contras</th>
              <th style="width: 25%;">Mejor Para...</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Midjourney (v6+)</strong></td>
              <td>Estética fotográfica inigualable, iluminación cinematográfica soberbia, excelente renderizado de texturas.</td>
              <td>Acceso mediante suscripción de pago; interfaz basada en Discord / Web cerrada.</td>
              <td>Portadas de impacto, fondos de video, fotografía editorial y arte conceptual.</td>
            </tr>
            <tr>
              <td><strong>Flux (Black Forest Labs)</strong></td>
              <td>Fotorrealismo extremo en piel humana, excelente anatomía de manos y renderizado fiel de tipografías cortas.</td>
              <td>Requiere computación pesada en local o servicios cloud de terceros.</td>
              <td>Retratos humanos realistas y elementos con tipografía integrada.</td>
            </tr>
            <tr>
              <td><strong>DALL-E 3 (OpenAI)</strong></td>
              <td>Comprensión lingüística conversacional insuperable; sigue instrucciones complejas al pie de la letra.</td>
              <td>Estilo a menudo demasiado digital o plástico si no se fuerza el realismo.</td>
              <td>Ideación rápida, diagramas conceptuales e ilustraciones directas dentro de ChatGPT.</td>
            </tr>
          </tbody>
        </table>

        <div class="box-success">
          <div class="box-success-title">Recomendación para el Creador Digital</div>
          <p>Si buscas portadas comerciales de alto prestigio estético, Midjourney sigue siendo el estándar indiscutible. Si necesitas rapidez e integración en tu flujo de redacción, DALL-E 3 en ChatGPT resuelve la tarea sin salir de la ventana de chat.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 10",
      category: "PREVENCIÓN DE ERRORES",
      title: "Antipatrones y Errores en la Creación de Imágenes",
      subtitle: "Los 4 defectos que arruinan la percepción de profesionalismo en tus activos visuales.",
      content: `
        <p>Protege la imagen de tu marca evitando estos vicios comunes en la generación gráfica:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>El Efecto "Plástico / Cera" en la Piel</h4>
              <p>Ocurre cuando se usan términos genéricos como <em>"hyperrealistic, photorealistic, 8k"</em>. Paradójicamente, esos términos activan estilos de render 3D antiguos. Para obtener piel real, pide imperfecciones: <em>"natural skin texture, subtle freckles, cinematic documentary lighting"</em>.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>Saturación Cromática Neón sin Justificación</h4>
              <p>Muchos modelos tienden a inundar las escenas de luces púrpuras y azul cian hiperbólicas. A menos que tu marca sea de temática cyberpunk, exige una paleta sobria: <em>"muted earthy tones, Scandinavian color palette, soft daylight"</em>.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Fondos Caóticos y Sobrecargados</h4>
              <p>Un fondo con 50 objetos dispersos distrae la mirada y destruye el contraste visual necesario para colocar títulos. Pide siempre fondos limpios y con poca profundidad de campo (bokeh suave).</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <h4>Descuidar la Relación de Aspecto</h4>
              <p>Generar una imagen cuadrada (1:1) e intentar recortarla a la fuerza para un banner panorámico de 16:9 suele cortar el sujeto principal. Especifica siempre el aspect ratio correcto desde el primer prompt.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 11",
      category: "CONTROL DE CALIDAD",
      title: "Checklist de Verificación de Calidad Gráfica",
      subtitle: "Filtros visuales obligatorios antes de aprobar una imagen generada con IA.",
      content: `
        <p>Inspecciona al 100% de zoom cualquier imagen generada antes de incorporarla a tus productos didácticos:</p>

        <div class="checklist-box">
          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>1. Anatomía y Simetría Natural</strong>
              <p>Si aparecen personas: ¿las manos tienen exactamente 5 dedos, los ojos miran en la misma dirección y los dientes lucen proporcionados?</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>2. Ausencia de "Letras Parásitas"</strong>
              <p>¿Se ha verificado que no existan tipografías ficticias o signos deformes en camisetas, tazas, carteles o fondos de la escena?</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>3. Consistencia de la Fuente de Luz</strong>
              <p>¿Las sombras proyectadas en el suelo o escritorio concuerdan con la dirección de la luz principal de la habitación?</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>4. Espacio Negativo para Tipografía</strong>
              <p>¿Dispone la imagen de una zona despejada (arriba, abajo o a un lateral) donde se pueda colocar un título legible sin tapar el sujeto?</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>5. Resolución y Nitidez de Exportación</strong>
              <p>¿La imagen cuenta con al menos 2000 píxeles en su lado mayor para evitar que se vea pixelada en pantallas Retina o impresiones?</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>6. Coherencia con la Marca</strong>
              <p>¿Los colores y la atmósfera transmiten los mismos valores que el resto de los materiales de AI Business System?</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 12",
      category: "TALLER PRÁCTICO",
      title: "Laboratorio Visual: Generación y Refinamiento",
      subtitle: "Tres prácticas guiadas para convertirte en un director de arte digital eficiente.",
      content: `
        <p>Abre tu generador de imágenes favorito y ejecuta estos tres retos secuenciales:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>Práctica 1: La Prueba de la Iluminación</h4>
              <p>Genera una escena de un escritorio de trabajo con la <strong>Plantilla 01</strong>. Luego cámbiale únicamente la iluminación: prueba primero <em>"golden hour sunlight"</em> y luego <em>"moody cinematic dark studio lighting"</em>. Compara el radical cambio emocional entre ambas opciones.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>Práctica 2: Generación de un Set de 3 Iconos Coherentes</h4>
              <p>Utiliza la <strong>Plantilla 02</strong> para crear 3 ilustraciones conceptuales para los módulos de tu curso (ej: una bombilla de ideas, un engranaje de automatización y una gráfica de crecimiento). Mantén idénticos los colores y parámetros de estilo.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Práctica 3: Composición con Espacio Negativo</h4>
              <p>Genera un fondo abstracto sobrio con <code>--ar 16:9</code> que tenga el lado izquierdo completamente desenfocado u oscuro para colocar allí el título de tu clase. Exporta la imagen final en alta resolución.</p>
            </div>
          </div>
        </div>

        <div class="box-success">
          <div class="box-success-title">Evidencia de Progreso</div>
          <p>Guarda tus 3 mejores generaciones en una carpeta titulada <code>/recursos-visuales</code> para utilizarlas en la siguiente clase al ensamblar la portada final de tu material.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 13",
      category: "RESUMEN EJECUTIVO",
      title: "Los 5 Mandamientos de la Creación Visual con IA",
      subtitle: "Reglas estratégicas para destacar visualmente en un mercado saturado de imágenes artificiales.",
      content: `
        <p>Conserva estos principios en mente cada vez que redactes una orden visual en tus proyectos:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">I</div>
            <div class="step-text">
              <h4>Menos es Infinitamente Más</h4>
              <p>Una composición limpia con 2 o 3 elementos bien iluminados transmite mil veces más lujo y profesionalismo que una escena recargada de detalles innecesarios.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">II</div>
            <div class="step-text">
              <h4>Describe la Luz, no Solo los Objetos</h4>
              <p>Lo que diferencia una foto mediocre de una obra de arte es la calidad de la iluminación. Dedica siempre una frase completa a definir la dirección y calidez de la luz.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">III</div>
            <div class="step-text">
              <h4>El Texto se Diseña Aparte</h4>
              <p>Usa la IA para generar la imagen base de fondo; añade títulos, logotipos y llamadas a la acción en software tipográfico profesional.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">IV</div>
            <div class="step-text">
              <h4>Define una Paleta y Sé Leal a Ella</h4>
              <p>No cambies de estética en cada lección. Si elegiste tonos neutros y toques violetas, respétalos a lo largo de todo tu curso para construir una identidad memorable.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">V</div>
            <div class="step-text">
              <h4>El Arte Está en la Curaduría</h4>
              <p>Generar 4 variantes tarda 30 segundos. Tu verdadero trabajo como creador es seleccionar la única variante impecable y descartar sin piedad las 3 imperfectas.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 14",
      category: "CUADERNO DE TRABAJO",
      title: "Moodboard y Ficha de Estilo Visual de mi Proyecto",
      subtitle: "Plantilla para registrar las decisiones estéticas clave de tu marca educativa.",
      content: `
        <p>Completa esta ficha visual para asegurar coherencia en todas tus futuras imágenes:</p>

        <div class="notes-area">
          <h4 style="color: #0f172a; margin-bottom: 4px;">Paleta de Colores Primarios (Nombres o Códigos Hex):</h4>
          <p style="font-size: 12px; color: #64748b; margin-bottom: 8px;">(Ejemplo: Grafito oscuro #09090b, Blanco puro #ffffff, Acento Índigo #6366f1)</p>
          <div class="line-rule"></div>
        </div>

        <div class="notes-area">
          <h4 style="color: #0f172a; margin-bottom: 4px;">Tipo de Iluminación Predilecta para mis Escenas:</h4>
          <p style="font-size: 12px; color: #64748b; margin-bottom: 8px;">(Luz natural matutina / Iluminación cenital de estudio / Contraste suave tipo cine)</p>
          <div class="line-rule"></div>
        </div>

        <div class="notes-area">
          <h4 style="color: #0f172a; margin-bottom: 4px;">Modificadores Negativos Obligatorios para mis Prompts:</h4>
          <p style="font-size: 12px; color: #64748b; margin-bottom: 8px;">(Ejemplo: --no text, neon lights, cluttered background, distorted fingers)</p>
          <div class="line-rule"></div>
        </div>
      `
    },
    {
      badge: "PÁGINA 15",
      category: "PRÓXIMOS PASOS",
      title: "Conexión con la Clase 02 del Módulo 3",
      subtitle: "Cómo transformar imágenes aisladas en materiales visuales completos para tus clases.",
      content: `
        <p>Has completado con éxito la <strong>Clase 01 del Módulo 3</strong>. Ahora entiendes los mecanismos de los modelos de difusión, dominas la fórmula S.C.I.E. y cuentas con las plantillas para dirigir arte con soltura.</p>

        <div class="box-info">
          <div class="box-info-title">Avance de la Clase 02: Creando Materiales Visuales para Contenidos Digitales</div>
          <p>Una imagen por sí sola no es un producto. En la siguiente clase aprenderás a combinar tus generaciones de IA con tipografía, maquetación y estructuras de diseño para crear portadas de e-books irresistibles, miniaturas de video con alto porcentaje de clics y diapositivas profesionales.</p>
        </div>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">✓</div>
            <div class="step-text">
              <h4>Marcar Lección como Finalizada</h4>
              <p>Confirma el progreso de la Clase 01 en el panel de control de <strong>AI Business System</strong>.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">→</div>
            <div class="step-text">
              <h4>Guardar tus Generaciones</h4>
              <p>Selecciona la mejor imagen creada en el laboratorio de la Página 12; la utilizaremos en el taller de diseño de la siguiente lección.</p>
            </div>
          </div>
        </div>

        <div class="box-success" style="margin-top: 24px;">
          <div class="box-success-title">Tu Formación Continúa</div>
          <p>Nos vemos en la Clase 02 para transformar tus imágenes en piezas gráficas comerciales de alto rendimiento.</p>
        </div>
      `
    }
  ]
};

const m3_c2 = {
  moduleNumber: "Módulo 3",
  moduleTitle: "Creación y Edición Visual con IA",
  lessonNumber: "02",
  lessonTitle: "Creando materiales visuales para contenidos digitales",
  totalPages: 15,
  pages: [
    {
      badge: "PÁGINA 02",
      category: "INTRODUCCIÓN PEDAGÓGICA",
      title: "Del Render Aislado al Activo Gráfico Comercial",
      subtitle: "Cómo integrar imágenes generadas por IA en piezas de comunicación y diseño editorial funcionales.",
      content: `
        <p>Una imagen generada por inteligencia artificial, por hermosa o realista que resulte, es únicamente materia prima. En el mundo de los infoproductos y los negocios digitales, los alumnos no compran un archivo JPEG suelto; compran una experiencia integral transmitida a través de portadas elegantes, esquemas claros, guías maquetadas y miniaturas que despiertan curiosidad inmediata.</p>
        
        <p>El verdadero salto profesional se produce cuando comprendes cómo orquestar la imagen con la tipografía, la jerarquía visual de la información y la psicología del color en herramientas de maquetación rápida como Canva, Figma o Illustrator.</p>

        <div class="box-info">
          <div class="box-info-title">El Concepto de Activo Gráfico Funcional</div>
          <p>Un material visual no existe para decorar; existe para cumplir un objetivo pedagógico o comercial específico: captar la atención en un feed saturado, clarificar una idea difícil o elevar el valor percibido de un programa formativo.</p>
        </div>

        <p>En esta guía oficial de la <strong>Clase 02 del Módulo 3</strong>, aprenderás el flujo de trabajo completo para ensamblar portadas de e-books, mockups de cursos, portadas de módulos y recursos descargables utilizando la IA como aliada de producción acelerada.</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>La Regla de la Jerarquía Visual</h4>
              <p>Cómo guiar la mirada del alumno para que absorba el título, el beneficio y el autor en el orden correcto.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>Integración Híbrida: IA + Maquetación</h4>
              <p>El flujo exacto para combinar el fondo algorítmico con textos vectoriales nítidos y sin artefactos.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Estandarización de Marca</h4>
              <p>Creación de un sistema de plantillas reutilizables para que todo tu catálogo formativo respire coherencia.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 03",
      category: "OBJETIVOS Y COMPETENCIAS",
      title: "Competencias de Producción y Diseño Editorial",
      subtitle: "Habilidades prácticas que dominarás al finalizar esta unidad didáctica.",
      content: `
        <p>Esta clase te transformará en un creador con criterio de diseñador editorial. A continuación se presentan las competencias a consolidar:</p>

        <table>
          <thead>
            <tr>
              <th style="width: 25%;">Competencia</th>
              <th style="width: 45%;">Habilidad Práctica</th>
              <th style="width: 30%;">Entregable Asociado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Diseño de Portadas</strong></td>
              <td>Componer portadas de e-books y guías con proporciones equilibradas entre fondo, tipografía y espacio negativo.</td>
              <td>Portada en Alta Resolución (PDF/PNG)</td>
            </tr>
            <tr>
              <td><strong>Generación de Mockups 3D</strong></td>
              <td>Presentar materiales digitales dentro de dispositivos (tablets, laptops, libros físicos) para multiplicar el valor percibido.</td>
              <td>Mockup Comercial de Producto</td>
            </tr>
            <tr>
              <td><strong>Miniaturas de Alto Impacto (CTR)</strong></td>
              <td>Diseñar carátulas de video con contraste cromático extremo, expresiones faciales nítidas y textos de 3 palabras.</td>
              <td>Miniatura para YouTube / Plataforma</td>
            </tr>
            <tr>
              <td><strong>Maquetación de Documentos</strong></td>
              <td>Estructurar páginas interiores con cabeceras uniformes, pies de página con numeración y cajas de contenido destacadas.</td>
              <td>Plantilla de Cuaderno de Trabajo A4</td>
            </tr>
          </tbody>
        </table>

        <div class="box-success">
          <div class="box-success-title">Meta de la Lección</div>
          <p>Serás capaz de tomar cualquier imagen creada en la clase anterior y convertirla en una portada editorial terminada y su correspondiente mockup 3D en menos de 20 minutos de trabajo.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 04",
      category: "MARCO CONCEPTUAL",
      title: "Las Leyes de la Psicología Visual Aplicadas al Contenido",
      subtitle: "Principios de diseño que determinan si un material luce amateur o de nivel internacional.",
      content: `
        <p>El diseño visual no es cuestión de gusto subjetivo; responde a patrones biológicos de percepción visual estudiados por la psicología de la Gestalt:</p>

        <div class="grid-2">
          <div class="card-simple">
            <h4>1. Ley de Contraste</h4>
            <p>Si el fondo es oscuro, la tipografía debe ser blanco puro o acento brillante. Si el fondo tiene detalle fotográfico, añade una capa semitransparente oscura (overlay al 40%) para que las letras no compitan con la imagen.</p>
          </div>
          <div class="card-simple">
            <h4>2. Ley de Proximidad</h4>
            <p>Los elementos relacionados (como el número de módulo y el título de la clase) deben estar agrupados visualmente, separados por suficiente espacio en blanco respecto a otros bloques independientes.</p>
          </div>
          <div class="card-simple">
            <h4>3. Jerarquía Tipográfica Escalar</h4>
            <p>Nunca uses más de 2 familias tipográficas en un material: una con personalidad para títulos grandes (bold / sans-serif geométrica) y otra extremadamente legible para los textos de lectura continua.</p>
          </div>
          <div class="card-simple">
            <h4>4. El Espacio Negativo (Respiro)</h4>
            <p>El vacío no es espacio desperdiciado; es el elemento que otorga elegancia y descanso a la mente del alumno. Resiste la tentación de llenar cada centímetro con iconos o adornos.</p>
          </div>
        </div>

        <div class="box-info">
          <div class="box-info-title">El Error del Principiante</div>
          <p>Un mal diseñador cree que agregar más elementos hace que el material parezca más valioso. Un diseñador experto sabe que eliminar lo superfluo es lo que transmite verdadero estatus y sofisticación.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 05",
      category: "METODOLOGÍA DE TRABAJO",
      title: "El Flujo de Ensamble Gráfico en 4 Etapas",
      subtitle: "De la generación en IA a la exportación vectorial lista para entrega al alumno.",
      content: `
        <p>Este es el flujo de trabajo profesional utilizado para la producción de materiales en <strong>AI Business System</strong>:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>Fase 1: Generación del Lienzo Base en IA</h4>
              <p>Genera la imagen de fondo con Midjourney o Flux utilizando prompts con espacio negativo explícito (ej: <em>"minimalist dark texture background with space on the left side"</em>).</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>Fase 2: Escalado e Interpolación (Upscaling)</h4>
              <p>Si la imagen será impresa o expuesta en alta densidad, pásala por una herramienta de reescalado por IA (como Upscayl o Magnific) para alcanzar los 300 DPI de resolución nítida.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Fase 3: Tipografía y Capas en Herramienta de Diseño</h4>
              <p>Importa la imagen en Canva o Figma. Aplica la máscara de contraste si es necesario, monta los textos con fuentes de la marca y añade los elementos vectoriales (líneas de acento, badges).</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <h4>Fase 4: Transformación en Mockup 3D</h4>
              <p>Toma la portada terminada e insértala en una plantilla 3D de libro o tablet (usando herramientas como Smartmockups o Canva Mockups) para tu página de venta o área de miembros.</p>
            </div>
          </div>
        </div>

        <div class="box-success">
          <div class="box-success-title">Eficiencia Temporal</div>
          <p>Este flujo estructurado te permite pasar de cero a una portada con su mockup comercial 3D en menos de 15 minutos, sin necesidad de dominar programas complejos como Photoshop.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 06",
      category: "GUÍA OPERATIVA",
      title: "Anatomía de una Portada de E-book o Guía Didáctica",
      subtitle: "Los 5 componentes indispensables de una carátula que transmite autoridad inmediata.",
      content: `
        <p>Una portada didáctica profesional debe incluir estrictamente estos cinco elementos ordenados de arriba hacia abajo:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>El Cintillo Superior de Autoridad (Top Eyebrow)</h4>
              <p>Texto pequeño en mayúsculas con espaciado amplio: el nombre del programa o sello editorial (ej: <code>AI BUSINESS SYSTEM • GUÍA OFICIAL</code>).</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>La Categoría o Módulo Formativo</h4>
              <p>Un badge o texto en color de acento que sitúe al alumno dentro del plan de estudios (ej: <em>MÓDULO 3 — CREACIÓN VISUAL</em>).</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>El Gran Título de la Lección</h4>
              <p>Tipografía protagonista, con peso extrabold y contraste máximo. Debe leerse sin esfuerzo incluso en una vista en miniatura desde el celular.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <h4>El Subtítulo de Transformación</h4>
              <p>Una o dos líneas explicativas que describen el beneficio concreto del material (ej: <em>Manual práctico paso a paso y cuaderno de ejercicios de aplicación</em>).</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">5</div>
            <div class="step-text">
              <h4>El Pie de Metadatos y Autoría</h4>
              <p>Firma del autor, edición del año, número de páginas del documento o mención de licencia exclusiva para alumnos registrados.</p>
            </div>
          </div>
        </div>

        <div class="box-info">
          <div class="box-info-title">Comprobación en Miniatura</div>
          <p>Haz una captura de tu portada y redúcela al tamaño de una moneda en tu pantalla. Si el título no puede leerse claramente a esa escala diminuta, agranda la tipografía o simplifica el fondo.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 07",
      category: "INGENIERÍA DE PROMPTS",
      title: "Plantillas Maestras: Prompts para Fondos y Mockups",
      subtitle: "Instrucciones de generación optimizadas para dejar espacio libre a la tipografía.",
      content: `
        <div class="prompt-card">
          <div class="prompt-tag">PLANTILLA 01: FONDO ABSTRACTO EDITORIAL CON ESPACIO NEGATIVO</div>
Dark minimalist abstract background for an educational book cover, subtle deep slate and charcoal geometric waves, elegant smooth violet light gradient in top right corner, 70% dark empty negative space on the center and bottom for typography overlay, cinematic soft shadows, luxury clean aesthetic, 8k resolution --ar 3:4 --v 6.1 --s 100 --no text, objects, people, bright highlights
        </div>

        <div class="prompt-card">
          <div class="prompt-tag">PLANTILLA 02: TEXTURA MODERNA PARA BANNER DE PLATAFORMA</div>
Ultra clean minimalist technology banner, soft flowing frosted glass ribbons, delicate pastel lilac and silver tones, subtle caustic refractions, completely empty flat negative space in the center, studio light, Apple advertising aesthetic, clean edges --ar 16:9 --v 6.1 --s 200 --no text, logo, grain
        </div>

        <div class="prompt-card">
          <div class="prompt-tag">PLANTILLA 03: ESCENA DE DISPOSITIVOS PARA MOCKUP DE PRODUCTO</div>
Floating black iPad Pro with thin bezels and Apple Magic Keyboard, displaying a blank pure white screen with green chroma key placeholders, resting on a clean white marble studio pedestal, soft studio lighting, ambient shadows, 3D product render style --ar 16:9 --v 6.1 --s 150 --no clutter, hands
        </div>
      `
    },
    {
      badge: "PÁGINA 08",
      category: "CASO DE ESTUDIO",
      title: "Análisis Comparativo: Portada Amateur vs. Editorial Pro",
      subtitle: "Desglose visual de los errores que restan valor y las correcciones que generan prestigio.",
      content: `
        <p>Analicemos la diferencia crítica entre dos diseños de portada para un mismo e-book sobre creación digital:</p>

        <table>
          <thead>
            <tr>
              <th style="width: 20%;">Elemento</th>
              <th style="width: 40%;">Diseño Amateur (Sin Criterio)</th>
              <th style="width: 40%;">Diseño Pro (AI Business System)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Fondo</strong></td>
              <td>Una imagen de IA hipercompleja llena de robots, llamas y códigos binarios sin espacio libre.</td>
              <td>Fondo sobrio con textura elegante y 60% de espacio negativo limpio para la lectura.</td>
            </tr>
            <tr>
              <td><strong>Tipografía</strong></td>
              <td>4 fuentes distintas con sombras de colores, bordes brillantes y mayúsculas deformadas.</td>
              <td>1 sola familia sans-serif geométrica con jerarquía clara de pesos (Bold, Regular, Light).</td>
            </tr>
            <tr>
              <td><strong>Contraste</strong></td>
              <td>Letras oscuras sobre fondo multicolor; resulta imposible leer el título sin forzar la vista.</td>
              <td>Texto blanco brillante sobre fondo carbón profundo con una fina línea de acento violeta.</td>
            </tr>
            <tr>
              <td><strong>Valor Percibido</strong></td>
              <td>Parece un spam gratuito descargado de un foro de internet.</td>
              <td>Luce como una publicación oficial de una academia tecnológica de prestigio internacional.</td>
            </tr>
          </tbody>
        </table>

        <div class="box-info">
          <div class="box-info-title">Impacto en la Tasa de Conversión</div>
          <p>En pruebas de mercado documentadas, un producto digital presentado con diseño editorial profesional alcanza hasta un 240% más de tasa de conversión a un precio 3 veces superior al del diseño amateur.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 09",
      category: "HERRAMIENTAS DE DISEÑO",
      title: "Suite de Software Gráfico para el Creador Solitario",
      subtitle: "Las herramientas indispensables para maquetar, recortar y ensamblar tus materiales.",
      content: `
        <p>No necesitas una carrera en diseño gráfico para lograr resultados impecables. Esta es la combinación de herramientas más ágil del mercado:</p>

        <table>
          <thead>
            <tr>
              <th style="width: 22%;">Software</th>
              <th style="width: 28%;">Función Específica</th>
              <th style="width: 25%;">Ventajas Clave</th>
              <th style="width: 25%;">Curva de Aprendizaje</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Canva Pro</strong></td>
              <td>Maquetación rápida de carruseles, hojas de trabajo, portadas y eliminación de fondos en 1 clic.</td>
              <td>Miles de plantillas, herramienta mágica de IA y generador de mockups integrado.</td>
              <td>Muy baja (intuitivo en 1 hora).</td>
            </tr>
            <tr>
              <td><strong>Figma</strong></td>
              <td>Diseño de interfaces de plataforma, sistemas de diseño de marca, iconos vectoriales y exportación precisa.</td>
              <td>Control milimétrico de tipografías, auto-layout profesional y 100% colaborativo.</td>
              <td>Media (ideal para creadores pro).</td>
            </tr>
            <tr>
              <td><strong>Clipdrop / Photopea</strong></td>
              <td>Eliminación de objetos indeseados (cleanup), reiluminación con IA (relight) y edición de capas PSD.</td>
              <td>Funciona directo en el navegador web sin instalar software pesado.</td>
              <td>Baja / Intermedia.</td>
            </tr>
            <tr>
              <td><strong>Upscayl</strong></td>
              <td>Ampliación y mejora de nitidez de imágenes mediante modelos de super-resolución por IA.</td>
              <td>Completamente gratuito, código abierto y procesamiento local en tu computadora.</td>
              <td>Inmediata (arrastrar y soltar).</td>
            </tr>
          </tbody>
        </table>

        <div class="box-success">
          <div class="box-success-title">La Tríada Ganadora</div>
          <p>Genera en Midjourney → Mejora resolución en Upscayl → Monta tipografías y exporta el PDF en Canva o Figma. Con esta tríada puedes resolver el 100% de los materiales gráficos de tu negocio.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 10",
      category: "PREVENCIÓN DE ERRORES",
      title: "Errores Críticos en el Montaje de Materiales Digitales",
      subtitle: "Las fallas de maquetación que delatan falta de oficio y cómo erradicarlas.",
      content: `
        <p>Evita estos cuatro errores habituales al diseñar las piezas visuales de tu curso:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>Tipografía Pegada a los Bordes (Falta de Márgenes)</h4>
              <p>Colocar títulos o textos rozando el extremo de la página o de la imagen. Deja siempre un margen generoso de al menos 15 a 20 milímetros alrededor de cualquier composición para que el diseño respire.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>El Uso de Fuentes Incompatibles con Caracteres Especiales</h4>
              <p>Descargar fuentes que no soportan tildes (á, é, í, ó, ú) o la letra ñ. Cuando el sistema sustituye una letra con tilde por una tipografía genérica, la palabra queda rota y destruye la credibilidad del texto.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Efectos Excesivos de Sombra y Bisel</h4>
              <p>Añadir sombras negras duras, bordes brillantes de neón o reflejos artificiales a los textos. La tendencia internacional contemporánea es el diseño plano o sutilmente elevado con sombras difusas casi imperceptibles.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <h4>Exportar en Formato Incorrecto</h4>
              <p>Exportar un documento de lectura en formato JPEG de baja calidad en lugar de un PDF vectorial con texto seleccionable. Tus alumnos deben poder copiar fragmentos y leer con nitidez en cualquier zoom.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 11",
      category: "CONTROL DE CALIDAD",
      title: "Checklist de Verificación de Materiales Gráficos",
      subtitle: "Los 6 filtros de auditoría visual antes de subir un archivo a la plataforma.",
      content: `
        <p>Antes de adjuntar cualquier archivo gráfico o portada a tu plataforma, revisa este checklist:</p>

        <div class="checklist-box">
          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>1. Legibilidad Absoluta del Título</strong>
              <p>¿Se lee el título del recurso en menos de 2 segundos sin necesidad de acercar la pantalla?</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>2. Ortografía Impecable en Textos Gráficos</strong>
              <p>¿Se han revisado dos veces las mayúsculas, tildes y concordancias en titulares y subtítulos?</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>3. Peso del Archivo Optimizado</strong>
              <p>¿El archivo PDF o imagen pesa menos de 10 MB para permitir descargas ultrarrápidas incluso en conexiones móviles lentas?</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>4. Alineación Geométrica y Márgenes</strong>
              <p>¿Están todos los textos y logotipos correctamente alineados a una cuadrícula visual armónica?</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>5. Coherencia de Paleta de Marca</strong>
              <p>¿Utiliza la pieza exactamente los colores corporativos de tu proyecto sin introducir tonos discordantes?</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>6. Adaptabilidad a Dispositivos Móviles</strong>
              <p>¿La pieza luce proporcionada y estética tanto en pantalla de computadora como en la pantalla de un celular?</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 12",
      category: "TALLER PRÁCTICO",
      title: "Taller Aplicado: Diseña tu Portada y Mockup Comercial",
      subtitle: "Práctica de 30 minutos para crear el activo visual de tu primer infoproducto.",
      content: `
        <p>Abre Canva, Figma o tu editor gráfico de preferencia y completa los siguientes tres pasos:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>Paso 1: Generación del Lienzo Base</h4>
              <p>Utiliza la <strong>Plantilla 01</strong> de la Página 07 en Midjourney o tu generador de confianza para obtener un fondo oscuro con espacio negativo en formato 3:4 o 4:5. Descárgalo en tu equipo.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>Paso 2: Montaje de la Jerarquía Editorial</h4>
              <p>Crea un lienzo A4 en Canva o Figma. Coloca la imagen de fondo. Añade el cintillo superior, el número de módulo, el título en negrita mayúscula y el subtítulo respetando los márgenes de 20mm.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Paso 3: Creación del Mockup 3D en Tablet</h4>
              <p>Descarga la portada en PNG. Abre la herramienta de Mockups de Canva o Smartmockups e inserta tu portada en una tablet digital sobre un escritorio moderno. Descarga el render final.</p>
            </div>
          </div>
        </div>

        <div class="box-success">
          <div class="box-success-title">Resultado Tangible del Taller</div>
          <p>Dispondrás del activo gráfico central que podrás utilizar en la página de inicio, en la presentación de la lección y en los correos de bienvenida a tus estudiantes.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 13",
      category: "RESUMEN EJECUTIVO",
      title: "Las Reglas de Oro del Diseño para Creadores Digitales",
      subtitle: "Principios esenciales para no fallar jamás en la presentación visual de tus materiales.",
      content: `
        <p>Grábate a fuego estas cinco leyes de presentación gráfica en <strong>AI Business System</strong>:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">I</div>
            <div class="step-text">
              <h4>La Portada es el Empaque del Conocimiento</h4>
              <p>Por brillante que sea tu clase, un empaque descuidado reduce el valor percibido del contenido. La estética es una promesa de calidad pedagógica.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">II</div>
            <div class="step-text">
              <h4>La Legibilidad es Sagrada</h4>
              <p>Si el usuario tiene que entrecerrar los ojos para descifrar un texto, el diseño ha fracasado. Prioriza el contraste y el tamaño sobre cualquier adorno.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">III</div>
            <div class="step-text">
              <h4>Crea Sistemas, no Diseños Aislados</h4>
              <p>Define una plantilla maestra una vez y reutilízala en todas las lecciones del módulo cambiando únicamente títulos e iconos representativos.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">IV</div>
            <div class="step-text">
              <h4>Los Mockups Hacen Tangible lo Digital</h4>
              <p>Un archivo descargable parece etéreo. Presentarlo en una tablet o cuaderno 3D le otorga corporeidad y despierta el deseo de posesión en el alumno.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">V</div>
            <div class="step-text">
              <h4>La Simplicidad es la Máxima Sofisticación</h4>
              <p>Los mejores productos del mundo (Apple, Notion, Tesla) destacan por su minimalismo radical. Aplica esa misma sobriedad a tus materiales educativos.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 14",
      category: "CUADERNO DE TRABAJO",
      title: "Planilla de Auditoría Visual de Materiales",
      subtitle: "Plantilla para evaluar a mano la calidad de los activos gráficos de tu proyecto.",
      content: `
        <p>Evalúa el material gráfico que acabas de diseñar respondiendo a estas tres preguntas críticas:</p>

        <div class="notes-area">
          <h4 style="color: #0f172a; margin-bottom: 4px;">1. ¿Qué emoción principal transmite mi diseño al primer golpe de vista?</h4>
          <p style="font-size: 12px; color: #64748b; margin-bottom: 8px;">(¿Confianza, tecnología punta, serenidad profesional o modernidad?)</p>
          <div class="line-rule"></div>
        </div>

        <div class="notes-area">
          <h4 style="color: #0f172a; margin-bottom: 4px;">2. Nombre y enlace de la plantilla maestra que he guardado en Canva/Figma:</h4>
          <div class="line-rule"></div>
        </div>

        <div class="notes-area">
          <h4 style="color: #0f172a; margin-bottom: 4px;">3. ¿Qué ajuste inmediato haré para mejorar el contraste o la legibilidad de la pieza?</h4>
          <div class="line-rule"></div>
        </div>
      `
    },
    {
      badge: "PÁGINA 15",
      category: "PRÓXIMOS PASOS",
      title: "Cierre de Módulo y Entrada al Módulo 4",
      subtitle: "De la creación de contenido y recursos visuales al desarrollo de productos digitales completos.",
      content: `
        <p>¡Felicitaciones! Has completado con distinción el <strong>Módulo 3: Creación y Edición Visual con IA</strong>. Cuentas con un arsenal completo de habilidades para redactar textos magnéticos y producir activos visuales de calidad editorial superior.</p>

        <div class="box-info">
          <div class="box-info-title">Próxima Etapa: Módulo 4 — Desarrollo y Estructuración de Productos Digitales</div>
          <p>Con tus contenidos y visuales dominados, llega el momento de empaquetar todo ese valor en un producto digital comercializable. En el Módulo 4 aprenderás a validar ideas con demanda real de mercado, a estructurar la experiencia de usuario y a construir la arquitectura pedagógica completa de tu curso, guía o comunidad.</p>
        </div>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">✓</div>
            <div class="step-text">
              <h4>Módulo 3 Finalizado</h4>
              <p>Marca las Clases 01 y 02 como completadas en tu panel para mantener tu progreso al 100%.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">→</div>
            <div class="step-text">
              <h4>Guarda tus Recursos</h4>
              <p>Descarga este PDF y archívalo junto con tus plantillas de Canva y prompts de Midjourney.</p>
            </div>
          </div>
        </div>

        <div class="box-success" style="margin-top: 24px;">
          <div class="box-success-title">Comunidad AI Business System</div>
          <p>Nos vemos en el Módulo 4 para estructurar tu producto digital definitivo.</p>
        </div>
      `
    }
  ]
};

module.exports = { m3_c1, m3_c2 };

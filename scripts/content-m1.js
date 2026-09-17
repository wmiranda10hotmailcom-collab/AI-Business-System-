// scripts/content-m1.js
// Datos pedagógicos completos para el Módulo 1 (Clase 01 y Clase 02)
// Totalmente en español, 14 páginas internas por clase (15 páginas totales con la portada).

const m1_c1 = {
  moduleNumber: "Módulo 1",
  moduleTitle: "Fundamentos de la Creación con IA",
  lessonNumber: "01",
  lessonTitle: "Cómo utilizar la IA en el proceso de creación",
  totalPages: 15,
  pages: [
    {
      badge: "PÁGINA 02",
      category: "INTRODUCCIÓN PEDAGÓGICA",
      title: "El Nuevo Paradigma del Creador Digital con IA",
      subtitle: "Comprender la transición de consumidor pasivo a director creativo asistido por algoritmos avanzados.",
      content: `
        <p>La irrupción de la inteligencia artificial generativa marca un punto de inflexión histórico en la economía de creadores. Tradicionalmente, el desarrollo de un producto, curso o material digital requería semanas de deliberación solitaria frente a una pantalla en blanco, sorteando bloqueos creativos, fricciones técnicas y fatiga mental.</p>
        
        <p>En el ecosistema contemporáneo de <strong>AI Business System</strong>, la inteligencia artificial no representa un sustituto del intelecto humano ni un automatismo carente de criterio. Por el contrario, se posiciona como un copiloto cognitivo de alto rendimiento capaz de procesar hipótesis, estructurar volúmenes densos de información y acelerar la fase exploratoria de cualquier proyecto.</p>

        <div class="box-info">
          <div class="box-info-title">Principio Rector del Creador Digital</div>
          <p>La IA no piensa por ti; piensa contigo. Tu valor diferencial como creador reside en tu perspectiva única, tu criterio editorial, tu experiencia de vida y tu capacidad para formular las preguntas correctas.</p>
        </div>

        <p>El creador moderno asume el rol de <em>Director de Orquesta</em>: defines la visión estratégica, estableces las fronteras conceptuales, calibras el tono de voz y tomas las decisiones finales de curaduría. La herramienta asume la ejecución preliminar de borradores, el contraste de ángulos y la organización metódica de ideas.</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>De la Fricción a la Fluidez</h4>
              <p>Elimina el bloqueo inicial transformando un pensamiento difuso en un diálogo interactivo en tiempo real.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>Ampliación del Espectro Creativo</h4>
              <p>Explora 10 enfoques divergentes de un mismo problema en cuestión de minutos antes de seleccionar el óptimo.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Foco en el Impacto Pedagógico</h4>
              <p>Delega la redacción de esqueletos básicos para concentrar tu energía en la profundidad de los conceptos.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 03",
      category: "OBJETIVOS Y COMPETENCIAS",
      title: "Matriz de Competencias y Resultados Esperados",
      subtitle: "Objetivos taxonómicos y habilidades operativas que dominarás tras completar esta lección.",
      content: `
        <p>Para maximizar el retorno de tu tiempo de estudio, hemos diseñado esta matriz de aprendizaje basada en competencias profesionales aplicadas. Al finalizar esta unidad didáctica, dispondrás de un marco mental claro para integrar cualquier modelo de lenguaje en tu rutina productiva.</p>

        <table>
          <thead>
            <tr>
              <th style="width: 25%;">Dominio</th>
              <th style="width: 45%;">Habilidad Práctica a Desarrollar</th>
              <th style="width: 30%;">Nivel de Logro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Estratégico</strong></td>
              <td>Identificar las etapas exactas del flujo de trabajo donde la IA genera mayor apalancamiento sin comprometer la originalidad.</td>
              <td>Conceptual / Analítico</td>
            </tr>
            <tr>
              <td><strong>Técnico</strong></td>
              <td>Dominar la formulación de instrucciones basadas en contexto, rol, restricciones y objetivos de salida definidos.</td>
              <td>Operativo / Avanzado</td>
            </tr>
            <tr>
              <td><strong>Editorial</strong></td>
              <td>Evaluar críticamente las respuestas generadas, filtrando redundancias, alucinaciones o tonos genéricos.</td>
              <td>Crítico / Curaduría</td>
            </tr>
            <tr>
              <td><strong>Metodológico</strong></td>
              <td>Construir sesiones iterativas de co-creación estructurada paso a paso en lugar de peticiones aisladas de un solo turno.</td>
              <td>Sistémico</td>
            </tr>
          </tbody>
        </table>

        <div class="box-success">
          <div class="box-success-title">Resultado Concreto Esperado</div>
          <p>Serás capaz de concebir, esquematizar y validar la estructura completa de un nuevo módulo o contenido formativo en menos de 30 minutos, manteniendo un estándar de calidad editorial riguroso y profesional.</p>
        </div>

        <div class="grid-2">
          <div class="card-simple">
            <h4>Lo que NO haremos</h4>
            <p>Copiar y pegar textos automáticos sin revisión, usar respuestas genéricas o delegar la responsabilidad creativa en el software.</p>
          </div>
          <div class="card-simple">
            <h4>Lo que SÍ dominaremos</h4>
            <p>Diseño de instrucciones quirúrgicas, arquitectura de ideas, edición guiada y aplicación práctica a casos del mundo real.</p>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 04",
      category: "MARCO CONCEPTUAL",
      title: "Fundamentos Técnicos: Cómo Piensan los Modelos de IA",
      subtitle: "Mecanismos esenciales de los Large Language Models (LLM) que todo creador debe comprender.",
      content: `
        <p>Para interactuar con maestría con cualquier inteligencia artificial, es indispensable desmitificar su funcionamiento interno. Un modelo de lenguaje no es una mente humana ni una base de datos estática; es un sofisticado motor probabilístico de predicción contextual.</p>

        <div class="grid-2">
          <div class="card-simple">
            <h4>1. Tokens y Representación</h4>
            <p>Los modelos no procesan palabras completas ni letras aisladas, sino fragmentos semánticos denominados <em>tokens</em> (aproximadamente 4 caracteres o 0.75 palabras en español). El modelo calcula la probabilidad del siguiente token basándose en los anteriores.</p>
          </div>
          <div class="card-simple">
            <h4>2. Ventana de Contexto</h4>
            <p>Es la cantidad de memoria de trabajo que el modelo retiene durante una conversación activa. Si saturas el contexto con información irrelevante, la atención del modelo se dispersa y la precisión de sus respuestas decae sensiblemente.</p>
          </div>
          <div class="card-simple">
            <h4>3. Temperatura y Creatividad</h4>
            <p>Parámetro numérico que regula la variabilidad estocástica. Temperaturas bajas (0.2) producen salidas predecibles y analíticas; temperaturas moderadas (0.7) estimulan asociaciones metafóricas e ideación variada.</p>
          </div>
          <div class="card-simple">
            <h4>4. Atención y Alucinación</h4>
            <p>Los mecanismos de auto-atención conectan conceptos a través de largas distancias textuales. Cuando faltan datos empíricos en el contexto proporcionado, el modelo tiende a rellenar vacíos plausibles pero potencialmente falsos.</p>
          </div>
        </div>

        <div class="box-warning">
          <div class="box-warning-title">Advertencia Metodológica: El Peligro de la Alucinación</div>
          <p>Nunca asumas que un dato estadístico, una cita bibliográfica o un tecnicismo histórico proporcionado por un LLM es verídico sin contrastarlo. Utiliza la IA para estructurar, sintetizar y redactar; audita tú mismo los hechos empíricos.</p>
        </div>

        <p>Al comprender que el modelo predice patrones de continuidad semántica, comprendemos la regla suprema: <strong>a mayor precisión y especificidad en la entrada (input), exponencialmente mayor será la utilidad del resultado (output).</strong></p>
      `
    },
    {
      badge: "PÁGINA 05",
      category: "METODOLOGÍA DE TRABAJO",
      title: "La Arquitectura del Flujo Creativo Híbrido",
      subtitle: "El método de 5 fases estructuradas para desarrollar contenidos digitales sin fricción.",
      content: `
        <p>El mayor error de los creadores principiantes consiste en abrir una ventana de chat y pedir: <em>"Escribe un e-book de 10 páginas sobre X tema"</em>. Este enfoque produce textos planos, impersonales y desestructurados. En <strong>AI Business System</strong> aplicamos el Método del Flujo Creativo Híbrido:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>Fase 1: Preparación y Briefing Estratégico (Humano)</h4>
              <p>Defines el objetivo pedagógico, la audiencia meta, el nivel de partida del alumno y los límites temáticos antes de escribir la primera orden.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>Fase 2: Ideación y Divergencia Guiada (Colaborativo)</h4>
              <p>Solicitas al modelo una lluvia de ideas estructurada, ángulos contraintuitivos, posibles analogías y esquemas organizativos preliminares.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Fase 3: Curaduría y Arquitectura Lógica (Humano)</h4>
              <p>Seleccionas los mejores componentes de la lluvia de ideas, descartas lo accesorio y ensamblas un esqueleto modular con jerarquía clara.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <h4>Fase 4: Expansión Modular Asistida (IA)</h4>
              <p>Desarrollas cada sección por separado, alimentando al modelo con el contexto del bloque anterior para mantener cohesión estilística.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">5</div>
            <div class="step-text">
              <h4>Fase 5: Inyección de Autoría y Pulido Editorial (Humano)</h4>
              <p>Añades ejemplos de tu propia trayectoria, anécdotas, tono personal y revisas la fluidez rítmica de cada párrafo antes de la publicación.</p>
            </div>
          </div>
        </div>

        <div class="box-info">
          <div class="box-info-title">Regla de Oro de la Modularidad</div>
          <p>Nunca intentes generar un proyecto completo en una sola respuesta. La excelencia técnica se consigue trabajando sección por sección, preservando el control editorial en cada intersección.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 06",
      category: "GUÍA OPERATIVA",
      title: "Desglose Operativo: Tu Primera Sesión de Co-Creación",
      subtitle: "Protocolo técnico para iniciar una sesión de trabajo con modelos avanzados de lenguaje.",
      content: `
        <p>A continuación detallamos el procedimiento estándar para iniciar cualquier sesión de ideación o redacción en ChatGPT, Claude o Gemini, asegurando el máximo rendimiento computacional y creativo:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">A</div>
            <div class="step-text">
              <h4>Inicialización de la Memoria de Trabajo</h4>
              <p>Abre siempre una conversación limpia o hilo nuevo para cada proyecto específico. Mezclar temas no relacionados contamina el contexto histórico del chat.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">B</div>
            <div class="step-text">
              <h4>Inyección de Rol y Credenciales del Asistente</h4>
              <p>Asigna un perfil profesional concreto: <em>"Actúa como un diseñador instruccional sénior y estratega de contenidos digitales"</em>.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">C</div>
            <div class="step-text">
              <h4>Suministro de Reglas de Salida y Restricciones Negativas</h4>
              <p>Indica qué comportamientos evitar: evitar clichés corporativos, no usar introducciones complacientes, evitar adverbios en exceso.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">D</div>
            <div class="step-text">
              <h4>Establecimiento del Modo Interactivo</h4>
              <p>Ordena al modelo: <em>"Antes de generar el contenido final, hazme 3 preguntas clave sobre los puntos que consideres ambiguos"</em>.</p>
            </div>
          </div>
        </div>

        <div class="box-success">
          <div class="box-success-title">El Truco del Modo Interactivo</div>
          <p>Pedirle a la IA que te haga preguntas antes de redactar activa su capacidad de análisis crítico y revela ángulos que habrías pasado por alto en tu instrucción inicial.</p>
        </div>

        <p>Al aplicar este protocolo operativo, transformarás un chat disperso en una mesa de trabajo profesional orientada a la entrega de resultados tangibles y comercialmente viables.</p>
      `
    },
    {
      badge: "PÁGINA 07",
      category: "INGENIERÍA DE PROMPTS",
      title: "Plantillas Maestras: Prompts de Ideación y Estructuración",
      subtitle: "Fórmulas exactas listas para copiar, adaptar y ejecutar en tus herramientas de IA.",
      content: `
        <p>Utiliza estas dos plantillas probadas para desbloquear ideas y estructurar materiales didácticos de alta jerarquía conceptual:</p>

        <div class="prompt-card">
          <div class="prompt-tag">PLANTILLA 01: EXPLORADOR DE ÁNGULOS CREATIVOS</div>
Actúa como un director editorial de publicaciones digitales de negocios y tecnología.
Quiero desarrollar un recurso educativo sobre: [TEMA ESPECÍFICO, ej: Finanzas personales para freelancers].
Público objetivo: [PERFIL, ej: Diseñadores independientes sin conocimientos contables].
Objetivo del material: [RESULTADO, ej: Aprender a calcular su tarifa horaria y separar gastos].

Por favor, genera:
1. 5 ángulos o ganchos conceptuales diferenciados (desde el más conservador hasta el más disruptivo).
2. Para cada ángulo, una promesa formativa irresistible y un posible título de alto impacto.
3. 3 preguntas provocadoras que desafíen los mitos más comunes de este público.
        </div>

        <div class="prompt-card">
          <div class="prompt-tag">PLANTILLA 02: INGENIERO DE ESQUEMAS DIDÁCTICOS</div>
Actúa como diseñador instruccional experto en microaprendizaje para profesionales.
A partir del ángulo seleccionado: "[INSERTAR ÁNGULO ELEGIDO]".
Desarrolla una estructura curricular de 4 a 6 módulos lógicos.

Requisitos estrictos para cada módulo:
- Título conciso y orientado a la acción (utiliza verbos dinámicos).
- 3 temas esenciales desglosados en viñetas.
- 1 entregable o ejercicio práctico que el alumno deba completar para consolidar el conocimiento.
- Tono: Profesional, directo, sin relleno académico innecesario.
        </div>

        <div class="box-info">
          <div class="box-info-title">Consejo de Optimización</div>
          <p>Sustituye siempre los corchetes con datos minuciosos de tu sector. Cuanto más detallado sea el perfil de tu alumno ideal, más certera y resonante será la propuesta resultante.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 08",
      category: "CASO DE ESTUDIO",
      title: "Análisis Práctico: Ideación Tradicional vs. Asistida por IA",
      subtitle: "Comparativa cuantitativa y cualitativa de un caso real en la producción de una masterclass.",
      content: `
        <p>Analicemos un caso de estudio real documentado en <strong>AI Business System</strong>: la creación de una masterclass práctica de 45 minutos sobre productividad digital para profesionales remotos.</p>

        <table>
          <thead>
            <tr>
              <th style="width: 20%;">Dimensión</th>
              <th style="width: 40%;">Método Tradicional (Sin IA)</th>
              <th style="width: 40%;">Método Híbrido (AI Business System)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Tiempo de Ideación</strong></td>
              <td>6 a 8 horas distribuidas en varios días de bloqueo frente al papel.</td>
              <td>35 minutos utilizando prompts de divergencia y contraste temático.</td>
            </tr>
            <tr>
              <td><strong>Diversidad de Enfoques</strong></td>
              <td>Limitada a los sesgos y hábitos mentales recurrentes del autor.</td>
              <td>12 ángulos contrastados, incluyendo analogías de ingeniería y psicología.</td>
            </tr>
            <tr>
              <td><strong>Estructuración Temática</strong></td>
              <td>Múltiples reescrituras del índice con dudas sobre la coherencia pedagógica.</td>
              <td>Esquema validado en 3 iteraciones mediante retroalimentación simulada.</td>
            </tr>
            <tr>
              <td><strong>Cansancio Cognitivo</strong></td>
              <td>Elevado; el creador llega agotado a la fase de grabación y diseño.</td>
              <td>Mínimo; la energía se reserva íntegramente para la oratoria y la docencia.</td>
            </tr>
          </tbody>
        </table>

        <div class="box-info">
          <div class="box-info-title">Lección Extraída del Caso</div>
          <p>El creador que utiliza IA no produce contenido con menor alma; por el contrario, al liberarse de la carga mecánica de formateo e ideación inicial, puede enfocarse en aportar anécdotas vividas y casos propios de incalculable valor testimonial.</p>
        </div>

        <div class="checklist-box">
          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>Métrica de Ahorro:</strong> 75% de reducción en el tiempo de preproducción.
            </div>
          </div>
          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>Métrica de Calidad:</strong> Mayor retención de audiencia al contar con una estructura lógica sin baches explicativos.
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 09",
      category: "ECOSISTEMA TÉCNICO",
      title: "Comparativa de Modelos: Eligiendo tu Herramienta Ideal",
      subtitle: "Evaluación objetiva de las plataformas dominantes en el mercado actual para creadores.",
      content: `
        <p>No todos los modelos de inteligencia artificial rinden de igual manera ante distintas tareas creativas. Conocer las fortalezas de cada ecosistema te permitirá elegir la herramienta correcta para cada fase del proyecto:</p>

        <table>
          <thead>
            <tr>
              <th style="width: 22%;">Herramienta</th>
              <th style="width: 25%;">Puntos Fuertes</th>
              <th style="width: 25%;">Limitaciones</th>
              <th style="width: 28%;">Uso Recomendado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>ChatGPT (OpenAI GPT-4o)</strong></td>
              <td>Versatilidad multimodal, capacidades avanzadas de razonamiento, navegación web fluida y creación de GPTs personalizados.</td>
              <td>Tono a veces condescendiente o excesivamente formulaico si no se configuran instrucciones de sistema estrictas.</td>
              <td>Ideación general, estructuración curricular, redacción de guiones y automatización de procesos mediante API.</td>
            </tr>
            <tr>
              <td><strong>Claude (Anthropic 3.5 Sonnet)</strong></td>
              <td>Estilo de redacción excepcionalmente natural, matices literarios superiores, enorme ventana de contexto y comprensión lógica impecable.</td>
              <td>Herramientas de búsqueda en tiempo real más acotadas que OpenAI en algunas interfaces estándar.</td>
              <td>Redacción de textos largos, corrección de estilo, síntesis de documentos extensos y diseño instruccional riguroso.</td>
            </tr>
            <tr>
              <td><strong>Google Gemini (Gemini 1.5 Pro)</strong></td>
              <td>Integración nativa con Google Workspace, ventana de contexto masiva (hasta 2M tokens) y procesamiento veloz de audio/video.</td>
              <td>Estilo de respuesta que en ocasiones requiere más iteraciones para lograr calidez emocional o tono coloquial.</td>
              <td>Análisis de bibliografía masiva, procesamiento de transcripciones de video y organización de hojas de cálculo.</td>
            </tr>
          </tbody>
        </table>

        <div class="box-success">
          <div class="box-success-title">Estrategia Recomendada</div>
          <p>Para la fase de conceptualización y estructuración, Claude y ChatGPT son las herramientas más sólidas del mercado. Para el análisis de transcripciones de tus clases grabadas, la ventana de contexto de Gemini no tiene rival.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 10",
      category: "PREVENCIÓN DE RIESGOS",
      title: "Antipatrones y Errores Críticos a Evitar",
      subtitle: "Las 4 trampas comunes en las que caen el 90% de los creadores novatos con IA.",
      content: `
        <p>Integrar IA en tu trabajo creativo conlleva riesgos si no se ejerce una disciplina rigurosa. A continuación identificamos los errores más dañinos y cómo neutralizarlos de raíz:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>El Síndrome de la "Primera Respuesta"</h4>
              <p><strong>El Error:</strong> Aceptar el primer borrador que entrega la máquina y publicarlo sin filtro.<br>
              <strong>La Solución:</strong> La primera respuesta es solo materia prima. Pídele que critique su propio texto, que cambie el ritmo de las frases o que adopte una postura contraria para pulir argumentos.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>La Despersonalización del Tono</h4>
              <p><strong>El Error:</strong> Sonar como un folleto corporativo anodino repleto de palabras como <em>"en el vertiginoso mundo actual"</em> o <em>"sumergirse en el fascinante universo"</em>.<br>
              <strong>La Solución:</strong> Prohíbe expresamente en tu prompt esas palabras vacías y añade ejemplos breves de párrafos escritos por ti para que imite tu sintaxis real.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Sobrecarga de Instrucciones Contradictorias</h4>
              <p><strong>El Error:</strong> Enviar prompts de 2,000 palabras repletos de condiciones mutuamente excluyentes.<br>
              <strong>La Solución:</strong> Divide el proceso en conversaciones secuenciales simples. Primero la idea, luego el esquema, luego la redacción.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <h4>Ausencia de Verificación de Hechos</h4>
              <p><strong>El Error:</strong> Confiar ciegamente en datos estadísticos o citas textuales emitidas por el modelo.<br>
              <strong>La Solución:</strong> Toda cifra o referencia externa debe ser contrastada manualmente en fuentes primarias antes de ser incorporada a un material oficial.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 11",
      category: "CONTROL DE CALIDAD",
      title: "Checklist de Auditoría de Salida Creativa",
      subtitle: "Filtros obligatorios antes de aprobar cualquier borrador generado con asistencia de IA.",
      content: `
        <p>Antes de integrar cualquier texto o estructura generada por IA en tus productos digitales oficiales, aplica este checklist de validación editorial:</p>

        <div class="checklist-box">
          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>¿El mensaje resuelve un problema real y concreto de mi audiencia?</strong>
              <p>Verifica que el contenido no sea mera palabrería teórica y aporte una solución aplicable.</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>¿Se ha eliminado todo rastro de clichés y frases de relleno típicas de IA?</strong>
              <p>Filtra expresiones como "es crucial recordar", "en conclusión", "un tapiz de oportunidades".</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>¿La voz y el tono coinciden con la identidad de mi marca o proyecto?</strong>
              <p>Asegúrate de que la lectura suene natural, empática y alineada a tu público objetivo.</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>¿Contiene al menos una anécdota, ejemplo propio o matiz humano irremplazable?</strong>
              <p>Ningún contenido debe publicarse sin la huella testimonial directa del autor.</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>¿Los conceptos técnicos están explicados con claridad y sin ambigüedades?</strong>
              <p>Comprueba que un alumno principiante pueda comprender cada término sin frustración.</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>¿El formato visual invita a una lectura ágil y focalizada?</strong>
              <p>Uso adecuado de párrafos breves, subtítulos claros, viñetas y elementos destacados.</p>
            </div>
          </div>
        </div>

        <div class="box-info">
          <div class="box-info-title">Compromiso de Calidad AI Business System</div>
          <p>Si un borrador no supera los 6 puntos anteriores, regresa a la herramienta con una instrucción correctiva específica o redacta manualmente la sección correspondiente.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 12",
      category: "TALLER PRÁCTICO",
      title: "Ejercicios de Aplicación Inmediata",
      subtitle: "Tres actividades progresivas para consolidar lo aprendido en tu propia computadora.",
      content: `
        <p>Abre tu modelo de IA de preferencia (ChatGPT, Claude o Gemini) y ejecuta las siguientes tres prácticas graduadas:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>Nivel Inicial: Auditoría de Prompt Básico vs. Avanzado</h4>
              <p>Escribe primero: <em>"Dame ideas para un curso de fotografía"</em>. Evalúa el resultado. Luego utiliza la <strong>Plantilla 01</strong> de la Página 07 con tu nicho real. Compara la diferencia de profundidad y estructura entre ambas respuestas.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>Nivel Intermedio: La Técnica del Abogado del Diablo</h4>
              <p>Presenta a la IA la idea de tu próximo producto digital. Pídele expresamente: <em>"Actúa como un cliente escéptico y exigente. Encuentra las 4 debilidades principales de mi propuesta y dime exactamente por qué dudarías en comprarla"</em>. Registra sus objeciones.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Reto Avanzado Pro: Construcción de un Índice Modular</h4>
              <p>Aplica el flujo de 5 fases para diseñar el índice de un mini-curso o e-book de 3 módulos. Itera con el modelo hasta que cada tema incluya un entregable práctico. Guarda el esquema final en tus notas de estudio.</p>
            </div>
          </div>
        </div>

        <div class="box-success">
          <div class="box-success-title">Evidencia de Aprendizaje</div>
          <p>Al completar el Reto Avanzado Pro, habrás transformado una inquietud abstracta en un esquema formativo comercializable listo para ser desarrollado en las próximas lecciones.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 13",
      category: "RESUMEN EJECUTIVO",
      title: "Síntesis Estratégica: Las 5 Reglas de Oro",
      subtitle: "Principios innegociables para liderar con solvencia en la era de la creación inteligente.",
      content: `
        <p>Conserva siempre a la vista estos cinco mandamientos metodológicos al encender tus herramientas de inteligencia artificial:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">I</div>
            <div class="step-text">
              <h4>El Contexto es el Rey Absoluto</h4>
              <p>Un prompt sin contexto produce respuestas estériles. Dedica el 80% de tu tiempo a delimitar la situación, el rol y la meta antes de exigir redacción.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">II</div>
            <div class="step-text">
              <h4>La Co-Creación es una Conversación Multiturno</h4>
              <p>Los mejores resultados surgen de la iteración progresiva, no de peticiones aisladas. Conversa, rebate, refina y ajusta paso a paso.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">III</div>
            <div class="step-text">
              <h4>Modulariza o Fracasarás</h4>
              <p>Divide los problemas gigantescos en tareas microscópicas. Es preferible generar 10 secciones brillantes de forma independiente que un texto largo y mediocre.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">IV</div>
            <div class="step-text">
              <h4>Tu Criterio Editorial es el Producto Real</h4>
              <p>Cualquiera puede presionar "generar". Tu reputación profesional descansa en tu capacidad para discernir lo excelente de lo mediocre.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">V</div>
            <div class="step-text">
              <h4>La Velocidad es una Ventaja Solo si hay Dirección</h4>
              <p>Generar contenido basura a velocidad supersónica solo satura el mercado. Utiliza la velocidad de la IA para investigar más a fondo y crear piezas inolvidables.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 14",
      category: "CUADERNO DE TRABAJO",
      title: "Reflexión Personal y Plan de Acción Individual",
      subtitle: "Espacio guiado para plasmar tus decisiones estratégicas y definir tu próximo paso.",
      content: `
        <p>Responde a estas preguntas estratégicas en tu libreta o software de notas para alinear este aprendizaje a tu realidad comercial:</p>

        <div class="notes-area">
          <h4 style="color: #0f172a; margin-bottom: 6px;">1. ¿Cuál es el mayor cuello de botella en mi proceso de creación actual?</h4>
          <p style="font-size: 12px; color: #64748b; margin-bottom: 12px;">(¿Bloqueo de la página en blanco? ¿Dificultad para estructurar ideas? ¿Lentitud en la redacción de borradores?)</p>
          <div class="line-rule"></div>
          <div class="line-rule"></div>
        </div>

        <div class="notes-area">
          <h4 style="color: #0f172a; margin-bottom: 6px;">2. ¿Qué proyecto digital específico voy a desbloquear utilizando este método esta semana?</h4>
          <div class="line-rule"></div>
          <div class="line-rule"></div>
        </div>

        <div class="notes-area">
          <h4 style="color: #0f172a; margin-bottom: 6px;">3. Compromiso de Calidad Editorial:</h4>
          <p style="font-size: 12px; color: #64748b; margin-bottom: 12px;">Define qué regla personal aplicarás para garantizar que tu voz nunca se pierda en los contenidos asistidos por IA.</p>
          <div class="line-rule"></div>
        </div>
      `
    },
    {
      badge: "PÁGINA 15",
      category: "PRÓXIMOS PASOS",
      title: "Cierre Pedagógico y Conexión con la Clase 02",
      subtitle: "Cómo continuar tu ruta de aprendizaje dentro de la plataforma AI Business System.",
      content: `
        <p>¡Felicitaciones por completar el estudio del material didáctico de la <strong>Clase 01</strong>! Has asentado los cimientos indispensables para colaborar con modelos de inteligencia artificial con rigor, ética y alta productividad.</p>

        <div class="box-info">
          <div class="box-info-title">Avance de la Clase 02: Transformando Ideas en Proyectos Digitales</div>
          <p>En la siguiente sesión daremos el salto de la teoría del proceso creativo a la ingeniería práctica de proyectos: aprenderemos a tomar una idea abstracta y transformarla en una arquitectura de producto completa (e-books, cursos, guías o recursos descargables) con su desglose modular definitivo.</p>
        </div>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">→</div>
            <div class="step-text">
              <h4>Paso Inmediato Recomendado</h4>
              <p>Entra en el reproductor de la plataforma, repasa los puntos clave del video y marca la Clase 01 como completada en tu panel de control.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">→</div>
            <div class="step-text">
              <h4>Archivo y Organización</h4>
              <p>Guarda este PDF en una carpeta dedicada a <strong>AI Business System</strong> para recurrir a sus plantillas y checklists en cualquier momento.</p>
            </div>
          </div>
        </div>

        <div class="box-success" style="margin-top: 24px;">
          <div class="box-success-title">Soporte y Comunidad Exclusiva</div>
          <p>Si te surge alguna duda durante la aplicación de los ejercicios prácticos, utiliza los canales de soporte del programa para recibir orientación de nuestro equipo técnico.</p>
        </div>
      `
    }
  ]
};

const m1_c2 = {
  moduleNumber: "Módulo 1",
  moduleTitle: "Fundamentos de la Creación con IA",
  lessonNumber: "02",
  lessonTitle: "Transformando ideas en proyectos digitales",
  totalPages: 15,
  pages: [
    {
      badge: "PÁGINA 02",
      category: "INTRODUCCIÓN PEDAGÓGICA",
      title: "De la Chispa Creativa al Producto Digital Tangible",
      subtitle: "Cómo superar la parálisis por análisis y transformar ideas difusas en arquitecturas estructuradas.",
      content: `
        <p>Tener una buena idea es apenas el 5% del éxito de un creador; el 95% restante reside en la capacidad de estructurarla, descomponerla y transformarla en un artefacto digital terminado que resuelva un dolor real de una comunidad.</p>
        
        <p>Muchos creadores acumulan libretas repletas de conceptos brillantes que jamás ven la luz del sol debido a la abrumadora complejidad de responder simultáneamente: <em>¿Qué formato elijo? ¿Qué temas incluyo? ¿En qué orden los presento? ¿Cómo evito que el proyecto sea inmanejable?</em></p>

        <div class="box-info">
          <div class="box-info-title">El Papel de la IA en la Arquitectura de Proyectos</div>
          <p>La inteligencia artificial actúa como un catalizador de viabilidad: te permite simular diferentes arquitecturas de producto en minutos, validar la coherencia de los módulos y generar un mapa de ruta ejecutable paso a paso.</p>
        </div>

        <p>En esta guía oficial de la <strong>Clase 02</strong>, aprenderás a aplicar el marco de <em>Descomposición Estructurada</em> asistida por IA, transformando cualquier noción conceptual en un plan maestro de producción listo para ser ejecutado sin procrastinación.</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>Claridad Conceptual Inmediata</h4>
              <p>Define la promesa nuclear y el alcance del producto antes de invertir horas de producción.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>Desglose por Módulos y Entregables</h4>
              <p>Convierte un proyecto intimidante en una secuencia lineal de micro-tareas manejables.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Mitigación del Riesgo de Abandono</h4>
              <p>Al contar con una estructura cerrada y validada, la ejecución fluye con total certidumbre diaria.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 03",
      category: "OBJETIVOS Y COMPETENCIAS",
      title: "Competencias de Arquitectura y Planificación Digital",
      subtitle: "Habilidades técnicas y analíticas que adquirirás en esta sesión de trabajo.",
      content: `
        <p>El dominio de la estructuración de proyectos digitales te otorga una ventaja competitiva decisiva. A continuación se presentan las competencias pedagógicas a consolidar:</p>

        <table>
          <thead>
            <tr>
              <th style="width: 25%;">Habilidad</th>
              <th style="width: 45%;">Definición Operativa</th>
              <th style="width: 30%;">Entregable Asociado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Taxonomía de Producto</strong></td>
              <td>Identificar el formato digital óptimo (e-book, guía, curso, kit de plantillas) según el objetivo formativo.</td>
              <td>Ficha de Selección de Formato</td>
            </tr>
            <tr>
              <td><strong>Perfilado de Audiencia</strong></td>
              <td>Modelar el perfil psicográfico, estado actual y estado deseado del usuario final con soporte de IA.</td>
              <td>Ficha del Alumno Ideal</td>
            </tr>
            <tr>
              <td><strong>Estructuración Modular</strong></td>
              <td>Dividir un cuerpo de conocimiento complejo en una secuencia pedagógica progresiva sin lagunas.</td>
              <td>Esquema Curricular WBS</td>
            </tr>
            <tr>
              <td><strong>Definición de MVP</strong></td>
              <td>Delimitar la versión mínima viable para publicar con rapidez y recibir retroalimentación real.</td>
              <td>Alcance del Producto V1</td>
            </tr>
          </tbody>
        </table>

        <div class="box-success">
          <div class="box-success-title">Meta de la Clase</div>
          <p>Al finalizar esta unidad, contarás con la arquitectura completa y validada de tu próximo infoproducto o recurso digital, organizada en un documento formal de especificaciones técnicas y didácticas.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 04",
      category: "MARCO CONCEPTUAL",
      title: "Fundamentos: La Curva de Progresión Pedagógica",
      subtitle: "Cómo estructurar el conocimiento para que el alumno experimente victorias rápidas.",
      content: `
        <p>Un producto digital exitoso no es una acumulación enciclopédica de datos; es un vehículo de transformación diseñado para guiar a una persona desde el <em>Punto A (Dolor / Incertidumbre)</em> hasta el <em>Punto B (Dominio / Solución)</em>.</p>

        <div class="grid-2">
          <div class="card-simple">
            <h4>1. La Regla del 'Quick Win'</h4>
            <p>El primer módulo o capítulo debe ofrecer una victoria rápida en menos de 20 minutos. Esto genera dopamina en el usuario y combate drásticamente la tasa de deserción.</p>
          </div>
          <div class="card-simple">
            <h4>2. Andamiaje Cognitivo</h4>
            <p>Cada concepto nuevo debe apoyarse firmemente en el anterior. Si introduces una técnica avanzada sin haber sentado los fundamentos, el usuario se frustra y abandona.</p>
          </div>
          <div class="card-simple">
            <h4>3. Densidad de Información Equilibrada</h4>
            <p>Evita módulos sobrecargados de 3 horas. Es pedagógicamente superior estructurar lecciones cortas y digeribles centradas en un único concepto accionable.</p>
          </div>
          <div class="card-simple">
            <h4>4. Anclaje Práctico Continuo</h4>
            <p>Todo bloque teórico debe estar acompañado de un ejercicio, plantilla o checklist que obligue al estudiante a poner las manos en la obra de inmediato.</p>
          </div>
        </div>

        <div class="box-info">
          <div class="box-info-title">El Triángulo de Oro de un Producto Digital</div>
          <p><strong>Promesa Específica + Ruta Paso a Paso + Entregable Concreto.</strong> Si tu proyecto cumple rigurosamente con estos tres pilares, el valor percibido por el alumno se multiplica exponencialmente.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 05",
      category: "METODOLOGÍA DE TRABAJO",
      title: "El Método WBS-AI: Descomposición de Proyectos",
      subtitle: "Estructura de Desglose de Trabajo (Work Breakdown Structure) asistida por inteligencia artificial.",
      content: `
        <p>Adaptado de la gestión de proyectos de alta ingeniería, el marco WBS-AI permite fragmentar un infoproducto en niveles jerárquicos independientes:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">N1</div>
            <div class="step-text">
              <h4>Nivel 1: El Producto y su Promesa Central</h4>
              <p>Ejemplo: <em>"AI Business System: Sistema Integral de Creación de Infoproductos con IA"</em>.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">N2</div>
            <div class="step-text">
              <h4>Nivel 2: Los Módulos o Fases Estratégicas</h4>
              <p>Los grandes hitos cronológicos (Fundamentos, Contenidos, Visuales, Estructura, Lanzamiento).</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">N3</div>
            <div class="step-text">
              <h4>Nivel 3: Las Lecciones o Capítulos Operativos</h4>
              <p>Unidades didácticas individuales enfocadas en una habilidad específica y delimitada.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">N4</div>
            <div class="step-text">
              <h4>Nivel 4: Los Micro-Entregables y Recursos de Soporte</h4>
              <p>PDFs de apoyo, plantillas descargables, prompts listos para usar y checklists de auditoría.</p>
            </div>
          </div>
        </div>

        <div class="box-success">
          <div class="box-success-title">Por qué este enfoque elimina la procrastinación</div>
          <p>Cuando te sientas a trabajar, no te enfrentas al abrumador reto de <em>"hacer un curso"</em>; simplemente te concentras en completar un bloque N4 de 30 minutos. La suma metódica de pequeños bloques ensambla el proyecto completo.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 06",
      category: "GUÍA OPERATIVA",
      title: "Protocolo de Extracción y Validación de Ideas con IA",
      subtitle: "Las 4 conversaciones secuenciales para diseñar la arquitectura de tu contenido.",
      content: `
        <p>Ejecuta este flujo de 4 rondas con tu modelo de IA para estructurar cualquier idea digital desde cero:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>Ronda 1: Vaciado Mental y Delimitación del Problema</h4>
              <p>Escribe todo lo que sabes sobre el tema en un texto desordenado y pide a la IA: <em>"Organiza este vaciado mental en 3 propuestas de valor claras para un producto digital"</em>.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>Ronda 2: Perfilado del Alumno y Análisis de Fricciones</h4>
              <p>Instruye al modelo: <em>"Enumera las 5 mayores dudas, miedos y objeciones que tendría un principiante antes de consumir este contenido"</em>.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Ronda 3: Diseño de la Matriz Modular</h4>
              <p>Solicita: <em>"Crea una estructura de 5 módulos donde cada uno neutralice exactamente una de las objeciones identificadas en la ronda anterior"</em>.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <h4>Ronda 4: Auditoría de Fluidez y Poda de Relleno</h4>
              <p>Finaliza preguntando: <em>"¿Qué capítulos o secciones de esta estructura podrían ser considerados relleno innecesario y cómo podemos compactarlos?"</em>.</p>
            </div>
          </div>
        </div>

        <div class="box-warning">
          <div class="box-warning-title">Criterio de Excelencia</div>
          <p>La perfección en un producto formativo no se alcanza cuando no hay nada más que añadir, sino cuando no queda nada que se pueda suprimir sin mermar la transformación del alumno.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 07",
      category: "INGENIERÍA DE PROMPTS",
      title: "Plantillas Maestras: Arquitectura y Desglose de Productos",
      subtitle: "Prompts técnicos formulados con restricciones estrictas de diseño instruccional.",
      content: `
        <div class="prompt-card">
          <div class="prompt-tag">PROMPT 01: ARQUITECTO CURRICULAR Y MATRIZ WBS</div>
Actúa como un director académico especializado en infoproductos y microcredenciales digitales.
Tengo la idea de crear un recurso digital sobre: [INSERTAR TEMA Y EXPERIENCIA].
Audiencia objetivo: [DETALLAR NIVEL PREVIO Y OBJETIVO DEL COMPRADOR].
Formato previsto: [E-book interactivo / Curso en video / Guía operativa].

Diseña la estructura curricular completa siguiendo estos requerimientos:
1. Una introducción orientada a generar un "quick win" (victoria rápida en menos de 24 horas).
2. De 4 a 6 módulos organizados en progresión lógica estricta.
3. Para cada módulo: 2 lecciones específicas con título atractivo y 3 subtemas indispensables.
4. Para cada lección: 1 ejercicio práctico y 1 recurso descargable sugerido.
5. Un apéndice o módulo de cierre con plan de mantenimiento y siguientes pasos.
        </div>

        <div class="prompt-card">
          <div class="prompt-tag">PROMPT 02: AUDITOR DE COHERENCIA PEDAGÓGICA</div>
Actúa como un consultor pedagógico externo y revisor crítico de contenidos.
Analiza la siguiente estructura que he desarrollado para mi producto digital:
[PEGAR LA ESTRUCTURA OBTENIDA EN EL PROMPT 01]

Respóndeme con honestidad implacable:
1. ¿Dónde se observan saltos lógicos abruptos entre un módulo y el siguiente?
2. ¿Qué temas resultan redundantes o podrían fusionarse sin pérdida de valor?
3. ¿Qué concepto fundamental falta para que un alumno novato no se quede trabado?
        </div>
      `
    },
    {
      badge: "PÁGINA 08",
      category: "CASO DE ESTUDIO",
      title: "Caso Práctico: De una Nota en el Móvil a una Guía Profesional",
      subtitle: "Desglose real del desarrollo del curso 'Nutrición Digital para Emprendedores'.",
      content: `
        <p>Examinemos la transformación real de una idea embrionaria desarrollada por una alumna de <strong>AI Business System</strong>:</p>

        <div class="grid-2">
          <div class="card-simple">
            <h4>Estado Inicial (Día 1)</h4>
            <p><strong>Nota en el celular:</strong> <em>"Quiero hacer algo sobre productividad y comida saludable para gente que trabaja en la compu todo el día y pide delivery"</em>.<br>
            <strong>Problema:</strong> Muy amplio, sin audiencia definida, sin precio estimado y sin formato claro.</p>
          </div>
          <div class="card-simple">
            <h4>Estado Final (Día 3 con WBS-AI)</h4>
            <p><strong>Producto:</strong> Guía Digital + Recetario de 15 Minutos en Notion.<br>
            <strong>Público:</strong> Desarrolladores y freelancers remotos.<br>
            <strong>Estructura:</strong> 4 módulos con listas de compras automatizadas y calendario de batch-cooking dominical.</p>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th style="width: 25%;">Fase del Proyecto</th>
              <th style="width: 45%;">Acción Realizada con IA</th>
              <th style="width: 30%;">Impacto Tangible</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Delimitación</strong></td>
              <td>Simulación de 3 buyer personas (Dev freelance, Diseñador, Marketer).</td>
              <td>Enfoque en "energía mental sin somnolencia post-almuerzo".</td>
            </tr>
            <tr>
              <td><strong>Curaduría</strong></td>
              <td>Generación de 20 recetas rápidas optimizadas en costo y tiempo.</td>
              <td>Validación nutricional y formato de ficha de 1 página.</td>
            </tr>
            <tr>
              <td><strong>Producción</strong></td>
              <td>Redacción modular de cada ficha con prompts estandarizados.</td>
              <td>Guía completa de 45 páginas ensamblada en 72 horas.</td>
            </tr>
          </tbody>
        </table>

        <div class="box-success">
          <div class="box-success-title">Conclusión del Caso</div>
          <p>La creadora no tardó 6 meses en lanzar su producto. Gracias a la estructuración WBS-AI, publicó su guía en la primera semana y generó sus primeras 34 ventas orgánicas en redes sociales.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 09",
      category: "HERRAMIENTAS DE GESTIÓN",
      title: "Ecosistema de Software para Gestionar tu Proyecto",
      subtitle: "Herramientas modernas para alojar, estructurar y documentar tu material digital.",
      content: `
        <p>Mantener tus archivos, esquemas y prompts organizados es vital para no perder el control del proyecto. Estas son las herramientas recomendadas para cada etapa:</p>

        <table>
          <thead>
            <tr>
              <th style="width: 22%;">Software</th>
              <th style="width: 28%;">Función Principal</th>
              <th style="width: 25%;">Integración con IA</th>
              <th style="width: 25%;">Precio / Acceso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Notion</strong></td>
              <td>Base de datos central del proyecto, repositorio de prompts, calendario de producción y plantillas para alumnos.</td>
              <td>Notion AI integrado para resumir, traducir y autocompletar tablas de contenidos.</td>
              <td>Freemium (Plan gratuito muy generoso).</td>
            </tr>
            <tr>
              <td><strong>Obsidian</strong></td>
              <td>Toma de notas enlazadas (PKM), mapas conceptuales de grafos y almacenamiento 100% local en formato Markdown.</td>
              <td>Plugins comunitarios para conectar con APIs de OpenAI, Anthropic y modelos locales.</td>
              <td>Gratuito y Open Source.</td>
            </tr>
            <tr>
              <td><strong>Miro / Whimsical</strong></td>
              <td>Mapeo visual de la experiencia del alumno, diagramas de flujo y wireframes de materiales.</td>
              <td>Generación automática de mapas mentales a partir de prompts de texto.</td>
              <td>Freemium (Tableros gratuitos limitados).</td>
            </tr>
            <tr>
              <td><strong>Google Docs / Drive</strong></td>
              <td>Almacenamiento colaborativo de borradores finales, revisión ortográfica y exportación en múltiples formatos.</td>
              <td>Gemini Workspace integrado para reformulación de párrafos y síntesis.</td>
              <td>Gratuito con cuenta de Google.</td>
            </tr>
          </tbody>
        </table>

        <div class="box-info">
          <div class="box-info-title">Regla de Simplicidad Tecnológica</div>
          <p>No pierdas semanas configurando sistemas de productividad complejos. Un documento de Google Docs bien estructurado o una página simple de Notion es todo lo que necesitas para construir un producto de éxito.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 10",
      category: "PREVENCIÓN DE ERRORES",
      title: "Antipatrones en la Fase de Estructuración",
      subtitle: "Los fallos de arquitectura que arruinan la viabilidad de un producto antes del lanzamiento.",
      content: `
        <p>Evita estos cuatro errores recurrentes que comprometen la calidad de tu proyecto digital:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>El Producto "Monstruo" (Feature Creep)</h4>
              <p>Querer incluir absolutamente todo lo que sabes en la versión 1.0. Esto retrasa el lanzamiento indefinidamente. Divide el contenido: lanza un producto nuclear enfocado y reserva el material avanzado para un nivel superior o bonus.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>Falta de Especificidad en la Audiencia</h4>
              <p>Diseñar un material "para todo el mundo". Un producto para principiantes absolutos tiene requerimientos radicalmente distintos a uno para profesionales avanzados. Sé dolorosamente específico al elegir tu avatar.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Desconexión entre Promesa y Contenido</h4>
              <p>Prometer en el título que el alumno "dominará las ventas digitales" y luego ofrecer únicamente tres conceptos teóricos de marketing. La estructura debe honrar de forma incontestable la promesa formulada.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <h4>Omitir la Fase de Validación de Estructura</h4>
              <p>Empezar a grabar videos o maquetar PDFs sin haber mostrado previamente el índice a personas que representen a tu público objetivo para recoger impresiones tempranas.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 11",
      category: "CONTROL DE CALIDAD",
      title: "Checklist de Validación Estructural del Proyecto",
      subtitle: "Revisión final de arquitectura antes de comenzar la redacción del contenido.",
      content: `
        <p>Completa esta verificación técnica de 6 puntos antes de redactar la primera página o grabar el primer minuto de tu producto:</p>

        <div class="checklist-box">
          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>¿El título resume claramente el beneficio final y tangible del alumno?</strong>
              <p>Debe comunicar qué logrará la persona, no solo de qué trata la materia.</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>¿El Módulo 1 contiene un ejercicio práctico que se resuelve en menos de 24 horas?</strong>
              <p>Vital para asegurar una temprana sensación de logro y retención en la plataforma.</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>¿Cada lección cuenta con un único objetivo pedagógico principal?</strong>
              <p>Si una lección intenta enseñar tres habilidades distintas, sepárala en dos entregas.</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>¿El número total de módulos se sitúa entre 4 y 7 unidades lógicas?</strong>
              <p>Menos de 4 suele percibirse incompleto; más de 8 genera sensación de agobio cognitivo.</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>¿Se ha asignado un recurso complementario de descarga a cada lección clave?</strong>
              <p>Verifica que existan guías en PDF, hojas de trabajo o checklists descargables.</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>¿Se ha definido el alcance del MVP (Mínimo Producto Viable) de la versión 1?</strong>
              <p>Qué elementos son obligatorios para el lanzamiento y cuáles quedan para la actualización 2.0.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 12",
      category: "TALLER PRÁCTICO",
      title: "Laboratorio de Aplicación: Diseñando tu Arquitectura",
      subtitle: "Tres ejercicios guiados para consolidar la estructura de tu futuro producto digital.",
      content: `
        <p>Dedica 45 minutos a completar este laboratorio práctico frente a tu software de inteligencia artificial:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>Ejercicio 1: El Test del Ascensor (Elevator Pitch)</h4>
              <p>Redacta en un párrafo de máximo 4 líneas la propuesta de valor de tu producto completando la fórmula: <em>"Ayudo a [AUDIENCIA] a lograr [TRANSFORMACIÓN] mediante [MÉTODO/FORMATO] sin [MAYOR DOLOR O INCONVENIENTE]"</em>. Valida la claridad con la IA.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>Ejercicio 2: Generación del Árbol de Temas con WBS</h4>
              <p>Aplica el <strong>Prompt 01</strong> de la Página 07. Introduce tus datos y genera la primera versión de tu temario. Solicita 2 variantes: una intensiva de 3 módulos y una extendida de 6 módulos.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Ejercicio 3: Simulación de Feedback de Usuario</h4>
              <p>Pide a la IA: <em>"Asume el rol de un profesional ocupado con poco tiempo libre. Lee este temario y dime qué lección te parece que podrías saltarte sin perder nada importante"</em>. Utiliza su respuesta para fortalecer esa lección.</p>
            </div>
          </div>
        </div>

        <div class="box-success">
          <div class="box-success-title">Entregable Final del Taller</div>
          <p>Un documento de índice formal de no más de 2 páginas con títulos definitivos, objetivos de cada lección y lista de materiales descargables requeridos.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 13",
      category: "RESUMEN EJECUTIVO",
      title: "Las Leyes Inmutables de la Estructura Digital",
      subtitle: "Cinco principios que diferencian un infoproducto memorable de un documento olvidado.",
      content: `
        <p>Atesora estos principios durante toda la fase de diseño de tus contenidos en <strong>AI Business System</strong>:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>La Claridad Vence a la Extensión</h4>
              <p>Un recurso conciso de 15 páginas que resuelve un problema de inmediato tiene mucho más valor para el alumno que un e-book confuso de 200 páginas lleno de relleno.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>Estructura antes que Redacción</h4>
              <p>Nunca comiences a redactar o grabar sin un mapa de ruta aprobado. Un índice robusto ahorra cientos de horas de edición posterior.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Un Dolor = Una Solución</h4>
              <p>Cada módulo debe neutralizar una duda o problema específico de la audiencia. Si un módulo no tiene un propósito claro, debe eliminarse.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <h4>El Formato se Adapta al Objetivo</h4>
              <p>No crees un video si un checklist en PDF es más eficiente para el alumno. Elige siempre el medio que maximice la aplicación del aprendizaje.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">5</div>
            <div class="step-text">
              <h4>La Iteración es el Secreto</h4>
              <p>Tu primer esquema no será el definitivo. Trabaja en versiones (v0.1, v0.2, v1.0) y celebra cada mejora progresiva que incorpores.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 14",
      category: "CUADERNO DE TRABAJO",
      title: "Ficha Técnica de mi Primer Proyecto Digital",
      subtitle: "Planilla de especificaciones para rellenar a mano y afianzar tu planificación.",
      content: `
        <p>Completa esta ficha de proyecto antes de avanzar al Módulo 2:</p>

        <div class="notes-area">
          <h4 style="color: #0f172a; margin-bottom: 4px;">Nombre Provisional del Proyecto:</h4>
          <div class="line-rule"></div>
        </div>

        <div class="notes-area">
          <h4 style="color: #0f172a; margin-bottom: 4px;">Perfil del Alumno Ideal (Quién es y qué frustración tiene hoy):</h4>
          <div class="line-rule"></div>
          <div class="line-rule"></div>
        </div>

        <div class="notes-area">
          <h4 style="color: #0f172a; margin-bottom: 4px;">La Gran Promesa (Qué sabrá o podrá hacer al terminar el curso):</h4>
          <div class="line-rule"></div>
        </div>

        <div class="notes-area">
          <h4 style="color: #0f172a; margin-bottom: 4px;">Formato Principal y Entregables Complementarios Seleccionados:</h4>
          <div class="line-rule"></div>
        </div>
      `
    },
    {
      badge: "PÁGINA 15",
      category: "PRÓXIMOS PASOS",
      title: "Cierre de Módulo y Entrada al Módulo 2",
      subtitle: "Transición hacia la generación de textos, redacción persuasiva e imágenes con IA.",
      content: `
        <p>Has concluido exitosamente el <strong>Módulo 1: Fundamentos de la Creación con IA</strong>. Cuentas ahora con una mentalidad estratégica sólida y un sistema metodológico probado para transformar ideas en proyectos digitales estructurados.</p>

        <div class="box-info">
          <div class="box-info-title">Próxima Etapa: Módulo 2 — Creando Textos y Contenido con IA</div>
          <p>En el siguiente módulo entraremos de lleno en la fase de producción escrita y redacción de alto impacto. Aprenderás a dominar la ingeniería de prompts para textos, técnicas de copywriting para creadores, y cómo adaptar una sola pieza de contenido a múltiples formatos (redes, newsletters, guiones y materiales educativos).</p>
        </div>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">✓</div>
            <div class="step-text">
              <h4>Módulo 1 Completado</h4>
              <p>Asegúrate de marcar las Clases 01 y 02 como finalizadas en la barra superior de la lección.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">→</div>
            <div class="step-text">
              <h4>Descarga y Archivo</h4>
              <p>Conserva los PDFs de las Clases 01 y 02 en tu carpeta de trabajo para tener a mano sus plantillas operativas.</p>
            </div>
          </div>
        </div>

        <div class="box-success" style="margin-top: 24px;">
          <div class="box-success-title">Comunidad AI Business System</div>
          <p>¡El viaje apenas comienza! Te esperamos en la Clase 01 del Módulo 2 para comenzar a redactar tus contenidos con la asistencia de la inteligencia artificial.</p>
        </div>
      `
    }
  ]
};

module.exports = { m1_c1, m1_c2 };

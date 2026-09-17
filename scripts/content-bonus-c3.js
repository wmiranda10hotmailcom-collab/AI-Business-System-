// scripts/content-bonus-c3.js
// Material didáctico complementario oficial para Módulo Bónus — Clase 03
// Totalmente estructurado en 15 páginas didácticas verificadas

const bonus_c3 = {
  moduleTitle: "Módulo Bónus — Estrategias Avanzadas y Casos Prácticos",
  lessonTitle: "Cómo crear mejores instrucciones para la IA",
  moduleNumber: "MÓDULO BÓNUS",
  lessonNumber: "CLASE 03",
  totalPages: 15,
  pages: [
    {
      badge: "PÁGINA 02",
      category: "INTRODUCCIÓN PEDAGÓGICA",
      title: "El Arte y la Ciencia de la Instrucción de Élite",
      subtitle: "Por qué el 90% de los usuarios obtiene resultados mediocres y cómo formular directrices de alta fidelidad.",
      content: `
        <p>La inteligencia artificial generativa no piensa como un ser humano, pero procesa el lenguaje con una sensibilidad estadística asombrosa. Cuando un creador escribe una instrucción vaga como <em>"escribe un post sobre marketing"</em>, el modelo recurre a los patrones más comunes y genéricos de internet, entregando un texto predecible, aburrido y repleto de lugares comunes.</p>
        <p>Los mejores profesionales de la nueva economía digital no son programadores de código tradicional; son <strong>arquitectos de contexto</strong>. Entienden con claridad matemática que la calidad del output es un reflejo directo y proporcional de la estructura, los límites y los ejemplos provistos en el input.</p>
        <div class="box-info">
          <div class="box-info-title">El Principio de Inducción Contextual</div>
          <p>La IA no adivina intenciones no expresadas. Si no defines el tono, el modelo elegirá el tono por defecto; si no delimitas la longitud, el modelo improvisará; si no muestras qué consideras una respuesta excelente, el modelo promediará el conocimiento de la web.</p>
        </div>
        <p>En este manual aprenderás a transformar directrices rudimentarias en especificaciones técnicas de alta precisión utilizando los marcos metodológicos más avanzados de la industria.</p>
      `
    },
    {
      badge: "PÁGINA 03",
      category: "OBJETIVOS Y COMPETENCIAS",
      title: "Objetivos de Aprendizaje y Competencias Clave",
      subtitle: "Habilidades avanzadas para formular, testear y calibrar instrucciones maestras.",
      content: `
        <div class="data-table">
          <table>
            <thead>
              <tr>
                <th style="width: 25%;">Competencia</th>
                <th style="width: 45%;">Habilidad Práctica Adquirida</th>
                <th style="width: 30%;">Criterio de Evaluación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Estructuración R.C.I.E.F.</strong></td>
                <td>Construir prompts modulares con Rol, Contexto, Instrucción, Ejemplos y Formato.</td>
                <td>Zero ambigüedad en la primera respuesta del modelo generativo.</td>
              </tr>
              <tr>
                <td><strong>Few-Shot Calibration</strong></td>
                <td>Incorporar ejemplos de alta fidelidad para guiar el estilo sin sobrecargar la ventana de contexto.</td>
                <td>El modelo replica la cadencia, tono y vocabulario exacto de la marca.</td>
              </tr>
              <tr>
                <td><strong>Chain-of-Thought (CoT)</strong></td>
                <td>Obligar al modelo a razonar paso a paso antes de entregar una conclusión o redacción final.</td>
                <td>Reducción superior al 80% en inconsistencias lógicas o alucinaciones.</td>
              </tr>
              <tr>
                <td><strong>Meta-Prompting</strong></td>
                <td>Utilizar la propia IA para diagnosticar, pulir y generar variantes optimizadas de prompts.</td>
                <td>Capacidad de crear generadores de prompts personalizados para cualquier tarea.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="box-tip">
          <div class="box-tip-title">Regla de oro de la instrucción</div>
          <p>Si un colaborador humano novato cometería errores con tus indicaciones por falta de claridad, la IA cometerá exactamente los mismos errores, multiplicados a gran velocidad.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 04",
      category: "MARCO CONCEPTUAL",
      title: "El Marco R.C.I.E.F. para Instrucciones Perfectas",
      subtitle: "Los cinco elementos anatómicos que convierten cualquier interacción con la IA en una obra maestra.",
      content: `
        <div class="card-grid">
          <div class="card">
            <div class="card-title">1. R — Rol y Perspectiva</div>
            <div class="card-desc">Define la identidad cognitiva del modelo: su nivel de experiencia, cargo, valores y marco de pensamiento (ej. "Actúa como un Copywriter Senior de respuesta directa con 15 años de experiencia").</div>
          </div>
          <div class="card">
            <div class="card-title">2. C — Contexto del Negocio</div>
            <div class="card-desc">Proporciona el trasfondo operativo: quién es la audiencia, qué oferta se comercializa, en qué canal se comunicará y cuál es la situación actual del cliente potencial.</div>
          </div>
          <div class="card">
            <div class="card-title">3. I — Instrucción Atómica</div>
            <div class="card-desc">Verbo de acción preciso en imperativo y objetivo único. Evita pedir 5 cosas inconexas en una misma oración; separa tareas complejas en pasos secuenciales.</div>
          </div>
          <div class="card">
            <div class="card-title">4. E — Ejemplos (Few-Shot)</div>
            <div class="card-desc">Provee 1 a 3 muestras del estándar de calidad esperado (input -> output). Los ejemplos enseñan al modelo mucho más rápido que párrafos enteros de explicaciones abstractas.</div>
          </div>
        </div>
        <div class="box-info">
          <div class="box-info-title">5. F — Formato y Restricciones Negativas</div>
          <p>Indica la presentación final: tablas Markdown, esquemas JSON, listas con viñetas, número máximo de palabras y, muy importante, qué cosas <strong>NO</strong> debe incluir jamás (sin introducciones conversacionales, sin emojis excesivos, sin clichés de IA).</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 05",
      category: "METODOLOGÍA AVANZADA",
      title: "Técnicas de Razonamiento y Control Cognitivo",
      subtitle: "Métodos formales de ingeniería de contexto para elevar la inteligencia de las respuestas.",
      content: `
        <div class="step-card">
          <div class="step-num">1</div>
          <div class="step-content">
            <div class="step-title">Delimitadores Semánticos XML o Markdown</div>
            <div class="step-desc">Aísla los datos del usuario del prompt de control utilizando etiquetas como &lt;contexto&gt;, &lt;instrucciones&gt; y &lt;ejemplos&gt;. Esto evita que la IA confunda instrucciones con datos a procesar.</div>
          </div>
        </div>
        <div class="step-card">
          <div class="step-num">2</div>
          <div class="step-content">
            <div class="step-title">Cadena de Pensamiento (Chain of Thought)</div>
            <div class="step-desc">Añade la directriz: <em>"Antes de redactar la propuesta definitiva, analiza en 3 viñetas internas los mayores dolores del cliente y la objeción principal"</em>. El razonamiento explícito previo refina la salida.</div>
          </div>
        </div>
        <div class="step-card">
          <div class="step-num">3</div>
          <div class="step-content">
            <div class="step-title">Few-Shot Guiado con Contraste</div>
            <div class="step-desc">Muestra un ejemplo positivo (lo que buscas) acompañado explícitamente de un ejemplo negativo (lo que debes evitar a toda costa). El contraste enseña al modelo la frontera de calidad.</div>
          </div>
        </div>
        <div class="step-card">
          <div class="step-num">4</div>
          <div class="step-content">
            <div class="step-title">Instrucción Negativa Restrictiva</div>
            <div class="step-desc">Especifica prohibiciones de manera taxativa: <em>"No uses frases como 'en el mundo actual', 'sumérgete', 'revolucionario' o 'en conclusión'. Ve directo al grano sin preludios"</em>.</div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 06",
      category: "GUÍA OPERATIVA",
      title: "El Protocolo de Meta-Prompting y Autocorrección",
      subtitle: "Cómo transformar a la IA en su propio supervisor y optimizador de prompts.",
      content: `
        <div class="data-table">
          <table>
            <thead>
              <tr>
                <th style="width: 25%;">Paso del Ciclo</th>
                <th style="width: 40%;">Mecanismo de Ejecución</th>
                <th style="width: 35%;">Resultado Obtenido</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Borrador Inicial</strong></td>
                <td>Escribes la idea base con tus palabras cotidianas sin preocuparte por la perfección.</td>
                <td>Prompt en crudo (vago pero con la intención esencial).</td>
              </tr>
              <tr>
                <td><strong>2. Diagnóstico de Ambigüedad</strong></td>
                <td>Pides a la IA: <em>"Evalúa este prompt y dime qué 3 preguntas necesitas que responda para dar un resultado de nivel experto"</em>.</td>
                <td>Detección inmediata de vacíos de contexto y parámetros omitidos.</td>
              </tr>
              <tr>
                <td><strong>3. Calibración R.C.I.E.F.</strong></td>
                <td>La IA ensambla la versión final estructurada con delimitadores y restricciones.</td>
                <td>Instrucción profesional lista para guardar en tu biblioteca.</td>
              </tr>
              <tr>
                <td><strong>4. Prueba Ciega</strong></td>
                <td>Ejecutas el nuevo prompt en un chat completamente limpio para evaluar fidelidad.</td>
                <td>Validación de reproducibilidad independiente del historial previo.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="box-info">
          <div class="box-info-title">El Valor del Chat Limpio</div>
          <p>Nunca pruebes un prompt maestro en un chat largo que ya contenga cientos de mensajes. La memoria residual sesgará los resultados. Abre siempre una conversación nueva y vacía para certificar que el prompt se sostiene por sí mismo.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 07",
      category: "PROMPTS Y PLANTILLAS",
      title: "La Plantilla Maestra de Meta-Prompting",
      subtitle: "Un prompt universal diseñado para crear cualquier otra instrucción de calidad suprema.",
      content: `
        <div class="prompt-box">
          <div class="prompt-box-title">El Meta-Prompt Constructor de Instrucciones Profesionales</div>
          <p><strong>Copia y pega esta instrucción en ChatGPT, Claude o Gemini:</strong></p>
          <code>
            Actúa como el Ingeniero de Prompts Principal de una firma de software de inteligencia artificial.<br><br>
            Tu misión es ayudarme a diseñar la mejor instrucción posible para la siguiente tarea:<br>
            &lt;tarea_objetivo&gt;[ESCRIBE AQUÍ LO QUE QUIERES LOGRAR EN POCAS PALABRAS]&lt;/tarea_objetivo&gt;<br><br>
            Para lograrlo, sigue este procedimiento riguroso:<br>
            1. Hazme exactamente 3 a 5 preguntas concretas sobre el contexto, la audiencia y las restricciones que necesitas saber antes de redactar el prompt final.<br>
            2. Espera a que te responda.<br>
            3. Una vez que te dé mis respuestas, genera el prompt definitivo estructurado bajo el marco R.C.I.E.F. (Rol, Contexto, Instrucción, Ejemplos, Formato).<br>
            4. Incluye delimitadores XML limpios y una lista de restricciones negativas estrictas para evitar clichés de IA.<br><br>
            Comienza formulándome las preguntas ahora.
          </code>
        </div>
        <div class="box-tip">
          <div class="box-tip-title">Impacto de este Meta-Prompt</div>
          <p>Este único prompt eleva la calidad de cualquier resultado comercial en un 300%, porque obliga al creador a clarificar su propia mente antes de exigirle resultados al modelo.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 08",
      category: "ESTUDIO DE CASO REAL",
      title: "Caso de Estudio: De la Mediocridad a la Maestría",
      subtitle: "Comparativa forense entre un prompt amateur y una directriz profesional de alta respuesta.",
      content: `
        <div class="card-grid">
          <div class="card">
            <div class="card-title">El Prompt Amateur (90% de la gente)</div>
            <div class="card-desc"><em>"Escribe un correo vendiendo mi curso de finanzas para jóvenes profesionales. Que sea persuasivo y convincente."</em><br><br><strong>Resultado:</strong> Un texto genérico lleno de frases como "En el mundo vertiginoso de hoy...", sin empatía real ni ganchos de atención.</div>
          </div>
          <div class="card">
            <div class="card-title">La Instrucción de Élite (AI Creator)</div>
            <div class="card-desc"><em>"Actúa como Copywriter de Respuesta Directa seguidor de Gary Halbert. Audiencia: asalariados de 25-32 años que ahorran pero sienten que la inflación se los come. Estructura: Historia personal de error financiero -> Revelación del método de 3 cuentas -> Oferta irresistible del curso -> CTA con garantía. Formato: Máximo 320 palabras, párrafos de 1 a 2 oraciones, tono entre amigos en un café. Prohibido usar metáforas de cohetes o fuegos artificiales."</em></div>
          </div>
        </div>
        <div class="data-table">
          <table>
            <thead>
              <tr>
                <th>Criterio Comparativo</th>
                <th>Respuesta con Prompt Amateur</th>
                <th>Respuesta con Instrucción de Élite</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tasa de Clics (CTR) en el Email</td>
                <td>1.4%</td>
                <td>5.9% (más del cuádruple)</td>
              </tr>
              <tr>
                <td>Tiempo Requerido de Edición Humana</td>
                <td>45 minutos reescribiendo</td>
                <td>4 minutos ajustando un dato local</td>
              </tr>
              <tr>
                <td>Percepción de Marca en Respuestas</td>
                <td>"Parece spam impersonal"</td>
                <td>"Sentí que me leías la mente"</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      badge: "PÁGINA 09",
      category: "ECOSISTEMA DE HERRAMIENTAS",
      title: "Entornos y Herramientas para la Gestión de Prompts",
      subtitle: "Software especializado para testear, versionar y almacenar tus directrices maestras.",
      content: `
        <div class="data-table">
          <table>
            <thead>
              <tr>
                <th style="width: 25%;">Herramienta</th>
                <th style="width: 35%;">Propósito Principal</th>
                <th style="width: 40%;">Ventaja Competitiva para Creadores</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>OpenAI / Anthropic Playgrounds</strong></td>
                <td>Entornos de laboratorio con ajuste fino de parámetros.</td>
                <td>Permite alterar libremente la temperatura, top_p y probar system prompts sin sesgo de chat.</td>
              </tr>
              <tr>
                <td><strong>Raycast / TextExpander</strong></td>
                <td>Expansión de texto y atajos de teclado globales en el sistema operativo.</td>
                <td>Inserta tus prompts maestros en cualquier aplicación o navegador escribiendo solo ';prompt1'.</td>
              </tr>
              <tr>
                <td><strong>Notion Prompt Vault</strong></td>
                <td>Base de datos organizada con etiquetas de uso, canal y modelo recomendado.</td>
                <td>Mantiene la memoria institucional de tu negocio compartida con todo tu equipo de trabajo.</td>
              </tr>
              <tr>
                <td><strong>LangSmith / PromptLayer</strong></td>
                <td>Monitoreo, registro de costos y evaluación continua de prompts en producción.</td>
                <td>Auditoría profesional para flujos automatizados que consumen APIs a escala.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="box-info">
          <div class="box-info-title">Atajos de Teclado: El Arma Secreta del Creador</div>
          <p>Configurar tus 10 prompts más recurrentes como fragmentos de teclado te ahorrará entre 3 y 5 horas semanales de copiar y pegar entre documentos dispersos.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 10",
      category: "ERRORES Y ANTIPATRONES",
      title: "Los 6 Errores Mortales en la Formulación de Prompts",
      subtitle: "Vicios comunes que degradan el rendimiento de los modelos más avanzados.",
      content: `
        <div class="card-grid">
          <div class="card">
            <div class="card-title">1. Sobrecarga de Instrucciones Contradictorias</div>
            <div class="card-desc">Pedir al modelo que sea "extremadamente detallado y exhaustivo" pero al mismo tiempo "breve, conciso y directo al grano". Genera respuestas confusas y desbalanceadas.</div>
          </div>
          <div class="card">
            <div class="card-title">2. Asumir Contexto No Provisto</div>
            <div class="card-desc">Mencionar tu producto por su nombre comercial ("crea un post sobre el Sistema F.A.S.T.") sin explicar qué significa ni a quién va dirigido.</div>
          </div>
          <div class="card">
            <div class="card-title">3. Falta de Delimitación de Citas</div>
            <div class="card-desc">Pegar un artículo largo junto a la orden sin comillas ni etiquetas XML, haciendo que el modelo confunda el texto a resumir con la propia instrucción.</div>
          </div>
          <div class="card">
            <div class="card-title">4. Tono Pasivo y Ambiguo</div>
            <div class="card-desc">Escribir "¿Podrías intentar ver si se puede redactar algo sobre...?" en lugar del imperativo directo: "Redacta un esquema de 4 pasos para...".</div>
          </div>
        </div>
        <div class="box-warning">
          <div class="box-warning-title">El Peligro de las 'Palabras Gatillo' de IA</div>
          <p>Términos como "fascinante", "sumérgete", "tapiz", "farol", "crucial" o "en el panorama moderno" delatan de inmediato una redacción robótica. Prohíbe expresamente su uso en tus directrices.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 11",
      category: "CHECKLIST DE CALIDAD",
      title: "Checklist de Verificación de Instrucciones Maestras",
      subtitle: "Siete filtros obligatorios antes de dar por finalizada una instrucción en tu negocio.",
      content: `
        <div class="checklist">
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div><strong>¿Tiene un rol y una perspectiva experta definidos con claridad?</strong></div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div><strong>¿El contexto provee el nicho, la audiencia y la situación de negocio necesaria?</strong></div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div><strong>¿La instrucción principal utiliza verbos imperativos atómicos y directos?</strong></div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div><strong>¿Se incluyó al menos un ejemplo (Few-Shot) del estilo o formato esperado?</strong></div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div><strong>¿El formato final está perfectamente especificado (JSON, tabla, lista, límite de palabras)?</strong></div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div><strong>¿Se indicaron restricciones negativas explícitas (lo que está prohibido incluir)?</strong></div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div><strong>¿Ha sido probado y validado con éxito en una ventana de chat completamente limpia?</strong></div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 12",
      category: "TALLER PRÁCTICO",
      title: "Taller: Refactorización de Prompts en Vivo",
      subtitle: "Ejercicio guiado de transformación de una instrucción mediocre en un activo empresarial.",
      content: `
        <div class="step-card">
          <div class="step-num">1</div>
          <div class="step-content">
            <div class="step-title">Selecciona un Prompt Habitual de tu Negocio</div>
            <div class="step-desc">Elige esa instrucción que utilizas a menudo pero cuyo resultado siempre tienes que retocar manualmente durante 15 minutos porque no te convence del todo.</div>
          </div>
        </div>
        <div class="step-card">
          <div class="step-num">2</div>
          <div class="step-content">
            <div class="step-title">Pásalo por el Filtro R.C.I.E.F.</div>
            <div class="step-desc">Desglosa tu instrucción en los 5 bloques: asígnale una profesión de élite (R), inyecta los datos de tu cliente ideal (C), define una sola acción concreta (I), pega tu mejor texto pasado como ejemplo (E) y fija el formato de entrega (F).</div>
          </div>
        </div>
        <div class="step-card">
          <div class="step-num">3</div>
          <div class="step-content">
            <div class="step-title">Añade la Cláusula de Razonamiento Previo (CoT)</div>
            <div class="step-desc">Indícale al modelo que antes de escribir el texto final elabore un análisis de 3 viñetas sobre las objeciones subyacentes del lector.</div>
          </div>
        </div>
        <div class="step-card">
          <div class="step-num">4</div>
          <div class="step-content">
            <div class="step-title">Guarda el Prompt Maestro en tu Biblioteca</div>
            <div class="step-desc">Etiquétalo con variables dinámicas entre corchetes ([TEMA], [OFERTA], [AUDIENCIA]) para que puedas reutilizarlo en cuestión de segundos en cualquier momento.</div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 13",
      category: "MANDAMIENTOS DE LA INSTRUCCIÓN",
      title: "Los 10 Mandamientos del Prompt Engineer Moderno",
      subtitle: "Principios innegociables para liderar con ventaja competitiva en la era de la IA.",
      content: `
        <div class="card-grid">
          <div class="card">
            <div class="card-title">1. Contexto es Rey</div>
            <div class="card-desc">Un modelo pequeño con un contexto perfecto supera siempre a un modelo gigante con un prompt mediocre.</div>
          </div>
          <div class="card">
            <div class="card-title">2. Muestra, no solo expliques</div>
            <div class="card-desc">Un buen ejemplo concreto vale más que tres páginas de explicaciones teóricas abstractas.</div>
          </div>
          <div class="card">
            <div class="card-title">3. Divide y vencerás</div>
            <div class="card-desc">Es mejor encadenar 3 prompts atómicos secuenciales que exigir 1 megaproceso saturado y confuso.</div>
          </div>
          <div class="card">
            <div class="card-title">4. Delimita siempre tus entradas</div>
            <div class="card-desc">Utiliza etiquetas claras para que la IA nunca confunda las órdenes del creador con el contenido del cliente.</div>
          </div>
          <div class="card">
            <div class="card-title">5. Prohíbe lo obvio</div>
            <div class="card-desc">Las restricciones negativas son el secreto mejor guardado para extirpar la voz robótica de tus textos.</div>
          </div>
          <div class="card">
            <div class="card-title">6. Reutiliza con variables</div>
            <div class="card-desc">Nunca redactes un buen prompt desde cero dos veces; conviértelo en una plantilla modular reutilizable.</div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 14",
      category: "CUADERNO DE TRABAJO",
      title: "Cuaderno de Trabajo: Banco de Refactorización",
      subtitle: "Plantilla para transformar instrucciones débiles en especificaciones de alto impacto.",
      content: `
        <div class="box-info">
          <div class="box-info-title">Ficha de Calibración de Instrucción Maestra</div>
          <p>Completa cada campo para construir tu próximo prompt de producción para tu negocio:</p>
        </div>
        <div class="data-table">
          <table>
            <thead>
              <tr>
                <th style="width: 25%;">Componente</th>
                <th style="width: 75%;">Tu Especificación Personalizada</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Rol / Identidad</strong></td>
                <td><em>Ej: Consultor Senior de Estrategia de Contenidos especializado en monetización B2B</em></td>
              </tr>
              <tr>
                <td><strong>Contexto de Negocio</strong></td>
                <td><em>Ej: Lanzamiento de una mentoría de 12 semanas para dueños de agencia digital</em></td>
              </tr>
              <tr>
                <td><strong>Instrucción Nuclear</strong></td>
                <td><em>Ej: Redacta 5 ganchos de apertura para un video corto en formato testimonio educativo</em></td>
              </tr>
              <tr>
                <td><strong>Ejemplo de Excelencia</strong></td>
                <td><em>Ej: 'El 80% de los consultores cobra poco por miedo, no por falta de habilidad. Así lo resolví...'</em></td>
              </tr>
              <tr>
                <td><strong>Formato de Salida</strong></td>
                <td><em>Ej: Tabla con 3 columnas: [Gancho], [Emoción que activa], [Primeros 3 segundos en pantalla]</em></td>
              </tr>
              <tr>
                <td><strong>Prohibiciones</strong></td>
                <td><em>Ej: Sin palabras grandilocuentes, sin preguntas retóricas clichés, sin introducciones vacías</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      badge: "PÁGINA 15",
      category: "CIERRE Y PRÓXIMOS PASOS",
      title: "Cierre de la Clase y Glosario de Ingeniería Cognitiva",
      subtitle: "Consolidación terminológica para dominar la interacción avanzada con modelos de lenguaje.",
      content: `
        <div class="box-tip">
          <div class="box-tip-title">¡Has completado el Módulo Bónus de Instrucciones Avanzadas!</div>
          <p>Posees ahora la metodología exacta que distingue a los creadores promedio de los profesionales de élite. Las herramientas evolucionarán y surgirán nuevos modelos cada mes, pero los principios de claridad, contexto, estructuración y control permanecerán inalterables.</p>
        </div>
        <div class="card-grid">
          <div class="card">
            <div class="card-title">Prompt Engineering</div>
            <div class="card-desc">Disciplina que diseña, estructura y calibra entradas textuales para maximizar la precisión, relevancia y utilidad de un LLM.</div>
          </div>
          <div class="card">
            <div class="card-title">Few-Shot Prompting</div>
            <div class="card-desc">Técnica que suministra uno o varios ejemplos resueltos dentro del prompt para guiar el estilo y la estructura de salida.</div>
          </div>
          <div class="card">
            <div class="card-title">Zero-Shot Prompting</div>
            <div class="card-desc">Solicitud de una tarea al modelo sin facilitarle ejemplos previos, dependiendo enteramente de su entrenamiento base.</div>
          </div>
          <div class="card">
            <div class="card-title">Chain of Thought (CoT)</div>
            <div class="card-desc">Estrategia que induce al modelo a descomponer problemas complejos en pasos intermedios de razonamiento secuencial.</div>
          </div>
        </div>
      `
    }
  ]
};

module.exports = { bonus_c3 };

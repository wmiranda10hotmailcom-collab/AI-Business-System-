// scripts/content-bonus.js
// Datos pedagógicos completos para el Módulo Bónus (Clase 01 y Clase 02)
// Totalmente en español, 14 páginas internas por clase (15 páginas totales con la portada).

const bonus_c1 = {
  moduleNumber: "Módulo Bónus",
  moduleTitle: "Masterclasses y Práctica Aplicada",
  lessonNumber: "01",
  lessonTitle: "AI Creator Prompts: Do Zero ao Resultado",
  totalPages: 15,
  pages: [
    {
      badge: "PÁGINA 02",
      category: "MASTERCLASS EXCLUSIVA",
      title: "La Ciencia de la Ingeniería de Prompts Avanzada",
      subtitle: "Cómo comunicarte con modelos de IA para obtener resultados extraordinarios desde el primer intento.",
      content: `
        <p>En esta masterclass exclusiva del <strong>Módulo Bónus</strong>, profundizamos en la habilidad más determinante para el futuro de cualquier profesional digital: la capacidad de traducir una intención abstracta en un conjunto de instrucciones de altísima precisión algorítmica.</p>
        
        <p>Muchos usuarios creen falsamente que utilizar inteligencia artificial consiste en escribir una frase casual en una caja de chat y conformarse con la primera respuesta. Ese es el nivel del usuario curioso. El <strong>AI Business System</strong> comprende que un prompt es un programa escrito en lenguaje natural: un conjunto deliberado de variables, restricciones, datos de contexto y formatos esperados.</p>

        <div class="box-info">
          <div class="box-info-title">La Regla de Oro de la Entrada y Salida</div>
          <p>Un modelo de lenguaje no puede adivinar lo que no le dices. La calidad de la respuesta es un espejo matemático exacto de la calidad, contexto y profundidad de la instrucción suministrada.</p>
        </div>

        <p>En este cuaderno pedagógico de 15 páginas, recorrerás la anatomía completa de un prompt de nivel maestro, dominando las técnicas de Role Prompting, Few-Shot Learning y Chain of Thought para obtener siempre resultados impecables.</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>La Tríada Fundamental del Prompting</h4>
              <p>Qué quieres crear (objeto) + Para quién lo estás creando (audiencia) + Qué resultado esperas (transformación).</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>La Iteración Conversacional Progresiva</h4>
              <p>Cómo dialogar con el modelo para expandir, acotar o reorganizar una salida sin reiniciar la conversación.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Repositorio de Prompts Maestros</h4>
              <p>Plantillas listas para usar en redacción de e-books, diseño de guiones y estructuración de ofertas comerciales.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 03",
      category: "OBJETIVOS Y COMPETENCIAS",
      title: "Matriz de Dominio de Instrucciones Complejas",
      subtitle: "Competencias de ingeniería lingüística que adquirirás en esta masterclass.",
      content: `
        <p>El dominio avanzado de prompts te situará en el percentil superior de creadores asistidos por IA. Estas son las competencias a consolidar:</p>

        <table>
          <thead>
            <tr>
              <th style="width: 25%;">Competencia</th>
              <th style="width: 45%;">Habilidad Práctica a Desarrollar</th>
              <th style="width: 30%;">Nivel de Destreza</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Calibración de Contexto</strong></td>
              <td>Inyectar restricciones negativas, tono, límites de longitud y ejemplos de referencia dentro del prompt.</td>
              <td>Avanzado / Pro</td>
            </tr>
            <tr>
              <td><strong>Few-Shot Prompting</strong></td>
              <td>Proporcionar de 2 a 3 ejemplos exactos de entrada y salida para condicionar el estilo del modelo con exactitud milimétrica.</td>
              <td>Técnico / Sistemático</td>
            </tr>
            <tr>
              <td><strong>Cadena de Pensamiento (CoT)</strong></td>
              <td>Forzar al modelo a razonar paso a paso antes de emitir la conclusión final, erradicando alucinaciones lógicas.</td>
              <td>Estratégico / Lógico</td>
            </tr>
            <tr>
              <td><strong>Creación de Mega-Prompts</strong></td>
              <td>Diseñar instrucciones modulares complejas de más de 300 palabras para tareas de diseño instruccional masivas.</td>
              <td>Arquitecto de Prompts</td>
            </tr>
          </tbody>
        </table>

        <div class="box-success">
          <div class="box-success-title">Resultado de la Masterclass</div>
          <p>Dejarás de depender de la suerte. Serás capaz de formular instrucciones quirúrgicas que produzcan borradores prácticamente definitivos en el 90% de los casos.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 04",
      category: "MARCO CONCEPTUAL",
      title: "Anatomía de un Mega-Prompt Profesional",
      subtitle: "Los 6 bloques indispensables que componen una instrucción de alto impacto.",
      content: `
        <p>Un prompt profesional no es una frase suelta; es un bloque estructurado compuesto por 6 elementos jerárquicos indispensables:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>1. El Rol y la Personalidad (Persona / Persona Framing)</h4>
              <p>Define quién es la IA en esta conversación (ej: <em>"Actúa como un diseñador instruccional con 15 años de experiencia en microaprendizaje"</em>).</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>2. La Situación y el Contexto (Background / Situation)</h4>
              <p>El escenario de fondo: quién es tu empresa, en qué mercado operas y qué objetivos persigue la pieza en cuestión.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>3. La Misión y Tarea Central (Core Task)</h4>
              <p>El mandato explícito: qué debe redactar o estructurar con verbos directos y sin vaguedades.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <h4>4. Las Restricciones Negativas (Negative Constraints)</h4>
              <p>Qué está expresamente prohibido hacer: qué palabras evitar, qué tópicos ignorar y qué límites de extensión respetar.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">5</div>
            <div class="step-text">
              <h4>5. Los Ejemplos de Salida (Few-Shot Examples)</h4>
              <p>Muestra uno o dos fragmentos que ilustren el formato, tono y ritmo exacto que esperas recibir.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">6</div>
            <div class="step-text">
              <h4>6. El Modo Interactivo de Aclaración</h4>
              <p>Instruye: <em>"Antes de empezar, hazme 2 preguntas sobre cualquier aspecto que consideres ambiguo"</em>.</p>
            </div>
          </div>
        </div>

        <div class="box-info">
          <div class="box-info-title">Por qué funciona esta estructura</div>
          <p>Al delimitar el espacio probabilístico del modelo en seis dimensiones, reduces drásticamente la aleatoriedad y obligas a la IA a responder desde su base de conocimiento más especializada.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 05",
      category: "METODOLOGÍA DE TRABAJO",
      title: "El Ciclo de Iteración Guiada en 4 Respuestas",
      subtitle: "Cómo transformar un borrador aceptable en una obra maestra sin empezar de cero.",
      content: `
        <p>Cuando la IA te entregue una primera respuesta, no descartes el resultado; aplica el ciclo de iteración guiada en 4 pasos:</p>

        <div class="grid-2">
          <div class="card-simple">
            <h4>Paso 1: Ajuste de Profundidad</h4>
            <p>Si la respuesta fue superficial, responde: <em>"El punto 2 está demasiado general. Profundiza en esa técnica explicando exactamente cómo se implementa en la práctica con un ejemplo numérico"</em>.</p>
          </div>
          <div class="card-simple">
            <h4>Paso 2: Calibración Tonal</h4>
            <p>Si suena acartonado o corporativo: <em>"Reescribe los párrafos eliminando el tono formal. Usa un lenguaje más directo, como si estuvieras conversando con un colega de confianza en una cafetería"</em>.</p>
          </div>
          <div class="card-simple">
            <h4>Paso 3: Condensación y Poda</h4>
            <p>Si fue demasiado verboso: <em>"Sintetiza la respuesta en un 30%. Elimina repeticiones y transforma las explicaciones largas en una tabla o lista de viñetas"</em>.</p>
          </div>
          <div class="card-simple">
            <h4>Paso 4: Auditoría de Inconsistencias</h4>
            <p>Pregúntale: <em>"Léete a ti mismo con ojo crítico. ¿Qué debilidad argumental tiene esta propuesta y cómo podemos solventarla?"</em>.</p>
          </div>
        </div>

        <div class="box-success">
          <div class="box-success-title">La Regla de Oro de la Conversación</div>
          <p>Un buen creador digital no busca 'el prompt perfecto de un solo clic'; construye un diálogo iterativo donde cada turno refina y eleva la calidad del resultado anterior.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 06",
      category: "GUÍA OPERATIVA",
      title: "Catálogo de Modificadores Lingüísticos de Alto Impacto",
      subtitle: "Palabras clave y fórmulas sintácticas que elevan instantáneamente la calidad de salida.",
      content: `
        <p>Incorpora estos modificadores en tus prompts para cambiar radicalmente el comportamiento del modelo:</p>

        <table>
          <thead>
            <tr>
              <th style="width: 30%;">Modificador / Comando</th>
              <th style="width: 40%;">Efecto Psicológico en el Modelo</th>
              <th style="width: 30%;">Ejemplo Práctico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>"Razona paso a paso"</strong></td>
              <td>Activa la cadena de razonamiento lógico, reduciendo errores analíticos y conclusiones apresuradas.</td>
              <td><em>"Antes de emitir el temario, analiza paso a paso las dificultades del alumno"</em>.</td>
            </tr>
            <tr>
              <td><strong>"Sé implacable y escéptico"</strong></td>
              <td>Desactiva el sesgo complaciente por defecto del modelo, forzándolo a emitir críticas constructivas duras.</td>
              <td><em>"Evalúa mi propuesta de curso con mirada implacable y señala dónde flaquea"</em>.</td>
            </tr>
            <tr>
              <td><strong>"Escribe a nivel de lectura Flesch 60"</strong></td>
              <td>Exige oraciones cortas, vocabulario común y alta legibilidad para el gran público.</td>
              <td><em>"Explica este concepto complejo con un nivel de lectura accesible para todos"</em>.</td>
            </tr>
            <tr>
              <td><strong>"Prohibido usar palabras de relleno"</strong></td>
              <td>Corta de raíz clichés como 'crucial', 'fascinante', 'sumergirse', 'en resumen'.</td>
              <td><em>"Redacta sin usar metáforas clichés ni adjetivos grandilocuentes"</em>.</td>
            </tr>
          </tbody>
        </table>

        <div class="box-info">
          <div class="box-info-title">Consejo de Uso</div>
          <p>Utiliza los modificadores como condimentos en una receta: 2 o 3 bien elegidos bastan para transformar por completo el tono y la solidez del texto.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 07",
      category: "INGENIERÍA DE PROMPTS",
      title: "El Mega-Prompt Definitivo: El Diseñador Instruccional",
      subtitle: "Una plantilla de nivel arquitecto para desarrollar módulos formativos completos.",
      content: `
        <div class="prompt-card">
          <div class="prompt-tag">MEGA-PROMPT MAESTRO: EL ARQUITECTO CURRICULAR Y DIDÁCTICO</div>
[ROL Y CREDENCIALES]
Actúa como un Director Pedagógico sénior especializado en la creación de infoproductos educativos de alta transformación para adultos profesionales.

[CONTEXTO DEL PROYECTO]
Estoy construyendo un módulo para el programa "AI Business System". El público está compuesto por creadores independientes que buscan monetizar su conocimiento utilizando inteligencia artificial sin perder su autenticidad ni su tiempo.

[MISIÓN ESPECÍFICA]
Desarrolla el plan integral para la siguiente clase:
Tema: [INSERTAR NOMBRE DEL TEMA]
Objetivo principal: [INSERTAR TRANSFORMACIÓN ESPERADA]

[REQUISITOS FORMALES DE SALIDA]
Genera estrictamente:
1. Título oficial orientado a la acción y subtítulo descriptivo.
2. Un gancho de apertura de 45 segundos para el video que desmonte un error común.
3. El desglose de los 3 conceptos fundamentales explicados con una analogía visual cada uno.
4. Una demostración práctica paso a paso indicando qué hacer en pantalla.
5. El ejercicio práctico para el alumno y la descripción del PDF complementario de 15 páginas.

[RESTRICCIONES]
- Prohibido usar clichés corporativos o tono condescendiente.
- Lenguaje 100% en español natural y riguroso.
- Si consideras que falta algún dato crítico antes de redactar, hazme hasta 2 preguntas antes de empezar.
        </div>
      `
    },
    {
      badge: "PÁGINA 08",
      category: "CASO DE ESTUDIO",
      title: "Antes y Después: Comparativa de Prompts en el Mundo Real",
      subtitle: "Cómo un prompt de 5 líneas superó a una orden vaga de una frase en un 400% de utilidad.",
      content: `
        <p>Observemos el contraste real al solicitar el guion de una lección sobre finanzas para creadores:</p>

        <div class="grid-2">
          <div class="card-simple">
            <h4>Prompt Básico (Nivel Aficionado)</h4>
            <p style="font-size: 11.5px; color: #64748b;">
              <em>"Hazme un guion para un video sobre cómo poner precios a mis cursos online con IA"</em>.
            </p>
            <p style="font-size: 11px; color: #dc2626; margin-top: 8px;">
              <strong>Resultado de la IA:</strong> Un guion genérico que dice que "poner precios es importante", que "depende de muchos factores" y sugiere "buscar en Google lo que cobra la competencia". Cero valor práctico.
            </p>
          </div>
          <div class="card-simple">
            <h4>Prompt Maestro (AI Business System)</h4>
            <p style="font-size: 11.5px; color: #0f172a;">
              <em>"Actúa como un estratega de pricing para infoproductos. Diseña un guion de 10 minutos para creadores que cobran $10 por miedo a que no les compren. Enseña el método de fijación basado en el valor de la transformación. Incluye la fórmula matemática exacta para calcular el precio del curso..."</em>
            </p>
            <p style="font-size: 11px; color: #16a34a; margin-top: 8px;">
              <strong>Resultado de la IA:</strong> Un guion magistral con la fórmula explicada paso a paso, ejemplos numéricos claros y un ejercicio de cálculo para hacer en pantalla.
            </p>
          </div>
        </div>

        <div class="box-info">
          <div class="box-info-title">Conclusión Incontestable</div>
          <p>La IA no es sabia ni ignorante por naturaleza; es un amplificador estricto de la claridad que tú depositas en ella. Cuando le pides cosas concretas, te entrega genialidades concretas.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 09",
      category: "MATRIZ DE TÉCNICAS",
      title: "Cuadro Comparativo de Técnicas de Prompting",
      subtitle: "Cuándo utilizar cada enfoque según la complejidad del entregable requerido.",
      content: `
        <p>Aplica la técnica de formulación adecuada para cada tipo de tarea creativa:</p>

        <table>
          <thead>
            <tr>
              <th style="width: 25%;">Técnica</th>
              <th style="width: 35%;">Mecanismo de Funcionamiento</th>
              <th style="width: 40%;">Momento Ideal de Aplicación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Zero-Shot Prompting</strong></td>
              <td>Instrucción directa sin ejemplos previos. Depende 100% de la capacidad general del modelo.</td>
              <td>Preguntas conceptuales sencillas, resúmenes rápidos de textos o traducciones directas.</td>
            </tr>
            <tr>
              <td><strong>Few-Shot Prompting</strong></td>
              <td>Se proporcionan 2 o 3 parejas de [Ejemplo Entrada] → [Ejemplo Salida Deseada].</td>
              <td>Cuando requieres un formato estilístico muy específico (ej: títulos de una longitud exacta).</td>
            </tr>
            <tr>
              <td><strong>Chain of Thought (CoT)</strong></td>
              <td>Se pide al modelo desglosar su razonamiento paso a paso antes de entregar la conclusión.</td>
              <td>Estructuración curricular, análisis de precios, resolución de problemas lógicos o auditorías.</td>
            </tr>
            <tr>
              <td><strong>Role + Persona Prompting</strong></td>
              <td>Se asigna un rol profesional detallado con experiencia, contexto y prejuicios sanos.</td>
              <td>Redacción de lecciones con voz propia, simulación de entrevistas y asesoría estratégica.</td>
            </tr>
          </tbody>
        </table>

        <div class="box-success">
          <div class="box-success-title">La Combinación Maestra</div>
          <p>El estándar de <strong>AI Business System</strong> consiste en combinar <strong>Role Prompting + Few-Shot + Chain of Thought</strong> en una única instrucción cuando se diseñan piezas nucleares de contenido.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 10",
      category: "PREVENCIÓN DE ERRORES",
      title: "Antipatrones en la Ingeniería de Prompts",
      subtitle: "Los vicios de redacción de instrucciones que arruinan la respuesta de los LLMs.",
      content: `
        <p>Evita estos cuatro errores habituales al construir tus instrucciones de trabajo:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>El Prompt "Testamento" Desordenado</h4>
              <p>Escribir un texto continuo de 1,500 palabras sin sangrías, viñetas ni encabezados. El modelo pierde la pista de las prioridades. Utiliza siempre corchetes, mayúsculas y listas numeradas para separar secciones.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>Instrucciones Negativas sin Alternativa Positiva</h4>
              <p>Decirle a la IA: <em>"No seas aburrido"</em>. La IA no sabe qué significa para ti no ser aburrido. En su lugar, indica qué hacer: <em>"Utiliza metáforas de deportes extremos y oraciones cortas de máximo 12 palabras"</em>.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Mezclar Múltiples Objetivos en una Sola Petición</h4>
              <p>Pedirle en el mismo mensaje que defina el avatar, redacte el índice, diseñe los ejercicios y escriba el correo de venta. La respuesta será forzosamente superficial en todos los puntos. Trabaja un objetivo por turno.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <h4>No Proporcionar Contexto de Audiencia</h4>
              <p>Pedir <em>"Explica qué es un embudo de ventas"</em> sin decir para quién. Explicárselo a un programador sénior exige analogías de arquitectura de software; a un pastelero exige metáforas de vitrina.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 11",
      category: "CONTROL DE CALIDAD",
      title: "Checklist de Auditoría de un Prompt Maestro",
      subtitle: "Verifica que tu instrucción contenga los 6 sellos de garantía antes de pulsar Enter.",
      content: `
        <p>Antes de enviar un prompt crítico a tu modelo de lenguaje, revisa este checklist:</p>

        <div class="checklist-box">
          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>1. Asignación Clara de Rol Profesional</strong>
              <p>¿Comienza especificando quién debe ser la IA (experto, diseñador, crítico, redactor)?</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>2. Delimitación del Público Objetivo</strong>
              <p>¿Queda explícitamente detallado el nivel de conocimientos y situación de quien consumirá el contenido?</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>3. Mandato Principal con Verbo de Acción</strong>
              <p>¿Se utiliza un verbo directo (redacta, estructura, compara, sintetiza, audita) en lugar de frases ambiguas?</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>4. Especificación Estricta del Formato de Salida</strong>
              <p>¿Se detalla el número de puntos, la extensión de párrafos o el uso de tablas comparativas?</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>5. Restricciones Negativas Explícitas</strong>
              <p>¿Se prohíben expresamente los clichés, el relleno o el vocabulario corporativo vacío?</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>6. Activación del Modo Interactivo Previo</strong>
              <p>¿Se le ha pedido al modelo que haga preguntas de aclaración antes de generar la respuesta definitiva?</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 12",
      category: "TALLER PRÁCTICO",
      title: "Laboratorio de Prompting: 3 Retos de Maestría",
      subtitle: "Ejercicios guiados para consolidar la formulación de instrucciones de élite.",
      content: `
        <p>Abre ChatGPT, Claude o Gemini y resuelve los siguientes tres desafíos de ingeniería de prompts:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>Reto 1: La Transmutación Few-Shot</h4>
              <p>Diseña un prompt que enseñe a la IA a escribir titulares irresistibles proporcionándole 3 ejemplos reales de titulares de tu sector con su fórmula explicada. Pídele que genere 5 nuevos titulares siguiendo ese mismo patrón exacto.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>Reto 2: El Revisor Socrático</h4>
              <p>Ordena a la IA: <em>"Actúa como Sócrates. No me des respuestas directas. Hazme 3 preguntas agudas que me obliguen a encontrar por mí mismo la propuesta de valor de mi producto"</em>. Responde a sus preguntas y registra el aprendizaje.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Reto 3: Ejecución del Mega-Prompt Maestro</h4>
              <p>Completa la plantilla de la Página 07 con un tema de tu nicho y ejecútala. Observa la diferencia abrumadora entre esta salida y cualquier petición casual anterior.</p>
            </div>
          </div>
        </div>

        <div class="box-success">
          <div class="box-success-title">Victoria Formativa</div>
          <p>Al completar el Reto 3, habrás superado al 99% de los usuarios de IA en el mundo en rigor técnico y precisión de resultados.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 13",
      category: "RESUMEN EJECUTIVO",
      title: "Los 5 Principios Inmutables del Buen Prompting",
      subtitle: "Axiomas para liderar con maestría cualquier conversación con inteligencia artificial.",
      content: `
        <p>Grábate estos cinco principios en tu rutina de trabajo como creador digital:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">I</div>
            <div class="step-text">
              <h4>La Especificidad es el Arma Definitiva</h4>
              <p>A mayor detalle en las restricciones y en la definición del público, menor probabilidad de recibir una respuesta genérica o inútil.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">II</div>
            <div class="step-text">
              <h4>El Contexto Gobierna el Resultado</h4>
              <p>No asumas que la IA "sabe lo que quieres decir". Dedica las primeras líneas de tu prompt a contextualizar la situación con generosidad.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">III</div>
            <div class="step-text">
              <h4>La Iteración Vence a la Magia</h4>
              <p>Los grandes contenidos se construyen en rondas sucesivas de refinamiento. Trata a la IA como a un colega sentado a tu lado en la oficina.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">IV</div>
            <div class="step-text">
              <h4>Tú Conservas la Última Palabra Editorial</h4>
              <p>El prompt es la sugerencia; tu criterio, tu firma y tu verificación empírica constituyen la verdadera obra terminada.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">V</div>
            <div class="step-text">
              <h4>Documenta tus Mejores Prompts</h4>
              <p>Cada vez que consigas una respuesta brillante, guarda el prompt en tu biblioteca personal de Notion. Es tu activo más valioso.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 14",
      category: "CUADERNO DE TRABAJO",
      title: "Mi Repositorio Personal de Prompts Estrella",
      subtitle: "Espacio para registrar a mano las fórmulas que mejor te han funcionado.",
      content: `
        <p>Anota tu fórmula de prompt más exitosa para recurrir a ella en futuros proyectos:</p>

        <div class="notes-area">
          <h4 style="color: #0f172a; margin-bottom: 4px;">Nombre y Propósito de mi Mejor Prompt:</h4>
          <p style="font-size: 12px; color: #64748b; margin-bottom: 8px;">(Ejemplo: Generador de Ganchos de Apertura para Videos Cortos)</p>
          <div class="line-rule"></div>
        </div>

        <div class="notes-area">
          <h4 style="color: #0f172a; margin-bottom: 4px;">El Rol de Sistema que Mejores Resultados me Entrega:</h4>
          <div class="line-rule"></div>
        </div>

        <div class="notes-area">
          <h4 style="color: #0f172a; margin-bottom: 4px;">Mis 3 Restricciones Negativas Favoritas:</h4>
          <div class="line-rule"></div>
          <div class="line-rule"></div>
        </div>
      `
    },
    {
      badge: "PÁGINA 15",
      category: "PRÓXIMOS PASOS",
      title: "Conexión con la Clase Final del Bónus: 5 Proyectos",
      subtitle: "De la teoría de los prompts a la ejecución guiada de 5 infoproductos reales.",
      content: `
        <p>Has concluido la masterclass de <strong>AI Creator Prompts: Do Zero ao Resultado</strong>. Cuentas ahora con una comprensión de nivel arquitecto sobre cómo instruir a cualquier inteligencia artificial.</p>

        <div class="box-info">
          <div class="box-info-title">Avance de la Clase Final: AI Creator Projects (5 Projetos para Praticar)</div>
          <p>Toda la teoría aprendida a lo largo de este programa se consolida en la última clase: un taller intensivo donde te guiaremos paso a paso en la ejecución de 5 proyectos prácticos completos: una guía digital, un kit de plantillas, un set de contenidos multicanal, una presentación profesional y un minicurso completo.</p>
        </div>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">✓</div>
            <div class="step-text">
              <h4>Marca la Clase como Completada</h4>
              <p>Confirma tu avance en la barra superior de la lección.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">→</div>
            <div class="step-text">
              <h4>Conserva este Documento</h4>
              <p>Descarga este PDF y ten a mano sus mega-prompts para utilizarlos en los proyectos de la siguiente sesión.</p>
            </div>
          </div>
        </div>

        <div class="box-success" style="margin-top: 24px;">
          <div class="box-success-title">La Gran Graduación</div>
          <p>Nos vemos en la última clase de AI Business System para culminar tu formación con 5 proyectos listos para brillar.</p>
        </div>
      `
    }
  ]
};

const bonus_c2 = {
  moduleNumber: "Módulo Bónus",
  moduleTitle: "Masterclasses y Práctica Aplicada",
  lessonNumber: "02",
  lessonTitle: "AI Creator Projects: 5 Projetos para Praticar",
  totalPages: 15,
  pages: [
    {
      badge: "PÁGINA 02",
      category: "TALLER DE PROYECTOS",
      title: "La Prueba de Fuego: 5 Proyectos Reales Guiados",
      subtitle: "Aterrizar todo el conocimiento del curso en cinco activos digitales listos para monetizar.",
      content: `
        <p>El aprendizaje pasivo no construye negocios digitales; la ejecución deliberada lo es todo. Puedes haber visto todas las clases y leído todos los materiales didácticos, pero tu transformación como <strong>AI Business System</strong> ocurre en el momento exacto en que te sientas ante el teclado y completas un proyecto real de principio a fin.</p>
        
        <p>En esta última guía oficial del programa, no nos detendremos en teorías abstractas. Te presentamos <strong>5 proyectos profesionales completos</strong>, diseñados con especificaciones técnicas, pasos secuenciales de ejecución y entregables tangibles listos para incorporar a tu portafolio o lanzar al mercado comercial.</p>

        <div class="box-info">
          <div class="box-info-title">La Filosofía del Portafolio del Creador</div>
          <p>Al completar estos cinco proyectos, no solo habrás consolidado tu dominio técnico de la IA; contarás con cinco productos digitales reales que podrás empaquetar, vender o utilizar como imanes de audiencia (lead magnets) para tu negocio.</p>
        </div>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">P1</div>
            <div class="step-text">
              <h4>Proyecto 1: La Guía Digital Especializada (E-book en PDF)</h4>
              <p>Un manual de 15 páginas con alto valor pedagógico, portada editorial y ejercicios prácticos.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">P2</div>
            <div class="step-text">
              <h4>Proyecto 2: El Kit Operativo Digital (Templates + Checklists)</h4>
              <p>Un conjunto descargable de recursos de alta utilidad para ahorrar tiempo a profesionales.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">P3</div>
            <div class="step-text">
              <h4>Proyecto 3: El Set de Contenido Multicanal (1-a-5)</h4>
              <p>La transmutación de una idea central en guion de video, carrusel, email y post de debate.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">P4</div>
            <div class="step-text">
              <h4>Proyecto 4: La Presentación Didáctica para Masterclass</h4>
              <p>Una estructura de diapositivas visuales con guion de locución y notas de orador integradas.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">P5</div>
            <div class="step-text">
              <h4>Proyecto 5: El Mini-Curso Modular en Área de Miembros</h4>
              <p>La arquitectura completa de una experiencia formativa moderna con videos y materiales.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 03",
      category: "MAPA DE PROYECTOS",
      title: "Matriz General de los 5 Proyectos Guiados",
      subtitle: "Especificaciones técnicas, tiempo de ejecución y valor comercial estimado de cada activo.",
      content: `
        <p>A continuación se presenta el mapa panorámico de los cinco proyectos que desarrollarás en este cuaderno:</p>

        <table>
          <thead>
            <tr>
              <th style="width: 22%;">Proyecto</th>
              <th style="width: 28%;">Entregable Final</th>
              <th style="width: 25%;">Tiempo con IA</th>
              <th style="width: 25%;">Potencial de Monetización</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Guía Digital</strong></td>
              <td>PDF A4 de 15 páginas maquetado con portada y checklist.</td>
              <td>2 a 3 horas</td>
              <td>Venta directa ($9-$19) o Lead Magnet de captación.</td>
            </tr>
            <tr>
              <td><strong>2. Kit Digital</strong></td>
              <td>Plantilla en Notion o Excel + Guía rápida de uso en PDF.</td>
              <td>1.5 a 2 horas</td>
              <td>Venta como 'Tripwire' ($17-$37) de alta conversión.</td>
            </tr>
            <tr>
              <td><strong>3. Set Multicanal</strong></td>
              <td>1 Guion de 60s + 1 Carrusel (8 láminas) + 1 Newsletter.</td>
              <td>45 minutos</td>
              <td>Campaña semanal de tráfico orgánico en redes.</td>
            </tr>
            <tr>
              <td><strong>4. Presentación</strong></td>
              <td>Mazo de 15 diapositivas con guion de locución para video.</td>
              <td>1.5 horas</td>
              <td>Masterclass de pago ($27-$47) o webinar de venta.</td>
            </tr>
            <tr>
              <td><strong>5. Mini-Curso</strong></td>
              <td>Plataforma con 4 clases, videos y botones de descarga de PDFs.</td>
              <td>1 jornada de trabajo</td>
              <td>Producto formativo nuclear ($47-$147).</td>
            </tr>
          </tbody>
        </table>

        <div class="box-success">
          <div class="box-success-title">El Ecosistema Completo</div>
          <p>Los 5 proyectos no son piezas aisladas; pueden combinarse para formar el catálogo comercial entero de tu nueva marca educativa con inteligencia artificial.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 04",
      category: "PROYECTO 1: GUÍA DIGITAL",
      title: "Proyecto 1: Desarrollo de una Guía Digital Especializada",
      subtitle: "Paso a paso para crear, maquetar y exportar un e-book didáctico de alto valor.",
      content: `
        <p><strong>Objetivo del Proyecto:</strong> Crear un documento en PDF de 15 páginas sobre una solución técnica concreta de tu nicho (ej: <em>Guía de Automatización con IA para Creadores</em>).</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>Fase de Estructura (30 min con IA)</h4>
              <p>Aplica el <strong>Mega-Prompt de la Clase Anterior</strong> para generar la portada, los objetivos de aprendizaje, los 4 capítulos centrales y la lista de comprobación final.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>Fase de Redacción Sección por Sección (45 min con IA)</h4>
              <p>Desarrolla cada uno de los 4 capítulos utilizando el método C.R.E.A. Exige párrafos breves, ejemplos cotidianos y recuadros de advertencia técnica.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Fase de Arte Visual y Portada (30 min con Midjourney + Canva)</h4>
              <p>Genera un fondo abstracto oscuro con espacio negativo en formato 3:4. Monta la portada con tipografía sans-serif bold y añade la banda de autoría.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <h4>Fase de Ensamblado y Exportación (30 min)</h4>
              <p>Vuelca los textos en tu plantilla de PDF A4, verifica la numeración de páginas y exporta el archivo como <code>guia-oficial-nombre.pdf</code>.</p>
            </div>
          </div>
        </div>

        <div class="box-info">
          <div class="box-info-title">Criterio de Aprobación del Proyecto 1</div>
          <p>El PDF debe contar con portada, índice, 14 páginas internas de contenido estructurado, cero errores ortográficos y un enlace de contacto activo en la última página.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 05",
      category: "PROYECTO 2: KIT DIGITAL",
      title: "Proyecto 2: Construcción de un Kit de Recursos Operativos",
      subtitle: "Cómo empaquetar herramientas prácticas que ahorren semanas de esfuerzo a tus clientes.",
      content: `
        <p><strong>Objetivo del Proyecto:</strong> Desarrollar un producto de utilidad inmediata que combine una plantilla interactiva (en Notion, Google Sheets o Canva) con su manual de uso en PDF.</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>Diseño de la Arquitectura de la Plantilla (40 min)</h4>
              <p>Define la base de datos o cuadrícula de trabajo (ej: <em>Calendario Editorial Automatizado para Creadores</em>). Pide a la IA que sugiera las columnas, fórmulas y etiquetas indispensables.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>Creación del Archivo Duplicable (30 min)</h4>
              <p>Construye la plantilla en Notion o Google Sheets con datos de ejemplo ya precargados para que el usuario entienda cómo se ve el sistema en funcionamiento.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Redacción de la Guía Rápida de Implementación (30 min con IA)</h4>
              <p>Redacta un PDF de 8 a 15 páginas que explique en 3 sencillos pasos cómo duplicar la plantilla, cómo personalizarla y cómo utilizarla a diario.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <h4>Empaque y Mockup 3D (20 min)</h4>
              <p>Crea un mockup que muestre la plantilla dentro de una pantalla de laptop y el PDF en una tablet sobre un fondo de oficina moderna.</p>
            </div>
          </div>
        </div>

        <div class="box-success">
          <div class="box-success-title">Por qué los Kits son tan Vendibles</div>
          <p>Los kits eliminan la fricción cognitiva del alumno: no tiene que pensar cómo diseñar el sistema, simplemente hace clic en "Duplicar" y empieza a trabajar de inmediato.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 06",
      category: "PROYECTO 3: MULTICANAL",
      title: "Proyecto 3: Fábrica de Contenidos Multicanal 1-a-5",
      subtitle: "La ejecución práctica del reciclaje algorítmico sobre un tema de tu especialidad.",
      content: `
        <p><strong>Objetivo del Proyecto:</strong> Tomar una idea potente de 400 palabras y producir en 45 minutos una campaña multicanal completa lista para programar en redes sociales.</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">A</div>
            <div class="step-text">
              <h4>Paso A: Redacción del Texto Pilar Central (15 min)</h4>
              <p>Escribe con ayuda de la IA un ensayo breve sobre una creencia limitante de tu sector (ej: <em>"Por qué publicar todos los días es el peor camino para crecer en internet"</em>).</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">B</div>
            <div class="step-text">
              <h4>Paso B: Extracción del Guion Vertical de 60s (10 min)</h4>
              <p>Ejecuta la plantilla de conversión de la Clase 02 del Módulo 2. Obtén el guion con gancho de 3 segundos, 3 puntos con soporte visual y CTA.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">C</div>
            <div class="step-text">
              <h4>Paso C: Generación del Carrusel de 8 Láminas (10 min)</h4>
              <p>Genera los textos para las láminas de Canva, asegurando que ninguna lámina exceda las 25 palabras para una lectura ágil.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">D</div>
            <div class="step-text">
              <h4>Paso D: Redacción de la Newsletter Didáctica (10 min)</h4>
              <p>Adapta el mensaje a un correo personal y cercano invitando a tu lista a reflexionar y acceder a tu curso oficial.</p>
            </div>
          </div>
        </div>

        <div class="box-info">
          <div class="box-info-title">Entregable Final del Proyecto 3</div>
          <p>Una carpeta con los 3 archivos de texto listos y las láminas exportadas en PNG, cubriendo la presencia digital de una semana completa con una sola sesión de trabajo.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 07",
      category: "PROYECTO 4: MASTERCLASS",
      title: "Proyecto 4: Presentación Didáctica para Masterclass",
      subtitle: "Cómo armar las diapositivas y el guion de orador para una clase en video memorable.",
      content: `
        <p><strong>Objetivo del Proyecto:</strong> Diseñar el material de apoyo visual y el guion de orador para una masterclass en video de 30 a 45 minutos de duración.</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>Estructuración de los 4 Bloques Temáticos (20 min con IA)</h4>
              <p>Bloque 1: Apertura y el Gran Problema &nbsp;|&nbsp; Bloque 2: La Nueva Oportunidad &nbsp;|&nbsp; Bloque 3: El Método Paso a Paso &nbsp;|&nbsp; Bloque 4: La Invitación a Profundizar.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>Redacción de Diapositivas Minimalistas (30 min con IA)</h4>
              <p>Pide a la IA que genere el texto para 15 diapositivas (16:9). Regla estricta: máximo 1 idea central y 3 viñetas breves por lámina. Nada de bloques de texto ilegibles.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Generación de Iconos e Ilustraciones de Soporte (20 min)</h4>
              <p>Crea con IA 4 o 5 ilustraciones vectoriales con fondo transparente para acompañar las diapositivas clave y reforzar la retención visual.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <h4>Redacción de las Notas del Presentador (20 min)</h4>
              <p>Genera viñetas de locución para que el orador sepa exactamente qué anécdota o ejemplo mencionar en cada diapositiva sin tener que leer la pantalla.</p>
            </div>
          </div>
        </div>

        <div class="box-success">
          <div class="box-success-title">Impacto en la Grabación</div>
          <p>Al contar con diapositivas limpias y notas claras, grabarás tu masterclass en una sola toma, sin tartamudear ni cometer errores que requieran horas de edición.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 08",
      category: "PROYECTO 5: CURSO PRO",
      title: "Proyecto 5: El Mini-Curso Modular en Área de Miembros",
      subtitle: "El proyecto cumbre: ensamblar una experiencia educativa completa como AI Business System.",
      content: `
        <p><strong>Objetivo del Proyecto:</strong> Diseñar la estructura curricular completa, guiones y materiales de un curso de 4 módulos (8 clases en total) alojado en una plataforma web profesional.</p>

        <table>
          <thead>
            <tr>
              <th style="width: 25%;">Fase del Proyecto</th>
              <th style="width: 45%;">Actividades a Ejecutar con Asistencia de IA</th>
              <th style="width: 30%;">Entregable Tangible</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Diseño Curricular</strong></td>
              <td>Definición de los 4 módulos, 8 clases, títulos, duraciones y promesas pedagógicas.</td>
              <td>Índice Curricular 4x2</td>
            </tr>
            <tr>
              <td><strong>2. Guionizado de Clases</strong></td>
              <td>Redacción de los 8 esquemas de grabación de 12 minutos con sus demostraciones en pantalla.</td>
              <td>Cuaderno de Guiones de Grabación</td>
            </tr>
            <tr>
              <td><strong>3. Producción de PDFs</strong></td>
              <td>Generación de los 8 documentos didácticos de 15 páginas vinculados a cada clase.</td>
              <td>Colección Oficial de 8 PDFs</td>
            </tr>
            <tr>
              <td><strong>4. Montaje en Plataforma</strong></td>
              <td>Configuración de la barra lateral, reproductor de video y botones de descarga de materiales.</td>
              <td>Área de Miembros Operativa</td>
            </tr>
          </tbody>
        </table>

        <div class="box-info">
          <div class="box-info-title">La Cúspide de la Formación</div>
          <p>Este quinto proyecto es el reflejo exacto de la plataforma <strong>AI Business System</strong> en la que te encuentras: una máquina de aprendizaje premium, fluida y de valor incuestionable.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 09",
      category: "MATRIZ DE COMBINACIÓN",
      title: "El Ecosistema Integrado de Monetización",
      subtitle: "Cómo encajan los 5 proyectos para formar una escalera de valor comercial completa.",
      content: `
        <p>Observa cómo los cinco proyectos que acabas de diseñar se articulan en un embudo comercial coherente:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">E1</div>
            <div class="step-text">
              <h4>Nivel 1: El Tráfico Orgánico (Proyecto 3: Set Multicanal)</h4>
              <p>Tus reels, carruseles y newsletters atraen a miles de personas interesadas en tu especialidad sin gastar en anuncios publicitarios.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">E2</div>
            <div class="step-text">
              <h4>Nivel 2: El Imán de Suscriptores (Proyecto 1: Guía Digital en PDF)</h4>
              <p>Entregas una guía gratuita de 15 páginas a cambio del correo electrónico de los visitantes para construir tu propia base de datos.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">E3</div>
            <div class="step-text">
              <h4>Nivel 3: El Producto de Entrada (Proyecto 2: Kit Operativo a $19)</h4>
              <p>Ofreces tu kit de plantillas a un precio simbólico en la página de gracias. Quien paga $19 demuestra confianza y capacidad de compra.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">E4</div>
            <div class="step-text">
              <h4>Nivel 4: El Evento Educativo (Proyecto 4: Masterclass en Video)</h4>
              <p>Impartes una masterclass magistral de 45 minutos que resuelve un gran dilema y presenta tu oferta insignia.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">E5</div>
            <div class="step-text">
              <h4>Nivel 5: El Producto Nuclear (Proyecto 5: Curso Modular a $97-$197)</h4>
              <p>El programa formativo completo en tu área de miembros con los 12 videos y sus PDFs complementarios oficiales.</p>
            </div>
          </div>
        </div>

        <div class="box-success">
          <div class="box-success-title">La Belleza del Sistema</div>
          <p>No tienes que inventar 5 temas distintos. Todo este embudo se construye alrededor de <strong>una única idea central</strong>, ramificada en diferentes niveles de compromiso y profundidad.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 10",
      category: "PREVENCIÓN DE ERRORES",
      title: "Las 4 Trampas que Te Impedirán Concluir tus Proyectos",
      subtitle: "Los bloqueos psicológicos más comunes del creador y cómo destruirlos hoy mismo.",
      content: `
        <p>Identifica y desactiva de inmediato estos cuatro enemigos de la finalización de proyectos:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>El Perfeccionismo Paralizante</h4>
              <p>Retener un PDF durante 3 meses cambiando el tono de morado de la portada. Hecho es infinitamente mejor que perfecto. Lanza la versión 1.0; siempre podrás actualizarla en la versión 1.1 con feedback real.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>El Síndrome del Impostor ("¿Quién soy yo para enseñar esto?")</h4>
              <p>Creer que necesitas 3 doctorados para crear un producto digital. Solo necesitas estar dos pasos por delante de la persona a la que ayudas. Tu experiencia reciente sorteando los mismos obstáculos es más valiosa que una enciclopedia.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Empezar los 5 Proyectos al Mismo Tiempo</h4>
              <p>Abrir 5 carpetas y avanzar un 10% en cada una. Esto genera fatiga y cero entregables concluidos. Elige un solo proyecto (recomendamos el Proyecto 1) y no toques el siguiente hasta haberlo terminado al 100%.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <h4>Subestimar el Poder del Material Escrito</h4>
              <p>Pensar que la gente solo quiere videos. El 70% de los profesionales prefieren leer y consultar un PDF estructurado de 15 páginas antes que pasar 40 minutos buscando un fragmento en un video largo.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 11",
      category: "CONTROL DE CALIDAD",
      title: "Checklist de Cierre y Aprobación de Proyectos",
      subtitle: "Criterios de auditoría para declarar oficialmente listo cualquiera de los 5 proyectos.",
      content: `
        <p>Antes de publicar o comercializar cualquier proyecto terminado, comprueba estos 6 puntos:</p>

        <div class="checklist-box">
          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>1. Promesa Específica y Medible</strong>
              <p>¿Queda absolutamente claro qué dolor resuelve este proyecto y qué beneficio inmediato obtiene quien lo consume?</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>2. Calidad Editorial de Primer Nivel</strong>
              <p>¿Se ha revisado con IA para eliminar erratas, frases vacías y construcciones gramaticales pesadas?</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>3. Empaque Visual Profesional</strong>
              <p>¿Dispone de una portada limpia, colores de marca coherentes y un mockup 3D que tangibilice el producto?</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>4. Funcionalidad Técnica Verificada</strong>
              <p>¿Todos los botones, enlaces de descarga y archivos duplicables funcionan a la primera en modo incógnito?</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>5. Densidad Práctica y Cero Relleno</strong>
              <p>¿Contiene ejercicios, plantillas o pasos operativos que obliguen al usuario a actuar de inmediato?</p>
            </div>
          </div>

          <div class="check-item">
            <div class="check-box-square"></div>
            <div class="check-content">
              <strong>6. Canal de Contacto y Soporte</strong>
              <p>¿Incluye una vía de comunicación visible para que el alumno pueda enviar dudas o compartir su testimonio?</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 12",
      category: "TALLER DE APLICACIÓN",
      title: "Tu Plan de Ejecución en 7 Días",
      subtitle: "Calendario de acción paso a paso para completar tu primer proyecto esta misma semana.",
      content: `
        <p>Sigue este cronograma diario para tener tu primer producto digital 100% terminado en 7 días:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">D1</div>
            <div class="step-text">
              <h4>Día 1: Elección de Proyecto y UVP</h4>
              <p>Elige el <strong>Proyecto 1 (Guía en PDF)</strong> o el <strong>Proyecto 2 (Kit de Plantillas)</strong>. Redacta la Propuesta de Valor Única y define a tu comprador ideal.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">D2</div>
            <div class="step-text">
              <h4>Día 2: Estructura Modular con IA</h4>
              <p>Aplica el Mega-Prompt maestro y valida el índice de 4 capítulos con sus ejercicios correspondientes.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">D3</div>
            <div class="step-text">
              <h4>Día 3: Redacción del Contenido Nuclear</h4>
              <p>Redacta los capítulos con el método C.R.E.A. Inyecta tus anécdotas personales y elimina los clichés.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">D4</div>
            <div class="step-text">
              <h4>Día 4: Diseño Gráfico y Portada</h4>
              <p>Genera la imagen en Midjourney, maqueta la portada en Canva y crea el mockup en 3D de la tablet.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">D5</div>
            <div class="step-text">
              <h4>Día 5: Auditoría y Verificación</h4>
              <p>Pasa el texto por el auditor ortotipográfico de IA y realiza la prueba de navegación en modo incógnito.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">D6</div>
            <div class="step-text">
              <h4>Día 6: Configuración de Entrega y Enlaces</h4>
              <p>Sube el PDF a tu plataforma, configura el botón de descarga y realiza una compra de prueba.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">D7</div>
            <div class="step-text">
              <h4>Día 7: Lanzamiento y Primeros Alumnos</h4>
              <p>Publica el post de anuncio en tus redes y envía el email a tus contactos. ¡Tu producto está vivo!</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 13",
      category: "RESUMEN EJECUTIVO",
      title: "El Manifiesto del AI Business System",
      subtitle: "Diez convicciones innegociables para liderar con éxito, propósito e impacto duradero.",
      content: `
        <p>Lleva contigo este manifiesto durante toda tu carrera como creador independiente:</p>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>La IA es mi Palanca, no mi Sustituto</h4>
              <p>Utilizo los algoritmos para ganar velocidad y escala, pero la ética, la empatía y el criterio son 100% míos.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>El Conocimiento Empaquetado Transforma Vidas</h4>
              <p>Mi experiencia puede ahorrar años de sufrimiento a otra persona; compartirla con rigor es un acto de servicio.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>La Calidad es Innegociable</h4>
              <p>Nunca entrego un producto que no supere el 100% de mis propios estándares de excelencia y revisión.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <h4>La Simplicidad Vence a la Complejidad</h4>
              <p>La sofisticación verdadera consiste en hacer que lo difícil parezca fácil y alcanzable para el alumno novato.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">5</div>
            <div class="step-text">
              <h4>La Ejecución Continua es el Único Secreto</h4>
              <p>Los creadores exitosos no son los más inteligentes, sino aquellos que publican, aprenden y nunca se detienen.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 14",
      category: "CUADERNO DE TRABAJO",
      title: "Compromiso Formal de Graduación del Creador",
      subtitle: "Acta de compromiso personal para iniciar tu trayectoria profesional.",
      content: `
        <p>Rellena y firma este compromiso formal al concluir el programa formativo:</p>

        <div class="notes-area">
          <h4 style="color: #0f172a; margin-bottom: 4px;">Yo, (Nombre Completo del Creador):</h4>
          <div class="line-rule"></div>
        </div>

        <div class="notes-area">
          <h4 style="color: #0f172a; margin-bottom: 4px;">Me comprometo solemnemente a completar y lanzar mi primer proyecto titulado:</h4>
          <div class="line-rule"></div>
        </div>

        <div class="notes-area">
          <h4 style="color: #0f172a; margin-bottom: 4px;">En la fecha límite inaplazable de:</h4>
          <div class="line-rule"></div>
        </div>

        <div class="notes-area">
          <h4 style="color: #0f172a; margin-bottom: 4px;">Firma del Alumno Graduado y Sello AI Business System:</h4>
          <div class="line-rule"></div>
        </div>
      `
    },
    {
      badge: "PÁGINA 15",
      category: "GRADUACIÓN OFICIAL",
      title: "¡Graduación Oficial AI Business System!",
      subtitle: "Has completado la totalidad de los 5 módulos formativos y las 2 masterclasses de bónus.",
      content: `
        <p>¡ENHORABUENA! Has alcanzado la meta. Has recorrido con determinación las 12 clases del programa <strong>AI Business System</strong> y dispones de la biblioteca completa de <strong>12 materiales didácticos descargables</strong> (más de 180 páginas de formación técnica de alto nivel).</p>

        <div class="box-success" style="padding: 18px;">
          <div class="box-success-title" style="font-size: 14px; margin-bottom: 8px;">★ CERTIFICADO DE FINALIZACIÓN PEDAGÓGICA ★</div>
          <p style="font-size: 13px; line-height: 1.6;">
            Se hace constar que el portador de este documento ha completado satisfactoriamente los planes de estudio en <em>Fundamentos de IA, Generación de Contenido, Dirección de Arte Visual, Arquitectura de Productos Digitales y Estrategias de Lanzamiento</em> de <strong>AI Business System</strong>.
          </p>
        </div>

        <div class="steps-list" style="margin-top: 20px;">
          <div class="step-item">
            <div class="step-number">★</div>
            <div class="step-text">
              <h4>El 100% de tu Formación está Completo</h4>
              <p>Tienes a tu disposición todos los videos y materiales en PDF listos para repasar en tu área de miembros en cualquier momento.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">🚀</div>
            <div class="step-text">
              <h4>Ahora Te Toca a Ti</h4>
              <p>Abre tus herramientas, confía en tu criterio y comienza a construir el producto digital que cambiará tu trayectoria profesional.</p>
            </div>
          </div>
        </div>

        <div class="box-info" style="margin-top: 20px;">
          <div class="box-info-title">Comunidad Permanente de Graduados</div>
          <p>Sigues contando con todo nuestro respaldo en la comunidad. ¡El futuro pertenece a quienes crean con inteligencia!</p>
        </div>
      `
    }
  ]
};

module.exports = { bonus_c1, bonus_c2 };

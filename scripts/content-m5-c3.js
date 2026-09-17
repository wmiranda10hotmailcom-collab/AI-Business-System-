// scripts/content-m5-c3.js
// Material didáctico complementario oficial para Módulo 5 — Clase 03
// Totalmente estructurado en 15 páginas didácticas verificadas

const m5_c3 = {
  moduleTitle: "Módulo 5 — Revisión, Publicación y Lanzamiento",
  lessonTitle: "Construyendo un flujo de trabajo completo con IA",
  moduleNumber: "MÓDULO 05",
  lessonNumber: "CLASE 03",
  totalPages: 15,
  pages: [
    {
      badge: "PÁGINA 02",
      category: "INTRODUCCIÓN PEDAGÓGICA",
      title: "La Orquestación Integral de Flujos de Trabajo",
      subtitle: "Cómo articular herramientas aisladas de IA en un sistema de producción continuo y predecible.",
      content: `
        <p>Durante los módulos anteriores aprendiste a investigar nichos, estructurar ofertas, redactar copys de alta conversión, crear contenidos magnéticos, documentar SOPs y atender clientes con bibliotecas inteligentes. Sin embargo, si cada una de estas tareas se ejecuta de forma inconexa, el emprendedor sigue siendo el cuello de botella físico que traslada datos manualmente de una ventana del navegador a otra.</p>
        <p>Un verdadero <strong>AI Business System</strong> no es una colección desordenada de prompts guardados en un bloc de notas; es una <em>cadena de ensamblaje digital</em> donde la salida de un proceso se convierte automáticamente en la entrada enriquecida del siguiente.</p>
        <div class="box-info">
          <div class="box-info-title">De Herramientas Aisladas a un Pipeline Autónomo</div>
          <p>La orquestación de flujos de trabajo consiste en diseñar arquitecturas donde los modelos de lenguaje, las bases de datos relacionales y los canales de comunicación colaboren en armonía. La intervención humana pasa de ser operativa a ser puramente estratégica y de control de calidad.</p>
        </div>
        <p>En este material aprenderás a conectar todas las piezas del rompecabezas para construir un flujo de trabajo completo, desde la captura del interés de un prospecto hasta la entrega del producto y la fidelización posterior.</p>
      `
    },
    {
      badge: "PÁGINA 03",
      category: "OBJETIVOS Y COMPETENCIAS",
      title: "Objetivos de Aprendizaje y Competencias Operativas",
      subtitle: "Habilidades para diseñar, integrar y supervisar cadenas de valor digitales completas.",
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
                <td><strong>Mapeo de Flujos End-to-End</strong></td>
                <td>Desglosar un ciclo de negocio complejo en etapas secuenciales lógicas y disparadores precisos.</td>
                <td>Diagrama de flujo funcional con entradas, salidas y puntos de control claramente definidos.</td>
              </tr>
              <tr>
                <td><strong>Interconexión de Sistemas</strong></td>
                <td>Vincular herramientas de captura, bases de datos y modelos de lenguaje mediante webhooks y automatizaciones.</td>
                <td>Paso de datos estructurado en formato JSON sin pérdidas de contexto ni duplicaciones.</td>
              </tr>
              <tr>
                <td><strong>Supervisión Human-in-the-Loop</strong></td>
                <td>Establecer compuertas de aprobación humana en puntos críticos de entrega o comunicación masiva.</td>
                <td>Cero envíos erróneos a clientes mediante alertas de validación previa en tiempo real.</td>
              </tr>
              <tr>
                <td><strong>Resiliencia y Fallback</strong></td>
                <td>Configurar protocolos de contingencia ante caídas de servicio de APIs o respuestas anómalas de la IA.</td>
                <td>Reintento automático y derivación a registro de errores sin interrumpir la experiencia del usuario.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="box-tip">
          <div class="box-tip-title">Criterio de Excelencia Operativa</div>
          <p>Un flujo completo exitoso debe funcionar de punta a punta en modo de prueba sin ninguna intervención manual que no haya sido explícitamente diseñada como compuerta de validación humana.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 04",
      category: "MARCO CONCEPTUAL",
      title: "Los 4 Pilares de la Arquitectura de Flujos con IA",
      subtitle: "Fundamentos teóricos para concebir procesos robustos y de alto rendimiento.",
      content: `
        <div class="card-grid">
          <div class="card">
            <div class="card-title">1. Ingesta y Disparadores (Triggers)</div>
            <div class="card-desc">Eventos externos que activan la ejecución del flujo: un formulario completado, un nuevo correo recibido, una fila agregada en Notion o una compra confirmada en la pasarela de pago.</div>
          </div>
          <div class="card">
            <div class="card-title">2. Contexto y Enriquecimiento</div>
            <div class="card-desc">Recuperación de datos previos necesarios para que la IA tome decisiones informadas: historial del cliente, perfil demográfico, directrices de marca y bases de conocimiento internas.</div>
          </div>
          <div class="card">
            <div class="card-title">3. Transformación e Inferencia</div>
            <div class="card-desc">El núcleo donde los modelos de lenguaje analizan, redactan, clasifican o toman decisiones según prompts estructurados y formatos de salida JSON estrictos.</div>
          </div>
          <div class="card">
            <div class="card-title">4. Distribución y Persistencia</div>
            <div class="card-desc">Publicación del resultado final: envío de un correo personalizado, creación de un archivo PDF, actualización de un CRM o notificación interna en Slack/WhatsApp.</div>
          </div>
        </div>
        <div class="box-warning">
          <div class="box-warning-title">La Regla de Oro del Acoplamiento Modular</div>
          <p>Cada etapa del flujo debe ser independiente. Si el paso de generación de copys falla, la base de datos debe mantener el registro intacto en estado "pendiente" para permitir un reintento limpio sin reiniciar todo el proceso.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 05",
      category: "METODOLOGÍA PASO A PASO",
      title: "Metodología F.L.U.J.O. para Construcción de Pipelines",
      subtitle: "Marco operativo de cinco pasos para diseñar e implementar flujos de negocio integrales.",
      content: `
        <div class="step-card">
          <div class="step-num">F</div>
          <div class="step-content">
            <div class="step-title">Fijar el Objetivo y los Puntos Cardinales</div>
            <div class="step-desc">Determina exactamente qué entra al flujo (input) y cuál es el resultado final esperado (output comercial medible). Si el objetivo es difuso, la automatización magnificará el desorden.</div>
          </div>
        </div>
        <div class="step-card">
          <div class="step-num">L</div>
          <div class="step-content">
            <div class="step-title">Listar los Pasos y Estados del Proceso</div>
            <div class="step-desc">Dibuja la secuencia paso por paso: Estado 0 (Captura) -> Estado 1 (Análisis IA) -> Estado 2 (Revisión Humana) -> Estado 3 (Envío) -> Estado 4 (Seguimiento).</div>
          </div>
        </div>
        <div class="step-card">
          <div class="step-num">U</div>
          <div class="step-content">
            <div class="step-title">Unir las Herramientas Adecuadas</div>
            <div class="step-desc">Selecciona el stack tecnológico mínimo viable. Utiliza plataformas no-code (Make, n8n o Zapier) para conectar tus herramientas habituales con las APIs de modelos de lenguaje.</div>
          </div>
        </div>
        <div class="step-card">
          <div class="step-num">J</div>
          <div class="step-content">
            <div class="step-title">Jerarquizar Prompts y Salidas JSON</div>
            <div class="step-desc">Asegura que cada llamada a la IA utilice Structured Outputs o formatos delimitados estrictos para que las herramientas siguientes puedan leer los campos sin errores de sintaxis.</div>
          </div>
        </div>
        <div class="step-card">
          <div class="step-num">O</div>
          <div class="step-content">
            <div class="step-title">Optimizar bajo Estrés y Desplegar</div>
            <div class="step-desc">Prueba el flujo con entradas anómalas, textos en blanco, caracteres especiales o caídas simuladas. Documenta el manual de contingencias antes de abrirlo al público real.</div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 06",
      category: "GUÍA OPERATIVA",
      title: "Configuración y Enlace de Herramientas",
      subtitle: "Parámetros técnicos para sincronizar triggers, webhooks y agentes inteligentes.",
      content: `
        <div class="data-table">
          <table>
            <thead>
              <tr>
                <th style="width: 25%;">Componente</th>
                <th style="width: 35%;">Configuración Recomendada</th>
                <th style="width: 40%;">Buenas Prácticas de Integración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Webhooks Entrantes</strong></td>
                <td>Método POST con validación de cabecera secreta (Bearer Token).</td>
                <td>Responder de inmediato con código 200 OK y procesar asíncronamente en segundo plano.</td>
              </tr>
              <tr>
                <td><strong>Conexión a LLM</strong></td>
                <td>Temperature: 0.2 a 0.5; response_format: {"type": "json_object"}.</td>
                <td>Definir siempre un esquema JSON estricto con campos requeridos y tipos de datos definidos.</td>
              </tr>
              <tr>
                <td><strong>Base de Datos Central</strong></td>
                <td>Airtable, Notion Database o PostgreSQL estructurado.</td>
                <td>Usar campos de control: "Status" (Pendiente, En Proceso, Aprobado, Error) y "Timestamp".</td>
              </tr>
              <tr>
                <td><strong>Sistema de Notificaciones</strong></td>
                <td>Mensajería directa vía Telegram Bot o canal privado de Slack.</td>
                <td>Incluir botones interactivos ("Aprobar" / "Rechazar") para agilizar la validación del creador.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="box-info">
          <div class="box-info-title">Estrategia de Idempotencia</div>
          <p>Configura tus automatizaciones para que nunca procesen el mismo evento dos veces. Comprueba si el ID único del evento ya fue registrado en la base de datos antes de disparar llamadas costosas a la API de IA.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 07",
      category: "PROMPTS Y PLANTILLAS",
      title: "Plantillas de Meta-Prompts para Nodos del Pipeline",
      subtitle: "Instrucciones de alta precisión diseñadas para orquestación entre módulos digitales.",
      content: `
        <div class="prompt-box">
          <div class="prompt-box-title">Prompt 1: Nodo Calificador de Leads y Personalización Dinámica</div>
          <p><strong>Contexto:</strong> Recibes los datos de un prospecto que descargó un lead magnet.</p>
          <p><strong>Instrucción para la IA:</strong></p>
          <code>
            Actúa como Director de Admisiones y Estratega de Ventas. Analiza los siguientes datos del lead:<br>
            - Nombre: [NOMBRE]<br>
            - Negocio / Nicho: [NICHO]<br>
            - Mayor Desafío Actual: [DESAFÍO]<br>
            - Nivel de Facturación: [RANGO]<br><br>
            Genera una respuesta en formato JSON con la siguiente estructura exacta:<br>
            {<br>
            &nbsp;&nbsp;"puntuacion_calificacion": (número del 1 al 100),<br>
            &nbsp;&nbsp;"segmento_recomendado": ("Principiante" | "Intermedio" | "VIP"),<br>
            &nbsp;&nbsp;"angulo_dolor_principal": (resumen en 1 oración),<br>
            &nbsp;&nbsp;"asunto_email_personalizado": (máximo 7 palabras, alta curiosidad),<br>
            &nbsp;&nbsp;"parrafo_apertura_personalizado": (3 líneas empáticas citando su nicho y desafío)<br>
            }
          </code>
        </div>
        <div class="prompt-box">
          <div class="prompt-box-title">Prompt 2: Nodo Auditor de Calidad Pre-Publicación</div>
          <p><strong>Instrucción para la IA:</strong></p>
          <code>
            Actúa como Editor Jefe de Calidad. Revisa el texto generado en [CONTENIDO_GENERADO] contra los siguientes 3 criterios:<br>
            1. ¿Respeta la voz de marca (cercana, rigurosa, sin clichés de IA como "en este viaje fascinante")?<br>
            2. ¿Tiene una llamada a la acción única y clara?<br>
            3. ¿La ortografía y puntuación son impecables?<br><br>
            Si cumple al 100%, devuelve {"aprobado": true, "texto_final": "..."}. Si hay objeciones, devuelve {"aprobado": false, "motivos": [...], "propuesta_corregida": "..."}.
          </code>
        </div>
      `
    },
    {
      badge: "PÁGINA 08",
      category: "ESTUDIO DE CASO REAL",
      title: "Estudio de Caso: El Embudo Autónomo de Aurora Academy",
      subtitle: "Cómo una academia de formación redujo 18 horas semanales de gestión a cero con un flujo de IA.",
      content: `
        <div class="card-grid">
          <div class="card">
            <div class="card-title">Situación Anterior (El Caos Manual)</div>
            <div class="card-desc">Aurora capturaba 40 prospectos diarios. Respondían con correos genéricos, copiaban y pegaban enlaces manualmente, tardaban 24 horas en calificar a los alumnos y perdían el 45% del interés en frío.</div>
          </div>
          <div class="card">
            <div class="card-title">El Flujo de IA Implementado</div>
            <div class="card-desc">Typeform -> Webhook -> Make -> Claude 3.5 Sonnet (análisis de perfil y redacción en 8 segundos) -> Airtable -> Enlace al Telegram del equipo -> Aprobación con 1 clic -> Resend.</div>
          </div>
        </div>
        <div class="data-table">
          <table>
            <thead>
              <tr>
                <th>Métrica de Negocio</th>
                <th>Antes del Flujo</th>
                <th>Después del Flujo con IA</th>
                <th>Impacto Comercial</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tiempo de respuesta al lead</td>
                <td>14 a 26 horas</td>
                <td>Menos de 2 minutos</td>
                <td>+320% en tasa de apertura</td>
              </tr>
              <tr>
                <td>Horas semanales de soporte</td>
                <td>18.5 horas</td>
                <td>1.2 horas (solo validación)</td>
                <td>93% de tiempo liberado</td>
              </tr>
              <tr>
                <td>Conversión de lead a llamada</td>
                <td>6.8%</td>
                <td>19.4%</td>
                <td>Casi se triplicó el cierre</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="box-tip">
          <div class="box-tip-title">Lección Clave del Caso</div>
          <p>La velocidad de respuesta personalizada en los primeros 5 minutos tras el registro multiplica exponencialmente la confianza del comprador antes de que su atención se disperse.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 09",
      category: "ECOSISTEMA TECNOLÓGICO",
      title: "Stack Recomendado de Orquestación y Automatización",
      subtitle: "Las herramientas líderes del mercado y cómo se complementan dentro de tu sistema.",
      content: `
        <div class="data-table">
          <table>
            <thead>
              <tr>
                <th style="width: 20%;">Capa Funcional</th>
                <th style="width: 25%;">Herramienta Principal</th>
                <th style="width: 25%;">Alternativa Open Source</th>
                <th style="width: 30%;">Rol en el Sistema</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Orquestador Central</strong></td>
                <td>Make (Integromat)</td>
                <td>n8n (Self-hosted)</td>
                <td>Coordina la lógica, ramas condicionales, reintentos y llamados a APIs.</td>
              </tr>
              <tr>
                <td><strong>Motor Cognitivo</strong></td>
                <td>OpenAI API / Anthropic API</td>
                <td>Ollama / DeepSeek API</td>
                <td>Ejecución de prompts, análisis de contexto, extracción de entidades y síntesis.</td>
              </tr>
              <tr>
                <td><strong>Almacén y Estado</strong></td>
                <td>Airtable / Supabase</td>
                <td>PostgreSQL / Baserow</td>
                <td>Registro centralizado de registros, historiales, estados y colas de trabajo.</td>
              </tr>
              <tr>
                <td><strong>Mensajería y Notificación</strong></td>
                <td>Telegram Bot API / Slack</td>
                <td>Discord Webhooks</td>
                <td>Panel de control en el bolsillo del creador para supervisión y aprobaciones rápidas.</td>
              </tr>
              <tr>
                <td><strong>Entrega de Correo</strong></td>
                <td>Resend / SendGrid</td>
                <td>Postal / SMTP</td>
                <td>Envío transaccional instantáneo con alta entregabilidad y rastreo de lectura.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="box-info">
          <div class="box-info-title">Costos Operativos Reales</div>
          <p>Un flujo completo orquestado con Make y APIs directas de IA suele costar menos de $15 a $30 USD mensuales para procesar miles de interacciones, en comparación con herramientas todo-en-uno que cobran cientos de dólares al mes.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 10",
      category: "ERRORES Y ANTIPATRONES",
      title: "Antipatrones Críticos en la Automatización de Flujos",
      subtitle: "Errores comunes que rompen la experiencia del cliente y cómo blindar tu sistema.",
      content: `
        <div class="data-table">
          <table>
            <thead>
              <tr>
                <th style="width: 25%;">Antipatrón</th>
                <th style="width: 40%;">Consecuencia en el Negocio</th>
                <th style="width: 35%;">Solución y Blindaje</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Automatización Ciega Sin Filtro</strong></td>
                <td>Respuestas inapropiadas o alucinaciones enviadas directamente a clientes premium.</td>
                <td>Incluir compuerta de aprobación humana (Human-in-the-Loop) para clientes de alto valor.</td>
              </tr>
              <tr>
                <td><strong>Manejo Nulo de Errores</strong></td>
                <td>Una caída temporal de la API detiene el flujo y los datos del lead se pierden para siempre.</td>
                <td>Configurar módulos de error (Error Handlers) que almacenen el registro en cola para reintentos.</td>
              </tr>
              <tr>
                <td><strong>Falta de Delimitación de Tokens</strong></td>
                <td>Costos imprevistos por prompts con bucles de texto o entradas de usuarios excesivamente largas.</td>
                <td>Trunking de entradas (límite de caracteres) y límite estricto de max_tokens en cada llamada.</td>
              </tr>
              <tr>
                <td><strong>Textos Genéricos Transparentes</strong></td>
                <td>El alumno percibe de inmediato que habla con una máquina fría y despersonalizada.</td>
                <td>Inyectar variables de contexto reales y modular la temperatura del modelo para mayor naturalidad.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="box-warning">
          <div class="box-warning-title">Principio de Transparencia Ética</div>
          <p>Nunca engañes a tu audiencia simulando que eres tú quien escribe a las 3:00 a.m. si se trata de un asistente inteligente. Valora su tiempo con respuestas instantáneas y útiles, pero mantén la autenticidad en las relaciones humanas clave.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 11",
      category: "CHECKLIST DE IMPLEMENTACIÓN",
      title: "Checklist de Puesta en Marcha del Flujo Integral",
      subtitle: "Lista de verificación técnica antes de habilitar tráfico público en tu sistema.",
      content: `
        <div class="checklist">
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div><strong>Prueba de Punta a Punta con Datos Simulados:</strong> Se completó el ciclo completo (disparador -> IA -> base de datos -> entrega) con éxito verificado.</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div><strong>Esquemas JSON Validados:</strong> Se comprobó que el modelo devuelve siempre el formato esperado sin texto adicional fuera del JSON.</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div><strong>Gestión de Excepciones y Timeouts:</strong> Si el LLM tarda más de 30 segundos, el orquestador tiene un plan de rescate configurado.</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div><strong>Notificación al Creador Operativa:</strong> Las alertas de supervisión o fallos llegan de inmediato al móvil vía Telegram o Slack.</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div><strong>Límites de Seguridad y Costes:</strong> Se establecieron cuotas máximas de gasto mensual en OpenAI/Anthropic para prevenir sorpresas.</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div><strong>Copia de Respaldo de Transacciones:</strong> Todos los datos de entrada se guardan en crudo antes de pasar por cualquier transformación.</div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 12",
      category: "TALLER PRÁCTICO",
      title: "Taller: Construcción de tu Primer Pipeline Autónomo",
      subtitle: "Ejercicio guiado para crear un flujo de calificación y onboarding en 45 minutos.",
      content: `
        <div class="step-card">
          <div class="step-num">1</div>
          <div class="step-content">
            <div class="step-title">Configura el Disparador en Make o n8n</div>
            <div class="step-desc">Crea un módulo Webhook y conéctalo al formulario de captura de tu curso o landing page. Envía una prueba para mapear las variables (Nombre, Correo, Objetivo).</div>
          </div>
        </div>
        <div class="step-card">
          <div class="step-num">2</div>
          <div class="step-content">
            <div class="step-title">Conecta el Módulo de IA con Salida Estructurada</div>
            <div class="step-desc">Añade una llamada a la API de OpenAI (gpt-4o-mini) con el Meta-Prompt de calificación. Define el system prompt con las pautas de estilo de tu academia.</div>
          </div>
        </div>
        <div class="step-card">
          <div class="step-num">3</div>
          <div class="step-content">
            <div class="step-title">Enruta con Filtro Condicional (Router)</div>
            <div class="step-desc">Ruta A (Puntaje >= 80): Envía alerta prioritaria a tu Telegram con enlace de llamada VIP. Ruta B (Puntaje < 80): Envía correo automático con material complementario introductorio.</div>
          </div>
        </div>
        <div class="step-card">
          <div class="step-num">4</div>
          <div class="step-content">
            <div class="step-title">Prueba en Vivo y Activa el Modo Programado</div>
            <div class="step-desc">Realiza 3 envíos reales con datos variados. Comprueba que las ramas se ejecuten con precisión y activa el interruptor de producción (Scheduling: Immediately).</div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 13",
      category: "MANDAMIENTOS DE LA AUTOMATIZACIÓN",
      title: "Los 10 Mandamientos de los Flujos de Negocio con IA",
      subtitle: "Reglas innegociables para mantener sistemas estables, seguros y rentables.",
      content: `
        <div class="card-grid">
          <div class="card">
            <div class="card-title">1. No automatices el caos</div>
            <div class="card-desc">Si el proceso manual no funciona con claridad, automatizarlo solo multiplicará los errores a la velocidad de la luz.</div>
          </div>
          <div class="card">
            <div class="card-title">2. El humano siempre tiene el volante</div>
            <div class="card-desc">Diseña siempre una palanca de desconexión rápida y un canal de intervención manual directa.</div>
          </div>
          <div class="card">
            <div class="card-title">3. Guarda los datos en crudo</div>
            <div class="card-desc">Nunca sobreescribas el input original del usuario; almacena siempre la entrada bruta antes de procesarla.</div>
          </div>
          <div class="card">
            <div class="card-title">4. Respeta la privacidad del alumno</div>
            <div class="card-desc">No envíes datos bancarios, contraseñas o información médica sensible en prompts a modelos públicos.</div>
          </div>
          <div class="card">
            <div class="card-title">5. Diseña para la falla</div>
            <div class="card-desc">Asume que las APIs se caerán ocasionalmente. Construye caminos alternativos de gracia (graceful degradation).</div>
          </div>
          <div class="card">
            <div class="card-title">6. Mide el retorno de inversión</div>
            <div class="card-desc">Calcula el tiempo humano ahorrado frente al costo de suscripciones y tokens para validar la rentabilidad.</div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 14",
      category: "CUADERNO DE TRABAJO",
      title: "Cuaderno de Trabajo: Arquitectura de tu Pipeline",
      subtitle: "Plantilla de diseño operativo para documentar y desplegar tu sistema digital.",
      content: `
        <div class="box-info">
          <div class="box-info-title">Ficha Técnica de tu Flujo Integral</div>
          <p>Completa estos apartados antes de comenzar a construir tus nodos en la plataforma de automatización:</p>
        </div>
        <div class="data-table">
          <table>
            <thead>
              <tr>
                <th style="width: 30%;">Variable del Flujo</th>
                <th style="width: 70%;">Definición de tu Negocio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Nombre del Pipeline</strong></td>
                <td><em>Ej: Captura, Calificación y Onboarding de Alumnos AI Creator</em></td>
              </tr>
              <tr>
                <td><strong>Disparador Principal</strong></td>
                <td><em>Ej: Formulario de inscripción completado en la página de inicio</em></td>
              </tr>
              <tr>
                <td><strong>Datos Capturados (Input)</strong></td>
                <td><em>Ej: Nombre, Email, Nivel técnico, Objetivos comerciales, Presupuesto</em></td>
              </tr>
              <tr>
                <td><strong>Misión del Modelo IA</strong></td>
                <td><em>Ej: Analizar respuestas, determinar track de estudio y redactar plan sugerido</em></td>
              </tr>
              <tr>
                <td><strong>Entregables Generados (Output)</strong></td>
                <td><em>Ej: Email de bienvenida ultra personalizado + Registro actualizado en CRM</em></td>
              </tr>
              <tr>
                <td><strong>Punto de Control Humano</strong></td>
                <td><em>Ej: Aprobación previa solo si el alumno solicita atención personalizada 1 a 1</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      badge: "PÁGINA 15",
      category: "CIERRE Y PRÓXIMOS PASOS",
      title: "Cierre Metodológico y Glosario de Orquestación",
      subtitle: "Consolidación conceptual para operar un negocio digital completamente sistematizado.",
      content: `
        <div class="box-tip">
          <div class="box-tip-title">¡Has completado el núcleo formativo del Módulo 5!</div>
          <p>Con este flujo integral construido, tu negocio digital deja de depender de tu esfuerzo físico constante. Tienes ahora la maquinaria para capturar, procesar, educar y deleitar a tus clientes de manera predecible, elegante y escalable.</p>
        </div>
        <div class="card-grid">
          <div class="card">
            <div class="card-title">Webhook</div>
            <div class="card-desc">Mecanismo de comunicación en tiempo real que envía una notificación inmediata a otra aplicación cuando ocurre un evento específico.</div>
          </div>
          <div class="card">
            <div class="card-title">Payload JSON</div>
            <div class="card-desc">Estructura organizada de datos basada en pares de clave y valor utilizada para transportar información entre sistemas.</div>
          </div>
          <div class="card">
            <div class="card-title">Human-in-the-Loop</div>
            <div class="card-desc">Patrón arquitectónico donde un ser humano interviene para validar, corregir o aprobar una acción generada por IA antes de su ejecución final.</div>
          </div>
          <div class="card">
            <div class="card-title">Idempotencia</div>
            <div class="card-desc">Propiedad de una operación de ejecutarse múltiples veces consecutivas sin cambiar el resultado más allá de la primera llamada.</div>
          </div>
        </div>
      `
    }
  ]
};

module.exports = { m5_c3 };

// scripts/content-m2-c3.js
// Material didáctico complementario oficial para Módulo 2 — Clase 03
// Totalmente estructurado en 15 páginas didácticas verificadas

const m2_c3 = {
  moduleTitle: "Módulo 2 — Generación de Contenido e Imágenes",
  lessonTitle: "Creando una campaña de contenido con IA",
  moduleNumber: "MÓDULO 02",
  lessonNumber: "CLASE 03",
  totalPages: 15,
  pages: [
    {
      badge: "PÁGINA 02",
      category: "INTRODUCCIÓN PEDAGÓGICA",
      title: "De la Publicación Aislada a la Campaña Sincronizada",
      subtitle: "Cómo construir una narrativa estratégica que transforme lectores curiosos en clientes fieles.",
      content: `
        <p>La mayoría de creadores digitales sufren del fenómeno del <em>esfuerzo discontinuo</em>: publican un post suelto el lunes, un video aislado el jueves y una historia improvisada el fin de semana. Aunque el contenido individual sea aceptable, la falta de una narrativa articulada impide generar autoridad acumulativa ni tracción comercial real.</p>
        <p>Una <strong>campaña de contenido</strong> es una secuencia premeditada de mensajes complementarios diseñados para guiar la atención de una audiencia a través de un viaje psicológico de descubrimiento, convicción y toma de acción.</p>
        <div class="box-info">
          <div class="box-info-title">El Rol de la IA en la Creación de Campañas</div>
          <p>La inteligencia artificial permite acelerar la planificación y producción de una campaña en un 70%, permitiéndote redactar una matriz de 12 a 18 piezas editoriales coherentes a partir de una única idea nuclear en una sola tarde.</p>
        </div>
        <p>En esta guía dominarás el <strong>Modelo de las 3 Olas Editoriales</strong> y la formulación de prompts maestros para desplegar campañas que generen impacto duradero.</p>
      `
    },
    {
      badge: "PÁGINA 03",
      category: "OBJETIVOS Y COMPETENCIAS",
      title: "Competencias Estratégicas y Resultados Esperados",
      subtitle: "Habilidades para concebir, redactar y coordinar campañas de contenido multicanal.",
      content: `
        <p>Al finalizar el estudio de este material didáctico, serás capaz de dominar las siguientes áreas clave:</p>
        <div class="data-table">
          <table>
            <thead>
              <tr>
                <th style="width: 25%;">Área de Enfoque</th>
                <th style="width: 45%;">Habilidad Práctica Adquirida</th>
                <th style="width: 30%;">Indicador de Desempeño</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Diseño del Embudo</strong></td>
                <td>Estructuración de piezas editoriales en fases progresivas (Atracción, Valor y Decisión).</td>
                <td>Coherencia narrativa del 100% entre la primera publicación y el llamado a la acción final.</td>
              </tr>
              <tr>
                <td><strong>Matriz Multicanal</strong></td>
                <td>Derivación coordinada de mensajes para LinkedIn, newsletters, videos cortos e Instagram.</td>
                <td>Producción de 12 piezas editoriales listas para programar en menos de 3 horas.</td>
              </tr>
              <tr>
                <td><strong>Ingeniería de Ángulos</strong></td>
                <td>Generación de ganchos (hooks) emocionales, técnicos y de contraste con apoyo de IA.</td>
                <td>Incremento de retención inicial en publicaciones superior al 30%.</td>
              </tr>
              <tr>
                <td><strong>Control de Frecuencia</strong></td>
                <td>Establecimiento de cadencias de publicación sin saturar a tu comunidad.</td>
                <td>Ritmo sostenible de distribución planificada sin burnout creativo.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="box-success">
          <div class="box-success-title">Meta Central</div>
          <p>Reemplazar la improvisación diaria por un sistema de campañas quincenales o mensuales predecibles y de alto valor percibido.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 04",
      category: "MARCO CONCEPTUAL",
      title: "El Modelo de las 3 Olas Editoriales",
      subtitle: "La arquitectura psicológica detrás de toda campaña exitosa en medios digitales.",
      content: `
        <p>Toda campaña con tracción se divide en tres olas que respetan el estado mental del usuario:</p>
        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">01</div>
            <div class="step-text">
              <h4>Ola 1: Conciencia y Despertar (Hook & Problem Awareness)</h4>
              <p>El objetivo es romper el scroll y visibilizar un problema latente que la audiencia sufre pero no ha formulado con claridad. Piezas cortas, preguntas punzantes y estadísticas contraintuitivas que capturan la atención inicial.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">02</div>
            <div class="step-text">
              <h4>Ola 2: Demostración y Valor Práctico (Framework & Authority)</h4>
              <p>Aquí entregas la solución metodológica: guías paso a paso, desgloses conceptuales, plantillas y estudios de caso. Es la fase donde el lector piensa: <em>"Esta persona realmente domina su materia"</em>.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">03</div>
            <div class="step-text">
              <h4>Ola 3: Decisión y Conversión (Urgency & Next Step)</h4>
              <p>El llamado explícito: invitar a descargar un recurso, inscribirse en un webinar o acceder a un producto digital. La propuesta se siente natural porque ya está fundamentada en el valor previo entregado.</p>
            </div>
          </div>
        </div>
        <div class="box-warning">
          <div class="box-warning-title">La Regla de Proporción 70/20/10</div>
          <p>En una campaña equilibrada, el 70% del esfuerzo se dedica a educar y aportar valor (Olas 1 y 2), el 20% a interacción comunitaria y solo el 10% a venta directa (Ola 3).</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 05",
      category: "METODOLOGÍA DE TRABAJO",
      title: "El Sistema 3x3 de Despliegue Editorial",
      subtitle: "Cómo multiplicar una idea matriz en 9 entregables multiformato con IA.",
      content: `
        <p>El <strong>Sistema 3x3</strong> establece una fórmula matemática para exprimir al máximo cada temática de campaña:</p>
        <div class="data-table">
          <table>
            <thead>
              <tr>
                <th style="width: 25%;">Pilar Temático</th>
                <th style="width: 35%;">Mensaje Nuclear</th>
                <th style="width: 40%;">Formatos Derivados Asistidos por IA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Mensaje A (El Error)</strong></td>
                <td>El mayor obstáculo que comete la audiencia al intentar resolver el problema.</td>
                <td>(1) Carrusel de 6 láminas en PDF + (2) Tweet-storm o post corto de reflexión + (3) Guion para Reel/Short.</td>
              </tr>
              <tr>
                <td><strong>Mensaje B (El Método)</strong></td>
                <td>La solución estructurada paso a paso utilizando un marco o metodología propia.</td>
                <td>(1) Newsletter técnica detallada + (2) Infografía o diagrama conceptual + (3) Caso de estudio real.</td>
              </tr>
              <tr>
                <td><strong>Mensaje C (La Aplicación)</strong></td>
                <td>Cómo poner en práctica la solución de inmediato con una plantilla o checklist.</td>
                <td>(1) Post con recurso descargable + (2) Sesión de preguntas y respuestas + (3) Oferta de solución avanzada.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Con este sistema nunca te faltan ideas: a partir de 1 tema principal generas 9 piezas complementarias que cubren 2 semanas completas de calendario editorial.</p>
      `
    },
    {
      badge: "PÁGINA 06",
      category: "GUÍA OPERATIVA",
      title: "Hoja de Ruta Operativa: De la Idea al Calendario",
      subtitle: "Secuencia práctica de 4 fases para estructurar tu campaña en una sola sesión de trabajo.",
      content: `
        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <h4>Fase 1: Redacción del Brief Matriz (30 min)</h4>
              <p>Define en un párrafo: ¿Cuál es la transformación central que queremos comunicar? ¿Cuál es el producto o acción final deseada? ¿Qué objeciones comunes debemos derribar?</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <h4>Fase 2: Generación del Árbol de Ángulos con IA (30 min)</h4>
              <p>Alimenta tu LLM con el brief y solicita 10 ángulos de ataque clasificados por las 3 Olas (Conciencia, Valor y Acción). Selecciona los 3 más potentes.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <h4>Fase 3: Redacción por Lotes (Batch Writing) (60 min)</h4>
              <p>Aplica los prompts maestros de formateo para producir primero todos los posts cortos, después los artículos largos y finalmente los textos de llamado a la acción.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <h4>Fase 4: Programación y Chequeo de Enlaces (30 min)</h4>
              <p>Carga el material en tu gestor de publicaciones, programa fechas y horas óptimas y verifica que los enlaces a recursos descargables funcionen con fluidez.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 07",
      category: "INGENIERÍA DE PROMPTS",
      title: "Prompt Maestro: Creador de Campañas Integrales",
      subtitle: "Instrucción de alta fidelidad para generar el calendario editorial completo de tu campaña.",
      content: `
        <p>Copia y adapta este mega-prompt en tu modelo de lenguaje de preferencia:</p>
        <div class="prompt-box">
          <div class="prompt-header">
            <span class="prompt-title">Prompt Maestro: Arquitecto de Campañas Multicanal</span>
            <span class="prompt-tag">SISTEMA EDITORIAL</span>
          </div>
          <div class="prompt-content">
            <code>Actúa como un estratega de marketing de contenidos y copywriter de respuesta directa senior en AI Business System.

DATOS DE LA CAMPAÑA:
- Tema Nuclear: [ej: Creación de manuales de procesos con IA para agencias].
- Público Objetivo: [ej: Dueños de pequeños negocios que trabajan más de 50 horas por semana].
- Gran Promesa / Resultado: [ej: Liberar 10 horas semanales documentando tareas clave con IA].
- Acción Final / Llamado: [ej: Descargar la guía oficial en PDF y acceder a la masterclass].
- Tono: Profesional, directo, sin tecnicismos excesivos, inspirador pero basado en métodos reales.

INSTRUCCIONES DE PRODUCCIÓN:
Genera un plan de campaña de 7 días con 6 piezas de contenido coordinadas:
1. Día 1 (Ola 1 - Despertar): Post de reflexión / contraste sobre por qué trabajar más horas es el peor camino para crecer.
2. Día 2 (Ola 1 - El Error): Carrusel de 5 láminas detallando los 3 fallos al documentar tareas.
3. Día 4 (Ola 2 - El Método): Guía paso a paso con el marco de trabajo de 4 etapas para capturar procesos.
4. Día 5 (Ola 2 - Caso Real): Historia breve de antes y después con números y métricas de impacto.
5. Día 6 (Ola 3 - Solución Lista): Post con checklist descargable enlazando a la guía oficial.
6. Día 7 (Ola 3 - Último Llamado): Mensaje de cierre enfocado en el coste de inacción de no sistematizar.

Para cada pieza proporciona: Título/Hook, Texto completo listo para publicar, Sugerencia visual y Llamado a la acción (CTA).</code>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 08",
      category: "ESTUDIO DE CASO",
      title: "Campaña Real: Lanzamiento de una Guía de Automatización",
      subtitle: "Métricas de una campaña de 10 días ejecutada con el sistema asistido por IA.",
      content: `
        <p>Examinemos los resultados de una campaña coordinada de 10 días diseñada por un alumno de AI Business System:</p>
        <div class="data-table">
          <table>
            <thead>
              <tr>
                <th style="width: 35%;">Métrica Analizada</th>
                <th style="width: 30%;">Campaña Tradicional</th>
                <th style="width: 35%;">Campaña con Sistema de IA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Tiempo de planificación</strong></td>
                <td>14 días hábiles intermitentes.</td>
                <td>1 sesión intensiva de 3.5 horas.</td>
              </tr>
              <tr>
                <td><strong>Piezas producidas</strong></td>
                <td>5 publicaciones dispersas.</td>
                <td>14 piezas coordinadas en 3 canales.</td>
              </tr>
              <tr>
                <td><strong>Tasa de interacción (Engagement)</strong></td>
                <td>1.4% promedio.</td>
                <td>4.1% promedio sostenido.</td>
              </tr>
              <tr>
                <td><strong>Descargas del recurso (Leads)</strong></td>
                <td>62 descargas.</td>
                <td>284 descargas cualificadas.</td>
              </tr>
              <tr>
                <td><strong>Conversión a alumnos del curso</strong></td>
                <td>3 ventas.</td>
                <td>21 ventas directas.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="box-info">
          <div class="box-info-title">Clave del Éxito</div>
          <p>La consistencia del mensaje a lo largo de las 3 Olas generó un efecto acumulativo de convicción que una publicación aislada jamás habría logrado por sí sola.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 09",
      category: "ECOSISTEMA TÉCNICO",
      title: "Herramientas de Planificación y Difusión",
      subtitle: "Software recomendado para coordinar, maquetar y automatizar tus campañas.",
      content: `
        <p>Para gestionar tu campaña sin fricción operativa, este es el stack técnico más recomendado:</p>
        <div class="data-table">
          <table>
            <thead>
              <tr>
                <th style="width: 25%;">Función</th>
                <th style="width: 35%;">Herramienta Líder</th>
                <th style="width: 40%;">Ventaja Principal en Campañas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Calendario Editorial</strong></td>
                <td>Notion / Trello / ClickUp</td>
                <td>Visualización Kanban y calendario para arrastrar piezas según las 3 Olas.</td>
              </tr>
              <tr>
                <td><strong>Programación Multicanal</strong></td>
                <td>Buffer / Metricool / Publer</td>
                <td>Distribución automática en LinkedIn, X, Instagram y Facebook con previsualización.</td>
              </tr>
              <tr>
                <td><strong>Maquetación de Carruseles</strong></td>
                <td>Canva Pro / Figma</td>
                <td>Plantillas predefinidas para pegar textos generados en menos de 10 minutos.</td>
              </tr>
              <tr>
                <td><strong>Monitoreo de Métricas</strong></td>
                <td>Google Analytics + Panel de Métricas</td>
                <td>Rastreo de clics mediante enlaces UTM para saber exactamente qué post generó cada descarga.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      badge: "PÁGINA 10",
      category: "PREVENCIÓN DE ERRORES",
      title: "Los 4 Errores que Hunden una Campaña",
      subtitle: "Patrones negativos que provocan fatiga en la audiencia y reducen tus conversiones.",
      content: `
        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">!</div>
            <div class="step-text">
              <h4>Error 1: Vender desde el Minuto Cero (Saltarse la Ola 1 y 2)</h4>
              <p>Pedir compras o suscripciones a personas que aún no han recibido valor tangible genera rechazo inmediato. Invierte siempre primero en educar y demostrar.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">!</div>
            <div class="step-text">
              <h4>Error 2: Incoherencia de Tono entre Formatos</h4>
              <p>Sonar formal y solemne en un artículo y frívolo o exagerado en un video corto. Mantén una misma personalidad de marca en todos los canales.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">!</div>
            <div class="step-text">
              <h4>Error 3: Desalineación entre el Post y la Página de Destino</h4>
              <p>Prometer una cosa en la publicación y ofrecer algo distinto en la página de descarga. La promesa del gancho debe coincidir exactamente con el título del recurso.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">!</div>
            <div class="step-text">
              <h4>Error 4: Ausencia de Retargeting de Mensajes</h4>
              <p>Asumir que todos tus seguidores leyeron tu post del martes. En redes sociales solo el 5-10% ve cada publicación; debes insistir en la idea con diferentes ángulos.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 11",
      category: "CONTROL DE CALIDAD",
      title: "Checklist de Auditoría de Campaña",
      subtitle: "Verifica estos 7 puntos críticos antes de activar la primera publicación.",
      content: `
        <div class="checklist">
          <div class="check-item">
            <div class="check-box">✓</div>
            <div class="check-text">
              <strong>1. Objetivo Único y Medible</strong>
              <p>La campaña tiene una sola meta prioritaria (ej: conseguir 100 descargas del PDF o 20 alumnos).</p>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box">✓</div>
            <div class="check-text">
              <strong>2. Secuencia de Olas Respaldada</strong>
              <p>Existe al menos 1 pieza de Conciencia y 2 piezas de Valor antes del primer llamado a la acción comercial.</p>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box">✓</div>
            <div class="check-text">
              <strong>3. Enlaces UTM Configurados</strong>
              <p>Todos los enlaces tienen etiquetas de seguimiento para medir el origen de cada visita.</p>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box">✓</div>
            <div class="check-text">
              <strong>4. Recursos de Entrega Verificados</strong>
              <p>El PDF descargable o material prometido está alojado correctamente y se descarga sin errores.</p>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box">✓</div>
            <div class="check-text">
              <strong>5. Diseño Gráfico Armónico</strong>
              <p>Las portadas, carruseles y miniaturas utilizan la misma paleta cromática y fuentes tipográficas.</p>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box">✓</div>
            <div class="check-text">
              <strong>6. Revisión Ortotipográfica Exhaustiva</strong>
              <p>Todos los textos han pasado el filtro de corrección sin errores ortográficos ni gramaticales.</p>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box">✓</div>
            <div class="check-text">
              <strong>7. Plan de Interacción Activo</strong>
              <p>Se tiene reservado tiempo para responder a los comentarios en las primeras 2 horas tras publicar.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 12",
      category: "TALLER PRÁCTICO",
      title: "Ejercicios Prácticos de Producción de Campaña",
      subtitle: "Tres dinámicas paso a paso para desplegar tu primera campaña de 7 días.",
      content: `
        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">E1</div>
            <div class="step-text">
              <h4>Ejercicio 1: Definición del Gran Tema Matriz (20 min)</h4>
              <p>Elige un dolor recurrente de tu audiencia. Redacta en 3 oraciones: (a) El error que cometen, (b) La solución contraintuitiva que propones, y (c) El material complementario que les regalarás.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">E2</div>
            <div class="step-text">
              <h4>Ejercicio 2: Ejecución del Prompt Maestro (30 min)</h4>
              <p>Pega tus datos en el Prompt Maestro de la Página 07. Genera las 6 piezas. Selecciona las 3 mejores y edítalas manualmente para incorporar anécdotas o matices personales.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">E3</div>
            <div class="step-text">
              <h4>Ejercicio 3: Programación y Medición de Impacto (25 min)</h4>
              <p>Programa las publicaciones para la próxima semana. Al finalizar la campaña, anota qué pieza generó mayor interacción y cuál produjo más clics al recurso final.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 13",
      category: "RESUMEN EJECUTIVO",
      title: "Las 5 Reglas Cardinales de las Campañas con IA",
      subtitle: "Principios esenciales para no perder jamás la efectividad comunicacional.",
      content: `
        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">I</div>
            <div class="step-text">
              <h4>Un solo mensaje central, múltiples ventanas de entrada</h4>
              <p>No cambies de tema cada día. Ofrece distintos ángulos visuales y narrativos para una misma gran verdad.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">II</div>
            <div class="step-text">
              <h4>La IA redacta borradores; tu experiencia inyecta autoridad</h4>
              <p>Agrega siempre ejemplos específicos, capturas reales y testimonios que ninguna IA puede inventar.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">III</div>
            <div class="step-text">
              <h4>El hook abre la puerta; el contenido retiene la estancia</h4>
              <p>Un titular llamativo sin sustancia defrauda al lector. Asegúrate de que la promesa se cumpla con creces.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">IV</div>
            <div class="step-text">
              <h4>La fricción es el enemigo de la conversión</h4>
              <p>Haz que el paso de la publicación a la descarga sea instantáneo, limpio y sin formularios interminables.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">V</div>
            <div class="step-text">
              <h4>Mide para aprender, no para comparar</h4>
              <p>Cada campaña te indica con claridad qué temas resuenan de verdad con tu comunidad para el futuro.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 14",
      category: "CUADERNO DE TRABAJO",
      title: "Ficha de Planificación de mi Próxima Campaña",
      subtitle: "Completa este lienzo editorial para ordenar tu lanzamiento de contenidos.",
      content: `
        <div class="notes-area">
          <h4 style="color: #0f172a; margin-bottom: 6px;">1. Título y Promesa Central de la Campaña:</h4>
          <p style="font-size: 12px; color: #64748b; margin-bottom: 8px;">¿Qué cambio específico prometerá esta serie de contenidos?</p>
          <div class="line-rule"></div>
          <div class="line-rule"></div>
        </div>

        <div class="notes-area">
          <h4 style="color: #0f172a; margin-bottom: 6px;">2. Recurso Final o Llamado a la Acción (CTA):</h4>
          <p style="font-size: 12px; color: #64748b; margin-bottom: 8px;">Enlace, descargable o capacitación a la que conducirá la Ola 3:</p>
          <div class="line-rule"></div>
        </div>

        <div class="notes-area">
          <h4 style="color: #0f172a; margin-bottom: 6px;">3. Fechas de Inicio y Cierre de la Campaña:</h4>
          <p style="font-size: 12px; color: #64748b; margin-bottom: 8px;">Día 1 de lanzamiento y fecha del último mensaje:</p>
          <div class="line-rule"></div>
        </div>
      `
    },
    {
      badge: "PÁGINA 15",
      category: "PRÓXIMOS PASOS",
      title: "Culminación del Módulo 2 y Transición al Módulo 3",
      subtitle: "Has consolidado tu sistema de generación y estructuración de contenidos.",
      content: `
        <p>¡FELICITACIONES! Has completado con honores las <strong>3 Clases del Módulo 2</strong> de AI Business System. Ahora posees la capacidad de redactar textos de alto impacto, adaptar contenidos a múltiples canales y dirigir campañas de impacto real.</p>

        <div class="box-info">
          <div class="box-info-title">Bienvenido al Módulo 3: Creación Visual con IA</div>
          <p>En el siguiente módulo aprenderás a dar vida estética a tus proyectos: generación de imágenes con Midjourney y DALL-E 3, dirección de arte visual, diseño editorial de portadas y construcción de bibliotecas inteligentes de respuestas.</p>
        </div>

        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">→</div>
            <div class="step-text">
              <h4>Completa tu Registro de Aula</h4>
              <p>Regresa a la plataforma y marca la Clase 03 y este PDF como completados en tu barra de avance.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">→</div>
            <div class="step-text">
              <h4>Biblioteca de Contenidos Oficial</h4>
              <p>Tu carpeta de AI Business System acumula ya 6 manuales oficiales (90 páginas de formación técnica).</p>
            </div>
          </div>
        </div>

        <div class="box-success" style="margin-top: 24px;">
          <div class="box-success-title">Comunidad AI Business System</div>
          <p>¡Nos encontramos en el Módulo 3 para revolucionar la identidad visual de tus productos digitales!</p>
        </div>
      `
    }
  ]
};

module.exports = { m2_c3 };

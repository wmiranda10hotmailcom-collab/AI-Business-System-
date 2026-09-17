// scripts/content-m6-c2.js
// Material didáctico complementario oficial para Módulo 6 — Clase 02
// Totalmente estructurado en 15 páginas didácticas verificadas

const m6_c2 = {
  moduleTitle: "Módulo 6 — Métricas y Análisis del Negocio",
  lessonTitle: "Entendiendo margen y ROI",
  moduleNumber: "MÓDULO 06",
  lessonNumber: "CLASE 02",
  totalPages: 15,
  pages: [
    {
      badge: "PÁGINA 02",
      category: "INTRODUCCIÓN PEDAGÓGICA",
      title: "La Radiografía de la Eficiencia Empresarial",
      subtitle: "Por qué el Margen de Ganancia y el Retorno sobre la Inversión determinan si un negocio es escalable o una trampa de autoempleo.",
      content: `
        <p>Trabajar 14 horas al día, publicar contenido sin descanso y vender decenas de accesos a tus cursos o servicios puede generar una sensación engañosa de triunfo. Sin embargo, si al final del trimestre descubres que para ganar $2,000 USD tuviste que invertir $1,800 USD en anuncios, licencias y pasarelas, estás operando un negocio frágil al borde del abismo.</p>
        <p>El <strong>Margen de Ganancia</strong> y el <strong>ROI (Return on Investment)</strong> son los dos indicadores supremos que separan a los creadores aficionados de los verdaderos estrategas empresariales. Indican con exactitud matemática cuánta rentabilidad genera cada dólar que pones a trabajar y qué colchón de seguridad tienes ante imprevistos.</p>
        <div class="box-info">
          <div class="box-info-title">El Poder del Margen en Productos Digitales</div>
          <p>La mayor bendición de un infoproducto o servicio asistido por IA es que su costo marginal de reproducción roza el cero. Esto te permite aspirar a márgenes brutos superiores al 80% y márgenes netos por encima del 50%, cifras inimaginables en el comercio tradicional.</p>
        </div>
        <p>En este material aprenderás a calcular tus márgenes con precisión quirúrgica y a proyectar el ROI de tus campañas y herramientas utilizando la inteligencia artificial como copiloto analítico.</p>
      `
    },
    {
      badge: "PÁGINA 03",
      category: "OBJETIVOS Y COMPETENCIAS",
      title: "Objetivos de Aprendizaje y Competencias de Rendimiento",
      subtitle: "Habilidades para evaluar la viabilidad, proyectar retornos y tomar decisiones de inversión inteligentes.",
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
                <td><strong>Cálculo de Márgenes</strong></td>
                <td>Calcular el Margen Bruto y Margen Neto porcentual de cada producto o servicio individual.</td>
                <td>Detección precisa de qué productos subsidian a los que generan pérdidas.</td>
              </tr>
              <tr>
                <td><strong>Dominio de ROI vs. ROAS</strong></td>
                <td>Diferenciar entre el retorno directo en publicidad (ROAS) y la rentabilidad integral del negocio (ROI).</td>
                <td>Cero decisiones erróneas basadas únicamente en métricas de vanidad de Meta Ads.</td>
              </tr>
              <tr>
                <td><strong>Equilibrio LTV / CAC</strong></td>
                <td>Medir el Costo de Adquisición de Clientes frente al Valor Vitalicio generado por alumno.</td>
                <td>Ratio LTV:CAC óptimo igual o superior a 3:1 en todas las líneas de oferta.</td>
              </tr>
              <tr>
                <td><strong>Simulación Predictiva</strong></td>
                <td>Modelar escenarios de precios, descuentos y bundles utilizando prompts analíticos de IA.</td>
                <td>Conocimiento previo del impacto en margen antes de publicar cualquier promoción.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="box-tip">
          <div class="box-tip-title">Criterio Innegociable</div>
          <p>Un producto digital nunca debe comercializarse con un margen bruto inferior al 70%. Si tus costos directos superan el 30% del PVP, el modelo debe ser reestructurado de inmediato.</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 04",
      category: "MARCO CONCEPTUAL",
      title: "Margen Bruto vs. Margen Neto: Las Fórmulas Maestras",
      subtitle: "La mecánica matemática que revela la rentabilidad real de tus ofertas.",
      content: `
        <div class="card-grid">
          <div class="card">
            <div class="card-title">Margen Bruto (Gross Margin)</div>
            <div class="card-desc">
              <code>Margen Bruto = ((Ingresos - Costos Directos) / Ingresos) * 100</code><br><br>
              Indica qué porcentaje de cada venta queda disponible para pagar los gastos operativos fijos de la empresa y los sueldos. En productos digitales debe situarse entre el <strong>80% y el 95%</strong>.
            </div>
          </div>
          <div class="card">
            <div class="card-title">Margen Neto (Net Margin)</div>
            <div class="card-desc">
              <code>Margen Neto = (Ganancia Neta Limpia / Ingresos) * 100</code><br><br>
              Indica qué porcentaje de cada venta queda como beneficio puro para el negocio tras pagar absolutamente todo (COGS, OPEX, marketing e impuestos). Debe situarse entre el <strong>35% y el 60%</strong>.
            </div>
          </div>
        </div>
        <div class="data-table">
          <table>
            <thead>
              <tr>
                <th>Concepto</th>
                <th>Ejemplo de Producto A ($100 USD)</th>
                <th>Ejemplo de Producto B ($100 USD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Costos Directos (COGS)</td>
                <td>$8 USD (comisión Stripe + tokens)</td>
                <td>$35 USD (comisiones + licencias externas)</td>
              </tr>
              <tr>
                <td><strong>Margen Bruto</strong></td>
                <td><strong>92% ($92 USD)</strong></td>
                <td><strong>65% ($65 USD)</strong></td>
              </tr>
              <tr>
                <td>Gastos Operativos y Anuncios</td>
                <td>$30 USD</td>
                <td>$50 USD</td>
              </tr>
              <tr>
                <td>Impuestos Estimados (25%)</td>
                <td>$15.50 USD</td>
                <td>$3.75 USD</td>
              </tr>
              <tr>
                <td><strong>Margen Neto Final</strong></td>
                <td><strong>46.5% ($46.50 USD de beneficio)</strong></td>
                <td><strong>11.25% ($11.25 USD de beneficio)</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      badge: "PÁGINA 05",
      category: "METODOLOGÍA FINANCIERA",
      title: "Desmitificando el ROI: La Fórmula del Retorno del Capital",
      subtitle: "Cómo medir el rendimiento económico de cualquier inversión en software, tráfico o equipo.",
      content: `
        <div class="box-info">
          <div class="box-info-title">La Ecuación Universal del ROI</div>
          <p><code>ROI (%) = ((Ganancia Neta Generada - Inversión Realizada) / Inversión Realizada) * 100</code></p>
          <p>Si inviertes $1,000 USD en una campaña y esa campaña produce $3,500 USD de ganancia neta, tu ROI es: <code>(($3,500 - $1,000) / $1,000) * 100 = 250%</code>. Por cada dólar invertido, recuperas tu dólar y generas $2.50 dólares adicionales de beneficio neto.</p>
        </div>
        <div class="data-table">
          <table>
            <thead>
              <tr>
                <th style="width: 25%;">Indicador</th>
                <th style="width: 35%;">¿Qué Mide Exactamente?</th>
                <th style="width: 40%;">Riesgo de Mala Interpretación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ROAS (Return on Ad Spend)</strong></td>
                <td>Facturación bruta dividida entre el gasto publicitario. Ej: $3,000 ventas / $1,000 ads = 3.0x ROAS.</td>
                <td><strong>Peligro:</strong> No descuenta comisiones, software ni costos operativos. Un ROAS de 2.0x puede ser pérdida neta.</td>
              </tr>
              <tr>
                <td><strong>ROI Publicitario Real</strong></td>
                <td>Beneficio neto generado por los anuncios descontando todos los costos directos.</td>
                <td>Indica con certeza si la pauta pagada está enriqueciendo o desangrando a la empresa.</td>
              </tr>
              <tr>
                <td><strong>ROI de Herramientas IA</strong></td>
                <td>Horas humanas ahorradas multiplicadas por el costo por hora frente al precio del software.</td>
                <td>Demuestra que una suscripción de $30 USD que ahorra 15 horas de trabajo tiene un ROI de más del 500%.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      badge: "PÁGINA 06",
      category: "GUÍA OPERATIVA",
      title: "La Relación Dorada: CAC vs. LTV",
      subtitle: "La métrica fundamental que define si tu negocio tiene licencia para crecer de forma ilimitada.",
      content: `
        <div class="card-grid">
          <div class="card">
            <div class="card-title">CAC — Costo de Adquisición de Clientes</div>
            <div class="card-desc">
              <code>CAC = Inversión Total en Marketing y Ventas / Nuevos Clientes Captados</code><br><br>
              Si gastas $1,200 USD en anuncios y consigues 30 alumnos en el mes, tu CAC es de $40 USD por cliente.
            </div>
          </div>
          <div class="card">
            <div class="card-title">LTV — Customer Lifetime Value</div>
            <div class="card-desc">
              <code>LTV = Ticket Promedio * Frecuencia de Compra * Tiempo de Retención</code><br><br>
              Si un alumno compra tu curso inicial por $67 y el 30% compra luego un taller avanzado de $197, el LTV promedio es de $126 USD.
            </div>
          </div>
        </div>
        <div class="data-table">
          <table>
            <thead>
              <tr>
                <th>Ratio LTV : CAC</th>
                <th>Diagnóstico del Negocio</th>
                <th>Acción Estratégica Inmediata</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Menor a 1:1</strong></td>
                <td>Pérdida segura de dinero. Estás pagando más por captar al alumno de lo que él gasta contigo.</td>
                <td>Detener campañas pagadas inmediatamente. Ajustar la oferta o elevar los precios.</td>
              </tr>
              <tr>
                <td><strong>1:1 a 2:1</strong></td>
                <td>Zona de peligro. Apenas cubres los costos operativos y un pequeño bache te dejará en números rojos.</td>
                <td>Crear Order Bumps o Upsells para elevar el ticket medio sin gastar más en tráfico.</td>
              </tr>
              <tr>
                <td><strong>3:1 a 5:1</strong></td>
                <td><strong>Zona Óptima y Saludable.</strong> El negocio genera abundante flujo de caja y es altamente rentable.</td>
                <td>Acelerar la reinversión en publicidad y escalar canales de adquisición.</td>
              </tr>
              <tr>
                <td><strong>Superior a 5:1</strong></td>
                <td>Excelente margen, pero posible subinversión en crecimiento.</td>
                <td>Podrías estar creciendo mucho más rápido invirtiendo más agresivamente en marketing.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      badge: "PÁGINA 07",
      category: "PROMPTS Y SIMULADORES",
      title: "Prompts Maestros para Simulación de Rentabilidad y Precios",
      subtitle: "Herramientas de cálculo guiado para proyectar escenarios financieros con IA.",
      content: `
        <div class="prompt-box">
          <div class="prompt-box-title">Prompt 1: Simulador de Sensibilidad de Precios y Margen</div>
          <p><strong>Instrucción para la IA:</strong></p>
          <code>
            Actúa como un Economista y Consultor de Pricing para empresas digitales.<br><br>
            Tengo un nuevo producto digital formativo con los siguientes datos:<br>
            - Costo variable por alumno: $[COSTO_VARIABLE] USD<br>
            - Costos fijos mensuales que debo cubrir: $[COSTOS_FIJOS] USD<br>
            - CAC estimado actual: $[CAC_ESTIMADO] USD<br><br>
            Genera una tabla comparativa simulando 3 escenarios de precio de venta: Económico ($[P1]), Estándar ($[P2]) y Premium ($[P3]). Para cada escenario muestra:<br>
            1. Margen bruto unitario ($ y %).<br>
            2. Margen neto estimado tras CAC.<br>
            3. Punto de equilibrio (Break-even): cuántos alumnos necesito vender para cubrir los costos fijos.<br>
            4. Beneficio neto mensual estimado si vendo [NÚMERO] unidades.<br>
            5. Conclusión y recomendación estratégica argumentada.
          </code>
        </div>
        <div class="prompt-box">
          <div class="prompt-box-title">Prompt 2: Auditor de Campañas Publicitarias y ROAS Mínimo</div>
          <p><strong>Instrucción para la IA:</strong></p>
          <code>
            Calcula el 'ROAS de Punto de Equilibrio' (Break-even ROAS) para mi oferta comercial con los siguientes parámetros:<br>
            - Precio de venta al público: $[PVP]<br>
            - Costos de pasarela y entrega: $[COSTOS_ENTREGA]<br>
            - Impuestos por venta: [PORCENTAJE]%<br><br>
            Explícame cuál es el ROAS mínimo que debo exigirle a mis anuncios en Meta Ads para no perder dinero y qué ROAS debo alcanzar para obtener un ROI limpio del 100%.
          </code>
        </div>
      `
    },
    {
      badge: "PÁGINA 08",
      category: "ESTUDIO DE CASO REAL",
      title: "Estudio de Caso: La Optimización de la Academia GrowthIA",
      subtitle: "Cómo pasaron de un ROAS engañoso de 2.1x con margen asfixiante a un ROI de 380% mediante Upsells.",
      content: `
        <div class="card-grid">
          <div class="card">
            <div class="card-title">El Problema de GrowthIA</div>
            <div class="card-desc">Vendían un curso introductorio por $47 USD. Su CAC era de $22 USD. Aparentemente ganaban dinero (ROAS > 2x), pero tras comisiones, impuestos, herramientas y devoluciones, el margen neto por cliente era de apenas $4 USD. Cualquier subida en el costo por clic de Meta los ponía en pérdidas.</div>
          </div>
          <div class="card">
            <div class="card-title">La Solución Implementada</div>
            <div class="card-desc">Rediseñaron la arquitectura de monetización: añadieron un Order Bump de $27 USD (plantillas de prompts listas) y un Upsell inmediato de $97 USD (taller de casos de estudio). El 42% de los alumnos compró el bump y el 18% compró el upsell.</div>
          </div>
        </div>
        <div class="data-table">
          <table>
            <thead>
              <tr>
                <th>Métrica Operativa</th>
                <th>Antes de la Reestructuración</th>
                <th>Después de la Reestructuración</th>
                <th>Impacto Financiero</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ticket Promedio por Venta (AOV)</td>
                <td>$47.00 USD</td>
                <td>$75.80 USD</td>
                <td>+61% de ingresos sin más tráfico</td>
              </tr>
              <tr>
                <td>Costo de Adquisición (CAC)</td>
                <td>$22.00 USD</td>
                <td>$23.50 USD</td>
                <td>Prácticamente idéntico</td>
              </tr>
              <tr>
                <td>Margen Neto Limpio por Alumno</td>
                <td>$4.20 USD</td>
                <td>$32.90 USD</td>
                <td><strong>Multiplicado por 7.8x</strong></td>
              </tr>
              <tr>
                <td>ROI Global de la Campaña</td>
                <td>19%</td>
                <td><strong>140%</strong></td>
                <td>El negocio se volvió ultra rentable</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      badge: "PÁGINA 09",
      category: "ECOSISTEMA TECNOLÓGICO",
      title: "Herramientas de Atribución y Medición de Rentabilidad",
      subtitle: "Software profesional para monitorizar el rendimiento comercial en tiempo real.",
      content: `
        <div class="data-table">
          <table>
            <thead>
              <tr>
                <th style="width: 25%;">Herramienta</th>
                <th style="width: 35%;">Especialidad Analítica</th>
                <th style="width: 40%;">Aplicación Práctica para el Emprendedor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Stripe Sigma / Baremetrics</strong></td>
                <td>Analítica profunda de cohortes, LTV, churn y tasas de retención.</td>
                <td>Muestra el valor exacto generado por cada cohorte de alumnos a lo largo del tiempo.</td>
              </tr>
              <tr>
                <td><strong>Triple Whale / Hyros</strong></td>
                <td>Atribución publicitaria multicanal mediante seguimiento de primer partido.</td>
                <td>Rastrea qué anuncio exacto produjo la venta final, eliminando la duplicidad de Meta y Google.</td>
              </tr>
              <tr>
                <td><strong>Google Analytics 4 (GA4)</strong></td>
                <td>Embudo de conversión de la web y análisis de comportamiento de navegación.</td>
                <td>Identifica en qué paso del checkout o de la landing page los prospectos abandonan la compra.</td>
              </tr>
              <tr>
                <td><strong>Notion ROI Tracker</strong></td>
                <td>Panel manual de control de inversiones y retorno por iniciativa comercial.</td>
                <td>Control sencillo pero riguroso para comparar el rendimiento de diferentes canales cada semana.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="box-info">
          <div class="box-info-title">Atribución Inteligente</div>
          <p>No te fíes ciegamente de los reportes de Meta Ads Manager ni de Google Ads por separado; cada plataforma se atribuye la misma venta como propia. Cruza siempre los datos con tu procesador real de pagos (Stripe/PayPal).</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 10",
      category: "ERRORES Y ANTIPATRONES",
      title: "Los 5 Pecados Capitales del Margen y el Retorno",
      subtitle: "Errores que destruyen la viabilidad económica de productos digitales prometedores.",
      content: `
        <div class="card-grid">
          <div class="card">
            <div class="card-title">1. Confundir ROAS con Rentabilidad</div>
            <div class="card-desc">Celebrar un ROAS de 3x sin darse cuenta de que los costos operativos y de entrega consumen el 70% de la facturación, dejando una ganancia neta insignificante.</div>
          </div>
          <div class="card">
            <div class="card-title">2. La 'Guerra de Precios' Hacia Abajo</div>
            <div class="card-desc">Bajar tus precios para competir con creadores novatos. Bajar el precio a la mitad te obliga a vender cuatro veces más para mantener el mismo beneficio neto.</div>
          </div>
          <div class="card">
            <div class="card-title">3. Escalar Anuncios Sin Validar Margen</div>
            <div class="card-desc">Duplicar el presupuesto de pauta publicitaria en un producto cuyo margen unitario es inferior al 40%. A mayor volumen, mayor velocidad de sangrado de caja.</div>
          </div>
          <div class="card">
            <div class="card-title">4. Descuentos Crónicos y Agresivos</div>
            <div class="card-desc">Acostumbrar a tu audiencia a no comprar nunca a precio regular mediante promociones continuas del 50% o 70% de descuento que destruyen el valor percibido.</div>
          </div>
        </div>
        <div class="box-warning">
          <div class="box-warning-title">El Costo Brutal de los Descuentos</div>
          <p>Si tu margen neto es del 30% y aplicas un descuento del 20% al producto, no estás perdiendo el 20% de tu ganancia: ¡estás destruyendo el 66% de tu beneficio neto real!</p>
        </div>
      `
    },
    {
      badge: "PÁGINA 11",
      category: "CHECKLIST DE RENTABILIDAD",
      title: "Checklist de Viabilidad y Protección del Margen",
      subtitle: "Siete pruebas ácidas antes de lanzar una oferta o activar campañas de tráfico.",
      content: `
        <div class="checklist">
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div><strong>Margen Bruto Mínimo Asegurado:</strong> El producto retiene al menos un 80% del PVP tras descontar comisiones de pasarela y costos directos.</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div><strong>Break-even ROAS Calculado:</strong> Conoces con exactitud matemática el ROAS mínimo necesario para no perder capital en anuncios.</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div><strong>Estructura de Upsell / Bump Diseñada:</strong> Cuentas con al menos una oferta complementaria para incrementar el ticket medio en el checkout.</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div><strong>Proyección de LTV a 90 Días:</strong> Tienes previsto el siguiente paso o producto que ofrecerás a los alumnos tras completar el curso actual.</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div><strong>Límite de CAC Diario Fijado:</strong> Se estableció en la plataforma publicitaria un costo máximo por adquisición que nunca debe ser superado.</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div><strong>Tasa de Devoluciones Auditada:</strong> Se confirmó que las devoluciones se mantienen bajo el 4% para evitar distorsiones en el balance.</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div><strong>Separación de Canales de Conversión:</strong> Las ventas orgánicas y las ventas por tráfico pagado se miden en columnas independientes.</div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 12",
      category: "TALLER PRÁCTICO",
      title: "Taller: Cálculo de Punto de Equilibrio y Margen con IA",
      subtitle: "Ejercicio guiado para blindar los números de tu producto en 20 minutos.",
      content: `
        <div class="step-card">
          <div class="step-num">1</div>
          <div class="step-content">
            <div class="step-title">Recopila los Datos de tu Producto Principal</div>
            <div class="step-desc">Anota en una hoja: Precio de Venta ($PVP), Costo Directo por Alumno ($COGS) y la totalidad de tus Costos Fijos mensuales del negocio ($CF).</div>
          </div>
        </div>
        <div class="step-card">
          <div class="step-num">2</div>
          <div class="step-content">
            <div class="step-title">Calcula el Margen de Contribución Unitario</div>
            <div class="step-desc">Resta al PVP el costo directo: <code>Margen Unitario = PVP - COGS</code>. Este número es el dinero que cada venta aporta para pagar tus costos fijos.</div>
          </div>
        </div>
        <div class="step-card">
          <div class="step-num">3</div>
          <div class="step-content">
            <div class="step-title">Determina el Punto de Equilibrio (Break-Even)</div>
            <div class="step-desc">Divide tus costos fijos mensuales entre el margen unitario: <code>Unidades Mínimas = Costos Fijos / Margen Unitario</code>. Ese es tu número mágico para alcanzar la rentabilidad cada mes.</div>
          </div>
        </div>
        <div class="step-card">
          <div class="step-num">4</div>
          <div class="step-content">
            <div class="step-title">Modela Escenarios con el Prompt de Sensibilidad</div>
            <div class="step-desc">Pega los datos en ChatGPT con el Prompt de la Página 07 para evaluar si aumentar el precio en un 20% reduce a la mitad tu exigencia de ventas mensuales.</div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 13",
      category: "MANDAMIENTOS DEL RENDIMIENTO",
      title: "Los 10 Mandamientos del Margen y el ROI",
      subtitle: "Reglas innegociables para multiplicar la eficiencia financiera de tus creaciones.",
      content: `
        <div class="card-grid">
          <div class="card">
            <div class="card-title">1. Protege tu margen con tu vida</div>
            <div class="card-desc">El margen es tu oxígeno. Un negocio con margen alto tolera errores, retrasos y crisis; un negocio sin margen muere al menor traspié.</div>
          </div>
          <div class="card">
            <div class="card-title">2. No compitas por precio bajo</div>
            <div class="card-desc">Competir por precio es una carrera hacia el fondo donde el que gana se convierte en el más pobre y agotado.</div>
          </div>
          <div class="card">
            <div class="card-title">3. El ROAS no paga facturas</div>
            <div class="card-desc">No puedes ir al supermercado y pagar con capturas de pantalla de ROAS 4x. Lo único que cuenta es la ganancia neta en tu banco.</div>
          </div>
          <div class="card">
            <div class="card-title">4. Eleva el ticket medio en el checkout</div>
            <div class="card-desc">Es 10 veces más fácil vender un bump de $27 a quien ya sacó su tarjeta que conseguir un cliente nuevo desde cero.</div>
          </div>
          <div class="card">
            <div class="card-title">5. Conoce tu CAC máximo admisible</div>
            <div class="card-desc">Nunca prendas una campaña publicitaria sin saber exactamente cuántos dólares puedes pagar como límite absoluto por cliente.</div>
          </div>
          <div class="card">
            <div class="card-title">6. Mide el ROI de tu propio tiempo</div>
            <div class="card-desc">Si pasas 10 horas haciendo una tarea que una herramienta de IA de $20 resuelve en 5 minutos, tu ROI personal es catastrófico.</div>
          </div>
        </div>
      `
    },
    {
      badge: "PÁGINA 14",
      category: "CUADERNO DE TRABAJO",
      title: "Cuaderno de Trabajo: Ficha de Rentabilidad de Oferta",
      subtitle: "Plantilla para auditar los márgenes de cada infoproducto de tu catálogo.",
      content: `
        <div class="box-info">
          <div class="box-info-title">Ficha Técnica de Evaluación de Producto</div>
          <p>Completa esta matriz para tu oferta digital principal y calcula sus métricas clave:</p>
        </div>
        <div class="data-table">
          <table>
            <thead>
              <tr>
                <th style="width: 35%;">Métrica Financiera</th>
                <th style="width: 65%;">Valor de tu Producto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Nombre de la Oferta</strong></td>
                <td><em>Ej: Curso Intensivo AI Business System</em></td>
              </tr>
              <tr>
                <td><strong>Precio de Venta al Público (PVP)</strong></td>
                <td><em>$[....................] USD</em></td>
              </tr>
              <tr>
                <td><strong>Comisión Pasarela (3.5% + $0.30)</strong></td>
                <td><em>-$[....................] USD</em></td>
              </tr>
              <tr>
                <td><strong>Costos de Entrega / Tokens IA</strong></td>
                <td><em>-$[....................] USD</em></td>
              </tr>
              <tr>
                <td><strong>Margen Bruto Unitario ($ y %)</strong></td>
                <td><em>$[....................] ( ............ % )</em></td>
              </tr>
              <tr>
                <td><strong>Costo de Adquisición Promedio (CAC)</strong></td>
                <td><em>-$[....................] USD</em></td>
              </tr>
              <tr>
                <td><strong>Margen Neto Unitario tras CAC</strong></td>
                <td><em>$[....................] ( ............ % )</em></td>
              </tr>
              <tr>
                <td><strong>Punto de Equilibrio Mensual</strong></td>
                <td><em>Requiere vender ................ alumnos al mes</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      badge: "PÁGINA 15",
      category: "CIERRE Y PRÓXIMOS PASOS",
      title: "Cierre Metodológico y Glosario de Rentabilidad",
      subtitle: "Consolidación de conceptos para dar el salto a la analítica predictiva con IA en la Clase 03.",
      content: `
        <div class="box-tip">
          <div class="box-tip-title">¡Has completado la Clase 02 del Módulo 6!</div>
          <p>Ahora dominas la ciencia del Margen y el ROI. Ya no dependes de la intuición ni de métricas superficiales para saber si ganas dinero. En la Clase 03 aprenderás a convertir a la IA en tu analista de cabecera para diagnosticar todos los resultados de tu negocio.</p>
        </div>
        <div class="card-grid">
          <div class="card">
            <div class="card-title">ROAS</div>
            <div class="card-desc">Retorno sobre el gasto publicitario directo, calculado como ingresos brutos entre costo de la pauta.</div>
          </div>
          <div class="card">
            <div class="card-title">CAC</div>
            <div class="card-desc">Costo total invertido en marketing y ventas para conseguir un cliente que efectúe una compra.</div>
          </div>
          <div class="card">
            <div class="card-title">LTV</div>
            <div class="card-desc">Valor monetario total que un cliente deja en tu empresa a lo largo de toda su relación comercial.</div>
          </div>
          <div class="card">
            <div class="card-title">Break-even Point</div>
            <div class="card-desc">Nivel de ventas necesario donde los ingresos igualan exactamente a la suma de costos y gastos (beneficio cero).</div>
          </div>
        </div>
      `
    }
  ]
};

module.exports = { m6_c2 };

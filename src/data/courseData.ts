import { CourseData, Lesson, Module } from '@/types/course';
import { extractYouTubeId } from '@/lib/utils';

// ===============================
// VIDEOS DE YOUTUBE
// ===============================
// Aquí puedes pegar o cambiar fácilmente los enlaces de los videos no listados de YouTube.
export const videoUrls = {
  modulo1_aula1: "https://youtu.be/tB7a89svn1Y",
  modulo1_aula2: "https://youtu.be/RdUqt48FtqI",
  modulo1_aula3: "https://youtu.be/Jdv41Vwfqew",
  modulo2_aula1: "https://youtu.be/PkRRLGi7wqc",
  modulo2_aula2: "https://youtu.be/CpIc-LPV9tc",
  modulo2_aula3: "https://youtu.be/9OaLB1olYZc",
  modulo3_aula1: "https://youtu.be/0l4HhR_4N_Y",
  modulo3_aula2: "https://youtu.be/CP2PILG2_5o",
  modulo3_aula3: "https://youtu.be/EtijAXd7F3c",
  modulo4_aula1: "https://youtu.be/PFSJRp382jQ",
  modulo4_aula2: "https://youtu.be/NoiVXS5kL_M",
  modulo4_aula3: "https://youtu.be/qKN-RdDUBS4",
  modulo5_aula1: "https://youtu.be/a-PQTz15Y0M",
  modulo5_aula2: "https://youtu.be/1SyfCzR6zn4",
  modulo5_aula3: "https://youtu.be/AKHbOKawc-Y",
  bonus_aula1: "https://youtu.be/iFd_13vrj1Q",
  bonus_aula2: "https://youtu.be/L_AtiDKoiIk",
  bonus_aula3: "https://youtu.be/uXoYunLhzJo"
};

// ===============================
// CONTENIDO DE LAS CLASES
// ===============================
// Aquí puedes editar o reemplazar los títulos y textos descriptivos de cada clase.
export const lessonContent = {
  modulo1_aula1: {
    title: "Cómo utilizar la IA en el proceso de creación",
    duration: "10:15",
    description: `Crear algo desde cero puede parecer complicado. Muchas veces tenemos una buena idea, pero no sabemos exactamente por dónde empezar ni cómo transformar esa idea en algo concreto.

Antes de llegar al resultado final, normalmente necesitamos pensar en una idea, buscar información, organizar lo que queremos hacer y, después, comenzar a producir. La inteligencia artificial puede participar en varias de estas etapas y convertirse en una herramienta de apoyo durante todo el proceso creativo.

Puedes utilizar una herramienta de IA para desarrollar una idea inicial, hacer preguntas, investigar posibilidades, crear un primer borrador o incluso sugerir diferentes formas de presentar un contenido.

Por ejemplo, imagina que quieres crear una guía sobre un determinado tema. Puedes comenzar explicándole a la IA cuál es el tema, para quién se creará el material y cuál es el objetivo que quieres alcanzar. También puedes indicar qué tipo de contenido quieres crear y qué tono deseas utilizar.

A partir de ahí, la herramienta puede ayudarte a organizar las ideas, identificar los puntos principales y sugerir una estructura inicial. Después, puedes revisar esa propuesta, cambiar lo que no tenga sentido y continuar desarrollando cada parte del proyecto.

Pero hay algo importante: la IA no tiene que crearlo todo por sí sola. Tú sigues definiendo lo que quieres crear, evaluando las sugerencias y realizando los ajustes necesarios. La calidad del resultado también dependerá de la información y las instrucciones que proporciones.

Piensa en la IA como una herramienta dentro de tu proceso creativo. Puede ayudarte a superar el bloqueo inicial, explorar diferentes posibilidades y transformar una idea en algo más organizado y listo para ser desarrollado.

El objetivo no es sustituir tu creatividad, sino utilizar la tecnología para hacer que el proceso de creación sea más sencillo y eficiente.`
  },
  modulo1_aula2: {
    title: "Transformando ideas en proyectos digitales",
    duration: "12:40",
    description: `Tener una idea es solo el comienzo.

Muchas veces, el desafío está en transformar esa idea en algo concreto. Podemos tener una buena idea para un e-book, un curso, una guía o cualquier otro contenido digital, pero cuando llega el momento de comenzar a producir, pueden surgir muchas preguntas: ¿qué debo incluir?, ¿para quién es este material?, ¿cómo debería organizarlo? y ¿por dónde empiezo?

Aquí es donde la inteligencia artificial puede ayudar.

Imagina que tienes una idea para un e-book, material educativo, guía u otro tipo de contenido digital. Puedes presentar esta idea a una herramienta de IA y pedir ayuda para definir el público, el objetivo del material, los temas principales y una posible estructura.

También puedes pedirle que analice diferentes posibilidades y que sugiera una organización que tenga sentido para el público que quieres alcanzar.

Después, puedes trabajar en cada parte por separado.

Por ejemplo, primero defines los temas principales. Después, desarrollas cada sección, revisas el contenido y organizas todo en un formato final. De esta manera, un proyecto que inicialmente parece grande puede convertirse en una serie de tareas más pequeñas y fáciles de realizar.

Este proceso permite dividir una idea grande en pequeñas etapas más fáciles de ejecutar. En lugar de intentar crear todo de una sola vez, puedes avanzar paso a paso y utilizar la IA como apoyo en cada etapa.

Y no tienes que aceptar la primera respuesta de la IA. Puedes hacer preguntas, pedir otras opciones, cambiar la dirección del proyecto y ajustar el resultado hasta llegar a algo que tenga sentido para ti.

También puedes pedirle a la herramienta que revise una estructura, que sugiera mejoras o que encuentre puntos que todavía necesitan desarrollarse.

Lo más importante es salir de la idea abstracta y comenzar a construir.

Utiliza la IA para ayudarte a organizar el camino entre “tengo una idea” y “tengo algo listo para desarrollar”. La herramienta puede ayudarte a avanzar, pero las decisiones sobre el proyecto siguen estando en tus manos.`
  },
  modulo1_aula3: {
    title: "Creando tu primer plan de uso de IA",
    duration: "14:15",
    description: `Saber que la inteligencia artificial puede ayudarte es solo el primer paso; el verdadero diferencial está en definir exactamente cómo, cuándo y para qué la vas a utilizar en tu día a día.

Sin un plan claro de adopción, es muy común caer en dos extremos: o intentar delegarlo todo sin criterio y frustrarse con resultados genéricos, o abrumarse con tantas herramientas y no implementar ninguna en proyectos reales.

En esta clase aprenderás a diseñar tu primer plan estratégico de uso de la IA.

Comenzamos identificando tus cuellos de botella cotidianos: ¿en qué tareas dedicas más tiempo del necesario? ¿En la investigación de ideas? ¿En la redacción del primer borrador? ¿En la organización de cronogramas o en la síntesis de información técnica?

Una vez identificadas estas áreas, establecemos un flujo ordenado en tres niveles:
1. Tareas de exploración: donde la IA actúa como generadora de hipótesis y mapas conceptuales.
2. Tareas de producción asistida: donde redactas y creas en co-creación guiada paso a paso.
3. Tareas de auditoría y pulido: donde utilizas la tecnología para contrastar calidad y coherencia.

También definirás tus propias reglas de control para asegurar que tu criterio humano y tu voz propia se mantengan siempre como el filtro final de cada entregable.

El objetivo de esta clase es que salgas con una hoja de ruta simple y accionable que puedas aplicar de inmediato a tu rutina de trabajo.`
  },
  modulo2_aula1: {
    title: "Creando textos y contenido con IA",
    duration: "11:20",
    description: `Crear contenido no tiene que comenzar con una página en blanco.

Con la inteligencia artificial, puedes partir de una idea sencilla y desarrollar ese contenido paso a paso, incluso cuando todavía no tienes claro cómo quieres presentar la información.

Imagina, por ejemplo, que quieres crear una publicación sobre un determinado tema.

En lugar de simplemente pedirle a la IA que “cree una publicación”, proporciona algunos datos: cuál es el tema, a quién va dirigido el contenido, cuál es el objetivo y qué formato deseas.

También puedes explicar el tono que quieres utilizar, el nivel de conocimiento del público y los puntos principales que necesitas incluir.

A partir de esta información, la IA puede ayudarte a crear una primera versión del texto. Puedes utilizar ese primer resultado como punto de partida y, a partir de ahí, realizar cambios y desarrollar mejor la idea.

También puedes pedir diferentes títulos, introducciones, ejemplos o formas de explicar el mismo tema. Si una respuesta no te convence, puedes pedir otra versión o explicar con más detalle lo que estás buscando.

Después, revisa el contenido y realiza los ajustes necesarios para adaptarlo a tu estilo y al objetivo que quieres alcanzar.

Este proceso puede utilizarse para diferentes tipos de contenido, como publicaciones, artículos, descripciones, guiones, correos electrónicos y materiales educativos.

Por ejemplo, una misma herramienta puede ayudarte a organizar las ideas de un artículo, crear una estructura para un video o desarrollar una descripción más clara para un producto digital.

Lo más importante es recordar que la IA funciona mejor cuando tú participas en el proceso.

Tú proporcionas la idea, el contexto y la dirección. La inteligencia artificial ayuda a transformar esta información en una primera versión que puedes revisar, mejorar y desarrollar.

De esta manera, en lugar de comenzar desde cero, comienzas con una base sobre la cual trabajar y puedes dedicar más tiempo a mejorar el contenido.`
  },
  modulo2_aula2: {
    title: "Adaptando un contenido a diferentes formatos",
    duration: "09:50",
    description: `No necesitas crear un contenido completamente nuevo para cada canal.

Una misma idea puede transformarse en diferentes formatos utilizando la inteligencia artificial. Esto permite aprovechar mejor el trabajo que ya has realizado y adaptar una misma información a diferentes situaciones.

Imagina que has escrito un texto explicando un determinado tema.

A partir de ese contenido, puedes pedirle a la IA que cree una versión más corta para una publicación, que transforme los puntos principales en un guion para video o que adapte la información para un pie de foto.

También puedes transformar el mismo contenido en una serie de preguntas, un resumen, un correo electrónico o incluso en una estructura para un material educativo.

El proceso comienza con un contenido que ya tienes.

Después, explica a la IA cuál es el nuevo formato que quieres crear, a quién estará dirigido y qué aspectos del contenido original deben mantenerse.

Por ejemplo, puedes proporcionar un artículo y pedir una versión corta para redes sociales, manteniendo la información principal y utilizando un lenguaje más directo y fácil de entender.

También puedes pedir que el contenido se adapte a un video corto, con una introducción, algunos puntos principales y una conclusión.

Después, revisa el resultado y realiza los ajustes necesarios para que el nuevo formato mantenga el sentido del contenido original.

Este enfoque te ayuda a aprovechar mejor el contenido que ya has creado, sin tener que empezar todo de nuevo.

La idea no es simplemente copiar y pegar el mismo texto en todos los lugares.

Se trata de adaptar una misma información para que funcione de manera adecuada en cada formato y para cada público.

De esta manera, una sola idea puede dar origen a diferentes piezas de contenido, manteniendo el mensaje principal y cambiando la forma de presentarlo según el objetivo.`
  },
  modulo2_aula3: {
    title: "Creando una campaña de contenido con IA",
    duration: "15:45",
    description: `Crear publicaciones aisladas suele exigir mucho esfuerzo y generar poco impacto. Cuando trabajas con una visión de campaña, una misma idea central se planifica de forma estratégica a lo largo del tiempo, guiando a tu audiencia a través de un recorrido coherente.

En esta clase aprenderás a diseñar y producir una campaña completa de contenidos utilizando la inteligencia artificial como acelerador creativo.

Aprenderás a estructurar una campaña en tres fases complementarias:
1. Fase de Conciencia y Atracción: contenidos breves, preguntas provocativas y reflexiones que despiertan el interés del público.
2. Fase de Profundización y Valor: artículos, análisis detallados y guías paso a paso que construyen autoridad y confianza.
3. Fase de Decisión y Acción: mensajes claros y directos que invitan a dar el siguiente paso, ya sea registrarse, descargar un recurso o acceder a una capacitación.

Veremos cómo redactar prompts maestros para generar un calendario editorial coordinado, manteniendo un tono de voz uniforme en todos los canales y adaptando los mensajes sin perder la esencia.

Al finalizar la clase, sabrás cómo pasar de publicar contenidos dispersos a gestionar un sistema planificado y predecible de comunicación digital.`
  },
  modulo3_aula1: {
    title: "Creando imágenes con inteligencia artificial",
    duration: "13:10",
    description: `Hasta ahora, hemos trabajado principalmente con ideas y textos. Ahora vamos a hablar de una de las aplicaciones más conocidas de la inteligencia artificial en la creación digital: la generación de imágenes.

Actualmente, existen herramientas capaces de crear imágenes a partir de una simple descripción. Puedes indicar qué quieres representar, explicar el estilo visual, el formato, los elementos que deben aparecer e incluso el contexto en el que se utilizará esa imagen.

Por ejemplo, imagina que necesitas una imagen para ilustrar una publicación sobre alimentación saludable. En lugar de buscar una imagen ya preparada, puedes describir a la IA la escena que quieres crear y generar una imagen de acuerdo con esa idea.

Pero existe una diferencia importante entre simplemente escribir cualquier solicitud y crear una instrucción bien elaborada.

Cuanto más clara sea la descripción, más fácil será orientar a la herramienta hacia el resultado que estás buscando. Puedes indicar el tema principal, el entorno, las personas u objetos que deben aparecer, el estilo visual, la iluminación y, cuando sea necesario, el formato o la proporción de la imagen.

También puedes explicar para qué se utilizará la imagen. Una imagen para una publicación en redes sociales puede necesitar una composición diferente de una imagen destinada a la portada de un e-book o a una presentación.

Después de generar la primera versión, analiza el resultado y realiza nuevos ajustes. Puedes cambiar detalles, modificar el estilo, agregar o eliminar elementos, probar otras versiones y comparar los resultados.

No siempre vas a obtener exactamente lo que imaginaste en el primer intento. La creación con IA también implica experimentar y mejorar las instrucciones.

La idea es utilizar la inteligencia artificial como una herramienta de creación visual, transformando una descripción en una imagen que pueda utilizarse de forma adecuada dentro de tu proyecto digital.`
  },
  modulo3_aula2: {
    title: "Creando materiales visuales para contenidos digitales",
    duration: "14:30",
    description: `Crear una imagen es solo una de las posibilidades.

La inteligencia artificial también puede ayudar en la creación de diferentes materiales visuales para acompañar contenidos digitales.

Por ejemplo, puedes necesitar una portada para un e-book, una imagen para una publicación, una ilustración para un artículo o elementos visuales para una presentación.

Antes de crear, piensa primero en la función de ese material. ¿Qué información necesita transmitir? ¿Para quién se creará? ¿Dónde se utilizará?

Estas respuestas ayudan a definir mejor el resultado que estás buscando y también permiten crear instrucciones más claras para la herramienta de IA.

Después, puedes utilizar una herramienta de inteligencia artificial para generar imágenes o elementos visuales que formen parte de ese material. Puedes crear diferentes opciones, comparar los resultados y elegir las que mejor se adapten a tu proyecto.

Luego, puedes combinar estos elementos con textos y otra información utilizando una herramienta de edición o diseño.

Por ejemplo, una imagen generada por IA puede utilizarse como base para una portada, mientras que el título, el subtítulo y otras informaciones se añaden posteriormente.

También puedes crear diferentes versiones de una misma pieza. Puedes cambiar el estilo, la composición, los elementos o el formato hasta encontrar una opción que se adapte mejor a lo que necesitas.

Lo importante es entender que la creación visual no comienza con la herramienta.

Comienza con la finalidad del material.

Cuando sabes qué necesitas comunicar, para quién estás creando y dónde utilizarás el contenido, resulta mucho más fácil utilizar la inteligencia artificial para desarrollar algo adecuado para tu proyecto.

La herramienta genera posibilidades, pero tú decides cómo utilizarlas y cómo integrarlas en la creación final.`
  },
  modulo3_aula3: {
    title: "Creando una biblioteca inteligente de respuestas",
    duration: "13:50",
    description: `A medida que tu presencia digital o tus proyectos crecen, la cantidad de preguntas, mensajes y consultas repetitivas de los alumnos, clientes o seguidores aumenta notablemente.

En lugar de redactar cada respuesta desde cero o recurrir a plantillas frías e impersonales, la inteligencia artificial te permite construir una biblioteca inteligente y dinámica de respuestas.

En esta clase aprenderás a organizar un repositorio centralizado de conocimiento sobre tus proyectos, políticas, contenidos y metodologías.

Aprenderás a:
1. Clasificar las consultas más habituales en categorías clave (soporte, orientación técnica, objeciones frecuentes y recomendaciones).
2. Crear prompts parametrizados que tomen los datos del repositorio y elaboren respuestas personalizadas, claras y empáticas en segundos.
3. Establecer directrices de tono y estilo para que cada comunicación refleje profesionalismo y calidez.

Construir esta biblioteca no solo te ahorrará decenas de horas operativas cada semana, sino que garantizará una experiencia impecable y de altísima calidad para todas las personas que interactúen con tu contenido o tus productos.`
  },
  modulo4_aula1: {
    title: "Desarrollando ideas para productos digitales",
    duration: "12:15",
    description: `Una idea para un producto digital puede surgir de diferentes lugares.

Puede ser un conocimiento que tienes, una pregunta frecuente de las personas, un problema específico o incluso un tema que te gustaría transformar en material educativo.

La inteligencia artificial puede ayudarte precisamente durante el desarrollo de esa idea.

Puedes presentar una idea inicial a la IA y pedirle ayuda para identificar posibles públicos, organizar los temas principales y pensar en diferentes formatos para transformar ese conocimiento en un producto.

También puedes pedirle que compare diferentes posibilidades y que te ayude a entender qué formato podría adaptarse mejor al tema y al público que quieres alcanzar.

Por ejemplo, imagina que quieres crear un material sobre organización financiera para principiantes.

Puedes conversar con la IA para definir quién sería el público, qué temas deberían formar parte del contenido y qué formato podría ser más adecuado, como un e-book, una guía o una serie de clases.

Depois, puedes comparar las posibilidades y elegir la que mejor se adapte a lo que quieres crear.

También puedes utilizar la IA para identificar qué información necesitas investigar, qué puntos podrían ser importantes para el público y qué aspectos todavía necesitan desarrollarse.

Es importante recordar que la IA está ayudando a desarrollar la idea, pero no conoce tu experiencia de la misma manera que tú.

Por eso, utiliza tu propia información, conocimientos y referencias para construir algo que tenga contenido real y sea útil para quienes utilizarán el material.

La IA ayuda a explorar posibilidades, organizar pensamientos y desarrollar ideas.

Pero la decisión sobre qué crear, cómo hacerlo y qué información incluir sigue siendo tuya.`
  },
  modulo4_aula2: {
    title: "Estructurando un producto digital con apoyo de la IA",
    duration: "15:00",
    description: `Después de elegir una idea, el siguiente paso es organizar el producto.

Antes de comenzar a producir, es importante saber qué formará parte del material, cómo se presentará el contenido y cuál será la secuencia de desarrollo.

La inteligencia artificial puede ayudar a transformar una idea general en una estructura más organizada.

Puedes indicar el tema, el público y el objetivo del producto y pedir sugerencias de módulos, capítulos, temas o etapas.

Por ejemplo, si estás creando un e-book, puedes pedirle a la IA una sugerencia de división por capítulos. Si estás creando una capacitación, puedes pedir una estructura de módulos y clases.

También puedes pedir que organice los temas de una manera progresiva, comenzando por los conceptos básicos y avanzando hacia contenidos más específicos.

Después, analiza esta estructura y realiza los cambios necesarios.

Puedes eliminar temas que no sean importantes, agregar información que consideres relevante y reorganizar la secuencia para que el contenido sea más fácil de seguir.

También puedes utilizar la IA para desarrollar cada parte individualmente una vez que la estructura esté definida. Por ejemplo, después de organizar los capítulos de un e-book, puedes trabajar con la herramienta para desarrollar cada capítulo por separado.

Lo más importante es no dejar que la primera sugerencia determine todo el producto.

Utiliza la inteligencia artificial como apoyo para organizar tus ideas, pero mantén el control sobre el contenido, la calidad y la dirección del proyecto.

Una buena estructura no tiene que ser complicada. Tiene que ayudar al usuario a comprender el contenido y avanzar de forma lógica hacia el objetivo del material.

Antes de comenzar la producción, revisa toda la estructura y asegúrate de que cada parte tenga una función clara dentro del producto.`
  },
  modulo4_aula3: {
    title: "Documentando procesos con IA",
    duration: "16:20",
    description: `Un negocio digital sostenible no depende de la improvisación ni de la memoria: se apoya en procesos documentados, repetibles y optimizables.

Sin embargo, redactar Procedimientos Operativos Estándar (SOPs) o manuales paso a paso suele percibirse como una tarea tediosa y lenta. Aquí es donde la inteligencia artificial se convierte en tu mayor aliada organizativa.

En esta clase aprenderás a documentar y estandarizar tus procesos de creación y gestión digital con ayuda de la IA.

Aprenderás a:
1. Capturar flujos de trabajo en bruto: cómo dictar, transcribir o describir tus pasos diarios para que la IA los procese.
2. Transformar notas dispersas en manuales claros con objetivos, herramientas requeridas, listas de verificación y pasos numerados.
3. Identificar puntos de fricción o etapas redundantes que pueden simplificarse o automatizarse.
4. Crear guías de delegación para que colaboradores o asistentes puedan ejecutar tareas manteniendo el estándar de calidad de tu marca.

Al documentar tus métodos de trabajo, dejas de depender de la inspiración del momento y construyes una estructura sólida que permite escalar tus proyectos con total tranquilidad.`
  },
  modulo5_aula1: {
    title: "Organizando y revisando tu material digital",
    duration: "11:45",
    description: `Después de desarrollar un producto o material digital, todavía existe una etapa importante antes de presentarlo al público: la revisión.

La inteligencia artificial puede utilizarse como una herramienta de apoyo durante este proceso, ayudándote a encontrar detalles que pueden pasar desapercibidos mientras estás creando.

Puedes presentar tu contenido a la IA y pedirle que identifique problemas de claridad, repeticiones, errores de escritura o puntos que podrían explicarse mejor.

También puedes pedirle que revise si la secuencia de la información está bien organizada y si determinadas partes necesitan ajustes para que el contenido sea más fácil de comprender.

Por ejemplo, imagina que has creado un e-book con varios capítulos.

Puedes pedirle a la IA que analice la estructura general, resuma cada capítulo y señale posibles repeticiones, contradicciones o información que parezca desconectada del resto del material.

También puedes pedirle que revise títulos, subtítulos, instrucciones o explicaciones que puedan resultar confusas para el lector.

Pero recuerda: la revisión de la IA no sustituye tu propio análisis.

Lee el material completo, comprueba la información y realiza los ajustes que consideres necesarios.

La herramienta puede señalar posibles problemas, pero tú necesitas decidir qué cambios realmente tienen sentido para el producto.

También es importante observar la presentación visual, los títulos, la organización de las páginas y la facilidad de lectura.

Un material bien organizado no tiene que ser complejo.

Tiene que ser claro, consistente y fácil de seguir.

Antes de publicar, revisa el contenido, la estructura y la presentación.

Utiliza la inteligencia artificial como una segunda capa de revisión para ayudarte a identificar puntos que quizás no hayas notado durante la creación.

De esta manera, puedes llegar a una versión más organizada y preparada para ser presentada a tu público.`
  },
  modulo5_aula2: {
    title: "Publicando y presentando tu creación",
    duration: "13:20",
    description: `Después de crear y revisar tu material, llega el momento de ponerlo a disposición de las personas.

Antes de publicarlo, es importante definir cómo vas a presentar lo que has creado.

Comienza pensando en una descripción sencilla y clara.

Explica qué es el material, para quién fue desarrollado y qué encontrará la persona dentro de él. La idea es que alguien pueda entender rápidamente qué estás presentando y qué puede esperar del contenido.

La inteligencia artificial puede ayudarte en esta etapa creando diferentes versiones de una descripción, títulos o textos de presentación.

Puedes probar distintas formas de explicar la misma creación y elegir la que comunique mejor la propuesta de tu material.

También puedes utilizar la IA para adaptar esta presentación a diferentes canales, como una página de producto, una publicación en redes sociales o un mensaje.

Por ejemplo, puedes utilizar una descripción más completa para una página de producto y después pedirle a la IA que transforme las ideas principales en un texto más corto para una publicación.

Después, realiza una revisión final.

Comprueba que toda la información sea correcta, que los enlaces funcionen, que los archivos estén organizados y que el material se presente de la manera que deseas.

También verifica que los títulos, imágenes y textos estén correctamente organizados y que la persona pueda acceder al contenido sin dificultades.

La publicación es solo el comienzo de la utilización de lo que has creado.

Después de poner el material a disposición del público, puedes observar las preguntas, comentarios y reacciones de las personas y utilizar esta información para realizar mejoras en el futuro.

Crear con IA es un proceso continuo.

Puedes crear, revisar, publicar, aprender del resultado y volver a mejorar tu próximo proyecto.

La idea es utilizar cada experiencia para entender mejor lo que funciona, identificar lo que puede mejorar y hacer que cada nueva creación sea más clara y útil.`
  },
  modulo5_aula3: {
    title: "Construyendo un flujo de trabajo completo con IA",
    duration: "17:35",
    description: `Has aprendido a investigar, redactar, crear piezas visuales, estructurar productos y documentar procesos. Ahora es el momento de integrar todas estas piezas en un flujo de trabajo unificado y sin fricciones.

Un flujo de trabajo completo conecta cada etapa de tu ciclo creativo: desde que surge una idea embrionaria hasta que el producto final está publicado, distribuido y optimizado.

En esta clase construiremos juntos un sistema operativo de creación digital de extremo a extremo:
1. Entrada y Captura: centralización de ideas e investigación inicial.
2. Procesamiento e Incubación: estructuración curricular y despiece temático asistido por IA.
3. Producción Multicanal: generación armónica de textos, imágenes y materiales descargables.
4. Auditoría de Calidad: aplicación de checklists de revisión antes del lanzamiento.
5. Monitoreo y Aprendizaje: captura de feedback para retroalimentar el sistema.

Aprenderás a eliminar los cuellos de botella entre etapas y a trabajar con un método que te otorgue claridad mental, velocidad de entrega y consistencia a largo plazo.`
  },
  bonus_aula1: {
    title: "AI Creator Prompts: Do Zero ao Resultado",
    duration: "16:10",
    description: `Utilizar inteligencia artificial no proceso creativo no significa simplemente escribir una pregunta y aceptar la primera respuesta.

La forma en que describes lo que necesitas puede influir directamente en el resultado que recibes.

Por eso, una de las habilidades más útiles para cualquier creador es aprender a transformar una idea general en una instrucción más clara.

Imagina que quieres crear un e-book sobre alimentación saludable.

Podrías simplemente escribir: “Quiero crear un e-book sobre alimentación saludable”.

Pero puedes proporcionar mucha más información.

Puedes indicar quién será el público, cuál es el objetivo del material, qué formato quieres utilizar, qué temas deben aparecer y qué tipo de lenguaje deseas.

De esta manera, la IA recibe más contexto y puede ayudarte a desarrollar una respuesta más cercana a lo que realmente necesitas.

También puedes trabajar con la respuesta después de recibirla.

Si el resultado es demasiado largo, puedes pedir una versión más directa.

Si falta información, puedes solicitar que desarrolle una determinada parte.

Si la estructura no tiene sentido, puedes pedir otra organización.

Y si quieres comparar posibilidades, puedes solicitar diferentes versiones antes de elegir una.

Esto significa que no necesitas comenzar desde cero cada vez que la respuesta no sea exactamente lo que esperabas.

Puedes continuar la conversación y utilizar cada respuesta como una nueva etapa del proceso.

Una buena instrucción normalmente contiene tres elementos importantes: qué quieres crear, para quién estás creando y qué resultado esperas obtener.

A partir de ahí, puedes agregar más detalles según la complejidad del proyecto.

Recuerda que la IA es una herramienta de apoyo.

Tú defines la dirección, analizas las respuestas y decides qué utilizar.

Cuanto mejor comuniques tu objetivo, más fácil será utilizar la inteligencia artificial como parte de tu proceso creativo.`
  },
  bonus_aula2: {
    title: "AI Creator Projects: 5 Projetos para Praticar",
    duration: "18:40",
    description: `Aprender sobre inteligencia artificial es importante, pero practicar es lo que realmente permite entender cómo utilizarla en proyectos reales.

Por eso, en este bono vas a trabajar con diferentes proyectos que puedes desarrollar utilizando la IA como herramienta de apoyo.

El primer proyecto puede ser la creación de una guía digital.
Puedes comenzar con un tema, definir el público, organizar los capítulos y utilizar la IA para desarrollar una primera versión del contenido.

El segundo proyecto puede ser un kit digital.
En este caso, puedes combinar diferentes materiales, como una guía, un checklist, modelos de documentos o recursos visuales, creando un conjunto organizado sobre un mismo tema.

El tercer proyecto puede ser un conjunto de contenidos.
Puedes elegir un tema y utilizar la IA para desarrollar diferentes piezas a partir de una misma idea, adaptándolas a distintos formatos.

El cuarto proyecto puede ser una presentación digital.
Puedes utilizar la inteligencia artificial para organizar los puntos principales, desarrollar el contenido de cada sección y preparar una estructura que facilite la presentación de la información.

Y el quinto proyecto puede ser un pequeño producto educativo.
Puedes partir de un conocimiento específico, definir qué quieres enseñar, organizar las etapas y utilizar la IA como apoyo durante el desarrollo.

En todos estos proyectos, el objetivo no es dejar que la herramienta haga todo por ti.
El objetivo es aprender a dividir una creación en etapas y utilizar la IA en los momentos en los que realmente puede ayudarte.

Puedes comenzar definiendo la idea, después organizar la estructura, desarrollar el contenido, crear los elementos necesarios, revisar el resultado y finalmente preparar el material.

Utiliza estos proyectos como ejercicios prácticos.
No necesitas hacerlos todos de una vez.
Elige uno, desarrolla cada etapa y observa qué funciona, qué necesita ajustes y qué puedes mejorar.

La práctica te ayudará a convertir lo que aprendiste en una habilidad que puedas utilizar en tus próximos proyectos digitales.`
  },
  bonus_aula3: {
    title: "Cómo crear mejores instrucciones para la IA",
    duration: "19:10",
    description: `En este tercer entrenamiento avanzado del Módulo Bónus, profundizaremos en el arte y la ciencia de la ingeniería de instrucciones para obtener resultados de nivel experto en cualquier modelo de inteligencia artificial.

Muchas personas se conforman con instrucciones genéricas y obtienen respuestas superficiales. Los creadores profesionales entienden que la precisión en el prompt determina la profundidad del resultado.

A lo largo de esta clase dominarás las técnicas de instrucción más avanzadas del mercado:
1. Arquitectura R.C.I.E.F.: Rol, Contexto, Instrucción, Ejemplos (Few-Shot) y Formato de salida estructurado.
2. Delimitadores y Restricciones Negativas: cómo impedir alucinaciones, redundancias y clichés estilísticos.
3. Cadena de Pensamiento (Chain of Thought): cómo forzar al modelo a razonar paso a paso antes de entregar su veredicto.
4. Iteración Recursiva y Meta-Prompting: cómo hacer que la propia IA critique, audite y refine sus propias instrucciones para elevar continuamente la calidad de tus proyectos.

Esta masterclass te entregará las herramientas conceptuales y prácticas definitivas para dialogar con los modelos de IA con maestría y control absoluto.`
  }
};

// ===============================
// CONTENIDO DEL CURSO
// ===============================
export const courseData: CourseData = {
  title: "AI Business System",
  tagline: "Capacitación práctica sobre cómo utilizar herramientas de inteligencia artificial para crear contenido y materiales digitales.",
  description: "AI Business System es una capacitación práctica sobre cómo utilizar herramientas de inteligencia artificial para crear diferentes tipos de contenido y materiales digitales. A lo largo de la capacitación, conocerás aplicaciones de IA para desarrollar ideas, producir textos, crear imágenes, estructurar contenidos y explorar diferentes formatos de productos digitales. El contenido está diseñado de forma sencilla y accesible, para que puedas conocer herramientas y procesos que pueden incorporarse a tu rutina de creación, incluso sin experiencia técnica.",
  modules: [
    {
      id: "modulo-1",
      key: "modulo1",
      order: 1,
      title: "Módulo 1 — Fundamentos de la Creación Digital con IA",
      shortTitle: "Módulo 1",
      description: "Aprende cómo la IA puede convertirse en tu asistente creativo para pasar de la idea al primer borrador y estructurar proyectos digitales.",
      isBonus: false,
      lessons: [
        {
          id: "m1-c1",
          key: "modulo1_aula1",
          moduleId: "modulo-1",
          moduleOrder: 1,
          order: 1,
          numberFormatted: "01",
          title: lessonContent.modulo1_aula1.title,
          duration: lessonContent.modulo1_aula1.duration,
          videoUrl: videoUrls.modulo1_aula1,
          videoId: extractYouTubeId(videoUrls.modulo1_aula1),
          description: lessonContent.modulo1_aula1.description
        },
        {
          id: "m1-c2",
          key: "modulo1_aula2",
          moduleId: "modulo-1",
          moduleOrder: 1,
          order: 2,
          numberFormatted: "02",
          title: lessonContent.modulo1_aula2.title,
          duration: lessonContent.modulo1_aula2.duration,
          videoUrl: videoUrls.modulo1_aula2,
          videoId: extractYouTubeId(videoUrls.modulo1_aula2),
          description: lessonContent.modulo1_aula2.description
        },
        {
          id: "m1-c3",
          key: "modulo1_aula3",
          moduleId: "modulo-1",
          moduleOrder: 1,
          order: 3,
          numberFormatted: "03",
          title: lessonContent.modulo1_aula3.title,
          duration: lessonContent.modulo1_aula3.duration,
          videoUrl: videoUrls.modulo1_aula3,
          videoId: extractYouTubeId(videoUrls.modulo1_aula3),
          description: lessonContent.modulo1_aula3.description
        }
      ]
    },
    {
      id: "modulo-2",
      key: "modulo2",
      order: 2,
      title: "Módulo 2 — Creación de Contenido con IA",
      shortTitle: "Módulo 2",
      description: "Domina la generación de textos, guiones y artículos, y aprende a adaptar una misma idea a múltiples formatos y canales.",
      isBonus: false,
      lessons: [
        {
          id: "m2-c1",
          key: "modulo2_aula1",
          moduleId: "modulo-2",
          moduleOrder: 2,
          order: 1,
          numberFormatted: "01",
          title: lessonContent.modulo2_aula1.title,
          duration: lessonContent.modulo2_aula1.duration,
          videoUrl: videoUrls.modulo2_aula1,
          videoId: extractYouTubeId(videoUrls.modulo2_aula1),
          description: lessonContent.modulo2_aula1.description
        },
        {
          id: "m2-c2",
          key: "modulo2_aula2",
          moduleId: "modulo-2",
          moduleOrder: 2,
          order: 2,
          numberFormatted: "02",
          title: lessonContent.modulo2_aula2.title,
          duration: lessonContent.modulo2_aula2.duration,
          videoUrl: videoUrls.modulo2_aula2,
          videoId: extractYouTubeId(videoUrls.modulo2_aula2),
          description: lessonContent.modulo2_aula2.description
        },
        {
          id: "m2-c3",
          key: "modulo2_aula3",
          moduleId: "modulo-2",
          moduleOrder: 2,
          order: 3,
          numberFormatted: "03",
          title: lessonContent.modulo2_aula3.title,
          duration: lessonContent.modulo2_aula3.duration,
          videoUrl: videoUrls.modulo2_aula3,
          videoId: extractYouTubeId(videoUrls.modulo2_aula3),
          description: lessonContent.modulo2_aula3.description
        }
      ]
    },
    {
      id: "modulo-3",
      key: "modulo3",
      order: 3,
      title: "Módulo 3 — Creación Visual con IA",
      shortTitle: "Módulo 3",
      description: "Descubre el poder de generar imágenes precisas y materiales visuales atractivos para tus publicaciones y portadas.",
      isBonus: false,
      lessons: [
        {
          id: "m3-c1",
          key: "modulo3_aula1",
          moduleId: "modulo-3",
          moduleOrder: 3,
          order: 1,
          numberFormatted: "01",
          title: lessonContent.modulo3_aula1.title,
          duration: lessonContent.modulo3_aula1.duration,
          videoUrl: videoUrls.modulo3_aula1,
          videoId: extractYouTubeId(videoUrls.modulo3_aula1),
          description: lessonContent.modulo3_aula1.description
        },
        {
          id: "m3-c2",
          key: "modulo3_aula2",
          moduleId: "modulo-3",
          moduleOrder: 3,
          order: 2,
          numberFormatted: "02",
          title: lessonContent.modulo3_aula2.title,
          duration: lessonContent.modulo3_aula2.duration,
          videoUrl: videoUrls.modulo3_aula2,
          videoId: extractYouTubeId(videoUrls.modulo3_aula2),
          description: lessonContent.modulo3_aula2.description
        },
        {
          id: "m3-c3",
          key: "modulo3_aula3",
          moduleId: "modulo-3",
          moduleOrder: 3,
          order: 3,
          numberFormatted: "03",
          title: lessonContent.modulo3_aula3.title,
          duration: lessonContent.modulo3_aula3.duration,
          videoUrl: videoUrls.modulo3_aula3,
          videoId: extractYouTubeId(videoUrls.modulo3_aula3),
          description: lessonContent.modulo3_aula3.description
        }
      ]
    },
    {
      id: "modulo-4",
      key: "modulo4",
      order: 4,
      title: "Módulo 4 — Creación de Productos Digitales con IA",
      shortTitle: "Módulo 4",
      description: "Transforma tus conocimientos o necesidades del mercado en productos digitales viables como e-books, guías o capacitaciones.",
      isBonus: false,
      lessons: [
        {
          id: "m4-c1",
          key: "modulo4_aula1",
          moduleId: "modulo-4",
          moduleOrder: 4,
          order: 1,
          numberFormatted: "01",
          title: lessonContent.modulo4_aula1.title,
          duration: lessonContent.modulo4_aula1.duration,
          videoUrl: videoUrls.modulo4_aula1,
          videoId: extractYouTubeId(videoUrls.modulo4_aula1),
          description: lessonContent.modulo4_aula1.description
        },
        {
          id: "m4-c2",
          key: "modulo4_aula2",
          moduleId: "modulo-4",
          moduleOrder: 4,
          order: 2,
          numberFormatted: "02",
          title: lessonContent.modulo4_aula2.title,
          duration: lessonContent.modulo4_aula2.duration,
          videoUrl: videoUrls.modulo4_aula2,
          videoId: extractYouTubeId(videoUrls.modulo4_aula2),
          description: lessonContent.modulo4_aula2.description
        },
        {
          id: "m4-c3",
          key: "modulo4_aula3",
          moduleId: "modulo-4",
          moduleOrder: 4,
          order: 3,
          numberFormatted: "03",
          title: lessonContent.modulo4_aula3.title,
          duration: lessonContent.modulo4_aula3.duration,
          videoUrl: videoUrls.modulo4_aula3,
          videoId: extractYouTubeId(videoUrls.modulo4_aula3),
          description: lessonContent.modulo4_aula3.description
        }
      ]
    },
    {
      id: "modulo-5",
      key: "modulo5",
      order: 5,
      title: "Módulo 5 — Poniendo tus Creaciones en Práctica",
      shortTitle: "Módulo 5",
      description: "Organiza, audita y revisa la calidad de tus materiales digitales antes de presentarlos y publicarlos con confianza.",
      isBonus: false,
      lessons: [
        {
          id: "m5-c1",
          key: "modulo5_aula1",
          moduleId: "modulo-5",
          moduleOrder: 5,
          order: 1,
          numberFormatted: "01",
          title: lessonContent.modulo5_aula1.title,
          duration: lessonContent.modulo5_aula1.duration,
          videoUrl: videoUrls.modulo5_aula1,
          videoId: extractYouTubeId(videoUrls.modulo5_aula1),
          description: lessonContent.modulo5_aula1.description
        },
        {
          id: "m5-c2",
          key: "modulo5_aula2",
          moduleId: "modulo-5",
          moduleOrder: 5,
          order: 2,
          numberFormatted: "02",
          title: lessonContent.modulo5_aula2.title,
          duration: lessonContent.modulo5_aula2.duration,
          videoUrl: videoUrls.modulo5_aula2,
          videoId: extractYouTubeId(videoUrls.modulo5_aula2),
          description: lessonContent.modulo5_aula2.description
        },
        {
          id: "m5-c3",
          key: "modulo5_aula3",
          moduleId: "modulo-5",
          moduleOrder: 5,
          order: 3,
          numberFormatted: "03",
          title: lessonContent.modulo5_aula3.title,
          duration: lessonContent.modulo5_aula3.duration,
          videoUrl: videoUrls.modulo5_aula3,
          videoId: extractYouTubeId(videoUrls.modulo5_aula3),
          description: lessonContent.modulo5_aula3.description
        }
      ]
    },
    {
      id: "modulo-bonus",
      key: "bonus",
      order: 6,
      title: "Módulo Bônus — Masterclasses y Práctica Aplicada",
      shortTitle: "Módulo Bônus",
      description: "Aceleradores prácticos: dominio integral de prompts y 5 proyectos guiados listos para ejecutar.",
      isBonus: true,
      lessons: [
        {
          id: "bonus-c1",
          key: "bonus_aula1",
          moduleId: "modulo-bonus",
          moduleOrder: 6,
          order: 1,
          numberFormatted: "01",
          title: lessonContent.bonus_aula1.title,
          duration: lessonContent.bonus_aula1.duration,
          videoUrl: videoUrls.bonus_aula1,
          videoId: extractYouTubeId(videoUrls.bonus_aula1),
          description: lessonContent.bonus_aula1.description
        },
        {
          id: "bonus-c2",
          key: "bonus_aula2",
          moduleId: "modulo-bonus",
          moduleOrder: 6,
          order: 2,
          numberFormatted: "02",
          title: lessonContent.bonus_aula2.title,
          duration: lessonContent.bonus_aula2.duration,
          videoUrl: videoUrls.bonus_aula2,
          videoId: extractYouTubeId(videoUrls.bonus_aula2),
          description: lessonContent.bonus_aula2.description
        },
        {
          id: "bonus-c3",
          key: "bonus_aula3",
          moduleId: "modulo-bonus",
          moduleOrder: 6,
          order: 3,
          numberFormatted: "03",
          title: lessonContent.bonus_aula3.title,
          duration: lessonContent.bonus_aula3.duration,
          videoUrl: videoUrls.bonus_aula3,
          videoId: extractYouTubeId(videoUrls.bonus_aula3),
          description: lessonContent.bonus_aula3.description
        }
      ]
    }
  ]
};

// ===============================
// FUNCIONES AUXILIARES DE CONSULTA
// ===============================
export function getAllLessons(): Lesson[] {
  return courseData.modules.flatMap(m => m.lessons);
}

export function getLessonById(id: string): Lesson | undefined {
  return getAllLessons().find(lesson => lesson.id === id);
}

export function getModuleById(moduleId: string): Module | undefined {
  return courseData.modules.find(m => m.id === moduleId);
}

export function getNextAndPrevLesson(currentLessonId: string): { prevLesson?: Lesson; nextLesson?: Lesson } {
  const all = getAllLessons();
  const currentIndex = all.findIndex(l => l.id === currentLessonId);
  if (currentIndex === -1) return {};

  return {
    prevLesson: currentIndex > 0 ? all[currentIndex - 1] : undefined,
    nextLesson: currentIndex < all.length - 1 ? all[currentIndex + 1] : undefined
  };
}

// ===============================
// MATERIALES COMPLEMENTARIOS (PDFs)
// ===============================
export interface LessonMaterial {
  lessonId: string;
  moduleId: string;
  moduleTitle: string;
  title: string;
  description: string;
  totalPages: number;
  pdfUrl: string;
  fileSizeFormatted: string;
}

export const lessonMaterials: Record<string, LessonMaterial> = {
  "m1-c1": {
    lessonId: "m1-c1",
    moduleId: "modulo-1",
    moduleTitle: "Módulo 1 — Fundamentos de la Creación con IA",
    title: "Guía Oficial: Cómo utilizar la IA en el proceso de creación",
    description: "Manual didáctico integral, taxonomía de modelos LLM, ingeniería de prompts paso a paso y cuaderno de ejercicios prácticos.",
    totalPages: 15,
    pdfUrl: "/materiales/modulo-1/clase-01.pdf",
    fileSizeFormatted: "682 KB"
  },
  "m1-c2": {
    lessonId: "m1-c2",
    moduleId: "modulo-1",
    moduleTitle: "Módulo 1 — Fundamentos de la Creación con IA",
    title: "Guía Oficial: Transformando ideas en proyectos digitales",
    description: "Método de descomposición estructurada WBS-AI, perfilado de audiencias, mapa de ruta de producción y cuaderno de notas.",
    totalPages: 15,
    pdfUrl: "/materiales/modulo-1/clase-02.pdf",
    fileSizeFormatted: "708 KB"
  },
  "m2-c1": {
    lessonId: "m2-c1",
    moduleId: "modulo-2",
    moduleTitle: "Módulo 2 — Generación de Contenido e Imágenes",
    title: "Guía Oficial: Creando textos y contenido con IA",
    description: "Sistema C.R.E.A. para redacción asistida, calibración de voz de marca, plantillas maestras y checklist de pulido editorial.",
    totalPages: 15,
    pdfUrl: "/materiales/modulo-2/clase-01.pdf",
    fileSizeFormatted: "654 KB"
  },
  "m2-c2": {
    lessonId: "m2-c2",
    moduleId: "modulo-2",
    moduleTitle: "Módulo 2 — Generación de Contenido e Imágenes",
    title: "Guía Oficial: Adaptando un contenido a diferentes formatos",
    description: "Método 1-a-5 de transmutación multicanal: guiones verticales de 60s, carruseles de 8 láminas, newsletters y resúmenes ejecutivos.",
    totalPages: 15,
    pdfUrl: "/materiales/modulo-2/clase-02.pdf",
    fileSizeFormatted: "658 KB"
  },
  "m3-c1": {
    lessonId: "m3-c1",
    moduleId: "modulo-3",
    moduleTitle: "Módulo 3 — Creación y Edición Visual con IA",
    title: "Guía Oficial: Creando imágenes con inteligencia artificial",
    description: "Dirección de arte con la fórmula S.C.I.E., parámetros técnicos (aspect ratios, stylize), prompts para Midjourney y DALL-E 3.",
    totalPages: 15,
    pdfUrl: "/materiales/modulo-3/clase-01.pdf",
    fileSizeFormatted: "674 KB"
  },
  "m3-c2": {
    lessonId: "m3-c2",
    moduleId: "modulo-3",
    moduleTitle: "Módulo 3 — Creación y Edición Visual con IA",
    title: "Guía Oficial: Creando materiales visuales para contenidos digitales",
    description: "Diseño editorial de portadas para e-books, mockups 3D en dispositivos, miniaturas de alto CTR y plantillas en Canva y Figma.",
    totalPages: 15,
    pdfUrl: "/materiales/modulo-3/clase-02.pdf",
    fileSizeFormatted: "657 KB"
  },
  "m4-c1": {
    lessonId: "m4-c1",
    moduleId: "modulo-4",
    moduleTitle: "Módulo 4 — Desarrollo y Estructuración de Productos Digitales",
    title: "Guía Oficial: Desarrollando ideas para productos digitales",
    description: "Matriz de validación de demanda comercial, simulación de focus groups con IA, propuesta de valor única (UVP) y selección de formatos.",
    totalPages: 15,
    pdfUrl: "/materiales/modulo-4/clase-01.pdf",
    fileSizeFormatted: "646 KB"
  },
  "m4-c2": {
    lessonId: "m4-c2",
    moduleId: "modulo-4",
    moduleTitle: "Módulo 4 — Desarrollo y Estructuración de Productos Digitales",
    title: "Guía Oficial: Estructurando un producto digital con apoyo de la IA",
    description: "Modelo curricular 5x2 de AI Business System, diseño de fichas técnicas de lección, asignación de materiales y prevención de deserción.",
    totalPages: 15,
    pdfUrl: "/materiales/modulo-4/clase-02.pdf",
    fileSizeFormatted: "646 KB"
  },
  "m5-c1": {
    lessonId: "m5-c1",
    moduleId: "modulo-5",
    moduleTitle: "Módulo 5 — Revisión, Publicación y Lanzamiento",
    title: "Guía Oficial: Organizando y revisando tu material digital",
    description: "Auditoría en 3 niveles (Macro, Meso y Micro), la Lente del Alumno Confundido, checklist maestro de pre-lanzamiento y control ortotipográfico.",
    totalPages: 15,
    pdfUrl: "/materiales/modulo-5/clase-01.pdf",
    fileSizeFormatted: "683 KB"
  },
  "m5-c2": {
    lessonId: "m5-c2",
    moduleId: "modulo-5",
    moduleTitle: "Módulo 5 — Revisión, Publicación y Lanzamiento",
    title: "Guía Oficial: Publicando y presentando tu creación",
    description: "Estrategia de lanzamiento semanal de 5 días, copywriting de oferta, protocolo de bienvenida de alumnos y circuito de testimonios tempranos.",
    totalPages: 15,
    pdfUrl: "/materiales/modulo-5/clase-02.pdf",
    fileSizeFormatted: "664 KB"
  },
  "bonus-c1": {
    lessonId: "bonus-c1",
    moduleId: "modulo-bonus",
    moduleTitle: "Módulo Bônus — Masterclasses y Práctica Aplicada",
    title: "Masterclass Oficial: AI Creator Prompts — Do Zero ao Resultado",
    description: "Ingeniería de prompts avanzada: Few-Shot Prompting, Chain of Thought, Mega-Prompts modulares de más de 300 palabras y catálogo de modificadores.",
    totalPages: 15,
    pdfUrl: "/materiales/bonus/clase-01.pdf",
    fileSizeFormatted: "699 KB"
  },
  "bonus-c2": {
    lessonId: "bonus-c2",
    moduleId: "modulo-bonus",
    moduleTitle: "Módulo Bônus — Masterclasses y Práctica Aplicada",
    title: "Masterclass Oficial: AI Creator Projects — 5 Projetos para Praticar",
    description: "Taller práctico guiado paso a paso para ejecutar 5 productos reales: Guía Digital, Kit Operativo, Set Multicanal, Presentación y Mini-Curso.",
    totalPages: 15,
    pdfUrl: "/materiales/bonus/clase-02.pdf",
    fileSizeFormatted: "709 KB"
  },
  "m1-c3": {
    lessonId: "m1-c3",
    moduleId: "modulo-1",
    moduleTitle: "Módulo 1 — Fundamentos de la Creación con IA",
    title: "Guía Oficial: Creando tu primer plan de uso de IA",
    description: "Diseño de mapa de adopción estratégica de IA, matriz de delegación cognitiva en 3 niveles, auditoría de cuellos de botella y cuaderno de trabajo.",
    totalPages: 15,
    pdfUrl: "/materiales/modulo-1/clase-03.pdf",
    fileSizeFormatted: "675 KB"
  },
  "m2-c3": {
    lessonId: "m2-c3",
    moduleId: "modulo-2",
    moduleTitle: "Módulo 2 — Generación de Contenido e Imágenes",
    title: "Guía Oficial: Creando una campaña de contenido con IA",
    description: "Estructura de campaña en 3 fases (Atracción, Valor y Decisión), calendario editorial coordinado, prompts maestros multicanal y checklist de coherencia.",
    totalPages: 15,
    pdfUrl: "/materiales/modulo-2/clase-03.pdf",
    fileSizeFormatted: "668 KB"
  },
  "m3-c3": {
    lessonId: "m3-c3",
    moduleId: "modulo-3",
    moduleTitle: "Módulo 3 — Creación y Edición Visual con IA",
    title: "Guía Oficial: Creando una biblioteca inteligente de respuestas",
    description: "Repositorio centralizado de conocimiento de marca, prompts de parametrización para atención al cliente y alumnos, categorización de FAQs y protocolo de soporte.",
    totalPages: 15,
    pdfUrl: "/materiales/modulo-3/clase-03.pdf",
    fileSizeFormatted: "660 KB"
  },
  "m4-c3": {
    lessonId: "m4-c3",
    moduleId: "modulo-4",
    moduleTitle: "Módulo 4 — Desarrollo y Estructuración de Productos Digitales",
    title: "Guía Oficial: Documentando procesos con IA",
    description: "Metodología de captura de flujos de trabajo, redacción de SOPs (Procedimientos Operativos Estándar), guías de delegación paso a paso y checklists de ejecución.",
    totalPages: 15,
    pdfUrl: "/materiales/modulo-4/clase-03.pdf",
    fileSizeFormatted: "655 KB"
  },
  "m5-c3": {
    lessonId: "m5-c3",
    moduleId: "modulo-5",
    moduleTitle: "Módulo 5 — Revisión, Publicación y Lanzamiento",
    title: "Guía Oficial: Construyendo un flujo de trabajo completo con IA",
    description: "Sistema operativo de creación digital de extremo a extremo, integración de etapas (Captura, Incubación, Producción, Auditoría y Monitoreo) y optimización de ciclo.",
    totalPages: 15,
    pdfUrl: "/materiales/modulo-5/clase-03.pdf",
    fileSizeFormatted: "670 KB"
  },
  "bonus-c3": {
    lessonId: "bonus-c3",
    moduleId: "modulo-bonus",
    moduleTitle: "Módulo Bônus — Masterclasses y Práctica Aplicada",
    title: "Masterclass Oficial: Cómo crear mejores instrucciones para la IA",
    description: "Ingeniería de prompts avanzada con la arquitectura R.C.I.E.F., delimitadores y restricciones negativas, Chain of Thought y meta-prompting para resultados de élite.",
    totalPages: 15,
    pdfUrl: "/materiales/bonus/clase-03.pdf",
    fileSizeFormatted: "690 KB"
  }
};

export function getMaterialByLessonId(lessonId: string): LessonMaterial | undefined {
  return lessonMaterials[lessonId];
}


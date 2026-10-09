export interface GuideTopic {
  id: string;
  title: string;
  subject: string;
  icon: string;
  summary: string;
  content: string[];
  tips: string[];
}

export const guides: GuideTopic[] = [
  {
    id: "mat-ecuaciones",
    title: "Ecuaciones de Primer Grado",
    subject: "Matemáticas",
    icon: "📐",
    summary: "Aprende a resolver ecuaciones lineales paso a paso",
    content: [
      "Una ecuación de primer grado es una igualdad donde la incógnita (x) está elevada a 1.",
      "Para resolverla, debes despejar la variable moviendo los términos de un lado al otro.",
      "Regla de oro: lo que está sumando pasa restando, lo que está multiplicando pasa dividiendo.",
      "Ejemplo: 3x + 5 = 20 → 3x = 20 - 5 → 3x = 15 → x = 15/3 → x = 5",
      "Siempre verifica tu respuesta reemplazando x en la ecuación original.",
      "Recuerda: ambos lados de la ecuación deben mantener el equilibrio."
    ],
    tips: [
      "Siempre agrupa las x de un lado y los números del otro",
      "Simplifica antes de dividir",
      "Verifica tu respuesta siempre",
      "Practica con ejercicios de dificultad progresiva"
    ]
  },
  {
    id: "mat-proporciones",
    title: "Proporciones y Porcentajes",
    subject: "Matemáticas",
    icon: "📊",
    summary: "Domina las proporciones y el cálculo de porcentajes",
    content: [
      "Una proporción es una igualdad entre dos razones: a/b = c/d",
      "Para resolver proporciones usamos la regla de tres o productos cruzados.",
      "Ejemplo: Si 3 cuadernos cuestan $1500, ¿cuánto cuestan 7? → 3/1500 = 7/x → x = 7×1500/3 = $3500",
      "Un porcentaje es una fracción con denominador 100. 25% = 25/100 = 0.25",
      "Para calcular un porcentaje: multiplica el número por el porcentaje dividido en 100.",
      "Ejemplo: 20% de 150 = 150 × 20/100 = 150 × 0.20 = 30"
    ],
    tips: [
      "Convierte porcentajes a decimales para facilitar cálculos",
      "La regla de tres simple resuelve la mayoría de problemas",
      "Practica con situaciones de la vida real (descuentos, propinas, presupuestos)",
      "Recuerda: aumentar un 10% es multiplicar por 1.10"
    ]
  },
  {
    id: "mat-funciones",
    title: "Funciones y Gráficos",
    subject: "Matemáticas",
    icon: "📈",
    summary: "Comprende el concepto de función y cómo graficarlas",
    content: [
      "Una función es una relación donde cada valor de x tiene un único valor de y.",
      "Se escribe como f(x) = expresión. Ejemplo: f(x) = 2x + 3",
      "La función lineal tiene la forma f(x) = mx + b, donde m es la pendiente y b el intercepto.",
      "La pendiente (m) indica cuánto cambia y por cada unidad que cambia x.",
      "Para graficar: crea una tabla de valores (x, y) y ubica los puntos en el plano cartesiano.",
      "Ejemplo: f(x) = 2x + 1 → si x=0, y=1; si x=1, y=3; si x=2, y=5"
    ],
    tips: [
      "Recuerda: pendiente positiva = línea sube, pendiente negativa = línea baja",
      "El intercepto con el eje Y es donde x = 0",
      "Practica identificando pendiente e intercepto en ecuaciones dadas",
      "Las funciones son útiles para modelar situaciones reales (costos, ingresos)"
    ]
  },
  {
    id: "len-figuras",
    title: "Figuras Literarias",
    subject: "Lenguaje",
    icon: "📝",
    summary: "Identifica y comprende las principales figuras literarias",
    content: [
      "Las figuras literarias son recursos que usa el escritor para dar expresividad al texto.",
      "METÁFORA: Identificación directa. 'Sus cabellos de oro' (cabellos rubios = oro).",
      "SÍMIL o COMPARACIÓN: Usa 'como'. 'Fuerte como un león'.",
      "HIPÉRBOLE: Exageración. 'Te lo he dicho un millón de veces'.",
      "PERSONIFICACIÓN: Dar cualidades humanas a algo no humano. 'El viento susurraba'.",
      "ANÁFORA: Repetición al inicio de versos. 'Es tan corto el amor...'",
      "ALITERACIÓN: Repetición de sonidos. 'El ruido con que rueda la ronca tempestad'."
    ],
    tips: [
      "Para diferenciar metáfora de símil: busca 'como', 'cual', 'parece'",
      "La hipérbole siempre exagera, nunca es literal",
      "En la PAES preguntan mucho por identificación de figuras",
      "Lee poemas y noticias para practicar identificando figuras"
    ]
  },
  {
    id: "len-comprension",
    title: "Comprensión Lectora",
    subject: "Lenguaje",
    icon: "📖",
    summary: "Técnicas para comprender y analizar textos",
    content: [
      "La comprensión lectora es la capacidad de entender e interpretar un texto.",
      "Niveles de comprensión: Literal (lo que dice), Inferencial (lo que se deduce), Crítico (opinión fundamentada).",
      "Para la PAES: Lee primero las preguntas, luego el texto buscando la información específica.",
      "Identifica: Tema central, idea principal, ideas secundarias, propósito del autor.",
      "Los conectores te ayudan a entender la estructura: pero (contraste), además (agregación), por lo tanto (consecuencia).",
      "No te quedes pegado en una palabra desconocida. Usa el contexto para inferir su significado."
    ],
    tips: [
      "Subraya las ideas principales mientras lees",
      "Resume cada párrafo en una oración",
      "Identifica el tipo de texto (argumentativo, narrativo, expositivo)",
      "Lee artículos de diario, revistas y ensayos para practicar"
    ]
  },
  {
    id: "len-tipos-texto",
    title: "Tipos de Texto",
    subject: "Lenguaje",
    icon: "📄",
    summary: "Diferencia entre textos narrativos, argumentativos y expositivos",
    content: [
      "TEXTO NARRATIVO: Cuenta una historia o sucesos. Tiene personajes, tiempo y espacio. Ej: cuentos, novelas.",
      "TEXTO ARGUMENTATIVO: Defiende una tesis con argumentos. Busca convencer. Ej: editoriales, ensayos.",
      "TEXTO EXPOSITIVO: Explica o informa sobre un tema de forma objetiva. Ej: libros de texto, noticias.",
      "TEXTO DESCRIPTIVO: Detalla características de personas, objetos o lugares.",
      "TEXTO INSTRUCTIVO: Da instrucciones paso a paso. Ej: recetas, manuales.",
      "En la PAES es clave identificar el propósito del autor: ¿quiere contar, convencer, informar o describir?"
    ],
    tips: [
      "Si el texto opina y da razones → es argumentativo",
      "Si cuenta hechos o historia → es narrativo",
      "Si explica un tema sin opinar → es expositivo",
      "Fíjate en los verbos: narrativo usa pasado, expositivo usa presente"
    ]
  },
  {
    id: "cie-celula",
    title: "La Célula y sus Organelos",
    subject: "Ciencias",
    icon: "🔬",
    summary: "Conoce la estructura celular y la función de cada organelo",
    content: [
      "La célula es la unidad básica de todos los seres vivos.",
      "Célula animal vs vegetal: la vegetal tiene pared celular, cloroplastos y vacuola grande.",
      "Núcleo: contiene el ADN, controla la célula.",
      "Mitocondria: produce energía (respiración celular).",
      "Ribosomas: sintetizan proteínas.",
      "Membrana celular: controla lo que entra y sale de la célula.",
      "Retículo endoplasmático: transporte de sustancias. Rugoso (con ribosomas) y liso (sin ellos)."
    ],
    tips: [
      "Haz un dibujo de la célula con sus partes etiquetadas",
      "Asocia cada organelo con su función (ej: mitocondria = central de energía)",
      "Recuerda las diferencias clave entre célula animal y vegetal",
      "La PAES pregunta mucho sobre función de organelos"
    ]
  },
  {
    id: "cie-cuerpo",
    title: "Sistemas del Cuerpo Humano",
    subject: "Ciencias",
    icon: "🫀",
    summary: "Conoce los principales sistemas que mantienen tu cuerpo funcionando",
    content: [
      "SISTEMA CIRCULATORIO: Corazón bombea sangre por venas y arterias. Transporta oxígeno y nutrientes.",
      "SISTEMA RESPIRATORIO: Pulmones intercambian gases. Inhalamos O₂, exhalamos CO₂.",
      "SISTEMA DIGESTIVO: Descompone alimentos para absorber nutrientes. Boca → esófago → estómago → intestinos.",
      "SISTEMA NERVIOSO: Cerebro, médula espinal y nervios. Controla todas las funciones del cuerpo.",
      "SISTEMA ENDOCRINO: Glándulas que producen hormonas (tiroides, páncreas, suprarrenales).",
      "Todos los sistemas trabajan en conjunto para mantener la homeostasis (equilibrio interno)."
    ],
    tips: [
      "Relaciona cada sistema con su función principal",
      "El corazón es parte del sistema circulatorio, no respiratorio",
      "Las hormonas son mensajeros químicos del cuerpo",
      "Practica con diagramas del cuerpo humano"
    ]
  },
  {
    id: "cie-ecosistemas",
    title: "Ecosistemas y Medio Ambiente",
    subject: "Ciencias",
    icon: "🌍",
    summary: "Entiende cómo funcionan los ecosistemas y la importancia de cuidarlos",
    content: [
      "Un ecosistema es un sistema formado por seres vivos (biocenosis) y su ambiente físico (biotopo).",
      "Cadena alimentaria: productores → consumidores primarios → consumidores secundarios → descomponedores.",
      "Los productores (plantas) hacen fotosíntesis. Son la base de toda cadena alimentaria.",
      "Factores abióticos: luz, temperatura, agua, suelo. Factores bióticos: todos los seres vivos.",
      "Contaminación: alteración negativa del ambiente por sustancias dañinas (plásticos, químicos, gases).",
      "Cambio climático: aumento de temperatura global por efecto invernadero (CO₂, metano)."
    ],
    tips: [
      "Siempre las cadenas alimentarias parten con un productor (planta)",
      "Los descomponedores cierran el ciclo (bacterias, hongos)",
      "Recuerda: el calentamiento global es causado por gases de efecto invernadero",
      "Conecta con temas de actualidad: reciclaje, energías renovables"
    ]
  },
  {
    id: "his-independencia",
    title: "Independencia de Chile",
    subject: "Historia",
    icon: "🇨🇱",
    summary: "El proceso de independencia chileno (1810-1826)",
    content: [
      "La independencia de Chile fue un proceso que duró desde 1810 hasta 1826.",
      "18 de septiembre de 1810: Primera Junta Nacional de Gobierno (inicio del proceso).",
      "Patria Vieja (1810-1814): Primeros gobiernos nacionales. Termina con Desastre de Rancagua.",
      "Reconquista Española (1814-1817): España retoma el control. Represión contra patriotas.",
      "Patria Nueva (1817-1823): San Martín y O'Higgins cruzan los Andes. Batalla de Chacabuco (1817).",
      "12 de febrero de 1818: Declaración formal de Independencia.",
      "Batalla de Maipú (1818): Consolida la independencia. Organización de la República."
    ],
    tips: [
      "Haz una línea de tiempo con las etapas clave",
      "Memoriza las fechas más importantes: 1810, 1814, 1817, 1818",
      "Conoce los personajes principales: O'Higgins, San Martín, Carrera",
      "Relaciona causas internas y externas de la independencia"
    ]
  },
  {
    id: "his-chile-sigloxx",
    title: "Chile en el Siglo XX",
    subject: "Historia",
    icon: "📜",
    summary: "Los principales hitos de Chile durante el siglo XX",
    content: [
      "1920-1930: Crisis económica mundial afecta a Chile. Caída del salitre.",
      "1938-1952: Gobiernos radicales. Industrialización y expansión de la educación.",
      "1960-1970: Reformas sociales. Gobierno de Frei Montalva (Reforma Agraria) y Allende (vía chilena al socialismo).",
      "1973: Golpe de Estado. Inicio de la dictadura militar de Pinochet.",
      "1980: Nueva Constitución. Modelo económico neoliberal.",
      "1988: Plebiscito. El 'No' gana, iniciando la transición a la democracia.",
      "1990: Retorno a la democracia con Patricio Aylwin. Comisión de Verdad y Reconciliación."
    ],
    tips: [
      "Entiende las causas y consecuencias de cada período",
      "Relaciona los hechos con el contexto internacional",
      "La Constitución de 1980 es un tema frecuente en la PAES",
      "Comprende los conceptos de democracia, dictadura y transición"
    ]
  },
  {
    id: "his-derechos",
    title: "Derechos Humanos y Ciudadanía",
    subject: "Historia",
    icon: "⚖️",
    summary: "Conoce tus derechos y deberes como ciudadano",
    content: [
      "Los Derechos Humanos son universales, inalienables e indivisibles. Aplican a todas las personas.",
      "Declaración Universal de DDHH (1948): 30 derechos fundamentales aprobados por la ONU.",
      "Derechos civiles: vida, libertad, igualdad ante la ley, propiedad.",
      "Derechos políticos: votar, ser elegido, participar en asuntos públicos.",
      "Derechos sociales: educación, salud, trabajo, vivienda digna.",
      "Los deberes ciudadanos incluyen: respetar la ley, pagar impuestos, votar, cuidar el bien común."
    ],
    tips: [
      "Conoce la diferencia entre derechos y deberes",
      "Los DDHH no se pueden quitar ni renunciar",
      "La democracia se basa en el respeto a los derechos de todos",
      "Relaciona con situaciones actuales de tu comunidad"
    ]
  }
];

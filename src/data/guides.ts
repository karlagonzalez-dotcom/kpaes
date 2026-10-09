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
      "Practica con situaciones de la vida real (descuentos, propinas)",
      "Recuerda: aumentar un 10% es multiplicar por 1.10"
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
      "Lee poemas y practica identificando las figuras"
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
      "Practica leyendo artículos de diario y revistas"
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
  }
];

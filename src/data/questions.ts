export interface Question {
  id: number;
  subject: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const mathQuestions: Question[] = [
  {
    id: 1,
    subject: "Matemáticas",
    question: "Si 3x + 7 = 22, ¿cuál es el valor de x?",
    options: ["3", "5", "7", "4"],
    correctAnswer: 1,
    explanation: "3x + 7 = 22 → 3x = 15 → x = 5"
  },
  {
    id: 2,
    subject: "Matemáticas",
    question: "¿Cuál es el 25% de 180?",
    options: ["40", "45", "50", "35"],
    correctAnswer: 1,
    explanation: "25% de 180 = 0.25 × 180 = 45"
  },
  {
    id: 3,
    subject: "Matemáticas",
    question: "Si un triángulo tiene ángulos de 60° y 80°, ¿cuánto mide el tercer ángulo?",
    options: ["30°", "40°", "50°", "60°"],
    correctAnswer: 1,
    explanation: "La suma de ángulos internos de un triángulo es 180°. Entonces: 180° - 60° - 80° = 40°"
  },
  {
    id: 4,
    subject: "Matemáticas",
    question: "¿Cuál es el resultado de 2³ × 2⁴?",
    options: ["2⁷", "2¹²", "4⁷", "2¹"],
    correctAnswer: 0,
    explanation: "Cuando multiplicamos potencias de igual base, sumamos los exponentes: 2³ × 2⁴ = 2⁽³⁺⁴⁾ = 2⁷"
  },
  {
    id: 5,
    subject: "Matemáticas",
    question: "Si f(x) = 2x + 3, ¿cuánto vale f(4)?",
    options: ["8", "11", "10", "9"],
    correctAnswer: 1,
    explanation: "f(4) = 2(4) + 3 = 8 + 3 = 11"
  },
  {
    id: 6,
    subject: "Matemáticas",
    question: "¿Cuál es la raíz cuadrada de 144?",
    options: ["11", "12", "13", "14"],
    correctAnswer: 1,
    explanation: "√144 = 12, porque 12 × 12 = 144"
  },
  {
    id: 7,
    subject: "Matemáticas",
    question: "En una proporción, si 3/5 = x/20, ¿cuánto vale x?",
    options: ["10", "12", "15", "8"],
    correctAnswer: 1,
    explanation: "3/5 = x/20 → 3 × 20 = 5 × x → 60 = 5x → x = 12"
  },
  {
    id: 8,
    subject: "Matemáticas",
    question: "¿Cuánto es (-3)²?",
    options: ["-9", "9", "-6", "6"],
    correctAnswer: 1,
    explanation: "(-3)² = (-3) × (-3) = 9. Un número negativo elevado al cuadrado siempre es positivo."
  },
  {
    id: 9,
    subject: "Matemáticas",
    question: "Si el perímetro de un cuadrado es 36 cm, ¿cuánto mide su lado?",
    options: ["6 cm", "8 cm", "9 cm", "12 cm"],
    correctAnswer: 2,
    explanation: "El perímetro del cuadrado = 4 × lado. Entonces: 36/4 = 9 cm"
  },
  {
    id: 10,
    subject: "Matemáticas",
    question: "¿Cuál es el MCD (Máximo Común Divisor) de 12 y 18?",
    options: ["2", "3", "6", "9"],
    correctAnswer: 2,
    explanation: "Factores de 12: 1,2,3,4,6,12. Factores de 18: 1,2,3,6,9,18. El mayor común es 6."
  },
  {
    id: 11,
    subject: "Matemáticas",
    question: "Un producto cuesta $15.000. Si tiene un descuento del 20%, ¿cuánto se paga?",
    options: ["$13.000", "$12.000", "$11.000", "$10.000"],
    correctAnswer: 1,
    explanation: "20% de $15.000 = $3.000. Precio final = $15.000 - $3.000 = $12.000"
  },
  {
    id: 12,
    subject: "Matemáticas",
    question: "¿Cuál es la pendiente de la recta y = 3x - 2?",
    options: ["-2", "3", "-3", "2"],
    correctAnswer: 1,
    explanation: "En la ecuación y = mx + b, m es la pendiente. Aquí m = 3."
  },
  {
    id: 13,
    subject: "Matemáticas",
    question: "Si un auto recorre 240 km en 3 horas, ¿cuál es su velocidad promedio?",
    options: ["60 km/h", "70 km/h", "80 km/h", "90 km/h"],
    correctAnswer: 2,
    explanation: "Velocidad = distancia/tiempo = 240/3 = 80 km/h"
  },
  {
    id: 14,
    subject: "Matemáticas",
    question: "¿Cuánto es 3/4 + 1/2?",
    options: ["4/6", "5/4", "1", "4/8"],
    correctAnswer: 1,
    explanation: "3/4 + 1/2 = 3/4 + 2/4 = 5/4"
  },
  {
    id: 15,
    subject: "Matemáticas",
    question: "¿Cuál es el área de un rectángulo de base 8 cm y altura 5 cm?",
    options: ["13 cm²", "26 cm²", "40 cm²", "80 cm²"],
    correctAnswer: 2,
    explanation: "Área del rectángulo = base × altura = 8 × 5 = 40 cm²"
  }
];

export const languageQuestions: Question[] = [
  {
    id: 1,
    subject: "Lenguaje",
    question: "¿Cuál es el sinónimo de 'efímero'?",
    options: ["Eterno", "Pasajero", "Fuerte", "Antiguo"],
    correctAnswer: 1,
    explanation: "Efímero significa que dura poco tiempo, pasajero. Es sinónimo de fugaz."
  },
  {
    id: 2,
    subject: "Lenguaje",
    question: "¿Qué figura literaria se usa en 'sus ojos eran dos luceros'?",
    options: ["Símil", "Metáfora", "Hipérbole", "Personificación"],
    correctAnswer: 1,
    explanation: "Es una metáfora porque identifica directamente los ojos con luceros sin usar 'como' o 'cual'."
  },
  {
    id: 3,
    subject: "Lenguaje",
    question: "¿Cuál es el antónimo de 'prolijo'?",
    options: ["Detallado", "Descuidado", "Ordenado", "Limpio"],
    correctAnswer: 1,
    explanation: "Prolijo significa cuidadoso y detallado. Su antónimo es descuidado."
  },
  {
    id: 4,
    subject: "Lenguaje",
    question: "En la oración 'Los niños juegan en el parque', ¿cuál es el sujeto?",
    options: ["juegan", "en el parque", "Los niños", "el parque"],
    correctAnswer: 2,
    explanation: "El sujeto es 'Los niños' porque es quien realiza la acción de jugar."
  },
  {
    id: 5,
    subject: "Lenguaje",
    question: "¿Qué tipo de narrador conoce los pensamientos de todos los personajes?",
    options: ["Protagonista", "Testigo", "Omnisciente", "Objetivo"],
    correctAnswer: 2,
    explanation: "El narrador omnisciente lo sabe todo: pensamientos, sentimientos y acciones de todos los personajes."
  },
  {
    id: 6,
    subject: "Lenguaje",
    question: "¿Cuál de las siguientes palabras es esdrújula?",
    options: ["Canción", "Música", "Reloj", "Papel"],
    correctAnswer: 1,
    explanation: "MÚ-si-ca es esdrújula porque el acento prosódico cae en la antepenúltima sílaba."
  },
  {
    id: 7,
    subject: "Lenguaje",
    question: "¿Qué es una 'tesis' en un texto argumentativo?",
    options: ["La conclusión", "La idea principal que se defiende", "Un ejemplo", "El título"],
    correctAnswer: 1,
    explanation: "La tesis es la idea o postura principal que el autor defiende con argumentos."
  },
  {
    id: 8,
    subject: "Lenguaje",
    question: "¿Qué recurso se usa en 'te llamé mil veces'?",
    options: ["Metáfora", "Hipérbole", "Anáfora", "Aliteración"],
    correctAnswer: 1,
    explanation: "Es una hipérbole porque exagera la cantidad de veces que llamó para enfatizar."
  },
  {
    id: 9,
    subject: "Lenguaje",
    question: "¿Cuál es el género literario al que pertenece un poema?",
    options: ["Narrativo", "Dramático", "Lírico", "Ensayo"],
    correctAnswer: 2,
    explanation: "El poema pertenece al género lírico, que expresa sentimientos y emociones del autor."
  },
  {
    id: 10,
    subject: "Lenguaje",
    question: "¿Qué conector indica contraste?",
    options: ["Además", "Por lo tanto", "Sin embargo", "En primer lugar"],
    correctAnswer: 2,
    explanation: "'Sin embargo' es un conector adversativo que indica contraste o oposición."
  },
  {
    id: 11,
    subject: "Lenguaje",
    question: "¿Qué tipo de texto busca convencer al lector con argumentos?",
    options: ["Narrativo", "Expositivo", "Argumentativo", "Descriptivo"],
    correctAnswer: 2,
    explanation: "El texto argumentativo tiene como propósito convencer o persuadir al lector mediante argumentos."
  },
  {
    id: 12,
    subject: "Lenguaje",
    question: "¿Cuál es el propósito de un texto expositivo?",
    options: ["Convencer", "Entretener", "Informar y explicar", "Describir emociones"],
    correctAnswer: 2,
    explanation: "El texto expositivo tiene como propósito informar y explicar un tema de manera objetiva."
  },
  {
    id: 13,
    subject: "Lenguaje",
    question: "¿Qué es un 'narrador testigo'?",
    options: ["Conoce todo de los personajes", "Es un personaje que cuenta lo que ve", "No aparece en la historia", "Cuenta en segunda persona"],
    correctAnswer: 1,
    explanation: "El narrador testigo es un personaje secundario que relata los hechos desde su perspectiva."
  },
  {
    id: 14,
    subject: "Lenguaje",
    question: "¿Cuál palabra está correctamente escrita?",
    options: ["Haver", "Haber", "Aber", "Haber"],
    correctAnswer: 1,
    explanation: "La forma correcta es 'haber' con h intercalada."
  },
  {
    id: 15,
    subject: "Lenguaje",
    question: "¿Qué función cumple el párrafo de cierre en un texto argumentativo?",
    options: ["Presentar el tema", "Dar ejemplos", "Resumir y reforzar la tesis", "Introducir nuevos argumentos"],
    correctAnswer: 2,
    explanation: "La conclusión resume los argumentos principales y refuerza la tesis defendida."
  }
];

export const scienceQuestions: Question[] = [
  {
    id: 1,
    subject: "Ciencias",
    question: "¿Cuál es la fórmula química del agua?",
    options: ["CO₂", "H₂O", "NaCl", "O₂"],
    correctAnswer: 1,
    explanation: "El agua está compuesta por 2 átomos de hidrógeno y 1 de oxígeno: H₂O"
  },
  {
    id: 2,
    subject: "Ciencias",
    question: "¿Qué órgano del cuerpo humano produce la insulina?",
    options: ["Hígado", "Riñón", "Páncreas", "Estómago"],
    correctAnswer: 2,
    explanation: "El páncreas produce insulina, hormona que regula el nivel de glucosa en la sangre."
  },
  {
    id: 3,
    subject: "Ciencias",
    question: "¿Cuál es la unidad básica de la vida?",
    options: ["Átomo", "Molécula", "Célula", "Tejido"],
    correctAnswer: 2,
    explanation: "La célula es la unidad básica estructural y funcional de todos los seres vivos."
  },
  {
    id: 4,
    subject: "Ciencias",
    question: "¿Qué gas es necesario para la combustión?",
    options: ["Nitrógeno", "Hidrógeno", "Oxígeno", "Helio"],
    correctAnswer: 2,
    explanation: "El oxígeno es necesario para la combustión. Sin él, el fuego no puede mantenerse."
  },
  {
    id: 5,
    subject: "Ciencias",
    question: "¿Cuántos huesos tiene aproximadamente el cuerpo humano adulto?",
    options: ["106", "206", "306", "156"],
    correctAnswer: 1,
    explanation: "El cuerpo humano adulto tiene aproximadamente 206 huesos."
  },
  {
    id: 6,
    subject: "Ciencias",
    question: "¿Qué tipo de energía tiene un objeto en movimiento?",
    options: ["Potencial", "Cinética", "Térmica", "Nuclear"],
    correctAnswer: 1,
    explanation: "La energía cinética es la que posee un cuerpo debido a su movimiento."
  },
  {
    id: 7,
    subject: "Ciencias",
    question: "¿Cuál es el planeta más grande del sistema solar?",
    options: ["Saturno", "Júpiter", "Neptuno", "Urano"],
    correctAnswer: 1,
    explanation: "Júpiter es el planeta más grande del sistema solar, con un diámetro de unos 139.820 km."
  },
  {
    id: 8,
    subject: "Ciencias",
    question: "¿Qué proceso realizan las plantas para producir su alimento?",
    options: ["Respiración", "Fotosíntesis", "Fermentación", "Digestión"],
    correctAnswer: 1,
    explanation: "La fotosíntesis es el proceso por el cual las plantas convierten luz solar, agua y CO₂ en glucosa y oxígeno."
  },
  {
    id: 9,
    subject: "Ciencias",
    question: "¿Cuál es el pH del agua pura?",
    options: ["5", "7", "9", "0"],
    correctAnswer: 1,
    explanation: "El agua pura tiene un pH de 7, que es neutro en la escala de pH."
  },
  {
    id: 10,
    subject: "Ciencias",
    question: "¿Qué estructura de la célula contiene el ADN?",
    options: ["Mitocondria", "Ribosoma", "Núcleo", "Membrana"],
    correctAnswer: 2,
    explanation: "El núcleo celular contiene la mayor parte del ADN de la célula."
  },
  {
    id: 11,
    subject: "Ciencias",
    question: "¿Cuál es la función principal de los glóbulos rojos?",
    options: ["Defender contra infecciones", "Transportar oxígeno", "Coagular la sangre", "Producir hormonas"],
    correctAnswer: 1,
    explanation: "Los glóbulos rojos (eritrocitos) transportan oxígeno desde los pulmones a todos los tejidos."
  },
  {
    id: 12,
    subject: "Ciencias",
    question: "¿Qué tipo de energía se transforma en un panel solar?",
    options: ["Eólica a eléctrica", "Luminosa a eléctrica", "Química a eléctrica", "Nuclear a eléctrica"],
    correctAnswer: 1,
    explanation: "Los paneles solares transforman la energía luminosa (del sol) en energía eléctrica."
  },
  {
    id: 13,
    subject: "Ciencias",
    question: "¿Qué organelo celular se encarga de la fotosíntesis?",
    options: ["Mitocondria", "Cloroplasto", "Ribosoma", "Lisosoma"],
    correctAnswer: 1,
    explanation: "Los cloroplastos contienen clorofila y son donde ocurre la fotosíntesis en las células vegetales."
  },
  {
    id: 14,
    subject: "Ciencias",
    question: "¿Cuál es la capa de la Tierra donde vivimos?",
    options: ["Manto", "Corteza", "Núcleo externo", "Núcleo interno"],
    correctAnswer: 1,
    explanation: "La corteza terrestre es la capa más externa y sólida de la Tierra, donde vivimos."
  },
  {
    id: 15,
    subject: "Ciencias",
    question: "¿Qué gas contribuye más al efecto invernadero?",
    options: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Hidrógeno"],
    correctAnswer: 2,
    explanation: "El CO₂ es el principal gas de efecto invernadero producido por actividades humanas."
  }
];

export const historyQuestions: Question[] = [
  {
    id: 1,
    subject: "Historia",
    question: "¿En qué año se produjo la Independencia de Chile?",
    options: ["1808", "1810", "1818", "1826"],
    correctAnswer: 2,
    explanation: "Chile declaró su independencia el 12 de febrero de 1818, aunque el proceso inició en 1810."
  },
  {
    id: 2,
    subject: "Historia",
    question: "¿Quién fue el primer presidente de Chile?",
    options: ["Bernardo O'Higgins", "Manuel Blanco Encalada", "José Miguel Carrera", "Ramón Freire"],
    correctAnswer: 1,
    explanation: "Manuel Blanco Encalada fue el primer presidente de Chile en 1826."
  },
  {
    id: 3,
    subject: "Historia",
    question: "¿Qué civilización prehispánica habitaba Chile central antes de la llegada de los españoles?",
    options: ["Aztecas", "Incas", "Mapuches", "Mayas"],
    correctAnswer: 2,
    explanation: "Los Mapuches (o Araucanos) habitaban la zona central y sur de Chile."
  },
  {
    id: 4,
    subject: "Historia",
    question: "¿En qué año ocurrió el 'Terremoto de Valdivia', el más grande registrado?",
    options: ["1906", "1939", "1960", "1985"],
    correctAnswer: 2,
    explanation: "El Gran Terremoto de Valdivia ocurrió el 22 de mayo de 1960, con magnitud 9.5."
  },
  {
    id: 5,
    subject: "Historia",
    question: "¿Qué tratado puso fin a la Guerra del Pacífico?",
    options: ["Tratado de Ancón", "Tratado de Versalles", "Pacto de Lima", "Tratado de 1881"],
    correctAnswer: 0,
    explanation: "El Tratado de Ancón (1883) puso fin formalmente a la Guerra del Pacífico entre Chile y Perú."
  },
  {
    id: 6,
    subject: "Historia",
    question: "¿Cuál fue la causa principal de la Revolución Francesa?",
    options: ["La invasión extranjera", "La desigualdad social y crisis económica", "El descubrimiento de América", "La guerra civil"],
    correctAnswer: 1,
    explanation: "La desigualdad entre los tres estados, sumada a la crisis económica, fue la causa principal."
  },
  {
    id: 7,
    subject: "Historia",
    question: "¿En qué siglo comenzó la colonización española de América?",
    options: ["Siglo XIV", "Siglo XV", "Siglo XVI", "Siglo XVII"],
    correctAnswer: 1,
    explanation: "La colonización española de América comenzó a fines del siglo XV con el viaje de Colón en 1492."
  },
  {
    id: 8,
    subject: "Historia",
    question: "¿Qué fue la 'Reconquista' en la historia de Chile?",
    options: ["La vuelta de los españoles al poder (1814-1817)", "La independencia total", "La guerra contra Perú", "La colonización del sur"],
    correctAnswer: 0,
    explanation: "La Reconquista (1814-1817) fue el período en que España retomó el control de Chile tras la derrota de Rancagua."
  },
  {
    id: 9,
    subject: "Historia",
    question: "¿Quién lideró el Ejército de los Andes?",
    options: ["Simón Bolívar", "José de San Martín", "Bernardo O'Higgins", "Manuel Rodríguez"],
    correctAnswer: 1,
    explanation: "José de San Martín lideró el Ejército de los Andes en la campaña libertadora de Chile."
  },
  {
    id: 10,
    subject: "Historia",
    question: "¿Qué significan las siglas ONU?",
    options: ["Organización Nacional Unida", "Organización de Naciones Unidas", "Oficina de Naciones Unidas", "Orden de Naciones Unidas"],
    correctAnswer: 1,
    explanation: "ONU significa Organización de Naciones Unidas, fundada en 1945."
  },
  {
    id: 11,
    subject: "Historia",
    question: "¿En qué año se realizó el plebiscito que marcó el fin de la dictadura en Chile?",
    options: ["1985", "1988", "1990", "1989"],
    correctAnswer: 1,
    explanation: "El plebiscito se realizó el 5 de octubre de 1988, donde ganó el 'No', iniciando la transición democrática."
  },
  {
    id: 12,
    subject: "Historia",
    question: "¿Qué es la Declaración Universal de los Derechos Humanos?",
    options: ["Una ley chilena", "Un documento de la ONU de 1948", "Un tratado de paz", "Una constitución europea"],
    correctAnswer: 1,
    explanation: "Es un documento adoptado por la ONU el 10 de diciembre de 1948 que establece los derechos fundamentales de todas las personas."
  },
  {
    id: 13,
    subject: "Historia",
    question: "¿Qué sistema de gobierno se caracteriza por la participación ciudadana mediante el voto?",
    options: ["Monarquía", "Dictadura", "Democracia", "Teocracia"],
    correctAnswer: 2,
    explanation: "La democracia es el sistema donde el pueblo participa en las decisiones políticas a través del voto."
  },
  {
    id: 14,
    subject: "Historia",
    question: "¿Qué fue la Guerra Fría?",
    options: ["Una guerra en el Ártico", "Conflicto entre EE.UU. y la URSS sin enfrentamiento directo", "Una guerra entre Chile y Argentina", "La invasión de Europa"],
    correctAnswer: 1,
    explanation: "La Guerra Fría (1947-1991) fue la tensión política, económica e ideológica entre EE.UU. y la URSS."
  },
  {
    id: 15,
    subject: "Historia",
    question: "¿Cuál es un deber ciudadano en una democracia?",
    options: ["No pagar impuestos", "Respetar las leyes y participar cívically", "Obedecer solo al presidente", "Ignorar los derechos de otros"],
    correctAnswer: 1,
    explanation: "En democracia, los ciudadanos deben respetar las leyes, votar y participar activamente en la vida cívica."
  }
];

export const allQuestions: Record<string, Question[]> = {
  "Matemáticas": mathQuestions,
  "Lenguaje": languageQuestions,
  "Ciencias": scienceQuestions,
  "Historia": historyQuestions,
};

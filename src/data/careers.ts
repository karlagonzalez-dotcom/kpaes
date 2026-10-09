export interface Career {
  id: string;
  name: string;
  area: string;
  duration: string;
  description: string;
  salary: string;
  employability: string;
  skills: string[];
  icon: string;
}

// Datos de sueldos e empleabilidad según mifuturo.cl (MINEDUC) - Septiembre 2024
// Ingreso bruto mensual al 5° año de egreso | Empleabilidad al 2° año de titulación

export const careers: Career[] = [
  // ===== SALUD Y TERAPIAS =====
  {
    id: "medicina",
    name: "Medicina",
    area: "Salud",
    duration: "7 años + especialidad",
    description: "Profesional que diagnostica, trata y previene enfermedades. Puede especializarse en diversas áreas como cardiología, pediatría, cirugía, etc.",
    salary: "$4.021.010",
    employability: "89,0%",
    skills: ["Vocación de servicio", "Resistencia", "Análisis", "Empatía", "Estudio constante"],
    icon: "⚕️"
  },
  {
    id: "odontologia",
    name: "Odontología",
    area: "Salud",
    duration: "6 años",
    description: "Profesional que previene, diagnostica y trata enfermedades de la cavidad oral, dientes y estructuras relacionadas.",
    salary: "$2.105.235",
    employability: "81,0%",
    skills: ["Habilidad manual", "Precisión", "Paciencia", "Comunicación"],
    icon: "🦷"
  },
  {
    id: "quimica-farmacia",
    name: "Química y Farmacia",
    area: "Salud",
    duration: "5 años",
    description: "Profesional experto en medicamentos, su elaboración, distribución y efectos. Trabaja en farmacias, laboratorios y hospitales.",
    salary: "$2.273.575",
    employability: "98,3%",
    skills: ["Química", "Precisión", "Atención al detalle", "Responsabilidad"],
    icon: "💊"
  },
  {
    id: "enfermeria",
    name: "Enfermería",
    area: "Salud",
    duration: "5 años",
    description: "Profesional que cuida la salud de las personas, asiste en tratamientos médicos y promueve hábitos saludables en hospitales, clínicas y comunidades.",
    salary: "$1.782.433",
    employability: "93,7%",
    skills: ["Vocación de servicio", "Resistencia", "Empatía", "Trabajo bajo presión"],
    icon: "💉"
  },
  {
    id: "tecnologia-medica",
    name: "Tecnología Médica",
    area: "Salud",
    duration: "5 años",
    description: "Profesional que realiza exámenes de laboratorio, imágenes médicas y procedimientos tecnológicos para el diagnóstico de enfermedades.",
    salary: "$1.749.216",
    employability: "91,7%",
    skills: ["Precisión", "Tecnología", "Análisis", "Responsabilidad"],
    icon: "🔬"
  },
  {
    id: "obstetricia",
    name: "Obstetricia y Puericultura",
    area: "Salud",
    duration: "5 años",
    description: "Profesional especializado en la salud sexual y reproductiva, embarazo, parto y cuidado del recién nacido.",
    salary: "$1.725.257",
    employability: "93,0%",
    skills: ["Vocación de servicio", "Empatía", "Responsabilidad", "Tranquilidad"],
    icon: "👶"
  },
  {
    id: "kinesiologia",
    name: "Kinesiología",
    area: "Salud",
    duration: "5 años",
    description: "Profesional que previene, diagnostica y rehabilita alteraciones del movimiento corporal mediante técnicas físicas, ejercicios y terapias manuales.",
    salary: "$1.437.576",
    employability: "78,4%",
    skills: ["Conocimiento anatómico", "Paciencia", "Habilidad manual", "Comunicación"],
    icon: "🏃"
  },
  {
    id: "terapeuta-ocupacional",
    name: "Terapia Ocupacional",
    area: "Salud",
    duration: "5 años",
    description: "Profesional que ayuda a personas con discapacidades físicas, mentales o del desarrollo a desarrollar, recuperar o mantener sus habilidades para realizar actividades diarias como vestirse, trabajar o cocinar.",
    salary: "$1.242.825",
    employability: "75,3%",
    skills: ["Empatía", "Paciencia", "Creatividad", "Observación", "Trabajo en equipo"],
    icon: "🧩"
  },
  {
    id: "nutricion",
    name: "Nutrición y Dietética",
    area: "Salud",
    duration: "5 años",
    description: "Profesional que planifica y supervisa programas de alimentación saludable para individuos y comunidades, previniendo y tratando enfermedades relacionadas con la nutrición.",
    salary: "$1.169.411",
    employability: "64,0%",
    skills: ["Interés en salud", "Ciencia", "Comunicación", "Organización"],
    icon: "🥗"
  },
  {
    id: "fonoaudiologia",
    name: "Fonoaudiología",
    area: "Salud",
    duration: "5 años",
    description: "Profesional que previene, diagnostica y trata trastornos del habla, lenguaje, voz y audición en personas de todas las edades.",
    salary: "$1.087.661",
    employability: "62,8%",
    skills: ["Paciencia", "Escucha activa", "Análisis", "Vocación de servicio"],
    icon: "🗣️"
  },
  {
    id: "psicologia",
    name: "Psicología",
    area: "Salud",
    duration: "5 años",
    description: "Profesional que estudia el comportamiento humano y los procesos mentales. Puede trabajar en clínica, educación, organizaciones o investigación.",
    salary: "$1.319.546",
    employability: "77,1%",
    skills: ["Escucha activa", "Empatía", "Análisis", "Confidencialidad", "Comunicación"],
    icon: "🧠"
  },

  // ===== CIENCIAS DEL MAR Y ACUICULTURA =====
  {
    id: "acuicultura",
    name: "Acuicultura (Técnico)",
    area: "Ciencias del Mar",
    duration: "2-3 años",
    description: "Profesional técnico que se dedica al cultivo y producción de organismos acuáticos (peces, moluscos, algas) para alimentación, ornamentación o conservación.",
    salary: "$900.000 - $1.200.000",
    employability: "70-80%",
    skills: ["Amor por la naturaleza", "Ciencia", "Trabajo al aire libre", "Paciencia"],
    icon: "🐟"
  },
  {
    id: "biologia-marina",
    name: "Biología Marina y Ecología Marina",
    area: "Ciencias del Mar",
    duration: "5 años",
    description: "Profesional que estudia los organismos marinos, sus ecosistemas y la interacción con el ambiente oceánico.",
    salary: "$1.264.297",
    employability: "64,5%",
    skills: ["Curiosidad científica", "Buceo", "Investigación", "Trabajo en terreno"],
    icon: "🐋"
  },
  {
    id: "ing-marina",
    name: "Ingeniería Marina y Marítimo Portuaria",
    area: "Ciencias del Mar",
    duration: "5-6 años",
    description: "Profesional que gestiona puertos, transporte marítimo y operaciones en el ámbito marítimo-portuario.",
    salary: "$2.396.382",
    employability: "92,8%",
    skills: ["Gestión", "Técnica", "Liderazgo", "Trabajo en terreno"],
    icon: "🚢"
  },
  {
    id: "ing-pesquera",
    name: "Ingeniería en Recursos Renovables (Pesca)",
    area: "Ciencias del Mar",
    duration: "5 años",
    description: "Profesional que gestiona y optimiza la extracción y producción de recursos pesqueros y renovables de forma sostenible.",
    salary: "$1.624.830",
    employability: "80,2%",
    skills: ["Gestión", "Ciencia", "Trabajo en terreno", "Sostenibilidad"],
    icon: "🎣"
  },

  // ===== INGENIERÍAS =====
  {
    id: "ing-civil-minas",
    name: "Ingeniería Civil en Minas",
    area: "Ingeniería",
    duration: "6 años",
    description: "Profesional que planifica y dirige la extracción de minerales, gestionando recursos mineros de forma eficiente y segura.",
    salary: "$4.001.905",
    employability: "88,3%",
    skills: ["Geología", "Gestión", "Seguridad", "Trabajo en terreno"],
    icon: "⛏️"
  },
  {
    id: "ing-civil-metalurgica",
    name: "Ingeniería Civil Metalúrgica",
    area: "Ingeniería",
    duration: "6 años",
    description: "Profesional que transforma minerales en metales y materiales útiles, diseñando procesos de producción industrial.",
    salary: "$3.473.192",
    employability: "87,7%",
    skills: ["Química", "Física", "Gestión", "Innovación"],
    icon: "🔩"
  },
  {
    id: "ing-civil-electrica",
    name: "Ingeniería Civil Eléctrica",
    area: "Ingeniería",
    duration: "6 años",
    description: "Profesional que diseña, desarrolla y mantiene sistemas eléctricos, electrónicos y de generación de energía.",
    salary: "$2.891.607",
    employability: "94,5%",
    skills: ["Física", "Matemáticas", "Tecnología", "Seguridad"],
    icon: "⚡"
  },
  {
    id: "ing-civil-industrial",
    name: "Ingeniería Civil Industrial",
    area: "Ingeniería",
    duration: "6 años",
    description: "Profesional que optimiza procesos productivos, gestiona recursos y mejora la eficiencia en empresas de cualquier rubro.",
    salary: "$2.890.800",
    employability: "92,5%",
    skills: ["Gestión", "Análisis", "Liderazgo", "Matemáticas"],
    icon: "🏭"
  },
  {
    id: "ing-civil-mecanica",
    name: "Ingeniería Civil Mecánica",
    area: "Ingeniería",
    duration: "6 años",
    description: "Profesional que diseña, fabrica y mantiene máquinas, vehículos, sistemas térmicos y mecánicos.",
    salary: "$2.779.549",
    employability: "92,1%",
    skills: ["Física", "Diseño", "Matemáticas", "Creatividad técnica"],
    icon: "⚙️"
  },
  {
    id: "ing-civil-computacion",
    name: "Ingeniería Civil en Computación e Informática",
    area: "Ingeniería",
    duration: "6 años",
    description: "Profesional que desarrolla software, sistemas, aplicaciones y soluciones tecnológicas avanzadas.",
    salary: "$2.572.967",
    employability: "93,5%",
    skills: ["Programación", "Matemáticas avanzadas", "Lógica", "Innovación"],
    icon: "💻"
  },
  {
    id: "ing-civil-quimica",
    name: "Ingeniería Civil Química",
    area: "Ingeniería",
    duration: "6 años",
    description: "Profesional que diseña procesos industriales para la transformación de materias primas en productos químicos y derivados.",
    salary: "$2.572.777",
    employability: "90,6%",
    skills: ["Química", "Matemáticas", "Procesos", "Seguridad"],
    icon: "⚗️"
  },
  {
    id: "ing-civil-electronica",
    name: "Ingeniería Civil Electrónica",
    area: "Ingeniería",
    duration: "6 años",
    description: "Profesional que diseña circuitos, sistemas electrónicos, telecomunicaciones y dispositivos tecnológicos.",
    salary: "$2.534.943",
    employability: "90,5%",
    skills: ["Electrónica", "Matemáticas", "Tecnología", "Innovación"],
    icon: "🔌"
  },
  {
    id: "ing-industrial",
    name: "Ingeniería Industrial",
    area: "Ingeniería",
    duration: "5 años",
    description: "Profesional que optimiza procesos productivos, gestiona recursos y mejora la eficiencia en empresas de cualquier rubro.",
    salary: "$2.422.264",
    employability: "87,6%",
    skills: ["Gestión", "Análisis", "Liderazgo", "Matemáticas"],
    icon: "📊"
  },
  {
    id: "ing-comercial",
    name: "Ingeniería Comercial",
    area: "Ingeniería",
    duration: "5 años",
    description: "Profesional que combina negocios, economía y gestión. Trabaja en marketing, finanzas, recursos humanos o emprendimiento.",
    salary: "$2.213.561",
    employability: "86,5%",
    skills: ["Negocios", "Análisis", "Liderazgo", "Creatividad"],
    icon: "📈"
  },
  {
    id: "ing-civil-obras",
    name: "Ingeniería Civil en Obras Civiles",
    area: "Ingeniería",
    duration: "6 años",
    description: "Profesional que diseña, construye y mantiene infraestructuras como puentes, caminos, edificios y sistemas de agua.",
    salary: "$2.118.456",
    employability: "90,8%",
    skills: ["Matemáticas", "Física", "Creatividad", "Gestión de proyectos"],
    icon: "🏗️"
  },
  {
    id: "ing-computacion",
    name: "Ingeniería en Computación e Informática",
    area: "Ingeniería",
    duration: "5 años",
    description: "Profesional que desarrolla software, sistemas, aplicaciones y soluciones tecnológicas para empresas y usuarios.",
    salary: "$2.079.117",
    employability: "89,0%",
    skills: ["Lógica", "Programación", "Resolución de problemas", "Inglés"],
    icon: "🖥️"
  },
  {
    id: "ing-civil-ambiental",
    name: "Ingeniería Civil Ambiental",
    area: "Ingeniería",
    duration: "6 años",
    description: "Profesional que desarrolla soluciones para problemas ambientales, gestiona recursos naturales y previene la contaminación.",
    salary: "$2.021.976",
    employability: "92,8%",
    skills: ["Conciencia ambiental", "Ciencia", "Gestión", "Innovación"],
    icon: "🌱"
  },
  {
    id: "construccion-civil",
    name: "Construcción Civil",
    area: "Ingeniería",
    duration: "5 años",
    description: "Profesional que dirige y supervisa obras de construcción, gestionando recursos, tiempos y calidad de los proyectos.",
    salary: "$1.851.145",
    employability: "82,9%",
    skills: ["Gestión", "Técnica", "Liderazgo", "Trabajo en terreno"],
    icon: "🏠"
  },
  {
    id: "ing-forestal",
    name: "Ingeniería Forestal",
    area: "Ingeniería",
    duration: "5 años",
    description: "Profesional que gestiona bosques, recursos forestales y ecosistemas, combinando producción con conservación ambiental.",
    salary: "$1.741.463",
    employability: "87,5%",
    skills: ["Naturaleza", "Gestión", "Ciencia", "Trabajo al aire libre"],
    icon: "🌲"
  },
  {
    id: "contador-auditor",
    name: "Contador Auditor",
    area: "Ingeniería",
    duration: "5 años",
    description: "Profesional que registra, analiza e informa sobre la situación financiera de empresas y personas. Audita y asesora tributariamente.",
    salary: "$1.692.571",
    employability: "88,0%",
    skills: ["Matemáticas", "Orden", "Análisis", "Responsabilidad"],
    icon: "📋"
  },
  {
    id: "ing-prevencion-riesgos",
    name: "Ingeniería en Prevención de Riesgos",
    area: "Ingeniería",
    duration: "5 años",
    description: "Profesional que previene accidentes laborales, gestiona riesgos y asegura el cumplimiento de normas de seguridad en empresas.",
    salary: "$1.637.123",
    employability: "85,6%",
    skills: ["Análisis", "Normativa", "Gestión", "Comunicación"],
    icon: "🦺"
  },
  {
    id: "ing-agronomica",
    name: "Agronomía",
    area: "Ingeniería",
    duration: "5 años",
    description: "Profesional que optimiza la producción agrícola y ganadera, mejorando cultivos, suelos y técnicas de producción.",
    salary: "$1.813.062",
    employability: "77,1%",
    skills: ["Biología", "Trabajo al aire libre", "Gestión", "Ciencia"],
    icon: "🌾"
  },

  // ===== EDUCACIÓN =====
  {
    id: "pedagogia-media-matematica",
    name: "Pedagogía en Matemáticas y Computación",
    area: "Educación",
    duration: "5 años",
    description: "Profesional que enseña matemáticas y computación a estudiantes de enseñanza media, formando las bases del pensamiento lógico.",
    salary: "$1.255.859",
    employability: "94,3%",
    skills: ["Matemáticas", "Paciencia", "Comunicación", "Vocación"],
    icon: "🔢"
  },
  {
    id: "pedagogia-diferencial",
    name: "Pedagogía en Educación Diferencial",
    area: "Educación",
    duration: "5 años",
    description: "Profesional que trabaja con estudiantes con necesidades educativas especiales, adaptando la enseñanza a sus requerimientos.",
    salary: "$1.202.828",
    employability: "92,0%",
    skills: ["Empatía", "Paciencia", "Creatividad", "Adaptabilidad"],
    icon: "🧩"
  },
  {
    id: "pedagogia-basica",
    name: "Pedagogía en Educación Básica",
    area: "Educación",
    duration: "5 años",
    description: "Profesional que forma a niños de 1° a 6° básico en todas las asignaturas fundamentales, desarrollando habilidades cognitivas y sociales.",
    salary: "$1.154.377",
    employability: "91,3%",
    skills: ["Paciencia", "Creatividad", "Vocación", "Comunicación"],
    icon: "📚"
  },
  {
    id: "pedagogia-media",
    name: "Pedagogía en Educación Media",
    area: "Educación",
    duration: "5 años",
    description: "Profesional que enseña una asignatura específica (lenguaje, historia, ciencias) a estudiantes de 7° a 4° medio.",
    salary: "$1.282.930",
    employability: "87,1%",
    skills: ["Dominio de materia", "Paciencia", "Comunicación", "Vocación"],
    icon: "🎓"
  },
  {
    id: "pedagogia-lenguaje",
    name: "Pedagogía en Lenguaje y Comunicación",
    area: "Educación",
    duration: "5 años",
    description: "Profesional que enseña lenguaje, comunicación y castellano a estudiantes de enseñanza básica y media.",
    salary: "$1.187.171",
    employability: "87,3%",
    skills: ["Lectura", "Escritura", "Comunicación", "Vocación"],
    icon: "📖"
  },
  {
    id: "pedagogia-ciencias",
    name: "Pedagogía en Ciencias",
    area: "Educación",
    duration: "5 años",
    description: "Profesional que enseña ciencias naturales, biología, química y física a estudiantes de enseñanza media.",
    salary: "$1.213.552",
    employability: "90,2%",
    skills: ["Ciencia", "Paciencia", "Comunicación", "Vocación"],
    icon: "🔬"
  },
  {
    id: "pedagogia-historia",
    name: "Pedagogía en Historia y Cs. Sociales",
    area: "Educación",
    duration: "5 años",
    description: "Profesional que enseña historia, geografía y ciencias sociales a estudiantes de enseñanza media.",
    salary: "$1.107.358",
    employability: "77,2%",
    skills: ["Historia", "Análisis", "Comunicación", "Vocación"],
    icon: "🗺️"
  },
  {
    id: "pedagogia-parvulos",
    name: "Educación Parvularia",
    area: "Educación",
    duration: "5 años",
    description: "Profesional que educa y cuida a niños desde recién nacidos hasta los 6 años, estimulando su desarrollo integral.",
    salary: "$1.033.015",
    employability: "77,2%",
    skills: ["Amor por los niños", "Creatividad", "Paciencia", "Energía"],
    icon: "🧸"
  },
  {
    id: "pedagogia-ed-fisica",
    name: "Pedagogía en Educación Física",
    area: "Educación",
    duration: "5 años",
    description: "Profesional que enseña deportes, actividad física y hábitos saludables en escuelas y centros deportivos.",
    salary: "$1.054.078",
    employability: "61,0%",
    skills: ["Deporte", "Liderazgo", "Energía", "Comunicación"],
    icon: "⚽"
  },
  {
    id: "pedagogia-idiomas",
    name: "Pedagogía en Idiomas",
    area: "Educación",
    duration: "5 años",
    description: "Profesional que enseña idiomas extranjeros (inglés, francés, etc.) en colegios, institutos y centros de idiomas.",
    salary: "$1.054.817",
    employability: "72,5%",
    skills: ["Idiomas", "Comunicación", "Paciencia", "Cultura"],
    icon: "🌐"
  },

  // ===== DERECHO Y CIENCIAS SOCIALES =====
  {
    id: "derecho",
    name: "Derecho (Abogacía)",
    area: "Derecho y Sociales",
    duration: "5 años + práctica",
    description: "Profesional que ejerce la abogacía, defiende derechos, asesora legalmente y puede trabajar como juez, fiscal o notario.",
    salary: "$2.086.519",
    employability: "80,8%",
    skills: ["Lectura", "Argumentación", "Oratoria", "Análisis", "Ética"],
    icon: "⚖️"
  },
  {
    id: "trabajo-social",
    name: "Trabajo Social",
    area: "Derecho y Sociales",
    duration: "5 años",
    description: "Profesional que interviene en problemáticas sociales, ayudando a comunidades y personas vulnerables a mejorar su calidad de vida.",
    salary: "$1.174.979",
    employability: "77,7%",
    skills: ["Empatía", "Gestión", "Comunicación", "Vocación social"],
    icon: "🤝"
  },
  {
    id: "sociologia",
    name: "Sociología",
    area: "Derecho y Sociales",
    duration: "5 años",
    description: "Profesional que estudia la sociedad, sus estructuras, comportamientos colectivos y transformaciones sociales.",
    salary: "$1.530.889",
    employability: "73,2%",
    skills: ["Análisis", "Investigación", "Pensamiento crítico", "Estadística"],
    icon: "👥"
  },
  {
    id: "ciencia-politica",
    name: "Ciencia Política",
    area: "Derecho y Sociales",
    duration: "5 años",
    description: "Profesional que estudia el poder, los sistemas de gobierno, las políticas públicas y las relaciones entre el Estado y la sociedad.",
    salary: "$1.632.084",
    employability: "73,4%",
    skills: ["Análisis", "Lectura", "Escritura", "Pensamiento crítico"],
    icon: "🏛️"
  },
  {
    id: "geologia",
    name: "Geología",
    area: "Derecho y Sociales",
    duration: "5 años",
    description: "Profesional que estudia la Tierra: sus rocas, minerales, fósiles, procesos geológicos y recursos naturales.",
    salary: "$2.902.317",
    employability: "80,1%",
    skills: ["Ciencias", "Trabajo de campo", "Observación", "Análisis"],
    icon: "🪨"
  },
  {
    id: "antropologia",
    name: "Antropología",
    area: "Derecho y Sociales",
    duration: "5 años",
    description: "Profesional que estudia al ser humano desde sus aspectos culturales, sociales y biológicos, en el pasado y presente.",
    salary: "$1.472.141",
    employability: "76,0%",
    skills: ["Investigación", "Curiosidad", "Trabajo de campo", "Análisis"],
    icon: "🏺"
  },
  {
    id: "geografia",
    name: "Geografía",
    area: "Derecho y Sociales",
    duration: "5 años",
    description: "Profesional que estudia el territorio, el medio ambiente y la relación entre sociedad y espacio geográfico.",
    salary: "$1.479.555",
    employability: "81,9%",
    skills: ["Análisis espacial", "Tecnología", "Investigación", "Medio ambiente"],
    icon: "🗺️"
  },

  // ===== ARTE Y DISEÑO =====
  {
    id: "arquitectura",
    name: "Arquitectura",
    area: "Arte y Diseño",
    duration: "6 años",
    description: "Profesional que diseña y proyecta edificios, espacios urbanos y construcciones, combinando estética, funcionalidad y técnica.",
    salary: "$1.518.888",
    employability: "73,4%",
    skills: ["Creatividad", "Dibujo", "Matemáticas", "Visión espacial"],
    icon: "🏛️"
  },
  {
    id: "diseno",
    name: "Diseño (General)",
    area: "Arte y Diseño",
    duration: "4-5 años",
    description: "Profesional que crea soluciones visuales y funcionales en diversos ámbitos: gráfico, industrial, vestuario, ambientes.",
    salary: "$1.370.698",
    employability: "71,2%",
    skills: ["Creatividad", "Tecnología", "Estética", "Comunicación visual"],
    icon: "🎨"
  },
  {
    id: "publicidad",
    name: "Publicidad",
    area: "Arte y Diseño",
    duration: "4-5 años",
    description: "Profesional que investiga mercados, crea estrategias de comunicación y promociona productos o servicios para llegar a los consumidores.",
    salary: "$1.502.157",
    employability: "77,9%",
    skills: ["Creatividad", "Comunicación", "Análisis", "Tecnología"],
    icon: "📣"
  },
  {
    id: "diseno-grafico",
    name: "Diseño Gráfico",
    area: "Arte y Diseño",
    duration: "4 años",
    description: "Profesional que crea soluciones visuales: logos, páginas web, publicidad, packaging y todo tipo de comunicación visual.",
    salary: "$1.227.223",
    employability: "56,2%",
    skills: ["Creatividad", "Tecnología", "Estética", "Comunicación visual"],
    icon: "🖌️"
  },
  {
    id: "diseno-industrial",
    name: "Diseño Industrial",
    area: "Arte y Diseño",
    duration: "5 años",
    description: "Profesional que diseña productos, mobiliario, vehículos y objetos que combinan funcionalidad, estética y manufactura.",
    salary: "$1.166.699",
    employability: "60,6%",
    skills: ["Creatividad", "Técnica", "Innovación", "Dibujo"],
    icon: "🪑"
  },
  {
    id: "cine",
    name: "Realizador de Cine y Televisión",
    area: "Arte y Diseño",
    duration: "4-5 años",
    description: "Profesional que crea películas, documentales, series y contenido audiovisual, dirigiendo, produciendo o editando.",
    salary: "$1.080.698",
    employability: "54,5%",
    skills: ["Creatividad", "Narrativa", "Tecnología", "Trabajo en equipo"],
    icon: "🎬"
  },
  {
    id: "comunicacion-audiovisual",
    name: "Comunicación Audiovisual y Multimedia",
    area: "Arte y Diseño",
    duration: "4-5 años",
    description: "Profesional que produce contenido para televisión, radio, cine y plataformas digitales, combinando imagen, sonido y narrativa.",
    salary: "$1.317.160",
    employability: "60,3%",
    skills: ["Creatividad", "Técnica", "Narrativa", "Trabajo en equipo"],
    icon: "🎥"
  },
  {
    id: "musica",
    name: "Música, Canto o Danza",
    area: "Arte y Diseño",
    duration: "4-5 años",
    description: "Profesional que interpreta, compone o dirige música. Puede trabajar como solista, en orquestas, enseñanza o producción.",
    salary: "$1.105.519",
    employability: "52,0%",
    skills: ["Talento musical", "Disciplina", "Creatividad", "Oído"],
    icon: "🎵"
  },
  {
    id: "artes-visuales",
    name: "Artes Visuales / Bellas Artes",
    area: "Arte y Diseño",
    duration: "4 años",
    description: "Profesional que crea obras de arte: pinturas, esculturas, instalaciones. Puede exponer, enseñar o trabajar en proyectos culturales.",
    salary: "$1.077.139",
    employability: "38,2%",
    skills: ["Creatividad", "Sensibilidad", "Técnica", "Visión artística"],
    icon: "🖼️"
  },
  {
    id: "actuacion",
    name: "Actuación y Teatro",
    area: "Arte y Diseño",
    duration: "4 años",
    description: "Profesional que interpreta personajes en teatro, cine, televisión y otros medios audiovisuales.",
    salary: "$928.037",
    employability: "31,4%",
    skills: ["Expresión corporal", "Memoria", "Creatividad", "Disciplina"],
    icon: "🎭"
  },

  // ===== AGRICULTURA Y MEDIO AMBIENTE =====
  {
    id: "veterinaria",
    name: "Medicina Veterinaria",
    area: "Agricultura y Medio Ambiente",
    duration: "6 años",
    description: "Profesional que previene, diagnostica y trata enfermedades en animales. Trabaja en clínicas, producción pecuaria o fauna silvestre.",
    salary: "$1.415.312",
    employability: "73,9%",
    skills: ["Amor por animales", "Ciencia", "Habilidad manual", "Vocación"],
    icon: "🐕"
  },
  {
    id: "bioquimica",
    name: "Bioquímica",
    area: "Agricultura y Medio Ambiente",
    duration: "5 años",
    description: "Profesional que estudia los procesos químicos en los seres vivos. Trabaja en laboratorios, industria farmacéutica o investigación.",
    salary: "$1.589.282",
    employability: "76,6%",
    skills: ["Química", "Biología", "Laboratorio", "Análisis"],
    icon: "⚗️"
  },
  {
    id: "biologia",
    name: "Biología",
    area: "Agricultura y Medio Ambiente",
    duration: "5 años",
    description: "Profesional que estudia los seres vivos: su estructura, función, evolución, distribución y relaciones con el ambiente.",
    salary: "$1.205.048",
    employability: "63,6%",
    skills: ["Ciencia", "Investigación", "Curiosidad", "Laboratorio"],
    icon: "🧬"
  },
  {
    id: "ing-alimentos",
    name: "Ingeniería en Alimentos",
    area: "Agricultura y Medio Ambiente",
    duration: "5 años",
    description: "Profesional que desarrolla, procesa y controla la calidad de alimentos y bebidas para consumo humano.",
    salary: "$1.403.361",
    employability: "83,1%",
    skills: ["Química", "Biología", "Calidad", "Innovación"],
    icon: "🍎"
  },
  {
    id: "ing-biotecnologia",
    name: "Ingeniería en Biotecnología",
    area: "Agricultura y Medio Ambiente",
    duration: "5 años",
    description: "Profesional que aplica organismos vivos o sistemas biológicos para desarrollar productos y procesos tecnológicos.",
    salary: "$1.430.093",
    employability: "69,4%",
    skills: ["Biología", "Química", "Innovación", "Investigación"],
    icon: "🧪"
  },

  // ===== COMUNICACIÓN =====
  {
    id: "periodismo",
    name: "Periodismo",
    area: "Comunicación",
    duration: "4 años",
    description: "Profesional que investiga, redacta y difunde noticias e información a través de medios escritos, radiales, televisivos o digitales.",
    salary: "$1.416.789",
    employability: "79,4%",
    skills: ["Redacción", "Investigación", "Comunicación", "Curiosidad"],
    icon: "📰"
  },
  {
    id: "rrpp",
    name: "Relaciones Públicas",
    area: "Comunicación",
    duration: "4 años",
    description: "Profesional que gestiona la imagen y comunicación de instituciones, empresas y personas con el público.",
    salary: "$1.433.218",
    employability: "64,6%",
    skills: ["Comunicación", "Estrategia", "Creatividad", "Networking"],
    icon: "🤝"
  },
  {
    id: "traduccion",
    name: "Traducción e Interpretación",
    area: "Comunicación",
    duration: "4 años",
    description: "Profesional que traduce textos o interpreta de forma oral entre dos o más idiomas, facilitando la comunicación intercultural.",
    salary: "$909.442",
    employability: "46,4%",
    skills: ["Idiomas", "Redacción", "Cultura", "Precisión"],
    icon: "🌐"
  },

  // ===== SERVICIOS =====
  {
    id: "admin-turistica",
    name: "Administración Turística y Hotelera",
    area: "Servicios",
    duration: "4-5 años",
    description: "Profesional que gestiona servicios turísticos, organiza viajes, desarrolla destinos y administra hoteles y establecimientos de hospedaje.",
    salary: "$1.115.075",
    employability: "50,4%",
    skills: ["Idiomas", "Servicio al cliente", "Organización", "Cultura general"],
    icon: "✈️"
  },
  {
    id: "admin-publica",
    name: "Administración Pública",
    area: "Servicios",
    duration: "5 años",
    description: "Profesional que gestiona instituciones del Estado, diseña políticas públicas y administra recursos del sector público.",
    salary: "$1.802.190",
    employability: "87,0%",
    skills: ["Gestión", "Políticas públicas", "Análisis", "Ética"],
    icon: "🏛️"
  },
  {
    id: "ing-logistica",
    name: "Ingeniería en Logística",
    area: "Servicios",
    duration: "4-5 años",
    description: "Profesional que gestiona la cadena de suministro, el transporte de mercancías y la distribución de productos a nivel nacional e internacional.",
    salary: "$1.864.713",
    employability: "94,3%",
    skills: ["Organización", "Gestión", "Análisis", "Negociación"],
    icon: "🚛"
  },
  {
    id: "ing-recursos-humanos",
    name: "Ingeniería en Recursos Humanos",
    area: "Servicios",
    duration: "4-5 años",
    description: "Profesional que gestiona el talento humano en las organizaciones: selección, capacitación, clima laboral y desarrollo del personal.",
    salary: "$1.380.011",
    employability: "70,6%",
    skills: ["Comunicación", "Empatía", "Gestión", "Liderazgo"],
    icon: "👔"
  },

  // ===== TÉCNICOS PROFESIONALES =====
  {
    id: "tec-enfermeria",
    name: "Técnico en Enfermería",
    area: "Técnico Profesional",
    duration: "2-3 años",
    description: "Profesional técnico que asiste al personal de salud en el cuidado de pacientes, toma de signos vitales y procedimientos básicos.",
    salary: "$798.468",
    employability: "72,6%",
    skills: ["Vocación", "Paciencia", "Responsabilidad", "Trabajo en equipo"],
    icon: "🩺"
  },
  {
    id: "tec-administracion",
    name: "Técnico en Administración de Empresas",
    area: "Técnico Profesional",
    duration: "2 años",
    description: "Profesional técnico que apoya la gestión administrativa de empresas: contabilidad básica, atención de clientes, archivos.",
    salary: "$1.290.745",
    employability: "63,6%",
    skills: ["Organización", "Computación", "Comunicación", "Orden"],
    icon: "📁"
  },
  {
    id: "tec-contabilidad",
    name: "Técnico en Contabilidad",
    area: "Técnico Profesional",
    duration: "2 años",
    description: "Profesional técnico que registra operaciones contables, prepara balances y apoya la gestión financiera de empresas.",
    salary: "$1.213.849",
    employability: "78,7%",
    skills: ["Matemáticas", "Orden", "Responsabilidad", "Análisis"],
    icon: "🧮"
  },
  {
    id: "tec-electricidad",
    name: "Técnico en Electricidad",
    area: "Técnico Profesional",
    duration: "2-3 años",
    description: "Profesional técnico que instala, mantiene y repara sistemas eléctricos residenciales, comerciales e industriales.",
    salary: "$1.656.788",
    employability: "79,7%",
    skills: ["Técnica", "Seguridad", "Precisión", "Trabajo manual"],
    icon: "💡"
  },
  {
    id: "tec-mecanica",
    name: "Técnico en Mecánica Industrial",
    area: "Técnico Profesional",
    duration: "2-3 años",
    description: "Profesional técnico que opera, mantiene y repara maquinaria y equipos industriales.",
    salary: "$1.954.209",
    employability: "82,6%",
    skills: ["Técnica", "Precisión", "Seguridad", "Trabajo manual"],
    icon: "🔧"
  },
  {
    id: "tec-mineria",
    name: "Técnico en Minería",
    area: "Técnico Profesional",
    duration: "2-3 años",
    description: "Profesional técnico que apoya las operaciones mineras: extracción, procesamiento de minerales y mantención de equipos.",
    salary: "$1.978.707",
    employability: "70,4%",
    skills: ["Técnica", "Seguridad", "Resistencia", "Trabajo en equipo"],
    icon: "⛏️"
  },
  {
    id: "tec-computacion",
    name: "Técnico en Computación e Informática",
    area: "Técnico Profesional",
    duration: "2 años",
    description: "Profesional técnico que instala, mantiene y repara equipos computacionales, redes y sistemas informáticos.",
    salary: "$1.362.089",
    employability: "73,2%",
    skills: ["Tecnología", "Lógica", "Actualización", "Servicio"],
    icon: "🖥️"
  },
  {
    id: "tec-gastronomia",
    name: "Técnico en Gastronomía y Cocina",
    area: "Técnico Profesional",
    duration: "2-3 años",
    description: "Profesional técnico que prepara alimentos, crea recetas y trabaja en cocinas de restaurantes, hoteles o servicios de catering.",
    salary: "$900.000 - $1.200.000",
    employability: "65-75%",
    skills: ["Creatividad", "Disciplina", "Trabajo en equipo", "Sentidos"],
    icon: "👨‍🍳"
  },
  {
    id: "tec-prevencion-riesgos",
    name: "Técnico en Prevención de Riesgos",
    area: "Técnico Profesional",
    duration: "2-3 años",
    description: "Profesional técnico que identifica y controla riesgos laborales, asegurando el cumplimiento de normas de seguridad.",
    salary: "$1.100.000 - $1.400.000",
    employability: "75-85%",
    skills: ["Análisis", "Normativa", "Comunicación", "Observación"],
    icon: "🦺"
  },
  {
    id: "tec-acuicultura",
    name: "Técnico en Acuicultura y Pesca",
    area: "Técnico Profesional",
    duration: "2-3 años",
    description: "Profesional técnico que trabaja en centros de cultivo de peces, moluscos y algas. Apoya la producción y mantención de organismos acuáticos.",
    salary: "$800.000 - $1.100.000",
    employability: "65-75%",
    skills: ["Trabajo al aire libre", "Ciencia", "Paciencia", "Resistencia"],
    icon: "🐠"
  },
];

export const careerAreas = [
  "Todas",
  "Salud",
  "Ciencias del Mar",
  "Ingeniería",
  "Educación",
  "Derecho y Sociales",
  "Arte y Diseño",
  "Agricultura y Medio Ambiente",
  "Comunicación",
  "Servicios",
  "Técnico Profesional"
];

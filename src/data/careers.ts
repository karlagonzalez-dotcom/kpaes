export interface Career {
  id: string;
  name: string;
  area: string;
  duration: string;
  description: string;
  salary: string;
  skills: string[];
  icon: string;
}

export const careers: Career[] = [
  // ===== SALUD Y TERAPIAS =====
  {
    id: "terapeuta-ocupacional",
    name: "Terapeuta Ocupacional",
    area: "Salud",
    duration: "5 años",
    description: "Profesional que ayuda a personas con discapacidades físicas, mentales o del desarrollo a desarrollar, recuperar o mantener sus habilidades para realizar actividades diarias como vestirse, trabajar o cocinar.",
    salary: "$600.000 - $1.200.000",
    skills: ["Empatía", "Paciencia", "Creatividad", "Observación", "Trabajo en equipo"],
    icon: "🧩"
  },
  {
    id: "kinesiologia",
    name: "Kinesiología",
    area: "Salud",
    duration: "5 años",
    description: "Profesional que previene, diagnostica y rehabilita alteraciones del movimiento corporal mediante técnicas físicas, ejercicios y terapias manuales.",
    salary: "$550.000 - $1.100.000",
    skills: ["Conocimiento anatómico", "Paciencia", "Habilidad manual", "Comunicación"],
    icon: "🏃"
  },
  {
    id: "fonoaudiologia",
    name: "Fonoaudiología",
    area: "Salud",
    duration: "5 años",
    description: "Profesional que previene, diagnostica y trata trastornos del habla, lenguaje, voz y audición en personas de todas las edades.",
    salary: "$550.000 - $1.000.000",
    skills: ["Paciencia", "Escucha activa", "Análisis", "Vocación de servicio"],
    icon: "🗣️"
  },
  {
    id: "nutricion",
    name: "Nutrición y Dietética",
    area: "Salud",
    duration: "5 años",
    description: "Profesional que planifica y supervisa programas de alimentación saludable para individuos y comunidades, previniendo y tratando enfermedades relacionadas con la nutrición.",
    salary: "$500.000 - $1.000.000",
    skills: ["Interés en salud", "Ciencia", "Comunicación", "Organización"],
    icon: "🥗"
  },
  {
    id: "medicina",
    name: "Medicina",
    area: "Salud",
    duration: "7 años + especialidad",
    description: "Profesional que diagnostica, trata y previene enfermedades. Puede especializarse en diversas áreas como cardiología, pediatría, cirugía, etc.",
    salary: "$1.000.000 - $3.000.000+",
    skills: ["Vocación de servicio", "Resistencia", "Análisis", "Empatía", "Estudio constante"],
    icon: "⚕️"
  },
  {
    id: "enfermeria",
    name: "Enfermería",
    area: "Salud",
    duration: "5 años",
    description: "Profesional que cuida la salud de las personas, asiste en tratamientos médicos y promueve hábitos saludables en hospitales, clínicas y comunidades.",
    salary: "$500.000 - $900.000",
    skills: ["Vocación de servicio", "Resistencia", "Empatía", "Trabajo bajo presión"],
    icon: "💉"
  },
  {
    id: "odontologia",
    name: "Odontología",
    area: "Salud",
    duration: "6 años",
    description: "Profesional que previene, diagnostica y trata enfermedades de la cavidad oral, dientes y estructuras relacionadas.",
    salary: "$700.000 - $1.500.000",
    skills: ["Habilidad manual", "Precisión", "Paciencia", "Comunicación"],
    icon: "🦷"
  },
  {
    id: "psicologia",
    name: "Psicología",
    area: "Salud",
    duration: "5 años",
    description: "Profesional que estudia el comportamiento humano y los procesos mentales. Puede trabajar en clínica, educación, organizaciones o investigación.",
    salary: "$600.000 - $1.500.000",
    skills: ["Escucha activa", "Empatía", "Análisis", "Confidencialidad", "Comunicación"],
    icon: "🧠"
  },
  {
    id: "tecnologia-medica",
    name: "Tecnología Médica",
    area: "Salud",
    duration: "5 años",
    description: "Profesional que realiza exámenes de laboratorio, imágenes médicas y procedimientos tecnológicos para el diagnóstico de enfermedades.",
    salary: "$550.000 - $1.000.000",
    skills: ["Precisión", "Tecnología", "Análisis", "Responsabilidad"],
    icon: "🔬"
  },
  {
    id: "obstetricia",
    name: "Obstetricia y Puericultura",
    area: "Salud",
    duration: "5 años",
    description: "Profesional especializado en la salud sexual y reproductiva, embarazo, parto y cuidado del recién nacido.",
    salary: "$550.000 - $1.100.000",
    skills: ["Vocación de servicio", "Empatía", "Responsabilidad", "Tranquilidad"],
    icon: "👶"
  },
  {
    id: "farmacia",
    name: "Farmacia",
    area: "Salud",
    duration: "5 años",
    description: "Profesional experto en medicamentos, su elaboración, distribución y efectos. Trabaja en farmacias, laboratorios y hospitales.",
    salary: "$600.000 - $1.200.000",
    skills: ["Química", "Precisión", "Atención al detalle", "Responsabilidad"],
    icon: "💊"
  },
  {
    id: "terapia-fisica",
    name: "Terapia Física y Rehabilitación",
    area: "Salud",
    duration: "5 años",
    description: "Profesional que ayuda a pacientes a recuperar la movilidad y función física tras lesiones, cirugías o enfermedades.",
    salary: "$550.000 - $1.000.000",
    skills: ["Habilidad manual", "Paciencia", "Conocimiento corporal", "Empatía"],
    icon: "🦴"
  },

  // ===== CIENCIAS DEL MAR Y ACUICULTURA =====
  {
    id: "acuicultura",
    name: "Acuicultura",
    area: "Ciencias del Mar",
    duration: "5 años",
    description: "Profesional que se dedica al cultivo y producción de organismos acuáticos (peces, moluscos, algas) para alimentación, ornamentación o conservación.",
    salary: "$600.000 - $1.200.000",
    skills: ["Amor por la naturaleza", "Ciencia", "Trabajo al aire libre", "Paciencia"],
    icon: "🐟"
  },
  {
    id: "biologia-marina",
    name: "Biología Marina",
    area: "Ciencias del Mar",
    duration: "5 años",
    description: "Profesional que estudia los organismos marinos, sus ecosistemas y la interacción con el ambiente oceánico.",
    salary: "$500.000 - $1.000.000",
    skills: ["Curiosidad científica", "Buceo", "Investigación", "Trabajo en terreno"],
    icon: "🐋"
  },
  {
    id: "oceanografia",
    name: "Oceanografía",
    area: "Ciencias del Mar",
    duration: "5 años",
    description: "Profesional que estudia los océanos: sus corrientes, mareas, composición química, vida marina y relación con el clima.",
    salary: "$600.000 - $1.200.000",
    skills: ["Ciencias exactas", "Tecnología", "Investigación", "Análisis de datos"],
    icon: "🌊"
  },
  {
    id: "ingenieria-pesquera",
    name: "Ingeniería en Pesca",
    area: "Ciencias del Mar",
    duration: "5 años",
    description: "Profesional que gestiona y optimiza la extracción y procesamiento de recursos pesqueros de forma sostenible.",
    salary: "$700.000 - $1.300.000",
    skills: ["Gestión", "Ciencia", "Trabajo en terreno", "Sostenibilidad"],
    icon: "🎣"
  },
  {
    id: "medio-ambiente-marino",
    name: "Gestión Ambiental Marina",
    area: "Ciencias del Mar",
    duration: "5 años",
    description: "Profesional que gestiona y protege los ecosistemas marinos, desarrollando estrategias de conservación y uso sostenible.",
    salary: "$600.000 - $1.100.000",
    skills: ["Conciencia ambiental", "Gestión", "Investigación", "Políticas públicas"],
    icon: "🐢"
  },

  // ===== INGENIERÍAS =====
  {
    id: "ing-civil",
    name: "Ingeniería Civil",
    area: "Ingeniería",
    duration: "6 años",
    description: "Profesional que diseña, construye y mantiene infraestructuras como puentes, caminos, edificios y sistemas de agua.",
    salary: "$900.000 - $2.000.000",
    skills: ["Matemáticas", "Física", "Creatividad", "Gestión de proyectos"],
    icon: "🏗️"
  },
  {
    id: "ing-informatica",
    name: "Ingeniería en Informática / Computación",
    area: "Ingeniería",
    duration: "5 años",
    description: "Profesional que desarrolla software, sistemas, aplicaciones y soluciones tecnológicas para empresas y usuarios.",
    salary: "$800.000 - $2.500.000",
    skills: ["Lógica", "Programación", "Resolución de problemas", "Inglés"],
    icon: "💻"
  },
  {
    id: "ing-industrial",
    name: "Ingeniería Industrial",
    area: "Ingeniería",
    duration: "5 años",
    description: "Profesional que optimiza procesos productivos, gestiona recursos y mejora la eficiencia en empresas de cualquier rubro.",
    salary: "$800.000 - $2.000.000",
    skills: ["Gestión", "Análisis", "Liderazgo", "Matemáticas"],
    icon: "🏭"
  },
  {
    id: "ing-electrica",
    name: "Ingeniería Eléctrica",
    area: "Ingeniería",
    duration: "5 años",
    description: "Profesional que diseña, desarrolla y mantiene sistemas eléctricos, electrónicos y de generación de energía.",
    salary: "$800.000 - $1.800.000",
    skills: ["Física", "Matemáticas", "Tecnología", "Seguridad"],
    icon: "⚡"
  },
  {
    id: "ing-mecanica",
    name: "Ingeniería Mecánica",
    area: "Ingeniería",
    duration: "5 años",
    description: "Profesional que diseña, fabrica y mantiene máquinas, vehículos, sistemas térmicos y mecánicos.",
    salary: "$800.000 - $1.800.000",
    skills: ["Física", "Diseño", "Matemáticas", "Creatividad técnica"],
    icon: "⚙️"
  },
  {
    id: "ing-civil-informatica",
    name: "Ingeniería Civil en Computación",
    area: "Ingeniería",
    duration: "6 años",
    description: "Versión más profunda de informática, con mayor énfasis en ciencias de la computación, inteligencia artificial y desarrollo de software avanzado.",
    salary: "$1.000.000 - $3.000.000",
    skills: ["Programación", "Matemáticas avanzadas", "Lógica", "Innovación"],
    icon: "🖥️"
  },
  {
    id: "ing-ambiental",
    name: "Ingeniería Ambiental",
    area: "Ingeniería",
    duration: "5 años",
    description: "Profesional que desarrolla soluciones para problemas ambientales, gestiona recursos naturales y previene la contaminación.",
    salary: "$700.000 - $1.500.000",
    skills: ["Conciencia ambiental", "Ciencia", "Gestión", "Innovación"],
    icon: "🌱"
  },
  {
    id: "ing-minas",
    name: "Ingeniería en Minas",
    area: "Ingeniería",
    duration: "5 años",
    description: "Profesional que planifica y dirige la extracción de minerales, gestionando recursos mineros de forma eficiente y segura.",
    salary: "$1.000.000 - $2.500.000",
    skills: ["Geología", "Gestión", "Seguridad", "Trabajo en terreno"],
    icon: "⛏️"
  },
  {
    id: "ing-agronomica",
    name: "Ingeniería Agronómica",
    area: "Ingeniería",
    duration: "5 años",
    description: "Profesional que optimiza la producción agrícola y ganadera, mejorando cultivos, suelos y técnicas de producción.",
    salary: "$700.000 - $1.500.000",
    skills: ["Biología", "Trabajo al aire libre", "Gestión", "Ciencia"],
    icon: "🌾"
  },
  {
    id: "ing-biomedica",
    name: "Ingeniería Biomédica",
    area: "Ingeniería",
    duration: "5 años",
    description: "Profesional que combina ingeniería y medicina para desarrollar equipos, prótesis y tecnologías para la salud.",
    salary: "$800.000 - $1.800.000",
    skills: ["Biología", "Tecnología", "Innovación", "Matemáticas"],
    icon: "🫀"
  },

  // ===== EDUCACIÓN =====
  {
    id: "pedagogia-basica",
    name: "Pedagogía en Educación Básica",
    area: "Educación",
    duration: "5 años",
    description: "Profesional que forma a niños de 1° a 6° básico en todas las asignaturas fundamentales, desarrollando habilidades cognitivas y sociales.",
    salary: "$500.000 - $900.000",
    skills: ["Paciencia", "Creatividad", "Vocación", "Comunicación"],
    icon: "📚"
  },
  {
    id: "pedagogia-media",
    name: "Pedagogía en Educación Media",
    area: "Educación",
    duration: "5 años",
    description: "Profesional que enseña una asignatura específica (matemáticas, lenguaje, historia, ciencias) a estudiantes de 7° a 4° medio.",
    salary: "$500.000 - $900.000",
    skills: ["Dominio de materia", "Paciencia", "Comunicación", "Vocación"],
    icon: "🎓"
  },
  {
    id: "pedagogia-diferencial",
    name: "Pedagogía en Educación Diferencial",
    area: "Educación",
    duration: "5 años",
    description: "Profesional que trabaja con estudiantes con necesidades educativas especiales, adaptando la enseñanza a sus requerimientos.",
    salary: "$500.000 - $900.000",
    skills: ["Empatía", "Paciencia", "Creatividad", "Adaptabilidad"],
    icon: "🧩"
  },
  {
    id: "educacion-parvularia",
    name: "Educación Parvularia",
    area: "Educación",
    duration: "5 años",
    description: "Profesional que educa y cuida a niños desde recién nacidos hasta los 6 años, estimulando su desarrollo integral.",
    salary: "$450.000 - $800.000",
    skills: ["Amor por los niños", "Creatividad", "Paciencia", "Energía"],
    icon: "🧸"
  },
  {
    id: "educacion-fisica",
    name: "Profesor de Educación Física",
    area: "Educación",
    duration: "5 años",
    description: "Profesional que enseña deportes, actividad física y hábitos saludables en escuelas y centros deportivos.",
    salary: "$500.000 - $900.000",
    skills: ["Deporte", "Liderazgo", "Energía", "Comunicación"],
    icon: "⚽"
  },

  // ===== DERECHO Y CIENCIAS SOCIALES =====
  {
    id: "derecho",
    name: "Derecho (Abogacía)",
    area: "Derecho y Sociales",
    duration: "5 años + práctica",
    description: "Profesional que ejerce la abogacía, defiende derechos, asesora legalmente y puede trabajar como juez, fiscal o notario.",
    salary: "$800.000 - $3.000.000",
    skills: ["Lectura", "Argumentación", "Oratoria", "Análisis", "Ética"],
    icon: "⚖️"
  },
  {
    id: "trabajo-social",
    name: "Trabajo Social",
    area: "Derecho y Sociales",
    duration: "5 años",
    description: "Profesional que interviene en problemáticas sociales, ayudando a comunidades y personas vulnerables a mejorar su calidad de vida.",
    salary: "$500.000 - $1.000.000",
    skills: ["Empatía", "Gestión", "Comunicación", "Vocación social"],
    icon: "🤝"
  },
  {
    id: "sociologia",
    name: "Sociología",
    area: "Derecho y Sociales",
    duration: "5 años",
    description: "Profesional que estudia la sociedad, sus estructuras, comportamientos colectivos y transformaciones sociales.",
    salary: "$500.000 - $1.200.000",
    skills: ["Análisis", "Investigación", "Pensamiento crítico", "Estadística"],
    icon: "👥"
  },
  {
    id: "ciencia-politica",
    name: "Ciencia Política",
    area: "Derecho y Sociales",
    duration: "5 años",
    description: "Profesional que estudia el poder, los sistemas de gobierno, las políticas públicas y las relaciones entre el Estado y la sociedad.",
    salary: "$600.000 - $1.500.000",
    skills: ["Análisis", "Lectura", "Escritura", "Pensamiento crítico"],
    icon: "🏛️"
  },
  {
    id: "relaciones-internacionales",
    name: "Relaciones Internacionales",
    area: "Derecho y Sociales",
    duration: "5 años",
    description: "Profesional que estudia las relaciones entre países, organismos internacionales, diplomacia y comercio exterior.",
    salary: "$700.000 - $1.800.000",
    skills: ["Idiomas", "Diplomacia", "Análisis", "Cultura general"],
    icon: "🌍"
  },
  {
    id: "antropologia",
    name: "Antropología",
    area: "Derecho y Sociales",
    duration: "5 años",
    description: "Profesional que estudia al ser humano desde sus aspectos culturales, sociales y biológicos, en el pasado y presente.",
    salary: "$500.000 - $1.000.000",
    skills: ["Investigación", "Curiosidad", "Trabajo de campo", "Análisis"],
    icon: "🏺"
  },

  // ===== ECONOMÍA Y NEGOCIOS =====
  {
    id: "administracion",
    name: "Administración de Empresas",
    area: "Economía y Negocios",
    duration: "4-5 años",
    description: "Profesional que gestiona empresas, lidera equipos, planifica estrategias y toma decisiones para el crecimiento organizacional.",
    salary: "$700.000 - $2.000.000",
    skills: ["Liderazgo", "Gestión", "Finanzas", "Comunicación"],
    icon: "💼"
  },
  {
    id: "contabilidad",
    name: "Contador Auditor",
    area: "Economía y Negocios",
    duration: "5 años",
    description: "Profesional que registra, analiza e informa sobre la situación financiera de empresas y personas. Audita y asesora tributariamente.",
    salary: "$700.000 - $1.800.000",
    skills: ["Matemáticas", "Orden", "Análisis", "Responsabilidad"],
    icon: "📊"
  },
  {
    id: "ingenieria-comercial",
    name: "Ingeniería Comercial",
    area: "Economía y Negocios",
    duration: "5 años",
    description: "Profesional que combina negocios, economía y gestión. Trabaja en marketing, finanzas, recursos humanos o emprendimiento.",
    salary: "$800.000 - $2.500.000",
    skills: ["Negocios", "Análisis", "Liderazgo", "Creatividad"],
    icon: "📈"
  },
  {
    id: "economia",
    name: "Economía",
    area: "Economía y Negocios",
    duration: "5 años",
    description: "Profesional que analiza los mercados, políticas económicas, el comportamiento de consumidores y empresas, y asesora en decisiones financieras.",
    salary: "$800.000 - $2.000.000",
    skills: ["Matemáticas", "Análisis", "Estadística", "Pensamiento crítico"],
    icon: "💹"
  },
  {
    id: "marketing",
    name: "Marketing / Publicidad",
    area: "Economía y Negocios",
    duration: "4-5 años",
    description: "Profesional que investiga mercados, crea estrategias de comunicación y promociona productos o servicios para llegar a los consumidores.",
    salary: "$600.000 - $1.800.000",
    skills: ["Creatividad", "Comunicación", "Análisis", "Tecnología"],
    icon: "📣"
  },
  {
    id: "turismo",
    name: "Turismo",
    area: "Economía y Negocios",
    duration: "4 años",
    description: "Profesional que gestiona servicios turísticos, organiza viajes, desarrolla destinos y promueve la industria del turismo.",
    salary: "$500.000 - $1.200.000",
    skills: ["Idiomas", "Servicio al cliente", "Organización", "Cultura general"],
    icon: "✈️"
  },

  // ===== ARTE Y DISEÑO =====
  {
    id: "diseno-grafico",
    name: "Diseño Gráfico",
    area: "Arte y Diseño",
    duration: "4 años",
    description: "Profesional que crea soluciones visuales: logos, páginas web, publicidad, packaging y todo tipo de comunicación visual.",
    salary: "$600.000 - $1.500.000",
    skills: ["Creatividad", "Tecnología", "Estética", "Comunicación visual"],
    icon: "🎨"
  },
  {
    id: "diseno-industrial",
    name: "Diseño Industrial",
    area: "Arte y Diseño",
    duration: "5 años",
    description: "Profesional que diseña productos, mobiliario, vehículos y objetos que combinan funcionalidad, estética y manufactura.",
    salary: "$700.000 - $1.500.000",
    skills: ["Creatividad", "Técnica", "Innovación", "Dibujo"],
    icon: "🪑"
  },
  {
    id: "arquitectura",
    name: "Arquitectura",
    area: "Arte y Diseño",
    duration: "6 años",
    description: "Profesional que diseña y proyecta edificios, espacios urbanos y construcciones, combinando estética, funcionalidad y técnica.",
    salary: "$800.000 - $2.000.000",
    skills: ["Creatividad", "Dibujo", "Matemáticas", "Visión espacial"],
    icon: "🏛️"
  },
  {
    id: "cine",
    name: "Cine y Audiovisual",
    area: "Arte y Diseño",
    duration: "4-5 años",
    description: "Profesional que crea películas, documentales, series y contenido audiovisual, dirigiendo, produciendo o editando.",
    salary: "$500.000 - $1.500.000",
    skills: ["Creatividad", "Narrativa", "Tecnología", "Trabajo en equipo"],
    icon: "🎬"
  },
  {
    id: "musica",
    name: "Música / Interpretación Musical",
    area: "Arte y Diseño",
    duration: "4-5 años",
    description: "Profesional que interpreta, compone o dirige música. Puede trabajar como solista, en orquestas, enseñanza o producción.",
    salary: "$400.000 - $1.500.000",
    skills: ["Talento musical", "Disciplina", "Creatividad", "Oído"],
    icon: "🎵"
  },
  {
    id: "artes-visuales",
    name: "Artes Visuales / Bellas Artes",
    area: "Arte y Diseño",
    duration: "4 años",
    description: "Profesional que crea obras de arte: pinturas, esculturas, instalaciones. Puede exponer, enseñar o trabajar en proyectos culturales.",
    salary: "$400.000 - $1.000.000",
    skills: ["Creatividad", "Sensibilidad", "Técnica", "Visión artística"],
    icon: "🖼️"
  },
  {
    id: "diseno-moda",
    name: "Diseño de Moda",
    area: "Arte y Diseño",
    duration: "4 años",
    description: "Profesional que diseña vestuario, accesorios y textiles, creando tendencias y colecciones para la industria de la moda.",
    salary: "$500.000 - $1.500.000",
    skills: ["Creatividad", "Tendencias", "Costura", "Estética"],
    icon: "👗"
  },
  {
    id: "fotografia",
    name: "Fotografía",
    area: "Arte y Diseño",
    duration: "3-4 años",
    description: "Profesional que captura imágenes con valor artístico, documental o comercial. Trabaja en publicidad, eventos, medios o arte.",
    salary: "$400.000 - $1.200.000",
    skills: ["Ojo artístico", "Técnica", "Creatividad", "Tecnología"],
    icon: "📷"
  },

  // ===== TECNOLOGÍA =====
  {
    id: "data-science",
    name: "Ciencia de Datos (Data Science)",
    area: "Tecnología",
    duration: "4-5 años",
    description: "Profesional que analiza grandes volúmenes de datos para extraer información valiosa y apoyar la toma de decisiones en empresas.",
    salary: "$1.000.000 - $2.500.000",
    skills: ["Estadística", "Programación", "Análisis", "Machine Learning"],
    icon: "📊"
  },
  {
    id: "ciberseguridad",
    name: "Ciberseguridad",
    area: "Tecnología",
    duration: "4-5 años",
    description: "Profesional que protege sistemas, redes y datos de ataques informáticos, asegurando la información de empresas y personas.",
    salary: "$900.000 - $2.500.000",
    skills: ["Tecnología", "Análisis", "Pensamiento lógico", "Actualización constante"],
    icon: "🔒"
  },
  {
    id: "desarrollo-web",
    name: "Desarrollo Web / Frontend / Backend",
    area: "Tecnología",
    duration: "3-4 años",
    description: "Profesional que crea sitios y aplicaciones web, tanto la parte visual (frontend) como la lógica del servidor (backend).",
    salary: "$800.000 - $2.500.000",
    skills: ["Programación", "Diseño", "Lógica", "Actualización constante"],
    icon: "🌐"
  },
  {
    id: "inteligencia-artificial",
    name: "Inteligencia Artificial",
    area: "Tecnología",
    duration: "5 años",
    description: "Profesional que desarrolla sistemas inteligentes, algoritmos de machine learning y soluciones de IA para diversos sectores.",
    salary: "$1.200.000 - $3.000.000",
    skills: ["Matemáticas", "Programación", "Estadística", "Investigación"],
    icon: "🤖"
  },
  {
    id: "animacion-digital",
    name: "Animación Digital",
    area: "Tecnología",
    duration: "4 años",
    description: "Profesional que crea animaciones para películas, videojuegos, publicidad y contenido multimedia usando software especializado.",
    salary: "$600.000 - $1.500.000",
    skills: ["Creatividad", "Dibujo", "Tecnología", "Paciencia"],
    icon: "🎮"
  },

  // ===== AGRICULTURA Y MEDIO AMBIENTE =====
  {
    id: "ingenieriea-forestal",
    name: "Ingeniería Forestal",
    area: "Agricultura y Medio Ambiente",
    duration: "5 años",
    description: "Profesional que gestiona bosques, recursos forestales y ecosistemas, combinando producción con conservación ambiental.",
    salary: "$700.000 - $1.400.000",
    skills: ["Naturaleza", "Gestión", "Ciencia", "Trabajo al aire libre"],
    icon: "🌲"
  },
  {
    id: "veterinaria",
    name: "Medicina Veterinaria",
    area: "Agricultura y Medio Ambiente",
    duration: "6 años",
    description: "Profesional que previene, diagnostica y trata enfermedades en animales. Trabaja en clínicas, producción pecuaria o fauna silvestre.",
    salary: "$600.000 - $1.500.000",
    skills: ["Amor por animales", "Ciencia", "Habilidad manual", "Vocación"],
    icon: "🐕"
  },
  {
    id: "geologia",
    name: "Geología",
    area: "Agricultura y Medio Ambiente",
    duration: "5 años",
    description: "Profesional que estudia la Tierra: sus rocas, minerales, fósiles, procesos geológicos y recursos naturales.",
    salary: "$700.000 - $1.500.000",
    skills: ["Ciencias", "Trabajo de campo", "Observación", "Análisis"],
    icon: "🪨"
  },
  {
    id: "biologia",
    name: "Biología",
    area: "Agricultura y Medio Ambiente",
    duration: "5 años",
    description: "Profesional que estudia los seres vivos: su estructura, función, evolución, distribución y relaciones con el ambiente.",
    salary: "$500.000 - $1.200.000",
    skills: ["Ciencia", "Investigación", "Curiosidad", "Laboratorio"],
    icon: "🧬"
  },
  {
    id: "bioquimica",
    name: "Bioquímica",
    area: "Agricultura y Medio Ambiente",
    duration: "5 años",
    description: "Profesional que estudia los procesos químicos en los seres vivos. Trabaja en laboratorios, industria farmacéutica o investigación.",
    salary: "$600.000 - $1.300.000",
    skills: ["Química", "Biología", "Laboratorio", "Análisis"],
    icon: "⚗️"
  },

  // ===== COMUNICACIÓN =====
  {
    id: "periodismo",
    name: "Periodismo",
    area: "Comunicación",
    duration: "4 años",
    description: "Profesional que investiga, redacta y difunde noticias e información a través de medios escritos, radiales, televisivos o digitales.",
    salary: "$500.000 - $1.200.000",
    skills: ["Redacción", "Investigación", "Comunicación", "Curiosidad"],
    icon: "📰"
  },
  {
    id: "comunicacion-audiovisual",
    name: "Comunicación Audiovisual",
    area: "Comunicación",
    duration: "4 años",
    description: "Profesional que produce contenido para televisión, radio, cine y plataformas digitales, combinando imagen, sonido y narrativa.",
    salary: "$500.000 - $1.300.000",
    skills: ["Creatividad", "Técnica", "Narrativa", "Trabajo en equipo"],
    icon: "🎥"
  },
  {
    id: "comunicacion-social",
    name: "Comunicación Social / Publicidad",
    area: "Comunicación",
    duration: "4 años",
    description: "Profesional que diseña estrategias de comunicación para empresas, instituciones y medios, gestionando la imagen pública.",
    salary: "$600.000 - $1.500.000",
    skills: ["Creatividad", "Comunicación", "Estrategia", "Tendencias"],
    icon: "📱"
  },
  {
    id: "traduccion",
    name: "Traducción e Interpretación",
    area: "Comunicación",
    duration: "4 años",
    description: "Profesional que traduce textos o interpreta de forma oral entre dos o más idiomas, facilitando la comunicación intercultural.",
    salary: "$500.000 - $1.500.000",
    skills: ["Idiomas", "Redacción", "Cultura", "Precisión"],
    icon: "🌐"
  },
  {
    id: "letras",
    name: "Letras / Literatura",
    area: "Comunicación",
    duration: "5 años",
    description: "Profesional que estudia la literatura, el lenguaje y la escritura. Puede trabajar en edición, docencia, investigación o creación literaria.",
    salary: "$450.000 - $1.000.000",
    skills: ["Lectura", "Escritura", "Análisis", "Sensibilidad"],
    icon: "📖"
  },

  // ===== GASTRONOMÍA Y SERVICIOS =====
  {
    id: "gastronomia",
    name: "Gastronomía / Cocina",
    area: "Gastronomía y Servicios",
    duration: "3-4 años",
    description: "Profesional que prepara alimentos, crea recetas y gestiona cocinas de restaurantes, hoteles o servicios de catering.",
    salary: "$500.000 - $1.500.000",
    skills: ["Creatividad", "Disciplina", "Trabajo en equipo", "Sentidos"],
    icon: "👨‍🍳"
  },
  {
    id: "hoteleria",
    name: "Hotelería",
    area: "Gastronomía y Servicios",
    duration: "4 años",
    description: "Profesional que gestiona hoteles, resorts y establecimientos de hospedaje, asegurando la mejor experiencia para los huéspedes.",
    salary: "$600.000 - $1.500.000",
    skills: ["Servicio", "Idiomas", "Gestión", "Organización"],
    icon: "🏨"
  },
  {
    id: "somellerie",
    name: "Somellerie",
    area: "Gastronomía y Servicios",
    duration: "2-3 años",
    description: "Profesional experto en vinos y bebidas. Asesora en maridajes, gestiona cartas de bebidas y cata vinos profesionalmente.",
    salary: "$500.000 - $1.200.000",
    skills: ["Paladar", "Conocimiento enológico", "Servicio", "Comunicación"],
    icon: "🍷"
  },

  // ===== DEPORTES =====
  {
    id: "profesor-educacion-fisica",
    name: "Ciencias del Deporte",
    area: "Deportes",
    duration: "5 años",
    description: "Profesional que estudia el rendimiento deportivo, prepara atletas y gestiona programas deportivos a nivel competitivo o recreativo.",
    salary: "$500.000 - $1.200.000",
    skills: ["Deporte", "Ciencia", "Liderazgo", "Motivación"],
    icon: "🏅"
  },
  {
    id: "entrenador",
    name: "Entrenamiento Deportivo",
    area: "Deportes",
    duration: "3-4 años",
    description: "Profesional que planifica y dirige el entrenamiento de deportistas o equipos, optimizando su rendimiento físico y técnico.",
    salary: "$500.000 - $1.500.000",
    skills: ["Deporte", "Liderazgo", "Planificación", "Motivación"],
    icon: "🏋️"
  },

  // ===== AVIACIÓN Y TRANSPORTE =====
  {
    id: "piloto",
    name: "Piloto de Aviación",
    area: "Aviación y Transporte",
    duration: "3-4 años",
    description: "Profesional que opera aeronaves comerciales o privadas. Requiere entrenamiento especializado y licencias.",
    salary: "$1.500.000 - $5.000.000",
    skills: ["Responsabilidad", "Concentración", "Técnica", "Inglés"],
    icon: "✈️"
  },
  {
    id: "logistica",
    name: "Logística y Transporte",
    area: "Aviación y Transporte",
    duration: "4 años",
    description: "Profesional que gestiona la cadena de suministro, el transporte de mercancías y la distribución de productos a nivel nacional e internacional.",
    salary: "$600.000 - $1.500.000",
    skills: ["Organización", "Gestión", "Análisis", "Negociación"],
    icon: "🚛"
  },

  // ===== SEGURIDAD =====
  {
    id: "seguridad",
    name: "Seguridad y Prevención de Riesgos",
    area: "Seguridad",
    duration: "4-5 años",
    description: "Profesional que previene accidentes laborales, gestiona riesgos y asegura el cumplimiento de normas de seguridad en empresas.",
    salary: "$600.000 - $1.300.000",
    skills: ["Análisis", "Normativa", "Gestión", "Comunicación"],
    icon: "🦺"
  }
];

export const careerAreas = [
  "Todas",
  "Salud",
  "Ciencias del Mar",
  "Ingeniería",
  "Educación",
  "Derecho y Sociales",
  "Economía y Negocios",
  "Arte y Diseño",
  "Tecnología",
  "Agricultura y Medio Ambiente",
  "Comunicación",
  "Gastronomía y Servicios",
  "Deportes",
  "Aviación y Transporte",
  "Seguridad"
];

import { useState, useEffect, useRef } from 'react';
import { allQuestions, Question } from './data/questions';
import { guides, GuideTopic } from './data/guides';

// ==================== AI CHATBOT ====================
function AIChat() {
  const [messages, setMessages] = useState<{role: string, content: string}[]>([
    { role: 'assistant', content: '¡Hola! 👋 Soy tu ayudante IA para prepararte para la PAES. No importa si estás en la escuela, si eres adulto o si volviste a estudiar después de un tiempo. ¡Estoy aquí para ayudarte!\n\n¿En qué te puedo ayudar?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('ecuacion') || msg.includes('despejar') || msg.includes('incognita')) {
      return '📐 Para resolver una ecuación de primer grado:\n\n1. Agrupa las x de un lado y los números del otro\n2. Lo que suma pasa restando, lo que multiplica pasa dividiendo\n3. Simplifica\n\nEjemplo: 3x + 5 = 20\n→ 3x = 20 - 5\n→ 3x = 15\n→ x = 5\n\n¿Quieres que te explique con otro ejemplo?';
    }
    
    if (msg.includes('porcentaje') || msg.includes('porciento') || msg.includes('%')) {
      return '📊 Para calcular porcentajes:\n\n• 25% de 200 = 200 × 0.25 = 50\n• Para aumentar 10%: multiplica por 1.10\n• Para descontar 20%: multiplica por 0.80\n\nTruco: convierte el % a decimal dividiendo entre 100.\n\nEjemplo práctico: Si ganas $500.000 y te descuentan 7% de AFP:\n$500.000 × 0.07 = $35.000 de descuento.\n\n¿Necesitas practicar con algún ejercicio?';
    }
    
    if (msg.includes('figura') || msg.includes('literaria') || msg.includes('metáfora')) {
      return '📝 Figuras literarias principales:\n\n• METÁFORA: "Sus ojos son luceros" (identificación directa)\n• SÍMIL: "Fuerte como un león" (usa "como")\n• HIPÉRBOLE: "Te lo dije mil veces" (exageración)\n• PERSONIFICACIÓN: "El viento susurra" (humanizar objetos)\n• ANÁFORA: Repetición al inicio de versos\n\nTip: Si dice "como" → es símil. Si dice "es/son" → es metáfora.';
    }
    
    if (msg.includes('celula') || msg.includes('organelo') || msg.includes('mitocondria')) {
      return '🔬 La célula y sus partes principales:\n\n• NÚCLEO: Contiene el ADN, controla todo\n• MITOCONDRIA: Produce energía (respiración celular)\n• RIBOSOMAS: Fabrican proteínas\n• MEMBRANA: Controla entrada/salida\n• CLOROPLASTOS (solo vegetal): Fotosíntesis\n• PARED CELULAR (solo vegetal): Da rigidez\n\nRecuerda: animal NO tiene pared celular ni cloroplastos.';
    }
    
    if (msg.includes('independencia') || msg.includes('chile') || msg.includes('o\'higgins')) {
      return '🇨🇱 Independencia de Chile - Etapas clave:\n\n1. PATRIA VIEJA (1810-1814): Primeros gobiernos. Termina con Desastre de Rancagua.\n\n2. RECONQUISTA (1814-1817): España retoma el control.\n\n3. PATRIA NUEVA (1817-1823): Cruce de los Andes. Batalla de Chacabuco (1817) y Maipú (1818).\n\n📅 12 febrero 1818: Declaración de Independencia.\n\nPersonajes clave: O\'Higgins, San Martín, Carrera.';
    }
    
    if (msg.includes('beca') || msg.includes('gratuidad') || msg.includes('financiamiento')) {
      return '💰 Becas y Financiamiento para estudiar:\n\n📌 GRATUIDAD: Cubre el arancel completo en universidades adscritas. Requisitos:\n• Estar en el 50% de menores ingresos del país\n• Matricularte en una universidad adscrita\n• No tener un título profesional previo\n\n📌 BECA FAES (ex-Junaeb): Para estudiantes de educación superior\n📌 BECA INDÍGENA: Para estudiantes de pueblos originarios\n📌 CRÉDITO FONDU: Crédito con aval del Estado\n\n💡 Tip: Postula a todos los beneficios que puedas. ¡No pierdas oportunidades!';
    }
    
    if (msg.includes('universidad') || msg.includes('carrera') || msg.includes('estudiar')) {
      return '🎓 Sobre Universidades y Carreras:\n\n📋 Tipos de instituciones:\n• Universidades (tradicionales y privadas)\n• Centros de Formación Técnica (CFT)\n• Institutos Profesionales (IP)\n\n🔍 Para elegir carrera:\n1. Identifica tus intereses y habilidades\n2. Investiga el campo laboral\n3. Revisa el plan de estudios\n4. Conversa con profesionales del área\n5. Considera la duración y costo\n\n📊 La PAES es requisito para la mayoría de las carreras universitarias. ¡Prepárate bien!';
    }
    
    if (msg.includes('adulto') || msg.includes('trabajo') || msg.includes('mayor')) {
      return '👨‍💼 Información para Adultos:\n\n📌 PAES para adultos: No hay límite de edad para rendir la PAES. Puedes darla las veces que necesites.\n\n📌 Modalidades de estudio para adultos:\n• Programas vespertinos\n• Programas de continuidad de estudios\n• Educación para jóvenes y adultos (EPJA)\n• Programas especiales de universidades\n\n📌 Si dejaste la escuela:\n• Puedes terminar enseñanza media a través de EXAMEN LIBRE o EPJA\n• Luego rendir la PAES y postular a la universidad\n\n💪 ¡Nunca es tarde para estudiar! Muchas personas logran su título siendo adultos.';
    }
    
    if (msg.includes('paes') || msg.includes('prueba') || msg.includes('consejo')) {
      return '🎯 Consejos para la PAES:\n\n📅 ANTES DE LA PRUEBA:\n1. Duerme bien la noche anterior (mínimo 8 horas)\n2. Lleva tu cédula de identidad\n3. Llega con anticipación al local\n4. Desayuna bien\n\n📝 DURANTE LA PRUEBA:\n1. Lee bien cada pregunta ANTES de responder\n2. Elimina las opciones obviamente incorrectas\n3. Si no sabes, marca y sigue. No te quedes pegado\n4. Controla el tiempo\n\n💡 Tip: Practica con simulacros cronometrados. ¡Esa es la clave!';
    }
    
    if (msg.includes('hola') || msg.includes('buenas') || msg.includes('hey')) {
      return '¡Hola! 😊 ¿En qué puedo ayudarte hoy? Puedo explicarte temas de:\n\n📐 Matemáticas\n📝 Lenguaje\n🔬 Ciencias\n🇨🇱 Historia\n\nO puedo ayudarte con:\n💰 Becas y financiamiento\n🎓 Universidades y carreras\n👨‍💼 Información para adultos\n\n¡Pregúntame lo que necesites!';
    }
    
    if (msg.includes('gracias') || msg.includes('thanks')) {
      return '¡De nada! 😊 Estoy aquí para ayudarte. Si tienes más dudas, no dudes en preguntar. ¡Mucho éxito en tu preparación! 🌟';
    }

    if (msg.includes('area') || msg.includes('perímetro') || msg.includes('perimetro')) {
      return '📐 Áreas y Perímetros:\n\n• CUADRADO: Área = lado² | Perímetro = 4 × lado\n• RECTÁNGULO: Área = base × altura | Perímetro = 2(base + altura)\n• TRIÁNGULO: Área = (base × altura) / 2\n• CÍRCULO: Área = π × radio² | Perímetro = 2π × radio\n\nRecuerda: Área = espacio interior, Perímetro = contorno';
    }

    if (msg.includes('verbo') || msg.includes('gramatica') || msg.includes('gramática')) {
      return '📝 Gramática básica:\n\n• SUJETO: Quien realiza la acción\n• PREDICADO: Lo que se dice del sujeto\n• VERBO: Acción o estado\n\nTipos de verbos:\n- Transitivos: necesitan objeto directo\n- Intransitivos: no necesitan objeto\n- Copulativos: ser, estar, parecer\n\nConectores: unen ideas (pero, además, sin embargo, por lo tanto)';
    }

    if (msg.includes('examen libre') || msg.includes('epja') || msg.includes('terminar media')) {
      return '📚 Terminar la Enseñanza Media:\n\n📌 EXAMEN LIBRE:\n• Para mayores de 18 años\n• Se rinde una vez al año\n• Exámenes de todas las asignaturas de 1° y 2° medio\n• Se inscribe en el Ministerio de Educación\n\n📌 EPJA (Educación para Jóvenes y Adultos):\n• Para mayores de 15 años\n• Clases presenciales, generalmente vespertinas\n• Duración: 2 años (equivalente a 1° y 2° medio)\n• Gratuitas en establecimientos municipales\n\n💡 Ambas opciones te dan licencia de enseñanza media para rendir la PAES.';
    }
    
    return '🤔 Puedo ayudarte con muchos temas. Prueba preguntándome sobre:\n\n📐 Matemáticas (ecuaciones, porcentajes, geometría)\n📝 Lenguaje (figuras literarias, comprensión lectora)\n🔬 Ciencias (célula, cuerpo humano, medio ambiente)\n🇨🇱 Historia (independencia, siglo XX, derechos humanos)\n💰 Becas y financiamiento\n🎓 Universidades y carreras\n👨‍💼 Información para adultos\n📚 Cómo terminar la enseñanza media\n\n¡Pregúntame lo que necesites!';
  };

  const handleSend = () => {
    if (input.trim() === '') return;
    
    const userMsg = { role: 'user', content: input };
    const aiResponse = { role: 'assistant', content: getAIResponse(input) };
    
    setMessages(prev => [...prev, userMsg, aiResponse]);
    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white">
        <h3 className="text-xl font-bold flex items-center gap-2">
          🤖 Ayudante IA
        </h3>
        <p className="text-indigo-100 text-sm">Pregúntame sobre materias, becas, universidades o cómo prepararte</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
              msg.role === 'user' 
                ? 'bg-indigo-600 text-white rounded-br-md' 
                : 'bg-white text-gray-800 shadow-md rounded-bl-md border border-gray-100'
            }`}>
              <p className="text-sm whitespace-pre-line">{msg.content}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 bg-white border-t border-gray-100">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe tu pregunta aquí..."
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
          />
          <button
            onClick={handleSend}
            className="px-5 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium text-sm"
          >
            Enviar
          </button>
        </div>
        <div className="flex gap-2 mt-2 flex-wrap">
          {['Becas', 'Adultos', 'Consejos PAES', 'Ecuaciones', 'Universidades'].map(suggestion => (
            <button
              key={suggestion}
              onClick={() => { setInput(suggestion); }}
              className="px-3 py-1 text-xs bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==================== QUIZ WITH TIMER ====================
function QuizSection() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const subjects = Object.keys(allQuestions);
  const questions = selectedSubject ? allQuestions[selectedSubject] : [];
  const question = questions[currentQuestion];

  useEffect(() => {
    if (quizStarted && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleFinishQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [quizStarted]);

  const startQuiz = (subject: string) => {
    setSelectedSubject(subject);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizFinished(false);
    setQuizStarted(true);
    setTimeLeft(allQuestions[subject].length * 60);
    setAnswers(new Array(allQuestions[subject].length).fill(null));
  };

  const handleFinishQuiz = () => {
    setQuizStarted(false);
    setQuizFinished(true);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleAnswer = (answerIdx: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIdx);
    setShowResult(true);
    
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIdx;
    setAnswers(newAnswers);
    
    if (answerIdx === question.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      handleFinishQuiz();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!selectedSubject) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">📝 Simulador de Pruebas</h2>
        <p className="text-gray-600 mb-6">Practica con simulacros cronometrados. Ideal para estudiantes de media, adultos y cualquier persona que quiera rendir la PAES.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subjects.map(subject => (
            <button
              key={subject}
              onClick={() => startQuiz(subject)}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] border border-gray-100 text-left group"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">
                  {subject === 'Matemáticas' ? '📐' : subject === 'Lenguaje' ? '📝' : subject === 'Ciencias' ? '🔬' : '🇨🇱'}
                </span>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">{subject}</h3>
              </div>
              <p className="text-gray-500 text-sm">{allQuestions[subject].length} preguntas • {allQuestions[subject].length} minutos</p>
              <div className="mt-3 flex items-center text-indigo-600 text-sm font-medium">
                Comenzar prueba →
              </div>
            </button>
          ))}
        </div>
        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-amber-800 text-sm flex items-start gap-2">
            <span className="text-lg">💡</span>
            <span><strong>Tip:</strong> En la PAES real tienes aproximadamente 1 minuto por pregunta. Practica con el cronómetro para mejorar tu velocidad y precisión.</span>
          </p>
        </div>
      </div>
    );
  }

  if (quizFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="text-6xl mb-4">
          {percentage >= 80 ? '🏆' : percentage >= 60 ? '👍' : percentage >= 40 ? '📚' : '💪'}
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">¡Prueba Terminada!</h2>
        <p className="text-gray-600 mb-4">{selectedSubject}</p>
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-6">
          <p className="text-4xl font-bold text-indigo-600">{score}/{questions.length}</p>
          <p className="text-gray-600 mt-1">Respuestas correctas ({percentage}%)</p>
        </div>
        <div className="mb-6">
          {percentage >= 80 && <p className="text-green-600 font-medium">¡Excelente! Vas muy bien preparado/a 🌟</p>}
          {percentage >= 60 && percentage < 80 && <p className="text-yellow-600 font-medium">¡Bien! Sigue practicando para mejorar 📈</p>}
          {percentage < 60 && <p className="text-orange-600 font-medium">Necesitas repasar más. ¡No te rindas! Revisa las guías 📖</p>}
        </div>
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={() => startQuiz(selectedSubject)}
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium"
          >
            Repetir Prueba
          </button>
          <button
            onClick={() => { setSelectedSubject(null); setQuizFinished(false); }}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium"
          >
            Otra Asignatura
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-lg">{selectedSubject}</h3>
            <p className="text-indigo-200 text-sm">Pregunta {currentQuestion + 1} de {questions.length}</p>
          </div>
          <div className={`text-2xl font-mono font-bold ${timeLeft < 30 ? 'text-red-300 animate-pulse' : ''}`}>
            ⏱️ {formatTime(timeLeft)}
          </div>
        </div>
        <div className="mt-3 bg-indigo-800 rounded-full h-2">
          <div 
            className="bg-white rounded-full h-2 transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="p-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-6">{question.question}</h4>
        <div className="space-y-3">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={showResult}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                showResult
                  ? idx === question.correctAnswer
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : idx === selectedAnswer
                      ? 'border-red-500 bg-red-50 text-red-800'
                      : 'border-gray-200 bg-gray-50 text-gray-500'
                  : selectedAnswer === idx
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
              }`}
            >
              <span className="font-medium mr-3">{String.fromCharCode(65 + idx)}.</span>
              {option}
              {showResult && idx === question.correctAnswer && <span className="float-right">✓</span>}
              {showResult && idx === selectedAnswer && idx !== question.correctAnswer && <span className="float-right">✗</span>}
            </button>
          ))}
        </div>

        {showResult && (
          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <p className="font-medium text-blue-800 mb-1">💡 Explicación:</p>
            <p className="text-blue-700 text-sm">{question.explanation}</p>
          </div>
        )}

        {showResult && (
          <button
            onClick={nextQuestion}
            className="mt-6 w-full py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium"
          >
            {currentQuestion < questions.length - 1 ? 'Siguiente Pregunta →' : 'Ver Resultados'}
          </button>
        )}
      </div>
    </div>
  );
}

// ==================== GUIDES SECTION ====================
function GuidesSection() {
  const [selectedGuide, setSelectedGuide] = useState<GuideTopic | null>(null);
  const [filter, setFilter] = useState<string>('Todas');

  const subjects = ['Todas', 'Matemáticas', 'Lenguaje', 'Ciencias', 'Historia'];
  const filteredGuides = filter === 'Todas' ? guides : guides.filter(g => g.subject === filter);

  if (selectedGuide) {
    return (
      <div>
        <button
          onClick={() => setSelectedGuide(null)}
          className="mb-4 text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1"
        >
          ← Volver a guías
        </button>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white">
            <span className="text-4xl">{selectedGuide.icon}</span>
            <h2 className="text-2xl font-bold mt-2">{selectedGuide.title}</h2>
            <p className="text-emerald-100 mt-1">{selectedGuide.subject}</p>
          </div>
          <div className="p-6">
            <div className="space-y-4 mb-8">
              {selectedGuide.content.map((paragraph, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-emerald-500 font-bold text-lg">{idx + 1}.</span>
                  <p className="text-gray-700 leading-relaxed">{paragraph}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
              <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
                💡 Tips para la PAES
              </h4>
              <ul className="space-y-2">
                {selectedGuide.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-amber-700">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">📚 Guías de Estudio</h2>
      <p className="text-gray-600 mb-6">Material de estudio organizado por asignatura. Perfecto para estudiantes de media, adultos y cualquier persona preparándose para la PAES.</p>
      
      <div className="flex gap-2 mb-6 flex-wrap">
        {subjects.map(subject => (
          <button
            key={subject}
            onClick={() => setFilter(subject)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === subject
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {subject}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredGuides.map(guide => (
          <button
            key={guide.id}
            onClick={() => setSelectedGuide(guide)}
            className="p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-[1.02] border border-gray-100 text-left group"
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl">{guide.icon}</span>
              <div>
                <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                  {guide.subject}
                </span>
                <h3 className="text-lg font-bold text-gray-800 mt-2 group-hover:text-indigo-600 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{guide.summary}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ==================== INFO SECTION ====================
function InfoSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">ℹ️ Información PAES</h2>
      <p className="text-gray-600 mb-6">Todo lo que necesitas saber sobre la prueba y el proceso de admisión.</p>

      {/* ¿Qué es la PAES? */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          📋 ¿Qué es la PAES?
        </h3>
        <p className="text-gray-700 mb-4">
          La <strong>Prueba de Acceso a la Educación Superior (PAES)</strong> es el examen que deben rendir los estudiantes que quieren ingresar a la universidad en Chile. Reemplazó a la antigua PSU en 2022.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-xl p-4">
            <h4 className="font-bold text-blue-800 mb-2">Pruebas Obligatorias:</h4>
            <ul className="space-y-1 text-sm text-blue-700">
              <li>• Competencia Lectora</li>
              <li>• Competencia Matemática 1 (M1)</li>
            </ul>
          </div>
          <div className="bg-purple-50 rounded-xl p-4">
            <h4 className="font-bold text-purple-800 mb-2">Pruebas Electivas:</h4>
            <ul className="space-y-1 text-sm text-purple-700">
              <li>• Competencia Matemática 2 (M2)</li>
              <li>• Ciencias</li>
              <li>• Historia y Ciencias Sociales</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ¿Quién puede rendir? */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          👥 ¿Quién puede rendir la PAES?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 rounded-xl p-4">
            <span className="text-3xl mb-2 block">🎒</span>
            <h4 className="font-bold text-green-800 mb-1">Estudiantes de media</h4>
            <p className="text-sm text-green-700">Alumnos de 4° medio que están terminando el colegio.</p>
          </div>
          <div className="bg-orange-50 rounded-xl p-4">
            <span className="text-3xl mb-2 block">👨‍💼</span>
            <h4 className="font-bold text-orange-800 mb-1">Adultos</h4>
            <p className="text-sm text-orange-700">Personas de cualquier edad que quieran estudiar una carrera. ¡No hay límite de edad!</p>
          </div>
          <div className="bg-pink-50 rounded-xl p-4">
            <span className="text-3xl mb-2 block">🔄</span>
            <h4 className="font-bold text-pink-800 mb-1">Quienes rinden de nuevo</h4>
            <p className="text-sm text-pink-700">Puedes dar la PAES las veces que necesites para mejorar tu puntaje.</p>
          </div>
        </div>
      </div>

      {/* Becas */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          💰 Becas y Financiamiento
        </h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl">
            <span className="text-2xl">🎓</span>
            <div>
              <h4 className="font-bold text-gray-800">Gratuidad</h4>
              <p className="text-sm text-gray-600">Cubre el arancel completo. Requisito: estar en el 50% de menores ingresos del país y matricularse en universidad adscrita.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
            <span className="text-2xl">📚</span>
            <div>
              <h4 className="font-bold text-gray-800">Beca de Arancel</h4>
              <p className="text-sm text-gray-600">Cubre total o parcialmente el arancel. Hay varias: Beca Nuevo Milenio, Beca Juan Gómez Millas, entre otras.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
            <span className="text-2xl">💳</span>
            <div>
              <h4 className="font-bold text-gray-800">Crédito con Aval del Estado (CAE)</h4>
              <p className="text-sm text-gray-600">Financiamiento bancario con garantía del Estado. Se paga una vez egresado y con ingresos superiores a cierto monto.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
            <span className="text-2xl">🌟</span>
            <div>
              <h4 className="font-bold text-gray-800">Beca Excelencia Técnica</h4>
              <p className="text-sm text-gray-600">Para estudiantes que ingresan a CFT o IP con buen rendimiento académico.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modalidades de estudio */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          🏫 Modalidades de Estudio
        </h3>
        <p className="text-gray-600 mb-4">Si eres adulto o tienes trabajo, existen opciones flexibles:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-xl p-4">
            <h4 className="font-bold text-gray-800 mb-1">📅 Programas Diurnos</h4>
            <p className="text-sm text-gray-600">Horario regular de lunes a viernes. Ideal para estudiantes que no trabajan.</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h4 className="font-bold text-gray-800 mb-1">🌙 Programas Vespertinos</h4>
            <p className="text-sm text-gray-600">Clases en la tarde/noche. Perfecto para personas que trabajan durante el día.</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h4 className="font-bold text-gray-800 mb-1">💻 Programas Online</h4>
            <p className="text-sm text-gray-600">Estudio a distancia con clases virtuales. Máxima flexibilidad de horario.</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h4 className="font-bold text-gray-800 mb-1">📝 Programas de Continuidad</h4>
            <p className="text-sm text-gray-600">Diseñados para adultos que dejaron sus estudios y quieren retomarlos.</p>
          </div>
        </div>
      </div>

      {/* Fechas importantes */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
          📅 Fechas Clave (Referencia General)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <p className="font-bold">Inscripción PAES</p>
            <p className="text-sm text-indigo-100">Generalmente entre abril y mayo</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <p className="font-bold">Rendición PAES</p>
            <p className="text-sm text-indigo-100">Fines de noviembre / principios de diciembre</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <p className="font-bold">Publicación de Resultados</p>
            <p className="text-sm text-indigo-100">Mediados de diciembre</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <p className="font-bold">Postulación a Universidades</p>
            <p className="text-sm text-indigo-100">Enero del año siguiente</p>
          </div>
        </div>
        <p className="text-xs text-indigo-200 mt-4">* Las fechas exactas varían cada año. Revisa demre.cl para información actualizada.</p>
      </div>
    </div>
  );
}

// ==================== MAIN APP ====================
export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'quiz' | 'guides' | 'ai' | 'info'>('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                PAES Prep
              </span>
            </button>
            <div className="flex gap-1">
              {[
                { id: 'home' as const, label: 'Inicio', icon: '🏠' },
                { id: 'quiz' as const, label: 'Pruebas', icon: '📝' },
                { id: 'guides' as const, label: 'Guías', icon: '📚' },
                { id: 'info' as const, label: 'Info PAES', icon: 'ℹ️' },
                { id: 'ai' as const, label: 'IA', icon: '🤖' },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-2 md:px-3 py-2 rounded-lg text-xs md:text-sm font-medium transition-all flex items-center gap-1 ${
                    currentPage === item.id
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="hidden md:inline">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {currentPage === 'home' && (
          <div>
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-3xl p-8 md:p-12 text-white mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative z-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  ¡Prepárate para la PAES! 🚀
                </h1>
                <p className="text-lg md:text-xl text-indigo-100 mb-4 max-w-2xl">
                  Tu plataforma de estudio para rendir la PAES con confianza. 
                  No importa si eres estudiante de media, adulto o estás retomando tus estudios.
                </p>
                <p className="text-indigo-200 mb-6 text-sm md:text-base">
                  🎒 Estudiantes de media • 👨‍💼 Adultos • 🔄 Personas que rinden de nuevo
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setCurrentPage('quiz')}
                    className="px-6 py-3 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg"
                  >
                    📝 Hacer una Prueba
                  </button>
                  <button
                    onClick={() => setCurrentPage('info')}
                    className="px-6 py-3 bg-white/20 text-white rounded-xl font-bold hover:bg-white/30 transition-colors backdrop-blur-sm border border-white/30"
                  >
                    ℹ️ Info PAES y Becas
                  </button>
                  <button
                    onClick={() => setCurrentPage('ai')}
                    className="px-6 py-3 bg-white/20 text-white rounded-xl font-bold hover:bg-white/30 transition-colors backdrop-blur-sm border border-white/30"
                  >
                    🤖 Preguntar a la IA
                  </button>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <button
                onClick={() => setCurrentPage('quiz')}
                className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-left border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-3">📝</div>
                <h3 className="text-base font-bold text-gray-800 mb-1">Pruebas con Tiempo</h3>
                <p className="text-gray-500 text-xs">Simulacros cronometrados con retroalimentación instantánea.</p>
              </button>
              <button
                onClick={() => setCurrentPage('guides')}
                className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-left border border-gray-100"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl mb-3">📚</div>
                <h3 className="text-base font-bold text-gray-800 mb-1">Guías de Estudio</h3>
                <p className="text-gray-500 text-xs">Material por asignatura con explicaciones y tips.</p>
              </button>
              <button
                onClick={() => setCurrentPage('info')}
                className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-left border border-gray-100"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-2xl mb-3">💰</div>
                <h3 className="text-base font-bold text-gray-800 mb-1">Becas y Info</h3>
                <p className="text-gray-500 text-xs">Todo sobre becas, universidades y el proceso.</p>
              </button>
              <button
                onClick={() => setCurrentPage('ai')}
                className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-left border border-gray-100"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl mb-3">🤖</div>
                <h3 className="text-base font-bold text-gray-800 mb-1">Ayudante IA</h3>
                <p className="text-gray-500 text-xs">Resuelve tus dudas al instante.</p>
              </button>
            </div>

            {/* Para quién es */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 ¿Para quién es esta plataforma?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🎒</div>
                  <h4 className="font-bold text-gray-800 mb-2">Estudiantes de Media</h4>
                  <p className="text-sm text-gray-600">Si estás en 3° o 4° medio y quieres prepararte con anticipación para la PAES.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">👨‍💼</div>
                  <h4 className="font-bold text-gray-800 mb-2">Adultos</h4>
                  <p className="text-sm text-gray-600">Si tienes 18 años o más, trabajas y quieres estudiar una carrera universitaria.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🔄</div>
                  <h4 className="font-bold text-gray-800 mb-2">Quienes rinden de nuevo</h4>
                  <p className="text-sm text-gray-600">Si ya diste la PAES y quieres mejorar tu puntaje para postular a otra carrera.</p>
                </div>
              </div>
            </div>

            {/* Stats & Motivation */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">📊 ¿Por qué prepararse ahora?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">📈</div>
                    <div>
                      <p className="font-medium text-gray-800">La PAES define tu futuro</p>
                      <p className="text-sm text-gray-500">Es la puerta de entrada a la educación superior</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">🧠</div>
                    <div>
                      <p className="font-medium text-gray-800">Practicar es la clave</p>
                      <p className="text-sm text-gray-500">Los simulacros mejoran tu rendimiento hasta un 40%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">⏰</div>
                    <div>
                      <p className="font-medium text-gray-800">Nunca es tarde</p>
                      <p className="text-sm text-gray-500">No importa tu edad. ¡Cada día de estudio cuenta!</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-5 flex flex-col justify-center">
                  <p className="text-2xl font-bold text-indigo-600 mb-2">💪 ¡Tú puedes!</p>
                  <p className="text-gray-600 text-sm">
                    Recuerda que cada pregunta que practicas te acerca más a tu meta. 
                    Usa las guías para estudiar, las pruebas para medir tu progreso y la IA para resolver dudas.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">4 asignaturas</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">60+ preguntas</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">12 guías</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">Sin límite de edad</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'quiz' && <QuizSection />}
        {currentPage === 'guides' && <GuidesSection />}
        {currentPage === 'ai' && <AIChat />}
        {currentPage === 'info' && <InfoSection />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-12 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            🎓 PAES Prep - Preparación para la Prueba de Acceso a la Educación Superior
          </p>
          <p className="text-gray-400 text-xs mt-1">
            Para estudiantes de media, adultos y personas de 16 años en adelante • Hecho con ❤️ en Chile
          </p>
        </div>
      </footer>
    </div>
  );
}

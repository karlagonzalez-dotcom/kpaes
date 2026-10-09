import { useState, useEffect, useRef } from 'react';
import { allQuestions, Question } from './data/questions';
import { guides, GuideTopic } from './data/guides';

// ==================== AI CHATBOT ====================
function AIChat() {
  const [messages, setMessages] = useState<{role: string, content: string}[]>([
    { role: 'assistant', content: '¡Hola! 👋 Soy tu ayudante IA para la PAES. Puedo ayudarte con dudas de Matemáticas, Lenguaje, Ciencias e Historia. ¿En qué te puedo ayudar?' }
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
      return '📊 Para calcular porcentajes:\n\n• 25% de 200 = 200 × 0.25 = 50\n• Para aumentar 10%: multiplica por 1.10\n• Para descontar 20%: multiplica por 0.80\n\nTruco: convierte el % a decimal dividiendo entre 100.\n\n¿Necesitas practicar con algún ejercicio?';
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
    
    if (msg.includes('fraccion') || msg.includes('dividir fraccion')) {
      return '📐 Operaciones con fracciones:\n\n• SUMA/RESTA: Mismo denominador → suma/resta numeradores\n• Multiplicación: Multiplica numerador × numerador, denominador × denominador\n• División: Multiplica por el inverso (cruz)\n\nEjemplo: 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6\n\n¿Quieres más ejemplos?';
    }
    
    if (msg.includes('fotosíntesis') || msg.includes('fotosintesis') || msg.includes('planta')) {
      return '🌱 Fotosíntesis:\n\nEs el proceso por el cual las plantas producen su alimento.\n\nFórmula: CO₂ + H₂O + Luz → Glucosa + O₂\n\nOcurre en los CLOROPLASTOS (tienen clorofila, pigmento verde).\n\nNecesita: luz solar, agua, dióxido de carbono\nProduce: glucosa (alimento) y oxígeno\n\n¡Por eso las plantas son importantes para el aire que respiramos!';
    }
    
    if (msg.includes('paes') || msg.includes('prueba') || msg.includes('consejo')) {
      return '🎯 Consejos para la PAES:\n\n1. Duerme bien la noche anterior (mínimo 8 horas)\n2. Lee bien cada pregunta ANTES de responder\n3. Elimina las opciones obviamente incorrectas\n4. Si no sabes, marca y sigue. No te quedes pegado.\n5. Controla el tiempo: no gastes mucho en una pregunta\n6. Practica con simulacros cronometrados\n7. Repasa tus errores de pruebas anteriores\n\n¡Tú puedes! 💪';
    }
    
    if (msg.includes('hola') || msg.includes('buenas') || msg.includes('hey')) {
      return '¡Hola! 😊 ¿En qué puedo ayudarte hoy? Puedo explicarte temas de:\n\n📐 Matemáticas\n📝 Lenguaje\n🔬 Ciencias\n🇨🇱 Historia\n\nO puedo darte consejos para la PAES. ¡Pregúntame lo que necesites!';
    }
    
    if (msg.includes('gracias') || msg.includes('thanks')) {
      return '¡De nada! 😊 Estoy aquí para ayudarte. Si tienes más dudas, no dudes en preguntar. ¡Mucho éxito en tu preparación para la PAES! 🌟';
    }

    if (msg.includes('area') || msg.includes('perímetro') || msg.includes('perimetro')) {
      return '📐 Áreas y Perímetros:\n\n• CUADRADO: Área = lado² | Perímetro = 4 × lado\n• RECTÁNGULO: Área = base × altura | Perímetro = 2(base + altura)\n• TRIÁNGULO: Área = (base × altura) / 2\n• CÍRCULO: Área = π × radio² | Perímetro = 2π × radio\n\nRecuerda: Área = espacio interior, Perímetro = contorno';
    }

    if (msg.includes('verbo') || msg.includes('gramatica') || msg.includes('gramática')) {
      return '📝 Gramática básica:\n\n• SUJETO: Quien realiza la acción\n• PREDICADO: Lo que se dice del sujeto\n• VERBO: Acción o estado\n\nTipos de verbos:\n- Transitivos: necesitan objeto directo\n- Intransitivos: no necesitan objeto\n- Copulativos: ser, estar, parecer\n\nConectores: unen ideas (pero, además, sin embargo, por lo tanto)';
    }
    
    return '🤔 Interesante pregunta. Puedo ayudarte con temas de:\n\n📐 Matemáticas (ecuaciones, porcentajes, geometría)\n📝 Lenguaje (figuras literarias, comprensión lectora, gramática)\n🔬 Ciencias (célula, fotosíntesis, cuerpo humano)\n🇨🇱 Historia (independencia de Chile, civilizaciones)\n\nIntenta preguntar algo más específico como:\n• "¿Cómo resuelvo ecuaciones?"\n• "¿Qué son las figuras literarias?"\n• "Dame consejos para la PAES"';
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
          🤖 Ayudante IA - PAES Prep
        </h3>
        <p className="text-indigo-100 text-sm">Pregúntame lo que necesites saber</p>
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
          {['Consejos PAES', 'Ecuaciones', 'Figuras literarias', 'La célula'].map(suggestion => (
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
    setTimeLeft(allQuestions[subject].length * 60); // 1 min per question
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
        <p className="text-gray-600 mb-6">Elige una asignatura para comenzar tu simulacro con tiempo.</p>
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
      <p className="text-gray-600 mb-6">Material de estudio organizado por asignatura para tu preparación PAES.</p>
      
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

// ==================== MAIN APP ====================
export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'quiz' | 'guides' | 'ai'>('home');

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
                { id: 'ai' as const, label: 'IA Ayudante', icon: '🤖' },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                    currentPage === item.id
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span className="hidden sm:inline">{item.icon}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                  <span className="sm:hidden text-lg">{item.icon}</span>
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
                <p className="text-lg md:text-xl text-indigo-100 mb-6 max-w-2xl">
                  Tu plataforma de estudio para pasar de 1° a 2° medio con todo. 
                  Pruebas cronometradas, guías de estudio y un ayudante IA para resolver tus dudas.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setCurrentPage('quiz')}
                    className="px-6 py-3 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg"
                  >
                    📝 Hacer una Prueba
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <button
                onClick={() => setCurrentPage('quiz')}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-left border border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-4">📝</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Pruebas con Tiempo</h3>
                <p className="text-gray-500 text-sm">Simulacros cronometrados de Matemáticas, Lenguaje, Ciencias e Historia con retroalimentación instantánea.</p>
              </button>
              <button
                onClick={() => setCurrentPage('guides')}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-left border border-gray-100"
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-2xl mb-4">📚</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Guías de Estudio</h3>
                <p className="text-gray-500 text-sm">Material organizado por asignatura con explicaciones claras, ejemplos y tips para la PAES.</p>
              </button>
              <button
                onClick={() => setCurrentPage('ai')}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-left border border-gray-100"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-2xl mb-4">🤖</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Ayudante IA</h3>
                <p className="text-gray-500 text-sm">Un asistente inteligente que resuelve tus dudas y te explica los temas que necesites reforzar.</p>
              </button>
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
                      <p className="font-medium text-gray-800">Empieza temprano</p>
                      <p className="text-sm text-gray-500">Cada día de estudio cuenta. ¡No lo dejes para último!</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-5 flex flex-col justify-center">
                  <p className="text-2xl font-bold text-indigo-600 mb-2">💪 ¡Tú puedes!</p>
                  <p className="text-gray-600 text-sm">
                    Recuerda que cada pregunta que practicas te acerca más a tu meta. 
                    Usa las guías para estudiar, las pruebas para medir tu progreso y la IA para resolver dudas.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">4 asignaturas</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">40+ preguntas</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">6 guías</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'quiz' && <QuizSection />}
        {currentPage === 'guides' && <GuidesSection />}
        {currentPage === 'ai' && <AIChat />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-12 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            🎓 PAES Prep - Tu ayudante para la Prueba de Acceso a la Educación Superior
          </p>
          <p className="text-gray-400 text-xs mt-1">
            Hecho con ❤️ para estudiantes de Chile
          </p>
        </div>
      </footer>
    </div>
  );
}

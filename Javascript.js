// CONTENIDO EDITABLE DEL JUEGO
// Cada objeto de levels es un nivel. Puedes cambiar title, subtitle, icon y tone.
// Cada pregunta lleva topic, text, answers, correct, explanation y hint.
// "correct" es la posición de la respuesta correcta empezando en 0:
// 0 = primera opción, 1 = segunda, 2 = tercera, 3 = cuarta.
// Para agregar preguntas, copia un objeto question dentro de questions.
// Para agregar un nivel, copia un objeto de nivel completo dentro de este arreglo.
const sampleLevels = [
    {
        title: "Álgebra",
        subtitle: "Ecuaciones, potencias y logaritmos",
        icon: "x²",
        tone: "violet",
        questions: [
            {
                topic: "ECUACIONES",
                hint: "Primero deja el término con x solo en un lado de la igualdad.",
                text: "Si 3x − 7 = 11, ¿cuánto vale x?",
                answers: ["4", "6", "8", "−6"],
                correct: 1,
                explanation: "Suma 7 a ambos lados: 3x = 18. Luego divide entre 3: x = 6."
            },
            {
                topic: "LOGARITMOS",
                hint: "Piensa qué exponente necesita el 2 para convertirse en 32.",
                text: "¿Cuál es el valor de log₂(32)?",
                answers: ["4", "5", "8", "16"],
                correct: 1,
                explanation: "El logaritmo pregunta a qué exponente elevar 2 para obtener 32. Como 2⁵ = 32, el resultado es 5."
            },
            {
                topic: "PRODUCTOS NOTABLES",
                hint: "Multiplica cada término del primer paréntesis por cada término del segundo.",
                text: "¿Cuál es el desarrollo de (x + 2)(x − 3)?",
                answers: ["x² − x − 6", "x² + x − 6", "x² − 5x + 6", "x² − 6"],
                correct: 0,
                explanation: "Multiplica término a término: x² − 3x + 2x − 6 = x² − x − 6."
            }
        ]
    },
    {
        title: "Funciones",
        subtitle: "Evaluación, rectas y dominio",
        icon: "ƒ(x)",
        tone: "mint",
        questions: [
            {
                topic: "EVALUACIÓN DE FUNCIONES",
                hint: "Reemplaza cada x por −2 y recuerda que elevar un negativo al cuadrado da positivo.",
                text: "Si f(x) = 2x² − 3, ¿cuánto es f(−2)?",
                answers: ["5", "−11", "11", "−5"],
                correct: 0,
                explanation: "Sustituye x por −2: 2(−2)² − 3 = 2·4 − 3 = 5."
            },
            {
                topic: "PENDIENTE DE UNA RECTA",
                hint: "Resta las coordenadas y de los puntos y divide por la resta de sus coordenadas x.",
                text: "¿Cuál es la pendiente de la recta que pasa por (1, 2) y (4, 11)?",
                answers: ["2", "3", "4", "9"],
                correct: 1,
                explanation: "La pendiente es (11 − 2) / (4 − 1) = 9 / 3 = 3."
            },
            {
                topic: "DOMINIO",
                hint: "Lo que está dentro de una raíz cuadrada debe ser mayor o igual que cero.",
                text: "¿Cuál es el dominio real de g(x) = √(x − 4)?",
                answers: ["x ≤ 4", "x > 4", "x ≥ 4", "Todos los reales"],
                correct: 2,
                explanation: "El radicando debe ser mayor o igual que cero: x − 4 ≥ 0, por tanto x ≥ 4."
            }
        ]
    },
    {
        title: "Geometría",
        subtitle: "Trigonometría y medidas",
        icon: "△",
        tone: "gold",
        questions: [
            {
                topic: "TRIGONOMETRÍA",
                hint: "Recuerda los valores notables del seno para 30°, 45° y 60°.",
                text: "¿Cuánto vale sen(30°)?",
                answers: ["√3 / 2", "1", "1 / 2", "0"],
                correct: 2,
                explanation: "Es un valor trigonométrico notable: sen(30°) = 1/2."
            },
            {
                topic: "TEOREMA DE PITÁGORAS",
                hint: "Eleva 3 y 4 al cuadrado, suma esos resultados y busca la raíz.",
                text: "Un triángulo rectángulo tiene catetos de 3 y 4 unidades. ¿Cuánto mide la hipotenusa?",
                answers: ["5", "6", "7", "12"],
                correct: 0,
                explanation: "Por Pitágoras, c² = 3² + 4² = 9 + 16 = 25; entonces c = 5."
            },
            {
                topic: "CIRCUNFERENCIA",
                hint: "Usa la fórmula de longitud: dos veces π por el radio.",
                text: "¿Cuál es la longitud de una circunferencia de radio 3?",
                answers: ["3π", "6π", "9π", "12π"],
                correct: 1,
                explanation: "La longitud es 2πr. Con r = 3, resulta 2π·3 = 6π."
            }
        ]
    },
    {
        title: "Cálculo",
        subtitle: "Límites, derivadas e integrales",
        icon: "∫",
        tone: "blue",
        questions: [
            {
                topic: "DERIVADAS",
                hint: "Deriva cada término usando la regla de la potencia y luego sustituye x = 2.",
                text: "Si f(x) = x³ − 2x, ¿cuánto vale f′(2)?",
                answers: ["8", "10", "12", "14"],
                correct: 1,
                explanation: "La derivada es f′(x) = 3x² − 2. Al evaluar en 2: 3·4 − 2 = 10."
            },
            {
                topic: "LÍMITES",
                hint: "El numerador es una diferencia de cuadrados: factorízalo antes de calcular el límite.",
                text: "¿Cuánto vale lim (x² − 9)/(x − 3) cuando x → 3?",
                answers: ["0", "3", "6", "No existe"],
                correct: 2,
                explanation: "Factoriza x² − 9 = (x − 3)(x + 3). Para x ≠ 3, queda x + 3; su límite es 6."
            },
            {
                topic: "INTEGRALES",
                hint: "Busca una función cuya derivada sea 2x.",
                text: "¿Cuál es una antiderivada de 2x?",
                answers: ["2x² + C", "x² + C", "x + C", "2 + C"],
                correct: 1,
                explanation: "La derivada de x² es 2x, así que una antiderivada es x² + C."
            }
        ]
    },
    {
        title: "Probabilidad",
        subtitle: "Azar y estadística",
        icon: "◉",
        tone: "violet",
        questions: [
            {
                topic: "PROBABILIDAD",
                hint: "Cuenta cuántos resultados pares tiene un dado y compáralos con los seis posibles.",
                text: "Al lanzar un dado justo, ¿cuál es la probabilidad de obtener un número par?",
                answers: ["1 / 6", "1 / 3", "1 / 2", "2 / 3"],
                correct: 2,
                explanation: "Hay 3 resultados pares (2, 4 y 6) entre 6 resultados posibles: 3/6 = 1/2."
            },
            {
                topic: "MEDIA ARITMÉTICA",
                hint: "Suma los tres números y divide el total entre 3.",
                text: "¿Cuál es la media de 4, 6 y 8?",
                answers: ["5", "6", "7", "18"],
                correct: 1,
                explanation: "Suma los datos y divide entre la cantidad: (4 + 6 + 8) / 3 = 18 / 3 = 6."
            },
            {
                topic: "PROBABILIDAD COMPUESTA",
                hint: "Multiplica la probabilidad de cara del primer lanzamiento por la del segundo.",
                text: "Lanzas una moneda justa dos veces. ¿Cuál es la probabilidad de obtener cara en ambas?",
                answers: ["1 / 2", "1 / 3", "1 / 4", "3 / 4"],
                correct: 2,
                explanation: "Cada lanzamiento tiene probabilidad 1/2 de cara. Como son independientes: 1/2 · 1/2 = 1/4."
            }
        ]
    }
];

const levels = window.mathLevels || sampleLevels;

const games = [
    { id: "quiz", title: "Quiz de opciones", description: "Resuelve preguntas y elige una de cuatro respuestas.", icon: "A" },
    { id: "true-false", title: "Verdadero o falso", description: "Comprueba si la respuesta propuesta es correcta.", icon: "✓" },
    { id: "fill", title: "Completa el resultado", description: "Escribe el valor exacto o la expresión que resuelve cada ejercicio.", icon: "✎" },
    { id: "speed", title: "Ronda exprés", description: "Responde el quiz antes de que se acabe el tiempo.", icon: "⏱" },
    { id: "puzzle", title: "Puzzle de funciones", description: "Arrastra puntos y transforma gráficas para descubrir continuidad y discontinuidad.", icon: "⌁" }
];

const puzzleChallenges = [
    {
        topic: "NIVEL 1 · RECONOCER LA CONTINUIDAD",
        title: "Observa los límites laterales",
        prompt: "¿La gráfica es continua o discontinua? Explora sus puntos y elige una clasificación.",
        hint: "Pinchuskin: sigue la curva hasta x = 0 desde ambos lados. Si llega a alturas distintas, los límites laterales no coinciden.",
        answer: "Discontinua por salto: en x = 0 los límites laterales llegan a alturas diferentes.",
        graph: "jump",
        guide: "poroto"
    },
    {
        topic: "NIVEL 2 · REPARAR LA GRÁFICA",
        title: "Elimina el hueco",
        prompt: "Haz que la función sea continua en todo el intervalo. Puedes unir los extremos o completar el valor que falta.",
        hint: "Pinchuskin: el hueco está en (0, 0). Añade allí un punto cerrado o quita el punto abierto para unir los dos segmentos.",
        answer: "Une los dos tramos en (0, 0), cerrando el punto abierto o quitando el hueco.",
        graph: "hole",
        guide: "hamster"
    },
    {
        topic: "NIVEL 3 · CREAR UNA DISCONTINUIDAD",
        title: "Construye un salto",
        prompt: "Transforma la recta continua en una función con un salto. Los límites laterales deben ser diferentes.",
        hint: "Pinchuskin: elige «Crear salto» y toca la recta entre sus extremos. También puedes separar a mano los extremos de dos segmentos.",
        answer: "Crea un salto en x = 0 para que los límites laterales queden a distintas alturas.",
        graph: "continuous",
        guide: "hada"
    },
    {
        topic: "NIVEL 4 · DESAFÍO AVANZADO",
        title: "Crea una discontinuidad evitable",
        prompt: "En x = 0, deja un hueco en la curva y coloca un punto cerrado a otra altura. Los límites laterales deben coincidir.",
        hint: "Pinchuskin: abre un hueco en x = 0. Después añade un punto cerrado en (0, 2): el límite existe, pero f(0) tiene otro valor.",
        answer: "Deja un hueco en (0, 0) y agrega un punto cerrado en (0, 2).",
        graph: "continuous",
        guide: "media"
    }
];

const companions = [
    { id: "poroto", name: "Poroto", role: "Guía alegre" },
    { id: "hamster", name: "Pinchuskin", role: "Experto en matemática" },
    { id: "hada", name: "Hada", role: "Guardiana de logros" },
    { id: "media", name: "Media", role: "Títere lector" }
];

const companionProfiles = {
    poroto: {
        description: "Guía la aventura, explica el objetivo de cada nivel y anima al jugador en cada intento.",
        example: "¡Bienvenido a Funciones! Hoy veremos cómo cada entrada x produce una salida. Lee la consigna y avanzamos juntos."
    },
    hamster: {
        description: "Pinchuskin ofrece pistas graduales, ejemplos y procedimientos para comprender los diez temas.",
        example: "Pista: antes de despejar x en 3x + 5 = 20, elimina primero el 5 haciendo la misma operación en ambos lados."
    },
    hada: {
        description: "Registra insignias, medallas y recompensas que se ganan con respuestas y niveles realmente completados.",
        example: "¡Insignia ganada! Respondiste los tres desafíos de Ecuaciones y desbloqueaste el siguiente nivel."
    },
    media: {
        description: "Lee preguntas, instrucciones y opciones en español; permite repetir, pausar y activar lectura automática.",
        example: "Escucha la consigna y sus opciones. Puedes pausar la voz o volver a reproducirla cuando quieras."
    }
};

const rewardDefinitions = [
    { id: "streak-3", title: "Racha brillante", description: "Responde correctamente 3 desafíos seguidos.", icon: "🔥" },
    { id: "streak-5", title: "Racha de leyenda", description: "Responde correctamente 5 desafíos seguidos.", icon: "⚡" },
    { id: "scholar-30", title: "Mente matemática", description: "Supera 30 desafíos correctamente.", icon: "🧠" },
    { id: "perfect-level", title: "Nivel impecable", description: "Completa un nivel sin respuestas incorrectas.", icon: "💎" },
    { id: "all-levels", title: "Cristal del saber", description: "Completa los 10 niveles de la aventura.", icon: "👑" }
];
const medalTierLabels = { bronze: "bronce", silver: "plata", gold: "oro" };

const petArtwork = {
    poroto: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="porotoBean" x1="27" y1="14" x2="75" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#e0b477"/><stop offset=".5" stop-color="#c88a50"/><stop offset="1" stop-color="#a8663d"/></linearGradient></defs>
        <ellipse cx="52" cy="91" rx="29" ry="5" fill="#111827" opacity=".22"/>
        <path d="M51 12c19 0 33 13 34 32 2 19-9 37-26 44-16 7-34-1-42-17C8 55 14 34 27 21c7-6 15-9 24-9Z" fill="url(#porotoBean)" stroke="#815338" stroke-linejoin="round" stroke-width="4"/>
        <path d="M30 28q8-9 19-10m-25 23q2-5 5-8" fill="none" stroke="#f1d0a1" stroke-linecap="round" stroke-width="4"/>
        <ellipse cx="40" cy="48" rx="4" ry="5" fill="#263849"/><ellipse cx="61" cy="48" rx="4" ry="5" fill="#263849"/>
        <circle cx="41" cy="46" r="1.4" fill="#fff"/><circle cx="62" cy="46" r="1.4" fill="#fff"/>
        <path d="M45 60q6 7 12 0" fill="none" stroke="#56372b" stroke-linecap="round" stroke-width="3"/>
        <ellipse cx="32" cy="58" rx="5" ry="3" fill="#f49b91"/><ellipse cx="69" cy="58" rx="5" ry="3" fill="#f49b91"/>
        <path d="M69 73q-5 5-11 4" fill="none" stroke="#f0c99d" stroke-linecap="round" stroke-width="3"/>
    </svg>`,
    hada: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="hadaWing" x1="14" y1="24" x2="42" y2="71" gradientUnits="userSpaceOnUse"><stop stop-color="#d8fbff"/><stop offset="1" stop-color="#70d4ee"/></linearGradient><linearGradient id="hadaDress" x1="40" y1="48" x2="63" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#e5a5ff"/><stop offset="1" stop-color="#9064e8"/></linearGradient></defs>
        <ellipse cx="50" cy="91" rx="29" ry="5" fill="#111827" opacity=".22"/>
        <path d="M42 47C20 8 3 26 25 57 8 77 25 86 47 66m11-20C80 7 97 25 75 56c17 21 0 30-22 10" fill="url(#hadaWing)" stroke="#5486bd" stroke-linejoin="round" stroke-width="3"/>
        <path d="M36 35q12 11 12 26M64 35Q52 46 52 61" fill="none" stroke="#effdff" stroke-linecap="round" stroke-width="3" opacity=".85"/>
        <path d="M50 47 37 81q13 13 26 0Z" fill="url(#hadaDress)" stroke="#624e91" stroke-linejoin="round" stroke-width="3"/>
        <path d="m37 69 13 5 13-5" fill="none" stroke="#f8d7ff" stroke-width="3"/>
        <path d="M43 81q-8 8-13 4m27-4q8 8 13 4" fill="none" stroke="#ffd7b5" stroke-linecap="round" stroke-width="5"/>
        <circle cx="50" cy="34" r="15" fill="#ffd7b5" stroke="#815c62" stroke-width="3"/>
        <path d="M35 35q0-21 17-20 15 1 14 20l-8-8-8 4-7-5Z" fill="#6b4c91" stroke="#493b68" stroke-linejoin="round" stroke-width="3"/>
        <path d="M43 26q6-8 14-7" fill="none" stroke="#b993e8" stroke-linecap="round" stroke-width="3"/>
        <circle cx="45" cy="36" r="2.3" fill="#263849"/><circle cx="56" cy="36" r="2.3" fill="#263849"/>
        <path d="M47 42q3 3 6 0" fill="none" stroke="#a95769" stroke-linecap="round" stroke-width="2"/>
        <ellipse cx="40" cy="41" rx="3" ry="2" fill="#f49b91"/><ellipse cx="60" cy="41" rx="3" ry="2" fill="#f49b91"/>
        <path d="m78 13 3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z" fill="#ffd66f" stroke="#c18d3c" stroke-linejoin="round" stroke-width="2"/>
        <path d="M75 41q9 0 11-8" fill="none" stroke="#9d7bd4" stroke-linecap="round" stroke-width="3"/>
    </svg>`,
    hamster: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="hamsterFur" x1="26" y1="22" x2="73" y2="87" gradientUnits="userSpaceOnUse"><stop stop-color="#ffd58d"/><stop offset=".58" stop-color="#e9a85d"/><stop offset="1" stop-color="#bf744b"/></linearGradient></defs>
        <ellipse cx="50" cy="91" rx="31" ry="5" fill="#111827" opacity=".22"/>
        <path d="M26 76q-15 5-14-8 2-9 13-7m49 15q15 5 14-8-2-9-13-7" fill="#f3bf80" stroke="#744d3d" stroke-linecap="round" stroke-width="3"/>
        <circle cx="32" cy="28" r="16" fill="#cf8752" stroke="#744d3d" stroke-width="4"/>
        <circle cx="68" cy="28" r="16" fill="#cf8752" stroke="#744d3d" stroke-width="4"/>
        <circle cx="32" cy="29" r="8" fill="#f4b4ae"/><circle cx="68" cy="29" r="8" fill="#f4b4ae"/>
        <ellipse cx="50" cy="57" rx="35" ry="34" fill="url(#hamsterFur)" stroke="#744d3d" stroke-width="4"/>
        <path d="M22 48q8-11 19-9m18-1q12-2 20 10" fill="none" stroke="#ffe0ad" stroke-linecap="round" stroke-width="5"/>
        <ellipse cx="50" cy="69" rx="21" ry="17" fill="#fff0d6"/>
        <circle cx="39" cy="51" r="4" fill="#263849"/><circle cx="61" cy="51" r="4" fill="#263849"/>
        <circle cx="40" cy="50" r="1.2" fill="#fff"/><circle cx="62" cy="50" r="1.2" fill="#fff"/>
        <ellipse cx="50" cy="61" rx="4" ry="3" fill="#a85e67"/>
        <path d="M46 66q4 5 8 0" fill="none" stroke="#744d3d" stroke-linecap="round" stroke-width="2"/>
        <ellipse cx="31" cy="61" rx="6" ry="4" fill="#f49b91"/><ellipse cx="69" cy="61" rx="6" ry="4" fill="#f49b91"/>
        <path d="M35 85q-5 7-10 4m40 0q5 3 10-4" fill="none" stroke="#744d3d" stroke-linecap="round" stroke-width="4"/>
        <path d="m75 35 2-4 2 4 4 1-3 3 1 4-4-2-3 2 1-4-3-3Z" fill="#fff4b1"/>
    </svg>`,
    media: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="mediaSock" x1="27" y1="17" x2="82" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#fff3d4"/><stop offset=".62" stop-color="#f4d9aa"/><stop offset="1" stop-color="#ddb77f"/></linearGradient>
            <linearGradient id="mediaPatch" x1="70" y1="64" x2="87" y2="87" gradientUnits="userSpaceOnUse"><stop stop-color="#8ed9d1"/><stop offset="1" stop-color="#54aaa9"/></linearGradient>
        </defs>
        <ellipse cx="54" cy="94" rx="35" ry="4" fill="#111827" opacity=".2"/>
        <path d="M31 28q0-11 10-11h23q10 0 10 11v31q0 8 8 12l8 5q7 5 3 12-2 5-10 5H39q-14 0-16-11-2-9 6-16 3-3 3-8Z" fill="url(#mediaSock)" stroke="#856d55" stroke-linejoin="round" stroke-width="3.5"/>
        <path d="M31 28q0-11 10-11h23q10 0 10 11v8H31Z" fill="#b9a2dd" stroke="#856d55" stroke-linejoin="round" stroke-width="3"/>
        <path d="M35 21v11m6-13v16m7-16v16m7-16v16m7-16v16m6-14v11" fill="none" stroke="#e8dcf5" stroke-linecap="round" stroke-width="2"/>
        <path d="M73 63q1 7 9 11l8 5q7 5 3 12-2 5-10 5H62q10-8 9-18Z" fill="url(#mediaPatch)" stroke="#856d55" stroke-linejoin="round" stroke-width="2"/>
        <path d="M26 72q8-5 15 1 5 5 1 12-5 7-14 3" fill="#e4c69a" stroke="#856d55" stroke-width="2"/>
        <path d="M34 47q-10 2-13 10m48-10q9 2 13 9" fill="none" stroke="#856d55" stroke-linecap="round" stroke-width="3"/>
        <path d="M21 57q-5 4-3 9m64-2q7 2 8 7" fill="none" stroke="#e4c69a" stroke-linecap="round" stroke-width="5"/>
        <path d="M38 40q-3-7 2-10 5-3 8 2 2-8 8-7 6 1 5 8 7-2 9 4" fill="none" stroke="#805244" stroke-linecap="round" stroke-width="5"/>
        <circle cx="39" cy="34" r="4" fill="#9b6652"/><circle cx="51" cy="29" r="4" fill="#9b6652"/><circle cx="62" cy="34" r="4" fill="#9b6652"/>
        <ellipse cx="42" cy="45" rx="7" ry="8" fill="#fff" stroke="#594d48" stroke-width="2"/>
        <ellipse cx="60" cy="45" rx="7" ry="8" fill="#fff" stroke="#594d48" stroke-width="2"/>
        <ellipse cx="44" cy="46" rx="3" ry="4" fill="#263849"/><ellipse cx="59" cy="46" rx="3" ry="4" fill="#263849"/>
        <circle cx="45" cy="44" r="1.3" fill="#fff"/><circle cx="60" cy="44" r="1.3" fill="#fff"/>
        <ellipse cx="33" cy="54" rx="4" ry="2.5" fill="#ec9d91"/><ellipse cx="68" cy="54" rx="4" ry="2.5" fill="#ec9d91"/>
        <path d="M34 57q17-7 34 0v9q-17 8-34 0Z" fill="#593b4b" stroke="#594d48" stroke-linejoin="round" stroke-width="2.5"/>
        <path d="M39 58q12-4 24 0l-3 4H42Z" fill="#fff8eb"/>
        <path d="M41 66q10 3 20 0v3q-9 10-18 2Z" fill="#d8798e" stroke="#594d48" stroke-linejoin="round" stroke-width="1.5"/>
        <path d="M34 57q17 5 34 0" fill="none" stroke="#fff0d3" stroke-linecap="round" stroke-width="2"/>
        <path d="M38 76v3m6-3v3m6-3v3m6-3v3m6-3v3" stroke="#c79e6d" stroke-linecap="round" stroke-width="1.5" opacity=".8"/>
        <path d="m81 20 2 4 4 1-3 3 1 4-4-2-3 2 1-4-3-3 4-1Z" fill="#ffd675"/>
    </svg>`
};

function createPetIllustration(pet, className) {
    const illustration = document.createElement("span");
    illustration.className = className;
    illustration.setAttribute("aria-hidden", "true");
    illustration.innerHTML = petArtwork[pet.id];
    return illustration;
}

// La clave identifica los datos guardados en el navegador (localStorage).
// Si quieres reiniciar el progreso de pruebas, cambia esta clave o borra los datos del sitio.
const storageKey = "ruta-del-saber-progress";
const curriculumVersion = 2;
const ownerAccessPin = "2009";
const savedProgress = JSON.parse(localStorage.getItem(storageKey) || "null");
const hasCurrentCurriculumProgress = savedProgress?.curriculumVersion === curriculumVersion;

// Recupera el avance guardado y valida sus valores antes de usarlos.
// unlockedLevel es el último nivel abierto; bestScore es el récord total.
const progress = {
    unlockedLevel: Number.isInteger(savedProgress?.unlockedLevel)
        ? Math.min(Math.max(hasCurrentCurriculumProgress ? savedProgress.unlockedLevel : 0, 0), levels.length - 1)
        : 0,
    score: Number.isInteger(savedProgress?.score) && savedProgress.score >= 0
        ? savedProgress.score
        : 0,
    bestScore: Number.isInteger(savedProgress?.bestScore) && savedProgress.bestScore >= 0
        ? savedProgress.bestScore
        : 0,
    completed: hasCurrentCurriculumProgress && savedProgress?.completed === true,
    experience: Number.isInteger(savedProgress?.experience) && savedProgress.experience >= 0
        ? savedProgress.experience
        : 0,
    badges: hasCurrentCurriculumProgress && Array.isArray(savedProgress?.badges)
        ? savedProgress.badges.filter((badge) => Number.isInteger(badge) && badge >= 0 && badge < levels.length)
        : [],
    completedLevels: hasCurrentCurriculumProgress && Array.isArray(savedProgress?.completedLevels)
        ? [...new Set(savedProgress.completedLevels.filter((level) => Number.isInteger(level) && level >= 0 && level < levels.length))]
        : hasCurrentCurriculumProgress && Array.isArray(savedProgress?.badges)
            ? [...new Set(savedProgress.badges.filter((level) => Number.isInteger(level) && level >= 0 && level < levels.length))]
        : [],
    medals: hasCurrentCurriculumProgress && Array.isArray(savedProgress?.medals)
        ? savedProgress.medals.filter((medal) => Number.isInteger(medal.level) && medal.level >= 0 && medal.level < levels.length
            && ["bronze", "silver", "gold"].includes(medal.tier))
        : [],
    challengesCompleted: Number.isInteger(savedProgress?.challengesCompleted) && savedProgress.challengesCompleted >= 0
        ? savedProgress.challengesCompleted
        : 0,
    challengesAttempted: Number.isInteger(savedProgress?.challengesAttempted) && savedProgress.challengesAttempted >= 0
        ? savedProgress.challengesAttempted
        : 0,
    streak: Number.isInteger(savedProgress?.streak) && savedProgress.streak >= 0 ? savedProgress.streak : 0,
    bestStreak: Number.isInteger(savedProgress?.bestStreak) && savedProgress.bestStreak >= 0 ? savedProgress.bestStreak : 0,
    rewards: hasCurrentCurriculumProgress && Array.isArray(savedProgress?.rewards)
        ? [...new Set(savedProgress.rewards.filter((reward) => typeof reward === "string"))]
        : [],
    autoRead: savedProgress?.autoRead === true,
    selectedCompanion: companions.some((companion) => companion.id === savedProgress?.selectedCompanion)
        ? savedProgress.selectedCompanion
        : "poroto"
};

// Referencias a elementos HTML. Los identificadores (#...) deben existir en index.html.
const mapScreen = document.querySelector("#map-screen");
const gamesScreen = document.querySelector("#games-screen");
const puzzleScreen = document.querySelector("#puzzle-screen");
const gameScreen = document.querySelector("#game-screen");
const resultScreen = document.querySelector("#result-screen");
const levelGrid = document.querySelector("#level-grid");
const gamesGrid = document.querySelector("#games-grid");
const petsGrid = document.querySelector("#pets-grid");
const scoreDisplay = document.querySelector("#score-display");
const xpDisplay = document.querySelector("#xp-display");
const bestDisplay = document.querySelector("#best-display");
const progressLabel = document.querySelector("#progress-label");
const mapGuideArt = document.querySelector("#map-guide-art");
const mapGuideName = document.querySelector("#map-guide-name");
const mapGuideMessage = document.querySelector("#map-guide-message");
const companionExampleButton = document.querySelector("#companion-example");
const ownerOpenButton = document.querySelector("#owner-open");
const ownerPanel = document.querySelector("#owner-panel");
const ownerLockButton = document.querySelector("#owner-lock");
const ownerAnswerList = document.querySelector("#teacher-answer-list");
const ownerLoginDialog = document.querySelector("#owner-login");
const ownerLoginForm = document.querySelector("#owner-login-form");
const ownerPinInput = document.querySelector("#owner-pin");
const ownerLoginError = document.querySelector("#owner-login-error");
const ownerLoginCancelButton = document.querySelector("#owner-login-cancel");
const achievementStats = document.querySelector("#achievement-stats");
const gamesGuideArt = document.querySelector("#games-guide-art");
const gamesGuideName = document.querySelector("#games-guide-name");
const gamesGuideMessage = document.querySelector("#games-guide-message");
const lessonTitle = document.querySelector("#lesson-title");
const lessonIntro = document.querySelector("#lesson-intro");
const lessonExplanation = document.querySelector("#lesson-explanation");
const badgesGrid = document.querySelector("#badges-grid");
const rewardsGrid = document.querySelector("#rewards-grid");
const gamesLevelTag = document.querySelector("#games-level-tag");
const gameLevelTag = document.querySelector("#game-level-tag");
const gameXp = document.querySelector("#game-xp");
const gameInstruction = document.querySelector("#game-instruction");
const mistakesDisplay = document.querySelector("#mistakes-display");
const petAssistant = document.querySelector("#pet-assistant");
const assistantRoster = document.querySelector("#assistant-roster");
const assistantGreeting = document.querySelector("#assistant-greeting");
const assistantMessage = document.querySelector("#assistant-message");
const petActionButton = document.querySelector("#pet-action-button");
const sockActionButton = document.querySelector("#sock-action-button");
const speechPauseButton = document.querySelector("#speech-pause");
const autoReadToggle = document.querySelector("#auto-read");
const puzzleAutoReadToggle = document.querySelector("#puzzle-auto-read");
const questionCount = document.querySelector("#question-count");
const progressPercent = document.querySelector("#progress-percent");
const progressTrack = document.querySelector("#progress-track");
const progressBar = document.querySelector("#progress-bar");
const timerChip = document.querySelector("#timer-chip");
const timerDisplay = document.querySelector("#timer-display");
const questionTopic = document.querySelector("#question-topic");
const questionTitle = document.querySelector("#question-title");
const answerList = document.querySelector("#answer-list");
const questionChart = document.querySelector("#question-chart");
const questionChartSvg = document.querySelector("#question-chart-svg");
const questionChartCaption = document.querySelector("#question-chart-caption");
const feedback = document.querySelector("#feedback");
const feedbackTitle = document.querySelector("#feedback-title");
const feedbackExplanation = document.querySelector("#feedback-explanation");
const nextQuestionButton = document.querySelector("#next-question");
const resultEyebrow = document.querySelector("#result-eyebrow");
const resultTitle = document.querySelector("#result-title");
const resultDescription = document.querySelector("#result-description");
const resultIcon = document.querySelector("#result-icon");
const levelScore = document.querySelector("#level-score");
const continueButton = document.querySelector("#continue-adventure");
const rewardCard = document.querySelector("#reward-card");
const rewardTitle = document.querySelector("#reward-title");
const rewardMessage = document.querySelector("#reward-message");
const resultCrew = document.querySelector("#result-crew");
const resultCompanionMessage = document.querySelector("#result-companion-message");
const fairyDeliveryDialog = document.querySelector("#fairy-delivery-dialog");
const fairyDeliveryScene = document.querySelector("#fairy-delivery-scene");
const fairyMagicParticles = document.querySelector("#fairy-magic-particles");
const fairyDeliveryCharacter = document.querySelector("#fairy-delivery-character");
const fairyDeliveryMedal = document.querySelector("#fairy-delivery-medal");
const fairyDeliveryIcon = document.querySelector("#fairy-delivery-icon");
const fairyDeliveryTitle = document.querySelector("#fairy-delivery-title");
const fairyDeliveryMessage = document.querySelector("#fairy-delivery-message");
const fairyDeliveryContinue = document.querySelector("#fairy-delivery-continue");
const puzzleLevelTag = document.querySelector("#puzzle-level-tag");
const puzzleStageLabel = document.querySelector("#puzzle-stage-label");
const puzzleProgressTrack = document.querySelector("#puzzle-progress-track");
const puzzleProgressBar = document.querySelector("#puzzle-progress-bar");
const puzzleGuideArt = document.querySelector("#puzzle-guide-art");
const puzzleGuideName = document.querySelector("#puzzle-guide-name");
const puzzleGuideMessage = document.querySelector("#puzzle-guide-message");
const puzzleStageTopic = document.querySelector("#puzzle-stage-topic");
const puzzleChallengeTitle = document.querySelector("#puzzle-challenge-title");
const puzzleChallengePrompt = document.querySelector("#puzzle-challenge-prompt");
const puzzleChart = document.querySelector("#puzzle-chart");
const puzzleToolHelp = document.querySelector("#puzzle-tool-help");
const puzzleClassification = document.querySelector("#puzzle-classification");
const puzzleFeedback = document.querySelector("#puzzle-feedback");
const puzzleCheckButton = document.querySelector("#puzzle-check");
const puzzleNextButton = document.querySelector("#puzzle-next");
const puzzleResetButton = document.querySelector("#puzzle-reset");
const puzzleHintButton = document.querySelector("#puzzle-hint");
const puzzleReadButton = document.querySelector("#puzzle-read");
const puzzleSpeechPauseButton = document.querySelector("#puzzle-speech-pause");

// Estado de la partida que se está jugando ahora.
let currentLevelIndex = 0;
let currentQuestionIndex = 0;
let currentGameId = "quiz";
// Puntuación acumulada en esta visita y puntos obtenidos solo en el nivel actual.
let score = progress.score;
let pointsThisLevel = 0;
let mistakesThisLevel = 0;
let correctThisLevel = 0;
// Evita que una respuesta se pueda seleccionar varias veces.
let answered = false;
let timeRemaining = 90;
let timerInterval = null;
let fairyDeliveryQueue = [];
let fairyDeliveryTimers = [];
let fairyDeliveryActive = false;
let fairyCurrentDeliveryId = null;
let fairyPausedSpeedTimer = false;
let helpStage = 0;
let reviewedAfterAnswer = false;
let assistantMessageIndex = 0;
let levelBadgeAwardedThisRun = false;
let puzzleStageIndex = 0;
let puzzleTool = "move";
let puzzleGraph = null;
let puzzleSelectedAnswer = null;
let puzzleStageComplete = false;
let puzzleDragTarget = null;
let puzzleKeyboardTarget = null;
let speechUtterance = null;
let companionExampleVisible = false;

// Guarda progreso y récord en el navegador y refresca el número del récord.
function saveProgress() {
    progress.curriculumVersion = curriculumVersion;
    localStorage.setItem(storageKey, JSON.stringify(progress));
    bestDisplay.textContent = String(progress.bestScore);
}

// Muestra una sola vista (mapa, juego o resultado) y oculta las otras.
function showScreen(screen) {
    if (screen !== mapScreen) lockOwnerPanel();
    if (screen !== gameScreen && screen !== puzzleScreen) cancelSpeech();
    mapScreen.hidden = screen !== mapScreen;
    gamesScreen.hidden = screen !== gamesScreen;
    puzzleScreen.hidden = screen !== puzzleScreen;
    gameScreen.hidden = screen !== gameScreen;
    resultScreen.hidden = screen !== resultScreen;
}

function lockOwnerPanel() {
    ownerPanel.hidden = true;
    ownerAnswerList.replaceChildren();
    ownerOpenButton.disabled = false;
    ownerOpenButton.textContent = "Ver todas las respuestas (PIN)";
}

function appendTeacherAnswer(titleText, answerText, explanationText, modeText = "") {
    const card = document.createElement("article");
    card.className = "teacher-answer-card";
    const title = document.createElement("h4");
    title.textContent = titleText;
    const answer = document.createElement("p");
    answer.className = "teacher-answer-correct";
    answer.textContent = `Respuesta: ${answerText}`;
    const explanation = document.createElement("p");
    explanation.textContent = explanationText;
    card.append(title, answer, explanation);
    if (modeText) {
        const mode = document.createElement("p");
        mode.className = "teacher-answer-mode";
        mode.textContent = modeText;
        card.append(mode);
    }
    ownerAnswerList.append(card);
}

function renderTeacherAnswerKey() {
    const entries = [];
    levels.forEach((level, levelIndex) => {
        level.questions.forEach((question, questionIndex) => {
            const trueFalseAnswer = getTrueFalseStatement(question, questionIndex).correctAnswer === 0
                ? "Verdadero"
                : "Falso";
            entries.push({
                title: `Nivel ${levelIndex + 1} · ${level.title} · Desafío ${questionIndex + 1}: ${question.text}`,
                answer: question.answers[question.correct],
                explanation: question.explanation,
                mode: `En verdadero o falso: ${trueFalseAnswer}. En completar el resultado: ${question.answers[question.correct]}.`
            });
        });
    });

    ownerAnswerList.replaceChildren();
    entries.forEach((entry) => appendTeacherAnswer(entry.title, entry.answer, entry.explanation, entry.mode));
    appendTeacherAnswer("Nivel 7 · Continuidad · Puzzle gráfico", "Consulta las cuatro soluciones del puzzle a continuación.", "El nivel también incluye cuatro desafíos de edición de gráficas.");
    puzzleChallenges.forEach((challenge, index) => {
        appendTeacherAnswer(
            `Nivel 7 · Continuidad · Puzzle ${index + 1}: ${challenge.title}`,
            challenge.answer,
            challenge.prompt
        );
    });
}

function initializeFairyDelivery() {
    const hada = companions.find((companion) => companion.id === "hada");
    const artwork = createPetIllustration(hada, "fairy-delivery-art");
    artwork.querySelector("path")?.classList.add("fairy-delivery-wings");
    const wand = document.createElement("span");
    wand.className = "fairy-delivery-wand";
    wand.setAttribute("aria-hidden", "true");
    wand.textContent = "✧";
    fairyDeliveryCharacter.replaceChildren(artwork, wand);

    const particles = Array.from({ length: 18 }, (_, index) => {
        const particle = document.createElement("span");
        particle.className = "fairy-magic-particle";
        particle.textContent = index % 3 === 0 ? "✦" : "·";
        particle.style.setProperty("--particle-x", `${(index * 47 + 9) % 100}%`);
        particle.style.setProperty("--particle-y", `${(index * 31 + 13) % 100}%`);
        particle.style.setProperty("--particle-delay", `${(index % 6) * -0.42}s`);
        particle.style.setProperty("--particle-duration", `${2.4 + (index % 4) * 0.45}s`);
        fairyMagicParticles.append(particle);
        return particle;
    });
    fairyMagicParticles.replaceChildren(...particles);
}

function clearFairyDeliveryTimers() {
    fairyDeliveryTimers.forEach((timer) => window.clearTimeout(timer));
    fairyDeliveryTimers = [];
}

function setFairyDeliveryPhase(phase) {
    fairyDeliveryScene.dataset.phase = phase;
}

function revealFairyDelivery(delivery) {
    fairyDeliveryIcon.textContent = delivery.icon || "🏅";
    fairyDeliveryTitle.textContent = delivery.title;
    fairyDeliveryMessage.textContent = delivery.description
        ? `¡Felicidades! ¡Esta recompensa es tuya! ${delivery.description}`
        : "¡Felicidades! ¡Esta recompensa es tuya!";
    fairyDeliveryContinue.disabled = true;
    fairyDeliveryMedal.setAttribute("aria-label", delivery.title);
    setFairyDeliveryPhase("ready");
    void fairyDeliveryScene.offsetWidth;

    if (!fairyDeliveryDialog.open) fairyDeliveryDialog.showModal();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
        setFairyDeliveryPhase("complete");
        fairyDeliveryContinue.disabled = false;
        return;
    }

    setFairyDeliveryPhase("flight");
    [
        [1250, "celebrate"],
        [2050, "wand"],
        [2650, "reveal"],
        [3550, "deliver"],
        [4450, "complete"]
    ].forEach(([delay, phase]) => {
        fairyDeliveryTimers.push(window.setTimeout(() => {
            setFairyDeliveryPhase(phase);
            if (phase === "complete") fairyDeliveryContinue.disabled = false;
        }, delay));
    });
}

function finishFairyDeliveries() {
    clearFairyDeliveryTimers();
    if (fairyDeliveryQueue.length) {
        showNextFairyDelivery();
        return;
    }

    fairyDeliveryActive = false;
    fairyCurrentDeliveryId = null;
    if (fairyDeliveryDialog.open) fairyDeliveryDialog.close();
    if (fairyPausedSpeedTimer && !gameScreen.hidden && currentGameId === "speed") {
        fairyPausedSpeedTimer = false;
        startSpeedTimer();
    }
}

function queueFairyDeliveries(deliveries) {
    if (!deliveries.length) return;
    const existingIds = new Set([
        ...fairyDeliveryQueue.map((delivery) => delivery.id),
        fairyCurrentDeliveryId
    ]);
    const newDeliveries = deliveries.filter((delivery) => {
        if (existingIds.has(delivery.id)) return false;
        existingIds.add(delivery.id);
        return true;
    });
    if (!newDeliveries.length) return;

    if (!fairyDeliveryActive && currentGameId === "speed" && !gameScreen.hidden) {
        clearInterval(timerInterval);
        fairyPausedSpeedTimer = true;
    }
    fairyDeliveryQueue.push(...newDeliveries);
    if (fairyDeliveryActive) return;

    fairyDeliveryActive = true;
    showNextFairyDelivery();
}

function showNextFairyDelivery() {
    if (!fairyDeliveryQueue.length) {
        finishFairyDeliveries();
        return;
    }
    const delivery = fairyDeliveryQueue.shift();
    fairyCurrentDeliveryId = delivery.id;
    revealFairyDelivery(delivery);
}

function startSpeedTimer() {
    clearInterval(timerInterval);
    if (timeRemaining <= 0) {
        finishLevel(true);
        return;
    }
    timerDisplay.textContent = `${timeRemaining}s`;
    timerInterval = setInterval(() => {
        timeRemaining -= 1;
        timerDisplay.textContent = `${timeRemaining}s`;
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            finishLevel(true);
        }
    }, 1000);
}

// Crea una tarjeta segura para el mapa y la habilita solo si el nivel está desbloqueado.
function createLevelCard(level, index) {
    const unlocked = index <= progress.unlockedLevel;
    const card = document.createElement(unlocked ? "button" : "div");
    card.className = `level-card${unlocked ? "" : " locked"}`;
    card.dataset.tone = level.tone;

    if (unlocked) {
        card.type = "button";
        card.addEventListener("click", () => showLevelGames(index));
    } else {
        card.setAttribute("aria-label", `Nivel ${index + 1}: ${level.title}, bloqueado`);
        card.setAttribute("aria-disabled", "true");
    }

    const number = document.createElement("span");
    number.className = "level-number";
    number.textContent = String(index + 1).padStart(2, "0");

    const icon = document.createElement("span");
    icon.className = "level-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = level.icon;

    const title = document.createElement("h3");
    title.textContent = level.title;

    const subtitle = document.createElement("p");
    subtitle.textContent = level.subtitle;

    const difficulty = document.createElement("span");
    difficulty.className = "level-difficulty";
    difficulty.textContent = "DIFICULTAD MEDIA";

    const status = document.createElement("span");
    status.className = "level-status";
    const completed = progress.completedLevels.includes(index);
    status.textContent = !unlocked ? "🔒 BLOQUEADO" : completed ? "✓ COMPLETADO" : "JUGAR NIVEL →";

    card.append(number, icon, title, subtitle, difficulty, status);
    return card;
}

// Dibuja de nuevo el mapa y muestra el nivel disponible o el final de la aventura.
function renderMap() {
    levelGrid.replaceChildren(...levels.map(createLevelCard));
    renderPets();
    renderBadges();
    progressLabel.textContent = progress.completed
        ? "¡Aventura completada!"
        : `Nivel ${progress.unlockedLevel + 1} disponible`;
    const selectedCompanion = getSelectedCompanion();
    mapGuideArt.replaceChildren(createPetIllustration(selectedCompanion, "map-guide-character"));
    mapGuideName.textContent = selectedCompanion.name;
    mapGuideMessage.textContent = companionProfiles[selectedCompanion.id].description;
    companionExampleVisible = false;
    companionExampleButton.textContent = "Ver ejemplo de interacción";
    bestDisplay.textContent = String(progress.bestScore);
    xpDisplay.textContent = String(progress.experience);
}

function getSelectedCompanion() {
    return companions.find((companion) => companion.id === progress.selectedCompanion) || companions[0];
}

function getCompanionGreeting(companion, levelIndex = currentLevelIndex) {
    const messages = {
        poroto: progress.completed
            ? "¡Lo lograste! Estoy muy orgulloso de todo lo que aprendiste."
            : progress.unlockedLevel > 0
                ? `¡Nivel ${progress.unlockedLevel + 1} desbloqueado! Te acompaño en esta nueva aventura.`
                : "¡Hola, explorador! Elige un nivel y recorreremos esta aventura juntos.",
        hamster: `¡Vamos con ${levels[levelIndex].title}! Si te atascas, te daré pistas paso a paso.`,
        hada: "¡Qué emoción! Cada desafío puede traer una nueva insignia y mucha magia.",
        media: "¡Hola! Estoy listo para leer las preguntas y acompañarte en cada desafío."
    };
    return messages[companion.id];
}

function applyCompanionTheme(animate = false) {
    document.body.dataset.theme = progress.selectedCompanion;
    if (!animate) return;
    document.body.classList.remove("theme-change");
    requestAnimationFrame(() => {
        document.body.classList.add("theme-change");
    });
}

function selectCompanion(companionId) {
    if (!companions.some((companion) => companion.id === companionId)) return;
    progress.selectedCompanion = companionId;
    applyCompanionTheme(true);
    saveProgress();
    renderPets();
    renderAssistantRoster();
    const companion = getSelectedCompanion();
    mapGuideArt.replaceChildren(createPetIllustration(companion, "map-guide-character"));
    mapGuideName.textContent = companion.name;
    mapGuideMessage.textContent = companionProfiles[companion.id].description;
    companionExampleVisible = false;
    companionExampleButton.textContent = "Ver ejemplo de interacción";
    gamesGuideArt.replaceChildren(createPetIllustration(companion, "map-guide-character"));
    gamesGuideName.textContent = companion.name;
    gamesGuideMessage.textContent = getCompanionGreeting(companion);
    assistantGreeting.textContent = `${companion.name} · ${companion.role}`;
    assistantMessage.textContent = `${companion.name}: ${companionProfiles[companion.id].description}`;
    assistantMessage.dataset.mood = "celebrate";
}

function renderPets() {
    petsGrid.replaceChildren(...companions.map((companion) => {
        const selected = companion.id === progress.selectedCompanion;
        const card = document.createElement("button");
        card.type = "button";
        card.className = `pet-card${selected ? " selected" : ""}`;
        card.dataset.pet = companion.id;
        card.setAttribute("aria-pressed", String(selected));
        card.setAttribute("aria-label", `${companion.name}, ${companion.role}${selected ? ", seleccionado" : ", seleccionar"}`);
        card.addEventListener("click", () => selectCompanion(companion.id));
        const name = document.createElement("span");
        name.className = "pet-name";
        name.textContent = companion.name;
        const role = document.createElement("span");
        role.className = "pet-role";
        role.textContent = companion.role;
        const ability = document.createElement("span");
        ability.className = "pet-ability";
        ability.textContent = companionProfiles[companion.id].description;
        const selection = document.createElement("span");
        selection.className = "pet-selection";
        selection.textContent = selected ? "✓ Estilo seleccionado" : "Elegir estilo";
        card.append(createPetIllustration(companion, "pet-art"), name, role, ability, selection);
        return card;
    }));
}

function renderBadges() {
    badgesGrid.replaceChildren(...levels.map((level, index) => {
        const earned = progress.badges.includes(index);
        const badge = document.createElement("div");
        badge.className = `badge-item${earned ? " earned" : ""}`;
        badge.setAttribute("aria-label", earned ? `Insignia conseguida: ${level.title}` : `Insignia bloqueada: ${level.title}`);
        const icon = document.createElement("span");
        icon.className = "badge-icon";
        icon.setAttribute("aria-hidden", "true");
        icon.textContent = earned ? "🏅" : "🔒";
        const label = document.createElement("span");
        label.textContent = level.title;
        const medal = progress.medals.find((item) => item.level === index);
        const medalLabel = document.createElement("span");
        medalLabel.className = "medal-label";
        medalLabel.textContent = medal
            ? `${medal.tier === "gold" ? "🥇 Oro" : medal.tier === "silver" ? "🥈 Plata" : "🥉 Bronce"}`
            : earned ? "Completado" : "Pendiente";
        badge.append(icon, label, medalLabel);
        return badge;
    }));
    rewardsGrid.replaceChildren(...rewardDefinitions.map((reward) => {
        const earned = progress.rewards.includes(reward.id);
        const card = document.createElement("div");
        card.className = `badge-item reward-item${earned ? " earned" : ""}`;
        card.setAttribute("aria-label", `${reward.title}: ${earned ? "obtenida" : reward.description}`);
        const icon = document.createElement("span");
        icon.className = "badge-icon";
        icon.textContent = earned ? reward.icon : "🔒";
        const label = document.createElement("span");
        label.textContent = reward.title;
        const description = document.createElement("span");
        description.className = "reward-description";
        description.textContent = earned ? "Desbloqueada" : reward.description;
        card.append(icon, label, description);
        return card;
    }));
    achievementStats.replaceChildren();
    [
        `Niveles completados: ${progress.completedLevels.length}/${levels.length}`,
        `Medallas obtenidas: ${progress.medals.length}`,
        `Puntuación acumulada: ${progress.score}`,
        `Desafíos superados: ${progress.challengesCompleted}`,
        `Mejor racha: ${progress.bestStreak}`,
        `Recompensas: ${progress.rewards.length}/${rewardDefinitions.length}`
    ].forEach((text) => {
        const stat = document.createElement("span");
        stat.className = "achievement-stat";
        stat.textContent = text;
        achievementStats.append(stat);
    });
}

function toggleCompanionExample() {
    const companion = getSelectedCompanion();
    companionExampleVisible = !companionExampleVisible;
    mapGuideMessage.textContent = companionExampleVisible
        ? companionProfiles[companion.id].example
        : companionProfiles[companion.id].description;
    companionExampleButton.textContent = companionExampleVisible
        ? "Volver a la función del personaje"
        : "Ver ejemplo de interacción";
}

function renderAssistantRoster() {
    assistantRoster.replaceChildren(...companions.map((companion) => {
        const selected = companion.id === progress.selectedCompanion;
        const card = document.createElement("button");
        card.type = "button";
        card.className = `assistant-character-card${selected ? " selected-theme" : ""}`;
        card.dataset.character = companion.id;
        card.setAttribute("aria-pressed", String(selected));
        card.setAttribute("aria-label", `${companion.name}, ${companion.role}${selected ? ", estilo seleccionado" : ", seleccionar estilo"}`);
        card.addEventListener("click", () => selectCompanion(companion.id));
        const art = createPetIllustration(companion, "assistant-character-art");
        const name = document.createElement("strong");
        name.textContent = companion.name;
        const role = document.createElement("span");
        role.textContent = companion.role;
        card.append(art, name, role);
        return card;
    }));
}

function renderResultCrew() {
    resultCrew.replaceChildren(...companions.map((companion) => {
        const character = document.createElement("div");
        character.className = "result-character celebrating";
        character.append(createPetIllustration(companion, "result-character-art"));
        const name = document.createElement("span");
        name.textContent = companion.name;
        character.append(name);
        return character;
    }));
}

function speakAs(characterId, message, mood = "talk") {
    const character = companions.find((item) => item.id === characterId);
    if (!character) return;
    petAssistant.dataset.speaker = characterId;
    assistantRoster.querySelectorAll(".assistant-character-card").forEach((card) => {
        card.classList.toggle("speaking", card.dataset.character === characterId);
        card.classList.toggle("celebrating", mood === "celebrate" && card.dataset.character === characterId);
        card.classList.toggle("surprised", mood === "surprised" && card.dataset.character === characterId);
    });
    assistantGreeting.textContent = `${character.name} · ${character.role}`;
    assistantMessage.textContent = message;
    assistantMessage.dataset.mood = mood;
}

const topicExamples = {
    "Funciones": "Por ejemplo, si f(x) = 2x + 1 y x = 3, entonces la salida es f(3) = 7.",
    "Ecuaciones": "Por ejemplo, en 2x = 8 dividimos ambos lados entre 2 y obtenemos x = 4.",
    "Dominio": "Por ejemplo, en 1/(x − 3) se excluye x = 3 porque anula el denominador.",
    "Recorrido": "Por ejemplo, x² ≥ 0 para todo real, así que el recorrido de x² es [0, +∞).",
    "Raíces": "Por ejemplo, x − 5 = 0 tiene raíz x = 5, donde la gráfica cruza el eje X.",
    "Límites": "Por ejemplo, cuando x se acerca a 2, el polinomio x + 3 se acerca a 5.",
    "Continuidad": "Por ejemplo, f(x) = x es continua en 0 porque el límite y f(0) valen ambos cero.",
    "Límites infinitos": "Por ejemplo, 1/x crece sin cota cuando x se acerca a cero por la derecha.",
    "Derivadas": "Por ejemplo, la derivada de x² es 2x; en x = 3, su pendiente es 6.",
    "Extremos relativos": "Por ejemplo, f(x) = x² baja hasta x = 0 y luego sube; allí tiene un mínimo."
};

function getSecondHint(question) {
    const level = levels[currentLevelIndex];
    return `Fíjate en esta pista: ${question.hint} Ejemplo del tema: ${topicExamples[level.title]}`;
}

function cancelSpeech() {
    if (!("speechSynthesis" in window)) return;
    speechUtterance = null;
    window.speechSynthesis.cancel();
    speechPauseButton.disabled = true;
    puzzleSpeechPauseButton.disabled = true;
    speechPauseButton.textContent = "Pausar lectura";
    puzzleSpeechPauseButton.textContent = "Pausar lectura";
}

function speakText(text) {
    if (!("speechSynthesis" in window) || !text.trim()) return;
    cancelSpeech();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-MX";
    utterance.rate = 0.9;
    utterance.pitch = 1;
    const spanishVoice = window.speechSynthesis.getVoices()
        .find((voice) => voice.lang.toLowerCase().startsWith("es"));
    if (spanishVoice) utterance.voice = spanishVoice;
    speechUtterance = utterance;
    utterance.onstart = () => {
        if (speechUtterance !== utterance) return;
        speechPauseButton.disabled = false;
        puzzleSpeechPauseButton.disabled = false;
    };
    utterance.onend = () => {
        if (speechUtterance !== utterance) return;
        speechPauseButton.disabled = true;
        puzzleSpeechPauseButton.disabled = true;
        speechPauseButton.textContent = "Pausar lectura";
        puzzleSpeechPauseButton.textContent = "Pausar lectura";
        speechUtterance = null;
    };
    utterance.onerror = (event) => {
        if (speechUtterance !== utterance) return;
        if (event.error !== "canceled" && event.error !== "interrupted") {
            speakAs("media", "No se pudo reproducir la lectura. Puedes intentarlo otra vez.", "surprised");
        }
        speechPauseButton.disabled = true;
        puzzleSpeechPauseButton.disabled = true;
        speechPauseButton.textContent = "Pausar lectura";
        puzzleSpeechPauseButton.textContent = "Pausar lectura";
        speechUtterance = null;
    };
    speechPauseButton.disabled = false;
    puzzleSpeechPauseButton.disabled = false;
    window.speechSynthesis.speak(utterance);
}

function toggleSpeechPause() {
    if (!("speechSynthesis" in window) || !speechUtterance) return;
    if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        speechPauseButton.textContent = "Pausar lectura";
        puzzleSpeechPauseButton.textContent = "Pausar lectura";
    } else {
        window.speechSynthesis.pause();
        speechPauseButton.textContent = "Continuar lectura";
        puzzleSpeechPauseButton.textContent = "Continuar lectura";
    }
}

function readCurrentQuestion() {
    const question = levels[currentLevelIndex].questions[currentQuestionIndex];
    const choices = [...answerList.querySelectorAll(".answer-option")]
        .map((option, index) => `Opción ${index + 1}: ${option.textContent.replace(/^[A-D]\s*/, "")}`);
    const prompt = [
        question.topic,
        gameInstruction.hidden ? "" : gameInstruction.textContent,
        question.text,
        questionChart.hidden ? "" : questionChartCaption.textContent,
        ...choices
    ].filter(Boolean).join(". ");
    speakAs("media", "Leo la consigna, las instrucciones y las opciones de respuesta.", "talk");
    speakText(prompt);
}

function readCurrentPuzzleChallenge() {
    const challenge = puzzleChallenges[puzzleStageIndex];
    setPuzzleDialogue("media", `¡Claro! Leo la consigna: ${challenge.title}. ${challenge.prompt}`);
    const tools = "Herramientas: mover puntos, abrir hueco, añadir punto, crear salto y quitar punto.";
    const choices = puzzleClassification.hidden ? "" : "Puedes elegir Continua o Discontinua.";
    speakText(`${challenge.topic}. ${challenge.title}. ${challenge.prompt}. ${tools} ${choices} ${puzzleToolHelp.textContent}`);
}

function setAutoRead(enabled) {
    progress.autoRead = enabled;
    autoReadToggle.checked = enabled;
    puzzleAutoReadToggle.checked = enabled;
    saveProgress();
    if (!enabled) {
        cancelSpeech();
    } else if (!gameScreen.hidden) {
        readCurrentQuestion();
    } else if (!puzzleScreen.hidden) {
        readCurrentPuzzleChallenge();
    }
}

function registerChallengeResult(isCorrect, countAttempt = true) {
    if (countAttempt) progress.challengesAttempted += 1;
    if (isCorrect) {
        progress.challengesCompleted += 1;
        progress.streak += 1;
        progress.bestStreak = Math.max(progress.bestStreak, progress.streak);
    } else {
        progress.streak = 0;
    }
    return unlockEligibleRewards();
}

function unlockEligibleRewards(perfectLevel = false) {
    const earned = [];
    const conditions = {
        "streak-3": progress.streak >= 3,
        "streak-5": progress.streak >= 5,
        "scholar-30": progress.challengesCompleted >= 30,
        "perfect-level": perfectLevel,
        "all-levels": progress.completedLevels.length === levels.length
    };
    rewardDefinitions.forEach((reward) => {
        if (conditions[reward.id] && !progress.rewards.includes(reward.id)) {
            progress.rewards.push(reward.id);
            earned.push(reward);
        }
    });
    return earned;
}

function completeCurrentLevel() {
    const wasCompleted = progress.completedLevels.includes(currentLevelIndex);
    if (!wasCompleted) {
        progress.completedLevels.push(currentLevelIndex);
        if (!progress.badges.includes(currentLevelIndex)) progress.badges.push(currentLevelIndex);
        progress.experience += 50;
        levelBadgeAwardedThisRun = true;
    }
    progress.unlockedLevel = Math.max(progress.unlockedLevel, Math.min(currentLevelIndex + 1, levels.length - 1));
    if (currentLevelIndex === levels.length - 1) progress.completed = true;

    const denominator = currentGameId === "puzzle" ? puzzleChallenges.length : levels[currentLevelIndex].questions.length;
    const accuracy = denominator ? Math.max(0, (denominator - mistakesThisLevel) / denominator) : 0;
    const tier = accuracy === 1 ? "gold" : accuracy >= 2 / 3 ? "silver" : "bronze";
    const currentMedal = progress.medals.find((medal) => medal.level === currentLevelIndex);
    const medalRank = { bronze: 1, silver: 2, gold: 3 };
    let medalAwarded = false;
    if (!currentMedal) {
        progress.medals.push({ level: currentLevelIndex, tier });
        medalAwarded = true;
    } else if (medalRank[tier] > medalRank[currentMedal.tier]) {
        currentMedal.tier = tier;
        medalAwarded = true;
    }
    const newlyEarned = unlockEligibleRewards(mistakesThisLevel === 0);
    saveProgress();
    renderMap();
    return { tier: currentMedal?.tier || tier, newlyEarned, wasCompleted, medalAwarded };
}

function nextAssistantMessage(messages) {
    const message = messages[assistantMessageIndex % messages.length];
    assistantMessageIndex += 1;
    return message;
}

function mapGreetingForLevel(index) {
    const messages = [
        `¡El mundo de ${levels[index].title} te espera! Vamos paso a paso.`,
        `¡Qué bueno que estés aquí! En ${levels[index].title} aprenderemos jugando.`,
        `¡A la aventura! Pinchuskin ya está pensando en las pistas para ${levels[index].title}.`
    ];
    return nextAssistantMessage(messages);
}

function showLevelGames(index) {
    if (index > progress.unlockedLevel) {
        return;
    }

    currentLevelIndex = index;
    gamesLevelTag.textContent = `Nivel ${index + 1} · ${levels[index].title} · Dificultad media`;
    lessonTitle.textContent = `Nivel ${index + 1}: ${levels[index].title}`;
    lessonIntro.textContent = levels[index].intro;
    lessonExplanation.textContent = levels[index].lesson;
    const guide = companions.find((companion) => companion.id === "poroto");
    gamesGuideArt.replaceChildren(createPetIllustration(guide, "map-guide-character"));
    gamesGuideName.textContent = guide.name;
    gamesGuideMessage.textContent = `${mapGreetingForLevel(index)} ${levels[index].intro}`;
    const availableGames = index === 6 ? games : games.filter((game) => game.id !== "puzzle");
    gamesGrid.replaceChildren(...availableGames.map((game) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "game-choice";
        card.addEventListener("click", () => {
            if (game.id === "puzzle") {
                startPuzzle(index);
                return;
            }
            startLevel(index, game.id);
        });

        const icon = document.createElement("span");
        icon.className = "game-choice-icon";
        icon.setAttribute("aria-hidden", "true");
        icon.textContent = game.icon;
        const title = document.createElement("h3");
        title.textContent = game.title;
        const description = document.createElement("p");
        description.textContent = game.description;
        if (game.id === "speed") {
            description.textContent = `${game.description} Tienes 90 segundos para las tres preguntas.`;
        }
        const action = document.createElement("span");
        action.className = "level-status";
        action.textContent = "JUGAR →";
        card.append(icon, title, description, action);
        return card;
    }));
    showScreen(gamesScreen);
}

// Actualiza el puntaje de la partida actual en el encabezado.
function updateScore() {
    scoreDisplay.textContent = String(score);
}

// Actualiza el porcentaje, la barra y su valor accesible para lectores de pantalla.
function updateQuestionProgress(completedQuestions) {
    const percent = Math.round((completedQuestions / levels[currentLevelIndex].questions.length) * 100);
    progressPercent.textContent = `${percent}%`;
    progressBar.style.width = `${percent}%`;
    progressTrack.setAttribute("aria-valuenow", String(percent));
}

const mathGraphFunctions = {
    descendingLine: (x) => 1 - 2 * x,
    reciprocalTwo: (x) => 1 / (x - 2),
    parabolaUpOne: (x) => x * x + 1,
    parabolaRoots: (x) => x * x - 9,
    lineRoot: (x) => x - 2,
    lineHole: (x) => x + 1,
    tangentSquare: (x) => x * x,
    parabolaDownFour: (x) => x * x - 4,
    parabolaMax: (x) => -((x - 1) ** 2) + 4
};

function createMathSvgElement(tag, attributes = {}) {
    const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
    Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, String(value)));
    return element;
}

function drawMathGraph(graph) {
    const bounds = { left: 44, right: 498, top: 24, bottom: 252 };
    const xMin = -4;
    const xMax = 4;
    const yMin = -5;
    const yMax = 6;
    const toX = (x) => bounds.left + ((x - xMin) / (xMax - xMin)) * (bounds.right - bounds.left);
    const toY = (y) => bounds.bottom - ((y - yMin) / (yMax - yMin)) * (bounds.bottom - bounds.top);
    const fn = mathGraphFunctions[graph.type];
    if (!fn) {
        questionChart.hidden = true;
        throw new Error(`Tipo de gráfica matemática desconocido: ${graph.type}`);
    }

    questionChartSvg.replaceChildren();
    questionChartSvg.setAttribute("aria-label", graph.caption);
    const title = createMathSvgElement("title");
    title.textContent = graph.caption;
    const description = createMathSvgElement("desc");
    description.textContent = "Gráfica cartesiana con ejes, cuadrícula y curva de la función indicada.";
    questionChartSvg.append(title, description);

    for (let x = -4; x <= 4; x += 1) {
        const px = toX(x);
        questionChartSvg.append(createMathSvgElement("line", {
            x1: px, y1: bounds.top, x2: px, y2: bounds.bottom, class: "math-grid-line"
        }));
        const label = createMathSvgElement("text", {
            x: px, y: toY(0) + 17, class: "math-axis-number", "text-anchor": "middle"
        });
        label.textContent = String(x);
        questionChartSvg.append(label);
    }
    for (let y = -4; y <= 6; y += 1) {
        const py = toY(y);
        questionChartSvg.append(createMathSvgElement("line", {
            x1: bounds.left, y1: py, x2: bounds.right, y2: py, class: "math-grid-line"
        }));
        if (y !== 0) {
            const label = createMathSvgElement("text", {
                x: toX(0) - 9, y: py + 4, class: "math-axis-number", "text-anchor": "end"
            });
            label.textContent = String(y);
            questionChartSvg.append(label);
        }
    }
    questionChartSvg.append(
        createMathSvgElement("line", { x1: bounds.left, y1: toY(0), x2: bounds.right, y2: toY(0), class: "math-axis-line" }),
        createMathSvgElement("line", { x1: toX(0), y1: bounds.top, x2: toX(0), y2: bounds.bottom, class: "math-axis-line" })
    );

    (graph.asymptotes || []).forEach((x) => {
        questionChartSvg.append(createMathSvgElement("line", {
            x1: toX(x), y1: bounds.top, x2: toX(x), y2: bounds.bottom, class: "math-asymptote"
        }));
    });

    let pathData = "";
    let previousPointAvailable = false;
    const sampleCount = 480;
    for (let index = 0; index <= sampleCount; index += 1) {
        const x = xMin + ((xMax - xMin) * index) / sampleCount;
        const y = fn(x);
        const nearAsymptote = (graph.asymptotes || []).some((asymptote) => Math.abs(x - asymptote) < 0.1);
        if (!Number.isFinite(y) || y < yMin || y > yMax || nearAsymptote) {
            previousPointAvailable = false;
            continue;
        }
        pathData += `${previousPointAvailable ? "L" : "M"}${toX(x).toFixed(2)},${toY(y).toFixed(2)} `;
        previousPointAvailable = true;
    }
    questionChartSvg.append(createMathSvgElement("path", { d: pathData.trim(), class: "math-function-line" }));

    if (graph.tangent) {
        const { x, y, slope } = graph.tangent;
        const atLeft = y + slope * (xMin - x);
        const atRight = y + slope * (xMax - x);
        questionChartSvg.append(createMathSvgElement("line", {
            x1: toX(xMin), y1: toY(atLeft), x2: toX(xMax), y2: toY(atRight), class: "math-tangent-line"
        }));
    }
    (graph.roots || []).forEach((x) => {
        questionChartSvg.append(createMathSvgElement("circle", {
            cx: toX(x), cy: toY(0), r: 5, class: "math-highlight-point"
        }));
    });
    (graph.extrema || []).forEach(({ x, y }) => {
        questionChartSvg.append(createMathSvgElement("circle", {
            cx: toX(x), cy: toY(y), r: 5, class: "math-highlight-point"
        }));
    });
    (graph.holes || []).forEach((x) => {
        questionChartSvg.append(createMathSvgElement("circle", {
            cx: toX(x), cy: toY(fn(x)), r: 6, class: "math-open-point"
        }));
    });
    questionChartCaption.textContent = graph.caption;
    questionChart.hidden = false;
}

function getTrueFalseStatement(question, questionIndex) {
    const statementIsCorrect = questionIndex % 2 === 0;
    const falseOptionIndex = question.correct === 0 ? 1 : 0;
    const statement = question.answers[statementIsCorrect ? question.correct : falseOptionIndex];
    return {
        statement,
        correctAnswer: statementIsCorrect ? 0 : 1
    };
}

// Coloca en pantalla la pregunta actual y crea sus botones de respuesta.
function renderQuestion() {
    cancelSpeech();
    const level = levels[currentLevelIndex];
    const question = level.questions[currentQuestionIndex];
    const isTrueFalse = currentGameId === "true-false";
    const isFill = currentGameId === "fill";
    answered = false;
    helpStage = 0;
    reviewedAfterAnswer = false;
    const activeGame = games.find((game) => game.id === currentGameId);
    gameLevelTag.textContent = `Nivel ${currentLevelIndex + 1} · ${level.title} · Dificultad media · ${activeGame.title}`;
    questionCount.textContent = `Pregunta ${currentQuestionIndex + 1} de ${level.questions.length}`;
    gameXp.textContent = String(progress.experience);
    const guideMessage = currentQuestionIndex === 0
        ? nextAssistantMessage([
            `¡Bienvenido al nivel ${currentLevelIndex + 1}, ${level.title}! ${level.intro} ${level.lesson} Primer desafío: ${question.text}`,
            `¡Empezamos ${level.title}! Hoy aprenderemos juntos. ${level.lesson} Lee este reto: ${question.text}`
        ])
        : nextAssistantMessage([
            `Desafío ${currentQuestionIndex + 1}: ${question.topic}. ${question.text}`,
            `Vamos con el siguiente reto de ${level.title}: ${question.text}`
        ]);
    speakAs("poroto", guideMessage, "talk");
    petActionButton.disabled = false;
    petActionButton.textContent = "Pedir pista a Pinchuskin";
    sockActionButton.disabled = !("speechSynthesis" in window);
    autoReadToggle.checked = progress.autoRead;
    autoReadToggle.disabled = !("speechSynthesis" in window);
    questionTopic.textContent = question.topic;
    questionTitle.textContent = question.text;
    gameInstruction.hidden = !isTrueFalse && !isFill;
    if (isTrueFalse) {
        const { statement } = getTrueFalseStatement(question, currentQuestionIndex);
        gameInstruction.textContent = `Poroto propone: «${statement}». ¿Es correcta la afirmación?`;
    } else if (isFill) {
        gameInstruction.textContent = "Escribe una respuesta exacta. Puedes usar números, fracciones o expresiones.";
    }
    if (question.graph) {
        drawMathGraph(question.graph);
    } else {
        questionChart.hidden = true;
    }
    answerList.replaceChildren();
    feedback.hidden = true;
    feedback.classList.remove("is-correct", "is-incorrect");
    nextQuestionButton.hidden = false;
    updateQuestionProgress(currentQuestionIndex);

    if (isFill) {
        const form = document.createElement("form");
        form.className = "answer-entry";
        const input = document.createElement("input");
        input.type = "text";
        input.autocomplete = "off";
        input.setAttribute("aria-label", "Escribe la respuesta matemática");
        input.required = true;
        input.placeholder = "Tu respuesta exacta";
        input.addEventListener("input", () => input.setCustomValidity(""));
        const submit = document.createElement("button");
        submit.type = "submit";
        submit.className = "primary-button";
        submit.textContent = "Comprobar respuesta";
        form.append(input, submit);
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            if (!input.value.trim()) {
                input.setCustomValidity("Escribe una respuesta antes de comprobar.");
                input.reportValidity();
                return;
            }
            input.setCustomValidity("");
            selectAnswer(0);
        });
        answerList.append(form);
        if (progress.autoRead) readCurrentQuestion();
        return;
    }

    const answerChoices = isTrueFalse ? ["Verdadero", "Falso"] : question.answers;
    answerChoices.forEach((answer, index) => {
        const option = document.createElement("button");
        option.type = "button";
        option.className = "answer-option";
        option.setAttribute("aria-label", `Opción ${String.fromCharCode(65 + index)}: ${answer}`);

        const letter = document.createElement("span");
        letter.className = "answer-letter";
        letter.setAttribute("aria-hidden", "true");
        letter.textContent = String.fromCharCode(65 + index);

        const answerText = document.createElement("span");
        answerText.textContent = answer;

        option.append(letter, answerText);
        option.addEventListener("click", () => selectAnswer(index));
        answerList.append(option);
    });
    if (progress.autoRead) readCurrentQuestion();
}

function askPinchuskin() {
    const question = levels[currentLevelIndex].questions[currentQuestionIndex];
    if (answered) {
        if (reviewedAfterAnswer) return;
        speakAs("hamster", `La respuesta se revisa paso a paso: ${question.explanation}`);
        reviewedAfterAnswer = true;
        petActionButton.disabled = true;
        return;
    }

    if (helpStage >= 2) return;
    const message = helpStage === 0
        ? `Pista 1: ${question.hint}`
        : `Pista 2 y ejemplo: ${getSecondHint(question)} Después de tu intento, te explico el procedimiento completo.`;
    speakAs("hamster", message, "talk");
    helpStage = Math.min(helpStage + 1, 2);
    petActionButton.textContent = helpStage === 1
        ? "Pedir segunda pista a Pinchuskin"
        : "Pinchuskin: explicación tras responder";
    petActionButton.disabled = false;
}

function askMediaToRead() {
    readCurrentQuestion();
}

// Inicia un nivel desbloqueado y reinicia el contador de preguntas y puntos del nivel.
function startLevel(index, gameId = currentGameId) {
    if (index > progress.unlockedLevel) {
        return;
    }

    currentLevelIndex = index;
    currentQuestionIndex = 0;
    currentGameId = gameId;
    pointsThisLevel = 0;
    mistakesThisLevel = 0;
    correctThisLevel = 0;
    mistakesDisplay.textContent = "0";
    levelBadgeAwardedThisRun = false;
    clearInterval(timerInterval);
    timerChip.hidden = currentGameId !== "speed";
    if (currentGameId === "speed") {
        timeRemaining = 90;
        startSpeedTimer();
    }
    showScreen(gameScreen);
    renderQuestion();
    questionTitle.focus?.();
}

// Comprueba la respuesta, marca las opciones, suma puntos y muestra la explicación.
// Para cambiar la recompensa, ajusta los dos "100" de este bloque y el texto "+100 puntos".
function selectAnswer(selectedIndex) {
    if (answered) {
        return;
    }

    answered = true;
    cancelSpeech();
    feedback.classList.remove("is-correct", "is-incorrect");
    const question = levels[currentLevelIndex].questions[currentQuestionIndex];
    const isTrueFalse = currentGameId === "true-false";
    const isFill = currentGameId === "fill";
    const correctAnswer = isTrueFalse
        ? getTrueFalseStatement(question, currentQuestionIndex).correctAnswer
        : question.correct;
    const fillInput = isFill ? answerList.querySelector("input") : null;
    const normalizeAnswer = (value) => value.trim().replace(/[−–]/g, "-").replace(/\s+/g, "").toLowerCase();
    const isCorrect = isFill
        ? normalizeAnswer(fillInput.value) === normalizeAnswer(question.answers[question.correct])
        : selectedIndex === correctAnswer;
    const correctResponseText = isTrueFalse
        ? (correctAnswer === 0 ? "Verdadero" : "Falso")
        : question.answers[question.correct];
    const newlyEarnedRewards = registerChallengeResult(isCorrect);
    if (isCorrect) correctThisLevel += 1;
    else mistakesThisLevel += 1;
    saveProgress();
    const options = answerList.querySelectorAll(".answer-option");
    const fillSubmit = isFill ? answerList.querySelector("button[type='submit']") : null;
    if (fillInput) fillInput.disabled = true;
    if (fillSubmit) fillSubmit.disabled = true;
    petActionButton.disabled = false;
    petActionButton.textContent = "Repasar explicación con Pinchuskin";

    options.forEach((option, index) => {
        option.disabled = true;
        if (index === correctAnswer) {
            option.classList.add("correct");
        } else if (index === selectedIndex) {
            option.classList.add("incorrect");
        }
    });

    if (isCorrect) {
        score += 100;
        progress.score = score;
        pointsThisLevel += 100;
        progress.experience += 10;
        progress.bestScore = Math.max(progress.bestScore, progress.score);
        saveProgress();
        updateScore();
        xpDisplay.textContent = String(progress.experience);
        gameXp.textContent = String(progress.experience);
        feedbackTitle.textContent = "¡Correcto! +100 puntos";
        feedback.classList.add("is-correct");
        speakAs("poroto", nextAssistantMessage([
            "¡Respuesta correcta! Sumaste 10 XP. ¿Te animas a inventar otro ejercicio parecido?",
            "¡Lo lograste! Tus 10 XP brillan como magia. ¡Vamos por el siguiente reto!",
            "¡Maravilloso! Sumaste 10 XP y fortaleciste tu habilidad matemática."
        ]), "celebrate");
    } else {
        mistakesDisplay.textContent = String(mistakesThisLevel);
        feedbackTitle.textContent = "¡Todo bien! Los errores también ayudan a aprender";
        feedback.classList.add("is-incorrect");
        speakAs("poroto", nextAssistantMessage([
            "¡No pasa nada! Cada intento te enseña algo. Pinchuskin te explica cómo revisarlo.",
            "¡Buen intento! Equivocarse es parte de aprender; revisemos juntos el procedimiento.",
            "¡Sigue probando! Pinchuskin te ayudará a encontrar el paso que falta."
        ]), "surprised");
    }

    feedbackExplanation.textContent = !isCorrect
        ? `La respuesta correcta es ${correctResponseText}. ${question.explanation}`
        : question.explanation;
    if (newlyEarnedRewards.length) {
        speakAs("hada", `¡Recompensa desbloqueada! ${newlyEarnedRewards.map((reward) => reward.title).join(" y ")}. ${newlyEarnedRewards.map((reward) => reward.description).join(" ")}`, "celebrate");
    }
    nextQuestionButton.hidden = false;
    feedback.hidden = false;
    updateQuestionProgress(currentQuestionIndex + 1);
    nextQuestionButton.textContent = currentQuestionIndex === levels[currentLevelIndex].questions.length - 1
        ? "Ver resultado →"
        : "Continuar →";
    nextQuestionButton.focus();
    queueFairyDeliveries(newlyEarnedRewards.map((reward) => ({
        ...reward,
        id: `achievement-${reward.id}`
    })));
}

// Cierra la partida y solo desbloquea el siguiente nivel si se completaron las preguntas.
function finishLevel(timedOut = false) {
    clearInterval(timerInterval);
    cancelSpeech();
    const isLastLevel = currentLevelIndex === levels.length - 1;
    const completion = timedOut ? null : completeCurrentLevel();

    resultEyebrow.textContent = timedOut ? "RONDA EXPRÉS" : isLastLevel ? "AVENTURA COMPLETADA" : "NIVEL COMPLETADO";
    resultTitle.textContent = timedOut ? "¡Se acabó el tiempo!" : isLastLevel ? "¡Has recuperado el cristal!" : "¡Desafío superado!";
    resultDescription.textContent = timedOut
        ? "No alcanzaste a responder todas las preguntas. Vuelve a intentarlo para completar el nivel."
        : isLastLevel
            ? `Conquistaste los diez territorios de Matemática y Cálculo con ${mistakesThisLevel} errores de aprendizaje. ¡Tu curiosidad es tu mayor poder!`
            : `Terminaste ${levels[currentLevelIndex].title} con ${mistakesThisLevel} errores de aprendizaje. ${levels[Math.min(currentLevelIndex + 1, levels.length - 1)].title} ya está desbloqueado.`;
    resultIcon.textContent = !timedOut && isLastLevel ? "★" : "✦";
    levelScore.textContent = String(pointsThisLevel);
    gameXp.textContent = String(progress.experience);
    renderResultCrew();
    resultCompanionMessage.textContent = timedOut
        ? "Poroto: ¡No te desanimes! Pinchuskin te ayudará a practicar, Hada celebrará tu próximo intento y Media te acompañará."
        : `${isLastLevel ? "Poroto: ¡Aventura completada!" : `Poroto: ¡Nivel ${currentLevelIndex + 1} completado! Se desbloqueó ${levels[Math.min(currentLevelIndex + 1, levels.length - 1)].title}.`} Hada guarda tus logros y celebra tus avances.`;
    rewardCard.hidden = timedOut;
    rewardTitle.textContent = levelBadgeAwardedThisRun
        ? `¡Insignia de ${levels[currentLevelIndex].title}!`
        : `Insignia de ${levels[currentLevelIndex].title} conseguida`;
    rewardMessage.textContent = levelBadgeAwardedThisRun
        ? "Hada te regala 50 XP y agrega esta insignia a tu colección."
        : `${completion?.newlyEarned.length ? `Hada desbloqueó: ${completion.newlyEarned.map((reward) => reward.title).join(", ")}.` : "La insignia ya forma parte de tu colección."} Medalla de ${medalTierLabels[completion?.tier] || "bronce"} registrada según tus resultados.`;
    continueButton.hidden = timedOut || isLastLevel;
    continueButton.textContent = isLastLevel
        ? "Aventura completada"
        : `Siguiente nivel →`;
    showScreen(resultScreen);

    if (!timedOut && completion) {
        const tierIcons = { bronze: "🥉", silver: "🥈", gold: "🥇" };
        const deliveries = [];
        if (levelBadgeAwardedThisRun) {
            deliveries.push({
                id: `level-badge-${currentLevelIndex}`,
                title: `Insignia de ${levels[currentLevelIndex].title}`,
                description: `Ganaste la medalla de ${medalTierLabels[completion.tier]} y 50 XP por completar este nivel.`,
                icon: tierIcons[completion.tier] || "🏅"
            });
        } else if (completion.medalAwarded) {
            deliveries.push({
                id: `level-medal-${currentLevelIndex}-${completion.tier}`,
                title: `Medalla de ${medalTierLabels[completion.tier]} · ${levels[currentLevelIndex].title}`,
                description: `Mejoraste tu resultado y conseguiste una medalla de ${medalTierLabels[completion.tier]}.`,
                icon: tierIcons[completion.tier] || "🏅"
            });
        }
        deliveries.push(...completion.newlyEarned.map((reward) => ({
            ...reward,
            id: `achievement-${reward.id}`
        })));
        queueFairyDeliveries(deliveries);
    }
}

const puzzleBounds = { left: 62, right: 678, top: 28, bottom: 362 };
const puzzleSvgNamespace = "http://www.w3.org/2000/svg";
const puzzleToolInstructions = {
    move: "Arrastra un punto de la gráfica para moverlo. También puedes usar las flechas del teclado cuando el punto esté seleccionado.",
    open: "Toca un segmento para abrir un hueco en la curva. Los extremos abiertos no incluyen ese valor.",
    closed: "Toca la gráfica para añadir un punto cerrado. Su altura representa el valor definido de la función.",
    jump: "Toca un tramo interior para separarlo y crear límites laterales diferentes.",
    remove: "Toca un punto para quitarlo. Si quitas el hueco entre extremos coincidentes, los segmentos se unen."
};

function createPuzzleGraph(kind) {
    const makePoints = (xValues, offset = 0) => xValues.map((x) => ({ x, y: 0.4 * x + offset }));
    if (kind === "jump") {
        return {
            segments: [
                { points: makePoints([-5, -3, -1, 0]), startOpen: false, endOpen: true },
                { points: makePoints([0, 1, 3, 5], 2), startOpen: false, endOpen: false }
            ],
            isolated: []
        };
    }
    if (kind === "hole") {
        return {
            segments: [
                { points: makePoints([-5, -3, -1, 0]), startOpen: false, endOpen: true },
                { points: makePoints([0, 1, 3, 5]), startOpen: true, endOpen: false }
            ],
            isolated: []
        };
    }
    return {
        segments: [{ points: makePoints([-5, -3, -1, 1, 3, 5]), startOpen: false, endOpen: false }],
        isolated: []
    };
}

function puzzleXToSvg(x) {
    return puzzleBounds.left + ((x + 5) / 10) * (puzzleBounds.right - puzzleBounds.left);
}

function puzzleYToSvg(y) {
    return puzzleBounds.bottom - ((y + 4) / 8) * (puzzleBounds.bottom - puzzleBounds.top);
}

function puzzleSvgToGraph(point) {
    return {
        x: Math.round(Math.max(-5, Math.min(5, ((point.x - puzzleBounds.left) / (puzzleBounds.right - puzzleBounds.left)) * 10 - 5)) * 100) / 100,
        y: Math.round(Math.max(-4, Math.min(4, 4 - ((point.y - puzzleBounds.top) / (puzzleBounds.bottom - puzzleBounds.top)) * 8)) * 100) / 100
    };
}

function createPuzzleSvgElement(tag, attributes = {}) {
    const element = document.createElementNS(puzzleSvgNamespace, tag);
    Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, String(value)));
    return element;
}

function drawPuzzleGraph() {
    const title = puzzleChart.querySelector("title");
    const description = puzzleChart.querySelector("desc");
    puzzleChart.replaceChildren(title, description);
    const layer = createPuzzleSvgElement("g", { class: "puzzle-rendered" });
    puzzleChart.append(layer);
    layer.append(createPuzzleSvgElement("rect", {
        x: puzzleBounds.left,
        y: puzzleBounds.top,
        width: puzzleBounds.right - puzzleBounds.left,
        height: puzzleBounds.bottom - puzzleBounds.top,
        rx: 5,
        fill: "#fff"
    }));

    for (let x = -5; x <= 5; x += 1) {
        const svgX = puzzleXToSvg(x);
        layer.append(createPuzzleSvgElement("line", {
            x1: svgX, y1: puzzleBounds.top, x2: svgX, y2: puzzleBounds.bottom,
            class: x === 0 ? "puzzle-axis" : "puzzle-grid-line"
        }));
        const label = createPuzzleSvgElement("text", {
            x: svgX, y: puzzleBounds.bottom + 22, class: "puzzle-tick"
        });
        label.textContent = String(x);
        layer.append(label);
    }
    for (let y = -4; y <= 4; y += 1) {
        const svgY = puzzleYToSvg(y);
        layer.append(createPuzzleSvgElement("line", {
            x1: puzzleBounds.left, y1: svgY, x2: puzzleBounds.right, y2: svgY,
            class: y === 0 ? "puzzle-axis" : "puzzle-grid-line"
        }));
        if (y !== 0) {
            const label = createPuzzleSvgElement("text", {
                x: puzzleBounds.left - 10, y: svgY + 4, class: "puzzle-tick puzzle-tick-y"
            });
            label.textContent = String(y);
            layer.append(label);
        }
    }

    const xLabel = createPuzzleSvgElement("text", {
        x: puzzleBounds.right - 4, y: puzzleBounds.bottom - 9, class: "puzzle-axis-label"
    });
    xLabel.textContent = "x";
    const yLabel = createPuzzleSvgElement("text", {
        x: puzzleBounds.left + 8, y: puzzleBounds.top + 16, class: "puzzle-axis-label"
    });
    yLabel.textContent = "y";
    layer.append(xLabel, yLabel);

    puzzleGraph.segments.forEach((segment, segmentIndex) => {
        const path = createPuzzleSvgElement("polyline", {
            points: segment.points.map((point) => `${puzzleXToSvg(point.x)},${puzzleYToSvg(point.y)}`).join(" "),
            class: "puzzle-function-line"
        });
        layer.append(path);
        segment.points.forEach((point, pointIndex) => {
            const isOpen = (pointIndex === 0 && segment.startOpen)
                || (pointIndex === segment.points.length - 1 && segment.endOpen);
            const circle = createPuzzleSvgElement("circle", {
                cx: puzzleXToSvg(point.x),
                cy: puzzleYToSvg(point.y),
                r: pointIndex === 0 || pointIndex === segment.points.length - 1 ? 8 : 6,
                class: `puzzle-control-point ${isOpen ? "open" : "closed"}`,
                tabindex: "0",
                role: "slider",
                "aria-label": `Punto de la gráfica en x ${point.x.toFixed(1)}, y ${point.y.toFixed(1)}`,
                "aria-valuetext": `x ${point.x.toFixed(1)}, y ${point.y.toFixed(1)}`,
                "data-point-kind": "segment",
                "data-segment-index": segmentIndex,
                "data-point-index": pointIndex
            });
            layer.append(circle);
        });
    });

    puzzleGraph.isolated.forEach((point, pointIndex) => {
        const circle = createPuzzleSvgElement("circle", {
            cx: puzzleXToSvg(point.x),
            cy: puzzleYToSvg(point.y),
            r: 8,
            class: `puzzle-control-point puzzle-isolated-point ${point.open ? "open" : "closed"}`,
            tabindex: "0",
            role: "slider",
            "aria-label": `${point.open ? "Punto abierto" : "Punto cerrado"} en x ${point.x.toFixed(1)}, y ${point.y.toFixed(1)}`,
            "aria-valuetext": `x ${point.x.toFixed(1)}, y ${point.y.toFixed(1)}`,
            "data-point-kind": "isolated",
            "data-point-index": pointIndex
        });
        layer.append(circle);
    });
}

function interpolatePuzzleSegment(segment, x) {
    const points = segment.points;
    for (let index = 1; index < points.length; index += 1) {
        const left = points[index - 1];
        const right = points[index];
        if (x <= right.x + 0.0001) {
            const ratio = (x - left.x) / (right.x - left.x);
            return left.y + ratio * (right.y - left.y);
        }
    }
    return points[points.length - 1].y;
}

function analyzePuzzleGraph() {
    const tolerance = 0.001;
    const segments = puzzleGraph.segments.slice().sort((left, right) => left.points[0].x - right.points[0].x);
    let isFunction = segments.length > 0;
    for (const segment of segments) {
        if (segment.points.length < 2) isFunction = false;
        for (let index = 1; index < segment.points.length; index += 1) {
            if (segment.points[index].x - segment.points[index - 1].x < 0.001) isFunction = false;
        }
    }
    for (let index = 1; index < segments.length; index += 1) {
        if (segments[index].points[0].x < segments[index - 1].points.at(-1).x - tolerance) {
            isFunction = false;
        }
    }

    const closedValues = [];
    segments.forEach((segment) => {
        const first = segment.points[0];
        const last = segment.points.at(-1);
        if (!segment.startOpen) closedValues.push(first);
        if (!segment.endOpen) closedValues.push(last);
    });
    puzzleGraph.isolated.forEach((point) => {
        if (!point.open) closedValues.push(point);
        for (const segment of segments) {
            const start = segment.points[0].x;
            const end = segment.points.at(-1).x;
            if (point.x > start + tolerance && point.x < end - tolerance) {
                if (Math.abs(interpolatePuzzleSegment(segment, point.x) - point.y) > tolerance) {
                    isFunction = false;
                }
            }
        }
    });
    for (let left = 0; left < closedValues.length; left += 1) {
        for (let right = left + 1; right < closedValues.length; right += 1) {
            if (Math.abs(closedValues[left].x - closedValues[right].x) < tolerance
                && Math.abs(closedValues[left].y - closedValues[right].y) > tolerance) {
                isFunction = false;
            }
        }
    }

    const seams = [];
    let isContinuous = isFunction
        && Math.abs(segments[0]?.points[0].x + 5) < tolerance
        && !segments[0]?.startOpen
        && Math.abs(segments.at(-1)?.points.at(-1).x - 5) < tolerance
        && !segments.at(-1)?.endOpen;
    for (let index = 1; index < segments.length; index += 1) {
        const leftSegment = segments[index - 1];
        const rightSegment = segments[index];
        const left = leftSegment.points.at(-1);
        const right = rightSegment.points[0];
        if (Math.abs(left.x - right.x) >= tolerance) {
            isContinuous = false;
            continue;
        }
        const sameLimit = Math.abs(left.y - right.y) < tolerance;
        const filledAtSeam = closedValues.some((point) =>
            Math.abs(point.x - left.x) < tolerance && Math.abs(point.y - left.y) < tolerance);
        const seamClosed = !leftSegment.endOpen || !rightSegment.startOpen || filledAtSeam;
        if (!sameLimit || !seamClosed) isContinuous = false;
        seams.push({ x: (left.x + right.x) / 2, left, right, leftSegment, rightSegment });
    }

    const jump = seams.find((seam) => Math.abs(seam.left.y - seam.right.y) >= tolerance);
    const targetSeam = seams.find((seam) => Math.abs(seam.x) < tolerance);
    const removablePoint = puzzleGraph.isolated.find((point) =>
        !point.open && Math.abs(point.x) < tolerance
        && targetSeam
        && Math.abs(point.y - targetSeam.left.y) >= tolerance);
    const hasRemovableAtTarget = isFunction
        && Boolean(targetSeam)
        && targetSeam.leftSegment.endOpen
        && targetSeam.rightSegment.startOpen
        && Math.abs(targetSeam.left.y - targetSeam.right.y) < tolerance
        && Boolean(removablePoint);

    return {
        isFunction,
        isContinuous: isFunction && isContinuous,
        hasJump: isFunction && Boolean(jump),
        hasRemovableAtTarget,
        jump,
        targetSeam,
        removablePoint
    };
}

function setPuzzleDialogue(companionId, message, mood = "talk") {
    const companion = companions.find((item) => item.id === companionId);
    if (!companion) return;
    puzzleGuideArt.replaceChildren(createPetIllustration(companion, "map-guide-character"));
    puzzleGuideName.textContent = `${companion.name} · ${companion.role}`;
    puzzleGuideMessage.textContent = message;
    puzzleGuideArt.dataset.mood = mood;
}

function updatePuzzleStage() {
    cancelSpeech();
    const challenge = puzzleChallenges[puzzleStageIndex];
    puzzleStageComplete = false;
    puzzleSelectedAnswer = null;
    puzzleLevelTag.textContent = `Nivel ${currentLevelIndex + 1} · ${levels[currentLevelIndex].title}`;
    puzzleStageLabel.textContent = `Desafío ${puzzleStageIndex + 1} de ${puzzleChallenges.length}`;
    const progressValue = Math.round((puzzleStageIndex / puzzleChallenges.length) * 100);
    puzzleProgressBar.style.width = `${progressValue}%`;
    puzzleProgressTrack.setAttribute("aria-valuenow", String(progressValue));
    puzzleStageTopic.textContent = challenge.topic;
    puzzleChallengeTitle.textContent = challenge.title;
    puzzleChallengePrompt.textContent = challenge.prompt;
    puzzleClassification.hidden = puzzleStageIndex !== 0;
    puzzleClassification.querySelectorAll("[data-puzzle-answer]").forEach((button) => {
        button.disabled = false;
        button.setAttribute("aria-pressed", "false");
    });
    puzzleCheckButton.hidden = false;
    puzzleCheckButton.disabled = false;
    puzzleResetButton.disabled = false;
    puzzleNextButton.hidden = true;
    puzzleFeedback.className = "puzzle-feedback";
    puzzleFeedback.textContent = "Selecciona una herramienta para empezar a explorar.";
    puzzleTool = "move";
    puzzleKeyboardTarget = null;
    document.querySelectorAll("[data-puzzle-tool]").forEach((button) => {
        button.disabled = false;
        button.classList.toggle("selected", button.dataset.puzzleTool === puzzleTool);
        button.setAttribute("aria-pressed", String(button.dataset.puzzleTool === puzzleTool));
    });
    puzzleToolHelp.textContent = puzzleToolInstructions[puzzleTool];
    puzzleGraph = createPuzzleGraph(challenge.graph);
    drawPuzzleGraph();

    puzzleHintButton.dataset.hintStage = "0";
    puzzleHintButton.disabled = false;
    puzzleHintButton.textContent = "Pedir pista a Pinchuskin";
    const guide = puzzleStageIndex === 0
        ? "¡Vamos a leer la gráfica! Sigue la curva con la vista y fíjate qué ocurre al acercarte al punto central."
        : `${challenge.title}: ${challenge.prompt}`;
    setPuzzleDialogue("poroto", guide);
    if (progress.autoRead) readCurrentPuzzleChallenge();
}

function startPuzzle(levelIndex) {
    currentLevelIndex = levelIndex;
    currentGameId = "puzzle";
    puzzleStageIndex = 0;
    pointsThisLevel = 0;
    mistakesThisLevel = 0;
    correctThisLevel = 0;
    levelBadgeAwardedThisRun = false;
    cancelSpeech();
    showScreen(puzzleScreen);
    updatePuzzleStage();
}

function setPuzzleTool(tool) {
    if (puzzleStageComplete) return;
    puzzleTool = tool;
    document.querySelectorAll("[data-puzzle-tool]").forEach((button) => {
        const selected = button.dataset.puzzleTool === tool;
        button.classList.toggle("selected", selected);
        button.setAttribute("aria-pressed", String(selected));
    });
    puzzleToolHelp.textContent = puzzleToolInstructions[tool];
}

function puzzlePointFromPointer(event) {
    const matrix = puzzleChart.getScreenCTM();
    if (!matrix) return null;
    const point = puzzleChart.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    return puzzleSvgToGraph(point.matrixTransform(matrix.inverse()));
}

function splitPuzzleSegment(segmentIndex, x, kind) {
    const segment = puzzleGraph.segments[segmentIndex];
    if (!segment || x <= segment.points[0].x + 0.12 || x >= segment.points.at(-1).x - 0.12) return false;
    const y = interpolatePuzzleSegment(segment, x);
    const splitPoint = { x, y };
    const leftPoints = segment.points.filter((point) => point.x < x - 0.0001).concat({ ...splitPoint });
    const rightPoints = [{ ...splitPoint }, ...segment.points.filter((point) => point.x > x + 0.0001)];
    const leftSegment = {
        points: leftPoints,
        startOpen: segment.startOpen,
        endOpen: true
    };
    const rightPoint = kind === "jump"
        ? { x, y: y <= 2.5 ? y + 1.5 : y - 1.5 }
        : { ...splitPoint };
    const rightSegment = {
        points: [rightPoint, ...rightPoints.slice(1)],
        startOpen: kind !== "jump",
        endOpen: segment.endOpen
    };
    puzzleGraph.segments.splice(segmentIndex, 1, leftSegment, rightSegment);
    return true;
}

function addPuzzlePoint(point) {
    if (puzzleTool === "open" || puzzleTool === "jump") {
        const segmentIndex = puzzleGraph.segments.findIndex((segment) =>
            point.x > segment.points[0].x + 0.12 && point.x < segment.points.at(-1).x - 0.12);
        if (segmentIndex < 0 || !splitPuzzleSegment(segmentIndex, point.x, puzzleTool)) {
            puzzleFeedback.textContent = "Elige un tramo interior de la gráfica, lejos de sus extremos.";
            puzzleFeedback.className = "puzzle-feedback is-incorrect";
            return;
        }
    } else if (puzzleTool === "closed") {
        puzzleGraph.isolated.push({ x: point.x, y: point.y, open: false });
    }
    drawPuzzleGraph();
    puzzleFeedback.className = "puzzle-feedback";
    puzzleFeedback.textContent = "Gráfica actualizada. Confirma la consigna cuando estés listo.";
}

function removePuzzlePoint(point) {
    let closest = null;
    let closestDistance = Infinity;
    puzzleGraph.segments.forEach((segment, segmentIndex) => {
        segment.points.forEach((item, pointIndex) => {
            const dx = puzzleXToSvg(item.x) - puzzleXToSvg(point.x);
            const dy = puzzleYToSvg(item.y) - puzzleYToSvg(point.y);
            const distance = Math.hypot(dx, dy);
            if (distance < closestDistance) {
                closest = { kind: "segment", segmentIndex, pointIndex };
                closestDistance = distance;
            }
        });
    });
    puzzleGraph.isolated.forEach((item, pointIndex) => {
        const distance = Math.hypot(
            puzzleXToSvg(item.x) - puzzleXToSvg(point.x),
            puzzleYToSvg(item.y) - puzzleYToSvg(point.y)
        );
        if (distance < closestDistance) {
            closest = { kind: "isolated", pointIndex };
            closestDistance = distance;
        }
    });
    if (!closest || closestDistance > 25) {
        puzzleFeedback.textContent = "Toca cerca de un punto para quitarlo.";
        return;
    }
    if (closest.kind === "isolated") {
        puzzleGraph.isolated.splice(closest.pointIndex, 1);
    } else {
        const segment = puzzleGraph.segments[closest.segmentIndex];
        const isFirst = closest.pointIndex === 0;
        const isLast = closest.pointIndex === segment.points.length - 1;
        if (isFirst || isLast) {
            const pointIndex = closest.pointIndex;
            const matchingIndex = puzzleGraph.segments.findIndex((candidate, index) => {
                if (index === closest.segmentIndex) return false;
                const endpoint = isLast ? candidate.points[0] : candidate.points.at(-1);
                const selected = segment.points[pointIndex];
                return Math.abs(endpoint.x - selected.x) < 0.12
                    && Math.abs(endpoint.y - selected.y) < 0.12;
            });
            if (matchingIndex >= 0) {
                const leftIndex = isLast ? closest.segmentIndex : matchingIndex;
                const rightIndex = isLast ? matchingIndex : closest.segmentIndex;
                const leftSegment = puzzleGraph.segments[leftIndex];
                const rightSegment = puzzleGraph.segments[rightIndex];
                const merged = {
                    points: leftSegment.points.concat(rightSegment.points.slice(1)),
                    startOpen: leftSegment.startOpen,
                    endOpen: rightSegment.endOpen
                };
                puzzleGraph.segments.splice(rightIndex, 1);
                puzzleGraph.segments.splice(leftIndex, 1, merged);
                puzzleGraph.isolated = puzzleGraph.isolated.filter((item) =>
                    Math.abs(item.x - segment.points[pointIndex].x) >= 0.12);
            } else if (isFirst) {
                segment.startOpen = false;
            } else {
                segment.endOpen = false;
            }
        } else {
            segment.points.splice(closest.pointIndex, 1);
            if (segment.points.length < 2) puzzleGraph.segments.splice(closest.segmentIndex, 1);
        }
    }
    drawPuzzleGraph();
    puzzleFeedback.className = "puzzle-feedback";
    puzzleFeedback.textContent = "Punto quitado. Comprueba cómo cambió la función.";
}

function movePuzzlePoint(target, point) {
    if (target.kind === "isolated") {
        const item = puzzleGraph.isolated[target.pointIndex];
        if (!item) return;
        item.x = point.x;
        item.y = point.y;
    } else {
        const segment = puzzleGraph.segments[target.segmentIndex];
        const item = segment?.points[target.pointIndex];
        if (!item) return;
        const isDomainEdge = (target.pointIndex === 0 && Math.abs(item.x + 5) < 0.12)
            || (target.pointIndex === segment.points.length - 1 && Math.abs(item.x - 5) < 0.12);
        if (!isDomainEdge) {
            const previous = segment.points[target.pointIndex - 1];
            const next = segment.points[target.pointIndex + 1];
            const minimum = previous ? previous.x + 0.08 : -5;
            const maximum = next ? next.x - 0.08 : 5;
            item.x = Math.max(minimum, Math.min(maximum, point.x));
        }
        item.y = point.y;
    }
    drawPuzzleGraph();
}

function updatePuzzlePointByKeyboard(target, key) {
    const item = target.kind === "isolated"
        ? puzzleGraph.isolated[target.pointIndex]
        : puzzleGraph.segments[target.segmentIndex]?.points[target.pointIndex];
    if (!item) return;
    const nextPoint = { ...item };
    if (key === "ArrowLeft") nextPoint.x -= 0.25;
    if (key === "ArrowRight") nextPoint.x += 0.25;
    if (key === "ArrowUp") nextPoint.y += 0.25;
    if (key === "ArrowDown") nextPoint.y -= 0.25;
    movePuzzlePoint(target, {
        x: Math.max(-5, Math.min(5, nextPoint.x)),
        y: Math.max(-4, Math.min(4, nextPoint.y))
    });
    puzzleKeyboardTarget = target;
    const updatedPoint = target.kind === "isolated"
        ? puzzleGraph.isolated[target.pointIndex]
        : puzzleGraph.segments[target.segmentIndex]?.points[target.pointIndex];
    const description = puzzleChart.querySelector("desc");
    if (updatedPoint && description) {
        description.textContent = `Punto seleccionado: x ${updatedPoint.x.toFixed(2)}, y ${updatedPoint.y.toFixed(2)}. Usa las flechas para seguir moviéndolo.`;
    }
    puzzleChart.focus();
}

function completePuzzleChallenge(explanation) {
    puzzleStageComplete = true;
    const newlyEarnedRewards = registerChallengeResult(true, false);
    correctThisLevel += 1;
    score += 100;
    progress.score = score;
    pointsThisLevel += 100;
    progress.experience += 10;
    progress.bestScore = Math.max(progress.bestScore, progress.score);
    saveProgress();
    updateScore();
    xpDisplay.textContent = String(progress.experience);
    puzzleProgressBar.style.width = `${Math.round(((puzzleStageIndex + 1) / puzzleChallenges.length) * 100)}%`;
    puzzleProgressTrack.setAttribute("aria-valuenow", String(Math.round(((puzzleStageIndex + 1) / puzzleChallenges.length) * 100)));
    puzzleFeedback.className = "puzzle-feedback is-correct";
    puzzleFeedback.textContent = `¡Desafío superado! +100 puntos y +10 XP. ${explanation}`;
    puzzleCheckButton.hidden = true;
    puzzleNextButton.hidden = false;
    puzzleNextButton.textContent = puzzleStageIndex === puzzleChallenges.length - 1
        ? "Terminar nivel y recibir medalla →"
        : "Siguiente desafío →";
    document.querySelectorAll("[data-puzzle-tool]").forEach((button) => { button.disabled = true; });
    puzzleResetButton.disabled = true;
    puzzleClassification.querySelectorAll("button").forEach((button) => { button.disabled = true; });
    setPuzzleDialogue("hada", [
        "¡Excelente observación! ¡Hada guarda tus puntos brillantes!",
        "¡Reparaste la gráfica! Cada extremo y cada valor definido está en su lugar.",
        "¡Ese salto sí es una discontinuidad! ¡Hada celebra tu construcción!",
        "¡Lo lograste! El límite existe, pero el valor de la función en x = 0 es distinto."
    ][puzzleStageIndex], "celebrate");
    if (newlyEarnedRewards.length) {
        setPuzzleDialogue("hada", `¡Recompensa desbloqueada! ${newlyEarnedRewards.map((reward) => reward.title).join(" y ")}.`, "celebrate");
        queueFairyDeliveries(newlyEarnedRewards.map((reward) => ({
            ...reward,
            id: `achievement-${reward.id}`
        })));
    }
}

function checkPuzzleChallenge() {
    if (puzzleStageComplete) return;
    const analysis = analyzePuzzleGraph();
    const challenge = puzzleChallenges[puzzleStageIndex];
    let isCorrect = false;
    let explanation = "";
    let error = "";

    if (puzzleStageIndex === 0) {
        if (!puzzleSelectedAnswer) {
            error = "Elige «Continua» o «Discontinua» después de explorar la gráfica.";
        } else if (!analysis.isFunction) {
            error = "La gráfica debe representar una función: cada valor de x puede tener un único valor de y.";
        } else {
            const expected = puzzleSelectedAnswer === "continuous";
            isCorrect = expected === analysis.isContinuous;
            explanation = analysis.isContinuous
                ? "Los tramos se unen, los puntos necesarios están definidos y coinciden sus valores."
                : analysis.jump
                    ? `Los límites laterales en x = ${analysis.jump.x.toFixed(1)} son diferentes (${analysis.jump.left.y.toFixed(1)} y ${analysis.jump.right.y.toFixed(1)}).`
                    : "Hay un hueco o una interrupción: la gráfica no está conectada en todo el intervalo.";
            if (!isCorrect) error = "Revisa los puntos abiertos y cerrados, y compara los límites laterales antes de clasificar.";
        }
    } else if (!analysis.isFunction) {
        error = "Así no queda definida una función: para una misma x aparecen varios valores de y. Mueve o quita el punto extra.";
    } else if (puzzleStageIndex === 1) {
        isCorrect = analysis.isContinuous;
        explanation = "En el hueco, los límites laterales coinciden con el valor definido de la función.";
        error = analysis.hasJump
            ? "Los límites laterales todavía llegan a alturas diferentes."
            : "Todavía hay un hueco, un extremo abierto o una interrupción en la gráfica.";
    } else if (puzzleStageIndex === 2) {
        isCorrect = !analysis.isContinuous && analysis.hasJump;
        explanation = `Los límites laterales en x = ${analysis.jump?.x.toFixed(1)} son diferentes; por eso hay una discontinuidad de salto.`;
        error = analysis.isContinuous
            ? "La función sigue siendo continua. Abre un hueco o separa los límites laterales."
            : "La gráfica es discontinua, pero aún no tiene un salto válido entre dos límites laterales distintos.";
    } else {
        isCorrect = analysis.hasRemovableAtTarget;
        explanation = `En x = 0 ambos límites llegan a ${analysis.targetSeam?.left.y.toFixed(1)}, pero f(0) = ${analysis.removablePoint?.y.toFixed(1)}.`;
        error = analysis.targetSeam && Math.abs(analysis.targetSeam.left.y - analysis.targetSeam.right.y) >= 0.001
            ? "Los límites laterales no coinciden. Para que sea evitable, conserva la misma altura a ambos lados del hueco."
            : "Falta un hueco abierto en x = 0 y un punto cerrado a otra altura, en esa misma x.";
    }

    progress.challengesAttempted += 1;
    if (isCorrect) {
        completePuzzleChallenge(explanation);
        return;
    }
    progress.streak = 0;
    mistakesThisLevel += 1;
    saveProgress();
    puzzleFeedback.className = "puzzle-feedback is-incorrect";
    puzzleFeedback.textContent = error || "Aún no se cumple la consigna. Prueba otra modificación.";
    setPuzzleDialogue("poroto", `${error} ¡No te preocupes, cada intento ayuda a descubrir cómo se comporta la función!`, "surprised");
}

function resetPuzzleChallenge() {
    if (puzzleStageComplete) return;
    puzzleGraph = createPuzzleGraph(puzzleChallenges[puzzleStageIndex].graph);
    puzzleSelectedAnswer = null;
    puzzleClassification.querySelectorAll("[data-puzzle-answer]").forEach((button) => {
        button.setAttribute("aria-pressed", "false");
    });
    puzzleFeedback.className = "puzzle-feedback";
    puzzleFeedback.textContent = "Gráfica reiniciada. Intenta otra estrategia.";
    drawPuzzleGraph();
}

function handlePuzzlePointerDown(event) {
    if (puzzleStageComplete) return;
    const point = puzzlePointFromPointer(event);
    if (!point) return;
    if (puzzleTool === "move") {
        const target = event.target instanceof Element ? event.target.closest("[data-point-kind]") : null;
        if (!target) return;
        puzzleDragTarget = {
            kind: target.dataset.pointKind,
            segmentIndex: Number(target.dataset.segmentIndex),
            pointIndex: Number(target.dataset.pointIndex)
        };
        puzzleChart.setPointerCapture(event.pointerId);
        event.preventDefault();
        return;
    }
    if (puzzleTool === "remove") {
        removePuzzlePoint(point);
        return;
    }
    addPuzzlePoint(point);
}

function handlePuzzlePointerMove(event) {
    if (!puzzleDragTarget || puzzleStageComplete) return;
    const point = puzzlePointFromPointer(event);
    if (point) movePuzzlePoint(puzzleDragTarget, point);
}

function handlePuzzlePointerEnd(event) {
    puzzleDragTarget = null;
    if (puzzleChart.hasPointerCapture(event.pointerId)) {
        puzzleChart.releasePointerCapture(event.pointerId);
    }
}

document.querySelector("#puzzle-to-games").addEventListener("click", () => {
    cancelSpeech();
    showScreen(gamesScreen);
});

document.querySelectorAll("[data-puzzle-tool]").forEach((button) => {
    button.addEventListener("click", () => setPuzzleTool(button.dataset.puzzleTool));
});

document.querySelectorAll("[data-puzzle-answer]").forEach((button) => {
    button.addEventListener("click", () => {
        puzzleSelectedAnswer = button.dataset.puzzleAnswer;
        puzzleClassification.querySelectorAll("[data-puzzle-answer]").forEach((answerButton) => {
            answerButton.setAttribute("aria-pressed", String(answerButton === button));
        });
        puzzleFeedback.className = "puzzle-feedback";
        puzzleFeedback.textContent = `Clasificación seleccionada: ${button.textContent}. Pulsa «Comprobar gráfica» para revisar tu respuesta.`;
    });
});

puzzleChart.addEventListener("pointerdown", handlePuzzlePointerDown);
puzzleChart.addEventListener("pointermove", handlePuzzlePointerMove);
puzzleChart.addEventListener("pointerup", handlePuzzlePointerEnd);
puzzleChart.addEventListener("pointercancel", handlePuzzlePointerEnd);
puzzleChart.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
    const circle = event.target instanceof Element ? event.target.closest("[data-point-kind]") : null;
    if (puzzleTool !== "move" || puzzleStageComplete) return;
    if (circle) {
        puzzleKeyboardTarget = {
            kind: circle.dataset.pointKind,
            segmentIndex: Number(circle.dataset.segmentIndex),
            pointIndex: Number(circle.dataset.pointIndex)
        };
    }
    if (!puzzleKeyboardTarget) return;
    event.preventDefault();
    updatePuzzlePointByKeyboard(puzzleKeyboardTarget, event.key);
});

puzzleCheckButton.addEventListener("click", checkPuzzleChallenge);
puzzleResetButton.addEventListener("click", resetPuzzleChallenge);
puzzleHintButton.addEventListener("click", () => {
    const challenge = puzzleChallenges[puzzleStageIndex];
    if (puzzleHintButton.dataset.hintStage === "0") {
        setPuzzleDialogue("hamster", `Pista: ${challenge.hint}`);
        puzzleHintButton.dataset.hintStage = "1";
        puzzleHintButton.textContent = "Pedir segunda pista a Pinchuskin";
        return;
    }
    setPuzzleDialogue("hamster", `Observa la definición de continuidad: los límites laterales deben coincidir con el valor de la función. En esta gráfica, busca el punto abierto o compara las alturas a ambos lados de x = 0. Consigna: ${challenge.prompt}`);
    puzzleHintButton.disabled = true;
    puzzleHintButton.textContent = "Pinchuskin te dio dos pistas";
});
puzzleReadButton.addEventListener("click", () => {
    readCurrentPuzzleChallenge();
});
puzzleNextButton.addEventListener("click", () => {
    if (!puzzleStageComplete) return;
    if (puzzleStageIndex === puzzleChallenges.length - 1) {
        finishLevel();
        return;
    }
    puzzleStageIndex += 1;
    updatePuzzleStage();
});

// Botón de volver desde la partida al mapa.
document.querySelector("#games-to-map").addEventListener("click", () => {
    cancelSpeech();
    renderMap();
    showScreen(mapScreen);
});

document.querySelector("#back-to-map").addEventListener("click", () => {
    clearInterval(timerInterval);
    cancelSpeech();
    renderMap();
    showScreen(mapScreen);
});

// Botón de volver desde el resultado al mapa.
document.querySelector("#result-to-map").addEventListener("click", () => {
    cancelSpeech();
    renderMap();
    showScreen(mapScreen);
});

// Permite volver a jugar el mismo nivel desde cero.
document.querySelector("#replay-level").addEventListener("click", () => startLevel(currentLevelIndex, currentGameId));
petActionButton.addEventListener("click", askPinchuskin);
sockActionButton.addEventListener("click", askMediaToRead);
companionExampleButton.addEventListener("click", toggleCompanionExample);
speechPauseButton.addEventListener("click", toggleSpeechPause);
puzzleSpeechPauseButton.addEventListener("click", toggleSpeechPause);
autoReadToggle.checked = progress.autoRead;
autoReadToggle.disabled = !("speechSynthesis" in window);
autoReadToggle.addEventListener("change", () => setAutoRead(autoReadToggle.checked));
puzzleAutoReadToggle.checked = progress.autoRead;
puzzleAutoReadToggle.disabled = !("speechSynthesis" in window);
puzzleAutoReadToggle.addEventListener("change", () => setAutoRead(puzzleAutoReadToggle.checked));
puzzleReadButton.disabled = !("speechSynthesis" in window);

ownerOpenButton.addEventListener("click", () => {
    ownerLoginError.hidden = true;
    ownerPinInput.value = "";
    ownerLoginDialog.showModal();
    ownerPinInput.focus();
});
ownerLoginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (ownerPinInput.value !== ownerAccessPin) {
        ownerLoginError.hidden = false;
        ownerPinInput.select();
        return;
    }

    renderTeacherAnswerKey();
    ownerPanel.hidden = false;
    ownerOpenButton.disabled = true;
    ownerOpenButton.textContent = "Respuestas abiertas";
    ownerLoginDialog.close();
    ownerPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});
ownerLockButton.addEventListener("click", () => {
    lockOwnerPanel();
    ownerOpenButton.focus();
});
ownerLoginCancelButton.addEventListener("click", () => ownerLoginDialog.close());
ownerLoginDialog.addEventListener("close", () => {
    ownerPinInput.value = "";
    ownerLoginError.hidden = true;
});
fairyDeliveryContinue.addEventListener("click", () => {
    if (fairyDeliveryContinue.disabled) return;
    showNextFairyDelivery();
});
fairyDeliveryDialog.addEventListener("cancel", (event) => {
    event.preventDefault();
});

// Abre la selección de juegos del siguiente nivel.
continueButton.addEventListener("click", () => showLevelGames(currentLevelIndex + 1));

// Pasa a la siguiente pregunta o finaliza el nivel si ya se respondió la última.
nextQuestionButton.addEventListener("click", () => {
    if (!answered) {
        return;
    }
    if (currentQuestionIndex === levels[currentLevelIndex].questions.length - 1) {
        finishLevel();
        return;
    }
    currentQuestionIndex += 1;
    renderQuestion();
    questionTitle.focus?.();
});

// Preparación inicial: dibuja el mapa y sincroniza los puntos con el encabezado.
initializeFairyDelivery();
renderMap();
applyCompanionTheme();
renderAssistantRoster();
updateScore();
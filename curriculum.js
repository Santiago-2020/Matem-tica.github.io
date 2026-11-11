window.mathLevels = [
    {
        title: "Funciones",
        subtitle: "Variables, tablas y gráficas",
        intro: "POROTO te invita a descubrir cómo una regla transforma cada valor de entrada en una única salida.",
        lesson: "La variable independiente suele llamarse x; la dependiente es f(x) o y. Una relación es función si cada entrada permitida tiene exactamente una salida.",
        icon: "ƒ(x)", tone: "violet",
        questions: [
            {
                topic: "VARIABLES · SELECCIÓN",
                hint: "La entrada se elige libremente y la regla determina la salida.",
                text: "En f(x) = 2x + 1, ¿cuál es la variable independiente?",
                answers: ["x", "f(x)", "2", "1"], correct: 0,
                explanation: "x es la entrada independiente; f(x) depende del valor que se elija para x."
            },
            {
                topic: "TABLAS Y GRÁFICAS · INTERPRETACIÓN",
                hint: "Sustituye x por 2 en la regla y ubica la salida en el eje vertical.",
                text: "La tabla de f(x) = 1 − 2x contiene los pares (−1, 3), (0, 1) y (2, −3). ¿Cuánto vale f(2)?",
                answers: ["−3", "−2", "1", "3"], correct: 0,
                explanation: "Al sustituir x = 2: f(2) = 1 − 2·2 = −3. En la gráfica corresponde al punto (2, −3).",
                graph: { type: "descendingLine", caption: "Gráfica de f(x) = 1 − 2x; cada punto muestra una entrada x y su salida f(x)." }
            },
            {
                topic: "RECONOCER FUNCIONES · VERDADERO O FALSO",
                hint: "Busca si alguna entrada se repite asociada a dos salidas distintas.",
                text: "¿La relación {(1, 2), (2, 3), (1, 4)} representa una función?",
                answers: ["Sí, cada entrada tiene una sola salida", "No, la entrada 1 tiene dos salidas"], correct: 1,
                explanation: "No es función: la misma entrada x = 1 está asociada con 2 y con 4."
            }
        ]
    },
    {
        title: "Ecuaciones",
        subtitle: "Primer y segundo grado",
        intro: "POROTO encuentra igualdades escondidas y PINCHUSKIN te recuerda mantener el equilibrio en ambos lados.",
        lesson: "Resolver una ecuación significa hallar los valores de la incógnita que hacen verdadera la igualdad. Toda operación aplicada a un lado debe aplicarse al otro.",
        icon: "x = ?", tone: "mint",
        questions: [
            {
                topic: "PRIMER GRADO · CÁLCULO",
                hint: "Resta 5 a ambos lados y luego divide entre 3.",
                text: "Resuelve 3x + 5 = 20. ¿Cuánto vale x?",
                answers: ["3", "5", "15", "25"], correct: 1,
                explanation: "3x = 20 − 5 = 15; al dividir entre 3, x = 5."
            },
            {
                topic: "SEGUNDO GRADO · SELECCIÓN",
                hint: "Factoriza el trinomio: busca dos números cuyo producto sea 6 y suma sea −5.",
                text: "¿Cuáles son las soluciones de x² − 5x + 6 = 0?",
                answers: ["x = −2 y x = −3", "x = 2 y x = 3", "x = 1 y x = 6", "x = 0 y x = 5"], correct: 1,
                explanation: "x² − 5x + 6 = (x − 2)(x − 3). Por la propiedad del producto nulo, x = 2 o x = 3."
            },
            {
                topic: "DESPEJE · COMPLETA EL RESULTADO",
                hint: "Divide los dos lados de 2(x − 1) = 8 entre 2 antes de sumar 1.",
                text: "Completa: 2(x − 1) = 8 → x − 1 = 4 → x = __",
                answers: ["5", "4", "3", "9"], correct: 0,
                explanation: "Después de dividir entre 2, x − 1 = 4. Al sumar 1 a ambos lados, x = 5."
            }
        ]
    },
    {
        title: "Dominio",
        subtitle: "Restricciones, fracciones y raíces",
        intro: "PINCHUSKIN revisa qué entradas están permitidas antes de que POROTO trace una función.",
        lesson: "El dominio reúne todos los valores reales de x para los que la expresión está definida. Un denominador no puede ser cero y el radicando de una raíz par debe ser mayor o igual que cero.",
        icon: "D(f)", tone: "gold",
        questions: [
            {
                topic: "FRACCIONES · RESTRICCIÓN",
                hint: "El denominador x − 2 debe ser distinto de cero.",
                text: "¿Qué valor debe excluirse del dominio de f(x) = 1/(x − 2)?",
                answers: ["−2", "0", "2", "No se excluye ninguno"], correct: 2,
                explanation: "En x = 2 el denominador se hace cero. Dominio: todos los reales excepto 2."
            },
            {
                topic: "RAÍCES · SELECCIÓN",
                hint: "Resuelve 3 − x ≥ 0; el signo se invierte al despejar −x.",
                text: "¿Cuál es el dominio real de g(x) = √(3 − x)?",
                answers: ["x ≥ 3", "x ≤ 3", "x < 3", "Todos los reales"], correct: 1,
                explanation: "Para que la raíz sea real, 3 − x ≥ 0, así que x ≤ 3. El 3 sí está incluido."
            },
            {
                topic: "DOMINIO · LECTURA DE GRÁFICA",
                hint: "La curva se acerca a x = 2 pero nunca tiene un punto allí.",
                text: "En la gráfica de y = 1/(x − 2), ¿qué x queda fuera del dominio?",
                answers: ["−2", "0", "2", "4"], correct: 2,
                explanation: "La función no está definida en x = 2 porque su denominador sería cero.",
                graph: { type: "reciprocalTwo", asymptotes: [2], caption: "La curva tiene una asíntota vertical en x = 2; ese valor no pertenece al dominio." }
            }
        ]
    },
    {
        title: "Recorrido",
        subtitle: "Valores posibles y gráficas",
        intro: "HADA abre el mapa de salidas: ahora importa qué valores de y puede alcanzar una función.",
        lesson: "El recorrido (o imagen) es el conjunto de valores que toma y = f(x). En una parábola que abre hacia arriba, el vértice marca el valor mínimo.",
        icon: "R(f)", tone: "blue",
        questions: [
            {
                topic: "RECORRIDO · SELECCIÓN",
                hint: "El cuadrado nunca es negativo, así que x² + 1 nunca baja de 1.",
                text: "¿Cuál es el recorrido de f(x) = x² + 1 para x real?",
                answers: ["y ≤ 1", "y ≥ 1", "y > 1", "Todos los reales"], correct: 1,
                explanation: "Como x² ≥ 0, x² + 1 ≥ 1. El mínimo 1 se alcanza en x = 0; recorrido [1, +∞).",
                graph: { type: "parabolaUpOne", caption: "La parábola tiene vértice (0, 1), su menor valor; desde ahí crece sin límite." }
            },
            {
                topic: "RECORRIDO · INTERPRETACIÓN",
                hint: "Una recta no horizontal que se extiende en ambos sentidos alcanza cualquier altura.",
                text: "Para f(x) = −2x + 3 con dominio real, ¿cuál es su recorrido?",
                answers: ["y ≥ 3", "y ≤ 3", "Todos los reales", "Solo y = 3"], correct: 2,
                explanation: "Al variar x sobre todos los reales, una recta con pendiente distinta de cero alcanza todos los valores reales de y."
            },
            {
                topic: "RECORRIDO · COMPLETA EL RESULTADO",
                hint: "En y = (x − 2)² − 4 el cuadrado alcanza su mínimo, cero, cuando x = 2.",
                text: "El valor mínimo de y = (x − 2)² − 4 es __.",
                answers: ["−4", "−2", "0", "4"], correct: 0,
                explanation: "El término cuadrático mínimo es 0 en x = 2; por eso el mínimo de y es −4 y el recorrido [−4, +∞)."
            }
        ]
    },
    {
        title: "Raíces",
        subtitle: "Ceros e intersecciones con X",
        intro: "POROTO sigue la curva hasta los puntos donde toca o cruza el eje x: allí la salida vale cero.",
        lesson: "Las raíces son los valores de x que cumplen f(x) = 0. En la gráfica son las abscisas de las intersecciones con el eje X.",
        icon: "x₀", tone: "violet",
        questions: [
            {
                topic: "RAÍCES · CÁLCULO",
                hint: "Iguala a cero y factoriza como diferencia de cuadrados.",
                text: "¿Cuáles son las raíces de f(x) = x² − 9?",
                answers: ["x = −3 y x = 3", "x = 0 y x = 9", "x = 3", "No tiene raíces reales"], correct: 0,
                explanation: "x² − 9 = (x − 3)(x + 3) = 0, de modo que x = 3 o x = −3.",
                graph: { type: "parabolaRoots", roots: [-3, 3], caption: "Las intersecciones con el eje X ocurren en x = −3 y x = 3." }
            },
            {
                topic: "INTERSECCIÓN · INTERPRETACIÓN",
                hint: "En el eje X, y = 0. Resuelve x − 2 = 0.",
                text: "¿En qué punto corta el eje X la recta y = x − 2?",
                answers: ["(0, −2)", "(2, 0)", "(−2, 0)", "(0, 2)"], correct: 1,
                explanation: "En el eje X, y = 0: x − 2 = 0 da x = 2. La intersección es (2, 0).",
                graph: { type: "lineRoot", roots: [2], caption: "La raíz x = 2 se ve donde la recta cruza el eje horizontal." }
            },
            {
                topic: "RAÍCES · VERDADERO O FALSO",
                hint: "Una raíz debe hacer que la función valga exactamente cero.",
                text: "¿x = 1 es raíz de f(x) = x² − 1?",
                answers: ["Sí, porque f(1) = 0", "No, porque f(1) ≠ 0"], correct: 0,
                explanation: "f(1) = 1² − 1 = 0, así que x = 1 sí es raíz."
            }
        ]
    },
    {
        title: "Límites",
        subtitle: "Sustitución e indeterminaciones",
        intro: "PINCHUSKIN observa hacia qué valor se acerca una función, aunque el punto exacto tenga un hueco.",
        lesson: "Si la función es continua en el punto, se puede sustituir directamente. Ante 0/0, factoriza y simplifica antes de evaluar el límite.",
        icon: "lim", tone: "mint",
        questions: [
            {
                topic: "SUSTITUCIÓN DIRECTA · CÁLCULO",
                hint: "Como es un polinomio, sustituye x = 3 directamente.",
                text: "Calcula lim (x² + 2x) cuando x → 3.",
                answers: ["9", "12", "15", "18"], correct: 2,
                explanation: "Los polinomios son continuos: 3² + 2·3 = 9 + 6 = 15."
            },
            {
                topic: "INDETERMINACIÓN 0/0 · SELECCIÓN",
                hint: "Factoriza x² − 4 como (x − 2)(x + 2) y simplifica para x ≠ 2.",
                text: "Calcula lim (x² − 4)/(x − 2) cuando x → 2.",
                answers: ["0", "2", "4", "No existe"], correct: 2,
                explanation: "Para x ≠ 2, la fracción equivale a x + 2. El límite al acercarse a 2 es 4."
            },
            {
                topic: "LÍMITE Y HUECO · INTERPRETACIÓN GRÁFICA",
                hint: "Aunque falte el punto, observa a qué altura se acerca la curva por ambos lados.",
                text: "La gráfica sigue y = x + 1 a ambos lados de x = 1, pero tiene un hueco allí. ¿Cuál es el límite?",
                answers: ["1", "2", "No existe", "0"], correct: 1,
                explanation: "Los valores cercanos a 1 se acercan a 1 + 1 = 2 desde ambos lados; el hueco no cambia el límite.",
                graph: { type: "lineHole", holes: [1], caption: "Hay un hueco en (1, 2), pero la curva se acerca a 2 desde izquierda y derecha." }
            }
        ]
    },
    {
        title: "Continuidad",
        subtitle: "Gráficas sin cortes y puzzle",
        intro: "HADA te propone reparar gráficas; abre el puzzle para mover puntos, cerrar huecos y crear saltos.",
        lesson: "f es continua en a si f(a) existe, existe el límite cuando x se acerca a a y ambos valores coinciden. Un hueco o salto rompe la continuidad.",
        icon: "↔", tone: "gold",
        questions: [
            {
                topic: "CONDICIÓN DE CONTINUIDAD · SELECCIÓN",
                hint: "Compara el valor de la función en el punto con el límite que comparten ambos lados.",
                text: "Para que f sea continua en x = a, ¿qué debe cumplirse?",
                answers: ["f(a) = lim f(x) cuando x → a", "f(a) debe ser distinto del límite", "El límite debe ser infinito", "No hace falta que exista f(a)"], correct: 0,
                explanation: "La continuidad exige que f(a) esté definida, que el límite exista y que sea igual a f(a)."
            },
            {
                topic: "DISCONTINUIDAD EVITABLE · ANÁLISIS",
                hint: "Los límites laterales son 1, pero el valor que da la definición en x = 0 es 2.",
                text: "Si f(x) = x + 1 para x ≠ 0 y f(0) = 2, ¿es continua en 0?",
                answers: ["Sí, porque f(0) existe", "No, porque el límite vale 1 y f(0) = 2", "Sí, porque ambos lados crecen", "No, porque el límite no existe"], correct: 1,
                explanation: "El límite cuando x → 0 es 1, mientras que f(0) = 2. Como no coinciden, hay una discontinuidad evitable."
            },
            {
                topic: "CONTINUIDAD · CÁLCULO DE PARÁMETROS",
                hint: "Calcula el límite por la izquierda en x = 2 y hazlo igual al valor de la expresión de la derecha.",
                text: "Sea f(x) = 2x + 1 si x < 2 y f(x) = ax − 1 si x ≥ 2. ¿Qué valor de a hace continua f en x = 2?",
                answers: ["2", "3", "4", "5"], correct: 1,
                explanation: "Por la izquierda, 2(2) + 1 = 5. Por la derecha, f(2) = 2a − 1. Igualamos: 2a − 1 = 5, así que a = 3."
            }
        ]
    },
    {
        title: "Límites infinitos",
        subtitle: "Asíntotas y comportamiento vertical",
        intro: "POROTO explora funciones que crecen sin cota al aproximarse a una recta vertical.",
        lesson: "Si los valores de f(x) aumentan o disminuyen sin límite al acercarse x a a, hay un límite infinito y la recta x = a es una asíntota vertical.",
        icon: "∞", tone: "blue",
        questions: [
            {
                topic: "LÍMITE LATERAL · CÁLCULO",
                hint: "Al acercarte a 2 por la derecha, x − 2 es positivo y cada vez más pequeño.",
                text: "¿Cuánto vale lim 1/(x − 2) cuando x → 2⁺?",
                answers: ["+∞", "−∞", "0", "1"], correct: 0,
                explanation: "Por la derecha, x − 2 → 0⁺; su recíproco crece sin cota: +∞.",
                graph: { type: "reciprocalTwo", asymptotes: [2], caption: "A la derecha de x = 2, la curva sube sin límite al aproximarse a la asíntota." }
            },
            {
                topic: "ASÍNTOTA VERTICAL · LECTURA",
                hint: "La asíntota aparece donde el denominador se anula y el numerador no.",
                text: "¿Cuál es la asíntota vertical de f(x) = 3/(x + 1)?",
                answers: ["x = −1", "x = 0", "x = 1", "y = 3"], correct: 0,
                explanation: "x + 1 = 0 cuando x = −1; allí la función crece o decrece sin límite. La asíntota es x = −1."
            },
            {
                topic: "COMPORTAMIENTO · VERDADERO O FALSO",
                hint: "A la izquierda de 2, x − 2 es negativo; su recíproco también es negativo.",
                text: "Para f(x) = 1/(x − 2), al acercarse x a 2 por la izquierda, f(x) → −∞.",
                answers: ["Verdadero", "Falso"], correct: 0,
                explanation: "Cuando x → 2⁻, el denominador tiende a 0⁻ y su recíproco tiende a −∞."
            }
        ]
    },
    {
        title: "Derivadas",
        subtitle: "Tasa de cambio y recta tangente",
        intro: "PINCHUSKIN mide cómo cambia una curva en cada punto y HADA convierte la pendiente en una pista.",
        lesson: "La derivada f′(x) es la tasa de cambio instantánea y la pendiente de la recta tangente. Regla de potencia: la derivada de xⁿ es n·xⁿ⁻¹.",
        icon: "f′(x)", tone: "violet",
        questions: [
            {
                topic: "REGLA DE LA POTENCIA · CÁLCULO",
                hint: "Multiplica por el exponente y réstale uno al exponente.",
                text: "¿Cuál es la derivada de f(x) = x³ − 2x?",
                answers: ["3x² − 2", "3x − 2", "x² − 2", "3x² + 2"], correct: 0,
                explanation: "La derivada de x³ es 3x² y la de −2x es −2; por tanto f′(x) = 3x² − 2."
            },
            {
                topic: "DERIVADA · COMPLETA EL RESULTADO",
                hint: "Deriva cada término por separado; la derivada de una constante es cero.",
                text: "Si f(x) = 4x² + 3x − 1, entonces f′(x) = __.",
                answers: ["8x + 3", "4x + 3", "8x − 1", "4x² + 3"], correct: 0,
                explanation: "Por la regla de la potencia, (4x²)′ = 8x, (3x)′ = 3 y (−1)′ = 0."
            },
            {
                topic: "PENDIENTE TANGENTE · GRÁFICA",
                hint: "Deriva x² para obtener 2x y evalúa en x = 1.",
                text: "¿Cuál es la pendiente de la tangente a f(x) = x² cuando x = 1?",
                answers: ["0", "1", "2", "4"], correct: 2,
                explanation: "f′(x) = 2x; en x = 1, la pendiente es 2. La tangente pasa por (1, 1): y = 2x − 1.",
                graph: { type: "tangentSquare", tangent: { x: 1, y: 1, slope: 2 }, caption: "La recta tangente en (1, 1) tiene pendiente 2, igual a f′(1)." }
            }
        ]
    },
    {
        title: "Extremos relativos",
        subtitle: "Máximos, mínimos y derivada",
        intro: "HADA busca cimas y valles, mientras PINCHUSKIN comprueba el cambio de signo de la derivada.",
        lesson: "En un máximo o mínimo interior suave, suele cumplirse f′(x) = 0. Si f′ cambia de positiva a negativa hay un máximo; de negativa a positiva, un mínimo.",
        icon: "⌃⌄", tone: "mint",
        questions: [
            {
                topic: "MÍNIMO RELATIVO · GRÁFICA",
                hint: "La parábola x² − 4 abre hacia arriba y su vértice es (0, −4).",
                text: "¿Dónde tiene un mínimo la función f(x) = x² − 4?",
                answers: ["En (0, −4)", "En (−4, 0)", "En (0, 4)", "No tiene extremos"], correct: 0,
                explanation: "La parábola abre hacia arriba; su vértice (0, −4) es su mínimo relativo y absoluto.",
                graph: { type: "parabolaDownFour", extrema: [{ x: 0, y: -4 }], caption: "El vértice (0, −4) es el punto más bajo de la parábola." }
            },
            {
                topic: "MÁXIMO RELATIVO · INTERPRETACIÓN",
                hint: "El signo negativo invierte la parábola y la hace abrir hacia abajo.",
                text: "¿Cuál es el máximo de f(x) = −(x − 1)² + 4?",
                answers: ["4, cuando x = 1", "1, cuando x = 4", "−4, cuando x = 1", "No tiene máximo"], correct: 0,
                explanation: "El cuadrado es mínimo, cero, en x = 1. Entonces f(1) = 4, el máximo de la parábola.",
                graph: { type: "parabolaMax", extrema: [{ x: 1, y: 4 }], caption: "El vértice (1, 4) es la cima; la derivada cambia de positiva a negativa." }
            },
            {
                topic: "EXTREMOS Y DERIVADA · VERDADERO O FALSO",
                hint: "En f(x) = x² − 4, f′(x) = 2x cambia de negativa a positiva al cruzar cero.",
                text: "La función f(x) = x² − 4 tiene un mínimo en x = 0 porque su derivada pasa de negativa a positiva.",
                answers: ["Verdadero", "Falso"], correct: 0,
                explanation: "f′(x) = 2x es negativa para x < 0 y positiva para x > 0; por eso f baja y luego sube, con mínimo en x = 0."
            }
        ]
    }
];

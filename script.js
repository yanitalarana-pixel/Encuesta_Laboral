// Catálogo de códigos y áreas correspondientes (Cámbialos por los que prefieras)
const validCodes = {
    "VENTAS26": "Ventas y Comercial",
    "OPER26": "Operaciones y Logística",
    "ADMIN26": "Administración y Finanzas",
    "DIR26": "Dirección General"
};

const surveyData = [
    {
        title: "SECCIÓN 1. EVALUACIÓN DEL LIDERAZGO - GERENCIA",
        description: "Evalúa a tu jefe directo en los siguientes aspectos.",
        unlockDate: "2026-11-09",
        categories: [
            {
                name: "A. Apoyo y disponibilidad",
                questions: [
                    "Mi jefe está disponible cuando necesito apoyo para resolver algún problema.",
                    "Recibo el respaldo necesario cuando enfrento dificultades en mi trabajo.",
                    "Mi jefe escucha mis opiniones, inquietudes y propuestas.",
                    "Siento que puedo expresar desacuerdos o preocupaciones sin temor a represalias.",
                    "Mi jefe confía en mi capacidad para realizar mis actividades."
                ]
            },
            {
                name: "B. Atención y comunicación",
                questions: [
                    "Mi jefe dedica tiempo suficiente para atender mis necesidades laborales.",
                    "Recibo respuestas oportunas cuando solicito información o autorización.",
                    "Las instrucciones que recibo son claras y fáciles de entender.",
                    "Mi jefe comunica oportunamente los cambios, decisiones y prioridades.",
                    "Recibo retroalimentación sobre mi desempeño de manera adecuada."
                ]
            },
            {
                name: "C. Capacitación y desarrollo",
                questions: [
                    "Recibo la capacitación necesaria para desempeñar correctamente mis funciones.",
                    "Mi jefe identifica las áreas en las que necesito mejorar y me orienta.",
                    "Se me brindan oportunidades para aprender nuevas habilidades.",
                    "Mi jefe fomenta mi crecimiento profesional.",
                    "Cuando cometo un error, recibo orientación para evitar que vuelva a suceder."
                ]
            },
            {
                name: "D. Motivación y reconocimiento",
                questions: [
                    "Mi jefe reconoce cuando realizo un buen trabajo.",
                    "Me siento motivado para dar lo mejor de mí en mis actividades.",
                    "Mi jefe transmite una actitud positiva y de compromiso.",
                    "Siento que mi trabajo es valorado y que contribuye al éxito del equipo.",
                    "Mi jefe promueve un ambiente de respeto, confianza y colaboración."
                ]
            },
            {
                name: "E. Dirección y cumplimiento de objetivos",
                questions: [
                    "Conozco claramente cuáles son mis responsabilidades y funciones.",
                    "Los objetivos y metas que se establecen son claros.",
                    "Los objetivos establecidos son realistas y alcanzables.",
                    "Mi jefe da seguimiento adecuado al cumplimiento de los objetivos.",
                    "Las prioridades del equipo están bien definidas.",
                    "Mi jefe toma decisiones oportunas cuando se presentan problemas.",
                    "Mi jefe actúa de manera congruente entre lo que dice y lo que hace."
                ]
            }
        ]
    },
    {
        title: "SECCIÓN 2. AUTOEVALUACIÓN DEL COLABORADOR",
        description: "Evalúa tu propio desempeño durante los últimos tres meses.",
        unlockDate: "2026-11-10",
        categories: [
            {
                name: "",
                questions: [
                    "Cumplo con las responsabilidades y actividades asignadas.",
                    "Entrego mis actividades en tiempo y forma.",
                    "Mantengo una actitud positiva y de colaboración con mis compañeros.",
                    "Tomo iniciativa para resolver problemas sin esperar siempre instrucciones.",
                    "Busco aprender y mejorar continuamente mis habilidades.",
                    "Comunico oportunamente los problemas que pueden afectar mi trabajo.",
                    "Asumo la responsabilidad de mis errores y busco corregirlos.",
                    "Considero que mi desempeño contribuye al cumplimiento de los objetivos de la empresa."
                ]
            }
        ]
    },
    {
        title: "SECCIÓN 3. EVALUACIÓN DE LA EMPRESA",
        description: "Evalúa tu percepción general de la organización.",
        unlockDate: "2026-11-11",
        categories: [
            {
                name: "A. Ambiente y cultura laboral",
                questions: [
                    "Existe un ambiente de respeto entre los integrantes de la empresa.",
                    "Se fomenta el trabajo en equipo y la colaboración.",
                    "Existe un trato justo y equitativo entre los colaboradores.",
                    "La empresa promueve valores como honestidad, responsabilidad e integridad."
                ]
            },
            {
                name: "B. Organización y procesos",
                questions: [
                    "Los procesos y procedimientos de trabajo son claros.",
                    "Existe una adecuada coordinación entre las diferentes áreas.",
                    "Cuento con las herramientas, equipos y recursos necesarios para realizar mi trabajo.",
                    "Los problemas operativos se atienden oportunamente.",
                    "La carga de trabajo está distribuida de manera razonable."
                ]
            },
            {
                name: "C. Comunicación y crecimiento",
                questions: [
                    "La comunicación entre la dirección y los colaboradores es adecuada.",
                    "Conozco los objetivos y prioridades generales de la empresa.",
                    "La empresa ofrece oportunidades de crecimiento y desarrollo.",
                    "Considero que la empresa tiene una dirección clara y un futuro positivo."
                ]
            }
        ]
    }
];

// Validación del código
const accessGate = document.getElementById('access-gate');
const surveyWrapper = document.getElementById('survey-wrapper');
const codeInput = document.getElementById('access-code-input');
const btnValidate = document.getElementById('btn-validate-code');
const codeError = document.getElementById('code-error');
const departmentInput = document.getElementById('department-input');
const areaIndicator = document.getElementById('area-indicator');

function unlockSurvey(deptName) {
    departmentInput.value = deptName;
    areaIndicator.textContent = `Área: ${deptName}`;
    accessGate.classList.add('hidden');
    surveyWrapper.classList.remove('hidden');
    renderSurvey();
}

btnValidate.addEventListener('click', () => {
    const enteredCode = codeInput.value.trim().toUpperCase();
    if (validCodes[enteredCode]) {
        codeError.classList.add('hidden');
        unlockSurvey(validCodes[enteredCode]);
    } else {
        codeError.classList.remove('hidden');
    }
});

codeInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        btnValidate.click();
    }
});

// Renderizado condicional por fecha
function renderSurvey() {
    const formContent = document.getElementById('survey-content');
    formContent.innerHTML = "";

    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const todayStr = `${year}-${month}-${day}`;

    let questionCounter = 1;

    surveyData.forEach((section) => {
        const isUnlocked = todayStr >= section.unlockDate;
        const sectionDiv = document.createElement('div');
        sectionDiv.className = `section-card ${isUnlocked ? 'visible' : 'locked-card'}`;

        if (!isUnlocked) {
            const [uY, uM, uD] = section.unlockDate.split('-');
            sectionDiv.innerHTML = `
                <div style="text-align: center; padding: 25px 10px; color: #888;">
                    <div style="font-size: 2rem; margin-bottom: 8px;">🔒</div>
                    <h3 style="margin: 0 0 8px 0; color: #555;">${section.title}</h3>
                    <p style="margin: 0; font-size: 0.95rem;">Esta sección estará disponible el <strong>${uD}/${uM}/${uY}</strong>.</p>
                </div>
            `;
            let countInSec = 0;
            section.categories.forEach(c => countInSec += c.questions.length);
            questionCounter += countInSec;
        } else {
            let html = `<h2 class="section-title">${section.title}</h2>`;
            if (section.description) html += `<p>${section.description}</p>`;

            section.categories.forEach(cat => {
                if (cat.name) html += `<h3 class="category-title">${cat.name}</h3>`;
                
                cat.questions.forEach(q => {
                    const qId = `q${questionCounter}`;
                    html += `
                        <div class="question-block">
                            <p class="question-text">${questionCounter}. ${q}</p>
                            <div class="options">
                                <label><input type="radio" name="${qId}" value="1" required><span>1</span></label>
                                <label><input type="radio" name="${qId}" value="3"><span>3</span></label>
                                <label><input type="radio" name="${qId}" value="5"><span>5</span></label>
                                <label><input type="radio" name="${qId}" value="NA"><span>N/A</span></label>
                            </div>
                        </div>
                    `;
                    questionCounter++;
                });
            });
            sectionDiv.innerHTML = html;
        }
        formContent.appendChild(sectionDiv);
    });
}

// Validación final al enviar
const form = document.getElementById('survey-form');
form.addEventListener('submit', (e) => {
    const errorMsg = document.getElementById('error-msg');
    if (!form.checkValidity()) {
        e.preventDefault();
        errorMsg.classList.remove('hidden');
    } else {
        errorMsg.classList.add('hidden');
    }
});

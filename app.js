

const questions = [
    {
        question: "¿Quien es este personaje?",
        image:"./dan.jpg",
        answers: [
            { text: "Freddi Mercury si hubiera probado el chori de vaca y no de humano", correct: false},
            { text: "Dan Severn", correct: false},
            { text: "El Gusti", correct: true},
        ] 
    },
    {
        question: "¿ Que responder cuando rompiste un parabrisas ?",
        answers: [
            { text: "Nooooseeeeep", correct: true},
            { text: "Fue mi error y me arrepiento", correct: false},
            { text: "Peeerrrdon polka &#128557", correct: true},
        ] 
    },
    {
        question: "Hay un operativo en la casa de tu transa. ¿Que haces?",
        answers: [
            { text: "Sigo de largo", correct: false},
            { text: "Me voy y vengo otro dia", correct: false},
            { text: "¿Hay fasito je je?", correct: true},
        ] 
    },
    {
        question: "¿Que hacer un Viernes Santo (segun un manija) ?",
        answers: [
            { text: "Laburar", correct: false},
            { text: "Bajarse un vittone puro , salir a buscar falopa y quedarla en la calle", correct: true},
            { text: "Ir a la iglesa ", correct: false},
        ] 
    },
    {
        question: "¿Que banco auspicia a los wachitas?",
        answers: [
            { text: "Banco Hammed", correct: false},
            { text: "Banco Galicia", correct: false},
            { text: "Banco JB", correct: true},
        ] 
    },
    {
        question: "¿Quien es el de la foto?",
        image:"./imagen.jpg",
        answers: [
            { text: "Zidane y Materazzi", correct: false},
            { text: "El buda y el mueble", correct: true},
            { text: "El pelado Mancini y el  vecino homosexual", correct: false},
        ] 
    },
    {
        question: "¿Por que se separo Muzzeta Band ?",
        image:"./logopng.png",
        answers: [
            { text: "Problemas de drogas y alcohol", correct: false},
            { text: "Internacion del cantante", correct: true},
            { text: "Los pibes se dieron cuenta que mal gastaban su vida", correct: false},
        ] 
    },
    {
        question: "Te prendes uno y te tocan timbre al toque ¿Quien es?",
        answers: [
            { text: "Pampita", correct: false},
            { text: "Falopita Jackson", correct: true},
            { text: "El sujeto", correct: false},
        ] 
    },
    {
        question: "¿Quien es el de la foto?",
        image:"./turco.jpg",
        answers: [
            { text: "bbaaaaaagggggghhhhhh", correct: false},
            { text: "Un turco retrasado", correct: false},
            { text: "El turco pija larga", correct: true},
        ] 
    },
    {
        question: "Tenes el accidente de tu vida. ¿Que haces?",
        answers: [
            { text: "Me quedo tranquilo y espero a la ambulancia", correct: false},
            { text: "Quedo en estado de shock", correct: false},
            { text: "Me bajo con la cara llena de sangre y me pongo a laburar", correct: true},
        ] 
    },
    {
        question: "¿Cuantas minas se c*gio el Valde?",
        image: "./xe (1).jpeg",
        answers: [
            { text: "Más de 500", correct: true},
            { text: "Más de 100", correct: false},
            { text: "No garcha se mata a superpajas", correct: false},
        ] 
    },
    {
        question: "Cuuuuuando va ir a ....",
        answers: [
            { text: "Trabajar,vago", correct: false},
            { text: "Laburar,vago", correct: true},
            { text: "hacer algo de su vida hombre", correct: true},
        ] 
    },
    {
        question: "¿Quien esta obsecionado con masajes tranticos?",
        Image:"./masajes.jpg",
        answers: [
            { text: "La Comitiva", correct: false},
            { text: "Falopita Jackson", correct: false},
            { text: "El Mancini", correct: true},
        ] 
    },
    {
        question: "Tu amigo se clava un hongo. ¿Que haces?",
        answers: [
            { text: "Le rompo las bolas para conseguir más y le bajo la locura", correct: true},
            { text: "Sigo en la mia", correct: false},
            { text: "Me hago el ofendidito", correct: true},
        ] 
    },
    {
        question: "No tenes trajeta de crecito ¿que haces?",
        answers: [
            { text: "Banco JB", correct: true},
            { text: "Vo deci?", correct: false},
            { text: "io noro", correct: false},
        ] 
    },
    {
        question: "¿Cual es el trasfondo de esta foto?",
        image: "./imagen2.jpg",
        answers: [
            { text: "Un hombre recibiendo su bautismo", correct: false},
            { text: "Un hombre luchando por su vida", correct: true},
            { text: "Pensar que esa silla era para un jubilado", correct: false},
        ] 
    },
    {
        question: "¿Que significa Baaaaaggghhh?",
        answers: [
            { text: "Una expresion de felicidad", correct: false},
            { text: "Un aviso de A.C.V", correct: false},
            { text: "La unica neurona funcionando", correct: true},
        ] 
    },
    {
        question: "¿Cual es el transfondo de esta obra de arte?",
        image:"./imagen3.jpg",
        answers: [
            { text: "Dos cuidadanos de Israel despues del bombardeo", correct: false},
            { text: "Dos sujetos pasados de falopa", correct: false},
            { text: "Dos albaniles recien cobrados", correct: true},
        ] 
    },
    {
        question: " si va a pelear ......",
        answers: [
            { text: "PELIIIIIEEEE", correct: true},
            { text: "Defiendase", correct: false},
            { text: "so bardero?", correct: false},
        ] 
    },
    {
        question: "¿Quien es?",
        image:"./imagen4.jpg",
        answers: [
            { text: "Till Lindeman", correct: false},
            { text: "El polino", correct: false},
            { text: "San Pedro", correct: true},
        ] 
    },
    {
        question: "¿Que gusto de helado era el más vendido en grido?",
        answers: [
            { text: "Chocolate", correct: false},
            { text: "Vainilla", correct: false},
            { text: "Crema del repartidor (crema del cielo)", correct: true},
        ] 
    },
    {
        question: "Te invitas a un asado al lado de tu casa. ¿como te volves?",
        answers: [
            { text: "En silla de ruedas", correct: true},
            { text: "Caminando a mi casa", correct: false},
            { text: "Como raja pero consiente", correct: false},
        ] 
    },
    {
        question: "¿Quien esta obsecionado con masajes tranticos?",
        Image:"./masajes.jpg",
        answers: [
            { text: "La Comitiva", correct: false},
            { text: "Falopita Jackson", correct: false},
            { text: "El Mancini", correct: true},
        ] 
    },
    {
        question: "Un manija tiene un cuchillo y te amenaza",
        answers: [
            { text: "Le meto un biandazo y una patada en el orto.", correct: true},
            { text: "Lo ignoro, me subo al auto y me voy", correct: false},
            { text: "Le tiro besos y me voy", correct: false},
        ] 
    },
    {
        question: "Cuando le fue agarrar la sosha",
        answers: [
            { text: "No perro, el kiki se la c*gio, yo no", correct: false},
            { text: "vos vas a hacer", correct: false},
            { text: "Le colgaban los huevos", correct: true},
        ] 
    },

    {
        question: "Tu mujer te romper las bolas ¿Que haces?",
        answers: [
            { text: "Pido el divorcio", correct: false},
            { text: "Me voy de la casa y que se vaya todo a la mierda", correct: false},
            { text: "Me pongo en MODO GATO", correct: true},
        ] 
    },
    {
        question: "¿Te gusto el juego?",
        answers: [
            { text: "No, es una mierda. Turco del orto", correct: false},
            { text: "Si, sos el mas crack del grupo", correct: true},
            { text: "Andate a la puta que te pario", correct: false},
        ] 
    },
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById ("backButton")

let currentQuestion = 0;
let score = 0; //marcador

function Startquiz(){
    currentQuestion = 0;
    score = 0;
    nextButton.innerHTML = "Una ma hijo";
    showQuestion ();
}

function showQuestion(){
    resetState ();
    let currentques = questions[currentQuestion];
    let questionNo = currentQuestion + 1;
    questionElement.innerHTML = questionNo + " . " + currentques.question;

    if (currentques.image) {
        // Si hay una imagen, crear un elemento de imagen y establecer la fuente
        const imageElement = document.createElement("img");
        imageElement.src = currentques.image;
        imageElement.classList.add("question-image"); // Opcional: aplicar clases de estilo
        questionElement.appendChild(imageElement);
    }
    currentques.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        } 
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if (iscorrect){
        selectedBtn.classList.add("correct")
        score ++;
    } else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    let message = "";
    let imagesrc = "";
    if (score >= 14){
        message = "Felicidades, sos terrible manija. Deberias empezar una vida nueva"
        imagesrc = "./win.jpeg"
    
    } else if (score >= 8){
        message = "Sos medio manija pero podes adaptarte a la sociedad"
        imagesrc = "./casi2.jpg"
    } else {
        message = "No sabes nada de los manija. Vas a estar tranquilo en tu vida"
        imagesrc = "./Lose.jpeg"
    }
    questionElement.innerHTML = `Este es tu puntaje amigo ${score}. ${message} `;
    nextButton.innerHTML = "¿Una ma hijo?";
    nextButton.style.display = "block";
    

    const imageElement = document.createElement("img")
    imageElement.src = imagesrc;
    imageElement.classList.add("score-image");
    questionElement.appendChild(imageElement);
}

function handleNextButton(){
    currentQuestion++;
    if(currentQuestion < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestion < questions.length){
        handleNextButton();
    }else {
        Startquiz();
    }
});


Startquiz();


// inicio de juego
const startButton = document.getElementById("startButton");
const notReadyButton = document.getElementById("notReadyButton");
const welcomeDiv = document.querySelector(".welcome");
const appDiv = document.querySelector(".app");


startButton.addEventListener("click", () =>{
    welcomeDiv.style.display = "none";
    appDiv.style.display = "block";
    Startquiz();
});


notReadyButton.addEventListener("click", () => {
    welcomeDiv.innerHTML = "Ayyyy es que el turco me trata mal. Aprete en INICIO para volver a jugar, chupa pija";
    const notReadyContent = document.getElementById("notReadyContent");
    notReadyContent.style.display = "block";
});



// Imagen animacion
const medio = document.querySelector(".medio");

medio.addEventListener("click", function () {
    medio.classList.toggle("move-right");
});

// modo oscuro
const BtnOscuro = document.querySelectorAll("#oscuro");
const modoLocalStorageKey = "modoOscuro";



function cambiarModo() {
    document.body.classList.toggle('dark');
    BtnOscuro.forEach(btn => {
        btn.classList.toggle('active');
    });

    // variable para guardar en el localstorage
    const modoActual = document.body.classList.contains('dark') ? 'oscuro' : 'claro';
    localStorage.setItem(modoLocalStorageKey, modoActual);
}

// Modo oscuro desde el Local Storage al cargar la página
const modoGuardado = localStorage.getItem(modoLocalStorageKey);
if (modoGuardado === 'oscuro') {
    document.body.classList.add('dark');
    BtnOscuro.forEach(btn => {
        btn.classList.add('active');
    });
}

BtnOscuro.forEach(btn => {
    btn.addEventListener('click', cambiarModo);
});
// Dati del quiz con immagini

const quizData = [
            {
                question: "Rispetto ad un foglio A0, l'area di un foglio A4 è:",
                options: [
                    "1/4 (un quarto)",
                    "1/32 (un trentaduesimo)",
                    "1/8 (un ottavo)",
                    "1/2 (la metà)",
                    "1/16 (un sedicesimo)",
                    "Non rispondo"
                ],
                correctAnswer: 4,
                feedback: "La risposta corretta è: 1/16 (un sedicesimo) - Le dimensioni dei formati della serie A sono definite in modo che ogni formato successivo abbia un'area pari alla metà del formato precedente. Quindi A1 è metà di A0, A2 è metà di A1, A3 metà di A2 e A4 metà di A3. Pertanto A4 è 1/16 di A0."
            },
            {
                question: "Come va rappresentata la sezione di un albero?",
                options: [
                    "Con la campitura o senza a giudizio del disegnatore",
                    "Non rispondo",
                    "Sempre senza campitura",
                    "Con la campitura solo se il piano di sezione l'attraversa longitudinalmente",
                    "Con la campitura solo se il piano di sezione l'attraversa trasversalmente",
                    "Sempre con la campitura"
                ],
                correctAnswer: 4,
                feedback: "La risposta corretta è: Con la campitura solo se il piano di sezione l'attraversa trasversalmente - La sezione di un albero viene campita solo se il piano di sezione attraversa l'albero trasversalmente (perpendicolarmente all'asse). Se la sezione è longitudinale (parallela all'asse), non si applica la campitura."
            },
            {
                question: "In figura è rappresentato il simbolo grafico...",
                options: [
                    "Della prospettiva",
                    "Del metodo delle frecce",
                    "Del metodo americano",
                    "Del metodo europeo",
                    "Dell'assonometria isometrica",
                    "Non rispondo"
                ],
                correctAnswer: 3,
                feedback: "La risposta corretta è: Del metodo europeo - Il simbolo rappresenta il metodo europeo di proiezione ortogonale, dove gli oggetti sono proiettati sul piano verticale mantenendo la posizione relativa delle viste.",
                image: "./images/eu.jpg"
            },
            {
                question: "Dove va posta la vista da sinistra in una proiezione ortogonale (nel sistema europeo)?",
                options: [
                    "Non rispondo",
                    "E' indifferente",
                    "A destra",
                    "A sinistra",
                    "In alto",
                    "In basso"
                ],
                correctAnswer: 2,
                feedback: "La risposta corretta è: A destra - Nel sistema europeo, la vista da sinistra si colloca a destra della vista frontale, la vista da destra a sinistra, la vista dall'alto sotto e la vista dal basso sopra."
            },
            {
                question: "Nel disegno di un assieme non si possono (in linea di principio) trovare:",
                options: [
                    "Quote di ingombro",
                    "Non rispondo",
                    "Quote di interfaccia (complete di eventuali tolleranze)",
                    "Distinta dei componenti",
                    "Pallinatura",
                    "Indicazioni di tolleranze dimensionali sui particolari"
                ],
                correctAnswer: 5,
                feedback: "La risposta corretta è: Indicazioni di tolleranze dimensionali sui particolari - Nel disegno di assieme si indicano solo le quote funzionali all'assemblaggio. Le tolleranze dimensionali dei singoli particolari sono riportate solo nei rispettivi disegni di particolare."
            },
            {
                question: "Un pezzo che riporta una quota 30h7 avrà subito come lavorazione la...",
                options: [
                    "Non rispondo",
                    "Tornitura per esterni",
                    "Fusione in terra",
                    "Lappatura",
                    "Brocciatura",
                    "Rettifica per interni"
                ],
                correctAnswer: 1,
                feedback: "La risposta corretta è: Tornitura per esterni - La quota 30h7 indica un foro con tolleranza ISO. Il simbolo 'h' indica che si tratta di un foro, e la tolleranza h7 è tipicamente ottenuta tramite tornitura per esterni."
            },
            {
                question: "Quale sistema di quotatura è stato utilizzato nella figura seguente?",
                options: [
                    "In serie",
                    "Non rispondo",
                    "In parallelo",
                    "A coordinate",
                    "Combinata",
                    "A quote sovrapposte"
                ],
                correctAnswer: 2,
                feedback: "La risposta corretta è: In parallelo - Il sistema di quotatura in parallelo prevede che tutte le quote partano da una linea di riferimento comune.",
                image: "./images/quotatura-parallelo.jpg"
            },
            {
                question: "In una filettatura a tre principi il passo effettivo è:",
                options: [
                    "Doppio rispetto al passo apparente",
                    "Non rispondo",
                    "Uguale al passo apparente",
                    "Un terzo del passo apparente",
                    "Metà del passo apparente",
                    "Triplo rispetto al passo apparente"
                ],
                correctAnswer: 5,
                feedback: "La risposta corretta è: Triplo rispetto al passo apparente - In una filettatura a più principi, il passo effettivo (distanza tra due punti corrispondenti su filetti consecutivi) è pari al passo apparente moltiplicato per il numero di principi. Con tre principi, il passo effettivo è triplo di quello apparente."
            },
            {
                question: "La figura seguente rappresenta una rosetta (o rondella):",
                options: [
                    "Non rispondo",
                    "Elastica dentata",
                    "Elastica spaccata",
                    "Piana",
                    "Per smontaggio rapido",
                    "Ondulata"
                ],
                correctAnswer: 4,
                feedback: "La risposta corretta è: Per smontaggio rapido - La rondella per smontaggio rapido ha una linguetta che permette di sollevarla facilmente con un cacciavite.",
                image: "./images/rondella-0.jpg"
            },
            {
                question: "Rispetto alla linea media del profilo reale di una superficie, la rugosità rappresenta:",
                options: [
                    "Il valore medio delle ordinate del profilo",
                    "Non rispondo",
                    "La massima profondità di valle",
                    "Il valore quadratico medio delle ordinete del profilo",
                    "La distanza tra il picco più alto e la valle più bassa",
                    "La massima altezza di picco"
                ],
                correctAnswer: 0,
                feedback: "La risposta corretta è: Il valore medio delle ordinate del profilo - La rugosità (Ra) è definita come la media aritmetica dei valori assoluti delle ordinate del profilo rispetto alla linea media."
            },
            {
                question: "Qual è la corretta definizione di tolleranza?",
                options: [
                    "Numero che esprime, nell'unità di misura scelta, un valore di lunghezza",
                    "Differenza tra la dimensione limite massima e dimensione limite minima",
                    "Tutte le risposte precedenti sono corrette",
                    "Differenza tra la dimensione effettiva e la dimensione nominale",
                    "Non rispondo",
                    "Differenza tra la dimensione limite minima e la dimensione nominale"
                ],
                correctAnswer: 1,
                feedback: "La risposta corretta è: Differenza tra la dimensione limite massima e dimensione limite minima - La tolleranza dimensionale è la differenza tra la dimensione massima ammissibile e la dimensione minima ammissibile di una quota."
            },
            {
                question: "Indicare le dimensioni massime e minime di D=30 mm, con tolleranze generali di classe m.",
                options: [
                    "Dmax =30,2 Dmin =30,0",
                    "Dmax =30,2 Dmin =29,8",
                    "Dmax =30,3 Dmin =29,7",
                    "Dmax =30,2 Dmin =28,8",
                    "Non rispondo",
                    "Dmax =32,0 Dmin =29,8"
                ],
                correctAnswer: 1,
                feedback: "La risposta corretta è: Dmax =30,2 Dmin =29,8 - Per tolleranze generali di classe m (ISO 2768) su una quota di 30 mm, la tolleranza è ±0,2 mm. Quindi Dmax = 30 + 0.2 = 30,2 mm e Dmin = 30 - 0.2 = 29,8 mm."
            },
            {
                question: "Quale tra le seguenti affermazioni sulle linguette è vera:",
                options: [
                    "Non esistono con le estremità arrotondate",
                    "Non rispondo",
                    "Lavorano ad attrito",
                    "Lavorano attraverso una filettatura",
                    "Lavorano a taglio sui fianchi",
                    "Esistono solo con estremità arrotondate"
                ],
                correctAnswer: 4,
                feedback: "La risposta corretta è: Lavorano a taglio sui fianchi - Le linguette trasmettono il momento torcente attraverso il taglio delle superfici laterali a contatto con l'albero e il mozzo."
            },
            {
                question: "Quello rappresentato in figura è un collegamento tramite:",
                options: [
                    "Linguetta",
                    "Non rispondo",
                    "Chiavetta",
                    "Profilo scanalato",
                    "Spina",
                    "Anello elastico"
                ],
                correctAnswer: 4,
                feedback: "La risposta corretta è: Spina - La spina è un elemento cilindrico o conico che viene inserito in fori trapanati contemporaneamente in albero e mozzo per realizzare un collegamento fisso.",
                image: "./images/sezione-2.PNG"
            },
            {
                question: "Qual è la relazione tra i parametri principali di una ruota dentata?",
                options: [
                    "z=Dp*m",
                    "z=m/Dp",
                    "Non rispondo",
                    "m=z/Dp",
                    "m=Dp*z",
                    "Dp=m*z"
                ],
                correctAnswer: 5,
                feedback: "La risposta corretta è: Dp=m*z - Il diametro primitivo (Dp) di una ruota dentata è uguale al modulo (m) moltiplicato per il numero di denti (z)."
            },
            {
    question: "Per le linee di un disegno tecnico, quale spessore non è previsto dalla Normativa?",
    options: ["0,75", "Non rispondo", "1", "0,35", "0,25", "0,5"],
    correctAnswer: 0,
    feedback: "La risposta corretta è: 0,75."
},
{
    question: "Come va rappresentata la sezione di una razza di una puleggia?",
    options: ["Non rispondo", "Sempre con la campitura", "Con la campitura o senza purché il disegno non sia ambiguo", "Con la campitura solo se il piano di sezione l'attraversa longitudinalmente", "Sempre senza campitura", "Con la campitura solo se il piano di sezione l'attraversa trasversalmente"],
    correctAnswer: 5,
    feedback: "La risposta corretta è: Con la campitura solo se il piano di sezione l'attraversa trasversalmente."
},
{
    question: "Nel disegno è rappresentata:",
    options: ["Una vista parziale", "Una vista in vicinanza", "Una vista locale", "Una sezione parziale", "Una sezione in vicinanza", "Non rispondo"],
    correctAnswer: 0,
    feedback: "La risposta corretta è: Una vista parziale.",
    image: "./images/vista-parz.PNG"
},
{
    question: "Nel disegno seguente è rappresentata:",
    options: ["Una assonometria ortogonale", "Una assonometria obliqua", "Una prospettiva", "Una proiezione secondo il metodo delle frecce", "Non rispondo", "Una rappresentazione ortografica"],
    correctAnswer: 5,
    feedback: "La risposta corretta è: Una rappresentazione ortografica.",
    image: "./images/rappresentazione-ortografica.jpg"
},
{
    question: "Nel disegno di un assieme non si possono (in linea di principio) trovare:",
    options: ["Indicazioni di tolleranze dimensionali sui particolari", "Non rispondo", "Pallinatura", "Distinta dei componenti", "Quote di ingombro", "Quote di interfaccia (complete di eventuali tolleranze)"],
    correctAnswer: 0,
    feedback: "La risposta corretta è: Indicazioni di tolleranze dimensionali sui particolari."
},
{
    question: "Che tipo di lavorazione è la tornitura?",
    options: ["Deformazione", "Con asportazione di truciolo", "Formatura dallo stato liquido", "Unione", "Senza asportazione di truciolo", "Non rispondo"],
    correctAnswer: 1,
    feedback: "La risposta corretta è: Con asportazione di truciolo."
},
{
    question: "Quale figura riporta la corretta denominazione degli elementi di una quota?",
    options: [
        '<img src="./images/quota-0.jpg" alt="Opzione 1" class="question-image">',
        '<img src="./images/quota-1.jpg" alt="Opzione 2" class="question-image">',
        '<img src="./images/quota-2.jpg" alt="Opzione 3" class="question-image">',
        '<img src="./images/quota-3.jpg" alt="Opzione 4" class="question-image">',
        '<img src="./images/quota-4.jpg" alt="Opzione 5" class="question-image">',
        "Non rispondo"
    ],
    correctAnswer: 4,
    feedback: "La risposta corretta è: <img src='./images/quota-3.jpg' alt='Risposta 4' class='question-image'>"
},
{
    question: "La designazione di una filettatura metrica destrorsa, a passo grosso di 3,5 mm, diametro nominale 30 mm, un principio è:",
    options: ["M30 P1", "M30x3,5 1 fil", "Non rispondo", "M30", "M30x3,5 RH", "M30 RH"],
    correctAnswer: 3,
    feedback: "La risposta corretta è: M30."
},
{
    question: "In figura è rappresentato un collegamento:",
    options: ["Con vite prigioniera", "Con vite di pressione", "Con bullone", "Non rispondo", "Con dado e controdado", "Con vite mordente"],
    correctAnswer: 5,
    feedback: "La risposta corretta è: Con vite mordente."
},
{
    question: "Come si chiama lo strumento utilizzato per misurare la rugosità di una superficie?",
    options: ["Tastatore", "Profilatore", "Rugosimetro", "Rugosometro", "Non rispondo", "Comparatore"],
    correctAnswer: 2,
    feedback: "La risposta corretta è: Rugosimetro."
},
{
    question: "Come sono le dimensioni di un accoppiamento con interferenza?",
    options: [
        "entrambe le dimensioni limite del foro sono minori di quelle dell'albero",
        "Non rispondo",
        "entrambe le dimensioni limite del foro sono maggiori di quelle dell'albero",
        "la dimensione limite massima del foro è maggiore della dimensione limite massima dell'albero",
        "solo la dimensione limite minima del foro è minore della dimensione limite massima dell'albero",
        "solo la dimensione minima del foro è minore della dimensione limite minima dell'albero"
    ],
    correctAnswer: 0,
    feedback: "La risposta corretta è: entrambe le dimensioni limite del foro sono minori di quelle dell'albero."
},
{
    question: "Indicare le dimensioni massime e minime di D=150 mm, con tolleranze generali di classe f.",
    options: [
        "Non rispondo",
        "Dmax =151,2\nDmin =148,8",
        "Dmax =150,3\nDmin =149,7",
        "Dmax =150,5\nDmin =149,5",
        "Dmax =150,2\nDmin =149,8",
        "Dmax =150,15\nDmin =149,85"
    ],
    correctAnswer: 4,
    feedback: "La risposta corretta è: Dmax =150,2\nDmin =149,8."
},
{
    question: "La cava per una linguetta tipo A su un mozzo Φ65 è profonda:",
    options: ["4,4 mm", "Non rispondo", "7 mm", "7,5 mm", "4,9 mm", "4,3 mm"],
    correctAnswer: 0,
    feedback: "La risposta corretta è: 4,4 mm."
},
{
    question: "Quello rappresentato in figura è un collegamento tramite:",
    options: ["Spina", "Linguetta", "Chiavetta", "Non rispondo", "Anello elastico", "Profilo scanalato"],
    correctAnswer: 4,
    feedback: "La risposta corretta è: Anello elastico.",
    image: "./images/anello-elastico.jpg"
},
{
    question: "Il profilo del dente di una ruota dentata modulare è un tratto di:",
    options: ["Non rispondo", "Parabola", "Evolvente di cerchio", "Ellisse", "Cicloide", "Cerchio"],
    correctAnswer: 2,
    feedback: "La risposta corretta è: Evolvente di cerchio."
},
  {
    question: "Cosa può rappresentare la linea di tipo “a tratti fine” o “a tratti grossa”?",
    options: ["Interruzioni di viste", "Tracce dei piani di sezione", "Contorni e spigoli in vista", "Non rispondo", "Assi di simmetria", "Contorni e spigoli nascosti"],
    correctAnswer: 5,
    feedback: "La risposta corretta è: Contorni e spigoli nascosti."
  },
  {
    question: "Come va rappresentata la sezione di una nervatura?",
    options: ["Con la campitura solo se il piano di sezione l'attraversa trasversalmente", "Non rispondo", "Sempre con la campitura", "Con la campitura o senza a giudizio del disegnatore", "Sempre senza campitura", "Con la campitura solo se il piano di sezione l'attraversa longitudinalmente"],
    correctAnswer: 0,
    feedback: "La risposta corretta è: Con la campitura solo se il piano di sezione l'attraversa trasversalmente."
  },
  {
    question: "Nel disegno seguente è rappresentata:",
    options: ["Una assonometria ortogonale", "Non rispondo", "Una rappresentazione ortografica", "Una prospettiva", "Una assonometria obliqua", "Una proiezione secondo il metodo delle frecce"],
    correctAnswer: 0,
    feedback: "La risposta corretta è: Una assonometria ortogonale.",
    image:"./images/assonometria.jpg"
  },
  {
    question: "In figura è rappresentata:",
    options: ["Una sezione di sezione", "Una vista", "Una sezione per piani concorrenti", "Una sezione per un unico piano", "Non rispondo", "Una sezione per piani paralleli"],
    correctAnswer: 5,
    feedback: "La risposta corretta è: Una sezione per piani paralleli.",
    image:"./images/sezione-piani-paralleli.PNG"
  },
  {
    question: "In un disegno di un complessivo non si possono (in linea di principio) trovare:",
    options: ["Indicazioni di finitura superficiale", "Pallinatura", "Distinta dei componenti", "Non rispondo", "Quote di ingombro", "Quote di interfaccia (complete di eventuali tolleranze)"],
    correctAnswer: 0,
    feedback: "La risposta corretta è: Indicazioni di finitura superficiale."
  },
  {
    question: "Che tipo di lavorazione è la fresatura?",
    options: ["Con asportazione di truciolo", "Unione", "Formatura dallo stato liquido", "Non rispondo", "Senza asportazione di truciolo", "Deformazione"],
    correctAnswer: 0,
    feedback: "La risposta corretta è: Con asportazione di truciolo."
  },
  {
    question: "Quale figura riporta un corretto sistema di quotatura di un’asola?",
    options: [
        '<img src="./images/asola-0.jpg" alt="Opzione 1" class="question-image">',
        '<img src="./images/asola-1.jpg" alt="Opzione 2" class="question-image">',
        '<img src="./images/asola-2.jpg" alt="Opzione 3" class="question-image">',
        '<img src="./images/asola-3.jpg" alt="Opzione 4" class="question-image">',
        '<img src="./images/asola-4.jpg" alt="Opzione 5" class="question-image">',
        "Non rispondo"
    ],
    correctAnswer: 4,
    feedback: "La risposta corretta è: <img src='./images/asola-3.jpg' alt='Risposta 4' class='question-image'>"
  },
  {
    question: "Il passo di una filettatura:",
    options: [
      "E' la differenza fra il diametro nominale e quello di nocciolo",
      "Esprime il numero di principi di una filettatura",
      "E' l'angolo tra due fianchi del filetto",
      "E' la distranza fra la cresta ed il fondo di un filetto",
      "Non rispondo",
      "E' la distanza tra due creste consecutive di un filetto"
    ],
    correctAnswer: 5,
    feedback: "La risposta corretta è: E' la distanza tra due creste consecutive di un filetto."
  },
  {
    question: "La figura seguente rappresenta una rosetta (o rondella):",
    options: ["Ondulata", "Elastica dentata", "Elastica spaccata", "Non rispondo", "Per smontaggio rapido", "Piana"],
    correctAnswer: 0,
    feedback: "La risposta corretta è: Ondulata.",
    image: "./images/rosetta-ondulata.jpg"
  },
  {
    question: "Come viene definito l’errore microgeometrico che definisce lo stato di finitura di una superficie?",
    options: ["Irregolarità", "Scabrezza", "Rugosità", "Scabrosità", "Non rispondo", "Ruvidità"],
    correctAnswer: 2,
    feedback: "La risposta corretta è: Rugosità."
  },
  {
    question: "Come sono le dimensioni limite in un accoppiamento con gioco?",
    options: [
      "la dimensione limite minima del foro è maggiore o uguale alla dimensione limite massima dell’albero",
      "solo la dimensione limite massima del foro è maggiore della dimensione limite minima dell’albero",
      "solo la dimensione limite minima del foro è minore della dimensione limite minima dell’albero",
      "solo la dimensione limite minima del foro è maggiore della dimensione limite minima dell’albero",
      "Non rispondo",
      "entrambe le dimensioni limite del foro sono minori di quelle dell’albero"
    ],
    correctAnswer: 0,
    feedback: "La risposta corretta è: la dimensione limite minima del foro è maggiore o uguale alla dimensione limite massima dell’albero."
  },
  {
    question: "L’accoppiamento relativo alla quotatura Φ 70 E9/g8 è:",
    options: [
      "Non rispondo",
      "Incerto (Gmax=46μm; Imax=74μm)",
      "Con Interferenza (Imin=46μm; Imax=144μm)",
      "Con gioco (Gmin=70μm; Gmax=190μm)",
      "Con interferenza (Imin=56μm; Imax=134μm)",
      "Con gioco (Gmin=10μm; Gmax=60μm)"
    ],
    correctAnswer: 3,
    feedback: "La risposta corretta è: Con gioco (Gmin=70μm; Gmax=190μm)."
  },
  {
    question: "Qual è la principale differenza tra chiavette e linguette?",
    options: [
      "Le linguette hanno sezione costante mentre le chiavette hanno una sezione decrescente da un estremità all’altra (profilo cuneiforme)",
      "Le chiavette hanno sezione costante mentre le linguette hanno una sezione decrescente da un’estremità all’altra (profilo cuneiforme)",
      "Le chiavette hanno estremità arrotondata mentre le linguette hanno le estremità a spigolo",
      "Non rispondo",
      "Le chiavette hanno sezione quadrata mentre le linguette hanno sezione rettangolare",
      "Le chiavette hanno un profilo più basso delle linguette"
    ],
    correctAnswer: 0,
    feedback: "La risposta corretta è: Le linguette hanno sezione costante mentre le chiavette hanno una sezione decrescente da un estremità all’altra (profilo cuneiforme)."
  },
  {
    question: 'Nella designazione di un profilo scanalato, la sigla "NT" significa:',
    options: [
      "Scorrevole sotto carico",
      "Albero fisso",
      "Mozzo non trattato dopo brocciatura",
      "Non rispondo",
      "Mozzo trattato dopo brocciatura",
      "Scorrevole"
    ],
    correctAnswer: 2,
    feedback: "La risposta corretta è: Mozzo non trattato dopo brocciatura."
  },
  {
    question: "Nella figura seguente è rappresentato/a:",
    options: [
      "Una tenuta a labbro per moto rettilineo",
      "Una molla a balestra",
      "Non rispondo",
      "Una tenuta ad anello per albero rotante",
      "Una molla a tazza",
      "Una guarnizione O-ring"
    ],
    correctAnswer: 5,
    feedback: "La risposta corretta è: Una guarnizione O-ring.",
    image: "./images/o-ring.jpg"
  }
];


        
// PASABALABRA APP
// VARIABLES and FUNCTIONS

const questions1 = [
  {
    letter: "a",
    answer: "Array",
    status: 1,
    question: "CON LA A. Objeto para mantener a raya a un coder troglodita",
  },
  {
    letter: "b",
    answer: "Boolean",
    status: 1,
    question:
      "CON LA B. Dr.Jeckill/Mr.Hyde. Me quiere, no me quiere. Verdadero o ...",
  },
  {
    letter: "c",
    answer: "Callback Hell",
    status: 1,
    question: "CON LA C. Un infierno de llamadas perdidas (dos palabras)",
  },
  {
    letter: "d",
    answer: "Deprecated",
    status: 1,
    question: "CON LA D. Función depre y obsoleta",
  },
  {
    letter: "e",
    answer: "Express",
    status: 1,
    question:
      "CON LA E. El framework de node que es la envidia de los muy cafeteros",
  },
  {
    letter: "f",
    answer: "Fallback",
    status: 1,
    question: "CON LA F. Por si acaso hay errores durante la llegada del otoño",
  },
  {
    letter: "g",
    answer: "Global",
    status: 1,
    question: "CON LA G. Variable internacional que puedo destruir tu código",
  },
  {
    letter: "h",
    answer: "Hoisting",
    status: 1,
    question: "CON LA H. Si eres constante no lo tendrás",
  },
  {
    letter: "i",
    answer: "Iterables",
    status: 1,
    question:
      "CON LA I. Los objetos no lo son y tienes que buscarte la vida para buscar en sus entrañas",
  },
  {
    letter: "j",
    answer: "Javascript",
    status: 1,
    question:
      "CON LA J. Lo estabas esperando. Viaje a la isla de Indonesia codificada",
  },
  {
    letter: "k",
    answer: "Keys",
    status: 1,
    question: "CON LA K. Propiedades de un objeto que no abren ninguna puerta.",
  },
  {
    letter: "l",
    answer: "Loop",
    status: 1,
    question: "CON LA L. Donde los informáticos corren la Nascar",
  },
  {
    letter: "m",
    answer: "Map",
    status: 1,
    question: "CON LA M. Método de Google",
  },
  {
    letter: "n",
    answer: "Nan",
    status: 1,
    question: "CON LA N. Enano catalán que no entiende de números",
  },
  {
    letter: "o",
    answer: "Object",
    status: 1,
    question: "CON LA O. Es inaudito pero un tipo como null lo es",
  },
  {
    letter: "p",
    answer: "Promises",
    status: 1,
    question: "CON LA P. La clienta le hace una al casarse con un servidor",
  },
  {
    letter: "q",
    answer: "Query",
    status: 1,
    question: "CON LA Q. Qué búsqueda más obsoleta",
  },
  {
    letter: "r",
    answer: "Reduce",
    status: 1,
    question: "CON LA R. Método reducido a la mínima expresión",
  },
  {
    letter: "s",
    answer: "Scope",
    status: 1,
    question: "CON LA S. La Sradio",
  },
  {
    letter: "t",
    answer: "This",
    status: 1,
    question: "CON LA T. Objeto haciéndose un selfie",
  },
  {
    letter: "u",
    answer: "Update",
    status: 1,
    question: "CON LA U. Dale al F5 para ello",
  },
  {
    letter: "v",
    answer: "Var",
    status: 1,
    question: "CON LA V. No deberías tomar una birra en su local",
  },
  {
    letter: "w",
    answer: "Window",
    status: 1,
    question: "CONTIENE LA W. La del navegador no tiene cristales",
  },
  {
    letter: "x",
    answer: "Lexical",
    status: 1,
    question: "CONTIENE LA X. This trolero en la función flecha",
  },
  {
    letter: "y",
    answer: "Yield",
    status: 1,
    question: "CON LA Y. Le birla el control de la ejecución a la función",
  },
  {
    letter: "z",
    answer: "The Dead Zone",
    status: 1,
    question:
      "CONTIENE LA Z. Let y const deambulan por ella como zombies (tres palabras)",
  },
];

const questions2 = [
  {
    letter: "a",
    answer: "Agata",
    status: 1,
    question: "CON LA A. Piedra preciosa ideal para una gata presumida.",
  },
  {
    letter: "b",
    answer: "Bocata",
    status: 1,
    question: "CON LA B. Bocadillo para gatos barriobajeros.",
  },
  {
    letter: "c",
    answer: "Cegato",
    status: 1,
    question: "CON LA C. Gato que no ve un pijo.",
  },
  {
    letter: "d",
    answer: "Drogata",
    status: 1,
    question: "CON LA D. Gata que se chuta heroina.",
  },
  {
    letter: "e",
    answer: "Engatusar",
    status: 1,
    question:
      "CON LA E. Ganar la voluntad de alguien con halagos para conseguir algo de él.",
  },
  {
    letter: "f",
    answer: "Fragata",
    status: 1,
    question: "CON LA F. Barco de guerra.",
  },
  {
    letter: "g",
    answer: "Gattaca",
    status: 1,
    question: "CON LA G. Película felina de ciencia ficción.",
  },
  {
    letter: "h",
    answer: "Hecatombe",
    status: 1,
    question:
      "CON LA H. Suceso trágico en el que se produce una gran destrucción y muchas desgracias felinas y materiales.",
  },
  {
    letter: "i",
    answer: "Inuncat",
    status: 1,
    question:
      "CON LA I. Plan que se activa para avisar a los gatos de las rieras del Maresme cuando hay previsión de fuertes lluvias.",
  },
  {
    letter: "j",
    answer: "Judicatura",
    status: 1,
    question:
      "CON LA J. Conjunto de jueces y magistrados de un sistema judicial.",
  },
  {
    letter: "k",
    answer: "Kato",
    status: 1,
    question:
      "CON LA K. De nombre Daijiro, apellido del malogrado piloto japonés de MotoGp.",
  },
  {
    letter: "l",
    answer: "Lacatus",
    status: 1,
    question:
      "CON LA L. Jugador del Steaua de Bucarest que aguó la fiesta a los culés en la champions del 86.",
  },
  {
    letter: "m",
    answer: "Mojigato",
    status: 1,
    question:
      "CON LA M. Que muestra exagerados escrúpulos morales o religiosos.",
  },
  {
    letter: "n",
    answer: "Negativo",
    status: 1,
    question: "CON LA N. Gato pesimista que lo ve todo negro.",
  },
  {
    letter: "o",
    answer: "Ocata",
    status: 1,
    question: "CON LA O. Municipio del Maresme.",
  },
  {
    letter: "p",
    answer: "Pelagatos",
    status: 1,
    question:
      "CON LA P. Persona insignificante o mediocre, sin posición social o económica.",
  },
  {
    letter: "q",
    answer: "Qgat",
    status: 1,
    question: "CON LA Q. Acrónimo felino de San Cucufate.",
  },
  {
    letter: "r",
    answer: "Regata",
    status: 1,
    question: "CON LA R. Carrera de embarcaciones felinas.",
  },
  {
    letter: "s",
    answer: "Scattergories",
    status: 1,
    question:
      "CON LA S. Conocido juego de mesa que tiene categorias escatológicas.",
  },
  {
    letter: "t",
    answer: "Tocata",
    status: 1,
    question: "CON LA T. Tocadiscos felino.",
  },
  {
    letter: "u",
    answer: "Ural",
    status: 1,
    question: "CON LA U. Gato que proviene de esa cordillera rusa.",
  },
  {
    letter: "v",
    answer: "Vengativo",
    status: 1,
    question:
      "CON LA V. Gato determinado a tomar venganza de cualquier agravio.",
  },
  {
    letter: "w",
    answer: "Wildcat",
    status: 1,
    question:
      "CON LA W. Formación ofensiva de football americano apta para gatos salvajes.",
  },
  {
    letter: "x",
    answer: "Juntsxcat",
    status: 1,
    question:
      "CONTINE LA X. Partido político catalán que ahora mismo no andan demasiado unidos.",
  },
  {
    letter: "y",
    answer: "Yucatán",
    status: 1,
    question:
      "CON LA Y. Península del sudeste de México, famosa por sus playas, ruinas mayas y fauna felina.",
  },
  {
    letter: "z",
    answer: "Zaragata",
    status: 1,
    question: "CON LA Z. Gresca, alboroto de gatas en Zaragoza.",
  },
];
const questions3 = [
  {
    letter: "a",
    answer: "Ankara",
    status: 1,
    question: "CON LA A. Capital de Turquía que todavía lo es para un catalán.",
  },
  {
    letter: "b",
    answer: "Birmania",
    status: 1,
    question:
      "CON LA B. Antigua Myanmar, antiguo objetivo de una banda española.",
  },
  {
    letter: "c",
    answer: "Congo",
    status: 1,
    question:
      "CON LA C. País que ex-belga o democrático, lo que sí es seguro que hay un pifostio de la hostia.",
  },
  {
    letter: "d",
    answer: "Danubio",
    status: 1,
    question:
      "CON LA D. De nacimiento alemán, por él puedes navegar desde Bratislava hasta Viena.",
  },
  {
    letter: "e",
    answer: "Engatusar",
    status: 1,
    question:
      "CON LA E. Ganar la voluntad de alguien con halagos para conseguir algo de él.",
  },
  {
    letter: "f",
    answer: "Finisterre",
    status: 1,
    question: "CON LA F. Para los galegos es el fin del mundo.",
  },
  {
    letter: "g",
    answer: "Gattaca",
    status: 1,
    question: "CON LA G. Película felina de ciencia ficción.",
  },
  {
    letter: "h",
    answer: "Hecatombe",
    status: 1,
    question:
      "CON LA H. Suceso trágico en el que se produce una gran destrucción y muchas desgracias felinas y materiales.",
  },
  {
    letter: "i",
    answer: "Inuncat",
    status: 1,
    question:
      "CON LA I. Plan que se activa para avisar a los gatos de las rieras del Maresme cuando hay previsión de fuertes lluvias.",
  },
  {
    letter: "j",
    answer: "Judicatura",
    status: 1,
    question:
      "CON LA J. Conjunto de jueces y magistrados de un sistema judicial.",
  },
  {
    letter: "k",
    answer: "Kilimanjaro",
    status: 1,
    question: "CON LA K. Montaña independiente más alta del mundo.",
  },
  {
    letter: "l",
    answer: "Lacatus",
    status: 1,
    question:
      "CON LA L. Jugador del Steaua de Bucarest que aguó la fiesta a los culés en la champions del 86.",
  },
  {
    letter: "m",
    answer: "Moldavia",
    status: 1,
    question: "CON LA M. Su capital es Chisinau.",
  },
  {
    letter: "n",
    answer: "Negativo",
    status: 1,
    question: "CON LA N. Gato pesimista que lo ve todo negro.",
  },
  {
    letter: "o",
    answer: "Ocata",
    status: 1,
    question: "CON LA O. Municipio del Maresme.",
  },
  {
    letter: "p",
    answer: "Paranaribo",
    status: 1,
    question: "CON LA P. Capital de Surinam.",
  },
  {
    letter: "q",
    answer: "Quebec",
    status: 1,
    question: "CON LA Q. Ciudad y estado francofono de Canadá.",
  },
  {
    letter: "r",
    answer: "Regata",
    status: 1,
    question: "CON LA R. .",
  },
  {
    letter: "s",
    answer: "Svalbard",
    status: 1,
    question:
      "CON LA S. Archipiélago noruego donde se encuentra el Arca de las Semillas y donde está prohibido enterrar a los muertos.",
  },
  {
    letter: "t",
    answer: "Tramuntana",
    status: 1,
    question: "CON LA T. Sierra balear patrimonio de la humanidad.",
  },
  {
    letter: "u",
    answer: "Ulan Bator",
    status: 1,
    question: "CON LA U. Capital de un mongol.",
  },
  {
    letter: "v",
    answer: "Volga",
    status: 1,
    question: "CON LA V. Río más extenso de Europa.",
  },
  {
    letter: "w",
    answer: "Wyoming",
    status: 1,
    question: "CON LA W. Estado americano donde reside el oso Yogui.",
  },
  {
    letter: "x",
    answer: "",
    status: 1,
    question: "CONTINE LA X. .",
  },
  {
    letter: "y",
    answer: "Yucatán",
    status: 1,
    question:
      "CON LA Y. Península del sudeste de México, famosa por sus playas y ruinas mayas.",
  },
  {
    letter: "z",
    answer: "Zaragoza",
    status: 1,
    question:
      "CON LA Z. Ciudad aragonesa en la que todas sus vocales están acentuadas.",
  },
];

export { questions1, questions2, questions3 };

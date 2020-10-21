
/*
const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));


function play(){
let sound = new Audio("../sounds/winning-bells.mp3");
audio.play();}

*/


const questions = [
  {
    question: 'What is 2+2?',
    answers:[
      {text: "4", correct: true},
      {text:"22", correct:false}
    ]
  },
  {
    question: "Is this cool?",
    answers:[
      {text: "yes", correct: true},
      {text: "nope", correct: false},
      {text: "no", correct: false},
      {text: "yep", correct: true},
    ]
  }
];








/*
const myQuestions = [
    
  {
        number: 1,
      question: "What does the N stand for in NATO?",
      answers: {
        a: "Naval",
        b: "North",
        c: "Nations",
        d: "Native"
      },
      correctAnswer: "b"
    },
    {
        number: 2,
      question: "With what did the ancient Romans dye their hair?",
      answers: {
        a: "Snails",
        b: "maroon wood",
        c: "Bird Poop",
        d: "algae"
      },
      correctAnswer: "c"
    },
    {
        number: 3,
      question: "In Michigan it is illegal to chain what to a fire hydrant?",
      answers: {
        a: "A Bird",
        b: "A Woman",
        c: "A Cowboy",
        d: "An Alligator"
      },
      correctAnswer: "d"
    },
    {
        number: 4,
      question: "How do members of the Walibri tribe in central Australia greet each other?",
      answers: {
        a: "Rubbing each noses",
        b: "Bowing down the head",
        c: "Shaking penises",
        d: "Pulling each others ears"
      },
      correctAnswer: "c"
    },
    {
        number: 5,
      question: "In Equatorial Guinea , what is it illegal to name your child??",
      answers: {
        a: "Monica",
        b: "Joghurt",
        c: "Maria Magdalena",
        d: "Lilith"
      },
      correctAnswer: "a"
    },
    {
        number: 6,
      question: "It is illegal in Alaska to look at a moose from where?",
      answers: {
        a: "The Window of an aircraft",
        b: "A tractor",
        c: "The townhall",
        d: "A river"
      },
      correctAnswer: "a"
    },
    {
        number: 7,
      question: "In Oklahoma City its illegal for a prisoner to wear what?",
      answers: {
        a: "Gloves",
        b: "A clown nose",
        c: "Pink Bikini underwear",
        d: "Glasses"
      },
      correctAnswer: "c"
    },
    {
        number: 8,
      question: "In 1987 the Jockey Club disqualified a horse that had eaten what?",
      answers: {
        a: "A Mars bar",
        b: "Carrots",
        c: "Green tea",
        d: "Steroids"
      },
      correctAnswer: "a"
    },
    {
        number: 9,
      question: "In Vermont, woman can’t wear what without written permission from their husbands?",
      answers: {
        a: "Trousers",
        b: "Glasses",
        c: "Lingerie",
        d: "False teeth"
      },
      correctAnswer: "d"
    },
    {
        number: 10,
      question: "One third of Taiwanese funeral processions include what?",
      answers: {
        a: "A stripper",
        b: "An Elefant",
        c: "A fancy cake",
        d: "Pulling each others ears"
      },
      correctAnswer: "a"
    },
{
    number: 11,
  question: "33% of the world’s population can’t do what with their fingers?",
  answers: {
    a: "Making a handstand",
    b: "Snap their fingers",
    c: "Pick their nose",
    d: "touch their nose with their tongue"
  },
  correctAnswer: "b"
},
{
    number: 12,
  question: "In Wisconsin when is it illegal to fire a gun?",
  answers: {
    a: "Riding a horse",
    b: "During your wife’s climax",
    c: "Near a kindergarden",
    d: "In the theatre"
  },
  correctAnswer: "b"
},
    {
        number: 13,
      question: "What did people in the Middle Ages throw at weddings?",
      answers: {
        a: "Tomatoes",
        b: "Eggs",
        c: "Grain",
        d: "Salt"
      },
      correctAnswer: "c"
    },
{
    number: 14,
  question: "By law, what is banned in Japanese restaurants?",
  answers: {
    a: "Kissing",
    b: "Shaking hands",
    c: "Giving tips",
    d: "Feeding dogs"
  },
  correctAnswer: "c"
},
{
    number: 15,
  question: "The U.S. President Grover Cleveland, twice served as a what?",
  answers: {
    a: "Civil War soldier",
    b: "Executioner - a duty as sheriff",
    c: "Math professor",
    d: "Priest"
  },
  correctAnswer: "b"
},
{
    number: 16,
  question: "Abraham Lincoln never does what in any photographs?",
  answers: {
    a: "Shaking hands",
    b: "Discard his hat",
    c: "Stand",
    d: "Smile"
  },
  correctAnswer: "d"
},
{
    number: 17,
  question: "According to the British 2000 census, what is now considered a religion?",
  answers: {
    a: "Jedi Knight",
    b: "Chewbacca",
    c: "Spaghetti Monster",
    d: "Pantheism"
  },
  correctAnswer: "a"
},
{
    number: 18,
  question: "The city of La Paz in Bolivia is safe from fire because of what?",
  answers: {
    a: "Stone walls",
    b: "Corn watering system",
    c: "Traditional clay building",
    d: "Too much altitude - Not enough air for burning"
  },
  correctAnswer: "d"
},
{
    number: 19,
  question: "What is it illegal to duel with in Massachusetts?",
  answers: {
    a: "Rifles",
    b: "Double-barreled guns",
    c: "Water Pistols",
    d: "Pulling each others ears"
  },
  correctAnswer: "c"
},
{
    number: 20,
  question: "26% of McDonalds Ontario employees admit doing what?",
  answers: {
    a: "Stealing the straws for the drinks",
    b: "Putting bodily fluids in food",
    c: "Not eating the McDonalds food",
    d: "Not washing hands"
  },
  correctAnswer: "b"
},
{
    number: 21,
  question: "Umberto II was the last King of which country?",
  answers: {
    a: "Spain",
    b: "Portugal",
    c: "Monaco",
    d: "Italy"
  },
  correctAnswer: "d"
},
{
    number: 22,
  question: "The Angel Falls, the world’s highest uninterrupted waterfall, is found in which country?",
  answers: {
    a: "Venezuela",
    b: "Zimbabwe",
    c: "Ghana",
    d: "China"
  },
  correctAnswer: "a"
},
{
    number: 23,
  question: "Which celeb has children named Daisy Boo Pamela and Petal Blossom Rainbow?",
  answers: {
    a: "David Beckham",
    b: "Kamala Harris",
    c: "Jamie Oliver",
    d: "Pierce Brosnan"
  },
  correctAnswer: "c"
},
{
    number: 24,
  question: "In 2013, an orange piece of work by artist Jeff Koons sold in a New York City auction for 58 million dollars, what was the subject?",
  answers: {
    a: "A balloon dog",
    b: "A piece of butter",
    c: "A trash can",
    d: "A cross"
  },
  correctAnswer: "c"
},
{
    number: 25,
  question: "What type of sportsman are most likely to get diseased anuses or rectums?",
  answers: {
    a: "Sky-Divers",
    b: "Water Skiers",
    c: "Alpine Ski-Jumpers",
    d: "Taekwondo fighters"
  },
  correctAnswer: "b"
},
{
    number: 26,
  question: "A law in Illinois prohibits men from doing what in public?",
  answers: {
    a: "Smoking",
    b: "Shaking hands",
    c: "Having an erection",
    d: "Drinking booze"
  },
  correctAnswer: "c"
},
{
    number: 27,
  question: "It’s illegal in Texas to put what on your neighbors Cow?",
  answers: {
    a: "A scarf",
    b: "Graffiti",
    c: "A foreign brand",
    d: "A blanket"
  },
  correctAnswer: "b"
},
{
    number: 28,
  question: "On Sunday in Florida it is illegal for a single woman to do what?",
  answers: {
    a: "Dance",
    b: "Wear a mini-skirt",
    c: "Skydive",
    d: "Drive a bicycle"
  },
  correctAnswer: "c"
},
{
    number: 29,
  question: "In the French vineyards, it’s illegal to do what?",
  answers: {
    a: "Land a flying saucer",
    b: "Urinate",
    c: "Leave the rural road",
    d: "Eat grapes"
  },
  correctAnswer: "a"
},
{
  number: 30,
question: "In ice hockey, what was the first puck used made out of?",
answers: {
  a: "Wood",
  b: "Frozen cow dung",
  c: "Ceramic",
  d: "Ice"
},
correctAnswer: "b"
},
{
  number: 31,
question: "What is Johnny Depp afraid of?",
answers: {
  a: "Amber Heard",
  b: "Joanne K. Rowling",
  c: "Lamas",
  d: "Clowns"
},
correctAnswer: "d"
},
{
  number: 32,
question: "In Kansas it’s illegal to eat cherry pie with what?",
answers: {
  a: "pig meat",
  b: "A wasp on it",
  c: "Ice cream",
  d: "Vanilla sauce"
},
correctAnswer: "c"
},
{
  number: 33,
question: "It’s illegal in Georgia to do what with a fork?",
answers: {
  a: "Scratch your back",
  b: "Eat fried chicken",
  c: "Scratch your neigbours car",
  d: "threaten a nun"
},
correctAnswer: "b"
},
{
  number: 34,
question: "In California you can’t legally buy a mousetrap without having a what?",
answers: {
  a: "A hunting license",
  b: "Cheese",
  c: "A research assignment",
  d: "A royal python"
},
correctAnswer: "a"
},
{
  number: 35,
question: "Washington police officers get a half hour class in how to what?",
answers: {
  a: "Shooting",
  b: "Sitting Down",
  c: "Deescalation",
  d: "Driving"
},
correctAnswer: "b"
},
{
  number: 36,
question: "In Blythe California you can’t wear cowboy boots unless you own what?",
answers: {
  a: "a car",
  b: "a pair of jeans",
  c: "a cowboy hat",
  d: "5 cattle"
},
correctAnswer: "d"
},
{
  number: 37,
question: "In Texas it’s illegal to swear in front of a what?",
answers: {
  a: "A Church",
  b: "A Bride",
  c: "A Corpse",
  d: "A School"
},
correctAnswer: "c"
},
{
  number: 38,
question: "The Emperor Claudius legalized what at banquets?",
answers: {
  a: "Puking",
  b: "Having Sex",
  c: "Dancing",
  d: "Farting"
},
correctAnswer: "d"
},
{
  number: 39,
question: "When a people are frightened, they produce more what?",
answers: {
  a: "Earwax",
  b: "Urin",
  c: "Poop",
  d: "Blood"
},
correctAnswer: "a"
},
{
  number: 40,
question: "After China, India and the USA, which country has the next highest population?",
answers: {
  a: "Russia",
  b: "Indonesia",
  c: "Germany",
  d: "South Africa"
},
correctAnswer: "b"
},
{
  number: 41,
question: "In what country will you find the cities of Valparaiso, Antofagasta and Vina del Mar?",
answers: {
  a: "Chile",
  b: "Mexiko",
  c: "Spain",
  d: "Angola"
},
correctAnswer: "a"
},
{
  number: 42,
question: "Mount Paektu is a sacred mountain in which country?",
answers: {
  a: "Kenia",
  b: "Paraguay",
  c: "North Korea",
  d: "Australia"
},
correctAnswer: "c"
},
{
  number: 43,
question: "The Lofoten Islands are in which country?",
answers: {
  a: "Argentina",
  b: "New Zealand",
  c: "Gabun",
  d: "Norway"
},
correctAnswer: "b"
},
{
  number: 44,
question: "What’s the largest country in the world beginning with the letter L?",
answers: {
  a: "Laos",
  b: "Libya",
  c: "Lebanon",
  d: "Lithuania"
},
correctAnswer: "b"
},
{
  number: 45,
question: "The town of Lindos is on which European island?",
answers: {
  a: "Malta",
  b: "Sicily",
  c: "Kreta",
  d: "Rhodes"
},
correctAnswer: "d"
},
{
  number: 46,
question: "Where did the term barista originate?",
answers: {
  a: "Spain",
  b: "United States",
  c: "Greece",
  d: "Italy"
},
correctAnswer: "d"
},
{
  number: 47,
question: "In the popular video game series, what type of animal is Sonic?",
answers: {
  a: "Donkey",
  b: "Monkey",
  c: "Hedgehog",
  d: "Dinosaur"
},
correctAnswer: "b"
},
{
  number: 48,
question: "In Tolkien’s ‘The Hobbit’, what type of fictional creature is Smaug?",
answers: {
  a: "A unicorn",
  b: "A griffin",
  c: "a cyclops",
  d: " A dragon"
},
correctAnswer: "b"
},
{
  number: 49,
question: "Which Sci-Fi character has been played by Leonard Nimoy?",
answers: {
  a: "Captain Kirk",
  b: "Mr. Spock",
  c: "Yoda",
  d: "Captain Picard"
},
correctAnswer: "b"
},
{
  number: 50,
question: "The Great Barrier Reef lies off the coast of which country?",
answers: {
  a: "Madagaskar",
  b: "Namibia",
  c: "Australia",
  d: "New Zealand"
},
correctAnswer: "c"
},
{
  number: 51,
question: "What kind of orange is used to flavour Earl Grey tea?",
answers: {
  a: "Bergamot orange",
  b: "Kaffir lime",
  c: "Chinaberry",
  d: "Red cedar"
},
correctAnswer: "b"
},
{
  number: 52,
question: "According to legend, which man rode horses named Llamrei, Hengroen and Passelande?",
answers: {
  a: "Lancelot",
  b: "Glorfindel",
  c: "King Arthur",
  d: "Elrond"
},
correctAnswer: "b"
},
{
  number: 53,
question: "What is the Greek word for fire?",
answers: {
  a: "Pyro",
  b: "Aero",
  c: "Hydro",
  d: "Fuego"
},
correctAnswer: "b"
},
{
  number: 54,
question: "Which Apollo 11 astronaut was only in the B-team?",
answers: {
  a: "Edwin Aldrin",
  b: "Michael Collins",
  c: "Neill Armstrong",
  d: "James Lovell"
},
correctAnswer: "d"
},
{
  number: 55,
question: "In which movie is the Holy Hand Grenade of Antioch a secret weapon?",
answers: {
  a: "Monty Python Jabberwocky",
  b: "Monty Python and the Holy Grail",
  c: "Monty Python Life of Brian",
  d: "Mel Brooks´ History of the World"
},
correctAnswer: "b"
},
{
  number: 56,
question: "Which alternative calendar to our Gregorian one begins in 622?",
answers: {
  a: "Chinese",
  b: "Jewish",
  c: "Islamic",
  d: "Julian"
},
correctAnswer: "b"
},
{
  number: 57,
question: "What are the Moai?",
answers: {
  a: "South American extinct giant lamas",
  b: "Australian aborigines",
  c: "Giant-headed statues on Easter Island",
  d: "A tribe in Gambia"
},
correctAnswer: "b"
},
{
  number: 58,
question: "Which famous actor was known as ´Little Spartacus´ at school?",
answers: {
  a: "Humphrey Bogart",
  b: "Michael Douglas",
  c: "Al Pacino",
  d: "Brad Pitt"
},
correctAnswer: "b"
},

{
  number: 59,
question: "How many bones are there in the human body?",
answers: {
  a: "32",
  b: "178",
  c: "206",
  d: "243"
},
correctAnswer: "c"
},
{
  number: 60,
question: "What was the final battle Napoleon fought in?",
answers: {
  a: "St.Petersburg",
  b: "Leipzig",
  c: "Waterloo",
  d: "Straßburg"
},
correctAnswer: "c"
},

];

*/









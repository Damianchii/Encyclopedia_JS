// Ekcyklopednia JavaScript // 
// Najlepiej wyszukiwac za pomocą Ctrl+F

//Pobieranie elementow z html

// Zwraca pierwszy pasujacy element, w nawiasach podajemy element tak jak nazywamy go w CSS np(div, .main, span)
 const pobieranieElementu = document.querySelector('#main');

// Zwaraca wszystkie pasujące elementy, działa tak samo jak jak querySelektor
const pobieranieWieluElementow = document.querySelectorAll('li');

// Zwraca element po nazwie ID
const pobieranieElementuID = document.getElementById("name");

// Zwraca wszyskie elementy o określonej nazwie Class
const pobieranieElementuClass = document.getElementsByClassName("names");

// Zwraca wszystkie elementy po tagu w postaci HTML Collection np(ul, li, a), mozna tez odwolac sie bezposrednio do danego elementu i pobrac z niego elementy np.(z ul elemnty li),
// const pobieranieElementuTag = ul.getElementsByTagName("li");
const pobieranieElementuTag2 = document.getElementsByTagName("li");

// Description: querySelectionAll() zwraca elementy w postaci NodeList natomiast getElementsByTagName() zwraca HTMLColllection, roznia sie one tym ze HTML Collection nie pozwala uzywac na sobie forEach() oraz tym ze HTMl Collection samo sie zaktualizuje i bedzie pokazywalo rzeczywista ilosc elementow natomiast NodeList zwraca wartosc z momentu wywolania querySelectorAll()

// DOM Manipulation

// Tworzenie elementow

// Tworzy i zwraca element typu podanego w nawiasach (div, p, span);
const div = document.createElement('div');
const span = document.createElement('span');

// Dodawanie elementow do DOM

// Dodaje element oraz string podany w nawisach do elementu strony jako ostatni element
document.body.append("napis",div,span);

// Robi to samo co append lecz nie dodaje stringa i nie mozna dodawac kilku rzeczy po przecinku 
document.body.appendChild(div);

// Modyfikacja lub dodawanie zawartosci do elemntow

// Dodaje tekst i elementy html 
div.innerHTML = "<p>red</p>";

// Dodaje tekst jest wspierany przez wiekszosc przegladarek i warto go uzywac niz innertext, ponadto textContent zwraca wszyskie przerwy itd w przeciwienstwie do innerText
span.textContent = "red";
span.innerText = "red";

// Usuwanie elementow i tekstu
div.remove();
span.textContent = "";

// Modyfikowanie atrybutów

const ul = document.querySelector("ul");
const name1 = document.querySelector(".name");

// Zwraca zawartosc atrybutu
ul.getAttribute('title'); // nice 
name1.getAttribute("class"); // name 

// Dodawanie id oraz klasy
name1.id = "idName";
name1.classList = "className";

// Usuwanie atrybutu z elementu
name1.removeAttribute("class");

// Atrybuty Data
// Piszemy data-(nazwa)="zawartosc"

// Zwraca zawartosc atrybutu  data name 
name1.dataset.name; // "damian"

// Zmiana zawartosci atrybutu
name1.dataset.name = "Julcia";

// Dodawanie , usuwanie , toggle - jesli jest usuwa, jesli nie ma dodaje 
name1.classList.add("me");
name1.classList.remove("me");
name1.classList.toggle("me", true); // wartosc true albo false po przecinku stwierdza czy dodac czy usunac classe

// Dodawanie stylow css w js
name1.textContent = "red";
name1.style.color = "red"; 

// Tablice, Array
const exampleTable = ["apple","banana","orange","avocado"]; // deklaracja tablicy
exampleTable[1]; // odwolanie sie do elementu podanego w klamrach
exampleTable.length; // zwraca ile elementow posiada tablica
let copyExampleTable = [...exampleTable]; // kopiowanie tablicy

exampleTable.push("lemon"); // dodawanie elementu do tablicy, zwraca ile elementow jest po dodaniu tego elementu
exampleTable.pop(); // usuwa ostatni element z tablicy, zwraca usuniety element
exampleTable.shift(); // usuwa pierwszy element z tablicy, zwraca usuniety element
exampleTable.unshift("Strawberry"); // dodaje element na poczatku tablicy, zwraca ile jest elemntow po dodaniu
let indexExample = exampleTable.indexOf("Strawberry"); // zwaraca index danego elementu 
exampleTable.splice(indexExample,1); // pierwsza wartosc to od jakiego elementu usunac(lacznie z nim), drugie ilosc elementow , zwraca jakie lementy usunelismy w postaci tablicy
exampleTable.slice(1,3) // zwraca tablice od indeksu 1 do 3 (bez 3), czyli zwroci 2 itemy, ponadto nie zmienia nic w tablicy oryginalenj

//tablice zagnizdzone 
const nestedTable = [[1,2],[2,3]];
//odwolanie do tablicy zagnizdzonej
nestedTable[0][1]; // zwroci 2

delete exampleTable[1]; // usunie element o takim indeksie i w jego miejsce wstawi "empty", zwraca true


//Metody
'hello'.toUpperCase(); // powieksa litery
'HELLO'.toLowerCase(); // pomniejsza litery

'Hello'.startsWith('H'); // zwraca flase albo true jesli to co znmajude sie po lewej stronie zaczyna sie od litery podajnej w nawiasach

"    usuwa spacje    ".trim(); // usuwa spacje oprocz tej w srodku

//Iteracje na tablicach

//.forEach() - zawsze zwroci undefined
exampleTable.forEach((item,index) => {
  console.log(item,index);
}); // Petla na tablicy przez forEach

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach( fruit => {
  console.log(`I want to eat a ${fruit}`)
})

//.map() - jest bardzo podobna do forEach natomiast map() zwraca nowa tablice! , najlepiej ja przypisac do jakies zmiennej 

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(number =>{
  return number/100;
})// smallNumbers = [1,2,3,4,5]

//.filter() - zwraca nowa tablice, natomiast .fliter() zwraca przefiltrowana mape przez funkcje w nawiasach

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
const shortWords = words.filter(word => {
  return word.length < 6;
}); // shortWords = [ 'chair', 'music', 'brick', 'pen', 'door' ]

//.findIndex() - zwraca index pierwszego znalezionego elementu, zwraca go gdy funkcja zwroci true, najlepiej jest go przypisac do zmienniej ktora bedzie przechowywala ten indeks, jesli nie bedzie takiego elementu w tablicy zwroci -1(false)

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal =>{
  return animal === "elephant"
}) // 7


//.reduce() - zwraca niezmieniona tablice, uzywamy ja wtedy kiedy chcemy np. zmienic tablice na pojedyncza wartosc przypisana do zmiennej

const array = ["D","A","M","I","A","N"];

const newText = array.reduce((prev, next) => `${prev}${next}`);
console.log(newText) //DAMIAN

//przyklad z podaniem wartosci poczatkowej

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator,currentValue) =>{
return accumulator + currentValue
},10);

console.log(newSum) // 26 = 10+1+3+5+7

//.some() - metoda ta zwraca prawdę, jeżeli chociaż jeden element tablicy spełnia warunek przekazany w funkcji zwrotnej. Zwraca fałsz, jeśli żaden z elementów tablicy nie spełnia warunku

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some(word => {
  return word.length < 6;
})); // true

//.every() - metoda ta zwraca prawdę, jeśli wszystkie elementy tablicy spełniają warunek przekazany w funkcji zwrotnej. Jeśli chociaż jeden element nie spełnia warunku, zwracany jest fałsz

const words = ['unique', 'uncan', 'piqu', 'oxym', 'guis'];

console.log(words.every(word => {
  return word.length < 6;
})); // true



// Objects

//Math
Math.random(); // losuje cyfry z przedzialu od 0 do 1
Math.floor(Math.random()); // zaokragla do liczny calkowitej, zaookragla w dol np(43.7 = 43, 55.99 = 55 )
Math.ceil(Math.random()); // zaokragla do liczny calkowitej, zaookragla w gore np(43.2 = 44, 55.11 = 56 )

//Number
Number.isInteger(2011); // sprawdza czy licza jest calkowiata , zwaraca false albo true


//Funkcje

//standardowa budowa funkcji
function greetWorld(){
    console.log("Hello");
}

//z aprametrami
function greetWorld(width,height){
    return width * height
}

//wywolanie funkcji
greetWorld();
greetWorld(width,height);

//funkcjia z domsylbym parametrem, dostepne od ES6
function hello(name = "stranger"){
    return name = "Leo"
}

//budowa fukncji przez zmienna
const calculateArea = function(width,height){
    const area = width*height;
    return area
}

//budowa funkcji strzalkowej, dostepne od ES6 
const sumNumbers = number => number + number;
//taki sam efekt uzyskamy
const sumNumber2 = number => {
    const sum = number + number;
    return sum
}

//mozemy przydzielac fukcje do innych zmiennych
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 10; i++) {
    if ( (2 + 2) !== 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;

//jakbysmy zapomnieli nazwy mozemy odwolac sie do wlasciwosci name 
console.log(is2p2.name) // checkThatTwoPlusTwoEqualsFourAMillionTimes

//Pętle 
//Petla for wykonuje sie tyle razy ile zadeklarujemy w nawiasach 
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

for(let i = 0; i < groceryList.length; i++){
    console.log(groceryList[i])
}

//break - zatrzymuje petle
for(let i = 0; i < groceryList.length; i++){
    if(groceryList[i] === 'bananas'){
        break; // zatrzymuje dzialanie petli 
    }
}

//zagniezdzenie petli w drugiej
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
}// zwroci jakie numery sa takie same 

//Pętla while, wykonuje sie do momentu az while() == false, moze sie ani razu nie wykonac jesli odrazu bedzie false
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;

while(currentCard !== 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard)
}

//Pętla do...while, robi to samo co while, tylko ze nawet jesli do...while bedzie == false to przynajmniej raz sie wykona 
const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 
 
// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);
 
// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};
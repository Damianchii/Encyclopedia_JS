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

// Tablice
const exampleTable = ["imie","nazwisko"]; // deklaracja tablicy
exampleTable[1]; // odwolanie sie do elementu podanego w klamrach
exampleTable.length; // zwraca ile elementow posiada tablica

exampleTable.push("damian"); // dodawanie elementu do tablicy, zwraca ile elementow jest po dodaniu tego elementu
exampleTable.shift("damian"); // usuwa element z tablicy, zwraca usuniety element

delete exampleTable[1]; // usunie element o takim indeksie i w jego miejsce wstawi "empty", zwraca true


//Metody
'hello'.toUpperCase(); // powieksa litery
'HELLO'.toLowerCase(); // pomniejsza litery

'Hello'.startsWith('H'); // zwraca flase albo true jesli to co znmajude sie po lewej stronie zaczyna sie od litery podajnej w nawiasach

"    usuwa spacje    ".trim(); // usuwa spacje oprocz tej w srodku


// Objects

//Math
Math.random(); // losuje cyfry z przedzialu od 0 do 1
Math.floor(Math.random()); // zaokragla do liczny calkowitej, zaookragla w dol np(43.7 = 43, 55.99 = 55 )
Math.ceil(Math.random()); // zaokragla do liczny calkowitej, zaookragla w gore np(43.2 = 44, 55.11 = 56 )

//Number
Number.isInteger(2011); // sprawdza czy licza jest calkowiata , zwaraca false albo true

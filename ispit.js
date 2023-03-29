/*
//1 (3 BODA)
//Napisi funkciju koja ispisuje parne brojeve od 0 do 100 (ukljucujuci 100)
function ispisBrojeva() {
    for (let i = 0; i <= 100; i++)(i) => {
        return (i)
    }
    console.log(i);
}
console.log(ispisBrojeva);
//console.log(i);



//2 (3 BODA)
//Napisi funkciju koja koristi switch selekciju za pretvaranje numerickog unosa u dan u tjednu. Za neispravan unos ispisi prikladnu poruku.
function daniUtijednu() {
    let dan = 1;
}
console.log(daniUtijednu);

//INPUT: 1; OUTPUT: "Ponedjeljak";
//INPUT: 5; OUTPUT: "Petak"; 
*/

//3 (4 BODA)
//Napisi funkciju koja okrece uneseni string i broji charactere ne uzimajuci u obzir prazna mjesta (eng. whitespaces)
//INPUT: "Pisanje zadataka nije jednostavan posao";
//OUTPUT: ("oasop navatsondej ejin akatadaz ejnasiP", 35)



//4 (4 BODA)
//Napisi funkciju koja vraca najkraci kljuc u danom objektu
const somePeople = {
    Donald: "Knuth",
    Bjarne: "Stroustrup",
    Ada: "Lovelace",
    Kent: "Beck",
    Martin: "Fowler",
    Erich: "Gamma"
}

//INPUT: somePeople
//OUTPUT: "Ada"
/*
//5 (4 BODA)
//Napisi funkciju u obliku function expressiona koja vraca proste brojeve
brojevi[3,4,5,8,11];
function prostiBrojevi() {
    for (let broj in brojevi) {
        if (broj%2!=0)(broj)=>{
            return(broj)}
        }
        console.log(broj)
}
*/
//INPUT: [3, 4, 5, 8, 11]
//OUTPUT: [3, 5, 11]

//ZAMJENA ZA 5 (4 BODA)
//Napisi funkciju u obliku arrow functiona koja kvadrira i vraca dane inpute
const nekiBrojevi = [2, 4, 6, 0, 1];
function kvadriraj() {

}
//INPUT: [2, 4, 6, 0, 1]
//OUTPUT: [4, 16, 36, 0, 1]

//6 (4 BODA)
//Napisi funkciju koja vraca sve dogadaje koji su se dogodili prije od vrijednosti iz ulaznog parametra
const someEvents = [
    {
        eventName: "Izasla je Java",
        eventYear: 1995,
    },
    {
        eventName: "Izasao je C#",
        eventYear: 2000,
    },
    {
        eventName: "Izasao je Python",
        eventYear: 1991,
    },
    {
        eventName: "Izasao je C++",
        eventYear: 1985,
    },
    {
        eventName: "Izasao je JavaScript",
        eventYear: 1995,
    },
];

function eventPrije() {
    let godina = 1992;
    for (let event in eventPrije) {
        if (event.eventYear < godina)
            return (event.eventYear)
    }
}
console.log(eventPrije);
//INPUT: (someEvents, 1992)
//OUTPUT: [{eventName: "Izasao je Python", eventYear: 1991}, {eventName: "Izasao je C++", eventYear: 1985}]*/
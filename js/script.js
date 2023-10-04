/*Zadatak 1

Zadate su tri promenljive x = 3, y = -4 i z = x - y

a ) Napisati if petlju tako da :
	ako je zbir prve dve promenljive pozitivan broj ispisati "Zbir prve dve je pozitivan broj ", 
	u suprotnom ako je razlika prve dve promenljive pozitivan broj ispisati "Razlika prve dve je pozitivan broj"
*/


x = 3;
y = -4;
z = x - y;

if(x+y >0){
    console.log("Zbir prve dve je pozitivan broj.")
}else if(x-y>0){
    console.log("Zbir prve dve je pozitivan broj.")
}
/*
b ) Napisati if petlju tako da :
	ako je proizvod prve i trece varijable broj veci od 15 i ako je druga varijabla negativna
	ispisati "Proizvod prve i trece je veci od 15 i druga varijable je negativna"
	u suprotnom ako je proizvod prve i trece varijable broj veci od 15 ili ako je druga varijabla pozitivna
	ispisati "Proizvod prve i trece je broj veci od 15 ili je druga varijabla pozitivna"*/


x = 3;
y = -4;
z = x - y;

if(x*z>15 && y<0){
    console.log("Proizvod prve i trece je veci od 15 i druga varijable je negativna")
}
else if(x*z>15 || y>0){
    console.log("Proizvod prve i trece je broj veci od 15 ili je druga varijabla pozitivna")
}

/*Zadatak 2

Napisati switch petlju tako da ako je zadata vrednost izmedju 1 i 5 ispisati:
"Zadata vrednost je izmedju 1 i 5 i zadata vrednost je (X)" Napomena (X) je pomenuta vrednost
Ukoliko je zadata vrednost izmedju 8 i 10 ispisati:
"Zadata vrednost je izmedju 8 i 10" 
I u suprotnom ispisati zadata vrednost nije u navedenom opsegu
*/

var vrednost = 5;

switch (vrednost) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    console.log("Zadata vrednost je izmedju 1 i 5.");
        break;
    case 8:
    case 9:
    case 10:
        console.log("Zadata vrednost je izmedju 8 i 10.");
        break;
    default:
        console.log("Zadata vrednost nije u navedenom opsegu.");
}

/*Zadatak 3

Napisati while petlju tako da se izvrsava sve dok zbir promenljivih x i y ne postane pozitivan broj
Napomena x = -7, y = 1, u while petlji u svakoj iteraciji uvecavati y za 1*/

var x = -7;
var y = 1;

while(x + y <= 0){
    y++
}
console.log("Zbir x i y postao je pozitivan:", x + y);

/*Zadatak 4

Napisati for petlju tako da broji od 1 do 10
i da se ispisuju samo brojevi koji su deljivi sa 2*/

var i = 0;

for(var i = 0; i<=10; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

/*Zadatak 5 

Napisati for petlju koja prolazi kroz zadati niz i ispisuje elemente niza
var niz = ["saab", "volvo", "mercedes"];*/

var niz = ["saab", "volvo", "mercedes"];

var i = 0;

for(var i = 0; i < niz.length; i++){

    console.log(niz[i]);
}

/*Zadatak 6

Napisati for petlju koja prolazi kroz zadati niz i ispisuje ga
ali prekida sa izvrsavanjem ukoliko naidje na element "volvo"
var niz = ["saab", "volvo", "mercedes"];*/

var niz = ["saab", "volvo", "mercedes"];

for(var i = 0; i < niz.length; i++){
    if(niz[i] == 'volvo'){
         break;
         }
         console.log(niz[i]);
}



/*Zadatak 7

Napisati for petlju koja prolazi kroz zadati niz i ispisuje ga
ali preskace se ispisivanje ukoliko naidje na element "volvo"
var niz = ["saab", "volvo", "mercedes"];*/

var niz = ["saab", "volvo", "mercedes"];

for(var i = 0; i < niz.length; i++){
    if(niz[i] == 'volvo'){
         continue;
         }
         console.log(niz[i]);
}

/*Zadatak 8
Napisati program koji ispisuje one brojeve između 1 i 20 koji su deljivi sa 3.*/

var i = 0;

for( var i = 1; i <= 20; i++){
    if(i % 3 == 0){
        console.log(i);
    }
}

/*Zadatak 9
Napisati program koji računa srednju vrednost niza celih brojeva.*/

var niz = [2, 5, 12, 13, 18, 24];
var i = 0;
var suma = 0;
var srVrednost = 0;

for(i = 0; i<niz.length; i++){
    suma = suma + niz[i];

    srVrednost=suma/niz.length;
}
console.log("Srednja vrednost je ", srVrednost);

/*Zadatak 10
Napisati program koji utvrđuje da li se u datom nizu celih brojeva nalazi broj 5.*/

var niz=[1, 5, 7, 12, 36];

var i = 0;

for(i=0; i<niz.length; i++){
    if(niz[i]==5){
        console.log('U datom nizu se nalazi broj 5.');
        break;
    }
}
if(i === niz.length){
    console.log("Ne postoji broj 5 u nizu.")
}

/*Zadatak 11
Napisati program koji određuje da li je niz simetričan. Primeri simetričnih nizova:
[2, 7, 9, 9, 7, 2]
[5 7 3 3 7 5]
*/

var niz = [2, 3, 9, 7, 2];
var i = 0;

for(i = 0; i <niz.length; i++){
    if(niz[i] != niz[niz.length-1-i]){
        console.log("Niz nije simetrican.")
        break;
    }
}
if(i===(niz.length)){
    console.log("Niz je simetrican.")
}

/*Zadatak 13
Napisati program koji pronalazi najveci element u nizu decimalnih brojeva.
*/

var niz=[11.5, 8.5, 12.1, 45.6];

var najveciBroj = niz[0];

for(i=1; i<niz.length; i++){
    if(niz[i] > najveciBroj){
        najveciBroj = niz[i];
    }
}
console.log("Najveci broj u nizu je: ", najveciBroj);

/*Zadatak 14
Napisati program koji pronalazi najmanji element u nizu decimalnih brojeva.
*/
var niz=[11.5, 8.5, 12.1, 45.6];

var najmanjiBroj = niz[0];

for(i=1; i<niz.length; i++){
    if(niz[i] < najmanjiBroj){
        najmanjiBroj = niz[i];
    }
}
console.log("Najmanji broj u nizu je: ", najmanjiBroj);







let imgEl = document.querySelector("img");
let h1El = document.querySelector("h1");

imgEl.addEventListener("click", skrivAntall);  // Legg til en event listener på bildet

let antallTrykk = 0;



let dobbelKlikkAktivert = true;  // Standard tilstand er at dobbeltklikk ikke er aktivert

// Funksjon for å aktivere/deaktivere dobbeltklikk
function toggleDobbelKlikk(aktivert) {
    dobbelKlikkAktivert = aktivert;  // Setter om dobbeltklikk skal være aktivert eller ikke
    console.log("Dobbel klikk aktivert: " + dobbelKlikkAktivert);
}




function skrivAntall(){
    let innholdEl = document.querySelector(".randomMelding");
    let innholdEl2 = document.querySelector(".randomMelding2");




    //øke antall klikk:

    // Før 100 klikk, øker vi bare med 1 per klikk
    if (antallTrykk < 100) {
        antallTrykk++;  // Øk med 1 før 100 klikk
    } 
    // Etter 100 klikk, hvis dobbeltklikk er aktivert, øker vi med 2 per klikk
    else if (dobbelKlikkAktivert) {
        antallTrykk += 2;  // Øk med 2 etter 100 klikk hvis dobbeltklikk er aktivert
    }
    else {
        antallTrykk++;  // Øk med 1 etter 100 klikk hvis dobbeltklikk ikke er aktivert
    }


    //øke antall klikk igjen etter 500 klikk:

    if (antallTrykk < 1002) {
    }
    else if (dobbelKlikkAktivert) {
        antallTrykk += 2;  // Øk med 2 igjen etter 500 klikk hvis dobbeltklikk er aktivert
    }


    //øke antall klikk igjen etter 100 000 klikk:

    if (antallTrykk < 10004) {
    }
    else if (dobbelKlikkAktivert) {
        antallTrykk += 4;  // Øk med 2 igjen etter 100000 klikk hvis dobbeltklikk er aktivert
    }


    //øke antall klikk igjen etter 1000 000 klikk:

    if (antallTrykk < 100008) {
    }
    else if (dobbelKlikkAktivert) {
        antallTrykk += 8;  // Øk med 2 igjen etter 1000000 klikk hvis dobbeltklikk er aktivert
    }


    if (antallTrykk < 1000016) {
    }
    else if (dobbelKlikkAktivert) {
        antallTrykk += 112;  // Øk med 128 igjen etter 5000000 klikk hvis dobbeltklikk er aktivert
    }
    


    
    h1El.innerHTML = "Cookie Clicker Counter: " + antallTrykk + ".";  // Oppdaterer innholdet i h1
    console.log(antallTrykk);

    if (antallTrykk == 100) {
        console.log("text added to '.randomMelding'");
        innholdEl.innerHTML += " Wow very nice, now you get a 2x Booster! Reach 1000 clicks for another.";  //legger til i tekst i .randomMelding.
    }
    else if (antallTrykk == 1000) {
        console.log("text added to '.randomMelding2'");  //legger til enda en tekst i .randomMelding2.
        innholdEl2.innerHTML += " You got another 2x Booster! Reach 10000 clicks for another.";
    }
    else if (antallTrykk == 10000) {
        console.log("text added to '.randomMelding3"); //legger til enda en tekst men i .randomMelding3.
        innholdEl2.innerHTML += " You got another 2x Booster! Reach 100 000 clicks for another.";
    }
    else if (antallTrykk == 100000) {
        console.log("text added to '.randomMelding4"); //legger til enda en tekst men i .randomMelding4.
        innholdEl2.innerHTML += " You got another 2x Booster! Congrats, reach 1000 000 clicks for 8x Booster.";
    }
    else if (antallTrykk == 1000000) {
        console.log("text added to '.randomMelding5"); //legger til enda en tekst men i .randomMelding5.
        innholdEl2.innerHTML += "You got a 8x Booster. You've won the game! Or have you??";
    }
}













// else if (antallTrykk == 20) {
    //    let findusEl = document.createElement("div");
      //  findusEl.id = "ettNyttElement";
        //findusEl.innerHTML += "<p> 20 clicks </p>";
   // }
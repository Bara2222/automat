document.addEventListener("DOMContentLoaded", function() {
    const herniCisla = document.getElementById("statistiky");
    herniCisla.innerText = `STAV TVÉHO KONTA: ${stavKonta}`;
});

document.getElementById("hraciButton").addEventListener("click", function() {
    zmenSmajlika(9);
    odeberCenu();
    kontrolaKonecHry();
});


let stavKonta = 2000;
const cenaSpinu = 200;
const  vyhra = 5000;
const cenaUtechy = 500;

function odeberCenu() {
    stavKonta -= cenaSpinu;
    const herniCisla = document.getElementById("statistiky");
    herniCisla.innerText = `ZŮSTÁVÁ: ${stavKonta}`;
}

function zmenSmajlika(pocetZmen) {
    let intervalId = setInterval(function() {
        hazardniHra1();
        hazardniHra2();
        hazardniHra3();

        pocetZmen--;

        if (pocetZmen === 0) {
            clearInterval(intervalId);

           
            if (hazardniHra1() == hazardniHra2() && hazardniHra2() == hazardniHra3() && hazardniHra1() == hazardniHra3()) {
                zobrazVyhru();
                stavKonta += vyhra;
                konecHry();
            } else if (hazardniHra1() == hazardniHra2() || hazardniHra2() == hazardniHra3() || hazardniHra1() == hazardniHra3()) {
                herniCisla.innerText = `VYHRAL JSI CENU UTĚCHY: +${cenaUtechy}`;
                stavKonta += cenaUtechy;
            }
        }
    }, 100);
}

function hazardniHra1() {
    let textDiv1 = document.getElementById("textDiv1");
    let nahodnySmajlik1 = generujNahodneEmoji();
    textDiv1.innerText = nahodnySmajlik1;
    return nahodnySmajlik1;
}

function hazardniHra2() {
    let textDiv2 = document.getElementById("textDiv2");
    let nahodnySmajlik2 = generujNahodneEmoji();
    textDiv2.innerText = nahodnySmajlik2;
    return nahodnySmajlik2;
}

function hazardniHra3() {
    let textDiv3 = document.getElementById("textDiv3");
    let nahodnySmajlik3 = generujNahodneEmoji();
    textDiv3.innerText = nahodnySmajlik3;
    return nahodnySmajlik3;
}

function generujNahodneEmoji() {
    var smajlikPole = [":D", ":P", "xD", "B)", ":J", ":S", ":O"];
    var nahodnyIndex = Math.floor(Math.random() * smajlikPole.length);
    return smajlikPole[nahodnyIndex];
}





function zobrazVyhru() {
    const vyhraDiv = document.createElement("div");
    vyhraDiv.innerHTML = "VÝHRA";
    vyhraDiv.style.fontSize = "100%";
    vyhraDiv.style.position = "absolute";
    vyhraDiv.style.top = "50%";
    vyhraDiv.style.left = "50%";
    vyhraDiv.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(vyhraDiv);
}

function kontrolaKonecHry() {
    if (stavKonta <= 0) {
        const konecHryDiv = document.createElement("div");
        konecHryDiv.innerHTML = "KONEC HRY";
        konecHryDiv.style.fontSize = "500%";
        konecHryDiv.style.color = "white";
        konecHryDiv.style.backgroundColor = "black";
        konecHryDiv.style.fontFamily = "fantasy";
        konecHryDiv.style.position = "absolute";
        konecHryDiv.style.top = "50%";
        konecHryDiv.style.left = "50%";
        konecHryDiv.style.transform = "translate(-50%, -50%)";
        document.body.appendChild(konecHryDiv);

        const hraciButton = document.getElementById("hraciButton");
        hraciButton.disabled = true;
        konecHry();
    }
}
function konecHry() {

}
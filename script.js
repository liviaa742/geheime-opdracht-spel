const opdrachten = [
    "Vraag iemand wat zijn favoriete vakantieland is.",
    "Gebruik drie keer het woord 'eigenlijk' in een gesprek.",
    "Neem een slok drinken nadat iemand anders dat doet.",
    "Stel een vraag aan degene die tegenover je zit.",
    "Zeg een keer: 'Dat is wel grappig eigenlijk.'",
    "Noem ongemerkt iemands naam tijdens een gesprek.",
    "Raak heel even je neus aan.",
    "Leg ongemerkt je bestek anders neer.",
    "Kijk vijf seconden uit het raam tijdens een gesprek.",
    "Vraag of iemand nog iets wil drinken."
];
function startSpel() {

    let spelers = [];

    for(let i = 1; i <= 6; i++){

        let naam = document.getElementById("naam" + i).value;

        if(naam != ""){
            spelers.push(naam);
        }

    }

    if(spelers.length < 3){
        alert("Vul minstens 3 spelers in.");
        return;
    }

let opdracht = opdrachten[Math.floor(Math.random() * opdrachten.length)];

alert(opdracht);

}

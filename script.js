const opdrachten = [
    "Vraag iemand wat zijn favoriete vakantieland is.",
    "Gebruik drie keer het woord 'eigenlijk' in een gesprek.",
    "Neem een slok drinken nadat iemand anders dat doet. en doe dat de hele tijd.",
    "Stel een vraag aan degene die tegenover je zit.",
    "Zeg een keer: 'Dat is wel grappig eigenlijk.'",
    "Noem ongemerkt iemands naam tijdens een gesprek.",
    "Raak ongemerkt tien seconden lang je neus aan.",
    "Leg ongemerkt je bestek anders neer en laat het zo.",
    "Kijk tien seconden uit het raam tijdens een gesprek.",
    "Vertel een grap aan iedereen."
    "Breng een toast uit."
];
function startSpel(){

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

    // Kies één geheime speler
    let geheimeSpeler = Math.floor(Math.random() * spelers.length);

    // Kies één willekeurige opdracht
    let opdracht = opdrachten[Math.floor(Math.random() * opdrachten.length)];

    // Laat iedere speler om de beurt kijken
    for(let i = 0; i < spelers.length; i++){

        alert(spelers[i] + ", pak de telefoon en zorg dat niemand meekijkt.");

        if(i === geheimeSpeler){
            alert("🎯 Jouw geheime opdracht:\n\n" + opdracht);
        }else{
            alert("🕵️ Je hebt geen opdracht.\n\nOntmasker tijdens het eten wie de opdracht heeft!");
        }

        alert("Geef de telefoon door aan de volgende speler.");
    }

    alert("Iedereen is klaar! Veel succes 😈");
}

let spelers = [];
let huidigeSpeler = 0;
let geheimeSpeler = 0;
let opdracht = "";
let moeilijkheid = "normaal";
let stemmen = [];
let huidigeStemmer = 0;
let scores = [];

toonStart();

function toonStart(){

    document.getElementById("app").innerHTML = `
        <div class="card">

            <h1>🎭 Geheime Opdracht</h1>

            <p>Vul de namen van de spelers in.</p>

            <input id="naam1" placeholder="Speler 1">
            <input id="naam2" placeholder="Speler 2">
            <input id="naam3" placeholder="Speler 3">
            <input id="naam4" placeholder="Speler 4">
            <input id="naam5" placeholder="Speler 5">
            <input id="naam6" placeholder="Speler 6">

          <p><b>Moeilijkheid</b></p>

<button id="btnMakkelijk" onclick="kiesMoeilijkheid('makkelijk')">
🟢 Makkelijk
</button>

<button id="btnNormaal" onclick="kiesMoeilijkheid('normaal')">
🟠 Normaal
</button>

<button id="btnChaos" onclick="kiesMoeilijkheid('chaos')">
🔴 Chaos 😈
</button>

<button onclick="startSpel()">
Start spel
</button>

        </div>
    `;

}

function startSpel(){

    spelers = [];
    stemmen = [];
    huidigeStemmer = 0;
   
    for(let i=1;i<=6;i++){

        let naam = document.getElementById("naam"+i).value.trim();

        if(naam!=""){
            spelers.push(naam);
        }

    }

    if(spelers.length<3){
        alert("Vul minstens 3 spelers in.");
        return;
    }
    if(scores.length !== spelers.length){
    scores = new Array(spelers.length).fill(0);
}

    geheimeSpeler = Math.floor(Math.random()*spelers.length);

    let lijst = opdrachten[moeilijkheid];

opdracht = lijst[Math.floor(Math.random() * lijst.length)];

    huidigeSpeler = 0;

    toonVolgendeSpeler();

}

function toonVolgendeSpeler(){

    document.getElementById("app").innerHTML = `
        <div class="card">

            <div class="big">📱</div>

            <h1>Geef de telefoon aan</h1>

            <h2>${spelers[huidigeSpeler]}</h2>

            <button onclick="toonKaart()">
                Ik ben ${spelers[huidigeSpeler]}
            </button>

        </div>
    `;

}

function toonKaart(){

    document.getElementById("app").innerHTML = `

        <div class="card">

            <div class="big">🤫</div>

            <h1>Zorg dat niemand meekijkt</h1>

            <p>Druk pas op de knop als alleen jij het scherm kunt zien.</p>

            <button onclick="toonOpdracht()">
                Toon mijn kaart
            </button>

        </div>

    `;

}
function toonOpdracht(){

    if(huidigeSpeler === geheimeSpeler){

        document.getElementById("app").innerHTML = `

            <div class="card">

                <div class="big">🎯</div>

                <h1>Jouw geheime opdracht</h1>

                <p>${opdracht}</p>

                <button onclick="volgendeSpeler()">
                    Ik heb het gelezen
                </button>

            </div>

        `;

    }else{

        document.getElementById("app").innerHTML = `

            <div class="card">

                <div class="big">🕵️</div>

                <h1>Je hebt geen opdracht</h1>

                <p>Ontmasker tijdens het eten wie de opdracht heeft.</p>

                <button onclick="volgendeSpeler()">
                    Ik heb het gelezen
                </button>

            </div>

        `;

    }

}

  function volgendeSpeler(){

    huidigeSpeler++;

if(huidigeSpeler >= spelers.length){

    document.getElementById("app").innerHTML = `
        <div class="card">

            <div class="big">🍽️</div>

            <h1>Iedereen is klaar!</h1>

            <p>Veel succes tijdens het eten.</p>

            <button onclick="startStemronde()">
                Start stemronde
            </button>

        </div>
    `;

    return;

}

    toonVolgendeSpeler();

}

function kiesMoeilijkheid(keuze){

    moeilijkheid = keuze;

    document.getElementById("btnMakkelijk").className = "";
    document.getElementById("btnNormaal").className = "";
    document.getElementById("btnChaos").className = "";

    if(keuze === "makkelijk"){
        document.getElementById("btnMakkelijk").className = "selected";
    }

    if(keuze === "normaal"){
        document.getElementById("btnNormaal").className = "selected";
    }

    if(keuze === "chaos"){
        document.getElementById("btnChaos").className = "selected-chaos";
    }

}

function startStemronde(){

    huidigeStemmer = 0;

    toonStemScherm();

}
function toonStemScherm(){

    let opties = "";

    for(let i = 0; i < spelers.length; i++){

        opties += `
            <button onclick="brengStemUit(${i})">
                ${spelers[i]}
            </button>
        `;

    }

    document.getElementById("app").innerHTML = `

        <div class="card">

            <div class="big">🗳️</div>

            <h1>${spelers[huidigeStemmer]}, wie denk jij dat de geheime speler was?</h1>

            ${opties}

        </div>

    `;

}
function brengStemUit(gekozenSpeler){

    stemmen.push(gekozenSpeler);

    huidigeStemmer++;

    if(huidigeStemmer >= spelers.length){

        toonUitslag();
        return;

    }

    toonStemScherm();

}
function toonUitslag(){

    let resultaat = "";
    let foutGeraden = 0;

    for(let i = 0; i < spelers.length; i++){

        if(stemmen[i] === geheimeSpeler){

            if(i !== geheimeSpeler){
                resultaat += `<p>✅ ${spelers[i]} had het goed! (+3)</p>`;
                scores[i] += 3;
            }

        }else{

            resultaat += `<p>❌ ${spelers[i]} had het fout.</p>`;
            foutGeraden++;

        }

    }

    scores[geheimeSpeler] += foutGeraden;

    resultaat += `
        <p><br>🎯 ${spelers[geheimeSpeler]} krijgt <b>+${foutGeraden} punten</b>, omdat ${foutGeraden} speler(s) hem niet hebben ontmaskerd.</p>
    `;

    let scorebord = "";

    for(let i = 0; i < spelers.length; i++){
        scorebord += `<p><b>${spelers[i]}</b>: ${scores[i]} punten</p>`;
    }

    document.getElementById("app").innerHTML = `
        <div class="card">

            <div class="big">🏆</div>

            <h1>Uitslag</h1>

            <h2>De geheime speler was:</h2>

            <h1>${spelers[geheimeSpeler]}</h1>

            ${resultaat}

            <hr>

            <h2>Scorebord</h2>

            ${scorebord}

            <button onclick="volgendeRonde()">
                Volgende ronde
            </button>

        </div>
    `;

}

function volgendeRonde(){

    stemmen = [];
    huidigeStemmer = 0;

    geheimeSpeler = Math.floor(Math.random() * spelers.length);

    let lijst = opdrachten[moeilijkheid];
    opdracht = lijst[Math.floor(Math.random() * lijst.length)];

    huidigeSpeler = 0;

    toonVolgendeSpeler();

}

    toonVolgendeSpeler();

}

let spelers = [];
let huidigeSpeler = 0;
let geheimeSpeler = 0;
let opdracht = "";

const opdrachten = [
    "TEMP"
];

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

            <button onclick="startSpel()">
                Start spel
            </button>

        </div>
    `;

}

function startSpel(){

    spelers = [];

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

    geheimeSpeler = Math.floor(Math.random()*spelers.length);

    opdracht = opdrachten[Math.floor(Math.random()*opdrachten.length)];

    huidigeSpeler = 0;

    toonVolgendeSpeler();

}

function toonVolgendeSpeler(){
function toonKaart(){

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

                <p>
                    Ontmasker tijdens het eten wie de opdracht heeft.
                </p>

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

                <div class="big">🥳</div>

                <h1>Iedereen is klaar!</h1>

                <p>Veel succes tijdens het eten 😈</p>

            </div>

        `;

        return;

    }

    toonVolgendeSpeler();

}
    document.getElementById("app").innerHTML=`

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

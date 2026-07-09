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

    alert("Spelers: " + spelers.join(", "));

}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function ZobrazNastaveni(){
    document.getElementById("main").className = "strana_off";
    document.getElementById("nastaveni_stranka").className = "strana_viditelna";
}

function Zpet(){
    document.getElementById("main").className = "strana_viditelna";
    document.getElementById("nastaveni_stranka").className = "strana_off";
}

function save(){
    let hodnota = document.getElementById("zadavatel_filmu").value

    if(hodnota === ""){
        document.getElementById("p").innerText = "Parametr nebyl zadán";
    }
    else{
        document.getElementById("text1").innerText = "Tvůj nejoblíbenější film: " + hodnota
        document.getElementById("p").innerText = "Parametr byl úspěšně uložen";
    }
}
var cognomi = ['Grassi', 'Chemello', 'Demo', 'Fabris', 'Romano']
var cognomeInserito = prompt('Inserisci il tuo cognome')
var cognomeMaiuscolo = cognomeInserito[0].toLocaleUpperCase() + (cognomeInserito.substring(1)).toLocaleLowerCase()
cognomi.push(cognomeMaiuscolo)
cognomi.sort()
var stampa = document.getElementById("output")
var posizione = document.getElementById("posizione")
for (let i = 0; i < cognomi.length; i++) {
    stampa.innerHTML += "<li>" + cognomi[i] + "</li>";
    if (cognomi[i] === cognomeMaiuscolo) {
        posizione.innerHTML += "Posizione nell'elenco: " + (i + 1)
    }
}



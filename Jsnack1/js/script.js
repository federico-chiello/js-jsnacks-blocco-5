// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.

// Viene creato un oggetto con due proprietà.
var palla = {
  'nome' : 'palla',
  'peso' : 10
};
// viene stampato l'oggetto prima della modifica.
console.log(palla);

// Viene chiesto all'utente di cambiare il peso della palla.
var pesoModificato = parseInt(prompt('Inserisci il peso della palla:'));
// primo metodo
palla["peso"] = pesoModificato;
// secondo metodo
// palla.peso = pesoModificato;

// viene stampato l'oggetto dopo la modifica.
console.log(palla);

// Creare un array che contiene 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

// Array contentente 10 oggetti (zucchine).
var zucchine = [
  {
    varietà : 'Zucchino nero di Milano',
    peso : 50,
    lunghezza: 30
  },
  {
    varietà : 'Zucchino romanesco',
    peso : 60,
    lunghezza: 45
  },
  {
    varietà : 'Zucchina lunga fiorentina',
    peso : 30,
    lunghezza: 50
  },
  {
    varietà : 'Zucchino siciliano',
    peso : 35,
    lunghezza: 25
  },
  {
    varietà : 'Zucchina striata di Napoli',
    peso : 60,
    lunghezza: 55
  },
  {
    varietà : 'Zucchina bianca triestina',
    peso : 45,
    lunghezza: 55
  },
  {
    varietà : 'Zucchina rigata pugliese',
    peso : 70,
    lunghezza: 80
  },
  {
    varietà : 'Zucchino tondo di Piacenza',
    peso : 40,
    lunghezza: 80
  },
  {
    varietà : 'Zucchino tondo di Nizza',
    peso : 30,
    lunghezza: 40
  },
  {
    varietà : 'Zucchino tondo di Firenze',
    peso : 25,
    lunghezza: 25
  }
];
// console.log(zucchine);

// Creiamo una variabile della somma totale dei pesi delle varie zucchine, deve partire da 0 per sommare con il ciclo for.
var sommaPeso = 0;

// Cicliamo ogni peso delle zucchine che viene sommato di volta in volta passando al peso successivo.
for (var i = 0; i < zucchine.length; i++) {
  // console.log(zucchine[i].peso);
  sommaPeso = sommaPeso + zucchine[i].peso;
}

console.log('Il peso totale di tutte le zucchine è di: ', sommaPeso);

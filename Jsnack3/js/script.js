// Creare  un array che contiene 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

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
    lunghezza: 10
  },
  {
    varietà : 'Zucchino siciliano',
    peso : 35,
    lunghezza: 25
  },
  {
    varietà : 'Zucchina striata di Napoli',
    peso : 60,
    lunghezza: 8
  },
  {
    varietà : 'Zucchina bianca triestina',
    peso : 45,
    lunghezza: 14
  },
  {
    varietà : 'Zucchina rigata pugliese',
    peso : 70,
    lunghezza: 80
  },
  {
    varietà : 'Zucchino tondo di Piacenza',
    peso : 40,
    lunghezza: 13
  },
  {
    varietà : 'Zucchino tondo di Nizza',
    peso : 30,
    lunghezza: 40
  },
  {
    varietà : 'Zucchino tondo di Firenze',
    peso : 25,
    lunghezza: 12
  }
];

// Creiamo due array in cui mettere in uno le zucchine che misurano meno di 15 cm, nell'altro quelle che misurano più di 15 cm.
var zucchineCorte = [];
var zucchineLunghe = [];

for (var i = 0; i < zucchine.length; i++) {
  if (zucchine[i].lunghezza <= 15) {
    zucchineCorte.push(zucchine[i]);
  } else {
    zucchineLunghe.push(zucchine[i]);
  }
}
console.log('Le zuccchine che misurano meno di 15 cm sono: ', zucchineCorte);
console.log('Le zuccchine che misurano più di 15 cm sono: ',zucchineLunghe);

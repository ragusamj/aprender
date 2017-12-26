const define = require('../define')

const verbs = [
  { spanish: 'hacer', yo: 'hago', english: 'to do' }, // to make
  { spanish: 'poner', yo: 'pongo', english: 'to put' },
  { spanish: 'salir', yo: 'salgo', english: 'to go out' },
  { spanish: 'caer', yo: 'me caigo', english: 'to fall' },
  { spanish: 'traer', yo: 'traigo', english: 'to bring' },
  { spanish: 'venir', yo: 'vengo', english: 'to come' },
  {
    spanish: 'tener',
    yo: 'tengo',
    tu: 'tienes',
    el: 'tiene',
    ella: 'tiene',
    usted: 'tiene',
    nosotros: 'tenemos',
    nosotras: 'tenemos',
    ellos: 'tienen',
    ellas: 'tienen',
    ustedes: 'tienen',
    english: 'to have'
  },
  { spanish: 'decir', yo: 'digo', english: 'to say' },
  { spanish: 'oir', yo: 'oigo', english: 'to listen' },
  { spanish: 'ver', yo: 'veo', english: 'to see' },
  { spanish: 'saber', yo: 'se', english: 'to know facts' },
  { spanish: 'conocer', yo: 'conozco', english: 'to be familiar' },
  { spanish: 'dar', yo: 'doy', english: 'to give' },
  {
    spanish: 'ser',
    yo: 'soy',
    tu: 'eres',
    el: 'es',
    ella: 'es',
    usted: 'es',
    nosotros: 'somos',
    nosotras: 'somos',
    ellos: 'son',
    ellas: 'son',
    ustedes: 'son',
    english: 'to be (permanent)'
  },
  { spanish: 'estar', yo: 'estoy', english: 'to be (temporary)'},
  {
    spanish: 'poder',
    yo: 'puedo',
    tu: 'puedes',
    el: 'puede',
    ella: 'puede',
    usted: 'puede',
    nosotros: 'podemos',
    nosotras: 'podemos',
    ellos: 'pueden',
    ellas: 'pueden',
    ustedes: 'pueden',
    english: 'to be able'
  },
  {
    spanish: 'ir',
    yo: 'voy',
    tu: 'vas',
    el: 'va',
    ella: 'va',
    usted: 'va',
    nosotros: 'vamos',
    nosotras: 'vamos',
    ellos: 'van',
    ellas: 'van',
    ustedes: 'van',
    english: 'to go'
  }
]

const definitions = define(verbs)

module.exports = {
  name: 'Irregular Verbs',
  words: verbs,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}

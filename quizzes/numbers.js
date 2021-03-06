const define = require('../define')

const numbers = [
  { spanish: 'cero', english: '0' },
  { spanish: 'uno', english: '1' },
  { spanish: 'dos', english: '2' },
  { spanish: 'tres', english: '3' },
  { spanish: 'cuatro', english: '4' },
  { spanish: 'cinco', english: '5' },
  { spanish: 'seis', english: '6' },
  { spanish: 'siete', english: '7' },
  { spanish: 'ocho', english: '8' },
  { spanish: 'nueve', english: '9' },
  { spanish: 'diez', english: '10' },
  { spanish: 'once', english: '11' },
  { spanish: 'doce', english: '12' },
  { spanish: 'trece', english: '13' },
  { spanish: 'catorce', english: '14' },
  { spanish: 'quince', english: '15' },
  { spanish: 'dieciseis', english: '16' },
  { spanish: 'diecisiete', english: '17' },
  { spanish: 'dieciocho', english: '18' },
  { spanish: 'diecinueve', english: '19' }
]
const oneThroughNine = numbers.slice(1, 10)
numbers.push({ spanish: 'veinte', english: '20' })
oneThroughNine.forEach(x =>
  numbers.push({ spanish: `vienti${x.spanish}`, english: `2${x.english}` })
)
numbers.push({ spanish: 'treinta', english: '30' })
oneThroughNine.forEach(x =>
  numbers.push({ spanish: `treinta y ${x.spanish}`, english: `3${x.english}` })
)
numbers.push({ spanish: 'cuarenta', english: '40' })
oneThroughNine.forEach(x =>
  numbers.push({ spanish: `cuarenta y ${x.spanish}`, english: `4${x.english}` })
)
numbers.push({ spanish: 'cincuenta', english: '50' })
oneThroughNine.forEach(x =>
  numbers.push({
    spanish: `cincuenta y ${x.spanish}`,
    english: `5${x.english}`
  })
)
numbers.push({ spanish: 'sesenta', english: '60' })
oneThroughNine.forEach(x =>
  numbers.push({ spanish: `sesenta y ${x.spanish}`, english: `6${x.english}` })
)
numbers.push({ spanish: 'setenta', english: '70' })
oneThroughNine.forEach(x =>
  numbers.push({ spanish: `setenta y ${x.spanish}`, english: `7${x.english}` })
)
numbers.push({ spanish: 'ochenta', english: '80' })
oneThroughNine.forEach(x =>
  numbers.push({ spanish: `ochenta y ${x.spanish}`, english: `8${x.english}` })
)
numbers.push({ spanish: 'noventa', english: '90' })
oneThroughNine.forEach(x =>
  numbers.push({ spanish: `noventa y ${x.spanish}`, english: `9${x.english}` })
)
numbers.push({ spanish: 'cien', english: '100' })
const definitions = define(numbers)

module.exports = {
  name: 'Numbers',
  words: numbers,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}

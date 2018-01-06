const define = require('../define')

const baseball = [
  { spanish: 'aboard', english: 'embasado' },
  { spanish: 'advance', english: 'avanzar' },
  { spanish: 'against Cardinals', english: 'frente Cardinals' },
  { spanish: 'ahead in the score', english: 'delante en el marcador' },
  { spanish: 'all-around player', english: 'jugador completo' },
  { spanish: 'all-star game', english: 'juego de las estrellas' },
  { spanish: 'allow runs', english: 'permitir carreras' },
  { spanish: 'argument', english: 'discusíon' },
  { spanish: 'artificial turf', english: 'terreno artificial' },
  { spanish: 'assist', english: 'asistencia' },
  { spanish: 'is at bat', english: 'está a bateo' },
  { spanish: 'an at bat', english: 'turno al bate' },
  { spanish: 'batting average', english: 'promedio de bateo' },
  { spanish: 'back-up player', english: 'jugador de reserva' },
  { spanish: 'bad spell', english: 'una mala racha' },
  { spanish: 'ball', english: 'pelota' },
  { spanish: 'ball boy', english: 'recogedor de pelotas' },
  { spanish: 'ball girl', english: 'recogedora de pelotas' },
  { spanish: 'ball player', english: 'pelotero' },
  { spanish: 'ballpark', english: 'estadio' },
  { spanish: 'base (1)', english: 'la almohadilla' },
  { spanish: 'base (2)', english: 'la base' },
  { spanish: 'base hit', english: 'un hit' },
  { spanish: 'base on balls', english: 'base por bolas' },
  { spanish: 'base running', english: 'corrido de bases' },
  { spanish: 'base stealer', english: 'robador de bases' },
  { spanish: 'bases empty', english: 'bases limpias' },
  { spanish: 'bases filled', english: 'las base llenas' },
  { spanish: 'bases loaded', english: 'las base cargadas' },
  { spanish: 'basket catch', english: 'cogida en la bandeja' },
  { spanish: 'bat boy', english: 'carga bates' },
  { spanish: 'to bat', english: 'batear' },
  { spanish: 'batters box', english: 'cajón de bateo' },
  { spanish: 'batter', english: 'bateador' },
  { spanish: 'batting order', english: 'el orden del bateo' },
  { spanish: 'behind the mound', english: 'detrás del montículo' },
  { spanish: 'blank', english: 'lechada' },
  { spanish: 'blocks it', english: 'el bloquea' },
  { spanish: 'bloop', english: 'un hit tejano' },
  { spanish: 'bottom of the 7th', english: 'la parte baja de la séptima' },
  { spanish: 'breaking ball', english: 'lanzamiento de rompimiento' },
  { spanish: 'bullpen', english: 'bulpen' },
  { spanish: 'bunt', english: 'toque de bola' },
  { spanish: 'called up', english: 'lo subieron' },
  { spanish: 'catch', english: 'capturar' },
  { spanish: 'catcher', english: 'receptor' },
  { spanish: 'center field', english: 'jardin central' },
  { spanish: 'center fielder', english: 'jardinero central' },
  { spanish: 'change up', english: 'un cambio' },
  { spanish: 'closer', english: 'taponero' },
  { spanish: 'clutch', english: 'bateador oportuno' },
  { spanish: 'coach (1)', english: 'entrenador' },
  { spanish: 'coach (2)', english: 'el adlestrador' },
  { spanish: 'count', english: 'la cuenta' },
  { spanish: 'curve', english: 'la curva' },
  { spanish: 'cut off man', english: 'cortador' },
  { spanish: 'hit for cycle', english: 'batear por el cicio' },
  { spanish: 'decisive run', english: 'carrera decisiva' },
  { spanish: 'defeat', english: 'derrota' },
  { spanish: 'defense', english: 'la defensa' },
  { spanish: 'delivery', english: 'lanzamiento' },
  { spanish: 'designated hitter', english: 'bateador designado' },
  { spanish: 'diamond', english: 'diamante' },
  { spanish: 'disabled list', english: 'lista de incapacitados' },
  { spanish: 'diving play', english: 'jugada de cabeza' },
  { spanish: 'double', english: 'doble' },
  { spanish: 'double header', english: 'doble jornada' },
  { spanish: 'double play (1)', english: 'doble play' },
  { spanish: 'double play (2)', english: 'doble matanza' },
  { spanish: 'double steal', english: 'doble robo' },
  { spanish: 'dugout (1)', english: 'banco' },
  { spanish: 'dugout (2)', english: 'la cueva' },
  { spanish: 'earned run', english: 'carrera limpia' },
  { spanish: 'ejected', english: 'expulsado' },
  { spanish: 'era', english: 'efectividad' },
  { spanish: 'error', english: 'un error' },
  { spanish: 'extra inning', english: 'entrada extra' },
  { spanish: 'extra-base hit', english: 'extrabase' },
  { spanish: 'fastball', english: 'una recta' },
  { spanish: 'fielder', english: 'fildeador' },
  { spanish: 'fielders choice', english: 'jugada de seleccíon' },
  { spanish: 'fly (1)', english: 'elevado' },
  { spanish: 'fly (2)', english: 'un bombo' },
  { spanish: 'force play', english: 'jugado forzado' },
  { spanish: 'forkball', english: 'un tenedor' },
  { spanish: 'foul line', english: 'linea de foul' },
  { spanish: 'foul pole', english: 'le asta de foul' },
  { spanish: 'foul territory', english: 'territorio de foul' },
  { spanish: 'full count', english: 'cuenta llena' },
  { spanish: 'game', english: 'partido' },
  { spanish: 'games started', english: 'juegos iniciados' },
  { spanish: 'get on base', english: 'embasarse' },
  { spanish: 'glove', english: 'guante' },
  { spanish: 'go ahead run', english: 'carrera de la ventaja' },
  { spanish: 'ground ball (1)', english: 'rola' },
  { spanish: 'ground ball (2)', english: 'roleta' },
  { spanish: 'ground rule double', english: 'doble por regla' },
  { spanish: 'groundout', english: 'un out de roletazo' },
  { spanish: 'headfirst slide', english: 'deslizamiento de cabeza' },
  { spanish: 'hill (1)', english: 'lomita' },
  { spanish: 'hill (2)', english: 'montículo' },
  { spanish: 'hit and run', english: 'bateo y corrido' },
  { spanish: 'home', english: 'home' },
  { spanish: 'home run (1)', english: 'jonrón' },
  { spanish: 'home run (2)', english: 'cuadrangular' },
  { spanish: 'in the gap', english: 'en el hueco entre 1 y 2' },
  { spanish: 'in the stands', english: 'en las gradas' },
  { spanish: 'infield', english: 'cuadro' },
  { spanish: 'infield hit', english: 'hit dentro de cuadro' },
  { spanish: 'infielder', english: 'jugador de cuadro' },
  { spanish: 'injured', english: 'lesionado' },
  { spanish: 'innings', english: 'entradas' },
  { spanish: 'inside pitch', english: 'lanzamiento pegado' },
  { spanish: 'insurance run', english: 'la puntilla' },
  { spanish: 'intentional walk', english: 'boleto intencional' },
  { spanish: 'knuckleball', english: 'bola de nudillos' },
  { spanish: 'lead off', english: 'abrir la tanda' },
  { spanish: 'left field', english: 'jardin izquierdo' },
  { spanish: 'lefthanded batter', english: 'bateador surdo' },
  { spanish: 'line drive', english: 'una linea' },
  { spanish: 'lineup', english: 'la alineación' },
  { spanish: 'losing pitcher', english: 'lanzador perdedor' },
  { spanish: 'manager (1)', english: 'dirigente' },
  { spanish: 'manager (2)', english: 'jefe de equipo' },
  { spanish: 'middle reliever', english: 'relevista de intermedio' },
  { spanish: 'catchers mitt', english: 'mascota del receptor' },
  { spanish: 'mound', english: 'el montículo' },
  { spanish: 'no hits, no runs', english: 'juego de cero hit, cero carrera' },
  { spanish: 'on-deck circle', english: 'círculo de espera' },
  { spanish: 'opponents', english: 'el equipo contrario' },
  { spanish: 'outfield', english: 'jardines' },
  { spanish: 'outfielder', english: 'jardinero' },
  { spanish: 'passed ball', english: 'pasból' },
  { spanish: 'to pinch hit', english: 'batear de emergente' },
  { spanish: 'pinch hitter', english: 'bateador emergente' },
  { spanish: 'pitch out', english: 'bola franca' },
  { spanish: 'pitcher', english: 'lanzador' },
  { spanish: 'plate', english: 'el plato' },
  { spanish: 'playoff', english: 'playoff' },
  { spanish: 'pop fly', english: 'palomón' },
  { spanish: 'pop up (1)', english: 'elevadito' },
  { spanish: 'pop up (2)', english: 'batazo alto' },
  { spanish: 'postseason', english: 'la pos-temporada' },
  { spanish: 'rained out game', english: 'juego suspendido por lluvia' },
  { spanish: 'rbi', english: 'carrera impulsada' },
  { spanish: 'relief pitcher', english: 'el relevista' },
  { spanish: 'rosin', english: 'pez rubia' },
  { spanish: 'rubber', english: 'gomita' },
  { spanish: 'run', english: 'una carrera' },
  { spanish: 'run scored', english: 'carrera anotada' },
  { spanish: 'rundown', english: 'corre-corre' },
  { spanish: 'runner', english: 'el corredor' },
  { spanish: 'sacrifice fly', english: 'elevado de sacrificio' },
  { spanish: 'safe', english: 'quieto' },
  { spanish: 'save', english: 'un salvado' },
  { spanish: 'score', english: 'la anotación' },
  { spanish: 'scoreboard', english: 'el marcador' },
  { spanish: 'scorekeeper', english: 'el encargado del marcador' },
  { spanish: 'scoring position', english: 'posición de anotar' },
  { spanish: 'screwball', english: 'tira buzón' },
  { spanish: 'season', english: 'la temporada' },
  { spanish: 'shoestring catch', english: 'cogida de cordón de zapatos' },
  { spanish: 'shortstop (1)', english: 'jardinero corto' },
  { spanish: 'shortstop (2)', english: 'campo corto' },
  { spanish: 'shutout', english: 'blanqueado' },
  { spanish: 'single', english: 'sencillo' },
  { spanish: 'slide', english: 'deslizarse' },
  { spanish: 'slider', english: 'la deslizadora' },
  { spanish: 'slow grounder', english: 'roleta lenta' },
  { spanish: 'squeeze play', english: 'jugada de cuña' },
  { spanish: 'starter (1)', english: 'lanzador iniciador' },
  { spanish: 'starter (2)', english: 'abridor' },
  { spanish: 'stolen base', english: 'una base robada' },
  { spanish: 'strike out looking', english: 'se ponchó mirándolo' },
  { spanish: 'strike out swinging', english: 'se ponchó tirándolo' },
  { spanish: 'strike zone', english: 'zona de strike' },
  { spanish: 'strikout', english: 'un ponche' },
  { spanish: 'sweep', english: 'una barrida' },
  { spanish: 'switch hitter', english: 'bateador ambidiestro' },
  { spanish: 'takes his lead', english: 'se despega' },
  { spanish: 'teammate', english: 'compañero de equipo' },
  { spanish: 'the throw', english: 'el tiro' },
  { spanish: 'thrown out', english: 'lo fusilaron en el plato' },
  { spanish: 'to tie', english: 'emparejar' },
  { spanish: 'tie-breaking run', english: 'carrera delantera' },
  { spanish: 'tied', english: 'empatado' },
  { spanish: 'top of the 8th', english: 'la parte alta de la octava' },
  { spanish: 'trade', english: 'mandar' },
  { spanish: 'triple', english: 'triple' },
  { spanish: 'tying run', english: 'la carrera del empate' },
  { spanish: 'umpire', english: 'el árbitro' },
  { spanish: 'unassisted', english: 'sin ayuda' },
  { spanish: 'unearned run (1)', english: 'carrera sucia' },
  { spanish: 'unearned run (2)', english: 'carrera inmerecida' },
  { spanish: 'walk', english: 'basa por bolas' },
  { spanish: 'to warm up', english: 'calentar' },
  { spanish: 'warning track', english: 'zona de aviso' },
  { spanish: 'wild pitch', english: 'lanzamiento salvaje' },
  { spanish: 'win', english: 'una victoria' },
  { spanish: 'winds up', english: 'se enrolla' },
  { spanish: 'winning hit', english: 'hit de oro' },
  { spanish: 'winning pitcher', english: 'lanzador ganador' }
]
const definitions = define(baseball)

module.exports = {
  name: 'Baseball',
  words: baseball,
  askQuestion: definitions.askQuestion,
  checkAnswer: definitions.checkAnswer
}

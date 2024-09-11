const messages = [
  "💖 Te amo más que ayer y menos que mañana ⏳",
  "👄 Elegimos los labios, los ojos, y el corazón con los que compartimos la vida y yo te elijo a ti ❤️",
  "🌊 Crucé océanos de tiempo solo para encontrarte ⏳ – Bram Stoker",
  "💞 Desde el primer momento que te vi, supe que quería pasar mi vida contigo 💫",
  "📖 Eres la historia más bonita que el destino escribió en mi vida 🌟",
  "🚀 Viajo a tu lado en cada aventura, tanto en lo bueno como en lo malo 🌈",
  "✨ Pudo haber sido lindo, pero tú lo hiciste perfecto 💯",
  "🌍 Para el mundo no soy nadie, pero para mí, tú eres todo 🌟",
  "❤️ Si sé lo que es el amor, es gracias a ti 📚 – Herman Hesse",
  "😊 Cada mañana, tú eres la razón por la que sonrío y amo 🌅 – Jerry Burton",
  "🥂 Por más momentos juntos, mi amor 💕",
  "💑 Solo hay dos momentos en que quiero estar contigo: Ahora y para Siempre ⏳",
  "💬 ¿Por qué te quiero? Porque llegaste a cambiarlo todo sin querer cambiar nada en mí 💖",
  "📖 Aprenderé historias para contarte y crearé nuevas palabras para decirte cuánto te quiero 💞 – Frida Kahlo",
  "💫 No te quiero para mí, te quiero conmigo. Es diferente 🌟",
  "🌹 Con todo mi amor, para toda la vida 💕",
  "✨ Eres perfecta para mí 🌟",
  "😊 Soy feliz a tu lado ❤️",
  "🌞 Mis días son mejores contigo 💖",
  "⏳ Cada minuto a tu lado es un regalo 🎁",
  "💎 Los momentos a tu lado son únicos 🌟",
  "🥂 ¡Por más momentos juntos! 🎉",
  "🌈 Lo mejor de mi vida es estar en la tuya 🌟",
  "❤️ Eres mi principio y mi fin 💫",
  "🎨 Si no te hubiera conocido, habría soñado hacerte una realidad 🌠 – Sebastián Chantoix",
  "🎶 Eres como la mejor canción del verano 🎵",
  "🎁 Eres mi mejor regalo y lo serás siempre 🎀",
  "✨ La perfección no existe, pero para mí eres perfecta 💫",
  "🚀 Te quiero hasta los límites del universo 🌌",
  "💖 Mi corazón es perfecto porque tú estás dentro de él ❤️",
  "🌟 Contigo no me imagino un final feliz, porque todo el rato estoy feliz 😊",
  "💭 Tengo esa costumbre de pensar en ti cuando hablan de amor 💕",
  "⏳ Solo el amor nos da el sabor de la eternidad 💖",
  "💨 El amor verdadero es como el viento: no se ve, pero se siente 💕",
  "🔮 No sabía lo que quería hasta que quería verte todos los días 🌟",
  "💌 El verdadero amor es inagotable; cuanto más das, más tienes 🌟",
  "📱 Me encanta despertarme con un mensaje tuyo 😍",
  "👁️ Me encanta que me mires y sonrías sin ninguna explicación 😘",
  "💖 No solo me encantas, sino que me complementas 🌟",
  "🎉 Eres la mejor sensación del mundo 🌎",
  "🌙 Anoche soñé contigo y esta mañana no quería despertar 💭",
  "❤️ Mi única adicción lleva tu nombre 🌟",
  "💭 Si fueras un sueño, serías el mejor de todos 🌟",
  "🌈 Te amo en colores que aún no has visto 🎨",
  "🌍 No sé a dónde nos lleva esto, pero sí sé que quiero ir contigo ❤️",
  "🤝 Hagamos un trato: tú, yo y toda la vida 🌟",
  "🌌 Andábamos sin buscarnos, pero sabiendo que andábamos para encontrarnos 💫",
  "⏰ Entrégame el tiempo que te sobre, y lo gastaré en hacerte la persona más feliz del planeta 🌟",
  "🌟 Hay tinieblas en la vida y hay luces, y tú eres una de las luces, la luz de todas las luces ✨",
  "🍭 Quería llevarte al cine, pero no permiten entrar con dulces 🍬",
  "❤️ No hay que morir por el otro, sino vivir para disfrutar juntos 🌟",
  "💋 Te mereces que te besen, cada día, cada hora, a cada minuto 💖",
  "🔔 Eres mi notificación favorita 📲",
  "💞 No tengo la culpa de que me gustes, la culpa es tuya por tener lo que me encanta 💖",
  "🚶‍♂️ Te cruzaste en mi camino y se me olvidó a dónde iba 💭",
  "💖 Te amo más que a mi propia piel 🌟",
  "⭐ Si quieres ser mi estrella, prometo ser tu cielo 🌌",
  "💫 Haces mi mundo más bonito, aunque no lo sepas 🌟",
  "🌠 ¿Qué hace una estrella tan abajo del cielo? 🌟",
  "💖 No creía en el amor a primera vista, hasta que te vi por primera vez 😘",
  "👂 Ven y dime al oído que te has vestido hoy pensando en desvestirte frente a mí 💕",
  "💭 ¿Sería muy egoísta pedirte solo para mí? 🌟",
  "🗨️ Tengo ganas de verte y decirte todas las ganas que he tenido de ti 💖",
  "💡 Si me preguntan por ti, les diré que iluminaste mi vida y toda la ciudad 🌟",
  "💋 Quiero llenar mi boca con tu nombre 💖",
  "💌 Eres lo que no sabía que necesitaba. Ahora tengo claro que te necesito aquí siempre 🌟",
  "🛠️ Me las puedo arreglar sola, pero arreglármelas contigo me parece un mejor plan 🌟",
  "⏳ Haría los segundos eternos para estar contigo un rato más 💖",
  "🌪️ Ahora resulta que en medio de este caos, tú y yo nos hacemos reír 😄",
  "💋 Tengo antojo de un beso tuyo, ¿vienes o voy? 🌟",
  "✨ Quiero hacer contigo todo eso que nunca he hecho con nadie 💫",
  "😊 Sonríes y todo es un poema 😘",
  "🏡 Quizás es porque me sentí como en casa contigo mucho antes de que me dejaras entrar 🌟",
  "🌞 ¿Acaba de salir el sol o me has sonreído? 😍",
  "🍬 Ahora mismo se me está antojando algo dulce como tú 😘",
  "💭 Me dijeron: piensa en algo bonito que te haga feliz. Y te imaginé a ti sonriendo 🌟",
  "⚗️ Ni en los laboratorios existe tanta química como la que hay entre nosotros 💕",
  "🌟 Somos una casualidad llena de intención 💫",
  "🛌 Perdona si estás cansada, es mi culpa. Has pasado todo el día paseando por mi mente 💭",
  "💞 Iba a decirte que me gustas, pero la verdad es que me encantas 💖",
  "👀 Cuanto más te veo, más te quiero ver 💫",
  "❤️ Y yo te quiero así: mía, pero tuya al mismo tiempo 💕",
  "🔮 Nuestro encuentro no fue una coincidencia. Nada ocurre por accidente 🌟",
  "🎁 Toma, mi amor, te regalo mi eternidad 💖",
  "👀 Tus ojos son el arma con la que me robaste el corazón 💖",
  "💭 Ayer eras mi amor. Hoy eres mi todo. Mañana serás mi vida 🌟",
  "🔍 Creo que nací para encontrarme contigo 🌟",
  "🕰️ ¿Sabes qué hora es? La hora de que me dejes apapucharte 💖",
  "❤️ No soy donante de órganos, pero te daría con gusto mi corazón 💞",
  "👀 No creía en el amor a primera vista hasta que entraste aquí 🌟",
  "😇 Acabo de ver un ángel, no estoy seguro de estar en la tierra 💖",
  "📜 Contigo no quiero finales, contigo quiero una historia sin final 🌟",
  "💫 ¡Aquí estoy! todo tuyo mi amor 🍊",
  "💞 No te amaré todos los días de tu vida, te amaré todos los días de la mía ❤️",
  "👀 Si sigo mirándote durante mucho rato necesitaré unos ojos nuevos 💖",
  "🕰️ ¿Sabes qué hora es? Porque el verte he ha hecho perder la noción del tiempo 💫",
  "😊 Tienes algo en la cara. La sonrisa más bonita que he visto en mi vida 💖",
  "🌿 Hola, ¿eres ecologista? ¿Por qué no vienes y me plantas un beso en mi boca? 💋",
  "🚀 ¿Te gusta Star Wars? Porque a mí me gusta Star contigo 🌟",
  "🪥 Entonces... ¿de qué color es tu cepillo de dientes? 🧼",
  "🏠 ¿Vives a menudo por aquí? Aquí en mi corazón 🌆",
  "🎁 Bueno, aquí estoy, ¿cuáles eran tus otros dos deseos? 🎈",
  "💸 Oye, ¿me vas a dar el dinero ya? Que desde que te conozco llevas viviendo en mi corazón sin pagar alquiler 💌",
  "🤔 Oye, que no sé cómo es eso de besar, ¿me ayudas? 😘",
  "💪 Si pudiera tener un superpoder ahora mismo, querría el de ser capaz de decirte las ganas que tengo de quedar contigo 💕",
  "👕 Toca mi camisa. ¿Sabes de qué está hecha? De auténtico novio tuyo 100% 💯",
  "💍 ¿Crees que soy exagerado?, pero... ¿cómo ves eso de casarnos ahora? 💕",
  "⏳ Perdona mi impuntualidad: me hubiera gustado llegar antes a tu vida ⏰",
  "🎁 ¿Qué te parece si nos damos un tiempo? Por ejemplo, tú me das tu presente y yo te doy mi futuro 🕰️",
  "📸 ¿Eres una cámara? Porque cada vez que te miro, sonrío 😄",
  "❤️ Verte ha afectado mi corazón más que mi consumo compulsivo de triglicéridos y transaminasas 🍔",
  "🐶 No soy un perro, pero guau contigo 😍",
  "📚 Puedo decirte con ejemplos prácticos la diferencia entre ay, hay y ahí ✍️",
  "🔍 ¿Eres Google? Porque eres TODO lo que busco 💖",
  "🗳️ Oye, ¿te presentas a las elecciones? Porque eres un partidazo 🌟",
  "🔋 He decidido gastar la batería de mi móvil contigo 📱",
  "🏠 ¿Te importa que te siga hasta casa? Es que mi madre siempre me decía que persiguiera mis sueños 💫",
  "🎭 ¿Te han dicho alguna vez que no te pareces en nada a Eddie Murphy? 😂",
  "🇦🇺 ¿Eres de Australia? Porque claramente cumples con mis koalificaciones 🐨",
  "🍬 Quería llevarte al cine, pero no permiten entrar con dulces 🎥",
  "🍫 Estoy a dieta pero, por ti, haría una excepción. ¡Bombón! 😘",
  "📖 Me tengo que comprar un diccionario porque, desde que te vi, me he quedado sin palabras 🗣️",
  "👁️ Me gustan mucho tus ojos, especialmente el derecho 😏",
  "🍬 Pues sí que ha avanzado la ciencia... ¡si ya hasta los bombones caminan! 😋",
  "⛵ Si Colón te viera diría: '¡Santa María! Qué Pinta tiene esa Niña' ⛵",
  "📅 Se me da fatal el inglés: confundí el pasado simple con un futuro contigo 💕",
  "🦈 El megalodón se extinguió, pero veo que tu madre logró dar vida al megabombón 😍",
  "🍬 Me encantaría ser ese chicle para estar todo el día en tu boca 💋",
  "🌈 Mi color favorito es verte 💖",
  "🛌 Perdona si estás cansada. Pero es tu culpa. Has pasado todo el día paseando por mi mente 😴",
  "🌟 Mira que me gustas todos los días, y mañana mas 😍",
  "💸 Si me pagaran por pensar en ti, sería millonario 🤑",
  "🐦 Disculpa, ¿eres una cagada de paloma? Porque siento que has caído del cielo y no te puedo quitar de mi cabeza, Muahhh 😅",
  "💋 Te voy a dar unos besotes, y si no te gustan pues me lo devuelves 😘",
  "🛋️ Are you a sofa? Because you are sofackingg precious 😍",
  "💻 Debes de ser un protocolo informático, porque al verte se me encriptan las palabras 💖",
  "💧 Hola, ¿te gusta el agua? ¿Sí? Genial: ya te gusta un 70 % de mí 💦",
  "🥑 Are you an aguacate? Because te comía avocados 😋",
  "🐱 Rescato abuelas y ayudo a gatos a cruzar la calle... ¿o era al revés? Me tienes mal 🐾",
  "🦕 Bésame si me equivoco. Pero los dinosaurios todavía existen, ¿verdad? 😘",
  "🌹 Así que eres comunista, ¿eh? ¿Qué te parece si compartes tu boca con la mía? 💋",
  "🌳 Perdón, es que soy ecologista y quiero plantarte unos besos 🌹",
  "📚 Voy a estudiar Derecho para dar con el caso que no me haces ⚖️",
  "💪 La lengua es el músculo más fuerte del cuerpo, ¿luchamos? 😏",
  "⏰ ¿Qué alarma me tengo que poner para despertarme contigo? 💖",
  "💸 Si te multan por exceso de belleza ya pagaré tu fianza 😘",
  "➕ Si hablamos de matemáticas, eres la suma de todos mis deseos ❤️"
];


const modal = document.getElementById("te-amo");
const openModalButton = document.querySelector(".btn-modal_");
const closeModalButton = document.querySelector(".modal__close");
const messageElement = document.getElementById("modal-message");


// Función para mostrar el modal
function openModal() {
  modal.classList.add('show');

  // Actualizar el mensaje aleatorio
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  messageElement.textContent = randomMessage;
}

// Función para cerrar el modal
function closeModal() {
  modal.classList.remove('show');
}

// Evitar que el hash aparezca en la URL al hacer clic en los enlaces
openModalButton.addEventListener("click", function(event) {
  event.preventDefault(); // Evita que el hash se añada a la URL
  openModal();
});

closeModalButton.addEventListener("click", function(event) {
  event.preventDefault(); // Evita que el hash se añada a la URL
  closeModal();
});


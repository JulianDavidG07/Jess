// sad.js
var lastHoveredButton = "btn-secondary"; // Agrega esta línea

var mensajesSad = [
  "Sonríe a Extraños: 😊 Una sonrisa puede alegrar el día de alguien más y el tuyo propio.",
  "Practica la Gratitud: 🙏 Cada día, reflexiona sobre tres cosas por las que te sientas agradecido. Puede ser algo pequeño pero significativo.",
  "Haz una Lista de Reproducción Feliz: 🎶 Crea una lista de tus canciones favoritas que te hagan sentir feliz y energizado.",
  "Realiza Actos de Bondad: 🌟 Haz algo amable por alguien más, ya sea un amigo, familiar o un desconocido. La bondad genera felicidad.",
  "Encuentra Placer en las Pequeñas Cosas: ☕ Disfruta de un buen café, un amanecer, o simplemente de un momento tranquilo.",
  "Practica la Mindfulness o Atención Plena: 🧘 Dedica unos minutos al día para estar presente, consciente de tus pensamientos y emociones.",
  "Crea un Espacio Feliz en Casa: 🏡 Decora tu espacio con colores y elementos que te hagan sentir bien.",
  "Haz Algo que Amas: ❤️ Dedica tiempo a tus pasiones y hobbies. Hacer lo que amas te llena de alegría.",
  "Conéctate con Seres Queridos: 👫 La conexión humana es clave para la felicidad. Dedica tiempo a tus relaciones.",
  "Agradece Siempre: 🙌 'Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.' - 1 Tesalonicenses 5:18",
  "Confía en Dios: 🙏 'Confía en el Señor con todo tu corazón y no te apoyes en tu propia inteligencia.' - Proverbios 3:5",
  "Sé Amable y Perdona: ❤️ 'Sed amables y compasivos unos con otros, perdonándoos mutuamente, así como también Dios os perdonó en Cristo.' - Efesios 4:32",
  "Ama a Tu Prójimo: 🤝 'Ama a tu prójimo como a ti mismo.' - Mateo 22:39",
  "Busca la Paz Interior: ☮️ 'La paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús.' - Filipenses 4:7",
  "Refúgiate en la Oración: 🙇‍♂️ 'No os afanéis por nada; antes bien, en todo, mediante oración y súplica con acción de gracias, sean dadas a conocer vuestras peticiones delante de Dios.' - Filipenses 4:6",
  "Vive con Generosidad: 💖 'Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre.' - 2 Corintios 9:7",
  "Busca la Sabiduría: 📖 'Bienaventurado el hombre que halla la sabiduría, y que obtiene la inteligencia.' - Proverbios 3:13",
  "Sé Paciente: ⌛ 'Sed también pacientes; fortaleced vuestros corazones, porque la venida del Señor se acerca.' - Santiago 5:8",
  "Mantén la Fe: 🛐 'Ahora, pues, permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de ellos es el amor.' - 1 Corintios 13:13",
  "🌟 La felicidad no es algo que pospones para el futuro; es algo que diseñas para el presente. - Jim Rohn" ,
  "😊 La verdadera felicidad es disfrutar el presente, sin dependencia ansiosa sobre el futuro. - Lucio Anneo Séneca",
  "🌈 La felicidad no se trata de tener lo que quieres, sino de querer lo que tienes. - Zig Ziglar",
  "🌺 La verdadera felicidad consiste en hacer el bien. - Aristóteles",
  "🚀 La felicidad es cuando lo que piensas, lo que dices y lo que haces están en armonía. - Mahatma Gandhi",
  "🌍 No hay camino hacia la felicidad; la felicidad es el camino. - Thich Nhat Hanh",
  "🌞 La felicidad es interior, no exterior; por lo tanto, no depende de lo que tenemos, sino de lo que somos. - Henry Van Dyke",
  "🌼 La verdadera felicidad es un estado interior de paz y satisfacción. - Dalai Lama",
  "🌷 La felicidad es una dirección, no un lugar. - Sydney J. Harris",
  "🌸 La felicidad no es algo listo. Viene de tus propias acciones. - Dalai Lama"
];


// happy.js
var lastHoveredButton = "btn-primary"; // Agrega esta línea

var mensajesHappy = [
    "Que cada paso que des esté guiado por la luz divina. 🚶‍♂️💡",
    "Que la paz de Dios te acompañe hoy y siempre. 💖🌟",
    "Cada día es una página en blanco. Escribe una historia increíble llena de risas, amor y logros. ¡Hoy es tu día para brillar! 💫✨",
    "Recuerda: cada nube tiene un borde plateado. ¡Que las pequeñas alegrías iluminen tu día y te hagan sonreír! 🌈😁",
    "Eres como un rayo de sol en un día nublado. Tu positividad ilumina los corazones a tu alrededor. ☀️💛",
    "La vida es corta, así que come el postre primero, ríe demasiado y nunca dejes de ser una chispa de felicidad. 🍰😂",
    "No cuentes los días, haz que los días cuenten. ¡Que hoy sea tan brillante y asombroso como tú eres! 🚀🌟",
    "La felicidad es una elección. Elige ser feliz hoy y deja que esa elección ilumine tu día y el de los demás. 😃💖",
    "Si la belleza fuera tiempo, ¡tú serías la eternidad! ⏳💖",
    "Eres como un 🌈 en un día lluvioso, llenando la vida de colores y alegría.",
    "Eres un ☀️ en los días grises, siempre trayendo calidez y luz a la vida.",
    "Si fueras un 🎨, serías la obra maestra más hermosa que mis ojos han visto.",
    "Eres como un 🍭, siempre endulzando los días con tu ternura y alegría.",
    "Si la perfección fuera un 💎, tú serías la joya más preciosa.",
    "Eres como un 📚 de cuentos de hadas, cada página de tu historia es mágica.",
    "Si cada pensamiento tuyo fuera una 🎈, llenarías el cielo de colores.",
    "Si la vida fuera un escenario, tú serías la ⭐ principal.",
    "Eres el sueño del que no se quiere despertar, la razón de mi sonrisa. 😊✨",
    "Eres inspiración, el motivo por el cual cada día es especial. 🌈💫",
    "Si la felicidad fuera un lugar, sería a tu lado. 🏡❤️",
    "🌞'Este es el día que el Señor hizo; regocijémonos y alegrémonos en él.' - Salmos 118:24",
    "🌈'Yo sé los planes que tengo para ustedes, planes para su bienestar y no para su mal, a fin de darles un futuro lleno de esperanza.' - Jeremías 29:11",
    "🌺 'Confíenle todas sus preocupaciones, porque él cuida de ustedes.' - 1 Pedro 5:7",
    "🌿 'Por lo tanto, no se preocupen por el día de mañana, pues el día de mañana traerá sus propias preocupaciones. A cada día le bastan sus propios problemas.' - Mateo 6:34",
    "🎨 'Porque somos hechura de Dios, creados en Cristo Jesús para hacer buenas obras, las cuales Dios dispuso de antemano a fin de que las pongamos en práctica.' - Efesios 2:10",
    "🌈 ¿Qué pequeños momentos te hacen feliz en la vida cotidiana?",
    "🌺 ¿Qué consejo te darías a ti mismo si pudieras volver al pasado?",
    "🌞 ¿Cómo te cuidas a ti mismo y recargas tus energías?",
    "🌍 ¿Cuál es tu propósito en la vida y cómo contribuyes al mundo?",
    "😌 ¿Cómo encuentras la paz interior en tiempos difíciles?",
    "🌱 ¿Cuál es tu mayor inspiración en la vida?",
    "🐧 Los pingüinos tienen solo un compañero de vida y pueden hacer regalos de piedras para expresar su amor.",
    "🌈 Los arcoíris son círculos completos, pero generalmente solo vemos la mitad debido a la línea del horizonte.",
    "😂 ¿Qué hace una abeja en el gimnasio?🏋️‍♀️ ¡Zum-ba!",
    "👻 ¿Qué hace una abeja en el gimnasio?🍯 ¡Abe-jercicios!",
    "🐍 ¿Qué hace una serpiente en el gimnasio?🏋️ ¡Sssss-entadillas!",
    "🌈 El Unicornio y la Mariposa: Un día, un unicornio y una mariposa se encontraron en el bosque. Juntos, descubrieron un arcoíris mágico que les llevó a un mundo lleno de aventuras y sueños.",
    "🚀 Viaje a las Estrellas: Sara construyó una nave espacial con cajas y sueños. Con su gato cósmico, emprendió un viaje a las estrellas donde descubrieron planetas brillantes y amistades intergalácticas.",
    "🌌 El Deseo de la Estrella:En una noche estrellada, una estrella fugaz escuchó el deseo de Lucas de tener un día lleno de risas. Al día siguiente, todo el mundo a su alrededor comenzó a reír, incluso las flores.",
    "🎈 El Globo de los Sueños: Juan ató sus sueños a un globo y lo dejó volar. Mientras subía, el globo se llenó de colores y al llegar al cielo, sus sueños se hicieron realidad.",
    "🌟 Lucía y las Luciérnagas: Lucía siguió a las luciérnagas en una noche oscura. Descubrió que cada destello llevaba consigo un deseo, y así aprendió a encontrar luz en la oscuridad.",
    "🍮 Cómo la gelatina azul que luce verde en la atmósfera de Aristóteles mientras come ensalada de flores negras porque se ensucia la frente de mango. Esta vez sí tenía algo que decir. ✨Un poema✨",
    "🌊 Bajo la luna plateada,🌙 el mar susurra secretos.🐚 Conchas guardan historias,📜 en arenas de sueños completos.",
    "🌄 Amanecer dorado, ☀️ ilumina nuevos caminos. 🌺 Flores despiertan,🌷 con promesas y destinos.",
    "🍬 Los copitos de dulce son conocidos por su sabor dulce y se asocian comúnmente con la alegría y la felicidad.",
    "🎉 Muchos copos de dulce están vinculados a celebraciones y eventos festivos, como la Navidad.",
    "🎁 En ocasiones, los copos de dulce se comparten o regalan, simbolizando generosidad y afecto.",
    "🌈 La variedad de colores en los copos de dulce puede representar la diversidad y añadir un toque de alegría visual.",
    "💖 Algunos copos de dulce son delicados y frágiles, lo que puede simbolizar la delicadeza de las relaciones y momentos especiales.",
    "💖 En este viaje llamado vida, encontré mi destino en tu amor. Eres mi eternidad. 💑",
    "🌌 Nuestro amor es tan vasto como el universo, y tan eterno como las estrellas en el cielo. ✨",
    "💌 Cada palabra de amor que compartimos es un verso en la poesía interminable de nuestro corazón. 📜",
    "Construimos nuestro castillo de sueños, donde el amor reina supremo, un reino eterno. 🏰",
    "Eres mi compañero de vida, mi confidente eterno, en este viaje llamado amor. 👫",
    "Nuestro amor es un viaje estelar, con constelaciones que cuentan la historia de nuestra eternidad. ✨",
    "Eres mi deseo hecho realidad, una estrella fugaz que brilla en mi cielo siempre. 🌠",
    "Nuestro amor es como un globo que nunca pierde altura, siempre en ascenso hacia la eternidad. 🎈",
    "En el rincón más profundo de mi corazón, nuestro amor encuentra su hogar eterno. 💑",
    "😄 ¿Cuál es el café más romántico? ¡El ex-preso! ☕❤️",
    "🚗 ¿Cuál es el coche más romántico? ¡El convertible, porque siempre se deja llevar por el amor! 🚗❤️",
    "🎤 ¿Por qué el micrófono nunca se cansa de cantarle al amor? ¡Porque siempre está en tono! 🎤😄",
    "🍦 ¿Cómo se llama el helado más enamorado? ¡Sundae, porque todos los días es domingo contigo! 🍦❤️",
    "🚀 Eres mi combustible para alcanzar las estrellas 🚀💫",
    "🌙 ¿Cuál es la luna más romántica? ¡La luna llena, porque siempre está completa con tu amor! 🌕❤️",
    "🌟 En el café de siempre, sus miradas se encontraron. Con cada sorbo, escribieron un capítulo nuevo en su historia de amor.",
    "🌺 En el jardín de sus corazones, cultivaron flores de paciencia. Con el tiempo, cada pétalo reveló un 'te amo' silencioso pero profundo.",
    "🌕 En las noches estrelladas, ella le contaba secretos al oído de la luna. Él prometió ser su constelación favorita en este universo compartido.",
    "📖 Escribieron sus promesas de amor en pequeñas notas y las escondieron en libros. Cada lectura era una nueva oportunidad para encontrar mensajes escondidos.",
    "🍎 En la feria, compartieron algodón de azúcar y risas. Descubrieron que el dulce sabor del amor supera cualquier golosina.",
    "🎨 En un lienzo en blanco, pintaron su historia. Cada pincelada representaba un momento especial, creando un cuadro de amor eterno.",
    "🚀 Viajaron al espacio en su imaginación. Descubrieron que el amor puede ser tan vasto y misterioso como el universo.",
    "🌊 Caminaron por la playa, dejando huellas en la arena. Sus pasos se mezclaron, como sus vidas, en un hermoso rastro de amor.",
    "🌄 En la cima de la montaña, vieron el amanecer juntos. Cada nuevo día era una oportunidad para amarse más que el anterior.",
    "🌠 Hicieron deseos juntos al ver una estrella fugaz. Sus deseos se cumplieron con la fortuna de tenerse mutuamente",
    "🎈 Lanzaron globos al cielo con mensajes de amor. Se perdieron en el horizonte, pero sus palabras perduraron en el corazón del otro.",
    "🎵 Bailaron bajo la lluvia al ritmo de sus latidos. Cada gota era una melodía que componía la sinfonía de su amor.",
    "🍃 Se encontraron en un parque lleno de hojas otoñales. Descubrieron que el amor es como el viento, invisible pero siempre presente.",
    "🌙 En la penumbra, se prometieron amor eterno. Sus sombras se entrelazaron, formando un lazo indestructible en la danza del tiempo.",
    "🌞 Sol que ilumina el día, en tu amor, luz que guía.",
    "💑 En promedio, las parejas felices se dicen 'te amo' al menos 8 veces al día.",
    "💌 Las parejas que ríen juntas tienden a tener relaciones más duraderas.",
    "🌙 Los niveles de oxitocina, la hormona del amor, aumentan cuando abrazas a alguien.",
    "🌠 La expresión 'mariposas en el estómago' se refiere a la liberación de adrenalina al enamorarse.",
    "🍭 La sensación de cosquilleo al ver a alguien que amas se llama 'frisson'.",
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
    "🌸 La felicidad no es algo listo. Viene de tus propias acciones. - Dalai Lama",
    "🌺 'Confíenle todas sus preocupaciones, porque él cuida de ustedes.' - 1 Pedro 5:7"
];


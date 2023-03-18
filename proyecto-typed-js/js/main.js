const typed = new Typed('.typed', { /*Colocamos la clase typed en el typed y el segundo parametro
va a ser un objeto en el cual haremos todas las configuraciones que voy a querer agregar en ese efecto de escritura*/
	strings: [
		'<i class="servicio">Creatividad</i>', /*Le voy a agregar contenido html */
		'<i class="servicio">Innovación</i>',
		'<i class="servicio">Unión</i>',
		'<i class="servicio">Equipo</i>'
	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 30, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras por lo tanto comenzara desde la primera
	// a la ultima, pero si le doy true lo hara al azar.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra, es decir cuanto tiempo pasa 
	//para que la borre.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	//Es decir que sera infinito y se repetira una y otra vez.
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato, para evitar que me agregue las etiquetas 
	//cuando se muestre mi texto
});
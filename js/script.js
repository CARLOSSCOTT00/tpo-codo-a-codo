


let menu = document.querySelector('#_toggle');
let navbar = document.querySelector('#navbar')
document.querySelector('#_toggle').onclick = () => {
	
	menu.classList.toggle('close');
	navbar.classList.toggle("active");
    
}


document.querySelectorAll(' .about .video-container .controls .control-btn').forEach(btn => {
	btn.onclick = () => {
		let src = btn.getAttribute('data-src');
		document.querySelector('.about .video-container .video').src = src;
	}
})

const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", e => {
	textarea.style.height = '${38}px';
	let scHeight = e.target.scrollHeight;
	console.log(scHeight);
	textarea.style.height = `${scHeight}px`;
});


// establecer fecha min al input date
const fechaInput = document.querySelector('#fecha');

const fechaAhora = new Date();
const year = fechaAhora.getFullYear();
const mes = fechaAhora.getMonth() + 1;
const dia = fechaAhora.getDate() + 1;


let fechaDeshabilitar;
if ([10, 11, 12].includes(mes)) {
	fechaDeshabilitar = `${year}-${mes}-${dia}`;
} else {
	fechaDeshabilitar = `${year}-0${mes}-${dia}`;

}


// Agregamos el atributo MIN al input DATE

fechaInput.min = fechaDeshabilitar;



//validar formulario
const d = document;

const $form = d.querySelector(".contact-form"),
	$inputs = d.querySelectorAll(".contact-form [required]");

console.log($inputs)
$inputs.forEach((input) => {
	const $span = d.createElement("span");
	$span.id = input.name;
	$span.textContent = input.title;
	$span.classList.add("contact-form-error", "none")
	input.insertAdjacentElement("afterend", $span)
});
d.addEventListener("keyup", (e) => {
	if (e.target.matches(".contact-form [required]")) {
		let $input = e.target,
		pattern = $input.pattern || $input.dataset.pattern;

		//console.log($input,pattern)


		if (pattern && $input.value!=="") {
			let regex = new RegExp(pattern);
			return !regex.exec($input.value)
				? d.getElementById($input.name).classList.add("is-active")
				: d.getElementById($input.name).classList.remove("is-active")
		}
		if (!pattern) {
			return $input.value ===""
			? d.getElementById($input.name).classList.add("is-active")
			: d.getElementById($input.name).classList.remove("is-active")

		}
	}
	

});


/*
const form = document.querySelector('#form')

form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
	event.preventDefault()
	const form = new FormData(this)
	const response = await fetch(this.action, {
		method: this.method,
		body: form,
		headers: {
			'Accept': 'application/json'
		}
	})
	if (Response.ok) {

		this.reset()

		alert('gracias por reservar con nosotros, en breve te contactaremos')
	}

}*/

const form = document.querySelector('#form')

form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
	event.preventDefault()
	const form = new FormData(this)
	const response = await fetch(this.action, {
		method: this.method,
		body: form,
		headers: {
			'Accept': 'application/json'
		}
	})
	if (response.ok) {
		this.reset()
		alert('¡Gracias por reservar con nosotros! En breve te contactaremos.')
	}
}


/*cambio de moneda*/
const monedaEl_one = document.getElementById('moneda-uno');
const monedaEl_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-dos');
const cambioEl = document.getElementById('cambio');
const tazaEl = document.getElementById('taza');


// Fetch Exchange Rate and Update the DOM
function calculate(){
    const moneda_one = monedaEl_one.value;
    const moneda_two = monedaEl_two.value;

   fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
   .then(res => res.json() )
   .then(data => {
       const taza = data.rates[moneda_two];
       
       cambioEl.innerText = `1 ${moneda_one} = ${taza} ${moneda_two}`;

       cantidadEl_two.value = (cantidadEl_one.value * taza).toFixed(4);

    } );
    
}

//Event listeners
monedaEl_one.addEventListener('change', calculate);
cantidadEl_one.addEventListener('input', calculate);
monedaEl_two.addEventListener('change', calculate);
cantidadEl_two.addEventListener('input', calculate);

taza.addEventListener('click', () =>{
    const temp = monedaEl_one.value;
    monedaEl_one.value = monedaEl_two.value;
    monedaEl_two.value = temp;
    calculate();
} );


calculate();
/*
	const active = document.querySelector('switch')
    // Obtener el elemento HTML que contiene el atributo data-theme
    const elemento = document.querySelector('html');
    
    // Obtener el botón para cambiar el tema
    const botonCambiarTema = document.getElementById('modoDark');

    // Agregar un EventListener al botón
    botonCambiarTema.addEventListener('click', function() {
      // Obtener el valor actual del atributo data-theme

      const temaActual = elemento.getAttribute('data-theme');

      // Cambiar el valor del atributo data-theme
      if (temaActual === 'oscuro') {
        elemento.setAttribute('data-theme', 'claro')
		active.classList.toggle('active');

      } else {
        elemento.setAttribute('data-theme', 'oscuro');
      }
    });
	
*/



// Obtener el botón por su ID
const botonModoDark = document.getElementById('modoDark');

// Agregar un EventListener al botón
botonModoDark.addEventListener('click', function() {
  // Obtener el elemento HTML
  const htmlElement = document.documentElement;

  // Verificar el valor actual del data-theme
  const currentTheme = htmlElement.getAttribute('data-theme');
  
  // Cambiar el valor del data-theme y la clase "active"
  if (currentTheme === 'claro') {
	htmlElement.setAttribute('data-theme', 'oscuro');
	botonModoDark.classList.add('active');
  } else {
	htmlElement.setAttribute('data-theme', 'claro');
	botonModoDark.classList.remove('active');
  }
});
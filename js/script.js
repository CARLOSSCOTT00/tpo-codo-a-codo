

// menu hamburguesa, transformacion
let menu = document.querySelector('#_toggle');
let navbar = document.querySelector('#navbar')
document.querySelector('#_toggle').onclick = () => {
	
	menu.classList.toggle('close');
	navbar.classList.toggle("active");
    
}

//slaiders
document.querySelectorAll(' .about .video-container .controls .control-btn').forEach(btn => {
	btn.onclick = () => {
		let src = btn.getAttribute('data-src');
		document.querySelector('.about .video-container .video').src = src;
	}
})
//aumentar la altura del text area
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

// envio formulario

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


/*apicambio de moneda*/
const monedaEl_one = document.getElementById('moneda-uno');
const monedaEl_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-dos');
const cambioEl = document.getElementById('cambio');
const tazaEl = document.getElementById('taza');


// api rest, calculo de la moneda consultada
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

//api rest, intercambio de moneda
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




// Obtener el botón por su ID, modo claro-oscuro
const botonModoDark = document.getElementById('modoDark');

botonModoDark.addEventListener('click', function() {

  const htmlElement = document.documentElement;

  const currentTheme = htmlElement.getAttribute('data-theme');
  
   if (currentTheme === 'claro') {
	htmlElement.setAttribute('data-theme', 'oscuro');
	botonModoDark.classList.add('active');
  } else {
	htmlElement.setAttribute('data-theme', 'claro');
	botonModoDark.classList.remove('active');
  }
});

// mensaje temporar de alerta , por seccion no completada//
  
  const enlaces = document.getElementsByClassName('alert');

  
  for (let i = 0; i < enlaces.length; i++) {
	enlaces[i].addEventListener('click', function(event) {
	  
	  event.preventDefault();

	  
	  alert(' ¡Te pedimos disculpas! Proximamente podras desplegar esta seccion y leer mas de nuestros destinos. si gustas puedes descargar el descriptivo.');
	});
  }
  
// funcion para ocultar y mostrar elementos
  
  
	function toggleVisibility(viewSelector, hideSelector, targetSelector) {
		var viewLink = document.querySelector(viewSelector);
		var hideLink = document.querySelector(hideSelector);
		var target = document.querySelector(targetSelector);
	  
		viewLink.addEventListener('click', function(event) {
		  event.preventDefault();
		  target.classList.remove('none');
		  hideLink.classList.remove('none');
		  viewLink.classList.add('none');
		});
	  
		hideLink.addEventListener('click', function(event) {
		  event.preventDefault();
		  target.classList.add('none');
		  hideLink.classList.add('none');
		  viewLink.classList.remove('none');
		});
	  }
  toggleVisibility('.view-blog1', '.hide-blog1', '#p-blog1');
toggleVisibility('.view-blog2', '.hide-blog2', '#p-blog2');
toggleVisibility('.view-blog3', '.hide-blog3', '#p-blog3');

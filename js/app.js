$(document).ready(function(){
	$('.menu-mob .options').on('click',function(){
		$('.menu-mob .first').slideToggle(300);
	})

	$('#down').on('click',function(){
		$('.menu-mob .second').slideToggle(300);
	})

	//Iniciar Sesion

	$('.session').on('click',function(){
		$('.session_block').css('display', 'block');
		$('.inicio_sesion').css('display', 'flex');
	})

	$('.inicio_sesion').on('click',function(e){
		if(e.target.attributes[0].value == 'inicio_sesion'){
			$('.session_block').css('display', 'none');
			$('.inicio_sesion').css('display', 'none');
			$(".inicio_sesion .form input").css('display', 'none');
			$("#email, #contraseña").css('display', 'block');
			$(".inicio_sesion .form input[type='submit']").css('display','block');
			$('.alreadynot').css('display', 'block');
			$('.registrate').css('display', 'flex');
			$('.tp')[0]['firstChild']['nodeValue'] = 'Inicia Sesion';
		}
	});

	//Cambio a Registro

	$('.registrate a').on('click',function(e){
		e.preventDefault();
		$('#nombre').css('display', 'block');
		$('#apellido').css('display', 'block');
		$('#rcontraseña').css('display', 'block');
		$('.alreadynot').css('display', 'none');
		$('.registrate').css('display', 'none');
		$('.tp')[0]['firstChild']['nodeValue'] = 'Registrate';
	});
});
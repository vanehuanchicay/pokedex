let inputPoke = document.getElementById('pokeInput');
let buttonSearch = document.getElementById('searchButton');

buttonSearch.addEventListener('click',function(){
	$('.poke-info').empty();
	$('.poke_img').empty();
	fetch('https://pokeapi.co/api/v2/pokemon/'+ inputPoke.value + '/')
	.then((response)=>{
		console.log(response);
		return response.json();
	})
	.then((data)=>{
		 console.log(data)
		 let order = data.order;
		 let name = data.name;
		 let num = data.id;
		 let abi = [];

		 for(let i = 0; i < data.abilities.length; i++){
			abi.push(data.abilities[i].ability.name)
		 }
	
		 console.log(abi);
	$('.poke_img').append('<img src="http://pokeapi.co/media/img/' + num + '.png">')
	$('.poke-info').append('<h3>POKEMÓN</h3><h3>' + name + '</h3><p>' + order + '</p>' + 
		'<h4>Habilidades</h4>' + '<ul class="ability"></ul>');
	for(let i = 0; i < abi.length; i++){
		$('.ability').append('<li>'+ abi[i] + '</li>')
		}	
	});
})


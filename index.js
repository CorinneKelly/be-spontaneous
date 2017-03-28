var pokemonList = {};

// const loadPokemon = (() => {
// 	$.getJSON('http://pokeapi.co/api/v2/pokemon/', (data) => {
// 		return data;
// 	}).then((data) => {
// 		debugger;
// 	})
// 	return pokemonList;
// });

// const loadPokemon = async ((acc, req) => {
// 	await $.getJSON('http://pokeapi.co/api/v2/pokemon/'), (data) => {

// 	}
// 	if (res.next) {
// 		return loadPokemon([...res, ...data], "http://pokeapi.co/api/v2/pokemon/?offset=20");
// 	}
// 	return acc;
// });

const getPokemonByName = ((name) => {
	$.getJSON(`http://pokeapi.co/api/v2/pokemon/${name}/`, (data) => {
	}).then((data) => {
		let img = document.createElement('img')
		img.src = data.sprites.front_default
		$("#results").append(data.name);
		$("#results").append(img);
	});
});

$(document).ready(function () {
	$( "#search-form" ).on( "submit", function(event) {
		event.preventDefault();
		let pokemon = getPokemonByName($(this).children()[0].value.toLowerCase());
	});
});


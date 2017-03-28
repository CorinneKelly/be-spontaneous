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

class Pokemon {
	constructor(data) {
		this.name = data.name;
		this.spriteUrls = data.sprites;
	}

	convertAndDrawSprites(target) {
		Object.keys(this.spriteUrls).map((key) => {
		   this.spriteUrls[key] = `<img src="${this.spriteUrls[key]}" />`;
		});
		for (let key in this.spriteUrls) {
			$(target).append(this.spriteUrls[key]);
		}
	}
}

const createPokemonByName = ((name) => {
	$.getJSON(`http://pokeapi.co/api/v2/pokemon/${name}/`, (data) => {
	}).then((data) => {
		let pokemon = new Pokemon(data)
		$("#results").append(pokemon.name);
		pokemon.convertAndDrawSprites("#results");
	}).catch((err) => {
		return console.log(err);
	});
});

$(document).ready(function () {
	$( "#search-form" ).on( "submit", function(event) {
		event.preventDefault();
		let pokemon = createPokemonByName($(this).children()[0].value.toLowerCase());
	});
});


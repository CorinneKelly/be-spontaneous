var pokemonList = {};

var race = [];

var raceStatus;

var $canvas;

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

class Move {
	constructor(data) {
		this.name = data.name;
		this.url = data.url;
	}

	getURL() {
		return this.url
	}

	getMoreInfo() {
		return $.getJSON(this.getURL(), (data) => {
		}).then((data) => {
			debugger;
		});
	}
}

class Pokemon {
	constructor(data) {
		this.name = data.name;
		this.id = data.id;
		this.weight = data.weight;
		this.height = data.height;
		this.spriteUrls = data.sprites;
		// convert spriteUrls to be wrapped in an image tag
		// Object.keys(this.spriteUrls).map((key) => {
		//    this.spriteUrls[key] = `<img src="${this.spriteUrls[key]}" />`;
		// });
		this.moves = data.moves.map((move) => { return new Move(move.move) });

		this.position = {};
		this.faceSprite = new Image();
		this.faceSprite.src = this.spriteUrls.front_default;
		this.speed = 0;
	}

	currentPosition() {
		return this.position;
	}

	updatePosition(position) {
		this.position.x = position.x;
		this.position.y = position.y;
	}

	drawSprite(target) {
		// for (let key in this.spriteUrls) {
		// 	$(target).append(this.spriteUrls[key]);
		// }
		$(target).append(`<img src="${this.spriteUrls.front_default}" />`)
	}

	drawMoves(target) {
		$(target).append()
	}
}

const getWinner = (() => {
	let pokemon;
	race.forEach((p) => {
		if (p.currentPosition().x >= 1000) {
			pokemon = p;
		}
	});
	return pokemon;
});

const updateRace = (() => {
	let context = $canvas[0].getContext('2d');
	winner = getWinner();
	if (!winner) {
		context.clearRect(0, 0, $canvas.width(), $canvas.height());
		race.forEach((p) => {
			p.updatePosition({x: p.currentPosition().x + 1 + p.speed, y: p.currentPosition().y});
			context.drawImage(p.faceSprite, p.currentPosition().x, p.currentPosition().y);
		});
	} else {
		winner.updatePosition({x: 400, y: 400});
		context.clearRect(0, 0, $canvas.width(), $canvas.height());
		context.font="32px Georgia";
		context.fillText(`THE WINNER IS ${winner.name}`, 400, 380);
		context.drawImage(winner.faceSprite, winner.currentPosition().x, winner.currentPosition().y);
		clearInterval(raceStatus);
		let button = document.createElement('input');
		button.type = "submit";
		button.id = "start-button";
		button.value = "Restart";
		button.onclick = function(event) {
			event.preventDefault();
			startRace();
		}
		$('#race').append(button)
	}
});

const restartLine(() => {
	
});

const initializeRace = (() => {
	$("#start-line").hide();
	$("#search-form").hide();
	$("#race").show();
	let context = $canvas[0].getContext('2d');
	let yPos = 0;
	race.forEach((pokemon) => {
		pokemon.speed = ((Math.random() * 3) + 1);
		pokemon.updatePosition({x: 0, y: yPos});
		context.drawImage(pokemon.faceSprite, 0, yPos);
		yPos += 80
	});
});

const startRace = (() => {
	initializeRace();
	raceStatus = setInterval(function() {
		updateRace();
	}, 10)
});

const addStartButton = (() => {
	if (race.length >= 2 && !($('#start-button').length)) {
		let button = document.createElement('input');
		button.type = "submit";
		button.id = "start-button";
		button.value = "Start The Race";
		button.onclick = function(event) {
			event.preventDefault();
			startRace();
		}
		$('#start-line').append(button)
	}
});

const createPokemonByName = ((name) => {
	$.getJSON(`http://pokeapi.co/api/v2/pokemon/${name}/`, (data) => {
	}).then((data) => {
		let pokemon = new Pokemon(data)
		// $("#start-line").append(pokemon.name);
		pokemon.drawSprite("#start-line");
		race.push(pokemon);
		addStartButton();
	}).catch((err) => {
		return console.log(err);
	});
});

$(document).ready(function () {
	$canvas = $('canvas');
	$( "#search-form" ).on( "submit", function(event) {
		event.preventDefault();
		createPokemonByName($(this).children()[0].value.toLowerCase());
	});
});


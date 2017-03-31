var pokemonList = {};

var race = [];

var raceStatus;

var $canvas;

var backgrounds = { water: 'http://www.omenkaonline.com/wp-content/uploads/2015/10/Internet_of_things_for_water.jpg', 
fire: 'https://thumb1.shutterstock.com/display_pic_with_logo/3900026/406912483/stock-vector-fire-icon-set-fire-vector-logo-collection-406912483.jpg',
grass: 'https://static.pexels.com/photos/1826/wood-nature-sunny-forest.jpg', electric: 'http://cdn.inquisitr.com/wp-content/uploads/2016/05/lightning-storm-deaths.jpg',
normal: 'http://weknownyourdreamz.com/images/house/house-03.jpg', fighting: 'https://previews.123rf.com/images/ermess/ermess1211/ermess121100014/16436283-medieval-battle-axe-antique-weapon-used-in-middle-ages-fighting-Stock-Photo.jpg',
poision: 'https://img.clipartfest.com/e597ef4ad69622ad84ed785e74493d99_poison-bottle-clipart-cliparts-poison-bottle-clipart_300-300.png',
ground: 'https://thumbs.dreamstime.com/z/dry-cracked-ground-desert-34450761.jpg', rock: 'https://s-media-cache-ak0.pinimg.com/originals/cd/37/ac/cd37ac9163e1f28ccf2d3435d480652a.jpg',
bug: 'http://youthvoices.net/sites/default/files/image/22981/may/bug.jpg', ghost: 'http://www.slate.com/content/dam/slate/articles/news_and_politics/explainer/2011/10/111028_EX_ghostFW.jpg.CROP.original-original.jpg',
steel: 'http://cfnewsads.thomasnet.com/images/cmsimage/image/stainless-steel.jpg', psychic: 'http://www.howelloperahouse.com/wp-content/uploads/2015/09/psychic.fair_.jpg', 
ice: 'https://www.ice-energy.com/wp-content/uploads/2016/03/header-home.jpg', dragon: 'http://img13.deviantart.net/16d9/i/2016/272/8/8/faster_you_sack_of_meat__by_pindurski-daj95nk.jpg',
dark: 'http://vignette1.wikia.nocookie.net/creepypasta/images/a/a4/Light-in-the-dark.jpg/revision/latest?cb=20141001155940',
fairy: 'https://cdn.vectorstock.com/i/composite/91,97/cute-spring-fairy-vector-169197.jpg', unknown: 'https://s-media-cache-ak0.pinimg.com/originals/6e/00/0e/6e000ec02c7c93eef58146bcb1c63682.jpg',
shadow: 'https://static01.nyt.com/images/2015/03/01/opinion/sunday/01menagerie-mondo-cane-slide-W0OF/01menagerie-mondo-cane-slide-W0OF-videoSixteenByNine3000-v2.jpg' }

const randomProperty = function (obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};

class Move {
	constructor(data) {
		this.name = data.name;
		this.url = data.url;
	}

	getURL() {
		return this.url;
	}

	getMoreInfo() {
		return $.getJSON(this.getURL(), (data) => {
		}).then((data) => {
		});
	}
}

class Pokemon {
	constructor(data) {
		this.name = data.name;
		this.id = data.id;
		this.weight = data.weight;
		this.height = data.height;
		this.types = data.types.map((type) => { return type.type.name })
		this.spriteUrls = data.sprites;
		// convert spriteUrls to be wrapped in an image tag
		// Object.keys(this.spriteUrls).map((key) => {
		//    this.spriteUrls[key] = `<img src="${this.spriteUrls[key]}" />`;
		// });
		this.moves = data.moves.map((move) => { return new Move(move.move) });

		this.position = {};
		this.faceSprite = new Image();
		this.faceSprite.src = this.spriteUrls.front_default;
		//this.speed = 0;
		this.speed = data.stats[0].base_stat
		this.modifiedSpeed = this.speed;
		this.wins = 0;
		this.burnout = false;
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
		$(target).append(`<div id="${this.id}"></div>`)
		$('#'+this.id).append(`<img src="${this.spriteUrls.front_default}" />`)
		let button = document.createElement('input');
		button.type = "submit";
		button.id = `delete-button-${this.id}`;
		button.value = "Delete";
		button.onclick = (event) => {
			event.preventDefault();
			deleteFromRace(this);
			$('#'+this.id).remove();
		}
		$('#'+this.id).append(button)
		$('#'+this.id).append(`<p>Wins: ${this.wins}`)
	}

	drawMoves(target) {
		$(target).append()
	}
}

const deleteFromRace = ((pokemon) => {
	race = race.filter((poke) => { return pokemon != poke })
	if (race.length < 2)
		$("#start-button").hide();
});

const getWinner = (() => {
	let pokemon;
	race.forEach((p) => {
		if (p.currentPosition().x >= 1000) {
			pokemon = p;
		}
	});
	return pokemon;
});

const getFirstPlace = (() => {
	let pokemon = race[0];
	race.forEach((p) => {
		if (p.currentPosition().x > pokemon.currentPosition().x)
			pokemon = p;
	});
	return pokemon;
});

const getRandomBackRound = (() => {

});

const updateRace = (() => {
	let context = $canvas[0].getContext('2d');
	winner = getWinner();
	if (!winner) {
		context.clearRect(0, 0, 1099, $canvas.height());
		race.forEach((p) => {
			if (p.burnout) {
				p.burnout = (Math.floor(Math.random() * 600) + 1) == 4 ? false : true
				p.updatePosition({x: (p.currentPosition().x + (p.speed / 330)), y: p.currentPosition().y})
			} else {
				p.burnout = (Math.floor(Math.random() * 80) + 1) == 4 ? true : false
				p.updatePosition({x: (p.currentPosition().x + (((Math.random() * 2) + 1)) + (p.speed / 330)), y: p.currentPosition().y})

				// Replaced with the burnout mechanic
				// getFirstPlace() == p ? p.updatePosition({x: p.currentPosition().x + (p.speed / 330), y: p.currentPosition().y})
				// : p.updatePosition({x: p.currentPosition().x
				// 	+ (((Math.random() * 2) + 1)) + (p.speed / 330),
				// 	y: p.currentPosition().y});
			}
			context.drawImage(p.faceSprite, p.currentPosition().x, p.currentPosition().y);
		});
	} else {
		winner.wins++;
		$('#'+winner.id + ' p').replaceWith(`<p>Wins: ${winner.wins}</p>`);
		winner.updatePosition({x: 400, y: 400});
		context.clearRect(0, 0, 1099, $canvas.height());
		context.font="32px Georgia";
		context.fillText(`THE WINNER IS ${winner.name}`, 400, 380);
		context.drawImage(winner.faceSprite, winner.currentPosition().x, winner.currentPosition().y);
		clearInterval(raceStatus);
	}
});

const resetPokemon = (() => {
	race.forEach((p) => {
		p.burnout = false;
	});
});

const restartLine = (() => {
	$("#race").hide();	
	$("#start-line").show();
	$("#search-form").show();
	if (raceStatus)
		clearInterval(raceStatus);

	resetPokemon();
	race.forEach((p) => {
		p.updatePosition({x: 0, y: p.currentPosition().y})
	});
});

const initializeRace = (() => {
	$("#start-line").hide();
	$("#search-form").hide();
	$("#race").show();
	let button = document.createElement('input');
	button.type = "submit";
	button.id = "restart-button";
	button.value = "Restart";
	button.onclick = function(event) {
		event.preventDefault();
		restartLine();
	}
	if (!$('#restart-button').length)
		$('#race').append(button)
	let context = $canvas[0].getContext('2d');
	let yPos = 0;
	race.forEach((pokemon) => {
		pokemon.updatePosition({x: 0, y: yPos});
		context.drawImage(pokemon.faceSprite, 0, yPos);
		yPos += 80
	});
	context.save();
    context.translate(1150, 100);
    context.rotate(-Math.PI/2);
    context.fillText("THE FINISH LINE", 1150, 100);
    context.restore();
	context.beginPath();
	context.moveTo(1100, 0);
	context.lineTo(1100, 1000);
	context.stroke();
});

const startRace = (() => {
	initializeRace();
	raceStatus = setInterval(function() {
		updateRace();
	}, 10)
});

const addStartButton = (() => {
	if (race.length >= 2) {
		if (!$('#start-button').length) {
			let button = document.createElement('input');
			button.type = "submit";
			button.id = "start-button";
			button.value = "Start The Race";
			button.onclick = function(event) {
				event.preventDefault();
				startRace();
			}
			$('#start-line').prepend(button)
		} else {
			$('#start-button').show();
		}
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
		$(this).children()[0].value = ""
	});
});
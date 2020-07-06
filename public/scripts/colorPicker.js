// var objs = {
//     num1: 0,
//     num2: 0,
//     num3: 0,
// }

//function fpr random generated number for colors and ID's (Global function)
function getRandoms(val) {
	ranDom1 = Math.floor(Math.random() * Math.floor(val) + 1);
	return ranDom1;
}

//Varaible Declarations
var arr = [ 1, 1, 1 ];
var span1st = document.getElementById('span1');
var span2nd = document.getElementById('span2');
var span3rd = document.getElementById('span3');

var hard = document.getElementById('hard');
var easy = document.getElementById('easy');
var bago = document.getElementById('new');

var randoms1 = document.getElementById('boxr1');
var randoms2 = document.getElementById('boxr2');
var randoms3 = document.getElementById('boxr3');
var randoms4 = document.getElementById('boxr4');
var randoms5 = document.getElementById('boxr5');
var randoms6 = document.getElementById('boxr6');
var winner = document.getElementById('greed');

var kahon = document.querySelectorAll('.kahon');

var gameOver = false;
var tama = '';

//function for difficulty
function difficulti(handicapped) {
	if (handicapped == 'Lisod') {
		//Randon ID Generator
		var correct = document.getElementById('boxr' + getRandoms(6));

		//for loop para sa tanan random color boxes
		for (var x = 0; x < kahon.length; x++) {
			kahon[x].style.backgroundColor =
				'rgb(' + getRandoms(254) + ',' + getRandoms(254) + ',' + getRandoms(254) + ')'; //------------------->>ACCUMULATIVE PATTERN
		}

		//random colors from boxes 1 to 6
		// randoms1.style.backgroundColor = "rgb(" + getRandoms(254) + "," + getRandoms(254) + "," + getRandoms(254) + ")"
		// randoms2.style.backgroundColor = "rgb(" + getRandoms(254) + "," + getRandoms(254) + "," + getRandoms(254) + ")"
		// randoms3.style.backgroundColor = "rgb(" + getRandoms(254) + "," + getRandoms(254) + "," + getRandoms(254) + ")"
		// randoms4.style.backgroundColor = "rgb(" + getRandoms(254) + "," + getRandoms(254) + "," + getRandoms(254) + ")"
		// randoms5.style.backgroundColor = "rgb(" + getRandoms(254) + "," + getRandoms(254) + "," + getRandoms(254) + ")"
		// randoms6.style.backgroundColor = "rgb(" + getRandoms(254) + "," + getRandoms(254) + "," + getRandoms(254) + ")"

		randoms4.hidden = false;
		randoms5.hidden = false;
		randoms6.hidden = false;
	} else if (handicapped == 'Dali') {
		//Randon ID Generator
		var correct = document.getElementById('boxr' + getRandoms(3));

		for (var x = 0; x < kahon.length; x++) {
			kahon[x].style.backgroundColor =
				'rgb(' + getRandoms(254) + ',' + getRandoms(254) + ',' + getRandoms(254) + ')';
		}

		// //random colors from boxes 1 to 3
		// randoms1.style.backgroundColor = "rgb(" + getRandoms(254) + "," + getRandoms(254) + "," + getRandoms(254) + ")"
		// randoms2.style.backgroundColor = "rgb(" + getRandoms(254) + "," + getRandoms(254) + "," + getRandoms(254) + ")"
		// randoms3.style.backgroundColor = "rgb(" + getRandoms(254) + "," + getRandoms(254) + "," + getRandoms(254) + ")"

		randoms4.hidden = true;
		randoms5.hidden = true;
		randoms6.hidden = true;
	}
	//the box should be guessed and located at random boxes
	for (var x = 0; x <= 2; x++) {
		arr[x] = getRandoms(254);
	}
	span1st.textContent = arr[0];
	span2nd.textContent = arr[1];
	span3rd.textContent = arr[2];

	tama = correct.style.backgroundColor = 'rgb(' + arr[0] + ', ' + arr[1] + ', ' + arr[2] + ')';
}

//function for selecting the correct color box
function boxesCol(idName) {
	if (!gameOver) {
		if (idName.style.backgroundColor == tama) {
			center.textContent = 'Correct';
			center.setAttribute('class', 'amat');
			randoms1.hidden = true;
			randoms2.hidden = true;
			randoms3.hidden = true;
			randoms4.hidden = true;
			randoms5.hidden = true;
			randoms6.hidden = true;
			idName.hidden = false;
			winner.removeAttribute('class');
			winner.setAttribute('class', 'greed');
			gameOver = true;
		} else {
			center.textContent = 'Wrong';
			center.setAttribute('class', 'imal');
		}
	}
}

//setting for difficulty (Easy or Hard)
hard.addEventListener('click', function() {
	if (!gameOver) {
		difficulti('Lisod');
		center.textContent = 'Choose Color';
	} else {
		gameOver = true;
	}
});

easy.addEventListener('click', function() {
	if (!gameOver) {
		difficulti('Dali');
		center.textContent = 'Choose Color';
	} else {
		gameOver = true;
	}
});

//new game is selected
bago.addEventListener('click', function() {
	span1st.textContent = 0;
	span2nd.textContent = 0;
	span3rd.textContent = 0;
	randoms1.removeAttribute('style');
	randoms2.removeAttribute('style');
	randoms3.removeAttribute('style');
	randoms4.removeAttribute('style');
	randoms5.removeAttribute('style');
	randoms6.removeAttribute('style');
	center.textContent = 'Pick Difficulty';
	center.removeAttribute('class');
	randoms1.hidden = false;
	randoms2.hidden = false;
	randoms3.hidden = false;
	randoms4.hidden = false;
	randoms5.hidden = false;
	randoms6.hidden = false;
	winner.removeAttribute('class');
	winner.setAttribute('class', 'grid');
	gameOver = false;
});

//when one of the color boxes is selected
randoms1.addEventListener('click', function() {
	boxesCol(this);
});

randoms2.addEventListener('click', function() {
	boxesCol(this);
});

randoms3.addEventListener('click', function() {
	boxesCol(this);
});

randoms4.addEventListener('click', function() {
	boxesCol(this);
});

randoms5.addEventListener('click', function() {
	boxesCol(this);
});

randoms6.addEventListener('click', function() {
	boxesCol(this);
});

// boxr1.addEventListener("click",function(){
//         if(boxr1.style.backgroundColor == tama){
//             center.textContent = "Correct";
//             center.style.color = "green";
//         }else{
//             center.textContent = "Praktis sa kol"
//             center.style.color = "red";
//         };
// });

//mag himo kag id sa HTML "random(numer)". kanang number sa id i loop nimo siya para ddto
//ang pag manipulate sa colors

//objs.num1 = getRandoms(255);
//   objs.num2 = getRandoms(255);
//   objs.num3 = getRandoms(255);

//   span1st.textContent = objs.num1
//   span2nd.textContent = objs.num2
//   span3rd.textContent = objs.num3

//   correct.style.backgroundColor = "rgb(" + objs.num1 + "," + objs.num2 + "," + objs.num3 + ")"

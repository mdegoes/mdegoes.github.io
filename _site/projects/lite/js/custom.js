$(document).ready(function(){

	function returnRandom(arraylength){
		return randomNumber = Math.floor(Math.random() * arraylength);
	}

	function assignTiming(){
		var timingList = ['short', 'medium', 'long'],
			selectedSpeed = returnRandom(timingList.length);

		return timingList[selectedSpeed];
	}

	function nameComposite(name){
		var nameLength = name.length,
			composite = '',
			nameSegmentation = name.split('');

		$.each(nameSegmentation, function (i, el) {
			composite = composite + ('<div class="flip-card-container"><div class="flip-card"><div class="flip-card-front">' + el + '</div><div class="flip-card-back">0</div></div></div>');
		});

		return composite;
	}

	function renderResults(value, index){
		var resultsContainer = '#results',
			compositeDiv = '<div class="row"><span>' + (index + 1) + '</span>' + nameComposite(value) + '</div>';

		$(resultsContainer).append(compositeDiv);
	}

	function sortResults(data){
		var results = data,
			listLength = results.length,
			countDown = listLength;

		/*CLEAR RESULTS*/
		$('#results').empty();

		/*RENDER RESULTS*/
		for (i = 0; i < listLength; i++) { 
			var randomItem = returnRandom(countDown);

			renderResults(results[randomItem], i);
			results.splice($.inArray(results[randomItem], results),1);

			countDown --;
		}
	}

	function getData(list){
		console.log(list);
		sortResults(list);
	}

	function renderActive(){
		$("#results span").each(function(){
			console.log('test');
		});
	}

	function animateLetters(){
		$('#results .flip-card-container').each(function(){
			var classTiming = assignTiming();

			$(this).addClass('active-' + classTiming);
		});
	}

	$("#showlist").click(function(){
		var listAttendee = ["Ana.Domb",
	        "Brian.Bradley",
	        "Carla.Ribeiro",
	        "Jim.McNamara",
	        "Matthew.DeGoes",
	        "Pablo.Ponce",
	        "Vale.Staffieri",
	        "Adriana.Benavides",
	        "Cheryl.Gasbarro",
	        "Javier.Ferraez",
	        "John.Daley",
	        "Mariana.Lopez",
	        "Meghan.Mahar",
	        "Stephanie.Groot",
	        "Ruben.Araya",
	        "Sarah.Cox",
	        "Sean.Sanborn",
	        "Chris.Michela",
	        "Kevin.Hovell",
	        "Nisha.Sultan",
	        "James Eugair"];

		getData(listAttendee);

		setTimeout(animateLetters, 500);
	});

	$(document.body).on('click', '#results .row' ,function(){
		$(this).toggleClass('disabled');
	});

});
//GET WHAT IS SELECTED:
$(document).ready(function () { // we must wait for the DOM to be ready as the browser can take a little while to read all of the HTML and build the elements

	let person_template = _.template($("#person_template").html()), //outside to save processing and need to rebuild that variable each time. Could be inside the bind, but wastes processing.
		option_template = _.template($("#select_template").html());

	_.each(data, function (person) {
		$("#character").append(option_template({ boro: person.boro }));
	});

	$('#enter').on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior
		// DO STUFF...
		persons_boro = $("#character").val();
		result = _.find(data, { boro: persons_boro });

		console.log(result);

		$("#favorites").html(person_template({ person: result }));
	});

	var result = _(data)
		.groupBy('boro')
		.map((items, boro) => ({ boro, count: items.length }))
		.value();

	console.log(result);

	var result = _(data)
		.groupBy('statistical_murder_flag')
		.map((items, statistical_murder_flag) => ({ statistical_murder_flag, count: items.length }))
		.value();

	console.log(result);


	//document.write('<pre>' + JSON.stringify(result, 0, 4) + '</pre>');


}); // closes document ready
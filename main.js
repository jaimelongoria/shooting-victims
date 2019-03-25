//GET WHAT IS SELECTED:
$(document).ready(function () { // we must wait for the DOM to be ready as the browser can take a little while to read all of the HTML and build the elements

	let person_template = _.template($("#person_template").html()), //outside to save processing and need to rebuild that variable each time. Could be inside the bind, but wastes processing.
		option_template = _.template($("#select_template").html());

	_.each(data, function (person) {
		$("#character").append(option_template({ name: person.boro }));
	});

	_.each(data, function (person) {
		$("#copjuris").append(option_template({ name: person.precinct }));
	});

	_.each(data, function (person) {
		$("#killed").append(option_template({ name: person.statistical_murder_flag }));
	});

	_.each(data, function (person) {
		$("#age").append(option_template({ name: person.vic_age_group }));
	});

	_.each(data, function (person) {
		$("#gender").append(option_template({ name: person.vic_sex }));
	});

	_.each(data, function (person) {
		$("#race").append(option_template({ name: person.vic_race }));
	});

	$('#enter').on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior
		// DO STUFF...
		persons_boro = $("#character").val();
		result = _.find(data, { name: persons_boro });
		persons_precinct = $("#copjuris").val();
		result = _.find(data, { name: persons_precinct });

		console.log(result);

		$("#shootings").html(person_template({ person: result }));
	});









}); // closes document ready
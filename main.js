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

	var result = _(data)
		.groupBy('vic_age_group')
		.map((items, vic_age_group) => ({ vic_age_group, count: items.length }))
		.value();

	console.log(result);


	var result = _(data)
		.groupBy('precinct')
		.map((items, precinct) => ({ precinct, count: items.length }))
		.value();

	console.log(result);


	var result = _(data)
		.groupBy('vic_age_group')
		.map((items, vic_age_group) => ({ vic_age_group, count: items.length }))
		.value();

	console.log(result);


	var result = _(data)
		.groupBy('vic_sex')
		.map((items, vic_sex) => ({ vic_sex, count: items.length }))
		.value();

	console.log(result);


	var result = _(data)
		.groupBy('vic_race')
		.map((items, vic_race) => ({ vic_race, count: items.length }))
		.value();


	console.log(result);

	//https://stackoverflow.com/questions/37347714/lodash-count-unique-of-field
	//link to help do counts


}); // closes document ready
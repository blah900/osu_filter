DESIRED_DIFFICULTY = ['expert', 'insane'];

$(document).ready(function() {
	var difficulty_filter = $.map(DESIRED_DIFFICULTY,
		function(item) {
			return '.' + item;
		}).join(',');
	var desired_elems = $(difficulty_filter).parents('.beatmap');
	var filtered = $('.beatmap').not(desired_elems).hide();

	$('.newHeader').append(' - Filtering ' + DESIRED_DIFFICULTY +
						   ' : Removed: ' + filtered.length);
});
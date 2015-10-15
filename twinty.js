


// # put iframe on top of twitter feed
// #  - figure out the xpath
// #  - figure out how to insert (jquery html)
// # load rails page into the iframe
// #  - jquery load command
// #  - on off/on

// insert AJAX here

$.ajax('localhost:3000',
	{
		method: 'get',
		datatype: 'json',
	}).done(function(data) {
		$('.tweet').each(function(index, value){
			tweet_id = $(value).attr('data-tweet-id')

			if !$.inArray(tweet_id, data) {
				$(value).hide();
			}
		})
	})

document.onready

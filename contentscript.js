


// # put iframe on top of twitter feed
// #  - figure out the xpath
// #  - figure out how to insert (jquery html)
// # load rails page into the iframe
// #  - jquery load command
// #  - on off/on

// insert AJAX here

var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};

// var twitterBrowser = $.browser;

// var s = document.createElement('script');
// s.src = chrome.extension.getURL('jquery.js');
// (document.head||document.documentElement).appendChild(s);
// // s.onload = function() {
// //     s.parentNode.removeChild(s);
// // };

// $.browser = twitterBrowser;

// $(document).ready(function(){
// $.ajax('localhost:3000/home.json',
// 	{
// 		method: 'get',
// 		datatype: 'json',
// 	}).done(function(data) {
// 		console.log(data);
// 		$('.tweet').each(function(index, value){
// 			tweet_id = $(value).attr('data-tweet-id')

// 			if !$.inArray(tweet_id, tweets_id_array, data) {
// 				$(value).hide();
// 			}
// 		})
// 	})

// })

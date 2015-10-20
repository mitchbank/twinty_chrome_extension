// // alert("Yay, you made it to Twitter. Good job!")
console.log('first')
var stream = document.querySelector('.stream-container');

var element = document.createElement('iframe');

element.src = 'http://localhost:3000/home';

stream.insertBefore(element, stream.firstChild);
console.log('last')


// // var $j = jQuery.noConflict();
// // $j('.stream').prepend('<h2>Twinty!</h2>');
// console.log("This happens after the block")


// var request = new XMLHttpRequest();
// request.open('GET', 'http://localhost:3000/home.json', true);
// request.onload = function() {
// 	console.log('working')
// }
// request.send();


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
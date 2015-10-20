// alert("Yay, you made it to Twitter. Good job!")

var stream = document.querySelector('.stream-container');

var element = document.createElement('h1');

element.innerHTML = "Twinty";

stream.insertBefore(element, stream.firstChild);


// var $j = jQuery.noConflict();
// $j('.stream').prepend('<h2>Twinty!</h2>');
console.log("This happens after the block")
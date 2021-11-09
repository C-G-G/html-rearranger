// Create a heading: “Below ground veggies”
// Create a list to hold the below ground veggies
// Add the heading and list to the document
// Create a second heading for “Above ground veggies” and add it to the document
// Create a list to hold the above ground veggies and add it to the document

var $h2Below = $('<h2>Below ground veggies</h2>');
var $ulBelow = $('<ul>');
var $h2Above = $('<h2>Above ground veggies</h2>');
var $ulAbove = $('<ul>');

$('body').append($h2Below);
$('body').append($ulBelow);

$('body').append($h2Above);
$('body').append($ulAbove);

// Loop over the veggies that exist in the HTML currently and add them to the appropriate list
$('li').each(function () {
  if ($(this).hasClass('below')) {
    $ulBelow.append($(this));
  } else {
    $ulAbove.append($(this));
  }
});

// Remove the veggies from the old list

// Completely remove the original list

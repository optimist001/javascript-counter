//decaring all variables

var counterHolder = document.getElementById('counterHolder');
var decrement = document.getElementById('decrement');
var increment = document.getElementById('increment');

var number = 0;


//function to be performed when add count button is pressed

increment.addEventListener("click", function(){
    number++;
    counterHolder.innerHTML = number;
});

//function to be performed when lower count button is pressed
decrement.addEventListener("click", function(){
    number--;
    counterHolder.innerHTML = number;
});
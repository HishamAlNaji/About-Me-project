'use strict'

// User's 5 Questions  :
var rightA = 0 ;

var userQ1 = '';
var userQ2 = '';
var userQ3 = '';
var userQ4 = '';
var userQ5 = '';

while (userQ1 != 'yes' && userQ1 != 'no') {

    userQ1 = prompt('do you think i use sarcasm ?');
    userQ1 = userQ1.toLowerCase();
    if (userQ1 == 'yes') {
        alert("Right answer");
        rightA++;
    } else if (userQ1 == 'no') {
        alert("wrong answer")
    }
}
// console.log('do you think i use sarcasm ?' + userQ1);

while (userQ2 != 'yes' && userQ2 != 'no') {

    userQ2 = prompt('do you think i am heavy ?');
    userQ2 = userQ2.toLowerCase();
    if (userQ2 == 'yes') {
        alert("wrong answer");
    } else if (userQ2 == 'no') {
        alert("right answer")
        rightA++;
    }
}
// console.log('do you think i am heavy ?' + userQ1);


while (userQ3 != 'yes' && userQ3 != 'no') {

    userQ3 = prompt('do you think i can swim ?');
    userQ3 = userQ3.toLowerCase();
    if (userQ3 == 'yes') {
        alert("Right answer");
        rightA++;
    } else if (userQ3 == 'no') {
        alert("wrong answer")
    }
}
// console.log('do you think i can swim ?' + userQ1);

while (userQ4 != 'yes' && userQ4 != 'no') {

    userQ4 = prompt('do you think that i am Committed to my religion ?');
    userQ4 = userQ4.toLowerCase();
    if (userQ4 == 'yes') {
        alert("Right answer");
        rightA++;
    } else if (userQ4 == 'no') {
        alert("wrong answer")
    }
}
// console.log('do you think that i am Committed to my religion ?' + userQ1);

while (userQ5 != 'yes' && userQ5 != 'no') {

    userQ5 = prompt('do you think i watch football ?');
    userQ5 = userQ5.toLowerCase();
    if (userQ5 == 'yes') {
        alert("Right answer");
        rightA++;
    } else if (userQ5 == 'no') {
        alert("wrong answer")
    }
}
// console.log('do you think i watch football ?' + userQ1);



// Qestion #6
var userQ6 ;
var i = 0;
while (userQ6 != 11 && i<4) {

    userQ6 = prompt('Pick a number between 1-15'); // the number is 11 :)
    if (userQ6 == 11) {
        alert("Thats RIGHT");
        rightA++;
    } else if (userQ6 < 11) {
        alert("Too low");
    }else if (userQ6 > 11) {
        alert("Too high");
    }
    i++;
    if (i == 4) {
        alert('Sorry you have been exhausted all attempts and the right number is 11')
    }
}
// console.log('The user pick' + userQ6);

// Qestion #7
var country = ['saudia', 'syria', 'uae']
var userQ7;
var correctA = false;
var x;
var i = 0;
var z = 5;
while (!correctA && i < 6) {
    userQ7 = prompt('Pick from these countries that I may have visited before : Saudia , Turkey , Syria , Uae , Spain , Germany , Iraq , Palestine , Egypt , Usa , Qatar');
    userQ7 = userQ7.toLowerCase();
    for (var x = 0; x < 3; x++) {
        if (userQ7 == country[x]) {
            correctA = true;
            alert('Thats right')
            rightA++;
        }
    }
    if (!correctA) {
        alert('Worng but you still have ' + z + ' attempts')
    }
    z--
    i++
    if (i == 6) {
        alert('Sorry you have been exhausted all attempts and the countries are : saudia, uae and syria')
    }
} 

if (rightA >= 4) {
    alert('Great , You answered ' + rightA + ' questions correct !')
}else{
    alert('You just answered ' + rightA + ' questions correct')
}
// console.log('the user pick' + userQ7);

// User welcoming :

alert('Now we need to know about you :) ')

function userName() {

    var UN = prompt('What is your name please ')

    alert('Wlecome to our website ' + UN)

    return UN;
}
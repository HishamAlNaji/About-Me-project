'use strict'

// User's 5 Questions  :

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
    }
}
// console.log('do you think i am heavy ?' + userQ1);


while (userQ3 != 'yes' && userQ3 != 'no') {

    userQ3 = prompt('do you think i can swim ?');
    userQ3 = userQ3.toLowerCase();
    if (userQ3 == 'yes') {
        alert("Right answer");
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
    } else if (userQ5 == 'no') {
        alert("wrong answer")
    }
}
// console.log('do you think i watch football ?' + userQ1);


// User welcoming :

alert('Now we need to know about you :) ')

function userName() {

    var UN = prompt('What is your name please ')

    alert('Wlecome to our website ' + UN)

    return UN;
}

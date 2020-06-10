'use strict;';


// User welcoming :

alert('We need to know about you :) ');
var UN ;

function userName() {

    UN = prompt('What is your name please ');

    alert('Wlecome to our website ' + UN);

    return UN;
}
userName();

// User's 5 Questions  :
var rightA = 0;






function q1 (){
    var userQ1 = '';
while ((userQ1 != 'yes' && userQ1 != 'y') && (userQ1 != 'no'&& userQ1!= 'n')) {

    userQ1 = prompt('do you think i use sarcasm ? yes/no');
    userQ1 = userQ1.toLowerCase();
    if (userQ1 == 'yes') {
        alert("Right answer");
        rightA++;
    } else if (userQ1 == 'no') {
        alert("wrong answer")
    }else if (userQ1 == 'y') {
        alert("right answer")
        rightA++;
    }else if (userQ1 == 'n') {
        alert("wrong answer")
    }
}
}
// console.log('do you think i use sarcasm ?' + userQ1);
function q2 (){
    var userQ2 = '';
while ((userQ2 != 'yes' && userQ2 != 'y') && (userQ2 != 'no'&& userQ2!= 'n')) {

    userQ2 = prompt('do you think i am heavy ? yes/no');
    userQ2 = userQ2.toLowerCase();
    if (userQ2 == 'yes') {
        alert("wrong answer")
    } else if (userQ2 == 'no') {
        alert("right answer")
        rightA++;
    }else if (userQ2 == 'y') {
        alert("wrong answer")
    }else if (userQ2 == 'n') {
        alert("right answer")
        rightA++;
    }
}
}
// console.log('do you think i am heavy ?' + userQ1);

function q3 (){
    var userQ3 = '';
while ((userQ3 != 'yes' && userQ3 != 'y') && (userQ3 != 'no'&& userQ3!= 'n')) {

    userQ3 = prompt('do you think i can swim ? yes/no');
    userQ3 = userQ3.toLowerCase();
    if (userQ3 == 'yes') {
        alert("Right answer");
        rightA++;
    } else if (userQ3 == 'no') {
        alert("wrong answer")
    }else if (userQ3 == 'y') {
        alert("right answer")
        rightA++;
    }else if (userQ3 == 'n') {
        alert("wrong answer")
    }
}
}
// console.log('do you think i can swim ?' + userQ1);

function q4 (){
    var userQ4 = '';
while ((userQ4 != 'yes' && userQ4 != 'y') && (userQ4 != 'no'&& userQ4!= 'n')) {

    userQ4 = prompt('do you think that i am Committed to my religion ?yes/no');
    userQ4 = userQ4.toLowerCase();
    if (userQ4 == 'yes') {
        alert("Right answer");
        rightA++;
    } else if (userQ4 == 'no') {
        alert("wrong answer")
    }else if (userQ4 == 'y') {
        alert("right answer")
        rightA++;
    }else if (userQ4 == 'n') {
        alert("wrong answer")
    }
}
}
// console.log('do you think that i am Committed to my religion ?' + userQ1);
function q5 (){
    var userQ5 = '';
while ((userQ5 != 'yes' && userQ5 != 'y') && (userQ5 != 'no'&& userQ5!= 'n')) {

    userQ5 = prompt('do you think i watch football ?yes/no');
    userQ5 = userQ5.toLowerCase();
    if (userQ5 == 'yes') {
        alert("Right answer");
        rightA++;
    } else if (userQ5 == 'no') {
        alert("wrong answer")
    }else if (userQ5 == 'y') {
        alert("right answer")
        rightA++;
    }else if (userQ5 == 'n') {
        alert("wrong answer")
    }
}
}
// console.log('do you think i watch football ?' + userQ1);



// Qestion #6
function q6 (){
var userQ6;
var i = 0;
while (userQ6 != 11 && i < 4) {

    userQ6 = prompt('Pick a number between 1-15'); // the number is 11 :)
    if (userQ6 == 11) {
        alert("Thats RIGHT");
        rightA++;
    } else if (userQ6 < 11) {
        alert("Too low");
    } else if (userQ6 > 11) {
        alert("Too high");
    }
    i++;
    if (i == 4) {
        alert('Sorry you have been exhausted all attempts and the right number is 11')
    }
}
}
// console.log('The user pick' + userQ6);
// Qestion #7
function q7 (){
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
}
// # of right questions :)
q1();
q2();
q3();
q4();
q5();
q6();
q7();

if (rightA >= 4) {
    alert('Great , You answered ' + rightA + ' questions correct !')
} else {
    alert('You just answered ' + rightA + ' questions correct')
}
// console.log('the user pick' + userQ7);

//alert("Hello")
//var deposit = prompt('How much deposit:');
//alert('Deposit: '+ deposit);
//console.log('You are cool porson')

// control flow
var hot = false;
var temp = prompt('What is temp?');

if (temp > 80) {
    console.log('Hot Outside!');
} else if (temp <= 80 && temp >= 50) {
    console.log('Average temp Outside');
} else if (temp < 50 && temp >= 32){
    console.log('Its pretty cold out!');
} else {
    console.log('Its very cold out');
}

console.log (hot)

// while loop
var x=0;

while (x < 5) {
    console.log('x is currently ' +5);

    if (x===3) {
        console.log('x is equal 3');
        break;
    } else {}
    console.log('x is still less then 5, adding 1 to x');
    x = x+ 1;
}
console.log('End while loop')

var num = 1;
while(num < 11) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num = num + 1;
}
// for loop
for (var i = 0; i < 5; i++) {
    console.log('Number is '+ (i+1));
}
var word = 'ABCDEFGHIJK';
for (var i = 0; i < word.length; i++) {
    console.log(word[i]);
}

// function

function addNum(num1, num2) {
    console.log(num1 + num2);
}

function formal(name='Sam', title='Sir'){
    return title+ ' '+name
}

function sleepIn (weekday, vacation){
    return (!weekday || vacation);
}

function monkeyTrouble(aSmile, bSmile) {
    return (aSmile && bSmile) || (!aSmile && !bSmile);
}

function stringTimes(str, n){
    var returnStr = '';
    var i = 0;
    while (i<n){
        returnStr += str;
        i++
    }
    return returnStr;
}

function luckySum(a, b, c){
    if (a === 13) {
        return 0;
    } else if (b === 13) {
        return a;
    } else if (c === 13) {
        return a + b;
    } else {
        return a+b+c;
    }
}

function makeBricks(small, big, goal) {
    return goal%5 && goal%5-small && small + 5*big >=goal;
}

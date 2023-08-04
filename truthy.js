// Using if/else statements, create a JavaScript code in a script tag that follows the following rules
let phrase = 'I am a string';
if ('I am a string'){
    console.log(true)
}
//print else statment 'The boolean value false is falsy'
const booleanValue = false;
if (booleanValue){
    console.log('I am a string')
}
else {
    console.log('The boolean value false is falsy')
} 
// print else statement 'The null value is falsy'
const nullValue = null;
if (nullValue){
    console.log('I am a string')
}
else {
    console.log('The null value is falsy')
}
//print else statement 'undefined is falsy'
const un = undefined;
if (un){
    console.log('I am a string')
}
else {
    console.log('undefined is falsy')
}
//print else statement 'The number 0 is falsy (the only falsy number)'
const nothing = 0;
if (nothing){
    console.log('I am a string')
}
else {
    console.log('The number 0 is falsy (the only falsy number)')
} 
//print else statement 'The empty string is falsy (the only falsy string)'
const empty = '';
if (empty){
    console.log('I am a string')
}
else {
    console.log('The empty string is falsy (the only falsy string)')
} 
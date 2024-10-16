/**
 * 
 * 2.5 - Function Parameters and Return
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * The line below forces JavaScript to follow certian rules. Leave it there.
 * For more info: www.w3schools.com/js/js_strict.asp
**/ 

'use strict';



//part one
function to_fahrenheit(celsius) {
    let fahrenheit = Math.round((celsius*9/5) + 32)
    return fahrenheit
}

//part two
function to_celsius(fahrenheit) {
    let celsius = Math.round((fahrenheit - 32) * 5/9)
    return celsius
}

//part three
function roll_dice(qty, sides) {
    
}

//part four 
function area_circle(radius) {
    let area = Math.PI*radius**2
    return area
}

function cylinder_volume(radius, height) {
    let area = area_circle(radius)*height
    return area
}

//part five
function pythagorean_theorem( a, b) {
    let c = Math.sqrt(a**2 + b**2)
    return c
}

function percent(score, total) {
    let p = score/total
    console.log(`${Math.round(p*100)}%`)
    return p
}

// value = value *10**decimals
//value = Math.round(value)
// value = value//10**decimals

function round(value, decimals){
    return Math.round(value*10**decimals)/10**decimals
    
}


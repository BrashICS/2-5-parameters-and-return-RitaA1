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
    let area = Math.PI*radius**2*height
    return area
}


function percent(score, total) {
    let p = score/total
    console.log(`${Math.round(p*100)}%`)
    return p
}

function cround(value, decimals){
    
}

function cylinder_volume(radius, height) {
    let area = Math.PI*radius**2*height
    return area
}



//Lev1_1_js-einführung_length

let nachName= "Rasoul ";

let vorName= "adjmal/fahim";

console.log(nachName.length+vorName.length);

let name= "ThisISjustaPaintext";

console.log(name.length);

//Lev1_2_js-einführung_indexOf

var text = "How inappropriate to call this planet Earth, when clearly it is Ocean"

console.log(text.indexOf("h"))
console.log(text.indexOf("Earth"))
console.log(text.indexOf("Moon"))

//Lev1_3_js-einführung_search


var text2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."

console.log(text2.search(";"))
console.log(text2.search("green"))
console.log(text2.search("blue"))


//Lev1_4_js-einführung_slice

let quote = 'Sam is going to codingschool';

let home = quote.slice(0, 3)
console.log (home)
let is   = quote.slice(4,6)
console.log (is)
let am  = quote.slice(1,3)+quote.slice(3,16)+quote.slice(22)
console.log (am)
let am2 = quote.slice(3,16)+quote.slice(22)
console.log (am2)
let school = quote.slice(22)
console.log (school)
let going = quote.slice(0, 4) + quote.slice(4,7) + quote.slice(22)
console.log(going)


document.write(home+"<br>")
document.write(is+"<br>")
document.write(am+"<br>")
document.write(am2+"<br>")
document.write(school+"<br>")
document.write(going+"<br>")


//Lev1_5_js-einführung_substring

let textt="Sam is back from codingschool"

let sam= textt.substring (0,3)
document.write(sam+"<br>")

let sam1= textt.substring (4,6)
document.write(sam1+"<br>")

let sam2= textt.substring (23)
document.write(sam2+"<br>")

let sam4= textt.substring(0,3) + textt.substring(4,6) +textt.substring (23)
document.write(sam4 + "<br>")

//Lev1_6_js-einführung_substr

let text2a = "Sam is working at codingschool"

let qt1 = text2a.substr(0,3)
document.write(qt1+"<br>")

let qt2 = text2a.substr(3,4)
document.write(qt2+"<br>")

let qt3 = text2a.substr(15,16)
document.write(qt3+"<br>")

let qt4 = text2a.substr(0,3)+ text2a.substr(3,4) +text2a.substr(15)
document.write(qt4+"<br>")


//Lev1_7_js-einführung_replace


let someText = "Sam is good at codingschool"

let sam12= someText.replace('good','bad')
document.write(sam12+"<br>")

let sam13= someText.replace('codingschool','school')
document.write(sam13+"<br>")

let sam14= someText.replace('codingschool','tennis')
document.write(sam14+"<br>")

//Lev1_8_js-einführung_toLowerCase-toUpperCase

let someTexta = "Sam is going to codingschool"

let change = someText.replace('codingschool','School').toUpperCase(0,55) ;
document.write(change+"<br>");

var lowercase = someText.replace('codingschool','School').toLowerCase(0,55) ;
document.write(lowercase+"<br>")


let change4 =someTexta.slice(0,4).toUpperCase()
let change3 =someTexta.slice(22).replace('codingschool','School').toUpperCase()

let change5 =someTexta.slice(4,16)

document.write(change4+change5+change3+"<br>")






let POTC = [
    "'Crazy people don't know they're crazy. I know I'm crazy, therefore I'm not crazy, isn't that crazy?'",
    
    "'You lied to me by telling me the truth?'",

    "'The problem is not the problem. The problem is your attitude about the problem. Do you understand?'",

    "'This is either madness or brilliance, It's remarkable how often those two traits coincide.'",

    "'No survivors? Then where do the stories come from, I wonder.'",

]


function newPOTC () {
let random = Math.floor(Math.random() * (POTC.length) );

document.getElementById("quote").innerHTML = POTC[random];

let source = "Pirates of the Caribbean"

document.getElementById("character").innerHTML = source;

}

let HP = [
    "'Numbing the pain for a while will make it worse when you finally feel it.'",

    "'Never trust anything that can think for itself if you can't see where it keeps its brain.'",

    "'Yeah, size is no guarantee of power.'",

    "'It does not do well to dwell on dreams and forget to live.'",

    "'The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution.'"
]

function newHP () {
    let randomHP = Math.floor(Math.random() * (HP.length) );

    document.getElementById("quote").innerHTML = HP[randomHP];

    let sourceHP = "Harry Potter";

    document.getElementById("character").innerHTML = sourceHP;
}

let TS = [
    "'That wasn't flying. That was falling with style.'",

    "'How do you spell FBI?'",

    "'You're cute when you care.'",

    "'The panic is attacking me.'",

    "'I have a question. No. Wait. I have all the questions.'"
]

function newTS () {
    let randomTS = Math.floor(Math.random() * (TS.length) );
    document.getElementById("quote").innerHTML = TS[randomTS];

    let sourceTS = "Toy story";

    document.getElementById("character").innerHTML = sourceTS;
}

function newQuotes () {

    let randomQ = Math.floor(Math.random()*3);
    switch(randomQ)
    {
    case 0:
       newPOTC();
       break;
        
    case 1:
        newHP();
        break;

        case 2:
            newTS();
            break;
    }

}

window.setInterval(function() {

    newQuotes();
},
3000);




// ------------------------------------------------------------------------------------------------------------------

// let Quotes = [
//     {
//         quote: "'Crazy people don't know they're crazy. I know I'm crazy, therefore I'm not crazy, isn't that crazy?'",
//         source: "Pirates of the Caribbean",
//         year: 2000

//     },
//     {
//         quote: "'You lied to me by telling me the truth?'",
//         source: "Pirates of the Caribbean",
//         year: 1800

//     },
//     {
//         quote: "'The problem is not the problem. The problem is your attitude about the problem. Do you understand?'",
//         source: "Jack Sparrow",
//         year: 1800

//     },
//     {
//         quote: "'this is either madness or brilliance, It's remarkable how often those two traits coincide.'",
//         source: "Jack Sparrow",
//         year: 1800

//     },
//     {
//         quote: "'No survivors? Then where do the stories come from, I wonder.'",
//         source: "Jack Sparrow",
//         year: 2000

//     },
// ]

// function getQuote () {
//     let random = Math.floor( Math.random() * (Quotes.length) );
//     let choose = Quotes[random];
//     return choose;
// }

// function print () {
//     let newQuote = getQuote ();
//     let container = document.getElementById("box");

//     let string = `<p class=" quote ">${newQuote.quote}</p><p class=" character ">${newQuote.character}`;

//      				if (newQuote.character) {

//                     string += `<span class=" character ">${newQuote.character}</span>`
//                 }
//                     if (newQuote.source) {
//                         string += `<span class=" source ">${newQuote.source}</span>`
//                     }
//                     if (newQuote.year) {
//                         string += `<span class=" year ">${newQuote.year}</span></p>`
//                     }
//      				else {
//                         string += '</p>'
//                     };

//      					container.innerHTML = string;
    

// }

// window.setInterval(function() {

//     print ();

//     },

//      10000);

// document.getElementById("generate").addEventListener("click", print, false);




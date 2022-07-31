const QUOTES = {
    "Harry_Potter" : [
        "'Numbing the pain for a while will make it worse when you finally feel it.'",
        "'Never trust anything that can think for itself if you can't see where it keeps its brain.'",
        "'Yeah, size is no guarantee of power.'",
        "'It does not do well to dwell on dreams and forget to live.'",
        "'The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution.'"
    ],
    "Toy_Story" : [
        "'That wasn't flying. That was falling with style.'",
        "'How do you spell FBI?'",
        "'You're cute when you care.'",
        "'The panic is attacking me.'",
        "'I have a question. No. Wait. I have all the questions.'"
    ],
    "Pirates_Of_The_Caribbean" : [
        "'Crazy people don't know they're crazy. I know I'm crazy, therefore I'm not crazy, isn't that crazy?'",
        "'You lied to me by telling me the truth?'",
        "'The problem is not the problem. The problem is your attitude about the problem. Do you understand?'",
        "'This is either madness or brilliance, It's remarkable how often those two traits coincide.'",
        "'No survivors? Then where do the stories come from, I wonder.'"
    ]
}

window.addEventListener('load', () => {
    document.getElementById('generate').addEventListener('click', newQuote);

    setInterval(newQuote, 3_000);
});

const newQuote = () => {
    let category, quotes, quote;

    category = Object.keys(QUOTES)[Math.floor(Math.random() * Object.keys(QUOTES).length)];
    quotes   = QUOTES[category];
    category = category.replaceAll('_', ' ');

    quote = quotes[Math.floor(Math.random() * quotes.length)];

    document.getElementById('quote').innerHTML     = quote;
    document.getElementById('character').innerHTML = category;
}

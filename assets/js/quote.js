var fuck = [
    "Enough motivation for nothing.", 
    "Have you noticed me?", 
    "Pretend like you never saw me.",
    "I want to go home.",
    "Don't bother me."
];

var me = Math.floor(fuck.length * Math.random()); 

document.write("<p role='quote'>— <q>" + fuck[me]  + "</q></p>");
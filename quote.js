var fuck = [
    "Enough motivation for nothing.", 
    "Have you noticed me?", 
    "Pretend like you never saw me.",
    "I want to go home.",
    "Don't bother me.",
    "You shouldn't have expected anything from me.",
    "I'm so glad we live only once, I can't do this again",
    "I really don't care"
];

var me = Math.floor(fuck.length * Math.random()); 

document.write("<p role='quote'>— <q>" + fuck[me]  + "</q></p>");

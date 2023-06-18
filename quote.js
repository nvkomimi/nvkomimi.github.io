var fuck = [
    "enough motivation for nothing.", 
    "have you noticed me?", 
    "pretend like you never saw me.",
    "i want to go home.",
    "don't bother me.",
    "you shouldn't have expected anything from me.",
    "i'm so glad we live only once, i can't do this again",
    "i really don't care",
    "eat glass and die",
    "please",
    "feeling dysphoric",
    "there is something wrong",
    "meow"
];

var me = Math.floor(fuck.length * Math.random()); 

document.write("<p role='quote'>— <q>" + fuck[me]  + "</q></p>");

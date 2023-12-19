//Owen Porter
//Per 1
//12/11/2023

/*This program creates a dynamically created html greeting card coded in javaScript*/

var q1 = prompt("What is your name?")

//background
var background = document.createElement("div");
background.style.backgroundColor = "Red";
background.style.height = "550px";
background.style.width = "800px";
background.style.padding = "40px";
background.style.border = ("green dotted 2em")
background.style.left = " 290px"
background.style.position = "absolute"

//changes the color of the border circles every 2 seconds
setInterval(lightblink, 2000);

function lightblink(){
    if( background.style.borderColor == "green" ){
        background.style.borderColor = "white"
    } else {(background.style.borderColor == "white")
        background.style.borderColor = "green"

    }

}

//greets the user
var greetBox = document.createElement("div")
greetBox.style.backgroundColor = "White"
greetBox.style.width = "700px"
greetBox.style.height = "75px"
greetBox.style.position = "relative"
greetBox.style.top = "40px"
greetBox.style.textAlign = "center"
greetBox.style.fontSize = "4em"
greetBox.style.fontFamily = "cursive"
greetBox.style.padding = "10px"
greetBox.innerHTML = "Test"
greetBox.style.margin = "0 auto"
//allows for the textbox to print users input
greetBox.innerHTML = "Happy Holidays " + q1 + "!" 

//creates a tree top
var tree = document.createElement("div")
tree.style.border = "green solid 100px"
tree.style.width = "0px"
tree.style.height = "0px"
tree.style.borderLeftColor = "transparent"
tree.style.borderTopColor = "transparent"
tree.style.borderRightColor = "transparent"
tree.style.borderBottomWidth = "250px"
tree.style.position = "relative"
tree.style.margin = "0 auto"

//creates the tree trunk
var trunk = document.createElement("div")
trunk.style.backgroundColor = "brown"
trunk.style.width = "50px"
trunk.style.height = "75px"
trunk.style.position = "relative"
trunk.style.margin = "0 auto"


var snowman1Bottom = document.createElement("div")
snowman1Bottom.style.backgroundColor = "white"
snowman1Bottom.style.width = "200px"
snowman1Bottom.style.height = "200px"
snowman1Bottom.style.borderRadius = "50%"
snowman1Bottom.style.position = "absolute"
snowman1Bottom.style.top = "400px"
snowman1Bottom.style.left = "375px"

var snowman1Middle = document.createElement("div")
snowman1Middle.style.backgroundColor = "white"
snowman1Middle.style.width = "150px"
snowman1Middle.style.height = "150px"
snowman1Middle.style.borderRadius = "50%"
snowman1Middle.style.position = "absolute"
snowman1Middle.style.top = "300px"
snowman1Middle.style.left = "400px"

var snowman1Top = document.createElement("div")
snowman1Top.style.backgroundColor = "white"
snowman1Top.style.width = "100px"
snowman1Top.style.height = "100px"
snowman1Top.style.borderRadius = "50%"
snowman1Top.style.position = "absolute"
snowman1Top.style.top = "215px"
snowman1Top.style.left = "425px"

var snowman2Bottom = document.createElement("div")
snowman2Bottom.style.backgroundColor = "white"
snowman2Bottom.style.width = "200px"
snowman2Bottom.style.height = "200px"
snowman2Bottom.style.borderRadius = "50%"
snowman2Bottom.style.position = "absolute"
snowman2Bottom.style.top = "400px"
snowman2Bottom.style.left = "825px"

var snowman2Middle = document.createElement("div")
snowman2Middle.style.backgroundColor = "white"
snowman2Middle.style.width = "150px"
snowman2Middle.style.height = "150px"
snowman2Middle.style.borderRadius = "50%"
snowman2Middle.style.position = "absolute"
snowman2Middle.style.top = "300px"
snowman2Middle.style.left = "800px"

var snowman2Top = document.createElement("div")
snowman2Top.style.backgroundColor = "white"
snowman2Top.style.width = "100px"
snowman2Top.style.height = "100px"
snowman2Top.style.borderRadius = "50%"
snowman2Top.style.position = "absolute"
snowman2Top.style.top = "215px"
snowman2Top.style.left = "850px"

var arm1 = document.createElement("div")
arm1.style.backgroundColor = "brown"
arm1.style.height = "100px"
arm1.style.width = "5px"
arm1.style.position = "absolute"
arm1.style.top = "350px"
arm1.style.left = "470px"

var arm2 = document.createElement("div")
arm2.style.backgroundColor = "brown"
arm2.style.height = "100px"
arm2.style.width = "5px"
arm2.style.position = "absolute"
arm2.style.top = "250px"
arm2.style.left = "820px"
arm2.style.transform = 'rotate(140deg)' //rotates arm up


var eye1 = document.createElement("div")
eye1.style.backgroundColor = "black"
eye1.style.height = "15px"
eye1.style.width = "15px"
eye1.style.borderRadius = "50%"
eye1.style.position = "absolute"
eye1.style.top = "245px"
eye1.style.left = "870px"

var eye2 = document.createElement("div")
eye2.style.backgroundColor = "black"
eye2.style.height = ("15px")
eye2.style.width = ("15px")
eye2.style.borderRadius = "50%"
eye2.style.position = "absolute"
eye2.style.top = "245px"
eye2.style.left = "490px"

var nose1 = document.createElement("div")
nose1.style.border = "orange solid 10px"
nose1.style.width = "0px"
nose1.style.height = "0px"
nose1.style.borderBottomColor = "transparent"
nose1.style.borderTopColor = "transparent"
nose1.style.borderRightColor = "transparent"
nose1.style.borderLeftWidth = "40px"
nose1.style.position = "absolute"
nose1.style.top = "250px"
nose1.style.left = "520px"

var nose2 = document.createElement("div")
nose2.style.border = "orange solid 10px"
nose2.style.width = "0px"
nose2.style.height = "0px"
nose2.style.borderBottomColor = "transparent"
nose2.style.borderTopColor = "transparent"
nose2.style.borderLeftColor = "transparent"
nose2.style.borderRightWidth = "40px"
nose2.style.position = "absolute"
nose2.style.top = "250px"
nose2.style.left = "805px"

var ornament1 = document.createElement("div")
ornament1.style.backgroundColor = "purple"
ornament1.style.height = "30px"
ornament1.style.width = "30px"
ornament1.style.borderRadius = "50%"
ornament1.style.position = "absolute"
ornament1.style.top = "380px"
ornament1.style.left = "710px"

var ornament2 = document.createElement("div")
ornament2.style.backgroundColor = "yellow"
ornament2.style.height = "30px"
ornament2.style.width = "30px"
ornament2.style.borderRadius = "50%"
ornament2.style.position = "absolute"
ornament2.style.top = "400px"
ornament2.style.left = "780px"

var ornament3 = document.createElement("div")
ornament3.style.backgroundColor = "blue"
ornament3.style.height = "30px"
ornament3.style.width = "30px"
ornament3.style.borderRadius = "50%"
ornament3.style.position = "absolute"
ornament3.style.top = "310px"
ornament3.style.left = "750px"

//creates a gif of a star that is placed on the top of the tree
var star = document.createElement("img")
star.src = "Images/star.gif"
star.style.height = "100px"
star.style.width = "100px"
star.style.position = "absolute"
star.style.top = "160px"
star.style.left = "717px"

var music = new Audio("Music/AllIWantForChristmas.mp3");
music.controls = true;

//appends all elements to the page
document.body.append(background)
document.body.append(greetBox)
document.body.append(tree)
document.body.append(trunk)
document.body.append(snowman1Bottom)
document.body.append(snowman1Middle)
document.body.append(snowman1Top)
document.body.append(snowman2Bottom)
document.body.append(snowman2Middle)
document.body.append(snowman2Top)
document.body.append(eye1)
document.body.append(eye2)
document.body.append(nose1)
document.body.append(nose2)
document.body.append(arm1)
document.body.append(arm2)
document.body.append(ornament1)
document.body.append(ornament2)
document.body.append(ornament3)
document.body.append(star)
background.appendChild(music)

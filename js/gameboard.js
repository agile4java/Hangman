var canvas;
var ctx;
var wordLength;
var lettersGuessed;

function setup(){
    canvas = document.getElementById("hanger");
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 400, 400);
    var alphabetBlock = document.getElementById("alphabetBlock");
    while(alphabetBlock.hasChildNodes()){
        alphabetBlock.removeChild(alphabetBlock.firstChild);
    }
    var wordBlock =  document.getElementById("wordBlock");
    while(wordBlock.hasChildNodes()){
        wordBlock.removeChild(wordBlock.firstChild);
    }
    wordLength = 0;
    lettersGuessed = 0;
    missedCount = 0;
    lettersInAlphabet = letters.split("");
    var category = getCategory();
}


function drawAlphabet(lettersInAlphabet){

    for(i = 0; i < lettersInAlphabet.length; i++) {

        var drawThis = lettersInAlphabet[i];
        var drawLetter = document.createElement("div");
        var attClass = document.createAttribute("class");
        attClass.value = "flex-item letters";
        drawLetter.setAttributeNode(attClass);
        var attID = document.createAttribute("ID");
        attID.value = drawThis;
        drawLetter.setAttributeNode(attID);
        var node = document.createTextNode(drawThis);
        drawLetter.appendChild(node);
        var attH = document.createAttribute("HEIGHT");
        attH.value = "50px";
        drawLetter.setAttributeNode(attH);
        var aBlockDiv = document.getElementById("alphabetBlock");
        aBlockDiv.appendChild(drawLetter);
        var letterNode = document.getElementById(drawThis);
        var divClick = document.getElementById(drawThis);
        divClick.onclick = function () {
            var letter = event.target.id;
            letterChoice(letter);
        }
    }
}//end function drawAlphabet

function drawWord(curWordArray) {
    for (i = 0; i < curWordArray.length; i++) {

        var drawThis = curWordArray[i];
        var drawLetter = document.createElement("div");
        var attClass = document.createAttribute("class");
        attClass.value = "flex-item letters";
        drawLetter.setAttributeNode(attClass);
        var attID = document.createAttribute("ID");
        if (curWordArray[i] === " ") {
            attID.value = "space";
        } else {
            wordLength++;
            attID.value = (i.toString());
        }
        drawLetter.setAttributeNode(attID);
        // var node = document.createTextNode(drawThis);
        // drawLetter.appendChild(node);
        var attH = document.createAttribute("HEIGHT");
        attH.value = "50px";
        drawLetter.setAttributeNode(attH);
        var aBlockDiv = document.getElementById("wordBlock");
        aBlockDiv.appendChild(drawLetter);
        if (curWordArray[i] === " ") {
            var lineBrk = document.createElement("div");
            var brkClass = document.createAttribute("class");
            brkClass.value = "line-break";
            lineBrk.setAttributeNode(brkClass);
            var spaceDiv = document.getElementById("wordBlock");
            spaceDiv.appendChild(lineBrk);
        }
    }
}

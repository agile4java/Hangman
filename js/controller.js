
var letters = "abcdefghijklmnopqrstuvwxyz";
var lettersInAlphabet = [];
var currentWord;
var lettersInWord = [];
var curWordArray = [];
var catWords = [];
var wordLength;
var lettersGuessed;

function getCategory(){
    for(i = 0; i < categories.length; i++) {

        var drawThis = categories[i];
        var drawLetter = document.createElement("div");
        var attClass = document.createAttribute("class");
        attClass.value = "flex-item categories";
        drawLetter.setAttributeNode(attClass);
        var attID = document.createAttribute("ID");
        attID.value = drawThis;
        drawLetter.setAttributeNode(attID);
        var node = document.createTextNode(drawThis);
        drawLetter.appendChild(node);
        var attH = document.createAttribute("HEIGHT");
        attH.value = "50px";
        drawLetter.setAttributeNode(attH);
        var aBlockDiv = document.getElementById("wordBlock");
        aBlockDiv.appendChild(drawLetter);
        var letterNode = document.getElementById(drawThis);
        var divClick = document.getElementById(drawThis);
        divClick.onclick = function () {
            var catChoice = event.target.id;
            getWord(catChoice);
        }
    }
}

function getWord(category){
    //Clear the Wordblock

    var wrdBlk = document.getElementById("wordBlock");
    while(wrdBlk.hasChildNodes()){
        wrdBlk.removeChild(wrdBlk.firstChild);
    }
    //Get a random word from category

    var wordIndex = Math.floor(Math.random() * 10);

        if(category === "foods"){
            currentWord = foods[wordIndex];
            }
        if(category === "states"){
            currentWord = states[wordIndex];
            }
        if(category === "adjectives"){
            currentWord = adjectives[wordIndex];
            }
        if(category === "transportation"){
            currentWord = transportation[wordIndex];
            }
        if(category === "furniture"){
            currentWord = furniture[wordIndex];
            }

    curWordArray = currentWord.split("");
    lettersInAlphabet = letters.split("");
    drawWord(curWordArray);
    drawAlphabet(lettersInAlphabet);
}

function letterChoice(letter){
    var inWord = false;
    //Clear alphabetBlock
    alphBlock = document.getElementById("alphabetBlock");
    while(alphBlock.hasChildNodes()){
        alphBlock.removeChild(alphBlock.firstChild);
    }
    //Remove letter choice from lettersInAlphabet
    for(i = 0; i < lettersInAlphabet.length; i++){
        if(lettersInAlphabet[i] == letter){
            lettersInAlphabet.splice(i, 1);
        }
    }
    //Redraw alphabetBlock
    drawAlphabet(lettersInAlphabet);

    //Check if letter is in currentWord and reveal
    for(j = 0; j < curWordArray.length; j++){
        if(letter === curWordArray[j]){
            lettersGuessed++;
            inWord = true;
            var id = j.toString();
            var letterBlock = document.getElementById(id);
            var node = document.createTextNode(letter);
            letterBlock.appendChild(node);
        }
    }
    if(!inWord){
        drawHangman();
    }
    if(inWord && (lettersGuessed == wordLength)){
        var modalText = document.getElementById("modalText");
        var modalMsg;
        modalText.style.font = "40px Galaxy Monkey";
        modalMsg = "Congrats You Win!! Close This to Play Again!!";
        modalText.innerHTML = modalMsg;
        var modal = document.getElementById("whoWon");
        var span = document.getElementsByClassName("close")[0];
        setTimeout(showModal, 1000);
        function showModal() {
            modal.style.display = "block";
        }


        span.onclick = function () {
            clearInterval(id);
            modal.style.display = "none";
            setup();

        }
    }
}

function showModal(id){
    var modalText = document.getElementById("modalText");
    var modalMsg;
    modalText.style.font = "40px Galaxy Monkey";
    modalMsg = "Sorry you Lose!! Close This to Play Again!!";
    modalText.innerHTML = modalMsg;
    var modal = document.getElementById("whoWon");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";

    span.onclick = function () {
        clearInterval(id);
        modal.style.display = "none";
        setup();

    }


}

function showWord(curWordArray){
    var wordBlock =  document.getElementById("wordBlock");
    while(wordBlock.hasChildNodes()){
        wordBlock.removeChild(wordBlock.firstChild);
    }
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
        var node = document.createTextNode(drawThis);
        drawLetter.appendChild(node);
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

var not=4;

var right_answer = new Array();
var user_answer = new Array();

var num=0;
var check=0;

var setTime = function(){
    if(num <= 5){
        num++;
        makeColor();
    }else{
        alert("you get "+not+" point!" );
        window.location.reload();
        clearInterval(repeat);    
    }
}

window.onload = function(){

    var repeat = setInterval(setTime,3000);

    var getAnswer1 = document.getElementById('tile1');
    var getAnswer2 = document.getElementById('tile2');
    var getAnswer3 = document.getElementById('tile3');
    var getAnswer4 = document.getElementById('tile4');
}

function getAnswer1(){
    user_answer += "a";
    console.log("set a");
}

function getAnswer2(){
    user_answer += "b";
    console.log("set b");
}

function getAnswre3(){
    user_answer += "c";
    console.log("set c");
}

function getAnswer4(){
    user_answer += "d";
    console.log("set d");
}


function checkAnswer(right_answer,user_answer){

    for(let a=0; a<right_answer.length; a++){

        if(right_answer[a] == user_answer[b]){
            not++;
        }else{

        }
    }

    console.log(not);
}


function makeColor(){

    let easy_plusVal = 60;
    let easy_plusVal_half = 30;

    //var tileColor = "#" + Math.round(Math.random() * 0xffffff).toString(16);

    var red = Math.floor(Math.random() * (255-easy_plusVal)) + easy_plusVal;
    var blue = Math.floor(Math.random() * (255-easy_plusVal)) + easy_plusVal;
    var green = Math.floor(Math.random() * (255-easy_plusVal)) + easy_plusVal;

    var tileColor = "rgb(" + red + "," + blue + "," + green +")";

    
    var index = { //wrong tile color select

        wrongTileColor1 : "rgb(" + (red+easy_plusVal) + "," + blue + "," + green +")",
        wrongTileColor2 : "rgb(" + red + "," + (blue+easy_plusVal) + "," + green +")",
        wrongTileColor3 : "rgb(" + red + "," + blue + "," + (green+easy_plusVal) +")",
        wrongTileColor4 : "rgb(" + (red+easy_plusVal_half) + "," + (blue+easy_plusVal_half) + "," + green +")",
        wrongTileColor5 : "rgb(" + red + "," + (blue+easy_plusVal_half) + "," + (green+easy_plusVal_half) +")",
        wrongTileColor6 : "rgb(" + (red+easy_plusVal_half) + "," + blue + "," + (green+easy_plusVal_half) +")"
    }

    var wrongTileColor = [index.wrongTileColor1, index.wrongTileColor2, index.wrongTileColor3, index.wrongTileColor4, index.wrongTileColor5, index.wrongTileColor6];

    var wrongTileColor1 = "rgb(" + (red+easy_plusVal) + "," + blue + "," + green +")";
    var wrongTileColor2 = "rgb(" + red + "," + (blue+easy_plusVal) + "," + green +")";
    var wrongTileColor3 = "rgb(" + red + "," + blue + "," + (green+easy_plusVal) +")";
    var wrongTileColor4 = "rgb(" + (red+easy_plusVal_half) + "," + (blue+easy_plusVal_half) + "," + green +")";
    var wrongTileColor5 = "rgb(" + red + "," + (blue+easy_plusVal_half) + "," + (green+easy_plusVal_half) +")";
    var wrongTileColor6 = "rgb(" + (red+easy_plusVal_half) + "," + blue + "," + (green+easy_plusVal_half) +")";
    

    arrRand = Math.floor(Math.random() * 5);

    let randed;

    var tile1 = document.getElementById("tile1");
    var tile2 = document.getElementById("tile2");
    var tile3 = document.getElementById("tile3");
    var tile4 = document.getElementById("tile4");
    
    console.log(tileColor);
    console.log(arrRand);

    let ractile = Math.floor(Math.random() * 4);

    if(ractile == 0){

        tile1.style.backgroundColor = wrongTileColor[arrRand];
        tile2.style.backgroundColor = tileColor;
        tile3.style.backgroundColor = tileColor;
        tile4.style.backgroundColor = tileColor;

        right_answer += "a";
    }
    else if(ractile == 1){

        tile1.style.backgroundColor = tileColor;
        tile2.style.backgroundColor = wrongTileColor[arrRand];
        tile3.style.backgroundColor = tileColor;
        tile4.style.backgroundColor = tileColor;

        right_answer += "b";
    }
    else if(ractile == 2){

        tile1.style.backgroundColor = tileColor;
        tile2.style.backgroundColor = tileColor;
        tile3.style.backgroundColor = wrongTileColor[arrRand];
        tile4.style.backgroundColor = tileColor;

        right_answer += "c";
    }
    else if(ractile == 3){

        tile1.style.backgroundColor = tileColor;
        tile2.style.backgroundColor = tileColor;
        tile3.style.backgroundColor = tileColor;
        tile4.style.backgroundColor = wrongTileColor[arrRand];

        right_answer += "d";
    }
    else {
        
        tile1.style.backgroundColor = tileColor;
        tile2.style.backgroundColor = wrongTileColor[arrRand];
        tile3.style.backgroundColor = tileColor;
        tile4.style.backgroundColor = tileColor;

        right_answer += "b" ;
    }

    check = check+1;
}

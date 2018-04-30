



window.onload = function(){

}



function makeColor(){

    let easy_plusVal = 30;
    let easy_plusVal_half = 15;

    //var tileColor = "#" + Math.round(Math.random() * 0xffffff).toString(16);

    var red = Math.floor(Math.random() * (255-easy_plusVal)) + easy_plusVal;
    var blue = Math.floor(Math.random() * (255-easy_plusVal)) + easy_plusVal;
    var green = Math.floor(Math.random() * (255-easy_plusVal)) + easy_plusVal;

    var tileColor = "rgb(" + red + "," + blue + "," + green +")";

    
    var index = { //wrong tile color select

        wrongTileColor1 : "rgb(" + (red+easy_plusVal) + "," + blue + "," + green +")",
        wrongTileColor2 : "rgb(" + red + "," + (blue+easy_plusVal) + "," + green +")",
        wrongTileColor3 : "rgb(" + red + "," + blue + "," + (green+easy_plusVal) +")";
        wrongTileColor4 : "rgb(" + (red+easy_plusVal_half) + "," + (blue+easy_plusVal_half) + "," + green +")",
        wrongTileColor5 : "rgb(" + red + "," + (blue+easy_plusVal_half) + "," + (green+easy_plusVal_half) +")",
        wrongTileColor6 : "rgb(" + (red+easy_plusVal_half) + "," + blue + "," + (green+easy_plusVal_half) +")"
    }

    var wrongTileColor = [index.wrongTileColor1, index.wrongTileColor2, index.wrongTileColor3, index.wrongTileColor4, index.wrongTileColor5, index.wrongTileColor6];

   /* var wrongTileColor1 = "rgb(" + (red+easy_plusVal) + "," + blue + "," + green +")";
    var wrongTileColor2 = "rgb(" + red + "," + (blue+easy_plusVal) + "," + green +")";
    var wrongTileColor3 = "rgb(" + red + "," + blue + "," + (green+easy_plusVal) +")";
    var wrongTileColor4 = "rgb(" + (red+easy_plusVal_half) + "," + (blue+easy_plusVal_half) + "," + green +")";
    var wrongTileColor5 = "rgb(" + red + "," + (blue+easy_plusVal_half) + "," + (green+easy_plusVal_half) +")";
    var wrongTileColor6 = "rgb(" + (red+easy_plusVal_half) + "," + blue + "," + (green+easy_plusVal_half) +")";
    */

}

function giveColor(){

}
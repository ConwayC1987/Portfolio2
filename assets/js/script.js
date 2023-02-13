// Code from https://www.includehelp.com/code-snippets/show-hide-div-on-button-click-using-javascript.aspx//
function showHideDiv(ele) {
    var srcElement = document.getElementById(ele);
    document.getElementById("hideMsg").style.display="none";
    document.getElementById("hideMsg1").style.display="none";
    document.getElementById("showGame").style.display="none";
    if (srcElement != null) {
        if (srcElement.style.display == "block") {
            srcElement.style.display = 'none';
        }
        else {
            srcElement.style.display = 'block';
        }
        return false;
    }
}
function gameRules() {
    document.getElementById("demo").innerHTML = "1st person at the table with all question correct gets a free drink";
    document.getElementById("demo1").innerHTML = "No use of the internet";
    document.getElementById("demo2").innerHTML = "No looking at others answers";
    document.getElementById("playButton").style.display="block";
  }
/*------------------------------------*/
function startGame() {
    document.getElementById("showGame").style.display="block";
    document.getElementById("divMsg").style.display="none";
    document.getElementById("imgOption").style.display="block";
    document.getElementById("divMsg").style.display="none";
  }
/*------------------------------------*/
let imgTomH = 66;
let imgLiamN = 70;
let imgSimonC = 63;
let imgPamA = 55;
let imgKateW = 47;
let imgLeoD = 48;
let imgArnieS = 75;
let imgSylvs = 76;
let imgLeoV = 44;
let imgMaryL = 53;
/*------------------------------------*/
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const qImg1 = document.getElementById("qImg1");
const option1 = document.getElementById("option1");
const option2  = document.getElementById("option2");
let questions = [
    {
        question : "Who is the oldest?",
        imgSrc : "img/html.png",
        option1 : "Correct",
        option2 : "Wrong",
        correct : "option1"
    },{
        question : "Who is the oldest?",
        imgSrc : "img/html.png",
        option1 : "Correct",
        option2 : "Wrong",
        correct : "option1"
    },{
        question : "Who is the oldest?",
        imgSrc : "img/html.png",
        option1 : "Correct",
        option2 : "Wrong",
        correct : "option1"
    }
];



/*------------------------------------*/


function myQuestions() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "assets/images/liam_Neeson.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);
  }

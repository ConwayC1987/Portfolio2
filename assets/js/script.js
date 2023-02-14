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
let question = document.getElementById("question");
let qImg = document.getElementById("qImg");
let qImg1 = document.getElementById("qImg1");
let option1 = document.getElementById("option1");
let option2  = document.getElementById("option2");
let questions = [
    {
        question : "Who is the oldest?",
        imgSrc : "assets/images/tom_hanks.jpg",
        imgSrc1 : "assets/images/liam_Neeson.jpg",
        option1 : "Tom Hanks",
        option2 : "Liam Neeson",
        correct : "option2"
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
let currentQ = 0;
let lastQ = questions.length -1;

function makeQuestion(){
    let ques = questions[currentQ];
    question.innerHTML = "<p>"+ ques.question +"</p>";
    qImg.innerHTML = "<img src="+ ques.imgSrc +">";
    qImg1.innerHTML = "<img src="+ ques.imgSrc1 +">";
    option1.innerHTML = ques.option1;
    option1.innerHTML = ques.option2;
}


/*------------------------------------*/





/*------------------------------------*/
function startGame() {
    document.getElementById("showGame").style.display="block";
    document.getElementById("divMsg").style.display="none";
    makeQuestion();
    
  }






//function myQuestions() {
   // var x = document.createElement("IMG");
   // x.setAttribute("src", "assets/images/liam_Neeson.jpg");
   // x.setAttribute("width", "304");
   // x.setAttribute("height", "228");
   // x.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(x);
 // }

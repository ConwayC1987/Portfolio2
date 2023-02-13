// Code from https://www.includehelp.com/code-snippets/show-hide-div-on-button-click-using-javascript.aspx//
function showHideDiv(ele) {
    var srcElement = document.getElementById(ele);
    document.getElementById("hideMsg").style.display="none";
    document.getElementById("hideMsg1").style.display="none";
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
  }
/*------------------------------------*/
var start = function(){
	
}
/*------------------------------------*/
var correct = 0;
var incorrect = 0;
var question = "none";
var input = "none";
var answer = "none";
/*------------------------------------*/



/*------------------------------------*/


function myQuestions() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "assets/images/liam_Neeson.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);
  }

  function nextQuestion(element)
{
    var img = document.getElementById(element);

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src) // << check this
        {
            if(i === imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
        }
    }
}
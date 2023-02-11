// Code from https://www.includehelp.com/code-snippets/show-hide-div-on-button-click-using-javascript.aspx//
function showHideDiv(ele) {
    var srcElement = document.getElementById(ele);
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
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'assets/images';

imgArray[1] = new Image();
imgArray[1].src = 'images/img/Splash_image2.jpg';

/* ... more images ... */

imgArray[5] = new Image();
imgArray[5].src = 'images/img/Splash_image6.jpg';

/*------------------------------------*/

function nextImage(element)
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
function myFunction() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "assets/images/liam_Neeson.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);
  }
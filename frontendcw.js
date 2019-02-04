//
// window.onload = function(){
//     var firstpTag = document.getElementById("first");
//     var firstpTag3 = document.getElementsByClassName("special");
//     var firstpTag4 = document.getElementsByTagName("p");
//     console.log(firstpTag);
//     console.log(firstpTag3);
//     console.log(firstpTag4);
// }


//ried to do it sone way first and did some research and needed to add text content.
// window.onload = function() {
    var firstpTag = document.getElementsByTagName("p");
    console.log(firstpTag[0].textContent);
    //using a specific tag name to print it in my console


    var firstpid = document.getElementById("first");
    console.log(firstpid.textContent);
    // using the specific ID element to print it in my console

    var firstpclass = document.getElementsByClassName("special");
    console.log(firstpclass[0].textContent);
    //using a specific class to print it in my console


    var specialClass = document.querySelector(".special");
    console.log(specialClass.textContent);
    //using the queryselector to specifily log the special class

    var specialClass = document. querySelectorAll(".special");
    for(var j=0;j<specialClass.length; j++)
    {
        console.log(specialClass[j].textContent);
    }
    //calling all the special tags the first and last

    var h1Blue = document.getElementsByTagName("h1");
    h1Blue[0].style.color="blue";
    //changing the h1 to blue

    var lastpTag = document.getElementById("last");
    lastpTag.style.color="yellow";
    //changing the last id element to yellow
// };

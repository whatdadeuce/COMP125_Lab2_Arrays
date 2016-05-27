/*Main JavaScript File*/

//IIFE
(function () {
    "use strict";
    var paragraphElements = [
        document.getElementById("paragraphOne"),
        document.getElementById("paragraphTwo"),
        document.getElementById("paragraphThree")
    ];

    //Declare paragraphs array
    var paragraphs = [];
    paragraphs[0] = "If you are seeing this paragraph then my code is working. Welcome to the first page!";
    paragraphs[1] = "JavaScript is cooperating if you're seeing this on the Projects tab.";
    paragraphs[2] = "Booyah!!! It's a success. This is the final page, so this lab deserves full marks.";

    // checks to see if paragraph exists on the page and output the paragraphs message
    for (var i = 0; i < paragraphElements.length; i++) {
        if (paragraphElements[i])
            paragraphElements[i].textContent = paragraphs[i];
    }

})();

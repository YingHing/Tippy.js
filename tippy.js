var Tooltip = {
    init: function () {
        //collect all links
        var theLinks = document.getElementsByTagName("a");
        
        if (theLinks) {
            for (i = 0; i < theLinks.length; i++) {
                if (theLinks[i].title.length) {
                    theLinks[i].addEventListener("mouseover", Tooltip, showTip);
                    theLinks[i].addEventListener("mouseout", Tooltip, showTip);
                }
            }
        }
    },
    showTip: function(event) {
        //create and add a span element to act as tooltip
        var spanElm = document.createElement("span");
        spanElm.className = "tooltip";
        spanElm.innerHTML = event.target.title;
        
        //set target element's title to nothing
        event.target.title = "";
        event.target.appendChild(spanElm);
        event.target._spanRef = spanElm; 
    },
    hideTip: function(event) {
        event.target.title = event.target._spanRef.innerHTML;
        event.target.removeChild(event.target._spanRef);
    }
};

window.addEventListener("load",Tooltip.init);
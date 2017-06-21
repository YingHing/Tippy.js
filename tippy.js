window.onload = function() { Tooltip(); } 

function Tooltip() {
    var self = {};
        //collect all links
        self.els = document.getElementsByTagName("a");
        
             for (var i = 0; i < self.els.length; i++) {
                self.els[i].addEventListener("mouseover", function () {
                   self.showTip(this);
                }, false);
                 
                 self.els[i].addEventListener("mouseout", function () {
                    self.hideTip(this);
                }, false); 
             }
                
    self.showTip = function(event) {
        //create and add a span element to act as tooltip
        var spanElm = document.createElement("span");
        spanElm.className = "tooltip";
        spanElm.innerHTML = event.title;
        
        //set target element's title to nothing
        event.title = "";
        event.appendChild(spanElm);
        event._spanRef = spanElm;
    },
    self.hideTip = function(event) {
        event.title = event._spanRef.innerHTML;
        event.removeChild(event._spanRef);
    }
};
//window.onload = function () {
//    Tooltip();
//}

var Tooltip = function(settings) {
    var self = this;
    
    self.defaultSettings = {
        bgColor: 'black',
        fontColor: 'white',
        fontWeight: 'normal',
        borderRadius: '0px',
        width: '100px'
    }
    
    self.customSettings = settings;
    
    //collect all links
    self.els = document.getElementsByClassName('tippy');
    
    // Add click event listener for ca classe
    for (i = 0; i < self.els.length; i++) {
    
        // Create an event for alert function
        self.els[i].addEventListener("mouseover", function () {
            self.showTip(this);
        });
    }

    self.showTip = function (event) {
        console.log(event);
        //create and add a span element to act as tooltip
        var spanElm = document.createElement("span");
//        spanElm.className = "tooltip";
        spanElm.innerHTML = event.title;
        
        //styling basic tooltip
        spanElm.style.background = ("#9F9FAD");
        spanElm.style.color = ("white");
        spanElm.style.fontWeight = ("bold");
        spanElm.style.padding = ("10px");
        spanElm.style.mozBorderRadius = ("1 =px");
        spanElm.style.borderRadius = ("10px");
        spanElm.style.position = ("absolute");
        spanElm.style.zIndex = ("1");
        spanElm.style.top = ("50px");
        spanElm.style.left = ("20px");
        spanElm.style.width = ("120px");

        //set target element's title to nothing
        event.title = "";
        event.appendChild(spanElm);
        event._spanRef = spanElm;
    },
    self.hideTip = function (event) {  
        event.title = event._spanRef.innerHTML;
        event.removeChild(event._spanRef);
    }

};
var Tooltip = function(settings) {
    var self = this;
    
    //Default style of tooltip
    self.defaultSettings = {
        bgColor: 'black',
        fontColor: 'white',
        fontWeight: 'normal',
        borderRadius: 0,
        width: '100px'
    }
    
    //Link with tippy-custom
    self.customSettings = settings;
    
    //Make new class tippy
    self.els = document.getElementsByClassName('tippy');
    
    // Add click event listener for tooltip
    for (i = 0; i < self.els.length; i++) {
    
        // Create an event for showTip
        self.els[i].addEventListener("mouseover", function() {
            self.showTip(this);
        });
        // Create an event for hideTip
        self.els[i].addEventListener("mouseout", function() {
            self.hideTip(this);
        })
    }

    //Create toolTip
    self.showTip = function (event) {
        
        //Give toolTip default style
        var tippySetting = self.defaultSettings;
        
        // Loop for checking the settings
        for (var attrname in tippySetting) {
           if (self.customSettings.hasOwnProperty(attrname)) {
                tippySetting[attrname] = self.customSettings[attrname];
            }
        }
        
        //Create and add a span element to act as tooltip
        var spanElm = document.createElement("span");
        
        //Link tooltip to class
        spanElm.className = "tooltip";
        
        //styling tooltip
        spanElm.style.background = tippySetting['bgColor'];
        spanElm.style.color = tippySetting['fontColor'];
        spanElm.style.fontWeight = tippySetting['fontWeight'];
        spanElm.style.borderRadius = tippySetting['borderRadius'] + "px";
        spanElm.style.mozBorderRadius = tippySetting['borderRadius'] + "px";
        spanElm.style.width = tippySetting['width'] + "px";
        spanElm.innerHTML = event.getAttribute("ty-title");
        
        event.appendChild(spanElm);
        event._spanRef = spanElm;
    },
    self.hideTip = function (event) {  
        event.title = event._spanRef.innerHTML;
        event.removeChild(event._spanRef);
    }
};
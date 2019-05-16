function revertVideo() {
    if (window.operations.getVid) {
        window.operations.getVid = false;
    }
    return window.operations;
}

function applyVideo() {

    window.operations = window.operations || {};
    if (window.operations.getVid) {
        return revertVideo();
    }
    window.operations.getVid = true;

    var vid = document.querySelectorAll("iframe, video");
    var body = document.body;
    
    var $div = document.createElement('div');
    $div.classList.add('dev-variant-info');
    var cssText = 'position:absolute;padding:4px;background:rgba(0, 0, 0, 0.75);color:#fff;z-index:1001;';
    var ids = {};
    var tops = {};
    Array.prototype.forEach.call(vid, function (element, index) {
        var div = $div.cloneNode();
        var rect = element.getBoundingClientRect();
        var top = (rect.top + window.scrollY - 32 + 'px');
        if (tops.hasOwnProperty(top)) {
            top = (parseInt(top.replace('px', '')) + 32) + 'px';
        }
        var left = (rect.left + 'px');
        var pos = 'p-' + top + left;
        if (rect.width) {
            if (ids.hasOwnProperty(pos)) {
                var eComp = document.querySelector('#' + ids[pos]);
                if (eComp) {
                    eComp.textContent += ', ' + element.getAttribute("src");
            
                }
            } else {
                div.id = 'compo-tip-' + index;
                div.style.cssText = cssText + 'top:' + top + ';left:' + left;
                div.textContent = element.getAttribute("src");
                body.appendChild(div);
                ids[pos] = 'compo-tip-' + index;
                tops[top] = true;
            }
        }
    });
    
/*
    for (i = 0; i < vid.length; i++) {
        var tag = vid[i].tagName;
        if(tag === "VIDEO") {
            console.log(vid[i].getAttribute("data-video-id"))
        }
        else if(tag === "IFRAME" ) {
            console.log(vid[i].getAttribute("src"))
        }
        
    }*/
    return window.operations;
}

applyVideo();


window.onload = function() {
    const titles = ['THX<3', 'PLS HELP', 'UR AD HERE', 'PLS GIVE MONEY'];
    let currentIndex = 0;
    
    function changeTitle() {
        document.title = titles[currentIndex];
    currentIndex = (currentIndex + 1) % titles.length;
    }
    
    setInterval(changeTitle, 2000);
    }
    

    window.onload = function() {
        setTimeout(function() {
            var xmlMessage = '<message><title>Wai are u here???</title><content>Geh weg:3</content></message>';
            parseXML(xmlMessage);
        }, 3000);
    };

    function parseXML(xmlString) {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xmlString, "text/xml");
        var title = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
        var content = xmlDoc.getElementsByTagName("content")[0].childNodes[0].nodeValue;
        var message = title + "<br>" + content;
        document.getElementById("xmlMessage").innerHTML = message;
        document.getElementById("xmlMessage").classList.remove("hidden");
    }
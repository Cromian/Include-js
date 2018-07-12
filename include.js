// Load JavaScript file
function loadJs(jsFilePath, htmlTag) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.getElementById(htmlTag).appendChild(js);
}

// Load CSS file
function loadCSS(cssFilePath, htmlTag) {
    var css = document.createElement("link");
    css.type = "text/css";
    css.rel = "stylesheet";
    css.href = cssFilePath;

    document.getElementById(htmlTag).appendChild(css);
}

// Load HTML file
function loadHTML(htmlFilePath, htmlTag) {
    
    var xhr= new XMLHttpRequest();
    xhr.open('GET', htmlFilePath, true);
    xhr.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return;

        var div = document.createElement("div");
        div.id = htmlTag + '_data';
        div.innerHTML = this.responseText;
        document.getElementById(htmlTag).appendChild(div);

    };
    xhr.send();
}

// Include Function
function include(clusterName, options) {
    
    if (options.css) {
        loadCSS('clusters/' + clusterName + '/style.css', clusterName);
    }

    if (options.js) {
        loadJs('clusters/' + clusterName + '/script.js', clusterName);
    }

    if (options.html) {
      loadHTML('clusters/' + clusterName + '/cluster.html', clusterName);
    }
}



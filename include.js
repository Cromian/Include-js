var include = {

    js: function (file, tag) {

        var js = document.createElement("script");
        js.type = "text/javascript";
        js.src = file;

        document.getElementById(tag).appendChild(js);
    },

    css: function (file, tag) {
       
        var css = document.createElement("link");
        css.type = "text/css";
        css.rel = "stylesheet";
        css.href = file;
    
        document.getElementById(tag).appendChild(css);

    },

    html: function (file, tag) {

        var xhr= new XMLHttpRequest();
        xhr.open('GET', file, true);
        xhr.onreadystatechange= function() {
            if (this.readyState!==4) return;
            if (this.status!==200) return;
    
            var div = document.createElement("div");
            div.id = tag + '_data';
            div.innerHTML = this.responseText;
            document.getElementById(tag).appendChild(div);
    
        };
        xhr.send();

    }
}

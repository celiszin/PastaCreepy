function showUser(str) {
if (str == "") {
    document.getElementById("cabecalho").innerHTML = "";
    return;
} else {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("cabecalho").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET","https://www.google.com.br");
    xmlhttp.send();
    }
}

showUser("str");


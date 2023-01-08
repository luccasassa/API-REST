var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var div = document.createElement('div');
        div.innerHTML = this.responseText;
        document.body.appendChild(div)
    }
}
xhttp.open("GET", "https://raw.githubusercontent.com/luccasassa/API-REST/main/watermark.html", true);
xhttp.send();
function submitInfo() {
    str = window.location.href;
    str = str.slice(str.indexOf("?")+1).replace(/\+/g, ' ').split('&');
    var info = [];
    for(i = 0; i < str.length; i++) {
        info[i] = str[i].slice(str[i].indexOf("=")+1);
        info[i] = decodeURIComponent(info[i]);
    }

    document.getElementById("fullname").innerHTML = info[0];
    document.getElementById("add").innerHTML = info[1];
    document.getElementById("tel").innerHTML = info[2];
    document.getElementById("email").innerHTML = info[3];
    document.getElementById("url").innerHTML = info[4];
    document.getElementById("birth").innerHTML = info[7];
    document.getElementById("gender").innerHTML = info[8];
};

window.addEventListener('load', submitInfo);
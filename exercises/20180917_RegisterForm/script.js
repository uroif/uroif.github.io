function submitInfo() {
    var info = window.location.href;

    var info = info.slice(info.indexOf("?")+1);
    var fullname = info.slice(0, info.indexOf("&"));
    var fullname = fullname.slice(fullname.indexOf("=")+1);
    var fullname = fullname.replace(/\+/g, ' ');
    var fullname = decodeURIComponent(fullname);
    
    var info = info.slice(info.indexOf("&")+1);
    var add = info.slice(0, info.indexOf("&"));
    var add = add.slice(add.indexOf("=")+1);
    var add = add.replace(/\+/g, ' ');
    var add = decodeURIComponent(add);

    var info = info.slice(info.indexOf("&")+1);
    var tel = info.slice(0, info.indexOf("&"));
    var tel = tel.slice(tel.indexOf("=")+1);
    var tel = tel.replace(/\+/g,' ');
    var tel = decodeURIComponent(tel);

    var info = info.slice(info.indexOf("&")+1);
    var email = info.slice(0, info.indexOf("&"));    
    var email = email.slice(email.indexOf("=")+1);    
    var email = decodeURIComponent(email);    

    var info = info.slice(info.indexOf("&")+1);
    var info = info.slice(info.indexOf("&")+1);
    var birth = info.slice(0, info.indexOf("&"));
    var birth = birth.slice(birth.indexOf("=")+1);

    var info = info.slice(info.indexOf("&")+1);
    var gender = info.slice(0, info.indexOf("&"));
    var gender = gender.slice(gender.indexOf("=")+1);
    
    document.getElementById("fullname").innerHTML = fullname;
    document.getElementById("add").innerHTML = add;
    document.getElementById("tel").innerHTML = tel;
    document.getElementById("email").innerHTML = email;
    document.getElementById("birth").innerHTML = birth;
    document.getElementById("gender").innerHTML = gender;
};

window.addEventListener('load', submitInfo);
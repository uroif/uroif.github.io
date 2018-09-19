function check() {
    fname = document.querySelector('input[name=fullname]').value;
    add = document.querySelector('input[name=address]').value;
    tel = document.querySelector('input[name=tel]').value;
    email = document.querySelector('input[name=email]').value;
    fb = document.querySelector('input[name=url]').value;
    pw = document.querySelector('input[name=password]').value;
    cf_pw = document.querySelector('input[name=cf_password]').value;

    if(fnameF(fname)) {
        if(addF(add)) {
            if(telF(tel)) {
                if(emailF(email)) {
                    if(fbF(fb)) {
                        if(pwF(pw)) {
                        }
                    }
                }
            }
        }
    }
    return false;
};

function fnameF(fname) {
    if(fname.trim() = '') {
        document.querySelector('.er_name').value = "Invalid";
        return false;
    } 
    return true;
}

function addF(add) {
    if(add.trim() = '') {
        document.querySelector('.er_add').value = "Invalid";
        return false;
    } 
    return true;       
}

function telF(tel) {
    var numbers = /^[0-9]+$/;
    if(tel.match(number)) {
        return true;
    } else {
        document.querySelector('.er_tel').value = "Invalid";
        return false;
    }
}

function pwF(pw) {
    if(pw !== cf_pw) {
        return false;
    } else {
        return true;
    }
}

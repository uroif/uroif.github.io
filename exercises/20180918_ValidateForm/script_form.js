function check() {
    fname = document.querySelector('input[name=fullname]').value;
    add = document.querySelector('input[name=address]').value;
    tel = document.querySelector('input[name=tel]').value;
    email = document.querySelector('input[name=email]').value;
    fb = document.querySelector('input[name=url]').value;
    pw = document.querySelector('input[name=password]').value;
    cf_pw = document.querySelector('input[name=cf_password]').value;

    let number = /^[0-9]+$/;
    let isValid = true;
    document.querySelectorAll('.error').innerHTML = "";

    if (fname.trim() !== '') {
        if (add.trim() !== '') {
            if (tel.match(number)) {
                if (fb.search('https://www.facebook.com/') !== -1) {
                    if (pw == cf_pw) {
                        document.querySelector('.er_pw').innerHTML = "";
                    } else {
                        document.querySelector('.er_pw').innerHTML = "Password mismatched.";
                        isValid = false;
                    };
                    document.querySelector('.er_fb').innerHTML = "";
                } else {
                    document.querySelector('.er_fb').innerHTML = "Invalid URL.";
                    isValid = false;
                };
                document.querySelector('.er_tel').innerHTML = "";
            } else {
                document.querySelector('.er_tel').innerHTML = "Invalid numbers.";
                isValid = false;
            };
            document.querySelector('.er_add').innerHTML = "";
        } else {
            document.querySelector('.er_add').innerHTML = "Invalid address.";
            isValid = false;
        };
        document.querySelector('.er_name').innerHTML = "";
    } else {
        document.querySelector('.er_name').innerHTML = "Invalid name.";
        isValid = false;
    };
    return isValid;
};
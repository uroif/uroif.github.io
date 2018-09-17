<!DOCTYPE html>
<html>
<body>

<p>Click the button to locate where in the string a specifed value occurs.</p>

<button onclick="myFunction()">Try it</button>

<p id="fullname"></p>
<p id="add"></p>
<p id="tel"></p>
<p id="email"></p>
<p id="birth"></p>
<p id="gender"></p>
<p id="demo"></p>


<script>
function myFunction() {
    var info = "file:///Users/web2/Desktop/uroif.github.io/20180917_RegisterForm/result.html?fullname=Tommy+Lee&address=123+abc&tel=123+456+789&email=x%40x.com&password=&birth=1980-01-01&gender=male&submit=Register";
    var info = info.slice(info.indexOf("?")+1);
    var fullname = info.slice(0, info.indexOf("&"));
    var info = info.slice(info.indexOf("&")+1);
    var add = info.slice(0, info.indexOf("&"));
    var info = info.slice(info.indexOf("&")+1);
    var tel = info.slice(0, info.indexOf("&"));
    var info = info.slice(info.indexOf("&")+1);
    var email = info.slice(0, info.indexOf("&"));    
    var info = info.slice(info.indexOf("&")+1);
    var info = info.slice(info.indexOf("&")+1);
    var birth = info.slice(0, info.indexOf("&"));
    var info = info.slice(info.indexOf("&")+1);
    var gender = info.slice(0, info.indexOf("&"));
    
    document.getElementById("fullname").innerHTML = 'Fullname: ' + fullname;
	document.getElementById("add").innerHTML = 'Add: ' + add;
    document.getElementById("tel").innerHTML = 'Tel: ' + tel;
    document.getElementById("email").innerHTML = 'Email: ' + email;
    document.getElementById("birth").innerHTML = 'Birth: ' + birth;
    document.getElementById("gender").innerHTML = 'Gender: ' + gender;
    document.getElementById("demo").innerHTML = 'URL: ' + info;

}
</script>

</body>
</html>

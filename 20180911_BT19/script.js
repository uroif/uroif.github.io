flag = 0;

function openpara(val) {
    calc.display.value += val;
    flag += 1;
}

function closepara(valval) {
    calc.display.value += valval;
    flag -= 1;
}

function backspace(calc) {
    var size = calc.display.value.length;
    calc.display.value = calc.display.value.substring(0, size - 1);
}

function resetfunction(calc) {
    calc.display.value = "";

    flag = 0;
}

function sqrt_function() {
    flag += 1;
    calc.display.value = Math.sqrt(calc.display.value);
}

function sqr_function() {
    flag += 1;
    calc.display.value = Math.pow(calc.display.value, 2);
}

function fact_function(x) {
    flag += 1;
    function facto(x) {
    	if (x < 0) {
    		return -1;
	    } else if (x == 0) {
	    	return 1;
	    } else {
	    	return (x * facto(x-1));
	    };
    };
    calc.display.value = facto(calc.display.value);
}

function evaluation(calc) {
    n = calc.display.value;
    var size = calc.display.value.length;
    var lastchar = calc.display.value.charAt(size)
    if (isNaN(lastchar) && lastchar != ")" && lastchar != "!") {
        calc.display.value = "syntax error";
    } else if (flag != 0) {
        calc.display.value = "error";
    } else {
        result = eval(n);
        calc.display.value = result;
    }
}
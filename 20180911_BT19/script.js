x = 0;

function openP(p) {
    calc.display.value += p;
    x += 1;
}

function closeP(p) {
    calc.display.value += p;
    x += 1;
}

function backspace(calc) {
    var size = calc.display.value.length;
    calc.display.value = calc.display.value.substring(0, size - 1);
}

function clean(calc) {
    calc.display.value = "";
    x = 0;
}

function pct() {
    x += 1;
    calc.display.value = eval(calc.display.value)/100;
}

function sqr() {
    x += 1;
    calc.display.value = Math.pow(calc.display.value, 2);
}

function sqrt() {
    x += 1;
    calc.display.value = Math.sqrt(calc.display.value);
}

function fact(x) {
    x += 1;
    function factorial(x) {
    	if (x < 0) {
    		return -1;
	    } else if (x == 0) {
	    	return 1;
	    } else {
	    	return (x * factorial(x-1));
	    };
    };
    calc.display.value = factorial(calc.display.value);
}

function evaluation(calc) {
    n = calc.display.value;
    if (x != 0) {
        calc.display.value = "error";
    } else {
        result = eval(n);
    };
    calc.display.value = result;
}
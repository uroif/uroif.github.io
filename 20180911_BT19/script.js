function() {
	var x = function(element) {
		if (element.charAt(0) === "#") {
			return document.querySelector(element);
		};
		return document.querySelectorAll(element);
	};

	var viewer = x("#view"),
		eq = x("#eq"),
		num = x(".num"),
		oper = x(".oper"),
		currNum = "",
		oldNum = "",
		resNum,
		operator;

	var setNum = function() {
		if (resNum) {
			currNum = this.getAttribute("data-num");
			resNum = "";
		} else {
			currNum += this.getAttribute("data-num");
		}
		viewer.innerHTML = currNum;
	};

	var moveNum = function() {
		oldNum = currNum;
		currNum = "";
		operator = this.getAttribute("data-oper");
		eq.setAttribute("data-res", "");
	};

	var displayNum = function() {
		oldNum = parseFloat(oldNum);
		currNum = parseFloat(currNum);
		
		switch (operator) {
			case "divid":
				resNum = oldNum / currNum;
				break;
			case "multi":
				resNum = oldNum * currNum;
				break;
			case "minus":
				resNum = oldNum - currNum;
				break;
			case "plus":
				resNum = oldNum + currNum;
				break;
			default:
				resNum = currNum;
		};

		viewer.innerHTML = resNum;
		eq.setAttribute("data-res", resNum);

		oldNum = 0;
		currNum = resNum;
	};

	var clearAll = function() {
		oldNum = "";
		currNum = "";
		view.innerHTML = "0";
		eq.setAttribute("data-res", resNum);
	};

	for (var i = 0, j = num.length; i < j; i++) {
		num[i].onclick = setNum;
	}

	for (var i = 0, j = oper.length; i < j; i++) {
		oper[i].onclick = moveNum;
	}

	eq.onclick = displayNum;

	x("#ac").onclick = clearAll;

}();
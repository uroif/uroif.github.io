setInterval(function() { // Chay function moi 1000 miliseconds
	var r = radius(); // Xac dinh width thuc te cua man hinh de gan cho SVG va vi tri kim
  function radius() {
    var el = document.querySelector("body");
    var x = window.getComputedStyle(el, null).getPropertyValue("max-width");
    x = parseInt(x.slice(0, 3));
    var w = window.innerWidth;
    if (w >= x) {
      document.querySelector("svg").style.width = x;
      document.querySelector("svg").style.height = x;
      return x;
    } else if(w < x) {
      document.querySelector("svg").style.width = w;
      document.querySelector("svg").style.height = w;
      return w;
    };
 };
    function hand(time, deg) { // Function xoay kim dong ho
        time.setAttribute('transform', 'rotate('+ deg + ' ' + r/2 + ' ' + r/2 + ')')
    };

    function hand1(time, deg) { // Function xoay kim dong ho
        time.setAttribute('transform', 'rotate('+ deg + ' ' + 0.26*r/2 + ' ' + 0.26*r/2 + ')')
    };
  
    function hand2(time, deg) { // Function xoay kim dong ho
        time.setAttribute('transform', 'rotate('+ deg + ' ' + 0.26*r/2 + ' ' + 0.26*r/2 + ')')
    };
  
    function hand3(time, deg) { // Function xoay kim dong ho
        time.setAttribute('transform', 'rotate('+ deg + ' ' + 0.26*r/2 + ' ' + 0.26*r/2 + ')')
    };
  
    var now = new Date();
    
    hand(second, 6 * now.getSeconds());
    hand(min, 6 * now.getMinutes());
    hand(hour, 30 * (now.getHours()%12) + now.getMinutes()/2);

    hand1(second1, 6 * now.getSeconds());
    hand1(min1, 6 * now.getMinutes());
    hand1(hour1, 30 * (now.getHours()%12) + now.getMinutes()/2 + 30);
  
    hand2(second2, 6 * now.getSeconds());
    hand2(min2, 6 * now.getMinutes());
    hand2(hour2, 30 * (now.getHours()%12) + now.getMinutes()/2 + 180);
    
    hand3(second3, 6 * now.getSeconds());
    hand3(min3, 6 * now.getMinutes());
    hand3(hour3, 30 * (now.getHours()%12) + now.getMinutes()/2 + 210);
  
}, 1000);
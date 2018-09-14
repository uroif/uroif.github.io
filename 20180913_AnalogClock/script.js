setInterval(function() {
    function r(el, deg) {
        el.setAttribute('transform', 'rotate('+ deg +' 50 50)')
    }
    var d = new Date()
    r(second, 6*d.getSeconds())  
    r(min, 6*d.getMinutes())
    r(hour, 30*(d.getHours()%12) + d.getMinutes()/2)
}, 1000)

// function clock(){
//     //calculate angle
//     var d, h, m, s;
//     d = new Date;
    
//     h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
//     m = 6 * d.getMinutes();
//     s = 6 * d.getSeconds();
    
//     //move hands
//     setAttr('hour', h);
//     setAttr('min', m);
//     setAttr('second', s);
//     setAttr('s_sec', s+180);
    
//     //call every seconds
//     setTimeout(clock, 1000);
    
// };

// function setAttr(cls, val) {
//     var v = 'rotate(' + val + ', 300, 300)';
//     document.getElementsByClassName(cls).setAttribute('transform', v);
// };

// window.onload=clock;
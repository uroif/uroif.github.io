function clock(){
    //calculate angle
    var d, h, m, s;
    d = new Date;
    
    h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
    m = 6 * d.getMinutes();
    s = 6 * d.getSeconds();
    
    //move hands
    setAttr('h_hand', h);
    setAttr('m_hand', m);
    setAttr('s_hand', s);
    setAttr('s_tail', s+180);
    
    //call every second
    setTimeout(clock, 1000);
    
};

function setAttr(id, val) {
    var v = 'rotate(' + val + ', 300, 300)';
    document.getElementById(id).setAttribute('transform', v);
};

function setText(id, val) {
    if(val < 10) {
        val = '0' + val;
    }
    document.getElementById(id).innerHTML = val;
};

window.onload=clock;
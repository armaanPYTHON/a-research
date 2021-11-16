function ChangeTab(event) {
    window.open(event + '.html', '_top')
}


function hamburger() {
    var HamDiv = document.getElementById('hamburger-options');
    var status = HamDiv.style.display;
    var bar1 = document.getElementById('bar1');
    var bar2 = document.getElementById('bar2');
    var bar3 = document.getElementById('bar3');

    if (status == 'block') {
        HamDiv.style.display = 'none';
        bar2.style.display = 'block';
        bar1.style.margin = '4px';
        bar3.style.margin = '4px';
        bar1.style.transform = 'rotate(0deg)';
        bar3.style.transform = 'rotate(0deg)';
    } else {
        HamDiv.style.display = 'block';
        bar2.style.display = 'none';
        bar1.style.margin = '10px 0 0 0';
        bar3.style.margin = '0';
        bar1.style.transform = 'rotate(45deg)';
        bar3.style.transform = 'rotate(-45deg)';
    }
}
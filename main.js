var btn = document.querySelectorAll('button')[0];
btn.addEventListener('click', fixit);

var today = new Date();
var endYear = new Date(1995, 11, 31, 23, 59, 59, 999);
endYear.setFullYear(today.getFullYear());

setInterval(function() {
  let now = new Date();
  var msLeft = (endYear.getTime() - now.getTime());
  let hoursLeft = Math.floor(msLeft/(1000*60*60));
  let minLeft = Math.floor((msLeft%(1000*60*60))/(1000*60));
  let secLeft = Math.floor((msLeft%(1000*60))/1000);

    hoursLeft = ((hoursLeft < 10) ? "0" : "") + hoursLeft;
    minLeft = ((minLeft < 10) ? "0" : "") + minLeft; 
    secLeft = ((secLeft < 10) ? "0" : "") + secLeft; 

  document.getElementById('hour').textContent = hoursLeft;
  document.getElementById('min').textContent = minLeft;
  document.getElementById('sec').textContent = secLeft;
}, 1000);

function fixit(event) {
 window.open("https://paramvik.github.io/countdown/index.html","Countdown", "menubar=no,toolbar=no,location=no,titlebar=no,scrollbars=no,resizable=no,top=0,left=1200,width=350,height=400");
}

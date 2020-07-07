var nav = true;


function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById("main_content").style = "left: 200px; calc(calc(100vw) - 200px);";
  // document.getElementById("main_content").style.width = "calc(calc(100vw) - 200px);";
  var div=document.getElementById("mySidenav");
  // var div=document.querySelectorAll('div,a');
  var anchrs=div.getElementsByTagName('a');
  anchrs[2].getElementsByTagName('span')[0].innerText ="Dashboard";
  anchrs[3].getElementsByTagName('span')[0].innerText ="My Complain";
  anchrs[4].getElementsByTagName('span')[0].innerText ="Reports";
  anchrs[5].getElementsByTagName('span')[0].innerText ="FAQ";
   nav = true;
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "60px";
  document.getElementById("main_content").style = "left: 60px; width: calc(calc(100vw) - 60px);";
  // document.getElementById("main_content").style.width = "calc(calc(100vw) - 60px);";
  var div=document.getElementById("mySidenav");
  // var div=document.querySelectorAll('div,a');
  var anchrs=div.getElementsByTagName('a');
  for(var i=2;i<anchrs.length;i++){
    // console.log(anchrs[i].getElementsByTagName('span'));
    anchrs[i].getElementsByTagName('span')[0].innerText ="";
  }
   nav = false;
}
function toggleNav() {
  nav ? closeNav() : openNav();
}


function closeNavSm() {
  document.getElementById("mySidenav").style.width = "0";
}

function openNavSm() {
  document.getElementById("mySidenav").style.width = "200px";

}


function dashBoard() {
  document.getElementById('dashboard').style='border-left: 3px solid rgba(182,2,33,0.9);' +
      'color: white;background-color: rgba(1,1,1,0.3);';
  document.getElementById('mycomplain').style='';
  document.getElementById('faq').style='';
  document.getElementById('report').style='';

  var div=document.getElementById('chng_cnt')
  // div.innerHTML='<p>Hi from Dashboard</p>';

  var xhttp = new XMLHttpRequest();
  var url = '/dashboard' ;
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var rtxt = (xhttp.responseText);
      // console.log(rtxt);
      div.innerHTML=rtxt;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}


function myComplain() {
  // console.log('mycomplain');
  document.getElementById('mycomplain').style='border-left: 3px solid rgba(182,2,33,0.9);' +
      'color: white;background-color: rgba(1,1,1,0.3);';
  document.getElementById('report').style='';
  document.getElementById('dashboard').style='';
  document.getElementById('faq').style='';

  var div=document.getElementById('chng_cnt')
  // div.innerHTML='<p>Hi from Mycomplain</p>';
  var div=document.getElementById('chng_cnt')
  // div.innerHTML='<p>Hi from Dashboard</p>';

  var xhttp = new XMLHttpRequest();
  var url = '/mycomplain' ;
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var rtxt = (xhttp.responseText);
      // console.log(rtxt);
      div.innerHTML=rtxt;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();


}

function reports() {
  // console.log('reports');
  document.getElementById('report').style='border-left: 3px solid rgba(182,2,33,0.9);' +
      'color: white;background-color: rgba(1,1,1,0.3);';
  document.getElementById('mycomplain').style='';
  document.getElementById('dashboard').style='';
  document.getElementById('faq').style='';

  var div=document.getElementById('chng_cnt')
  // div.innerHTML='<p>Hi from Report</p>';
  var div=document.getElementById('chng_cnt')
  // div.innerHTML='<p>Hi from Dashboard</p>';

  var xhttp = new XMLHttpRequest();
  var url = '/report' ;
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var rtxt = (xhttp.responseText);
      // console.log(rtxt);
      div.innerHTML=rtxt;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}

function faq() {
  // console.log('faq');
  document.getElementById('faq').style='border-left: 3px solid rgba(182,2,33,0.9);' +
      'color: white;background-color: rgba(1,1,1,0.3);';
  document.getElementById('mycomplain').style='';
  document.getElementById('dashboard').style='';
  document.getElementById('report').style='';

  var div=document.getElementById('chng_cnt')
  // div.innerHTML='<p>Hi from FAQ</p>';
  var div=document.getElementById('chng_cnt')
  // div.innerHTML='<p>Hi from Dashboard</p>';

  var xhttp = new XMLHttpRequest();
  var url = '/faq' ;
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var rtxt = (xhttp.responseText);
      // console.log(rtxt);
      div.innerHTML=rtxt;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();


}

function newComplain() {
        var div = document.getElementById('com_cont');
        // div.innerHTML='<p>Hi from Dashboard</p>';

        var xhttp = new XMLHttpRequest();
        var url = '/newcomplain';
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var rtxt = (xhttp.responseText);
                // console.log(rtxt);
                div.innerHTML = rtxt;
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }


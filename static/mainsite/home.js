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
        var div = document.getElementById('chng_cnt');
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

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

function SaveComplain() {

  var data = new FormData();
  var req = new XMLHttpRequest();
  var url='/SaveComplain/';
  var csrftoken = getCookie('csrftoken');

  var sub=document.getElementById('sub').innerText;
  var bdy=document.getElementById('bdy').innerText;
  var dep=document.getElementById('dep').value;
  var attch=document.getElementById('cfl');
  var pri=document.getElementById('pri').value;
  if(attch.files[0]==undefined){
    attch='';
    data.append('attch', attch);
  }else {
    attch=attch.files[0];
    data.append('attch', attch);
  }

  data.append('sub', sub);
  data.append('bdy', bdy);
  data.append('dep', dep);
  data.append('pri', pri);

  req.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
           // alert(document.getElementsByTagName('body')[0])
           document.getElementById('chng_cnt').innerHTML=req.response;
       }
  };

  req.open("post", url, true);
  req.setRequestHeader("X-CSRFToken", csrftoken);
  req.send(data);

}

function NewComplain() {
  if(Dep()&Subj()&Bdy()){
    SaveComplain()
  }

}

function Dep() {
  var dep=document.getElementById('dep').value;
  if(dep=='null'){
    document.getElementById('dep_error').style.display='block';
    return false;
  }else {
    document.getElementById('dep_error').style.display='none';
    return true;
  }
}

function Bdy() {
  var bdy=document.getElementById('bdy').innerText;
  if(bdy==''||(bdy.length<50)||bdy=='Your Complain Here...'){
    document.getElementById('bdy_error').style.display='block';
    return false;
  }else {
    document.getElementById('bdy_error').style.display='none';
    return true;
  }
}

function Subj() {
  var sub=document.getElementById('sub').innerText;
  if(sub=='' || sub=='Complain Subject...'){
    document.getElementById('sub_error').style.display='block';
    return false;
  }else {
    document.getElementById('sub_error').style.display='none';
    return true;
  }
}

function FileUp() {
    var ipt = document.getElementById('cfl');
    rfile = ipt.files[0].name;
    document.getElementById('rtxt').innerText = "Selected: " + rfile;
}

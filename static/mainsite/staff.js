var nav = true;

//------------Spinner-------------------------------------------

var m_s_div=document.createElement('div');
m_s_div.className='spinner_container';
m_s_div.id='spinner_con';
var s_div=document.createElement('div');
s_div.className='spinner_div';
var spnr=document.createElement('div');
spnr.className='my_spinner';

s_div.appendChild(spnr);

m_s_div.appendChild(s_div)


//------------end ofSpinner-------------------------------------------



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

  var div=document.getElementById('chng_cnt');
  div.innerHTML=''
  div.appendChild(m_s_div);
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


function Complains() {
  // console.log('mycomplain');
  var div=document.getElementById('chng_cnt');
  div.innerHTML=''
  div.appendChild(m_s_div);
  document.getElementById('mycomplain').style='border-left: 3px solid rgba(182,2,33,0.9);' +
      'color: white;background-color: rgba(1,1,1,0.3);';
  document.getElementById('report').style='';
  document.getElementById('dashboard').style='';
  document.getElementById('faq').style='';

 var modal_div = document.getElementById('model_div');
 // alert(modal_div);
  // div.innerHTML='<p>Hi from Mycomplain</p>';
  var div=document.getElementById('chng_cnt')
  // div.innerHTML='<p>Hi from Dashboard</p>';

  var xhttp = new XMLHttpRequest();
  var url = '/complains' ;
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var rtxt = (xhttp.responseText);
      // alert(rtxt[0]);
      var mdl,mn_cnt;
      mdl=rtxt.indexOf('<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">');
      mn_cnt=rtxt.slice(0,mdl)
      mdl=rtxt.slice(mdl);
      div.innerHTML=mn_cnt;
      modal_div.innerHTML=mdl;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();


}

function reports() {
  // console.log('reports');
  var div=document.getElementById('chng_cnt');
  div.innerHTML=''
  div.appendChild(m_s_div);
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

  // var div=document.getElementById('chng_cnt');
  // div.innerHTML=''
  // div.appendChild(m_s_div);

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

function viewcomplain(complain_id) {

     var btn=document.getElementById('view_com_staff'+complain_id);
    btn.setAttribute('disabled','true');
    // btn.innerHTML='';
    var spnr=document.createElement('div');
    spnr.className='btn_spinner';
    spnr.style='margin-top: -20px;'
    btn.appendChild(spnr);

  var div = document.getElementById('chng_cnt');
   var modal_div = document.getElementById('model_div');
   // alert(modal_div);
  // div.innerHTML='<p>Hi from Dashboard</p>';

  var xhttp = new XMLHttpRequest();
  var url = '/viewcomplainstaff?complain_id='+complain_id;
  xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          var rtxt = (xhttp.responseText);
          // console.log(rtxt);
          div.innerHTML = rtxt;
          var mdl,mn_cnt;
          mdl=rtxt.indexOf('<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">');
          mn_cnt=rtxt.slice(0,mdl)
          mdl=rtxt.slice(mdl);
          div.innerHTML=mn_cnt;
          modal_div.innerHTML=mdl;

          complain_viewed_staff(complain_id);

      }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

var complain_ID;
function Share_mdl(complain) {
    complain_ID=complain
}

function GeneratePdf() {
  var url = '/pdf_generator?complain_id='+complain_ID;
  window.open(url,'_blank');

  complain_shared_staff(complain_ID);

}

function Send_Email() {
  var lnk = document.getElementById('share_eml');

  var xhttp = new XMLHttpRequest();
  var url = '/email_complain?complain_id='+complain_ID;
  xhttp.responseType='json';
  xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          var rtxt = (xhttp.response);
          // alert(rtxt[2])
          document.location.href = "mailto:?subject="
                + encodeURIComponent('New Complain')
                + "&body=" +"Date of Submission: "+rtxt[4]+"%0d%0a"+"User_ID: " +rtxt[0]+"%0d%0a"+
              "Full Name: "+rtxt[1]+"%0d%0a"+"Subject of Original Complain: "+rtxt[2]+"%0d%0a%0d%0a"+
              "Body of Complain: "+"%0d%0a%0d%0a         "+rtxt[3]+"%0d%0a %0d%0a"+
              "--End of Body--"+"%0d%0a %0d%0a %0d%0a %0d%0a";

                complain_shared_staff(complain_ID);
      }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}

function complain_viewed_staff(complain_id) {
  var xhttp = new XMLHttpRequest();
  var url = '/increase_com_view?complain_id='+complain_id;
  xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          // var rtxt = (xhttp.response);
          // alert(rtxt);
      }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function complain_shared_staff(complain_id) {
  var xhttp = new XMLHttpRequest();
  var url = '/increase_shared_view?complain_id='+complain_id;
  xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          // var rtxt = (xhttp.response);
          // alert(rtxt);
      }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function complain_reported_staff(complain_id) {
  var xhttp = new XMLHttpRequest();
  var url = '/increase_reported_view?complain_id='+complain_id;
  xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          var rtxt = (xhttp.response);
          alert(rtxt);
      }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function complain_replied(complain_id) {
  var xhttp = new XMLHttpRequest();
  var url = '/increase_replied_view?complain_id='+complain_id;
  xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          var rtxt = (xhttp.response);
          // alert(rtxt);
      }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function Reply_to_Comment_Staff(comment_id) {

    var div=document.getElementById('chng_cnt');
    div.innerHTML=''
    div.appendChild(m_s_div);

    var xhttp = new XMLHttpRequest();
    var url = '/reply_to_comment_staff?comment_id='+comment_id;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var rtxt = (xhttp.responseText);
            // console.log(rtxt);
            div.innerHTML = rtxt;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();


    // alert("reply "+comment_id);
    // complain_replied(comment_id);

}
function V_Comment_Replies(comment_id) {

  var bdy=document.getElementById('bdy').innerText;
  if(bdy==''||bdy=='Your Reply Here...'){
    document.getElementById('bdy_error').style.display='block';
  }else {
    document.getElementById('bdy_error').style.display='none';
    Save_Comment_Replies(comment_id);
  }
}


function Save_Comment_Replies(comment_id) {
    // alert("Saved")
  var data = new FormData();
  var req = new XMLHttpRequest();
  var url='/Save_Comment_Replies/';
  var csrftoken = getCookie('csrftoken');

  var bdy=document.getElementById('bdy').innerText;
  var attch=document.getElementById('cfl');
  if(attch.files[0]==undefined){
    attch='';
    data.append('attch', attch);
  }else {
    attch=attch.files[0];
    data.append('attch', attch);
  }

  data.append('bdy', bdy);
  data.append('comment_id', comment_id);

  req.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
           // alert(document.getElementsByTagName('body')[0])

           complain_replied(comment_id);
           document.getElementById('chng_cnt').innerHTML=req.response;
       }
  };

  req.open("post", url, true);
  req.setRequestHeader("X-CSRFToken", csrftoken);
  req.send(data);

}

function viewcomplain_after_reply_discard_staff(complain_id) {

  var div=document.getElementById('chng_cnt');
  div.innerHTML=''
  div.appendChild(m_s_div);

  var div = document.getElementById('chng_cnt');
   var modal_div = document.getElementById('model_div');
   // alert(modal_div);
  // div.innerHTML='<p>Hi from Dashboard</p>';

  var xhttp = new XMLHttpRequest();
  var url = '/viewcomplainstaff?complain_id='+complain_id;
  xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          var rtxt = (xhttp.responseText);
          // console.log(rtxt);
          div.innerHTML = rtxt;
          var mdl,mn_cnt;
          mdl=rtxt.indexOf('<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">');
          mn_cnt=rtxt.slice(0,mdl)
          mdl=rtxt.slice(mdl);
          div.innerHTML=mn_cnt;
          modal_div.innerHTML=mdl;

      }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
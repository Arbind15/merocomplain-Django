var nav = true;

document.addEventListener('DOMContentLoaded', function() {
   dashBoard();
   Count_Unseen_Notifications();
   // Data_Collection_For_Dashboard(13);
   // DashboardCharts();
}, false);

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

function Profile(){

      var div=document.getElementById('chng_cnt');
      div.innerHTML=''
      div.appendChild(m_s_div);

      document.getElementById('faq').style='';
      document.getElementById('mycomplain').style='';
      document.getElementById('dashboard').style='';
      document.getElementById('report').style='';

      var div=document.getElementById('chng_cnt')
      // div.innerHTML='<p>Hi from Dashboard</p>';

      var xhttp = new XMLHttpRequest();
      var url = '/profile';
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var rtxt = (xhttp.responseText);
          // console.log(rtxt);
          div.innerHTML=rtxt;
          document.getElementById('spinner_con').style.display='none';
        }
      };
      xhttp.open("GET", url, true);
      xhttp.send();

}

function Logout(){

      var xhttp = new XMLHttpRequest();
      var url = '/logout';
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          alert("loggedout");
        }
      };
      xhttp.open("GET", url, true);
      xhttp.send();
}

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


function dashBoard() {
  // document.getElementById('spinner_con').style.display='flex';
 try {
      var div=document.getElementById('chng_cnt');
      div.innerHTML=''
      div.appendChild(m_s_div);
 }

 catch (e) {

 }

  document.getElementById('dashboard').style='border-left: 3px solid rgba(182,2,33,0.9);' +
      'color: white;background-color: rgba(1,1,1,0.3);';
  document.getElementById('mycomplain').style='';
  document.getElementById('faq').style='';
  document.getElementById('report').style='';

   var modal_div = document.getElementById('model_div');
  var div=document.getElementById('chng_cnt')
  // div.innerHTML='<p>Hi from Dashboard</p>';

  var xhttp = new XMLHttpRequest();
  var url = '/dashboard' ;
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
      Data_Collection_For_Dashboard(13);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}



function myComplain(user_id) {

  var div=document.getElementById('chng_cnt');
  div.innerHTML=''
  div.appendChild(m_s_div);

  document.getElementById('mycomplain').style='border-left: 3px solid rgba(182,2,33,0.9);' +
      'color: white;background-color: rgba(1,1,1,0.3);';
  document.getElementById('report').style='';
  document.getElementById('dashboard').style='';
  document.getElementById('faq').style='';


  // div.innerHTML='<p>Hi from Mycomplain</p>';
  var modal_div = document.getElementById('model_div');
  // div.innerHTML='<p>Hi from Dashboard</p>';

  var xhttp = new XMLHttpRequest();
  var url = '/mycomplain?user_id='+user_id ;
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

function viewcomplain(complain_id) {
  var div = document.getElementById('chng_cnt');
   var modal_div = document.getElementById('model_div');

   try {
        var btn=document.getElementById('my_com_view_btn'+complain_id);
        btn.setAttribute('disabled','true');
        // btn.innerHTML='';
        var spnr=document.createElement('div');
        spnr.className='btn_spinner';
        spnr.style='margin-top: -20px;'
        btn.appendChild(spnr);
   }
   catch (e) {

   }

  var xhttp = new XMLHttpRequest();
  var url = '/viewcomplain?complain_id='+complain_id;
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
            // alert('');
          complain_viewed_staff(complain_id);


      }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}


function reports() {

  // document.getElementById('spinner_con').style.display='flex';
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

  var div=document.getElementById('chng_cnt');
  div.innerHTML=''
  div.appendChild(m_s_div);

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
      document.getElementById('spinner_con').style.display='none';
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();


}

function newComplain() {
        var div = document.getElementById('chng_cnt');
        // div.innerHTML='<p>Hi from Dashboard</p>';

        var div=document.getElementById('chng_cnt');
        div.innerHTML=''
        div.appendChild(m_s_div);

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

  var div=document.getElementById('chng_cnt');
  div.innerHTML=''
  div.appendChild(m_s_div);

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

    var btn=document.getElementById('proceed_btn');
    btn.setAttribute('disabled','true');
    // btn.innerHTML='';
    var spnr=document.createElement('div');
    spnr.className='btn_spinner';
    spnr.style='margin-top: -20px;'
    btn.appendChild(spnr);

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

function OnLogin() {
    var btn=document.getElementById('login_btn');
    btn.setAttribute('disabled','true');
    // btn.innerHTML='';
    var spnr=document.createElement('div');
    spnr.className='btn_spinner';
    spnr.style='margin-top: -20px;'
    btn.appendChild(spnr);

    return true;

}

function complain_viewed_staff(complain_id) {
  var xhttp = new XMLHttpRequest();
  var url = '/increase_com_view?complain_id='+complain_id;
  // alert('');
  xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          var rtxt = (xhttp.response);
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



function Reply_to_Comment(comment_id) {

    var div=document.getElementById('chng_cnt');
    div.innerHTML=''
    div.appendChild(m_s_div);

    var xhttp = new XMLHttpRequest();
    var url = '/reply_to_comment?comment_id='+comment_id;
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



function viewcomplain_after_reply_discard_home(complain_id) {

  var div=document.getElementById('chng_cnt');
  div.innerHTML=''
  div.appendChild(m_s_div);

  var div = document.getElementById('chng_cnt');
   var modal_div = document.getElementById('model_div');
   // alert(modal_div);
  // div.innerHTML='<p>Hi from Dashboard</p>';

  var xhttp = new XMLHttpRequest();
  var url = '/viewcomplain?complain_id='+complain_id;
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

function Post_Re_reply_Box(rep_id) {
    // alert(rep_id);
      document.getElementById('re_reply_card'+rep_id).style.display='block';
      var re_val=document.getElementById('re_reply_card'+rep_id+'value').innerText;

      var data = new FormData();
      var req = new XMLHttpRequest();
      var url='/Save_Re_Replies/';
      var csrftoken = getCookie('csrftoken');

      var attch=document.getElementById('cfl');
      if(attch.files[0]==undefined){
        attch='';
        data.append('attch', attch);
      }else {
        attch=attch.files[0];
        data.append('attch', attch);
      }

      data.append('bdy', re_val);
      data.append('re_reply_id', rep_id);

      req.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
               // alert(document.getElementsByTagName('body')[0])
               //  alert(req.responseText);
               var com_id=document.getElementById('my_com_view_btn'+rep_id).value;
               viewcomplain(com_id);
               // complain_replied(comment_id);
               // document.getElementById('chng_cnt').innerHTML=req.response;
           }
      };

      req.open("post", url, true);
      req.setRequestHeader("X-CSRFToken", csrftoken);
      req.send(data);


    // alert(re_val);
}


function Discard_Re_reply_Box(rep_id) {
    document.getElementById('re_reply_card'+rep_id).style.display='none';
}


function Re_Reply_Box(rep_id) {
    // alert(rep_id);
    document.getElementById('re_reply_card'+rep_id).style.display='block';
    var re_val=document.getElementById('re_reply_card'+rep_id+'value').innerText;
    // alert(re_val);
}

function Onclick_Replies_Option(complain_id) {

  var rep_id=document.getElementById('replies_sel_'+complain_id).value;
  var div=document.getElementById('chng_cnt');
  div.innerHTML=''
  div.appendChild(m_s_div);

   var modal_div = document.getElementById('model_div');
   // alert(modal_div);
  // div.innerHTML='<p>Hi from Dashboard</p>';

  var xhttp = new XMLHttpRequest();
  var url = '/viewcomplain?complain_id='+complain_id+'&reply_id='+rep_id;
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

          var fs_crd=document.getElementById('focus_to_card');
          // alert(fs_crd);
          if(fs_crd !== null){
              // alert('H');
              var r_id=fs_crd.getAttribute('content');
              ScrollTo(r_id);
          }

      }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}


function ScrollTo(rep_id) {
    // alert(rep_id);
    var crd=document.getElementById('re_card'+rep_id);
    crd.scrollIntoView({behavior:'smooth',block:"start"});

    if(rep_id.slice(-2)=='re'){
        crd.className='card active_re_replies_card';
        // alert(crd);
        var s='#re_card'+rep_id
        $(s).mouseover(function(){
            // alert('');
            $(s).addClass("card re_replies_card").removeClass("active_re_replies_card")
        })
    }
    else {
        crd.className='card active_reply_card';
        // alert(crd);
        var s='#re_card'+rep_id
        $(s).mouseover(function(){
            // alert('');
            $(s).addClass("card newcomplain").removeClass("active_reply_card")
        })
    }


}

function ViewNotices() {
    // alert("");
  var div=document.getElementById('chng_cnt');
  div.innerHTML=''
  div.appendChild(m_s_div);

   var modal_div = document.getElementById('model_div');
   // alert(modal_div);
  // div.innerHTML='<p>Hi from Dashboard</p>';

  var xhttp = new XMLHttpRequest();
  var url = '/viewnotices';
  xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          var rtxt = (xhttp.responseText);
          // console.log(rtxt);
          div.innerHTML = rtxt;



          // var mdl,mn_cnt;
          // mdl=rtxt.indexOf('<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">');
          // mn_cnt=rtxt.slice(0,mdl)
          // mdl=rtxt.slice(mdl);
          // div.innerHTML=mn_cnt;
          // modal_div.innerHTML=mdl;
          //
          // var fs_crd=document.getElementById('focus_to_card');
          // // alert(fs_crd);
          // if(fs_crd !== null){
          //     // alert('H');
          //     var r_id=fs_crd.getAttribute('content');
          //     ScrollTo(r_id);
          // }

      }
  };
  xhttp.open("GET", url, true);
  xhttp.send();



}


function ViewParticularNotice(status,val,indx,opt_id=null) {
    var div=document.getElementById(status+val);
    div.className='list-group-item list-group-item-action flex-column align-items-start'
    // alert(val);
    // alert(status);
    if(status=='n_user_welcome'){

    }
    else if(status=='n_user'){

    }
    else if(status=='n_complain'){
        View_Content_From_Notifications(val)
        complain_viewed_staff(val);
    }
    else if(status=='n_replies'){
        View_Content_From_Notifications(opt_id,val)
        complain_viewed_staff(opt_id);
    }
    else if(status=='n_re_replies'){
        View_Content_From_Notifications(opt_id,val+'re')
        complain_viewed_staff(opt_id);
    }

    else if(status=='new_complain_view'){
        View_Content_From_Notifications(val)
    }
    else if(status=='new_complain_shared'){
        View_Content_From_Notifications(val)
        complain_viewed_staff(val);
    }
    else if(status=='new_complain_reported'){
        View_Content_From_Notifications(val)
        complain_viewed_staff(val);
    }
    Update_Notice_Seen_Status(status,val,indx);

}


function View_Content_From_Notifications(complain_id,rep_id=null) {

  // var rep_id=document.getElementById('replies_sel_'+complain_id).value;
  var div=document.getElementById('chng_cnt');
  div.innerHTML=''
  div.appendChild(m_s_div);

   var modal_div = document.getElementById('model_div');

  var xhttp = new XMLHttpRequest();

  if(rep_id==null){
      var url = '/viewcomplain?complain_id='+complain_id;
  }
  else {
      var url = '/viewcomplain?complain_id='+complain_id+'&reply_id='+rep_id;
  }

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

          var fs_crd=document.getElementById('focus_to_card');
          // alert(fs_crd);
          if(fs_crd !== null){
              // alert('H');
              var r_id=fs_crd.getAttribute('content');
              ScrollTo(r_id);
          }

          Count_Unseen_Notifications();

      }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}





function Update_Notice_Seen_Status(sta,val,indx) {

  var xhttp = new XMLHttpRequest();
  var url = '/Update_Notice_Seen_Status?status='+sta+'&value='+val+'&index='+indx;
  xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          var rtxt = (xhttp.responseText);
          // alert(rtxt);
      }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}




// window.onload=Count_Unseen_Notifications();
var Notification_Count=null;
function Count_Unseen_Notifications() {
  var xhttp = new XMLHttpRequest();
  var url = '/Count_Unseen_Notifications';
  xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          var rtxt = (xhttp.responseText);
          // alert(rtxt);
          var notic_num=document.createElement('div');
          var contr=document.getElementById('notic_num_container');
          contr.innerHTML='';
          if(rtxt=='0'){
              return;
          }
          notic_num.className='bell_pow badge badge-danger badge-counter';
          // badge badge-danger badge-counter
          notic_num.id='notic_num';
          notic_num.setAttribute('onclick','ViewNotices()');
          notic_num.innerText=rtxt;
          contr.appendChild(notic_num);
          // console.log(rtxt);
          if(Notification_Count!=null & rtxt !=Notification_Count) {
             Notification_Count=rtxt;
             Dashboard_Top_Cards('This is New Message.');
          }
          Notification_Count=rtxt;
      }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}


//calling function after each 30 secs
setInterval(Count_Unseen_Notifications,300);



function Report_Complain(complain_id) {
  var xhttp = new XMLHttpRequest();
  var url = '/increase_reported_view?complain_id='+complain_id;
  // alert('');
  xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          var rtxt = (xhttp.response);
          alert(rtxt);
      }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// setInterval(Dashboard_Top_Cards,500);
var num_flg=1;
function Dashboard_Top_Cards(message) {
    var cards = document.getElementById('dashboard_top_card');
    var c_ndx;
    if(num_flg<=4){
        c_ndx=num_flg;
        num_flg=num_flg+1;
    }
    else {
        c_ndx=getRandomInt(1,4);
    }
    var n_div=document.createElement('div');
    n_div.id='dashboard_top_card_'+c_ndx;
    n_div.className='dashboard_top_card_content'

    var div=document.createElement('div');
    div.className='alert alert-info alert-dismissible fade show';
    div.setAttribute('role','alert')
    div.innerText=message;
    var x_btn=document.createElement('button');
    x_btn.setAttribute('type','button');
    x_btn.className='close';
    x_btn.setAttribute('data-dismiss','alert');
    x_btn.setAttribute('aria-label','Close');


    var spn=document.createElement('span');
    spn.setAttribute('aria-hidden','true');
    spn.innerHTML='&times;';

    x_btn.appendChild(spn);
    div.appendChild(x_btn);
    n_div.appendChild(div);

    var rplc=cards.childNodes[c_ndx];
    console.log(rplc)
    cards.replaceChild(n_div,rplc);
    // var div1=document.createElement('div');
    // div1.id='dashboard_top_card_4';
    // div1.className='dashboard_top_card_5'
    // var chngd_card=document.createElement('div');
    // chngd_card.className='card dashboard_top_card_content';
    // var div2=document.createElement('div');
    // div2.className="card-body";
    // div2.innerText='Done'+glblint;
    // glblint=glblint+1;
    // chngd_card.appendChild(div2);
    // div1.appendChild(chngd_card);
    //
    // card1.className='dashboard_top_card_1';
    // card2.className='dashboard_top_card_2';
    // card3.className='dashboard_top_card_3';
    // card4.className='dashboard_top_card_4';
    //
    //
    // card1.addEventListener('animationend',function () {
    //      card1.remove();
    //      card2.id='dashboard_top_card_1';
    //      card3.id='dashboard_top_card_2';
    //      card4.id='dashboard_top_card_3';
    //      cards.appendChild(div1);
    // })

    // div1.className='col-xl-3 col-md-6 mb-4 dashboard_top_card_4';
    //
    // card1.className='col-xl-3 col-md-6 mb-4 dashboard_top_card_1';

    // card1.addEventListener('animationstart',function () {
    //     card2.className='col-xl-3 col-md-6 mb-4 dashboard_top_card_2';
    //     card3.className='col-xl-3 col-md-6 mb-4 dashboard_top_card_3';
    //     card4.className='col-xl-3 col-md-6 mb-4 dashboard_top_card_4';
    //
    // })
    //
    // card1.addEventListener('animationiteration',function () {
    //
    // })
    //
    // card1.addEventListener('animationend',function () {
    //      card1.remove();
    //      cards.appendChild(div1);
    //      div1.className='col-xl-3 col-md-6 mb-4 dashboard_top_card_5'
    //       card2.id='dashboard_top_card_1';
    //      card3.id='dashboard_top_card_2';
    //      card4.id='dashboard_top_card_3';
    //      div1.className='col-xl-3 col-md-6 mb-4 dashboard_top_card_4';
    // })
    //




    //  div1.addEventListener('animationend',function () {
    //     // alert('');
    //     console.log('done')
    //     // card5.id='dashboard_top_card_4';
    //
    //
    // })


    // var card5 = document.getElementById('dashboard_top_card_5');
    // card5.id='dashboard_top_card_4';
    // div1.addEventListener('animationstart',function () {
    //     // alert('');
    //     console.log('done')
    //     // card5.id='dashboard_top_card_4';
    // })


    // div1.id='dashboard_top_card_4';








    // cards.removehild(card1);
    // console.log(cards.appendChild(chngd_card3))
    //
    // chngd_card3.id='dashboard_top_card_';
    //
    // card2.id='dashboard_top_card_1';
    // card3.id='dashboard_top_card_2';


    // chngd_card3.id='dashboard_top_card_3'
    // card2.appendChild(chngd_card3)
    // card2.id='dashboard_top_card_1'
    // card3.id='dashboard_top_card_2'
    // console.log(cards)
    // console.log(card1)
    // console.log(card2)
    // console.log(chngd_card3)
}

function Data_Collection_For_Dashboard(complain_id){
  var xhttp = new XMLHttpRequest();
  var url = '/Data_Collection_For_Dashboard?complain_id='+complain_id;
    xhttp.responseType='json';
  xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          // var rtxt = (xhttp.responseText);
          // alert(xhttp.response);
          var Data=xhttp.response;
          // DashboardCharts(Data);
          // alert(window.onload)
          global_dashboard_chart=DashboardCharts(Data);
          global_dashboard_data=Data;
      }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

// window.onload=Data_Collection_For_Dashboard(13);
var global_dashboard_chart,global_dashboard_data,global_dashboard_complain_id;
function DashboardCharts(Data) {
    // var cnvs=document.createElement('canvas');
    // cnvs.id='DashboardCharts';
    // var cnvs_cntr= document.getElementById('canvas_cotainer');
    // var ctx=cnvs.getContext('2d');
    var ctx = document.getElementById('DashboardCharts').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Replies', 'Re-Replies', 'Views', 'Shares', 'Reports'],
        datasets: [{
            label: 'My First dataset',
            // backgroundColor: 'rgb(255, 99, 132)',
            // borderColor: 'rgb(255, 99, 132)',
            data: Data,
            backgroundColor: ["#e5ffff", "#ffeeff", "#d1d9ff", "#ffddc1", "#ffc4ff"],
            hoverBackgroundColor: ["#82ada9", "#c48b9f", "#6f79a8", "#c97b63", "#9c64a6"]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            position:'bottom',
            boxWidth:20,
        }
    }

});
    return chart;

}

global_dashboard_complain_id=13;
setInterval(Update_Data_of_Complain_Chart,3000);

function Update_Data_of_Complain_Chart() {
    var dat=Math.random();
    dat=dat*10;
    var i=Math.random();
    i=Math.trunc(i*10);
    if(i<=4){
        Update_Complain_Chart(i,dat);
        // console.log('indx')
    }

    // var xhttp = new XMLHttpRequest();
    // var url = '/Data_Collection_For_Dashboard?complain_id=' + global_dashboard_complain_id;
    // xhttp.responseType = 'json';
    // xhttp.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         var Data = xhttp.response;
    //         var i=0;
    //
    //         for(i=0;i<Data.length;i++){
    //             if(global_dashboard_data[i]!=Data[i]){
    //                 Update_Complain_Chart(i,itm);
    //             }
    //         }
    //
    //     }
    // };
    // xhttp.open("GET", url, true);
    // xhttp.send();

}


function Update_Complain_Chart(indx,dat) {
    // console.log(dat)
    var chart=global_dashboard_chart;
    // chart.data.labels.push('label');
    chart.data.datasets.forEach((dataset) => {
        dataset.data.splice(parseInt(indx),1,parseInt(dat));
        // console.log(dataset)
    });
    chart.update();
}

function RemoveDonut() {
    var donut=document.getElementById('Donut_chatr');
    donut.className='col animate_chart_to_remove'
    donut.addEventListener('animationend',function () {
        donut.style='display: none';
    })

}

function RemoveTimeline() {
    var donut=document.getElementById('timeline_card');
    donut.className='card timeline_card animate_chart_to_remove'
    donut.addEventListener('animationend',function () {
        donut.style='display: none';
    })
}

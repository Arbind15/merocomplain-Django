var nav = false;

function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  var div=document.getElementById("mySidenav");
  // var div=document.querySelectorAll('div,a');
  var anchrs=div.getElementsByTagName('a');
  anchrs[1].getElementsByTagName('span')[0].innerText ="Dashboard";
  anchrs[2].getElementsByTagName('span')[0].innerText ="My Complain";
  anchrs[3].getElementsByTagName('span')[0].innerText ="Reports";
  anchrs[4].getElementsByTagName('span')[0].innerText ="FAQ";
   nav = true;
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "60px";
  var div=document.getElementById("mySidenav");
  // var div=document.querySelectorAll('div,a');
  var anchrs=div.getElementsByTagName('a');
  for(var i=1;i<anchrs.length;i++){
    console.log(anchrs[i].getElementsByTagName('span'));
    anchrs[i].getElementsByTagName('span')[0].innerText ="";
  }
   nav = false;
}
function toggleNav() {
  nav ? closeNav() : openNav();
}
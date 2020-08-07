function ptoggle() {
    var status=document.getElementById('password');
    if (status.type=="password"){
        status.type="text";
        document.getElementById('pshow').style="display: none;";
        document.getElementById('phide').style="display: inline;"
    }
    else {
        status.type="password";
        document.getElementById('pshow').style="display: inline;";
        document.getElementById('phide').style="display: none;"
    }
}

function password_validate() {
    if(!(password1_validate()&password2_validate()))
    {
        return false;
    }
    else
    {
       return  true;
    }
}

function password1_validate() {
    var password1=document.getElementById('password1').value;
    var password1_regx=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    if(!(password1_regx.test(password1)))
    {
        document.getElementById('password1_error').style.display='block';
        return false;
    }
    else {
        document.getElementById('password1_error').style.display='none';
        return true;
    }
}
function password2_validate() {
     var password2=document.getElementById('password2').value;
     var password1=document.getElementById('password1').value;
    if(!(password1==password2))
    {
        document.getElementById('password2_error').style.display='block';
        return false;
    }
    else {
        document.getElementById('password2_error').style.display='none';
        return true;
    }
}


let s=document.getElementById("pwd");
let p=document.getElementById("cnfrmpwd");
let u=document.getElementById("username");
function check() {
    if (s.value!=p.value) {
        alert("incorrect password");
        return false;
    }
    else if(s.value==""||p.value==""||u.value==""){
        alert("feilds cannot be empty");
        return false;
    }
    else {
        alert("successfully logged in");
        return true;
    }
}
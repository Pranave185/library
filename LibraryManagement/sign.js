let x=document.getElementById("signmail");
let y=document.getElementById("signuse");
let z=document.getElementById("signpwd");
let a=document.getElementById("signcnfrm1");
let b=document.getElementById("sicnfrm2");

function validate() {
    if (a.value!=x.value ||b.value!=z.value) {
        alert("incorrect entry");
        return false;
    }
    else if(x.value==""||y.value==""||z.value==""||a.value==""||b.value==""){
        alert("feilds cannot be empty");
        return false;
    }
    
    else {
        alert("successful");
       return true;
    }
}

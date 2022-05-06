
document.querySelector("form").addEventListener("submit",formsubmit);
// var userstack = JSON.parse(localStorage.getItem("userdatabase"));
// var userstack = [];
 var userStack = JSON.parse(localStorage.getItem("userdatabase")) || [];
function formsubmit(event){
    event.preventDefault();
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#password").value;
    var user = document.querySelector("#username").value;
    var mob = document.querySelector("#mob").value;
    // console.log(email,pass,user,mob)

    var userdata = {
        emailadd:email,
        password:pass,
        username:user,
        mobilenumber:mob,
    };
    userStack.push(userdata);
    // console.log(userstack)
    localStorage.setItem("userdatabase", JSON.stringify(userStack));
    alert("signupsuccess")
    window.location.href="login.html"
}

document.getElementById("image").addEventListener("click",function(){
    window.location.href="index.html"
})
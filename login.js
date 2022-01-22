document.querySelector("form").addEventListener("submit", loginfunction);
var regdUsers = JSON.parse(localStorage.getItem("userdatabase"))
//  we peekup the dta from localStorage

//  console.log(regdUsers);
function loginfunction(event){
   event.preventDefault();
   var pass = document.querySelector("#password").value;
   var user = document.querySelector("#username").value;

   for(var i = 0; i < regdUsers.length ;i++) {
   // console.log(regdUsers[i].username,regdUsers[i].password);
   if(regdUsers[i].username == user && regdUsers[i].password == pass){
       window.location.href = "home.html";
   } 
}
}

document.getElementById("image").addEventListener("click",function(){
    window.location.href="home.html"
})
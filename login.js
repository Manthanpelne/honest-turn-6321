document.querySelector("form").addEventListener("submit",mylog);

function mylog(){
    
    let mail = document.querySelector("#email").value;
    let password = document.querySelector("#Pass").value;

    let user = JSON.parse(localStorage.getItem("users"));

    let data = user.filter(function(el){
        return el.Email == mail && el.passWord == password;
    });
if(data.length>=1){
    alert("Login Successfull")
}else{
    alert("Wrong Credentials");
}
mail.value="";
password.value="";
}
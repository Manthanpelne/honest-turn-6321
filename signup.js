document.querySelector("form").addEventListener("submit",mysign);

let dataarr=JSON.parse(localStorage.getItem("users"))||[];
function mysign(){
    let Email = document.querySelector("#mail").value;
    let passWord= document.querySelector("#pass").value;

    
 if(Email!="" && passWord!=""){
        let obj={
        Email,
        passWord,
        }
let ud = JSON.parse(localStorage.getItem("users"))||[];
let data = ud.filter(function(el){
    return el.Email==Email;
});

if(data.length>=1){
    alert("User already signed up, please Login");
}else{
    dataarr.push(obj);
    localStorage.setItem("users",JSON.stringify(dataarr));
    Email.value="";
    passWord.value="";
    alert("Sign Up successfull");
}
 }
else{
alert("Please fill the Information");
}
}
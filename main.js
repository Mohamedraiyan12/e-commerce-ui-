const togle = document.getElementById("togle")
let nav =document.querySelector("nav ul")
let accountbtn = document.getElementById("account")
let closebtn =document.querySelector(".card .close i")
let loginpage =document.querySelector(".card")
let username = document.querySelector("#username");
console.log(username)
let password = document.querySelector("#username");



togle.addEventListener("click",()=>{
    nav.classList.toggle('showmenu')
});
accountbtn.addEventListener("click", ()=>{
    loginpage.classList.add('showlogin')
});

closebtn.addEventListener("click",()=>{
    loginpage.classList.remove('showlogin')
});
//
 function login(){
    if(username.value ==="raiyan" || password.value === "rai")
    {
    alert("acount sucessfully sign up");
    window.location.assign('index.html')  
    }
    else{
    alert("please enter avalid username or password");
    }
};

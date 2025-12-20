// let captcha = "";

// function generatecpt() {
//   let a = Math.floor(Math.random() * 10);
//   let b = Math.floor(Math.random() * 10);
//   let c = Math.floor(Math.random() * 10);
//   let d = Math.floor(Math.random() * 10);
//   let e = Math.floor(Math.random() * 10);

//   captcha = "" + a + b + c + d + e;
//   document.getElementById("captCode").innerText = captcha;
// }
// generatecpt();

// function signup() {
//   let user = document.getElementById("captInput").value;
//   let msg = document.getElementById("msg");

//   if (user === captcha) {
//     msg.innerText = "Signup Successfully";
//     msg.style.color = "green";
//   } else {
//     msg.innerText = "Wrong captcha, Try Again";
//     msg.style.color = "red";
//     generatecpt();
//   }
// }



let captcha = "";

function generate(){
    let ch = "ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz0123456789";
    captcha = "";
    for(let i = 0; i < 5; i++){
        let random = Math.floor(Math.random()*ch.length);
        captcha += ch[random];
        
    }
    document.getElementById("captCode").innerText = captcha;
}
generate()

function signup(){
    let user = document.getElementById("captInput").value;
    let msg = document.getElementById("msg");

    if(user === captcha){
        msg.innerText = "signUp Successfully";
        msg.style.color = "green";
    }else{
        msg.innerText = "Wrong Text, Try Again";
        msg.style.color = "red";
    }
    generate()
}


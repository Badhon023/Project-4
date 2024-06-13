const form=document.querySelector("form");
const fullName=document.getElementById("name");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const subject=document.getElementById("subject");
const massage=document.getElementById("message");
let dark=document.getElementById("dark");


let menu=document.getElementById("menu-icon");
let navbar=document.getElementById("ID1");


function ClickMe(){
  document.getElementById("ID1")
}






menu.onclick=()=>{
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
}

window.onscroll=()=>{
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
}









function sendEmail(){

const bodyMessage =`Full Name: ${fullName.value} <br> Email:${email.value}<br> Phone Number:${phone.value} <br> Message: ${massage.value} `


Email.send({
  Host : "smtp.elasticemail.com",
  Username : "farihaislam031@gmail.com",
  Password : "4DC4CE7E596A686F5490972F0B771FBACECD",
  To : 'farihaislam031@gmail.com',
  From : "farihaislam031@gmail.com",
  Subject : subject.value,
  Body : bodyMessage
}).then(
message => {
  if(message == "OK"){
    Swal.fire({
      title: "Success!",
      text: "Message Sent Succesfully!",
      icon: "success"
    });
  }
}
);




}
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    sendEmail();
})


dark.onclick=function(){
  document.body.classList.toggle("light-them");
  if(document.body.classList.contains("light-them")){
    dark.src="image/moon.png";
  }else{
    dark.src="image/sun.png"; 
  }
}



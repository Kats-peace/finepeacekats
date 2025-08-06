let navs =document.getElementById("navlinks");{
    navs.style.display ="block";
navs.className = navlinks-small

}

let email = document.getElementById("email");
let message = document.getElementById("message");
let form = document.getElementById("myform")

form.addEventListener("submit", function(event){

    event.preventDefault();
console.log("Name:", Name.value);
console.log("Email:",email.value);
console.log("Message",message.value)
console.log(`Thank you ${Name.value} for submitting your details`)

alert(`Thank you ${Name.value} for submitting your details Name:${Name.value} email:${email.value} message: ${message.value} `)

})
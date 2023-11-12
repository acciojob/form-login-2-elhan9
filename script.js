//your JS code here. If required.
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName")
let email = document.querySelector("#emailid")
let phone = document.querySelector("#Phone")
let form = document.querySelector("#form")

form.addEventListener("submit", (event)=> {
    event.preventDefault();

    let result = [];
    result.push(firstName.value, lastName.value, email.value, phone.value);
    alert(result.join('\n'));
})


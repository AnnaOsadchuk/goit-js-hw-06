const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const {elements: { email, password }} = event.currentTarget;

    if (email.value === "" || password.value ===""){
        alert("Заповніть будь-ласка усі поля!");
    }

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const pass = formElements.password.value;

    const formData = {mail, pass,};
    form.reset ();
    console.log(formData);

}
const form = document.getElementById("form-wrapper");
const error_msg = document.getElementById("error-msg");

form.addEventListener('submit',(event) => {
    event.preventDefault();
    if(email.value === email.value.toLowerCase()){
        form.submit();
    }
    else {
        email.classList.add('active');
        error_msg.innerText = "Please Enter E-mail with lowercase like 'abcd@gmail.com'"

    }

}
);
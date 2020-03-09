let navmenu = document.querySelector(".mobileMenu");

function changeImage(x) {
    x.classList.toggle("fa-times");
    navmenu.classList.toggle("show");
}

function checkEmail() {

    let email = document.getElementById('txtEmail');
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
        document.getElementById("showAlert").style.display="block"
        document.getElementById("txtEmail").style.border = "2px solid #f25f3a";
        // alert('Please provide a valid email address');
        email.focus;
        return false;
    }else{
        document.getElementById("showAlert").style.display="none"
        document.getElementById("txtEmail").style.border = "none";
    }
}

let input = document.getElementById("txtEmail");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("enter").click();
    }
});
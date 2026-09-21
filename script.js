function validateForm() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if(user == "" || pass == "") {
        alert("Please fill all fields");
        return false;
    }
   return true;
}
/* pass */ 
function checkPassword() {

    let pass = document.getElementById("password").value;         /* onkeyup يعني ال fuction تشتغل لحظه لحظه */

    let message = document.getElementById("message");

    if(pass.length < 4) {    /* innerHTML يعني الكلام يتغير بتغير المحتوي بتاع ال باسورد */

        message.innerHTML = "Weak";
        message.style.color = "red";

    }

    else if(pass.length < 8) {

        message.innerHTML = "Medium";
        message.style.color = "orange";

    }

    else {

        message.innerHTML = "Strong";
        message.style.color = "green";

    }

}


function darkMode() {

    document.body.classList.toggle("dark");  /* كانه بيضيف كلاس اسمه dark */

    let btn = document.getElementById("modeBtn"); /* يعني المتغير btn الي انا عملته هنا بقا مسؤول عالزرار كله */

    if(document.body.classList.contains("dark")) { /* يعني لو ال body اللون فيه اسود خلي الزرار شمس */

        btn.innerHTML = "☀️";

    }

    else {

        btn.innerHTML = "🌙";

} }

let images = [ /* كانه array */

    "images/image.jpg",
    "images/home image2.jpg",
    "images/home image3.jpg"

];

let index = 0;

function slideShow() {

    document.getElementById("slide").src = images[index];

    index++;

    if(index == images.length) {

        index = 0;  /*لما الصور تخلص يرجع لاول صوره تاني */

    }

}

setInterval(slideShow, 2000);

function topFunction() {

    window.scrollTo({ /* يعني الصفحه تطلع لفوق واحده واحده */

        top: 0,
        behavior: "smooth"

    });

}
function buyNow() {

    alert("Product Added Successfully");

}/* <button onclick="buyNow()">Buy Now </button>  لما ادوس عالزرار دا ال  function هتشتغل */
/* defer يعني نستني لما الصفحه تحمل و بعدين شغل ال js */
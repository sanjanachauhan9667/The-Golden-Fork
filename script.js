


const bookBtn = document.getElementById("bookBtn");
const contact = document.getElementById("contact");

bookBtn.addEventListener("click",function(event){
    event.preventDefault();

    contact.scrollIntoView({
        behavior: "smooth"
    })
});


// --------------------
// Contact Form
// --------------------

const contactForm = document.querySelector(".contact-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message")

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9]{10}$/;




// --------------------
// Selected Order Button
// --------------------

let selectedButton = null;

// --------------------
// Contact Form Validation
// --------------------


contactForm.addEventListener("submit",function(event){

    event.preventDefault();

    if(nameInput.value.trim()===""){
        alert("Please enter your name");
    }else if(emailInput.value.trim()===""){
        alert("Please enter your email");
    }else if(!emailPattern.test(emailInput.value.trim())){
        alert("Please enter a valid email");
    }else if(phoneInput.value.trim()===""){
        alert("Please enter your phone no.");
    }else if(!phonePattern.test(phoneInput.value.trim())){
        alert("Please enter a valid phone no");
    }else if(messageInput.value.trim()===""){
        alert("Please enter your message");
    }else{
        alert("Message sent successfully!");
        contactForm.reset();
        if(selectedButton !== null){
            selectedButton.textContent = "Order Now";
            selectedButton = null;
        }
    }
})



// --------------------
// Order Now Buttons
// --------------------

const orderButtons = document.querySelectorAll(" .dish-card .btn");

orderButtons.forEach(function(button){

    button.addEventListener("click",function(event){

        event.preventDefault();

        const dishName = button.parentElement.querySelector("h3").textContent;

        const contact = document.getElementById("contact");

        contact.scrollIntoView({
            behavior: "smooth"
        });

        messageInput.value = "I would like to order " + dishName;
        nameInput.focus();
        button.textContent = "Selected ✓";
        selectedButton = button;
    })

});









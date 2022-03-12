function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalbgvalid = document.querySelector(".bground_valid_form");
const modalBtn = document.querySelectorAll(".modal-btn");
const textControl = document.querySelectorAll(".text-control");
const closeModalBtn = document.getElementById('btn_close');
const sendForm = document.getElementById('btn_form_submit');
const checkboxInput= document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
closeModalBtn.addEventListener('click', function(){
  modalbg.style.display = "none";
});

//check form
textControl.forEach(text => {
  text.addEventListener('input', elt =>{
    if(text.checkValidity()==false){
      text.parentNode.dataset.errorVisible="true";
      text.parentNode.dataset.error ="Le champ n'est pas correct";
    }else if(text.checkValidity()==true){
      text.parentNode.dataset.errorVisible="false";
      text.parentNode.dataset.error ="";
    }
  })
})


function validate(){
  setTimeout(function(){modalbgvalid.style.display = "block";},5000);
}

//check form & send form
sendForm.addEventListener('click', function(event){
  textControl.forEach(text => {
      if(text.checkValidity()==false){
        text.parentNode.dataset.errorVisible="true";
        text.parentNode.dataset.error;
      }else if(text.checkValidity()==true){
        text.parentNode.dataset.errorVisible="false";
        affiche();
      }
  })
  if (checkboxInput.checked == false){
    checkboxInput.parentNode.dataset.errorVisible="true";
    event.preventDefault();
  }else if (checkboxInput.checked == true){
    checkboxInput.parentNode.dataset.errorVisible="false";
  }
})






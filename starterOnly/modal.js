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

// display validity text
function displayValidityMessage(){
  modalbgvalid.style.display = "block";
  modalbg.style.display = "none";
  setTimeout(function() {
    modalbgvalid.style.display = "none";
  }, 4000);
}

//display error-data message
function errorData(elt){
  elt.parentNode.dataset.errorVisible="true";
}

//check form
textControl.forEach(text => {
  text.addEventListener('input', elt =>{
    if(text.checkValidity()==false){
      errorData(text);
    }else if(text.checkValidity()==true){
      text.parentNode.dataset.errorVisible="false";
    }
  })
})

//check form & send form
sendForm.addEventListener('click', function(event){
  let dataForm = Array.from(textControl);
  if(dataForm.every((data) => data.checkValidity()) && checkboxInput.checked){
    event.preventDefault();
    displayValidityMessage();
    this.form.reset();
  }else{
    textControl.forEach(text=>{
      if(!text.checkValidity()){
        errorData(text);
      }
    })
    if(!checkboxInput.checked){
      checkboxInput.parentNode.dataset.errorVisible="true";
      event.preventDefault();
    }
  }
});





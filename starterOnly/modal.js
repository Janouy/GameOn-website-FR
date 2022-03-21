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
function showFieldError(elt){
  elt.parentNode.dataset.errorVisible="true";
}

//delete error-data message
function hideFieldError(elt){
  elt.parentNode.dataset.errorVisible="false";
}

//check form
textControl.forEach(text => {
  text.addEventListener('input', elt =>{
    if(text.checkValidity()==false){
      showFieldError(text);
    }else if(text.checkValidity()==true){
      hideFieldError(text);
    }
  })
  checkboxInput.addEventListener("change", elt =>{
    if(!checkboxInput.checked){
      showFieldError(checkboxInput);
    }else{
      hideFieldError(checkboxInput);
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
        showFieldError(text);
      }
    })
    if(!checkboxInput.checked){
      showFieldError(checkboxInput);
      event.preventDefault();
    }
    if(checkboxInput.checked){
      hideFieldError(checkboxInput);
    }
  }
});





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
      text.parentNode.dataset.error;
    }else if(text.checkValidity()==true){
      text.parentNode.dataset.errorVisible="false";
    }
  })
})

//check form & send form
sendForm.addEventListener('click', function(event){
  const myArray =[];
  textControl.forEach(text =>{
    myArray.push(text);
  })
  if(myArray.every((data) => data.checkValidity()) && checkboxInput.checked){
    event.preventDefault();
    modalbgvalid.style.display = "block";
    modalbg.style.display = "none";
    setTimeout(function() {
      location.reload();
    }, 5000);
  }else{
    textControl.forEach(text=>{
      if(!text.checkValidity()){
        text.parentNode.dataset.errorVisible="true";
        text.parentNode.dataset.error;
      }
    })
    if(!checkboxInput.checked){
    checkboxInput.parentNode.dataset.errorVisible="true";
    checkboxInput.parentNode.dataset.error;
    event.preventDefault();
    }
  }
});







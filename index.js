// Add JavaScript code for your web site here and call it from index.html.
/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");
// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode")
    // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click" , toggleDarkMode);

/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
let RsvpButton = document.getElementById("rsvp-button");
const addParticipant = (person) => {
    // Step 2: Write your code to manipulate the DOM here
     /* const name = document.getElementById("name");
      const nameValue = name.value;
      const state = document.getElementById("state");
      const stateValue = state.value;
      const email = document.getElementById("email");
      const emailValue = email.value */

      const p = document.createElement("p");
      p.textContent = `🎟️ ${person.name} from ${person.state} has RSVP'd!`;
      const participants = document.querySelector(".rsvp-participants");
      participants.appendChild(p);
    event.preventDefault();
}

// Step 3: Add a click event listener to the submit RSVP button here
/*RsvpButton.addEventListener("click", addParticipant)*/
/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = event => {
  event.preventDefault();
  let containsErrors = false;
  let rsvpInputs = document.getElementById("rsvp-form").elements;
  let person = {
      name: rsvpInputs[0].value, // accesses and saves value of first input
      state: rsvpInputs[1].value,
      email: rsvpInputs[2].value
  }
  // TODO: Loop through all inputs

  for(let i = 0; i < rsvpInputs.length; i++) {
    const input = rsvpInputs[i];
    if (input.type=="submit") {
      continue;
    }
    
    if (input.value == ""){
      containsErrors = true;
      input.classList.add("error");
    }
    else {
      input.classList.remove("error");
    }
    }
    
  
  // TODO: Inside loop, validate the value of each input

  // TODO: If no errors, call addParticipant() and clear fields
  if (containsErrors== false){
    addParticipant(person);
    toggleModal(person);
    for (let i = 0; i < rsvpInputs.length; i++) {
      rsvpInputs[i].value = "";
    }
  }
}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
RsvpButton.addEventListener("click", validateForm);

/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
    let modal = document.getElementById("success-modal"); 
    let modalContent = document.getElementById("modal-item");// TODO

    let intervalID = setInterval(animateImage, 500);
    // TODO: Update modal display to flex
    modal.style.display = "flex";

    // TODO: Update modal text to personalized message
      const personalized = document.createElement("p");
      personalized.textContent = `Thank you for RSVPing, ${person.name}!`;
      modalContent.appendChild(personalized);

    // Set modal timeout to 5 seconds
    
    setTimeout(()=> {
      modal.style.display = 'none' ; clearInterval(intervalID);
    }, 5000);
    
};

// TODO: animation variables and animateImage() function3
let rotateFactor = 0;
const modalImage = document.getElementById("modal-image");

const animateImage = ()=> {
  if (rotateFactor === 0)
  {
    rotateFactor = -10;
  }
  else{
    rotateFactor=0;
  }
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
};


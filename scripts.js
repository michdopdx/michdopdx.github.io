// Used https://www.w3schools.com/js/js_validation.asp as inspiration to validate forms
// Used https://www.geeksforgeeks.org/how-to-make-a-word-count-in-textarea-using-javascript/ for word counter in text area

let messageForm = document.getElementById("form");
let formName = document.getElementById("Name");
let formEmail = document.getElementById("Email");
let formMessage = document.getElementById("messageArea");

function validateForm() {
  const userInputName = formName.value;
  const userInputEmail = formEmail.value;
  const userInputMessage = formMessage.value;
  if (userInputName === "") {
    alert(
      "Name is required. Make sure you enter your name or I won't know who I'm talking to!"
    );
    return false;
  } else if (userInputEmail === "") {
    alert(
      "Email is required. Make sure you leave your email so I can reach out!"
    );
    return false;
  } else if (userInputMessage === "") {
    alert(
      "Missing text from comment section. Please make sure to leave a comment"
    );
    return false;
  }
}

function sendMessageToUser() {
  const userInputName = formName.value;
  alert(
    "Hello " +
      userInputName +
      ", I am happy to hear from you and I will reach out when I get the chance!"
  );
}

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validateForm() === false) {
    return;
  }
  sendMessageToUser();
  document.getElementById("count").innerText = 0;

  messageForm.reset();
});

formMessage.addEventListener("input", checkWordCount);

function checkWordCount() {
  let resultStr = formMessage.value;
  document.getElementById("count").innerText = resultStr.length;
}

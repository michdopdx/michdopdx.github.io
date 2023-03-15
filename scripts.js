// Used https://www.w3schools.com/js/js_validation.asp as inspiration to validate forms
// Used https://www.geeksforgeeks.org/how-to-make-a-word-count-in-textarea-using-javascript/ for letter counter in text area
// Used https://eloquentjavascript.net/2nd_edition/18_forms.html#p_G8aitsjxoL & https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements for form elements

let messageForm = document.getElementById("form");
let formMessage = document.getElementById("messageArea");

function validateForm() {
  if (messageForm.elements.name.value === "") {
    alert(
      "Name is required. Make sure you enter your name or I won't know who I'm talking to!"
    );
    return false;
  } else if (messageForm.elements.email.value === "") {
    alert(
      "Email is required. Make sure you leave your email so I can reach out!"
    );
    return false;
  } else if (messageForm.elements.userMessage.value === "") {
    alert(
      "Missing text from comment section. Please make sure to leave a comment"
    );
    return false;
  }
  return true;
}

function sendMessageToUser() {
  const userInputName = messageForm.elements.name.value;
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

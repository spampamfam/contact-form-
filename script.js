const container = document.querySelector(".co");
const messageContainer = document.getElementById("messageContainer");

const firstNameInput = document.getElementById("first-name");
const firstNameText = document.getElementById("first-name-error");

const lastNameInput = document.getElementById("last-name");
const lastNameText = document.getElementById("last-name-error");

const emailInput = document.getElementById("email");
const emailText = document.getElementById("email-error");

const queryInput = document.querySelectorAll("input[name='query-type']");
const queryContainer = document.getElementById("option__container");
const queryText = document.getElementById("query-error");

const messageInput = document.getElementById("message");
const messageText = document.getElementById("textarea-error");

const subscribeInput = document.getElementById("subscribe");
const subscribeText = document.getElementById("subscribe-error");

const mesg = [
  {
    id: 0,
    msg: "This field is required",
  },
  {
    id: 1,
    msg: "Please enter a valid email address",
  },
  {
    id: 2,
    msg: "Please select a query type",
  },
  {
    id: 3,
    msg: "To submit this form, please consent to being contacted",
  },
];

const configBuild = [
  { element: firstNameInput, errorEl: firstNameText, rule: "text" },
  { element: lastNameInput, errorEl: lastNameText, rule: "text" },
  { element: emailInput, errorEl: emailText, rule: "email" },
  { element: queryInput, errorEl: queryText, rule: "radio" },
  { element: messageInput, errorEl: messageText, rule: "text" },
  { element: subscribeInput, errorEl: subscribeText, rule: "checkbox" },
];

let formIsValid = [];

const regex = /^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,63}$/;

const showError = (x, y, z) => {
  y.textContent = `${mesg[z].msg}`;
  y.classList.toggle("hidden", false);
  x.classList.toggle("red__border", true);
};

const hideError = (x, y) => {
  y.textContent = ``;
  y.classList.toggle("hidden", true);
  x.classList.toggle("red__border", false);
};

const indexNumber = (input) => {
  let index;
  if (
    input.type.toUpperCase() === "TEXT" ||
    input.tagName.toUpperCase() === "TEXTAREA"
  ) {
    index = 0;
  } else if (input.type.toUpperCase() === "EMAIL") {
    index = 0;
  } else if (input.type.toUpperCase() === "RADIO") {
    index = 2;
  } else if (input.type.toUpperCase() === "CHECKBOX") {
    index = 3;
  }
  return index;
};

const isEmpty = (input) => input.value === "";

container.addEventListener("submit", (e) => {
  e.preventDefault();
  // validator prototype for names
  formIsValid = [];
  configBuild.forEach((item) => {
    if (item.rule === "text") {
      if (isEmpty(item.element)) {
        showError(item.element, item.errorEl, indexNumber(item.element));
        formIsValid.push(false);
      } else {
        hideError(item.element, item.errorEl);
        formIsValid.push(true);
      }
    } else if (item.rule === "email") {
      if (isEmpty(item.element)) {
        showError(item.element, item.errorEl, indexNumber(item.element));
        formIsValid.push(false);
      } else if (!regex.test(item.element.value)) {
        showError(item.element, item.errorEl, 1); //used 1 cause now its a regex problem
        formIsValid.push(false);
      } else {
        hideError(item.element, item.errorEl);
        formIsValid.push(true);
      }
    } else if (item.rule === "radio") {
      const radioArr = Array.from(item.element);
      const isChecked = radioArr.some((radio) => radio.checked);
      if (!isChecked) {
        showError(queryContainer, item.errorEl, 2);
        formIsValid.push(false);
      } else {
        hideError(queryContainer, item.errorEl);
        formIsValid.push(true);
      }
    } else if (item.rule === "checkbox") {
      if (!item.element.checked) {
        showError(item.element, item.errorEl, indexNumber(item.element));
        formIsValid.push(false);
      } else {
        hideError(item.element, item.errorEl);
        formIsValid.push(true);
      }
    }
  });

  // final checker
  if (formIsValid.every((v) => v === true)) {
    let formData = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
      queryType: Array.from(queryInput).find((radio) => radio.checked)?.value,
      message: messageInput.value,
      subscribed: subscribeInput.checked,
    };
    localStorage.setItem("value", JSON.stringify(formData));
    messageContainer.classList.toggle("hidden", false);

    requestAnimationFrame(() => {
      messageContainer.classList.add("move");
    });
  } else {
  }
});

function updatePage(document) {
  const forms = document.querySelectorAll("#info form");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // prevent page refresh

      const button = form.querySelector("button[type='submit']");
      const targetId = button.dataset.target;

      // select the <span> inside the element with that id
      const valueSpan = document.querySelector(`#${targetId} .value`);

      const input = form.querySelector("input");
      valueSpan.textContent = input.value;

      // Optional: clear the input after update
      input.value = "";
    });
  });
}

// Initialize the updatePage function
updatePage(document);

// Optional: auto-fill with example inputs
const exampleInputs = [
  { id: "name-input", value: "Adventure Backpack" },
  { id: "description-input", value: "A durable backpack for outdoor adventures" },
  { id: "color-input", value: "Green" },
  { id: "volume-input", value: "35L" },
];

exampleInputs.forEach(item => {
  const inputField = document.getElementById(item.id);
  const form = inputField.closest("form");
  inputField.value = item.value;
  form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
});
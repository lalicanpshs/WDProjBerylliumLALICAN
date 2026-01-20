document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("visitorName");
  const form = document.getElementById("messageForm");
  const greeting = document.getElementById("greeting");

  const savedName = localStorage.getItem("visitorName");
  if (savedName && greeting) {
    greeting.textContent = `Welcome, $(savedName)!`;
  }

  if (form) {
    form.addEventListener("submit", () => {
      if (nameInput.value.trim() !== "") {
        localStorage.setItem("visitorName", nameInput.value.trim());
      }
    });
  }
});

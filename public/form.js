/* Used in all html files.

CREATE: Saves user's name and message
READ: Displays saved name and message
UPDATE: Allows user to update name and message
DELETE: Clears stored data from localStorage */

document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("visitorName");
  const messageInput = document.getElementById("visitorMessage");
  const form = document.getElementById("messageForm");
  const greeting = document.getElementById("greeting");
  const status = document.getElementById("formStatus");

  const updateBtn = document.getElementById("updateData");
  const clearBtn = document.getElementById("clearSaved");

  const savedName = localStorage.getItem("visitorName");
  const savedMessage = localStorage.getItem("visitorMessage");
  if (savedName && greeting) {
    greeting.textContent = `Welcome, ${savedName}!`;
  }

  if (savedMessage && status) {
    status.textContent = `Last message: ${savedMessage}!`;
  }

  if (form) {
    form.addEventListener("submit", () => {
      if (nameInput.value.trim() !== "") {
        localStorage.setItem("visitorName", nameInput.value.trim());
      }
      if (messageInput.value.trim() !== "") {
        localStorage.setItem("visitorMessage", messageInput.value.trim());
      }

      if (status) {
        status.textContent = "Your message has been saved.";
      }
    });
  }

  
  if (updateBtn) {
    updateBtn.addEventListener("click", () => {
    if (nameInput.value.trim() !== "") {
      localStorage.setItem("visitorName", nameInput.value.trim());
    }

    if (messageInput.value.trim() !== "") {
      localStorage.setItem("visitorMessage", messageInput.value.trim());
    }

    if (status) {
      status.textContent = "Data updated successfully!";
    }
  });
}

  if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    localStorage.removeItem("visitorName");
    localStorage.removeItem("visitorMessage");

  if (greeting) greeting.textContent= "";
  if (status) status.textContent="Your message has been cleared.";

  if (nameInput) nameInput.value= "";
  if (messageInput) messageInput.value= "";
  });
  }

});

function showScoreGreeting(score) {
  const name = localStorage.getItem("visitorName");
  const greeting = document.getElementById("scoreGreeting");

  if (name && greeting) {
    greeting.textContent = `Good job, ${name}.`;
  }
}

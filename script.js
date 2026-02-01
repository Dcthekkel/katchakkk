const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const buttons = document.getElementById("buttons");
const result = document.getElementById("result");
const text = document.getElementById("text");
const finalMessage = document.getElementById("finalMessage");
const question = document.getElementById("question");

// Move NO button
function moveNo() {
  const x = Math.random() * 220;
  const y = Math.random() * 45;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("click", moveNo);

// YES button
yesBtn.addEventListener("click", () => {
  buttons.style.display = "none";
  text.style.display = "none";
  question.style.display = "none";
  result.classList.remove("hidden");

  // ✅ two lines using <br>
  finalMessage.innerHTML =
    "You've got yourselves a date.<br>Hritika, thank you for being my Valentine 💗";
});

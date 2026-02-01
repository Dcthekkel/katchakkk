document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const buttons = document.getElementById("buttons");
  const result = document.getElementById("result");
  const text = document.getElementById("text");
  const finalMessage = document.getElementById("finalMessage");
  const question = document.getElementById("question");

  // Safety check (prevents "frozen" if something is missing)
  if (!yesBtn || !noBtn || !buttons || !result || !text || !finalMessage || !question) return;

  let yeeScale = 1; // starts normal size

  function makeYeeBigger() {
    // grows a bit each time, with a max so it doesn't get ridiculous
    yeeScale = Math.min(yeeScale + 0.08, 2.2);
    yesBtn.style.transform = `scale(${yeeScale})`;
  }

  function shakeNey() {
    // retrigger animation every time
    noBtn.classList.remove("shake");
    // force reflow so animation restarts
    void noBtn.offsetWidth;
    noBtn.classList.add("shake");
  }

  function moveNo() {
    const x = Math.random() * 220;
    const y = Math.random() * 45;
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    makeYeeBigger();
    shakeNey();
  }

  noBtn.addEventListener("mouseenter", moveNo);
  noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveNo();
  });

  yesBtn.addEventListener("click", () => {
    buttons.style.display = "none";
    text.style.display = "none";
    question.style.display = "none";
    result.classList.remove("hidden");

    finalMessage.innerHTML =
      "You've got yourselves a date.<br>Hritika, thank you for being my Valentine 💗";
  });
});

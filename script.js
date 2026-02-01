document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const buttons = document.getElementById("buttons");
  const text = document.getElementById("text");
  const question = document.getElementById("question");
  const backBtn = document.getElementById("backBtn");

  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");

  let yeeScale = 1;

  function makeYeeBigger() {
    yeeScale = Math.min(yeeScale + 0.08, 2.2);
    yesBtn.style.transform = `scale(${yeeScale})`;
  }

  function shakeNey() {
    noBtn.classList.remove("shake");
    void noBtn.offsetWidth; // force reflow so animation restarts
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
    // switch pages with fade
    page1.classList.remove("active");
    page2.classList.add("active");
  });

  backBtn.addEventListener("click", () => {
    // reset growth
    yeeScale = 1;
    yesBtn.style.transform = "scale(1)";

    // reset Ney position
    noBtn.style.left = "";
    noBtn.style.top = "";

    page2.classList.remove("active");
    page1.classList.add("active");
  });
});

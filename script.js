function showLetters() {
  document.getElementById("letters").classList.remove("hidden");
}

function openLetter(num) {
  const letters = {
    1: "Month 1 — write your heart here…",
    2: "Month 2 — write something sweet…",
    3: "Month 3 — maybe a memory…",
    4: "Month 4 — tell him how you felt…",
    5: "Month 5 — a soft confession…",
    6: "Month 6 — your big love letter…"
  };

  document.getElementById("letterText").innerText = letters[num];
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

// hello modal =====================================================
alert("Hallo Welt!");

// square root =====================================================

const SQRT_PHRASE = document.getElementById("Sqrt-Phrase");
const SQRT_ORIGIN = document.getElementById("Sqrt-Origin");
const SQRT_RESULT = document.getElementById("Sqrt-Result");
const SQRT_FAILED = document.getElementById("Sqrt-Failed");

let sqrt_o = prompt("Welche Quadratwurzel möchtest du berechnen?");
if (sqrt_o !== null && sqrt_o.trim() !== "") {
  let sqrt_r = Math.sqrt(Number(sqrt_o));

  if (!Number.isNaN(sqrt_r)) {
    SQRT_ORIGIN.textContent = sqrt_o;
    SQRT_RESULT.textContent = sqrt_r;
    SQRT_PHRASE.style.display = "block";
  } else {
    SQRT_FAILED.style.display = "block";
  }
}

// dropping time

const DROPPING_PHRASE = document.getElementById("Dropping-Phrase");
const DROPPING_HEIGHT = document.getElementById("Dropping-Height");
const DROPPING_TIME = document.getElementById("Dropping-Time");
const DROPPING_FAILED = document.getElementById("Dropping-Failed");

let dropping_speed = 9.81;
let dropping_height = prompt(
  "Berechnung der Falldauer auf der Erde (im Vakuum): ",
  "Gib die Fallhöhe in Metern ein...",
);

if (dropping_height !== null && dropping_height.trim() !== "") {
  let dropping_time = Math.sqrt((2 * dropping_height) / dropping_speed);

  if (!Number.isNaN(dropping_time)) {
    DROPPING_HEIGHT.textContent = dropping_height;
    DROPPING_TIME.textContent = dropping_time;
    DROPPING_PHRASE.style.display = "block";
  } else {
    DROPPING_FAILED_FAILED.style.display = "block";
  }
}

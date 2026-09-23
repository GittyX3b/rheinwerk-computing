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

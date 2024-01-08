const star1 = document.querySelector(".star1");
const star2 = document.querySelector(".star2");
const star3 = document.querySelector(".star3");
const star4 = document.querySelector(".star4");
const star5 = document.querySelector(".star5");
const submit = document.querySelector(".submit");
const exit = document.querySelector(".exit");
const card = document.querySelector(".card");
const result = document.querySelector(".result");
const finalrate = document.querySelector(".finalrate");
let rate = 0;

star1.addEventListener("click", () => {
  rate = 1;
  star1.style.color = "yellow";
});
star2.addEventListener("click", () => {
  rate = 2;
  star1.style.color = "yellow";
  star2.style.color = "yellow";
});
star3.addEventListener("click", () => {
  rate = 3;
  star1.style.color = "yellow";
  star2.style.color = "yellow";
  star3.style.color = "yellow";
});
star4.addEventListener("click", () => {
  rate = 4;
  star1.style.color = "yellow";
  star2.style.color = "yellow";
  star3.style.color = "yellow";
  star4.style.color = "yellow";
});
star5.addEventListener("click", () => {
  rate = 5;
  star1.style.color = "yellow";
  star2.style.color = "yellow";
  star3.style.color = "yellow";
  star4.style.color = "yellow";
  star5.style.color = "yellow";
});

exit.addEventListener("click", () => {
  result.style.display = "none";
  card.style.display = "block";
  star1.style.color = "";
  star2.style.color = "";
  star3.style.color = "";
  star4.style.color = "";
  star5.style.color = "";
});

submit.addEventListener("click", () => {
  if (rate <= 0) {
    alert("Please select Reating");
  } else {
    finalrate.innerHTML = `Your Reating: ${rate}`;
    card.style.display = "none";
    result.style.display = "block";
  }
});

const profile = document.querySelector(".profile");
const socials = document.querySelector(".socials");
const cta = document.querySelector(".cta");
const arrow = document.querySelector(".arrow");

arrow.addEventListener("click", (e) => {
  cta.classList.toggle("bg-dark");
  socials.classList.remove("disabled");
  socials.classList.add("enabled");
  profile.classList.remove("enabled");
  profile.classList.add("disabled");
});

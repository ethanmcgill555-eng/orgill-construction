function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const msg = document.getElementById("formMessage");
  msg.textContent = "Got it — we’ll reach out soon.";
  msg.style.color = "#e65c00";

  this.reset();
});

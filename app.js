const faqs = document.querySelectorAll(".faqq");

faqs.forEach((faqq) => {
  faqq.addEventListener("click", () => {
    faqq.classList.toggle("active");
  });
});

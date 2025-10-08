// Navigation
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("visible");
});

// FAQs

const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((faqItem) => {
  const question = faqItem.querySelector(".faq__item--title-row");
  const answer = faqItem.querySelector(".faq__item--answer");
  question.addEventListener("click", () => {
    answer.classList.toggle("visible");
  });
});

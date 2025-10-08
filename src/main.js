console.log("JAVASCRIPT!");

// FAQs

const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((faqItem) => {
  const question = faqItem.querySelector(".faq__item--title-row");
  const answer = faqItem.querySelector(".faq__item--answer");
  question.addEventListener("click", () => {
    answer.classList.toggle("visible");
  });
});

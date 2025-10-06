console.log("JAVASCRIPT!");

// FAQs

const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((faqItem) => {
  const chevron = faqItem.querySelector(".faq__item--title-row .chevron");
  const answer = faqItem.querySelector(".faq__item--answer");
  chevron.addEventListener("click", () => {
    answer.classList.toggle("visible");
  });
});

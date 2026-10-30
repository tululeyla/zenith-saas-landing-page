const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{
  if(window.scrollY > 50){
   header.classList.add("scrolled");
  }
  else{
    header.classList.remove("scrolled");
  }
})

const faqItem = document.querySelectorAll(".faq-item");
const faqQuestion = document.querySelectorAll(".faq-question");


faqQuestion.forEach((question)=>{
  question.addEventListener("click",()=>{
   const faq = question.parentElement;
   const isOpen = faq.classList.contains("active");
    faqItem.forEach((item)=>{
       item.classList.remove("active");
    })
    
    if(!isOpen){
      faq.classList.add("active");
    }
  })
})

const billingToggle = document.getElementById("billingToggle");
const amounts = document.querySelectorAll(".amount");
const periods = document.querySelectorAll(".period");

billingToggle.addEventListener("change", () => {
  const isAnnual = billingToggle.checked;

  amounts.forEach((amount) => {
    if (isAnnual) {
      amount.textContent = amount.dataset.annual;
    } else {
      amount.textContent = amount.dataset.monthly;
    }
  });

  periods.forEach((period) => {
    period.textContent = isAnnual ? " /year" : " /month";
  });
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when a navigation link is clicked
document.querySelectorAll(".nav-bar a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
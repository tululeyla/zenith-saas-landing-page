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
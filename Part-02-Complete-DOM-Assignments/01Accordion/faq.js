const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector('.accordian_body');
console.log(accordianBody);
const faqs = [];
createFaq();
function showFaq(evt) {
  if(evt.target.innerText == "+"){
    evt.target.innerText = "x";
    evt.target.parentElement.parentElement.children[1].style.display = "block";
    console.log(evt.target.parentElement.parentElement.children[1]);
  }else if(evt.target.innerText == "x"){
    evt.target.innerText = "+";
    evt.target.parentElement.parentElement.children[1].style.display = "none";
    console.log(evt.target.parentElement.parentElement.children[1]);
  }
}

function createFaq() {

  for(let faq of faqData){

    let faqDiv = document.createElement('div');
    faqDiv.classList.add("faq");
    let faqHeadDiv = document.createElement('div');
    faqHeadDiv.classList.add("faq_header");
    let faqHead = document.createElement('h3');
    faqHead.innerText = faq.question;
    let accordian = document.createElement('h3');
    accordian.innerText = "+";
    accordian.classList.add("show_btn");
    accordian.style.textAlign = "center";
    let faqContent = document.createElement('p');
    faqContent.innerText = faq.answer;
    faqContent.classList.add('hidden');

    faqHeadDiv.append(faqHead);
    faqHeadDiv.append(accordian);
    faqDiv.append(faqHeadDiv);
    faqDiv.append(faqContent);

    accordian.addEventListener("click",showFaq);
    accordian.addEventListener("click",btnStatusUpdate);

    accordianBody.append(faqDiv);

  }

}

function btnStatusUpdate(evt) {

}



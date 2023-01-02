var typed = new Typed('#typing', {
  strings: ['Organized by the Students of KRMU', 'In collaboration with KEIC Cell', 'In collaboration with IIT Delhi'],
  smartBackspace: true, // Default value
  typeSpeed: 60,
  backSpeed: 60,
  loop: true,
});

window.addEventListener(
  'scroll',
  function () {
    var navbar = document.getElementById("nav");
    var logo = document.getElementById("logo");
    navbar.classList.toggle('sticky', window.scrollY > 0);
    logo.classList.toggle('img-logo', window.scrollY > 0);

  },
)


let questions = document.querySelectorAll(".faq__question");
questions.forEach((question) => {
  question.addEventListener("click", function () {
    question.classList.toggle("faq__question_active");
    const nextElement = question.nextElementSibling;
    nextElement.classList.toggle("faq__panel_active");
  });
});

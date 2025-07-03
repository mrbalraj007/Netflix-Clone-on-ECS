document.addEventListener('DOMContentLoaded', function() {
  // FAQ functionality
  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');

    question.addEventListener('click', () => {
      // Close other FAQ items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current item
      item.classList.toggle('active');
    });
  });

  // Email form functionality
  const emailInputs = document.querySelectorAll('.email__input');
  const getStartedButtons = document.querySelectorAll('.primary__button');

  getStartedButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const emailInput = button.parentElement.querySelector('.email__input');
      const email = emailInput ? emailInput.value : '';

      if (email && isValidEmail(email)) {
        alert(`Thank you for your interest! We'll contact you at ${email}`);
        emailInput.value = '';
      } else {
        alert('Please enter a valid email address');
      }
    });
  });

  // Email validation function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
      navbar.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)';
    }
  });
});

// Accordion functionality
let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

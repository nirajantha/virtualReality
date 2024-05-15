/*---Menu bar---*/
let menuBar = document.querySelector('#menu-icon');
// let nav = document.querySelector('.nav');
let navbar = document.querySelector('.navbar');
let body = document.querySelector(`body`)
menuBar.onclick = ()=>{
   
   menuBar.classList.toggle('fa-xmark');
   navbar.classList.toggle('active');
}

/*---dropdown--*/

// JavaScript to show the dropdown content
function showDropdown() {
   let dropdownContent = document.querySelector("#myDropdown");
   dropdownContent.style.display = "flex";
 }
 
 // JavaScript to hide the dropdown content
 function hideDropdown() {
   let dropdownContent = document.querySelector("#myDropdown");
   dropdownContent.style.display = "none";
 }


 document.addEventListener('mouseover', function (event) {
  // Check if the mouse is not over the button and not over the dropdown container or its children
  if (
    !event.target.matches('#dropdown-button') &&
    !event.target.matches('.dropdown-content')
  ) {
    hideDropdown();
  }
});


let currentIndex = 0;
let slides = document.querySelectorAll('.slide');

slides.forEach((slide,index)=>{
 slide.style.left = `${index*100}%`;
})

const goPrev = () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  carouselSlide();
};

const goNext = () => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  carouselSlide();
};


const carouselSlide = () => {
  slides.forEach((slide, index) => {
    // Adjust the translation based on the backward loop
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
};


document.addEventListener('DOMContentLoaded', function() {
  const whyChooseUs = document.querySelectorAll('.whyChooseUs');
  const featuresContent = document.querySelectorAll('.features-content');
  const expHeading = document.querySelectorAll('.heading');
  const expNote = document.querySelectorAll('.experience-note')
  const expImgDiv = document.querySelectorAll('.exp-img-div');
  const expState = document.querySelectorAll('.experience-state')
  const expMainImg = document.querySelectorAll('.main-img-div');

  // service section
  const serviceContainer = document.querySelectorAll('.service-container');
  const serviceSwiper = document.querySelectorAll('.expSwiper');

  //testimonial section
  const testSwiper = document.querySelectorAll('.testSwiper');

  //news
  const newsContainer = document.querySelectorAll('.news-content-container');


  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.5 }); // Adjust the threshold as needed

  whyChooseUs.forEach(section => {
    observer.observe(section);
  });

  featuresContent.forEach(section => {
    observer.observe(section);
  });

  expHeading.forEach(section => {
    observer.observe(section);
  });
  expNote.forEach(section => {
    observer.observe(section);
  });
  expImgDiv.forEach(section => {
    observer.observe(section);
  });
  expState.forEach(section => {
    observer.observe(section);
  });
  expMainImg.forEach(section => {
    observer.observe(section);
  });
  serviceContainer.forEach(section => {
    observer.observe(section);
  });
  serviceSwiper.forEach(section => {
    observer.observe(section);
  });
  testSwiper.forEach(section => {
    observer.observe(section);
  });
  newsContainer.forEach(section => {
    observer.observe(section);
  });
});




    








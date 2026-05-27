/* =========================
   PRK COMPUTER CENTER
   PREMIUM SCRIPT.JS
========================= */


/* =========================
   STICKY HEADER EFFECT
========================= */

window.addEventListener("scroll", function () {

  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.background = "#00142e";
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
  } else {
    header.style.background = "transparent";
    header.style.boxShadow = "none";
  }

});


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){

  menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

  });

}


/* =========================
   SCROLL ANIMATION
========================= */

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", revealCards);

function revealCards() {

  const triggerBottom = window.innerHeight / 1.2;

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }

  });

}

cards.forEach(card => {

  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.6s ease";

});


/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  counter.innerText = "0";

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = target / 100;

    if (count < target) {

      counter.innerText = `${Math.ceil(count + increment)}`;

      setTimeout(updateCounter, 20);

    } else {

      counter.innerText = target;

    }

  };

  updateCounter();

});


/* =========================
   TYPING EFFECT
========================= */

const typingText = document.querySelector(".typing-text");

if (typingText) {

  const textArray = [
    "Government Services",
    "Online Form Filling",
    "Computer Courses",
    "CSC Services",
    "Digital Solutions"
  ];

  let textIndex = 0;
  let charIndex = 0;

  function typeEffect() {

    if (charIndex < textArray[textIndex].length) {

      typingText.textContent += textArray[textIndex].charAt(charIndex);

      charIndex++;

      setTimeout(typeEffect, 100);

    } else {

      setTimeout(eraseEffect, 2000);

    }

  }

  function eraseEffect() {

    if (charIndex > 0) {

      typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);

      charIndex--;

      setTimeout(eraseEffect, 50);

    } else {

      textIndex++;

      if (textIndex >= textArray.length) {
        textIndex = 0;
      }

      setTimeout(typeEffect, 500);

    }

  }

  typeEffect();

}


/* =========================
   BUTTON RIPPLE EFFECT
========================= */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

  button.addEventListener("click", function (e) {

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripple = document.createElement("span");

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    ripple.classList.add("ripple");

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

  });

});


/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  if(loader){

    loader.style.opacity = "0";

    setTimeout(() => {

      loader.style.display = "none";

    }, 500);

  }

});


/* =========================
   BACK TO TOP BUTTON
========================= */

const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){

    if(topBtn){
      topBtn.style.display = "flex";
    }

  } else {

    if(topBtn){
      topBtn.style.display = "none";
    }

  }

});


if(topBtn){

  topBtn.addEventListener("click", () => {

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });

  });

}


/* =========================
   ACTIVE NAV LINK
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {

      link.classList.add("active");

    }

  });

});


/* =========================
   IMAGE HOVER ZOOM
========================= */

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(img => {

  img.addEventListener("mouseover", () => {

    img.style.transform = "scale(1.08)";
    img.style.transition = "0.5s";

  });

  img.addEventListener("mouseout", () => {

    img.style.transform = "scale(1)";

  });

});


/* =========================
   NOTIFICATION POPUP
========================= */

setTimeout(() => {

  const notification = document.createElement("div");

  notification.innerHTML = `
  
    <div style="
      position:fixed;
      bottom:20px;
      left:20px;
      background:#0077ff;
      color:white;
      padding:18px 25px;
      border-radius:15px;
      box-shadow:0 10px 25px rgba(0,0,0,0.2);
      z-index:9999;
      font-weight:600;
    ">
      🎉 Welcome to PRK Computer Center
    </div>

  `;

  document.body.appendChild(notification);

  setTimeout(() => {

    notification.remove();

  }, 5000);

}, 2000);
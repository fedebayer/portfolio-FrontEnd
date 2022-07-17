"use strict";

const intro = document.querySelector('.intro');

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    intro.style.left = '-200vh';
  }, 50)
})


const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fades');
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}


window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.reveal');
  const revealpoint = 150;

  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }

  let sectionPos = skillsSection.getBoundingClientRect().top;
  let screenPos = window.innerHeight / 2;

  if (sectionPos < screenPos) {
    showProgress();
  } else {
    hideProgress();
  }
});


const skillsSection = document.getElementById('skillset');
const progressBars = document.querySelectorAll('.progresss-bar');

function showProgress() {
  progressBars.forEach(progressBar => {
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
}

function hideProgress() {
  progressBars.forEach(progressBar => {
    progressBar.style.opacity = 0;
    progressBar.style.width = 0;
  });
}

let login_btn = document.querySelector('.btn-log');
let login = document.getElementById('login');
let nm = 1;
login_btn.addEventListener('click', () => {
  if (nm == 1) {
    login.style.display = 'block';
    nm--;
  } else {
    login.style.display = 'none';
    nm++;
  }
})
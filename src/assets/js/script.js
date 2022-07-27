"use strict";

window.addEventListener('DOMContentLoaded', () => {
  /*
====================
*Intro
====================
*/
  const intro = document.querySelector('.intro');
  setTimeout(() => {
    intro.style.left = '-200vh';
  }, 50)

  /*
  ====================
  *Title color change
  ====================
  */

  setTimeout(() => {
    const text = document.querySelector(".fancy");
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent = "";

    for (let i = 0; i < splitText.length; i++) {
      text.innerHTML += "<span>" + splitText[i] + "</span>";
      if (i == 8) {
        text.innerHTML += "<p style='min-width:2%'></p>"
      }
    }

    let char = 0;
    let timer = setInterval(onTick, 70);

    function onTick() {
      let span = text.querySelectorAll('span')[char];
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

  }, 150)



  /*
  ====================
  *Scroll animations
  ====================
  */

  window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    const revealPoint = 150;

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      }
    }

    let sectionPos = skillsSection.getBoundingClientRect().top;
    let screenPos = window.innerHeight / 2;

    if (sectionPos < screenPos) {
      showProgress();
    }
  });

  /*
====================
*Progress bar animations
====================
*/

  const skillsSection = document.getElementById('skillset');


  function showProgress() {
    const progressBars = document.querySelectorAll('.progresss-bar');
    progressBars.forEach(progressBar => {
      const value = progressBar.firstChild.className;
      progressBar.style.opacity = 1;
      progressBar.style.width = `${value}%`;
    });
  }


  /*
  ====================
  *Contact form
  ====================
  */

  const form = document.querySelector(".contact-form")
  const loader = document.querySelector(".contact-form-loader")
  const response = document.querySelector(".contact-form-response")

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    loader.style.display = "block";
    fetch("https://formsubmit.co/ajax/612683528c50e7ff7f7dfb4d590c17f2", {
      method: "POST",
      body: new FormData(e.target)
    }).then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then(json => {
        location.hash = "#thanks"
        form.reset()
      }).catch(err => {
        let message = err.statusText || "Error trying to send message, please try again"
        response.querySelector("h3").innerHTML = `Error${err.status}:${message}`
      }).finally(() => {
        loader.style.display = "none"
        setTimeout(() => {
          location.hash = "#close"
        }, 3000)
      })
  })


  /*
  ====================
  *Modals
  ====================
  */

  function updateTextInput(val) {
    document.getElementById("range-bar-value").value = val;
  }

  function updateTextInputEdit(val) {
    document.getElementById("range-bar-value-edit").value = val;
  }
}
)





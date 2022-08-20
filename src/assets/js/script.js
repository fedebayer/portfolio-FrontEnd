"use strict";

window.addEventListener("DOMContentLoaded", () => {
  /*
====================
*Intro
====================
*/
  const intro = document.querySelector(".intro");
  setTimeout(() => {
    intro.style.left = "-200vh";
  }, 50);

  //this if is for cancel the javascript when the page is not on the portfolio like on login (not having the intro)
  if (document.querySelector(".experience") != null) {
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
          text.innerHTML += "<p style='min-width:2%'></p>";
        }
      }

      let char = 0;
      let timer = setInterval(onTick, 70);

      function onTick() {
        let span = text.querySelectorAll("span")[char];
        span.classList.add("fades");
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
    }, 700);

    /*
    ====================
    *Scroll animations
    ====================
    */
    let showedProgress = false;

    window.addEventListener("scroll", () => {
      const reveals = document.querySelectorAll(".reveal");
      const revealPoint = 150;

      for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add("active");
        }
      }

      let sectionPos = skillsSection.getBoundingClientRect().top;
      let screenPos = window.innerHeight / 2;

      if (sectionPos < screenPos && !showedProgress) {
        showProgress();
        showed = true;
      }
    });

    /*
  ====================
  *Progress bar animations
  ====================
  */

    const skillsSection = document.getElementById("skillset");

    function showProgress() {
      const progressBars = document.querySelectorAll(".progresss-bar");
      progressBars.forEach((progressBar) => {
        const value = progressBar.firstChild.value;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
      });
    }

    //functions to recharge the progress bars after an update
    setTimeout(() => {
      const skillBtns = document.querySelectorAll(".skill-btn");
      for (var i = 0; i < skillBtns.length; i++) {
        skillBtns[i].addEventListener("click", () => {
          setTimeout(() => {
            let formRangeEdit = document.querySelectorAll(".form-range-edit");
            for (var i = 0; i < formRangeEdit.length; i++) {
              formRangeEdit[i].addEventListener("change", () => {
                document.getElementById("range-bar-value-edit").value =
                  formRangeEdit[0].value;
              });
            }
            let formRangeLanguageEdit = document.querySelectorAll(
              ".form-range-language-edit"
            );
            for (var i = 0; i < formRangeLanguageEdit.length; i++) {
              formRangeLanguageEdit[i].addEventListener("change", () => {
                document.getElementById("range-bar-value-language-edit").value =
                  formRangeLanguageEdit[0].value;
              });
            }
            let changeSkillBtns = document.querySelectorAll(".changeSkillBtn");
            for (var i = 0; i < changeSkillBtns.length; i++) {
              changeSkillBtns[i].addEventListener("click", () => {
                setTimeout(() => {
                  showProgress();
                }, 50);
              });
            }
          }, 1000);
        });
      }
    }, 1000);

    /*
    ====================
    *Contact form
    ====================
    */

    setTimeout(() => {
      const form = document.querySelector(".contact-form");
      const loader = document.querySelector(".contact-form-loader");
      const response = document.querySelector(".contact-form-response");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        loader.style.display = "block";
        fetch("https://formsubmit.co/ajax/612683528c50e7ff7f7dfb4d590c17f2", {
          method: "POST",
          body: new FormData(e.target),
        })
          .then((res) => (res.ok ? res.json() : Promise.reject(res)))
          .then((json) => {
            location.hash = "#thanks";
            form.reset();
          })
          .catch((err) => {
            let message =
              err.statusText ||
              "Error trying to send message, please try again";
            response.querySelector(
              "h3"
            ).innerHTML = `Error${err.status}:${message}`;
          })
          .finally(() => {
            loader.style.display = "none";
            setTimeout(() => {
              location.hash = "#close";
            }, 3000);
          });
      });
    }, 1000);

    /*
    ====================
    *Modals
    ====================
    */

    const formRange = document.querySelector(".form-range");
    formRange.addEventListener("change", () => {
      document.getElementById("range-bar-value").value = formRange.value;
    });

    const formRangeL = document.querySelector(".language-range");
    formRangeL.addEventListener("change", () => {
      document.getElementById("range-language-bar-value").value =
        formRangeL.value;
    });
  }
});

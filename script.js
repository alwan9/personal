

// navbar
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});


// ==========================================================================
// ==========================================================================
// ==========================================================================
// ==========================================================================
// ==========================================================================
// ==========================================================================

function read1() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display === "none" || dots.style.display === "") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


// ==========================================================================
// ==========================================================================
// ==========================================================================
// ==========================================================================
// ==========================================================================
// ==========================================================================


function PT1() {
  let dots1 = document.getElementById("dots1");
  let moreText1 = document.getElementById("more1");
  let btnText1 = document.getElementById("myBtn1");

  if (dots1.style.display === "none" || dots1.style.display === "") {
    dots1.style.display = "inline";
    btnText1.innerHTML = "PT.JAVA MULTI MANDIRI (JVM) ˅";
    moreText1.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText1.innerHTML = "PT.JAVA MULTI MANDIRI (JVM) ˃";
    moreText1.style.display = "inline";
  }
}

function PT2() {
  let dots2 = document.getElementById("dots2");
  let moreText2 = document.getElementById("more2");
  let btnText2 = document.getElementById("myBtn2");

  if (dots2.style.display === "none" || dots2.style.display === "") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "PT.Charisma Cahaya Mulia (PT Arya) ˅ ";
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "PT.Charisma Cahaya Mulia (PT Arya) ˃ ";
    moreText2.style.display = "inline";
  }
}

function PT3() {
  let dots3 = document.getElementById("dots3");
  let moreText3 = document.getElementById("more3");
  let btnText3 = document.getElementById("myBtn3");

  if (dots3.style.display === "none" || dots3.style.display === "") {
    dots3.style.display = "inline";
    btnText3.innerHTML = "FREELANCE ˅ ";
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    btnText3.innerHTML = "FREELANCE ˃ ";
    moreText3.style.display = "inline";
  }
}





// ==========================================================================
// ==========================================================================
// ==========================================================================
// ==========================================================================
// ==========================================================================
// ==========================================================================

function sekolah1() {
  let Sdots1 = document.getElementById("Sdots1");
  let SmoreText1 = document.getElementById("Smore1");
  let SbtnText1 = document.getElementById("SmyBtn1");

  if (Sdots1.style.display === "none" || Sdots1.style.display === "") {
    Sdots1.style.display = "inline";
    SbtnText1.innerHTML = " SMP TELKOM PURWOKERTO ˅";
    SmoreText1.style.display = "none";
  } else {
    Sdots1.style.display = "none";
    SbtnText1.innerHTML = " SMP TELKOM PURWOKERTO ˃";
    SmoreText1.style.display = "inline";
  }
}
function sekolah2() {
  let Sdots2 = document.getElementById("Sdots2");
  let SmoreText2 = document.getElementById("Smore2");
  let SbtnText2 = document.getElementById("SmyBtn2");

  if (Sdots2.style.display === "none" || Sdots2.style.display === "") {
    Sdots2.style.display = "inline";
    SbtnText2.innerHTML = " SMKN 1 PURWOKERTO ˅";
    SmoreText2.style.display = "none";
  } else {
    Sdots2.style.display = "none";
    SbtnText2.innerHTML = " SMKN 1 PURWOKERTO ˃";
    SmoreText2.style.display = "inline";
  }
}

// ==========================================================================
// ==========================================================================
// ==========================================================================
// ==========================================================================
// ==========================================================================
// ==========================================================================// Ambil elemen-elemen dengan atribut data-lang
function changeLanguage() {
  var languageToggle = document.getElementById("languageToggle");
  var currentLanguage = languageToggle.innerHTML;

  var contentElements = document.querySelectorAll('.content');
  if (currentLanguage === "Indonesia") {
      languageToggle.innerHTML = "English";
      contentElements.forEach(function (element) {
          if (element.getAttribute('data-lang') === 'id') {
              element.style.display = 'none';
          } else if (element.getAttribute('data-lang') === 'en') {
              element.style.display = 'block';
          }
      });
  } else {
      languageToggle.innerHTML = "Indonesia";
      contentElements.forEach(function (element) {
          if (element.getAttribute('data-lang') === 'id') {
              element.style.display = 'block';
          } else if (element.getAttribute('data-lang') === 'en') {
              element.style.display = 'none';
          }
      });
  }
}
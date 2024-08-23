function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem-box", {
    strings: "Poem goes here...",
    autoStart: true,
    delay: 3,
    cursor: null,
  });
}

let poemFormButton = document.querySelector("#poem-generator-form");
poemFormButton.addEventListener("submit", generatePoem);

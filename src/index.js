function displayPoem(response) {
  new Typewriter("#poem-box", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let poemTopicInput = document.querySelector("#poem-topic-input");
  let apiKey = "58f3tbaa2acbfcb0981e0ecb4ba2453o";
  let context =
    "You are a powerful haka expert and love to write spiritual hakas about Māori culture and tradition in the Māori language. Your task is to generate a 4 line haka in basic HTML and separate each line with a <br /> in the Māori language. Do not include a title for the haka or the word HTML. Make sure to follow the user instruction.";
  let prompt = `User instruction: Generate a Māori haka about ${poemTopicInput.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormButton = document.querySelector("#poem-generator-form");
poemFormButton.addEventListener("submit", generatePoem);

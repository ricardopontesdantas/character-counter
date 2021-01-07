const textArea = document.getElementById("anyText");
const numberOfCharacters = document.getElementById("numberOfCharacters");

textArea.addEventListener("input", () => {
  numberOfCharacters.textContent = textArea.textLength;
});

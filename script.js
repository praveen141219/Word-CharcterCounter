const textbox = document.querySelector(".text");
const words = document.querySelector(".words");
const letters = document.querySelector(".letters");








textbox.addEventListener("input", () => {
  let text = textbox.value;
  let char = text.length;
  letters.textContent = char;
  text = text.trim();
  let word = text.split(" ");
  let cleanList = word.filter((elem) => {
    return elem != "";
  });

  words.textContent = cleanList.length;
});

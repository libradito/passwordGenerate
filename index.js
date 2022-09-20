const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const removedNumbers = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const generatePw = document.getElementById("pw-btn");
const passwordOne = document.getElementById("pwOne");
const passwordTwo = document.getElementById("pwTwo");
const passwordLength = document.getElementById("length");
const withSymbols = document.getElementById("symbols");
const withNumbers = document.getElementById("numbers");
const clipboardOne = document.getElementById("clip");
const clipboardTwo = document.getElementById("clipTwo");
const toggle = document.getElementById("theme");
const page = document.querySelector("body");
const noSymbols = characters;

const removedSymbols = noSymbols.slice(start, 61);

const noneChecked = characters;
const noChecked = noneChecked.slice(start, 52);

let pwLength = 0;

let passOne = "";
let passTwo = "";

function start() {
  pwLength = passwordLength.value;
  let randomPw = [];
  let randomTwo = [];
  generateRandom(randomPw);
  generateRandom(randomTwo);

  passOne = randomPw.join("");
  passTwo = randomTwo.join("");
  passwordOne.textContent = randomPw.join("");
  passwordTwo.textContent = randomTwo.join("");

  console.log(randomPw);
  console.log(randomTwo);
}

generatePw.addEventListener("click", start, false);

function copy() {
  let copyText = passOne;
  navigator.clipboard.writeText(copyText);
  alert("Copied the text: " + copyText);
}
function copyTwo() {
  let copyText = passTwo;
  navigator.clipboard.writeText(copyText);
  alert("Copied the text: " + copyText);
}

clipboardOne.addEventListener("click", copy, false);
clipboardTwo.addEventListener("click", copyTwo, false);

function generateRandom(toGenerate) {
  if (withNumbers.checked === true && withSymbols.checked === true) {
    for (let i = 0; i < pwLength; i++) {
      let randomNum = Math.floor(Math.random() * characters.length) + 1;
      toGenerate.push(characters[randomNum]);
    }
  } else if (withNumbers.checked === true) {
    for (let i = 0; i < pwLength; i++) {
      let randomNum = Math.floor(Math.random() * removedSymbols.length) + 1;
      toGenerate.push(removedSymbols[randomNum]);
    }
    console.log(removedSymbols.length);
    console.log("numbers checked");
  } else if (withSymbols.checked === true) {
    for (let i = 0; i < pwLength; i++) {
      let randomNum = Math.floor(Math.random() * removedNumbers.length) + 1;
      toGenerate.push(removedNumbers[randomNum]);
    }

    console.log("symbols checked");
  } else {
    console.log("none selected");

    for (let i = 0; i < pwLength; i++) {
      let randomNum = Math.floor(Math.random() * noChecked.length) + 1;
      toGenerate.push(noChecked[randomNum]);
    }
  }
}

console.log(passwordLength.value);

function toggleTheme() {
  if (toggle.checked) {
    page.classList.replace("light", "dark");
  } else {
    page.classList.replace("dark", "light");
  }
}

toggle.addEventListener("click", toggleTheme, false);
